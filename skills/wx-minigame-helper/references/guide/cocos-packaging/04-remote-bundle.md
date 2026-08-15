# 04 远程包（核心）

## 1. 什么是远程包

远程包 = 勾选 **Is Remote Bundle** 的 Asset Bundle，构建后**不进入代码包**，而是生成在 `remote/` 文件夹，开发者把它上传到远程服务器（CDN），运行时从网络下载。

如果项目启用了远程包，默认除了 internal、main、start-scene 以外的包（即使是 resources 包）都会被构建为远程包（构建到 remote 文件夹下）。可以在构建面板勾选“配置主包为远程包”，这样 main 也会被构建为远程包。

【重要】微信小游戏不允许将脚本（JavaScript/TypeScript代码）放在远程包里执行，远程包只能用于存放图片、音频、模型、配置表等非代码的资源文件。

## 2. 配置流程（完整四步）

完整步骤：

1. **启用远程包**：在“项目设置 - Bundle 配置” 面板中的“小游戏”选项卡中，勾选“单独配置”，并勾选“微信小游戏”的“远程包”选项
2. **配置 bundle 文件夹为 Bundle**：资源文件夹勾选 Is Bundle
3. **构建**：构建面板勾选 **MD5 Cache**（推荐），设置 **资源服务器地址**（例如填入“https://cdn.remote-domain.com/assets/”），点击构建
4. **上传**：构建完成后把发布包目录下的 `remote` 文件夹完整上传到资源服务器，可参考[官方文档](https://docs.cocos.com/creator/3.8/manual/zh/asset/cache-manager.html#%E4%B8%8A%E4%BC%A0%E8%B5%84%E6%BA%90%E5%88%B0%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8) 
5. **删除**：删除本地发布包目录下的 `remote` 文件夹（否则打进本地包失去远程意义）

## 3. 运行时下载机制

### URL 组装规则

远程包加载时的 URL（源码 `downloader.ts:120-121`）：
```
{资源服务器地址}/remote/{bundleName}
```
即构建面板填的 `Resource Server Address` + `remote/` + bundle 名。

运行时适配层（`AssetManager.js:205-208`）：
```js
} else if (downloader.remoteBundles.indexOf(bundleName) !== -1) {
    url = `${downloader.remoteServerAddress}remote/${bundleName}`;
    cacheManager.makeBundleFolder(bundleName);  // 预建缓存目录
}
```

### 下载流程

`loadBundle('xxx')` 时：
1. 下载 `remote/xxx/config.json`（bundle 索引）
2. 如果 config 里 `isZip: true` → 下载 `res.{zipVersion}.zip` → 解压到缓存目录（`unzipAndCacheBundle`）
3. 非 zip → bundle base 指向远程 URL 目录，包内资源按需单独下载

### 业务代码

两种方式都可行：

```ts
// 方式 A：按 bundle 名加载（推荐，自动拼服务器地址）
assetManager.loadBundle('bundleName', (err, bundle) => {
    bundle.load('c/spriteFrame', SpriteFrame, (err2, sf) => { ... });
});

// 方式 B：直接传完整 URL
assetManager.loadBundle('http://192.168.110.149:8093/remote/bundleName', (err, bundle) => { ... });
```

包内资源加载与本地 bundle 完全一致，缓存由引擎自动处理。

## 4. 版本管理（重要！）

**更新服务器资源后必须更新版本号**，否则缓存命中旧文件。

两个机制：
- **MD5 Cache**：构建面板勾选后，文件名带内容哈希，资源变了 URL 就变，旧缓存自然失效
- **bundleVers**：`settings.json` 里每个 bundle 的版本号，URL 拼接时带上（`config.{version}.json`）。构建时会自动生成（基于 MD5）

实证（工作区 `settings.json`）：
```json
"bundleVers": {
    "internal": "a25b8",
    "main": "7cd7a",
    "resources": "a9b1e",
    "start-scene": "2bd4a",
    "sub-bundle": "7d59d"
}
```

## 5. start-scene 分包（首场景加速）

主包资源放远程后，首场景加载会变慢（要网络请求）。解决：构建面板勾选 **初始场景分包**（Start Scene Asset Bundle）。

效果：
- 首场景及其依赖资源构建到 `assets/start-scene/` bundle
- 留在本地，不放远程
- 启动时引擎自动从本地加载，加快首屏加载速度


## 6. 远程包 vs 分包（选择指南）

| | 远程包 | 小游戏分包 |
|---|---|---|
| 资源位置 | 你自己的服务器/CDN | 微信服务器 |
| 占包体 | 不占任何包体额度 | 占总包 30M |
| 更新方式 | 随时替换（配版本号） | 需发版 |
| 网络依赖 | 必须联网下载 | 首次需下载分包 |
| 适合 | 大资源、频繁更新资源 | 中等资源、功能模块 |

## 7. 常见坑

1. **忘了删除本地 remote 文件夹** → 远程资源被打进本地包，白搭
2. **server 地址没配或配错** → 运行时 404，加载失败
3. **版本号没更新** → 缓存命中旧资源，"改了没生效"
4. **zip 压缩类型没配远程** → 官方要求 Zip 必须配远程包（本地 zip 无意义）
5. **测试时域名未配置** → 微信开发者工具菜单栏打开“工具 -> 详情 -> 本地设置”页面，勾选 不校验安全域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 选项。
6. 脚本文件**不允许**放入远程包。

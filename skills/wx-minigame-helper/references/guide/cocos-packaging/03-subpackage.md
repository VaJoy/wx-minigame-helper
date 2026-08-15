# 03 小游戏分包

## 1. 什么是小游戏分包

分包是微信平台提供的包体拆分机制：把游戏内容拆成主包 + 多个分包，启动只下载主包，运行中用 `wx.loadSubpackage()` 按需下载分包。

Cocos 侧的配置：把某个 Asset Bundle 的 **压缩类型** 设置为 **小游戏分包**。

## 2. 配置方法

1. “项目设置” - “Bundle 配置” 界面中，“微信小游戏”一栏的 **压缩类型** 选“游戏分包”
2. 选中资源文件夹 → 勾选 **Is Bundle**
3. 如果主包较大，可以在构建时把“主包压缩类型”也设为"小游戏分包"，这样会把 main 包也构建为分包。


## 3. 构建产物

构建后该 bundle 被放进 `build/wechatgame/subpackages/{bundleName}/` 目录。

同时微信的 `game.json` 会自动生成分包声明（`subpackages` 字段）：

```js
/** game.json **/

{
  "deviceOrientation": "landscapeRight",
  "subpackages": [
    {
      "name": "bundleName",
      "root": "subpackages/bundleName/"
    }
  ]
}
```

## 4. 运行时加载

引擎自动处理分包加载，不需要手动调 `wx.loadSubpackage`。

运行时源码（`platforms/minigame/common/engine/AssetManager.js:187-198`）：
```js
if (subpackages[bundleName]) {
    // ① 分包：走微信 loadSubpackage
    loadSubpackage(bundleName, options.onFileProgress, (err) => {
        // 加载完成后读 config.json
        downloadJson(`subpackages/${bundleName}/config.${suffix}json`, ...);
    });
} else if (downloader.remoteBundles.indexOf(bundleName) !== -1) {
    // ② 远程包：走 CDN
} else {
    // ③ 本地包
}
```

`subpackages` 映射来自 `settings.json` 的 `assets.subpackages` 数组（`AssetManager.js:462-463` 初始化时填充）。

业务代码用标准接口即可：
```ts
assetManager.loadBundle('bundleName', (err, bundle) => {
    bundle.load('close_button/spriteFrame', SpriteFrame, ...);
});
```

## 5. 分包与远程包互斥

如果“压缩类型”选择了“小游戏分包”，则无法启用远程包的功能。
同理，如果开启了远程包功能，（除了在构建配置面板可以设置主包压缩类型为“小游戏分包”），分包都无法配置为“小游戏分包”。

## 6. 微信分包限制

| 限制项 | 额度 |
|---|---|
| 主包 + 所有分包合计 | 30M（部分场景 20M，以微信后台校验为准） |
| 单个普通分包 | 不限大小 |
| 单个独立分包 | ≤ 4M |
| 主包 | ≤ 4M |

版本要求：微信 6.6.7 客户端 + 2.1.0 及以上基础库。

## 7. 引擎原生代码分包（另一种"分包"）

构建面板的 **引擎原生代码分包** 选项：把引擎的 WASM/Asm.js 代码模块放入子包，减少主包包体。这是引擎代码的分包，不是资源分包，但同样占分包额度。

## 8. 适用场景

分包适合：
- 中等体量资源（图集、配置表），想微信托管不搭服务器
- 整功能模块（商城系统、背包系统）按需加载
- 代码模块（bundle 里的脚本）

分包不适合：
- 超大资源（视频、大图集）——占总包 30M 额度，不如远程包
- 需要热更新的资源——分包跟代码包走，更新要发版

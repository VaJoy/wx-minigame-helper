# 05 运行时下载与缓存管理

## 1. 缓存是引擎自动做的

微信小游戏有文件系统但没有缓存机制，Cocos 引擎提供 `CacheManager` 接管。你**不需要自己写下载缓存逻辑**——远程资源下载后自动写入微信用户存储空间，下次直接读缓存。

入口：`assetManager.cacheManager`。

## 2. 缓存位置与结构

运行时源码（`platforms/minigame/common/engine/cache-manager.js`）：

- **缓存目录**：`wx.env.USER_DATA_PATH/gamecaches/`（微信用户存储空间，持久化，重启保留）
- **索引文件**：`cacheList.json`，记录 `url → {bundle, url, lastTime}` 映射
- **初始化**：启动时读索引重建 `cachedFiles` Map

```js
cacheManager.init = function () {
    this.cacheDir = `${getUserDataPath()}/${this.cacheDir}`;  // gamecaches
    const result = readJsonSync(`${this.cacheDir}/${this.cachedFileName}`);
    // 读 cacheList.json 恢复缓存索引
};
```

## 3. 三级查找（下载流程）

`AssetManager.js:93-120` 的 `download()` 函数实现三级查找：

```
加载 url →
  ① inLocal（本地包内）→ 直接读
  ② inCache（磁盘缓存）→ cacheManager.getCache(url) 拿本地路径，直接读 + 刷新 lastTime
  ③ 都没有 → downloadFile 远程下载 → 成功后 cacheFile() 写入缓存
```

写缓存是节流的（每 500ms 处理一个文件），避免频繁 IO 卡帧。

## 4. 版本管理

- URL 带版本号（`bundleVers`）：服务器资源更新 → 更新版本号 → URL 变化 → 重新下载
- 旧版本文件留在缓存里，靠 LRU 清理
- 构建时勾 MD5 Cache，让版本号自动跟随内容

## 5. 缓存控制接口

```ts
const cm = assetManager.cacheManager;

// 查询
cm.getCache(originUrl);   // 原 url → 本地缓存路径（命中返回路径，未命中返回 ''）
cm.getTemp(originUrl);    // 原 url → 临时文件路径

// 清理
cm.clearCache();          // 清空全部缓存（建议启动时调用，避免运行中 IO 卡顿）
cm.clearLRU();            // LRU 清理最久未用的（存储满时自动触发）
cm.removeCache(url);      // 移除单个

// 开关（小游戏平台有效）
cm.cacheEnabled = true;   // 是否缓存到用户存储（默认 true）
cm.autoClear = true;      // 存储满自动 LRU 清理（默认 true）
cm.cacheInterval = 500;   // 缓存写入间隔 ms
cm.deleteInterval = 500;  // 删除间隔 ms
```

## 6. LRU 自动清理

存储空间满时（`isOutOfStorage`），如果 `autoClear = true`，自动调 `clearLRU()`：
- 按 `lastTime` 排序，删最旧的 1/3
- 正在使用的 bundle（zip 包）不会被误删（有保护判断）

源码（`cache-manager.js`）：`clearLRU()` for 循环移除记录 + 内部的 `deferredDelete` 逐文件延迟删除。

## 7. 完整调用示例

```ts
// 加载远程 bundle（首次触发下载 + 缓存）
assetManager.loadBundle('chapter1', (err, bundle) => {
    if (err) { console.error('远程包加载失败', err); return; }
    bundle.load('bg/main', SpriteFrame, (err2, sf) => {
        // 包内资源同样自动走缓存
    });
});

// 直接加载远程单文件（不走 bundle）
assetManager.loadRemote('https://cdn.xxx.com/img/a.png', (err, tex) => { ... });

// 查询缓存路径
assetManager.loadRemote('http://example.com/bg.jpg', (err, texture) => {
    const cachePath = assetManager.cacheManager.getCache(texture.nativeUrl);
    console.log('缓存路径:', cachePath);
});

// 手动清理（游戏启动时）
assetManager.cacheManager.clearCache();
```

## 8. 注意事项

1. **微信用户存储空间有限**（约 200MB），超出触发 `isOutOfStorage` → 自动 LRU 清理
2. **视频不要走缓存**：大视频用 `VideoPlayer` 播远程 URL，系统播放器流式播放，不占用户存储
3. **临时文件 vs 缓存**：下载先落临时目录，再异步写入缓存目录；`getTemp` 查的是临时文件
4. **清空缓存时机**：`clearCache()` 在运行中调用会卡顿（大量文件 IO），官方建议启动时用
5. **bundle 卸载不会自动清缓存**：`assetManager.removeBundle()` 只移除 bundle 注册，磁盘缓存文件保留（下次加载还能命中）

## 9. 源码索引

| 文件 | 作用 |
|---|---|
| `platforms/minigame/common/engine/cache-manager.js` | 缓存管理器实现（小游戏通用） |
| `platforms/minigame/common/engine/AssetManager.js` | 下载适配层（三级查找 + 分包/远程/本地分支） |
| `cocos/asset/asset-manager/cache-manager.ts` | CacheManager 抽象基类 |
| `cocos/asset/asset-manager/downloader.ts` | 下载器（URL 组装、并发控制、重试） |

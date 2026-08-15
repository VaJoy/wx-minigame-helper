# 06 实践配方与常见坑

## 1. 推荐资源布局（按体量分类）

```
assets/
├── main/               # 主包：首场景必需的最小资源（loading UI、错误提示）
├── resources/          # 少量"按路径取用"的小资源（配置 JSON、小图标）
├── chapters/           # 自定义 bundle → 小游戏分包（中等资源，按关卡加载）
│   ├── chapter1/
│   └── chapter2/
└── media/              # 自定义 bundle → 远程包（大资源，放 CDN）
    ├── textures/
    ├── audio/
    └── video/
```

原则：
- **首场景必需** → 主包（或 start-scene 分包）
- **小资源按路径取** → resources（控制体积）
- **中等资源按模块加载** → 分包（微信托管，不占首包）
- **大资源/频繁更新** → 远程包（CDN，不占包体）

## 2. 分包 + 远程包混合布局（推荐）

一个项目同时用两种机制，各管各的 bundle：

```ts
// 加载分包（微信托管，适合代码模块/中等资源）
assetManager.loadBundle('chapter1', (err, bundle) => { ... });

// 加载远程包（CDN，适合大资源）
assetManager.loadBundle('media', (err, bundle) => { ... });
```

Cocos 官方论坛实践口径：**资源 bundle 勾远程，代码 bundle 设分包**。互不冲突。

## 3. 首包优化组合拳

主包超 4M 时按这个顺序处理：

1. 大资源配远程包 → 本地体积骤降
2. 中等资源配分包 → 移到 subpackages，不占首包
3. 勾选 **初始场景分包** → 首场景必需资源留本地 start-scene，加快启动
4. 勾选 **分离引擎**（微信引擎插件）→ 引擎代码不占主包
5. 勾选 **引擎原生代码分包** → WASM 入子包
6. 勾选 **MD5 Cache** → 版本控制

## 4. 常见坑速查

| 现象 | 原因 | 解决 |
|---|---|---|
| 远程包加载失败 404 | server 地址没配/配错，或 remote 没上传 | 检查构建面板 Resource Server Address，确认 remote 已传 CDN |
| 资源改了没生效 | 版本号没更新，缓存命中旧文件 | 更新 bundleVers 或勾 MD5 Cache |
| 远程资源占包体 | 忘了删本地 remote 文件夹 | 构建后删除发布包的 remote 目录 |
| 分包编辑器里远程选项灰色 | 压缩类型选了"小游戏分包" | 二选一，换压缩类型或取消分包 |
| 运行中 clearCache 卡顿 | 运行中做大量文件 IO | 启动时调用 |
| 微信开发者工具远程 403 | 域名未配置 | 详情→本地设置→勾"不校验合法域名"（截图 details.png） |
| 视频加载慢/占存储 | 视频走了资源缓存 | 改用 VideoPlayer 播远程 URL，流式播放 |
| 图片报"不是有效图片" | 缓存了损坏文件 | `removeCache(url)` 清单个，或 clearCache |

## 5. 调试技巧

**查看当前缓存状态**：
```ts
// 看某资源是否已缓存
const path = assetManager.cacheManager.getCache('https://xxx/a.png');
console.log(path ? `已缓存: ${path}` : '未缓存');
```

**强制重新下载**（清缓存后重载）：
```ts
assetManager.cacheManager.removeCache(url);
assetManager.loadRemote(url, cb);  // 会重新下载
```

**真机测试缓存**：微信开发者工具**不限制缓存大小**（官方文档明确），测试缓存溢出/LRU 必须真机。

## 6. 视频的特殊处理

视频**不要**进 bundle（远程或本地都不建议）：
- 体积大，占包体/占缓存
- 播放用系统播放器流式播放，不需要预加载

正确做法：
```ts
// VideoPlayer 直接播远程 URL，不占包体不占缓存
videoPlayer.remoteURL = 'https://cdn.xxx.com/intro.mp4';
videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
videoPlayer.play();
```

## 7. 与其他模块的关系

- 分包/远程包的 bundle 加载底层 → 见 `cocos-asset-manager-guide`
- 坐标/适配（微信屏幕适配）→ 见 `cocos-ui-guide` / `cocos-coordinate-guide`
- 输入（触摸）→ 见 `cocos-input-guide`

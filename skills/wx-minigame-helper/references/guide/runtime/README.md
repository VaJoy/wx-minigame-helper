# 运行时机制

> 路径：`guide/runtime/`　|　本目录 5 篇，2 个子分类

## 子分类

| 子分类 | 文档数 |
|---|---|
| [基础库](client-lib/README.md) | 3 |
| [调试](debug/README.md) | 7 |

## 文档列表

| 文档 | 说明 |
|---|---|
| [Adapter](adapter.md) | 小游戏的运行环境在 iOS 上是 JavaScriptCore，在 Android 上是 V8，都是没有 BOM 和 DOM 的运行环境，没有全局的 document 和 window 对象。因此当你 |
| [小游戏的运行环境](env.md) | 微信小游戏运行在多种平台上：iOS（iPhone/iPad）微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。 |
| [JavaScript 支持情况](js-support.md) | 基于安全考虑，小程序中不支持动态执行 JS 代码，即： |
| [小游戏运行机制](operating-mechanism.md) | 小程序启动后，界面被展示给用户，此时小程序处于**前台** 状态。 |
| [小游戏更新机制](update-mechanism.md) | 开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说 |

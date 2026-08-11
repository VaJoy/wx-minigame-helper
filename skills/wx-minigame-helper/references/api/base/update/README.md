# 基础 / 更新机制

> 路径：`api/base/update/`　|　本目录 7 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [UpdateManager.applyUpdate()](UpdateManager.applyUpdate.md) | 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。 |
| [UpdateManager](UpdateManager.md) |  |
| [UpdateManager.onCheckForUpdate(function listener)](UpdateManager.onCheckForUpdate.md) | 监听向微信后台请求检查更新结果事件。微信在小程序每次启动（包括热启动）时自动检查更新，不需由开发者主动触发。 |
| [UpdateManager.onUpdateFailed(function listener)](UpdateManager.onUpdateFailed.md) | 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 |
| [UpdateManager.onUpdateReady(function listener)](UpdateManager.onUpdateReady.md) | 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 |
| [UpdateManager wx.getUpdateManager()](wx.getUpdateManager.md) | 获取**全局唯一** 的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。 |
| [wx.updateWeChatApp(Object object)](wx.updateWeChatApp.md) | 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。 |

# 开放接口 / 开放链接

> 路径：`api/open/openlink/`　|　本目录 7 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [PageManager.destroy()](PageManager.destroy.md) | 销毁开放页面实例。 |
| [Promise PageManager.load(Object object)](PageManager.load.md) | 提供OPENLINK加载活动、功能信息。 |
| [PageManager](PageManager.md) |  |
| [PageManager.off(string eventName, function callback)](PageManager.off.md) | 取消监听来自活动、功能向开发者产生的某些事件。 |
| [PageManager.on(string eventName, function callback)](PageManager.on.md) | 监听来自活动、功能向开发者产生的某些事件。 |
| [Promise PageManager.show(Object object)](PageManager.show.md) | 显示已经成功加载信息的开放页面活动、功能。如果调用前未执行 `.load({ ... })` 将自动调用1次并返回加载信息结果。 |
| [PageManager wx.createPageManager()](wx.createPageManager.md) | 小游戏开放页面管理器，用于启动微信内置的各种小游戏活动、功能页面。具体OPENLINK值由不同的能力渠道获得。 |

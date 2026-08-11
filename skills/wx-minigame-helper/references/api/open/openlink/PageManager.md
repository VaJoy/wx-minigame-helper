---
title: "PageManager"
type: api
category: api/open/openlink
api: "PageManager"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.html
---

# PageManager  
  
> 基础库 3.6.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

小游戏开放页面管理器实例。

## 方法

### [Promise PageManager.load(Object object)](<PageManager.load.md>)

提供OPENLINK加载活动、功能信息。

### [Promise PageManager.show(Object object)](<PageManager.show.md>)

显示已经成功加载信息的开放页面活动、功能。如果调用前未执行 `.load({ ... })` 将自动调用1次并返回加载信息结果。

### [PageManager.on(string eventName, function callback)](<PageManager.on.md>)

监听来自活动、功能向开发者产生的某些事件。

### [PageManager.off(string eventName, function callback)](<PageManager.off.md>)

取消监听来自活动、功能向开发者产生的某些事件。

### [PageManager.destroy()](<PageManager.destroy.md>)

销毁开放页面实例。

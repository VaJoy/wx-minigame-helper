---
title: "SocketTask"
type: api
category: api/network/websocket
api: "SocketTask"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.html
---

# SocketTask

> 基础库 1.7.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

WebSocket 任务，可通过 wx.connectSocket() 接口创建返回

## 方法

### [SocketTask.send(Object object)](<SocketTask.send.md>)

通过 WebSocket 连接发送数据

### [SocketTask.close(Object object)](<SocketTask.close.md>)

关闭 WebSocket 连接

### [SocketTask.onOpen(function listener)](<SocketTask.onOpen.md>)

监听 WebSocket 连接打开事件

### [SocketTask.onClose(function listener)](<SocketTask.onClose.md>)

监听 WebSocket 连接关闭事件

### [SocketTask.onError(function listener)](<SocketTask.onError.md>)

监听 WebSocket 错误事件

### [SocketTask.onMessage(function listener)](<SocketTask.onMessage.md>)

监听 WebSocket 接收到服务器的消息事件

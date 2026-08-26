---
title: "wx.cloud.connectContainer(Object object)"
type: api
category: api/cloud
api: "wx.cloud.connectContainer"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/websocket/miniprogram.html
---

# wx.cloud.connectContainer(Object object)

> **以 Promise 风格调用**：支持（不传 `success` / `fail` / `complete` 时返回 Promise）
> 
> **基础库要求**：最低 **2.21.1**

## 功能描述

与微信云托管服务建立 WebSocket 连接，**无需在管理后台配置 socket 合法域名**（走微信私有协议）。

使用前需已调用 [wx.cloud.init](wx.cloud.init.md)（全局一次）。

> **注意**：在 iOS 高性能+ 模式下，`connectContainer` 暂时无法携带微信身份（即服务端无法读取到 `x-wx-openid`）。

## 请求参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本 |
|---|---|---|---|---|---|
| config.env | string |  | 是 | 云环境 ID | 2.21.1 |
| service | string |  | 是 | 服务名 | 2.21.1 |
| path | string |  | 是 | 开发者服务器接口地址（不填默认根目录 `/`） | 2.21.1 |
| success | function |  | 否 | 接口调用成功的回调函数 | 2.21.1 |
| fail | function |  | 否 | 接口调用失败的回调函数 | 2.21.1 |
| complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | 2.21.1 |

> 如果希望返回 Promise，请勿传 `success`、`fail` 和 `complete`。

## 返回值

Promise resolve 的结果 / success 回调的结果是如下对象，包含用于收发消息和管理链接的 `socketTask` 属性：

| 属性 | 类型 | 说明 | 最低版本 |
|---|---|---|---|
| socketTask | [SocketTask](../network/websocket/SocketTask.md) | socket 对象，和 [wx.connectSocket](../network/websocket/wx.connectSocket.md) 返回值一样 | 2.21.1 |

## 示例代码

官方示例为小程序 `App.onLaunch` 写法；小游戏在 `game.js` 入口执行同样逻辑即可：

```js
// game.js（小游戏入口）
wx.cloud.init({
  traceUser: true
})

async function connectWs() {
  const { socketTask } = await wx.cloud.connectContainer({
    config: {
      env: 'wxrun-demo' // 替换自己的微信云托管的环境ID
    },
    service: 'ws', // 替换自己的服务名
    path: '/' // 不填默认根目录
  })

  socketTask.onOpen(function (res) {
    console.log('【WEBSOCKET】链接成功！')
    socketTask.send({
      data: '这是小游戏消息'
    })
  })
  socketTask.onMessage(function (res) {
    console.log('【WEBSOCKET】', res.data)
  })
  socketTask.onClose(function (res) {
    console.log('【WEBSOCKET】链接关闭！')
  })
  socketTask.onError(function (res) {
    console.log('【WEBSOCKET】链接错误！', res)
  })
}

connectWs()
```

## 注意事项

1. `socketTask` 的用法与 [wx.connectSocket](../network/websocket/wx.connectSocket.md) 返回的 [SocketTask](../network/websocket/SocketTask.md) 完全一致：`onOpen` 之后才能 `send`，需自行处理心跳保活与断线重连（工程实践见[网络与存储专题](../../topics/storage-network.md)）；
2. WebSocket 不受 `callContainer` 的 100KiB/1000KiB 包体限制，但仍建议控制单帧大小；
3. iOS 高性能+ 模式下无法携带微信身份，服务端拿不到 `x-wx-openid`，依赖身份识别的业务需注意降级。

## 关联与说明

- HTTP 版本（普通请求/响应）：[wx.cloud.callContainer](wx.cloud.callContainer.md)
- 初始化：[wx.cloud.init](wx.cloud.init.md)
- 完整官方示例工程：[wxcloud-websocket-express](../../topics/examples/wxcloud-websocket-express/readme.md)（Node.js + express-ws，服务端含同一用户单连接限制的实现参考）

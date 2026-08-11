---
title: "wx.onSocketOpen(function listener)"
type: api
category: api/network/websocket
api: "wx.onSocketOpen"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketOpen.html
---

# wx.onSocketOpen(function listener)  
  
推荐使用 [SocketTask](<SocketTask.md>) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听 WebSocket 连接打开事件。

## 参数

### function listener

WebSocket 连接打开事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
header | object | 连接成功的 HTTP 响应 Header | [2.0.0](<../../../guide/runtime/client-lib/compatibility.md>)

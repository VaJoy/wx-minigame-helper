---
title: "SocketTask.onMessage(function listener)"
type: api
category: api/network/websocket
api: "SocketTask.onMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onMessage.html
---

# SocketTask.onMessage(function listener)  
  
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听 WebSocket 接收到服务器的消息事件

## 参数

### function listener

WebSocket 接收到服务器的消息事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
data | string/ArrayBuffer | 服务器返回的消息

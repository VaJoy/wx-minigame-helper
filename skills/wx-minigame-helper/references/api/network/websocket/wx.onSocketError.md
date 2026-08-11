---
title: "wx.onSocketError(function listener)"
type: api
category: api/network/websocket
api: "wx.onSocketError"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/wx.onSocketError.html
---

# wx.onSocketError(function listener)  
  
推荐使用 [SocketTask](<SocketTask.md>) 的方式去管理 webSocket 链接，每一条链路的生命周期都更加可控，同时存在多个 webSocket 的链接的情况下使用 wx 前缀的方法可能会带来一些和预期不一致的情况。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听 WebSocket 错误事件。

## 参数

### function listener

WebSocket 错误事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息

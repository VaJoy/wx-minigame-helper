---
title: "wx.offVoIPChatInterrupted(function listener)"
type: api
category: api/media/voip
api: "wx.offVoIPChatInterrupted"
source: https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.offVoIPChatInterrupted.html
---

# wx.offVoIPChatInterrupted(function listener)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

移除被动断开实时语音通话事件的监听函数

## 参数

### function listener

onVoIPChatInterrupted 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onVoIPChatInterrupted(listener)
    wx.offVoIPChatInterrupted(listener) // 需传入与监听时同一个的函数对象

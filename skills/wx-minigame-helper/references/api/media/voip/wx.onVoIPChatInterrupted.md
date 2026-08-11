---
title: "wx.onVoIPChatInterrupted(function listener)"
type: api
category: api/media/voip
api: "wx.onVoIPChatInterrupted"
source: https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatInterrupted.html
---

# wx.onVoIPChatInterrupted(function listener)  
  
> 基础库 2.7.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听被动断开实时语音通话事件。包括小游戏切入后端时断开

## 参数

### function listener

被动断开实时语音通话事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
errCode | Number | 错误码  
errMsg | String | 调用结果（错误原因）

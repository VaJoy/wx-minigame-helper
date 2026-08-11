---
title: "wx.onVoIPChatStateChanged(function listener)"
type: api
category: api/media/voip
api: "wx.onVoIPChatStateChanged"
source: https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatStateChanged.html
---

# wx.onVoIPChatStateChanged(function listener)  
  
> 基础库 2.16.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听房间状态变化事件。

## 参数

### function listener

房间状态变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
code | Number | 事件码  
data | object | 附加信息  
errCode | Number | 错误码  
errMsg | String | 调用结果

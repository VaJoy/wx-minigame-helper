---
title: "wx.onVoIPChatMembersChanged(function listener)"
type: api
category: api/media/voip
api: "wx.onVoIPChatMembersChanged"
source: https://developers.weixin.qq.com/minigame/dev/api/media/voip/wx.onVoIPChatMembersChanged.html
---

# wx.onVoIPChatMembersChanged(function listener)  
  
> 基础库 2.7.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调

## 参数

### function listener

实时语音通话成员在线状态变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
openIdList | Array.<String> | 还在实时语音通话中的成员 openId 名单  
errCode | Number | 错误码  
errMsg | String | 调用结果

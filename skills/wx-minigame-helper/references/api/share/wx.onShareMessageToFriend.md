---
title: "wx.onShareMessageToFriend(function listener)"
type: api
category: api/share
api: "wx.onShareMessageToFriend"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareMessageToFriend.html
---

# wx.onShareMessageToFriend(function listener)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听主域接收`wx.shareMessageToFriend`接口的成功失败通知事件

## 参数

### function listener

主域接收`wx.shareMessageToFriend`接口的成功失败通知事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
success | boolean | 是否成功  
errMsg | string | 错误信息

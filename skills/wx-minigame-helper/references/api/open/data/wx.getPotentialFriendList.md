---
title: "wx.getPotentialFriendList(Object object)"
type: api
category: api/open/data
api: "wx.getPotentialFriendList"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html
---

# wx.getPotentialFriendList(Object object)  
  
> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.WxFriendInteraction
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。该接口需要用户授权，且只在开放数据域下可用。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
list | Array.<[FriendInfo](<FriendInfo.md>)> | 可能对游戏感兴趣的未注册好友名单

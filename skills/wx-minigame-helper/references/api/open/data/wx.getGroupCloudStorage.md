---
title: "wx.getGroupCloudStorage(Object object)"
type: api
category: api/open/data
api: "wx.getGroupCloudStorage"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html
---

# wx.getGroupCloudStorage(Object object)  
  
> 基础库 1.9.92 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.WxFriendInteraction
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口需要用户授权，且只在开放数据域下可用。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
shareTicket | string |  | 否 | 群分享对应的 shareTicket。shareTicket 与 groupid 只需要传其中一个，建议使用 groupid |   
groupid | string |  | 否 | 对应群的 opengid。可通过主域中的 wx.getGroupEnterInfo 接口获取。shareTicket 与 groupid 只需要传其中一个，建议使用 groupid | [3.8.8](<../../../guide/runtime/client-lib/compatibility.md>)  
keyList | Array.<string> |  | 是 | 要拉取的 key 列表 |   
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
data | Array.<[UserGameData](<UserGameData.md>)> | 群同玩成员的托管数据

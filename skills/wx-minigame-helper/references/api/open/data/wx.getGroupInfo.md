---
title: "wx.getGroupInfo(Object object)"
type: api
category: api/open/data
api: "wx.getGroupInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html
---

# wx.getGroupInfo(Object object)

> 基础库 2.10.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.WxFriendInteraction
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取群信息。该接口需要用户授权，且只在开放数据域下可用。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
openGId | string |  | 是 | 群 openGId，可通过 `wx.getGroupEnterInfo` 或 `wx.getShareInfo` 获取  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
name | string | 群名称

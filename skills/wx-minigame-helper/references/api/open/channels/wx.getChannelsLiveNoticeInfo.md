---
title: "wx.getChannelsLiveNoticeInfo(Object object)"
type: api
category: api/open/channels
api: "wx.getChannelsLiveNoticeInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.getChannelsLiveNoticeInfo.html
---

# wx.getChannelsLiveNoticeInfo(Object object)  
  
> 基础库 2.19.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取视频号直播预告信息

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
finderUserName | string |  | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
noticeId | string | 预告 id |   
status | number | 预告状态：0可用 1取消 2已用 |   
startTime | string | 开始时间 |   
headUrl | string | 直播封面 |   
nickname | string | 视频号昵称 |   
reservable | boolean | 是否可预约 |   
otherInfos | Array.<Object> | 除最近的一条预告信息外，其他的预告信息列表（注意：每次最多返回按时间戳增序排列的15个预告信息，其中时间最近的那个预告信息会在接口其他的返回参数中展示，其余的预告信息会在该字段中展示）。 | [2.24.6](<../../../guide/runtime/client-lib/compatibility.md>)

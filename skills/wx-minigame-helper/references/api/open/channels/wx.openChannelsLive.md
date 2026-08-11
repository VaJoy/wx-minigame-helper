---
title: "wx.openChannelsLive(Object object)"
type: api
category: api/open/channels
api: "wx.openChannelsLive"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/channels/wx.openChannelsLive.html
---

# wx.openChannelsLive(Object object)  
  
> 基础库 2.15.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

打开视频号直播

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
finderUserName | string |  | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取  
feedId | string |  | 否 | 直播 feedId，通过 getChannelsLiveInfo 接口获取（基础库 v2.19.2 之前的版本需要填写）  
nonceId | string |  | 否 | 直播 nonceId，通过 getChannelsLiveInfo 接口获取（基础库 v2.19.2 之前的版本需要填写）  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

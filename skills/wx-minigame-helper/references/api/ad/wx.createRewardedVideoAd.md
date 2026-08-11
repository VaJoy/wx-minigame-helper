---
title: "RewardedVideoAd wx.createRewardedVideoAd(Object object)"
type: api
category: api/ad
api: "wx.createRewardedVideoAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createRewardedVideoAd.html
---

# [RewardedVideoAd](<RewardedVideoAd.md>) wx.createRewardedVideoAd(Object object)

> 基础库 2.0.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建激励视频广告组件。请通过 [wx.getSystemInfoSync()](<../base/system/wx.getSystemInfoSync.md>) 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
adUnitId | string |  | 是 | 广告单元 id |   
multiton | boolean |  | 否 | 是否启用多例模式，默认为false | [2.8.0](<../../guide/runtime/client-lib/compatibility.md>)  
disableFallbackSharePage | boolean |  | 否 | 是否禁用分享页，默认为false | [3.7.7](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [RewardedVideoAd](<RewardedVideoAd.md>)

激励视频广告组件

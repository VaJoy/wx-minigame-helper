---
title: "RewardedVideoAd.offError(function listener)"
type: api
category: api/ad
api: "RewardedVideoAd.offError"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.offError.html
---

# RewardedVideoAd.offError(function listener)

## 功能描述

移除激励视频错误事件的监听函数

## 参数

### function listener

onError 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    RewardedVideoAd.onError(listener)
    RewardedVideoAd.offError(listener) // 需传入与监听时同一个的函数对象

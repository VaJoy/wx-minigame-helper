---
title: "InterstitialAd.offError(function listener)"
type: api
category: api/ad
api: "InterstitialAd.offError"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.offError.html
---

# InterstitialAd.offError(function listener)

## 功能描述

移除插屏错误事件的监听函数

## 参数

### function listener

onError 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    InterstitialAd.onError(listener)
    InterstitialAd.offError(listener) // 需传入与监听时同一个的函数对象

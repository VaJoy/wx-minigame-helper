---
title: "CustomAd.offError(function listener)"
type: api
category: api/ad
api: "CustomAd.offError"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offError.html
---

# CustomAd.offError(function listener)

## 功能描述

移除原生模板广告错误事件的监听函数

## 参数

### function listener

onError 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    CustomAd.onError(listener)
    CustomAd.offError(listener) // 需传入与监听时同一个的函数对象

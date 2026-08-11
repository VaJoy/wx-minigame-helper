---
title: "CustomAd.offLoad(function listener)"
type: api
category: api/ad
api: "CustomAd.offLoad"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offLoad.html
---

# CustomAd.offLoad(function listener)

## 功能描述

移除原生模板广告加载事件的监听函数

## 参数

### function listener

onLoad 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    CustomAd.onLoad(listener)
    CustomAd.offLoad(listener) // 需传入与监听时同一个的函数对象

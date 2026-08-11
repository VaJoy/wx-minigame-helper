---
title: "CustomAd.offResize(function listener)"
type: api
category: api/ad
api: "CustomAd.offResize"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offResize.html
---

# CustomAd.offResize(function listener)

## 功能描述

移除原生模板广告宽高回调事件的监听函数

## 参数

### function listener

onResize 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    CustomAd.onResize(listener)
    CustomAd.offResize(listener) // 需传入与监听时同一个的函数对象

---
title: "CustomAd.offClose(function listener)"
type: api
category: api/ad
api: "CustomAd.offClose"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offClose.html
---

# CustomAd.offClose(function listener)

## 功能描述

移除原生模板广告关闭事件的监听函数

## 参数

### function listener

onClose 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    CustomAd.onClose(listener)
    CustomAd.offClose(listener) // 需传入与监听时同一个的函数对象

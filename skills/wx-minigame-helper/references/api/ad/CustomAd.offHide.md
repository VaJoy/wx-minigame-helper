---
title: "CustomAd.offHide(function listener)"
type: api
category: api/ad
api: "CustomAd.offHide"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offHide.html
---

# CustomAd.offHide(function listener)

> 基础库 2.14.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除原生模板广告隐藏事件的监听函数

## 参数

### function listener

onHide 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    CustomAd.onHide(listener)
    CustomAd.offHide(listener) // 需传入与监听时同一个的函数对象

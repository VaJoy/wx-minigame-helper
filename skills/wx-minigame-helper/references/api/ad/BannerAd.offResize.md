---
title: "BannerAd.offResize(function listener)"
type: api
category: api/ad
api: "BannerAd.offResize"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.offResize.html
---

# BannerAd.offResize(function listener)

## 功能描述

移除 banner 广告尺寸变化事件的监听函数

## 参数

### function listener

onResize 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    BannerAd.onResize(listener)
    BannerAd.offResize(listener) // 需传入与监听时同一个的函数对象

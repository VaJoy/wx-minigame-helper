---
title: "GridAd.offLoad(function listener)"
type: api
category: api/ad
api: "GridAd.offLoad"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.offLoad.html
---

# GridAd.offLoad(function listener)

从基础库 [2.30.2](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护

## 功能描述

移除 grid(格子) 广告加载事件的监听函数

## 参数

### function listener

onLoad 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GridAd.onLoad(listener)
    GridAd.offLoad(listener) // 需传入与监听时同一个的函数对象

---
title: "InnerAudioContext.offWaiting(function listener)"
type: api
category: api/media/audio
api: "InnerAudioContext.offWaiting"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offWaiting.html
---

# InnerAudioContext.offWaiting(function listener)

> 基础库 1.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除音频加载中事件的监听函数

## 参数

### function listener

onWaiting 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    InnerAudioContext.onWaiting(listener)
    InnerAudioContext.offWaiting(listener) // 需传入与监听时同一个的函数对象

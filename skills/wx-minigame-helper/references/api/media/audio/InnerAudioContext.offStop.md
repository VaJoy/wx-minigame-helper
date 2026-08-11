---
title: "InnerAudioContext.offStop(function listener)"
type: api
category: api/media/audio
api: "InnerAudioContext.offStop"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offStop.html
---

# InnerAudioContext.offStop(function listener)

> 基础库 1.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除音频停止事件的监听函数

## 参数

### function listener

onStop 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    InnerAudioContext.onStop(listener)
    InnerAudioContext.offStop(listener) // 需传入与监听时同一个的函数对象

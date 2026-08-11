---
title: "InnerAudioContext.offTimeUpdate(function listener)"
type: api
category: api/media/audio
api: "InnerAudioContext.offTimeUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offTimeUpdate.html
---

# InnerAudioContext.offTimeUpdate(function listener)

> 基础库 1.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除音频播放进度更新事件的监听函数

## 参数

### function listener

onTimeUpdate 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    InnerAudioContext.onTimeUpdate(listener)
    InnerAudioContext.offTimeUpdate(listener) // 需传入与监听时同一个的函数对象

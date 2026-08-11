---
title: "InnerAudioContext.offCanplay(function listener)"
type: api
category: api/media/audio
api: "InnerAudioContext.offCanplay"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.offCanplay.html
---

# InnerAudioContext.offCanplay(function listener)

> 基础库 1.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除音频进入可以播放状态的事件的监听函数

## 参数

### function listener

onCanplay 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    InnerAudioContext.onCanplay(listener)
    InnerAudioContext.offCanplay(listener) // 需传入与监听时同一个的函数对象

---
title: "wx.offAudioInterruptionEnd(function listener)"
type: api
category: api/base/app-event
api: "wx.offAudioInterruptionEnd"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html
---

# wx.offAudioInterruptionEnd(function listener)

> 基础库 1.8.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

移除音频中断结束事件的监听函数

## 参数

### function listener

onAudioInterruptionEnd 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onAudioInterruptionEnd(listener)
    wx.offAudioInterruptionEnd(listener) // 需传入与监听时同一个的函数对象

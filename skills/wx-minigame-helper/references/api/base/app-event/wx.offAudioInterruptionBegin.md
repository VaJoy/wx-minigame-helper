---
title: "wx.offAudioInterruptionBegin(function listener)"
type: api
category: api/base/app-event
api: "wx.offAudioInterruptionBegin"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html
---

# wx.offAudioInterruptionBegin(function listener)

> 基础库 1.8.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

移除音频因为受到系统占用而被中断开始事件的监听函数

## 参数

### function listener

onAudioInterruptionBegin 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onAudioInterruptionBegin(listener)
    wx.offAudioInterruptionBegin(listener) // 需传入与监听时同一个的函数对象

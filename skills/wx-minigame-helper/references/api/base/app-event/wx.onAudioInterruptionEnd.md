---
title: "wx.onAudioInterruptionEnd(function listener)"
type: api
category: api/base/app-event
api: "wx.onAudioInterruptionEnd"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html
---

# wx.onAudioInterruptionEnd(function listener)  
  
> 基础库 1.8.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功

## 参数

### function listener

音频中断结束事件的监听函数

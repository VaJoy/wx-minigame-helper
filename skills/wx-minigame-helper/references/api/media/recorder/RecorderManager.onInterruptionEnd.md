---
title: "RecorderManager.onInterruptionEnd(function listener)"
type: api
category: api/media/recorder
api: "RecorderManager.onInterruptionEnd"
source: https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html
---

# RecorderManager.onInterruptionEnd(function listener)

> 基础库 2.3.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。

## 参数

### function listener

录音中断结束事件的监听函数

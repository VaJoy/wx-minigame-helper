---
title: "wx.onAudioInterruptionBegin(function listener)"
type: api
category: api/base/app-event
api: "wx.onAudioInterruptionBegin"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html
---

# wx.onAudioInterruptionBegin(function listener)

> 基础库 1.8.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天、有声广告开始播放、实名认证页面弹出等。此事件触发后，小程序内所有音频会暂停。

## 参数

### function listener

音频因为受到系统占用而被中断开始事件的监听函数

---
title: "DelayNode WebAudioContext.createDelay(number maxDelayTime)"
type: api
category: api/media/audio
api: "WebAudioContext.createDelay"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createDelay.html
---

# DelayNode WebAudioContext.createDelay(number maxDelayTime)

## 功能描述

创建一个DelayNode

## 参数

### number maxDelayTime

最大延迟时间

## 返回值

### DelayNode

## 示例代码

示例代码
    
    
    let audioCtx = wx.createWebAudioContext()
    const delayNode = audioCtx.createDelay(5)

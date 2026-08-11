---
title: "DynamicsCompressorNode WebAudioContext.createDynamicsCompressor()"
type: api
category: api/media/audio
api: "WebAudioContext.createDynamicsCompressor"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createDynamicsCompressor.html
---

# DynamicsCompressorNode WebAudioContext.createDynamicsCompressor()

## 功能描述

创建一个DynamicsCompressorNode

## 返回值

### DynamicsCompressorNode

## 示例代码

示例代码
    
    
    let audioCtx = wx.createWebAudioContext()
    let compressor = audioCtx.createDynamicsCompressor()
    
    compressor.threshold.value = -50
    compressor.knee.value = 40
    compressor.ratio.value = 12
    compressor.attack.value = 0
    compressor.release.value = 0.25

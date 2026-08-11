---
title: "Float32Array AudioBuffer.getChannelData(number channel)"
type: api
category: api/media/audio
api: "AudioBuffer.getChannelData"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/AudioBuffer.getChannelData.html
---

# Float32Array AudioBuffer.getChannelData(number channel)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

返回一个 Float32Array，包含了带有频道的PCM数据，由频道参数定义（有0代表第一个频道）

## 参数

### number channel

要获取特定通道数据的索引

## 返回值

### Float32Array

## 示例代码

示例代码
    
    
    const audioCtx = wx.createWebAudioContext()
    const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
    const nowBuffering = myArrayBuffer.getChannelData(channel);

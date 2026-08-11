---
title: "AudioBuffer WebAudioContext.createBuffer(number numOfChannels, number length, number sampleRate)"
type: api
category: api/media/audio
api: "WebAudioContext.createBuffer"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createBuffer.html
---

# [AudioBuffer](<AudioBuffer.md>) WebAudioContext.createBuffer(number numOfChannels, number length, number sampleRate)

## 功能描述

创建一个AudioBuffer，代表着一段驻留在内存中的短音频

## 参数

### number numOfChannels

定义了 buffer 中包含的声频通道数量的整数

### number length

代表 buffer 中的样本帧数的整数

### number sampleRate

线性音频样本的采样率，即每一秒包含的关键帧的个数

## 返回值

### [AudioBuffer](<AudioBuffer.md>)

buffer 返回一个AudioBuffer实例

## 示例代码

示例代码
    
    
    const audioCtx = wx.createWebAudioContext()
    const channels = 2, frameCount = audioCtx.sampleRate * 2.0
    const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)

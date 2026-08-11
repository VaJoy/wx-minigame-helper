---
title: "ScriptProcessorNode WebAudioContext.createScriptProcessor(number bufferSize, number numberOfInputChannels, number numberOfOutputChannels)"
type: api
category: api/media/audio
api: "WebAudioContext.createScriptProcessor"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createScriptProcessor.html
---

# ScriptProcessorNode WebAudioContext.createScriptProcessor(number bufferSize, number numberOfInputChannels, number numberOfOutputChannels)

## 功能描述

创建一个ScriptProcessorNode

## 参数

### number bufferSize

缓冲区大小，以样本帧为单位

### number numberOfInputChannels

用于指定输入node的声道的数量

### number numberOfOutputChannels

用于指定输出node的声道的数量

## 返回值

### ScriptProcessorNode

## 示例代码

示例代码
    
    
    let audioCtx = wx.createWebAudioContext()
    const sampleSize = 4096
    audioCtx.createScriptProcessor(sampleSize, 1, 1)

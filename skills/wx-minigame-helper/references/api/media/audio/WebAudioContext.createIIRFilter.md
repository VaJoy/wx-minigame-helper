---
title: "IIRFilterNode WebAudioContext.createIIRFilter(Array.<number> feedforward, Array.<number> feedback)"
type: api
category: api/media/audio
api: "WebAudioContext.createIIRFilter"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createIIRFilter.html
---

# IIRFilterNode WebAudioContext.createIIRFilter(Array.<number> feedforward, Array.<number> feedback)

## 功能描述

创建一个IIRFilterNode

## 参数

### Array.<number> feedforward

一个浮点值数组，指定IIR滤波器传递函数的前馈(分子)系数。

### Array.<number> feedback

一个浮点值数组，指定IIR滤波器传递函数的反馈(分母)系数。

## 返回值

### IIRFilterNode

## 示例代码
    
    
    let lowPassCoefs = [
      {
        frequency: 200,
        feedforward: [0.00020298, 0.0004059599, 0.00020298],
        feedback: [1.0126964558, -1.9991880801, 0.9873035442]
      },
      {
        frequency: 500,
        feedforward: [0.0012681742, 0.0025363483, 0.0012681742],
        feedback: [1.0317185917, -1.9949273033, 0.9682814083]
      },
      {
        frequency: 1000,
        feedforward: [0.0050662636, 0.0101325272, 0.0050662636],
        feedback: [1.0632762845, -1.9797349456, 0.9367237155]
      },
      {
        frequency: 5000,
        feedforward: [0.1215955842, 0.2431911684, 0.1215955842],
        feedback: [1.2912769759, -1.5136176632, 0.7087230241]
      }
    ]
    
    const feedForward = lowPassCoefs[filterNumber].feedforward
    const feedBack = lowPassCoefs[filterNumber].feedback
    const iirFilter = audioContext.createIIRFilter(feedForward, feedBack)

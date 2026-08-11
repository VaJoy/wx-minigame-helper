---
title: "AnalyserNode WebAudioContext.createAnalyser()"
type: api
category: api/media/audio
api: "WebAudioContext.createAnalyser"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.createAnalyser.html
---

# AnalyserNode WebAudioContext.createAnalyser()

> 基础库 2.22.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建一个 AnalyserNode 。可以用来获取音频时间和频率数据，以及实现数据可视化。

## 返回值

### AnalyserNode

## 示例代码

示例代码
    
    
    const audioCtx = wx.createWebAudioContext();
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

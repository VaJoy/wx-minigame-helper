---
title: "AudioBuffer WebAudioContext.decodeAudioData(ArrayBuffer audioData, function successCallback, function errorCallback)"
type: api
category: api/media/audio
api: "WebAudioContext.decodeAudioData"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.decodeAudioData.html
---

# [AudioBuffer](<AudioBuffer.md>) WebAudioContext.decodeAudioData(ArrayBuffer audioData, function successCallback, function errorCallback)

## 功能描述

异步解码一段资源为AudioBuffer。

## 参数

### ArrayBuffer audioData

一个包含音频文件数据的 ArrayBuffer

### function successCallback

在音频数据解码成功时被调用，参数为解码后的AudioBuffer

### function errorCallback

在音频数据解码失败时被调用

## 返回值

### [AudioBuffer](<AudioBuffer.md>)

## 示例代码

示例
    
    
    wx.request({
      url: url, // 音频 url
      responseType: 'arraybuffer',
      success: res => {
        audioCtx.decodeAudioData(res.data, buffer => {
          console.log(buffer)
        }, err => {
          console.error('decodeAudioData fail', err)
        })
      }
    })

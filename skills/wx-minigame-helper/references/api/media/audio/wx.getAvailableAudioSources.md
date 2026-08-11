---
title: "wx.getAvailableAudioSources(Object object)"
type: api
category: api/media/audio
api: "wx.getAvailableAudioSources"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.getAvailableAudioSources.html
---

# wx.getAvailableAudioSources(Object object)

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持

## 功能描述

获取当前支持的音频输入源

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  audioSources | Array.<string> | 支持的音频输入源列表，可在 [RecorderManager.start()](<../recorder/RecorderManager.start.md>) 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource  
| |  合法值 | 说明  
---|---  
auto | 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用  
buildInMic | 手机麦克风，仅限 iOS  
headsetMic | 耳机麦克风，仅限 iOS  
mic | 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android  
camcorder | 同 mic，适用于录制音视频内容，仅限 Android  
voice_communication | 同 mic，适用于实时沟通，仅限 Android  
voice_recognition | 同 mic，适用于语音识别，仅限 Android

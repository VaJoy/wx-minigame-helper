---
title: "RecorderManager.onStop(function listener)"
type: api
category: api/media/recorder
api: "RecorderManager.onStop"
source: https://developers.weixin.qq.com/minigame/dev/api/media/recorder/RecorderManager.onStop.html
---

# RecorderManager.onStop(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听录音结束事件

## 参数

### function listener

录音结束事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
tempFilePath | string | 录音文件的临时路径 (本地路径)  
duration | number | 录音总时长，单位：ms  
fileSize | number | 录音文件大小，单位：Byte

---
title: "Video.onProgress(function listener)"
type: api
category: api/media/video
api: "Video.onProgress"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onProgress.html
---

# Video.onProgress(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听视频下载（缓冲）事件

## 参数

### function listener

视频下载（缓冲）事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
buffered | number | 当前的缓冲进度，缓冲进度区间为 (0~100]，100表示缓冲完成  
duration | number | 视频的总时长，单位为秒

---
title: "Video.offProgress(function listener)"
type: api
category: api/media/video
api: "Video.offProgress"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offProgress.html
---

# Video.offProgress(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除视频下载（缓冲）事件的监听函数

## 参数

### function listener

onProgress 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    Video.onProgress(listener)
    Video.offProgress(listener) // 需传入与监听时同一个的函数对象

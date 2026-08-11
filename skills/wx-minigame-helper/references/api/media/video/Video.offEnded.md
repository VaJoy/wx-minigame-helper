---
title: "Video.offEnded(function listener)"
type: api
category: api/media/video
api: "Video.offEnded"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offEnded.html
---

# Video.offEnded(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除视频播放到末尾事件的监听函数

## 参数

### function listener

onEnded 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    Video.onEnded(listener)
    Video.offEnded(listener) // 需传入与监听时同一个的函数对象

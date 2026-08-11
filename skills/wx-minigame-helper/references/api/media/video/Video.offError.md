---
title: "Video.offError(function listener)"
type: api
category: api/media/video
api: "Video.offError"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offError.html
---

# Video.offError(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除视频错误事件的监听函数

## 参数

### function listener

onError 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    Video.onError(listener)
    Video.offError(listener) // 需传入与监听时同一个的函数对象

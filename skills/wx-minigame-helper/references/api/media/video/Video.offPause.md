---
title: "Video.offPause(function listener)"
type: api
category: api/media/video
api: "Video.offPause"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offPause.html
---

# Video.offPause(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除视频暂停事件的监听函数

## 参数

### function listener

onPause 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    Video.onPause(listener)
    Video.offPause(listener) // 需传入与监听时同一个的函数对象

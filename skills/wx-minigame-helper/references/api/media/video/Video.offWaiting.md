---
title: "Video.offWaiting(function listener)"
type: api
category: api/media/video
api: "Video.offWaiting"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.offWaiting.html
---

# Video.offWaiting(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除视频由于需要缓冲下一帧而停止时触发的监听函数

## 参数

### function listener

onWaiting 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    Video.onWaiting(listener)
    Video.offWaiting(listener) // 需传入与监听时同一个的函数对象

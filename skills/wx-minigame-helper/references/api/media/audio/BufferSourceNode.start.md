---
title: "BufferSourceNode.start(number when, number offset, number duration)"
type: api
category: api/media/audio
api: "BufferSourceNode.start"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/BufferSourceNode.start.html
---

# BufferSourceNode.start(number when, number offset, number duration)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

音频源开始播放

## 参数

### number when

延迟播放的时间，单位是秒。与 AudioContext 使用相同的时间坐标系统。如果 when 小于 AudioContext.currentTime, 或者是 0，声音立即被播放。 默认值是 0

### number offset

音频开始播放的位置，单位是秒。默认值是 0

### number duration

音频播放的持续时间，单位是秒。如果这个参数没有被指定，声音播放到自然结束或者使用stop() 方法结束。使用这个参数的功能与调用 start(when, offset) 和调用 stop(when+duration)效果完全相同

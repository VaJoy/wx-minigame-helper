---
title: "wx.setPreferredFramesPerSecond(number fps)"
type: api
category: api/render/frame
api: "wx.setPreferredFramesPerSecond"
source: https://developers.weixin.qq.com/minigame/dev/api/render/frame/wx.setPreferredFramesPerSecond.html
---

# wx.setPreferredFramesPerSecond(number fps)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。

## 参数

### number fps

帧率，有效范围 1 - 60。

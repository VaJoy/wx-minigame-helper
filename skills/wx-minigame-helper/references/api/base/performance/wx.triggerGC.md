---
title: "wx.triggerGC()"
type: api
category: api/base/performance
api: "wx.triggerGC"
source: https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html
---

# wx.triggerGC()

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。

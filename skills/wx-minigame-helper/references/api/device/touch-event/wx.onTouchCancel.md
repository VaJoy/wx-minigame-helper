---
title: "wx.onTouchCancel(function listener)"
type: api
category: api/device/touch-event
api: "wx.onTouchCancel"
source: https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchCancel.html
---

# wx.onTouchCancel(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听触点失效事件

## 参数

### function listener

触点失效事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
touches | Array.<[Touch](<Touch.md>)> | 当前所有触摸点的列表  
changedTouches | Array.<[Touch](<Touch.md>)> | 触发此次事件的触摸点列表  
timeStamp | number | 事件触发时的时间戳  
  
## 注意

  * 在 Windows/Mac 设备上，将会由鼠标事件转义而成。

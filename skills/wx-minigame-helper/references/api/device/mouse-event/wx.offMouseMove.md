---
title: "wx.offMouseMove(function listener)"
type: api
category: api/device/mouse-event
api: "wx.offMouseMove"
source: https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.offMouseMove.html
---

# wx.offMouseMove(function listener)

## 功能描述

移除鼠标移动事件的监听函数

## 参数

### function listener

onMouseMove 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onMouseMove(listener)
    wx.offMouseMove(listener) // 需传入与监听时同一个的函数对象

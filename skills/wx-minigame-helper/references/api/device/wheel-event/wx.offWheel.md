---
title: "wx.offWheel(function listener)"
type: api
category: api/device/wheel-event
api: "wx.offWheel"
source: https://developers.weixin.qq.com/minigame/dev/api/device/wheel-event/wx.offWheel.html
---

# wx.offWheel(function listener)

## 功能描述

移除鼠标滚轮事件的监听函数

## 参数

### function listener

onWheel 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onWheel(listener)
    wx.offWheel(listener) // 需传入与监听时同一个的函数对象

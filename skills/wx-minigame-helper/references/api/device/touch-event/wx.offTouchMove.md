---
title: "wx.offTouchMove(function listener)"
type: api
category: api/device/touch-event
api: "wx.offTouchMove"
source: https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.offTouchMove.html
---

# wx.offTouchMove(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除触点移动事件的监听函数

## 参数

### function listener

onTouchMove 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onTouchMove(listener)
    wx.offTouchMove(listener) // 需传入与监听时同一个的函数对象

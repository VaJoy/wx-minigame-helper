---
title: "wx.offWindowResize(function listener)"
type: api
category: api/ui/window
api: "wx.offWindowResize"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.offWindowResize.html
---

# wx.offWindowResize(function listener)

## 功能描述

移除窗口尺寸变化事件的监听函数

## 参数

### function listener

onWindowResize 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onWindowResize(listener)
    wx.offWindowResize(listener) // 需传入与监听时同一个的函数对象

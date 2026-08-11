---
title: "wx.offKeyboardComplete(function listener)"
type: api
category: api/device/keyboard
api: "wx.offKeyboardComplete"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardComplete.html
---

# wx.offKeyboardComplete(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除键盘收起的事件的监听函数

## 参数

### function listener

onKeyboardComplete 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onKeyboardComplete(listener)
    wx.offKeyboardComplete(listener) // 需传入与监听时同一个的函数对象

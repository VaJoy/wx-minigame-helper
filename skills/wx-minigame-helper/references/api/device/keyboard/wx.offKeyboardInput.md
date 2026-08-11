---
title: "wx.offKeyboardInput(function listener)"
type: api
category: api/device/keyboard
api: "wx.offKeyboardInput"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardInput.html
---

# wx.offKeyboardInput(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除键盘输入事件的监听函数

## 参数

### function listener

onKeyboardInput 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onKeyboardInput(listener)
    wx.offKeyboardInput(listener) // 需传入与监听时同一个的函数对象

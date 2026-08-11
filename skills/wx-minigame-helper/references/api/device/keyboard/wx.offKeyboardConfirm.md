---
title: "wx.offKeyboardConfirm(function listener)"
type: api
category: api/device/keyboard
api: "wx.offKeyboardConfirm"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardConfirm.html
---

# wx.offKeyboardConfirm(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除用户点击键盘 Confirm 按钮时的事件的监听函数

## 参数

### function listener

onKeyboardConfirm 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onKeyboardConfirm(listener)
    wx.offKeyboardConfirm(listener) // 需传入与监听时同一个的函数对象

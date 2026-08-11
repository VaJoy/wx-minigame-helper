---
title: "wx.offKeyboardHeightChange(function listener)"
type: api
category: api/device/keyboard
api: "wx.offKeyboardHeightChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyboardHeightChange.html
---

# wx.offKeyboardHeightChange(function listener)

> 基础库 2.21.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除键盘高度变化事件的监听函数

## 参数

### function listener

onKeyboardHeightChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onKeyboardHeightChange(listener)
    wx.offKeyboardHeightChange(listener) // 需传入与监听时同一个的函数对象

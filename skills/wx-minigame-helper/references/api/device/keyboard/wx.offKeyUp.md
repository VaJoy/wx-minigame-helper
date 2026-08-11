---
title: "wx.offKeyUp(function listener)"
type: api
category: api/device/keyboard
api: "wx.offKeyUp"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.offKeyUp.html
---

# wx.offKeyUp(function listener)  
  
> 基础库 2.10.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除键盘按键弹起事件的监听函数

## 参数

### function listener

onKeyUp 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onKeyUp(listener)
    wx.offKeyUp(listener) // 需传入与监听时同一个的函数对象

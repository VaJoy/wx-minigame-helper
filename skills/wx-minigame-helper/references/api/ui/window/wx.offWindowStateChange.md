---
title: "wx.offWindowStateChange(function listener)"
type: api
category: api/ui/window
api: "wx.offWindowStateChange"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.offWindowStateChange.html
---

# wx.offWindowStateChange(function listener)  
  
> 基础库 3.8.8 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

移除小程序窗口状态变化事件的监听函数

## 参数

### function listener

onWindowStateChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onWindowStateChange(listener)
    wx.offWindowStateChange(listener) // 需传入与监听时同一个的函数对象

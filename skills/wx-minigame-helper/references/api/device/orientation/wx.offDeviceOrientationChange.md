---
title: "wx.offDeviceOrientationChange(function listener)"
type: api
category: api/device/orientation
api: "wx.offDeviceOrientationChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.offDeviceOrientationChange.html
---

# wx.offDeviceOrientationChange(function listener)  
  
> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除屏幕转向切换事件的监听函数

## 参数

### function listener

onDeviceOrientationChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onDeviceOrientationChange(listener)
    wx.offDeviceOrientationChange(listener) // 需传入与监听时同一个的函数对象

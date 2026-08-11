---
title: "wx.offDeviceMotionChange(function listener)"
type: api
category: api/device/motion
api: "wx.offDeviceMotionChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/motion/wx.offDeviceMotionChange.html
---

# wx.offDeviceMotionChange(function listener)  
  
> 基础库 2.9.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除设备方向变化事件的监听函数

## 参数

### function listener

onDeviceMotionChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onDeviceMotionChange(listener)
    wx.offDeviceMotionChange(listener) // 需传入与监听时同一个的函数对象

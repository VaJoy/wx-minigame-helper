---
title: "wx.offScreenRecordingStateChanged(function listener)"
type: api
category: api/device/screen
api: "wx.offScreenRecordingStateChanged"
source: https://developers.weixin.qq.com/minigame/dev/api/device/screen/wx.offScreenRecordingStateChanged.html
---

# wx.offScreenRecordingStateChanged(function listener)

> 基础库 3.1.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 iOS 版** ：支持
> 
> **微信 Android 版** ：不支持

## 功能描述

移除用户录屏事件的监听函数

## 参数

### function listener

onScreenRecordingStateChanged 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    // 监听用户录屏事件
    const handler = function (res) {
      console.log(res.state)
    }
    wx.onScreenRecordingStateChanged(handler)
    
    // 取消监听用户录屏事件
    wx.offScreenRecordingStateChanged(handler)
    
    

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onScreenRecordingStateChanged(listener)
    wx.offScreenRecordingStateChanged(listener) // 需传入与监听时同一个的函数对象

---
title: "wx.offBLEConnectionStateChange(function listener)"
type: api
category: api/device/bluetooth-ble
api: "wx.offBLEConnectionStateChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.offBLEConnectionStateChange.html
---

# wx.offBLEConnectionStateChange(function listener)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除蓝牙低功耗连接状态改变事件的监听函数

## 参数

### function listener

onBLEConnectionStateChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onBLEConnectionStateChange(listener)
    wx.offBLEConnectionStateChange(listener) // 需传入与监听时同一个的函数对象

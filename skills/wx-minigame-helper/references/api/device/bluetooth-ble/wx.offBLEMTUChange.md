---
title: "wx.offBLEMTUChange(function listener)"
type: api
category: api/device/bluetooth-ble
api: "wx.offBLEMTUChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.offBLEMTUChange.html
---

# wx.offBLEMTUChange(function listener)

> 基础库 2.20.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除蓝牙低功耗的最大传输单元变化事件的监听函数

## 参数

### function listener

onBLEMTUChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onBLEMTUChange(listener)
    wx.offBLEMTUChange(listener) // 需传入与监听时同一个的函数对象

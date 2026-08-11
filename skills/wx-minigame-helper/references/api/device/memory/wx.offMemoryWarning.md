---
title: "wx.offMemoryWarning(function listener)"
type: api
category: api/device/memory
api: "wx.offMemoryWarning"
source: https://developers.weixin.qq.com/minigame/dev/api/device/memory/wx.offMemoryWarning.html
---

# wx.offMemoryWarning(function listener)

> 基础库 2.9.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除内存不足告警事件的监听函数

## 参数

### function listener

onMemoryWarning 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onMemoryWarning(listener)
    wx.offMemoryWarning(listener) // 需传入与监听时同一个的函数对象

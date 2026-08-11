---
title: "wx.offGyroscopeChange(function listener)"
type: api
category: api/device/gyroscope
api: "wx.offGyroscopeChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/gyroscope/wx.offGyroscopeChange.html
---

# wx.offGyroscopeChange(function listener)  
  
> 基础库 2.9.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除陀螺仪数据变化事件的监听函数

## 参数

### function listener

onGyroscopeChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onGyroscopeChange(listener)
    wx.offGyroscopeChange(listener) // 需传入与监听时同一个的函数对象

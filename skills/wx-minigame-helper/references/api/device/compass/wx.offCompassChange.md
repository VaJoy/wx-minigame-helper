---
title: "wx.offCompassChange(function listener)"
type: api
category: api/device/compass
api: "wx.offCompassChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/compass/wx.offCompassChange.html
---

# wx.offCompassChange(function listener)  
  
> 基础库 2.9.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除罗盘数据变化事件的监听函数

## 参数

### function listener

onCompassChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onCompassChange(listener)
    wx.offCompassChange(listener) // 需传入与监听时同一个的函数对象

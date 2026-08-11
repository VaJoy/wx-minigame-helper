---
title: "wx.offUnhandledRejection(function listener)"
type: api
category: api/base/app-event
api: "wx.offUnhandledRejection"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.offUnhandledRejection.html
---

# wx.offUnhandledRejection(function listener)

> 基础库 2.10.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除未处理的 Promise 拒绝事件的监听函数

## 参数

### function listener

onUnhandledRejection 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onUnhandledRejection(listener)
    wx.offUnhandledRejection(listener) // 需传入与监听时同一个的函数对象

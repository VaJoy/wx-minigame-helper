---
title: "wx.offNetworkStatusChange(function listener)"
type: api
category: api/device/network
api: "wx.offNetworkStatusChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.offNetworkStatusChange.html
---

# wx.offNetworkStatusChange(function listener)

> 基础库 2.9.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除网络状态变化事件的监听函数

## 参数

### function listener

onNetworkStatusChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onNetworkStatusChange(listener)
    wx.offNetworkStatusChange(listener) // 需传入与监听时同一个的函数对象

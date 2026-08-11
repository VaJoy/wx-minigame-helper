---
title: "wx.offDirectAdStatusChange(function listener)"
type: api
category: api/ad
api: "wx.offDirectAdStatusChange"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.offDirectAdStatusChange.html
---

# wx.offDirectAdStatusChange(function listener)

> 基础库 3.11.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除监听直玩广告状态变化的监听函数

## 参数

### function listener

onDirectAdStatusChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onDirectAdStatusChange(listener)
    wx.offDirectAdStatusChange(listener) // 需传入与监听时同一个的函数对象

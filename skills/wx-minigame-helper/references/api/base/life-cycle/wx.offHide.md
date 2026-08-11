---
title: "wx.offHide(function listener)"
type: api
category: api/base/life-cycle
api: "wx.offHide"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offHide.html
---

# wx.offHide(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除小游戏隐藏到后台事件的监听函数

## 参数

### function listener

onHide 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onHide(listener)
    wx.offHide(listener) // 需传入与监听时同一个的函数对象

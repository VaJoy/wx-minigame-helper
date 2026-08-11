---
title: "wx.offShow(function listener)"
type: api
category: api/base/life-cycle
api: "wx.offShow"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.offShow.html
---

# wx.offShow(function listener)  
  
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除小游戏回到前台的事件的监听函数

## 参数

### function listener

onShow 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onShow(listener)
    wx.offShow(listener) // 需传入与监听时同一个的函数对象

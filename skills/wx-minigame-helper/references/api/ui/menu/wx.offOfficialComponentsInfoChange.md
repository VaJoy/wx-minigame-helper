---
title: "wx.offOfficialComponentsInfoChange(function listener)"
type: api
category: api/ui/menu
api: "wx.offOfficialComponentsInfoChange"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.offOfficialComponentsInfoChange.html
---

# wx.offOfficialComponentsInfoChange(function listener)

> 基础库 3.7.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持

## 功能描述

移除官方组件信息变化事件的监听函数

## 参数

### function listener

onOfficialComponentsInfoChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    wx.onOfficialComponentsInfoChange(listener)
    wx.offOfficialComponentsInfoChange(listener) // 需传入与监听时同一个的函数对象

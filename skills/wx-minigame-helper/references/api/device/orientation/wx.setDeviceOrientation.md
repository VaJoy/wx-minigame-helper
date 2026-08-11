---
title: "wx.setDeviceOrientation(Object object)"
type: api
category: api/device/orientation
api: "wx.setDeviceOrientation"
source: https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.setDeviceOrientation.html
---

# wx.setDeviceOrientation(Object object)

> 基础库 2.26.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

切换横竖屏。接口调用成功后会触发 wx.onDeviceOrientationChange 事件

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  value | string |  | 是 | 表示切换为横屏还是竖屏  
| |  合法值 | 说明  
---|---  
landscape | 横屏  
portrait | 竖屏  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 注意

  * PC小程序处于全屏时，无法切换横竖屏。

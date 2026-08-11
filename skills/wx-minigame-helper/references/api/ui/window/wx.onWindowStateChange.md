---
title: "wx.onWindowStateChange(function listener)"
type: api
category: api/ui/window
api: "wx.onWindowStateChange"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.onWindowStateChange.html
---

# wx.onWindowStateChange(function listener)  
  
> 基础库 3.8.8 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

监听小程序窗口状态变化事件。仅适用于 PC 平台

## 参数

### function listener

小程序窗口状态变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
state | string | 改变的窗口状态，可能的值为：  
  
  * 'minimize'：窗口最小化
  * 'normalize'：窗口恢复正常尺寸
  * 'maximize'：窗口最大化 |

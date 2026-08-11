---
title: "wx.onKeyDown(function listener)"
type: api
category: api/device/keyboard
api: "wx.onKeyDown"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyDown.html
---

# wx.onKeyDown(function listener)  
  
> 基础库 2.10.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听键盘按键按下事件，仅适用于 PC 平台

## 参数

### function listener

键盘按键按下事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
key | string | 同 Web 规范 KeyEvent key 属性  
code | string | 同 Web 规范 KeyEvent code 属性  
timeStamp | number | 事件触发时的时间戳

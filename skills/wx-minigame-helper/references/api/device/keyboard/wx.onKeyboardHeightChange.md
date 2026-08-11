---
title: "wx.onKeyboardHeightChange(function listener)"
type: api
category: api/device/keyboard
api: "wx.onKeyboardHeightChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyboardHeightChange.html
---

# wx.onKeyboardHeightChange(function listener)  
  
> 基础库 2.21.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听键盘高度变化事件

## 参数

### function listener

键盘高度变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
height | number | 键盘高度  
  
## 示例代码
    
    
    wx.onKeyboardHeightChange(res => {
      console.log(res.height)
    })

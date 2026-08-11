---
title: "wx.onGamepadConnected(function listener)"
type: api
category: api/device/gamepad
api: "wx.onGamepadConnected"
source: https://developers.weixin.qq.com/minigame/dev/api/device/gamepad/wx.onGamepadConnected.html
---

# wx.onGamepadConnected(function listener)

> 基础库 3.6.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听用户已连接游戏手柄的事件。

## 参数

### function listener

用户已连接游戏手柄的事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
gamepad | string | 本次连接到的 Gamepad 实例。  
  
## 示例代码
    
    
      wx.onGamepadConnected((e) => {
        console.log(e.gamepad)
      })
    
      wx.offGamepadConnected()

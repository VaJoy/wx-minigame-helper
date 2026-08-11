---
title: "wx.onBLEConnectionStateChange(function listener)"
type: api
category: api/device/bluetooth-ble
api: "wx.onBLEConnectionStateChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html
---

# wx.onBLEConnectionStateChange(function listener)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听蓝牙低功耗连接状态改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等

## 参数

### function listener

蓝牙低功耗连接状态改变事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
deviceId | string | 蓝牙设备 id  
connected | boolean | 是否处于已连接状态  
  
## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/pQU51zmz7a3K> "在开发者工具中预览效果")
    
    
    wx.onBLEConnectionStateChange(function(res) {
      // 该方法回调中可以用于处理连接意外断开等异常情况
      console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
    })

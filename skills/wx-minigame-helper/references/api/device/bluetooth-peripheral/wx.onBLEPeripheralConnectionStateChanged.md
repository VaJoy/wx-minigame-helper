---
title: "wx.onBLEPeripheralConnectionStateChanged(function listener)"
type: api
category: api/device/bluetooth-peripheral
api: "wx.onBLEPeripheralConnectionStateChanged"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html
---

# wx.onBLEPeripheralConnectionStateChanged(function listener)  
  
> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听当前外围设备被连接或断开连接事件

## 参数

### function listener

当前外围设备被连接或断开连接事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
deviceId | String | 连接状态变化的设备 id  
serverId | String | server 的 UUID  
connected | Boolean | 连接目前状态

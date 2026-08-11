---
title: "wx.onBLEMTUChange(function listener)"
type: api
category: api/device/bluetooth-ble
api: "wx.onBLEMTUChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-ble/wx.onBLEMTUChange.html
---

# wx.onBLEMTUChange(function listener)

> 基础库 2.20.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发）。

## 参数

### function listener

蓝牙低功耗的最大传输单元变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
deviceId | string | 蓝牙设备 id  
mtu | number | 最大传输单元  
  
## 示例代码

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/pQU51zmz7a3K> "在开发者工具中预览效果")
    
    
    wx.onBLEMTUChange(function (res) {
      console.log('bluetooth mtu is', res.mtu)
    })

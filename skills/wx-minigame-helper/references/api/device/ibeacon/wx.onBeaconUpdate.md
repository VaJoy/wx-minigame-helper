---
title: "wx.onBeaconUpdate(function listener)"
type: api
category: api/device/ibeacon
api: "wx.onBeaconUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconUpdate.html
---

# wx.onBeaconUpdate(function listener)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听 Beacon 设备更新事件，仅能注册一个监听

## 参数

### function listener

Beacon 设备更新事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
beacons | Array.<[BeaconInfo](<BeaconInfo.md>)> | 当前搜寻到的所有 Beacon 设备列表  
  
## 示例代码
    
    
    wx.onBeaconUpdate(res => {
       console.log(res.beacons)
    })

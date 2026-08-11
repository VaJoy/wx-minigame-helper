---
title: "wx.onBeaconServiceChange(function listener)"
type: api
category: api/device/ibeacon
api: "wx.onBeaconServiceChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/ibeacon/wx.onBeaconServiceChange.html
---

# wx.onBeaconServiceChange(function listener)

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听 Beacon 服务状态变化事件，仅能注册一个监听

## 参数

### function listener

Beacon 服务状态变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
available | boolean | 服务目前是否可用  
discovering | boolean | 目前是否处于搜索状态  
  
## 示例代码
    
    
    wx.onBeaconServiceChange(res => {
       console.log(res.available, res.discovering)
    })

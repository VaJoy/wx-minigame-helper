---
title: "Object wx.getBatteryInfoSync()"
type: api
category: api/device/battery
api: "wx.getBatteryInfoSync"
source: https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfoSync.html
---

# Object wx.getBatteryInfoSync()

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

[wx.getBatteryInfo](<wx.getBatteryInfo.md>) 的同步版本

## 返回值

### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
level | number | 设备电量，范围 1 - 100 |   
isCharging | boolean | 是否正在充电中 |   
isLowPowerModeEnabled | boolean | 是否处于省电模式 | [3.5.0](<../../../guide/runtime/client-lib/compatibility.md>)

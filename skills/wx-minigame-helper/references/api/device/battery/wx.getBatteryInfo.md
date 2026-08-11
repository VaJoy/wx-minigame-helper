---
title: "wx.getBatteryInfo(Object object)"
type: api
category: api/device/battery
api: "wx.getBatteryInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/device/battery/wx.getBatteryInfo.html
---

# wx.getBatteryInfo(Object object)  
  
> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取设备电池信息。同步 API [wx.getBatteryInfoSync](<wx.getBatteryInfoSync.md>) 在 iOS 上不可用。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
level | number | 设备电量，范围 1 - 100 |   
isCharging | boolean | 是否正在充电中 |   
isLowPowerModeEnabled | boolean | 是否处于省电模式 | [3.5.0](<../../../guide/runtime/client-lib/compatibility.md>)

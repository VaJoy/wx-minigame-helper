---
title: "Object wx.getSystemSetting()"
type: api
category: api/base/system
api: "wx.getSystemSetting"
source: https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemSetting.html
---

# Object wx.getSystemSetting()

> 基础库 2.25.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取设备设置

## 返回值

### Object

| 属性 | 类型 | 说明  
---|---|---|---  
|  bluetoothEnabled | boolean | 蓝牙的系统开关  
|  locationEnabled | boolean | 地理位置的系统开关  
|  wifiEnabled | boolean | Wi-Fi 的系统开关  
|  deviceOrientation | string | 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准）  
| |  合法值 | 说明  
---|---  
portrait | 竖屏  
landscape | 横屏  
  
## 示例代码
    
    
    const systemSetting = wx.getSystemSetting()
    
    console.log(systemSetting.bluetoothEnabled)
    console.log(systemSetting.deviceOrientation)
    console.log(systemSetting.locationEnabled)
    console.log(systemSetting.wifiEnabled)

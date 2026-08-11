---
title: "wx.onNetworkStatusChange(function listener)"
type: api
category: api/device/network
api: "wx.onNetworkStatusChange"
source: https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.onNetworkStatusChange.html
---

# wx.onNetworkStatusChange(function listener)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听网络状态变化事件

## 参数

### function listener

网络状态变化事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  isConnected | boolean | 当前是否有网络连接  
|  networkType | string | 网络类型  
| |  合法值 | 说明  
---|---  
wifi | wifi 网络  
2g | 2g 网络  
3g | 3g 网络  
4g | 4g 网络  
5g | 5g 网络  
unknown | Android 下不常见的网络类型  
none | 无网络  
  
## 示例代码
    
    
    wx.onNetworkStatusChange(function (res) {
      console.log(res.isConnected)
      console.log(res.networkType)
    })

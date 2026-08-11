---
title: "wx.getNetworkType(Object object)"
type: api
category: api/device/network
api: "wx.getNetworkType"
source: https://developers.weixin.qq.com/minigame/dev/api/device/network/wx.getNetworkType.html
---

# wx.getNetworkType(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取网络类型

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

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  networkType | string | 网络类型 |   
| |  合法值 | 说明  
---|---  
wifi | wifi 网络  
2g | 2g 网络  
3g | 3g 网络  
4g | 4g 网络  
5g | 5g 网络  
unknown | Android 下不常见的网络类型  
none | 无网络  
|  signalStrength | Number | 信号强弱，单位 dbm |   
|  hasSystemProxy | Boolean | 设备是否使用了网络代理 | [2.22.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  weakNet | Boolean | 是否处于弱网环境 | [3.5.3](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    wx.getNetworkType({
      success (res) {
        const networkType = res.networkType
        const weakNet = res.weakNet
      }
    })

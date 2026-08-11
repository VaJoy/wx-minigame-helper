---
title: "wx.createBLEPeripheralServer(Object object)"
type: api
category: api/device/bluetooth-peripheral
api: "wx.createBLEPeripheralServer"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html
---

# wx.createBLEPeripheralServer(Object object)

> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.bluetooth
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

建立本地作为蓝牙低功耗外围设备的服务端，可创建多个。

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

属性 | 类型 | 说明  
---|---|---  
server | [BLEPeripheralServer](<BLEPeripheralServer.md>) | 外围设备的服务端。

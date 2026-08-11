---
title: "BLEPeripheralServer.onCharacteristicUnsubscribed(function listener)"
type: api
category: api/device/bluetooth-peripheral
api: "BLEPeripheralServer.onCharacteristicUnsubscribed"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicUnsubscribed.html
---

# BLEPeripheralServer.onCharacteristicUnsubscribed(function listener)  
  
> 基础库 2.13.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听取消特征订阅事件，仅 iOS 支持。

## 参数

### function listener

取消特征订阅事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
serviceId | String | 蓝牙特征对应服务的 UUID  
characteristicId | String | 蓝牙特征的 UUID

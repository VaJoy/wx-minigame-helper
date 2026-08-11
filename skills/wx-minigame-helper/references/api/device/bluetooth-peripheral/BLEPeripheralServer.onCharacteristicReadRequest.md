---
title: "BLEPeripheralServer.onCharacteristicReadRequest(function listener)"
type: api
category: api/device/bluetooth-peripheral
api: "BLEPeripheralServer.onCharacteristicReadRequest"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicReadRequest.html
---

# BLEPeripheralServer.onCharacteristicReadRequest(function listener)  
  
> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听已连接的设备请求读当前外围设备的特征值事件。收到该消息后需要立刻调用 [writeCharacteristicValue](<BLEPeripheralServer.writeCharacteristicValue.md>) 写回数据，否则主机不会收到响应。

## 参数

### function listener

已连接的设备请求读当前外围设备的特征值事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
serviceId | String | 蓝牙特征对应服务的 UUID  
characteristicId | String | 蓝牙特征的 UUID  
callbackId | Number | 唯一标识码，调用 [writeCharacteristicValue](<BLEPeripheralServer.writeCharacteristicValue.md>) 时使用

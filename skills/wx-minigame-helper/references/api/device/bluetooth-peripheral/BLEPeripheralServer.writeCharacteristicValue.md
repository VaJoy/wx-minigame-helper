---
title: "BLEPeripheralServer.writeCharacteristicValue(Object Object)"
type: api
category: api/device/bluetooth-peripheral
api: "BLEPeripheralServer.writeCharacteristicValue"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html
---

# BLEPeripheralServer.writeCharacteristicValue(Object Object)  
  
> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

往指定特征写入二进制数据值，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅。

## 参数

### Object Object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
serviceId | String |  | 是 | 蓝牙特征对应服务的 UUID  
characteristicId | String |  | 是 | 蓝牙特征的 UUID  
value | ArrayBuffer |  | 是 | characteristic 对应的二进制值  
needNotify | Boolean |  | 是 | 是否需要通知主机 value 已更新  
callbackId | Number |  | 否 | 可选，处理回包时使用  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

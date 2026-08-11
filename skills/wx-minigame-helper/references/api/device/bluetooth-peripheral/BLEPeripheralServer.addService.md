---
title: "BLEPeripheralServer.addService(Object object)"
type: api
category: api/device/bluetooth-peripheral
api: "BLEPeripheralServer.addService"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.addService.html
---

# BLEPeripheralServer.addService(Object object)

> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

添加服务。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  service | Object |  | 是 | 描述service的Object  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  uuid | String |  | 是 | 蓝牙服务的 UUID  
|  characteristics | Array.<Object> |  | 是 | characteristics列表  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  uuid | String |  | 是 | characteristic 的 UUID  
|  properties | Object |  | 否 | 特征支持的操作  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  write | Boolean | false | 否 | 写  
|  writeNoResponse | Boolean | false | 否 | 无回复写  
|  read | Boolean | false | 否 | 读  
|  notify | Boolean | false | 否 | 订阅  
|  indicate | Boolean | false | 否 | 回包  
  
|  permission | Object |  | 否 | 特征权限  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  readable | Boolean | false | 否 | 可读  
|  writeable | Boolean | false | 否 | 可写  
|  readEncryptionRequired | Boolean | false | 否 | 加密读请求  
|  writeEncryptionRequired | Boolean | false | 否 | 加密写请求  
  
|  value | ArrayBuffer |  | 否 | 特征对应的二进制值  
|  descriptors | Array.<Object> |  | 否 | 描述符数据  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  uuid | String |  | 是 | Descriptor 的 UUID  
|  permission | Object |  | 否 | 描述符的权限  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  write | Boolean | false | 否 | 写  
|  read | Boolean | false | 否 | 读  
  
|  value | ArrayBuffer |  | 否 | 描述符数据  
  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

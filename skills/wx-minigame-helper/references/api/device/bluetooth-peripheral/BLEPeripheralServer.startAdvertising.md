---
title: "BLEPeripheralServer.startAdvertising(Object Object)"
type: api
category: api/device/bluetooth-peripheral
api: "BLEPeripheralServer.startAdvertising"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.startAdvertising.html
---

# BLEPeripheralServer.startAdvertising(Object Object)  
  
> 基础库 2.10.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

开始广播本地创建的外围设备。

## 参数

### Object Object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  advertiseRequest | Object |  | 是 | 广播自定义参数  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  connectable | Boolean | true | 否 | 当前设备是否可连接 |   
|  deviceName | String |  | 否 | 广播中 deviceName 字段，默认为空 |   
|  serviceUuids | Array.<String> |  | 否 | 要广播的服务 UUID 列表。使用 16/32 位 UUID 时请参考注意事项。 |   
|  manufacturerData | Array.<Object> |  | 否 | 广播的制造商信息。仅安卓支持，iOS 因系统限制无法定制。 |   
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  manufacturerId | String |  | 是 | 制造商ID，0x 开头的十六进制  
|  manufacturerSpecificData | ArrayBuffer |  | 否 | 制造商信息  
  
|  beacon | Object |  | 否 | 以 beacon 设备形式广播的参数。 | [2.20.1](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  uuid | String |  | 是 | Beacon 设备广播的 UUID  
|  major | Number |  | 是 | Beacon 设备的主 ID  
|  minor | Number |  | 是 | Beacon 设备的次 ID  
|  measuredPower | Number |  | 否 | 用于判断距离设备 1 米时 RSSI 大小的参考值  
  
|  powerLevel | String | medium | 否 | 广播功率  
| |  合法值 | 说明  
---|---  
low | 功率低  
medium | 功率适中  
high | 功率高  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 注意

  * Android 8.0.9 开始，支持直接使用 16/32/128 位 UUID；
  * Android 8.0.9 以下版本只支持 128 位 UUID，使用 16/32 位的 UUID 时需要进行补位（系统会自动识别是否属于预分配区间），可以参考[蓝牙指南](<../../../guide/device/ble.md>)；
  * iOS 必须直接使用 16 位的 UUID，不能补位到 128 位，否则系统组包时仍会按照 128 位传输。iOS 暂不支持 32 位 UUID。
  * iOS 同时只能发起一个广播，安卓支持同时发起多个广播。
  * 传 beacon 参数时，不能同时传入 deviceName，serviceUuids，manufacturerData 参数。

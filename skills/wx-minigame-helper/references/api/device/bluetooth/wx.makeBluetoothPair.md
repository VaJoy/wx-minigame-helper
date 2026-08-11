---
title: "wx.makeBluetoothPair(Object object)"
type: api
category: api/device/bluetooth
api: "wx.makeBluetoothPair"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth/wx.makeBluetoothPair.html
---

# wx.makeBluetoothPair(Object object)

> 基础库 2.12.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

蓝牙配对接口，仅安卓支持。

通常情况下（需要指定 `pin` 码或者密码时）系统会接管配对流程，直接调用 [wx.createBLEConnection](<../bluetooth-ble/wx.createBLEConnection.md>) 即可。该接口只应当在开发者不想让用户手动输入 `pin` 码且真机验证确认可以正常生效情况下用。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
deviceId | string |  | 是 | 蓝牙设备 id  
pin | string |  | 是 | pin 码，Base64 格式。  
timeout | number | 20000 | 否 | 超时时间，单位 ms  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

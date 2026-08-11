---
title: "BLEPeripheralServer.offCharacteristicUnsubscribed(function listener)"
type: api
category: api/device/bluetooth-peripheral
api: "BLEPeripheralServer.offCharacteristicUnsubscribed"
source: https://developers.weixin.qq.com/minigame/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicUnsubscribed.html
---

# BLEPeripheralServer.offCharacteristicUnsubscribed(function listener)

> 基础库 2.13.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除取消特征订阅事件的监听函数

## 参数

### function listener

onCharacteristicUnsubscribed 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    BLEPeripheralServer.onCharacteristicUnsubscribed(listener)
    BLEPeripheralServer.offCharacteristicUnsubscribed(listener) // 需传入与监听时同一个的函数对象

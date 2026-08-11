---
title: "UDPSocket.offClose(function listener)"
type: api
category: api/network/udp
api: "UDPSocket.offClose"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offClose.html
---

# UDPSocket.offClose(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除关闭事件的监听函数

## 参数

### function listener

onClose 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    UDPSocket.onClose(listener)
    UDPSocket.offClose(listener) // 需传入与监听时同一个的函数对象

---
title: "UDPSocket.offMessage(function listener)"
type: api
category: api/network/udp
api: "UDPSocket.offMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.offMessage.html
---

# UDPSocket.offMessage(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除收到消息的事件的监听函数

## 参数

### function listener

onMessage 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    UDPSocket.onMessage(listener)
    UDPSocket.offMessage(listener) // 需传入与监听时同一个的函数对象

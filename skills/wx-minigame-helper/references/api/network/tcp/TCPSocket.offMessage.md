---
title: "TCPSocket.offMessage(function listener)"
type: api
category: api/network/tcp
api: "TCPSocket.offMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offMessage.html
---

# TCPSocket.offMessage(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除当接收到数据的时触发该事件的监听函数

## 参数

### function listener

onMessage 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    TCPSocket.onMessage(listener)
    TCPSocket.offMessage(listener) // 需传入与监听时同一个的函数对象

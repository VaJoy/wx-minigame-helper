---
title: "TCPSocket.offClose(function listener)"
type: api
category: api/network/tcp
api: "TCPSocket.offClose"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offClose.html
---

# TCPSocket.offClose(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除一旦 socket 完全关闭就发出该事件的监听函数

## 参数

### function listener

onClose 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    TCPSocket.onClose(listener)
    TCPSocket.offClose(listener) // 需传入与监听时同一个的函数对象

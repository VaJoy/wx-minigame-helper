---
title: "TCPSocket.offError(function listener)"
type: api
category: api/network/tcp
api: "TCPSocket.offError"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offError.html
---

# TCPSocket.offError(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除当错误发生时触发的监听函数

## 参数

### function listener

onError 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    TCPSocket.onError(listener)
    TCPSocket.offError(listener) // 需传入与监听时同一个的函数对象

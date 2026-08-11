---
title: "TCPSocket.offBindWifi(function listener)"
type: api
category: api/network/tcp
api: "TCPSocket.offBindWifi"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.offBindWifi.html
---

# TCPSocket.offBindWifi(function listener)

> 基础库 3.1.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除当一个 socket 绑定当前 wifi 网络成功时触发该事件的监听函数

## 参数

### function listener

onBindWifi 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    TCPSocket.onBindWifi(listener)
    TCPSocket.offBindWifi(listener) // 需传入与监听时同一个的函数对象

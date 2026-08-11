---
title: "UDPSocket.setTTL(number ttl)"
type: api
category: api/network/udp
api: "UDPSocket.setTTL"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.setTTL.html
---

# UDPSocket.setTTL(number ttl)

> 基础库 2.18.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数

## 参数

### number ttl

ttl 参数可以是 0 到 255 之间

## 示例代码
    
    
      const udp = wx.createUDPSocket()
      udp.onListening(function () {
        udp.setTTL(64)
      })
      udp.bind()

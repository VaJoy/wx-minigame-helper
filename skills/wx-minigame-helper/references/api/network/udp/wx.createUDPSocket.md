---
title: "UDPSocket wx.createUDPSocket(string type, Object options)"
type: api
category: api/network/udp
api: "wx.createUDPSocket"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/wx.createUDPSocket.html
---

# [UDPSocket](<UDPSocket.md>) wx.createUDPSocket(string type, Object options)

> 基础库 2.7.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建一个 UDP Socket 实例。使用前请注意阅读[相关说明](<../../../guide/base-ability/network.md>)。

## 参数

### string type

> 基础库 2.18.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

套接字族，必须是 udp4 或 udp6，默认是 udp4

### Object options

配置参数，例如contextId: magicBrush环境下的contextId

## 返回值

### [UDPSocket](<UDPSocket.md>)

一个 UDP Socket 实例

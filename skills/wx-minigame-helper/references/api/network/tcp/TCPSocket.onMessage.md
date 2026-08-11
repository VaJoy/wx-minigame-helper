---
title: "TCPSocket.onMessage(function listener)"
type: api
category: api/network/tcp
api: "TCPSocket.onMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onMessage.html
---

# TCPSocket.onMessage(function listener)  
  
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听当接收到数据的时触发该事件

## 参数

### function listener

当接收到数据的时触发该事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  message | ArrayBuffer | 收到的消息  
|  remoteInfo | Object | 发送端地址信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  address | string | 发送消息的 socket 的地址  
|  family | string | 使用的协议族，为 IPv4 或者 IPv6  
|  port | number | 端口号  
  
|  localInfo | Object | 接收端地址信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  address | string | 接收消息的 socket 的地址  
|  family | string | 使用的协议族，为 IPv4 或者 IPv6  
|  port | number | 端口号

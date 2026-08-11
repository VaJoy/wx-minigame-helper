---
title: "SocketTask.onOpen(function listener)"
type: api
category: api/network/websocket
api: "SocketTask.onOpen"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.onOpen.html
---

# SocketTask.onOpen(function listener)  
  
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听 WebSocket 连接打开事件

## 参数

### function listener

WebSocket 连接打开事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  header | object | 连接成功的 HTTP 响应 Header | [2.0.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  profile | Object | 网络请求过程中一些调试信息 | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  fetchStart | number | 组件准备好使用 SOCKET 建立请求的时间，这发生在检查本地缓存之前  
|  domainLookUpStart | number | DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等  
|  domainLookUpEnd | number | DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等  
|  connectStart | number | 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间  
|  connectEnd | number | 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过  
|  rtt | number | 单次连接的耗时，包括 connect ，tls  
|  handshakeCost | number | 握手耗时  
|  cost | number | 上层请求到返回的耗时

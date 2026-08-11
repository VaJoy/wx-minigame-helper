---
title: "TCPSocket.onConnect(function listener)"
type: api
category: api/network/tcp
api: "TCPSocket.onConnect"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.onConnect.html
---

# TCPSocket.onConnect(function listener)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听当一个 socket 连接成功建立的时候触发该事件

## 参数

### function listener

当一个 socket 连接成功建立的时候触发该事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  useHttpDNS | boolean | 本次连接是否使用了 HttpDNS | [3.4.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  exception | Object | 网络请求过程中的一些异常信息（例如：TCPSocket.connect 传了 enableHttpDNS: true，但最终未使用 HttpDNS 时，exception 就会说明未使用 HttpDNS 的原因） | [3.4.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  reasons | Array.<Object> | 异常信息 | [3.4.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误原因  
|  errno | string | 错误码  
  
|  remoteInfo | Object | 发送端地址信息（目前仅iOS和Android端支持） | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  address | string | 发送消息的 socket 的地址 | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  family | string | 使用的协议族，为 IPv4 或者 IPv6 | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  port | number | 端口号 | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  localInfo | Object | 接收端地址信息（目前仅iOS和Android端支持） | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  address | string | 接收消息的 socket 的地址 | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  family | string | 使用的协议族，为 IPv4 或者 IPv6 | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  port | number | 端口号 | [3.4.1](<../../../guide/runtime/client-lib/compatibility.md>)

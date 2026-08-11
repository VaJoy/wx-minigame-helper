---
title: "UDPSocket.write(Object object)"
type: api
category: api/network/udp
api: "UDPSocket.write"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.write.html
---

# UDPSocket.write(Object object)

> 基础库 2.15.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数）

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
address | string |  | 是 | 要发消息的地址。在基础库 <= 2.9.3 版本必须是和本机同网段的 IP 地址，或安全域名列表内的域名地址；之后版本可以是任意 IP 和域名  
port | number |  | 是 | 要发送消息的端口号  
message | string/ArrayBuffer |  | 是 | 要发送的数据  
offset | number | 0 | 否 | 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效  
length | number | message.byteLength | 否 | 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效  
setBroadcast | boolean | false | 否 | 向指定地址发消息时，是否要开启广播，基础库 2.24.0 开始支持  
  
## 示例代码
    
    
      const udp = wx.createUDPSocket()
      udp.bind()
      udp.connect({
        address: '192.168.193.2',
        port: 8848,
      })
      udp.write({
        address: '192.168.193.2',
        port: 8848,
        message: 'hello, how are you'
      })

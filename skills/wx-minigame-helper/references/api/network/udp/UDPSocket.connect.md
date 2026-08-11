---
title: "UDPSocket.connect(Object object)"
type: api
category: api/network/udp
api: "UDPSocket.connect"
source: https://developers.weixin.qq.com/minigame/dev/api/network/udp/UDPSocket.connect.html
---

# UDPSocket.connect(Object object)

> 基础库 2.15.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

预先连接到指定的 IP 和 port，需要配合 write 方法一起使用

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
address | string |  | 是 | 要发消息的地址  
port | number |  | 是 | 要发送消息的端口号  
  
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

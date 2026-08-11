---
title: "TCPSocket.write(string|ArrayBuffer data)"
type: api
category: api/network/tcp
api: "TCPSocket.write"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.write.html
---

# TCPSocket.write(string|ArrayBuffer data)  
  
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

在 socket 上发送数据

## 参数

### string|ArrayBuffer data

要发送的数据

## 示例代码
    
    
      const tcp = wx.createTCPSocket()
      tcp.write('hello, how are you')

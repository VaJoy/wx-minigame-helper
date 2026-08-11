---
title: "TCPSocket.bindWifi(Object options)"
type: api
category: api/network/tcp
api: "TCPSocket.bindWifi"
source: https://developers.weixin.qq.com/minigame/dev/api/network/tcp/TCPSocket.bindWifi.html
---

# TCPSocket.bindWifi(Object options)

> 基础库 3.1.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

将 TCP Socket 绑定到当前 wifi 网络，成功后会触发 onBindWifi 事件（仅安卓支持）

## 参数

### Object options

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
BSSID | string |  | 是 | 当前 wifi 网络的 BSSID ，可通过 wx.getConnectedWifi 获取  
  
## 示例代码
    
    
      const tcp = wx.createTCPSocket()
      tcp.bindWifi({ BSSID: 'xxx' })
      tcp.onBindWifi(() => {})

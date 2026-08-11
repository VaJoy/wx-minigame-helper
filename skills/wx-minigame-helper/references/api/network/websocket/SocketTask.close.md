---
title: "SocketTask.close(Object object)"
type: api
category: api/network/websocket
api: "SocketTask.close"
source: https://developers.weixin.qq.com/minigame/dev/api/network/websocket/SocketTask.close.html
---

# SocketTask.close(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

关闭 WebSocket 连接

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
code | number | 1000（表示正常关闭连接） | 否 | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。  
reason | string |  | 否 | 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

---
title: "RequestTask.onChunkReceived(function listener)"
type: api
category: api/network/request
api: "RequestTask.onChunkReceived"
source: https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.onChunkReceived.html
---

# RequestTask.onChunkReceived(function listener)

> 基础库 2.20.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。

## 参数

### function listener

Transfer-Encoding Chunk Received 事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
data | ArrayBuffer | 返回的chunk buffer

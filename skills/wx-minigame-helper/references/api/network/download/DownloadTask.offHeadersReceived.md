---
title: "DownloadTask.offHeadersReceived(function listener)"
type: api
category: api/network/download
api: "DownloadTask.offHeadersReceived"
source: https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.offHeadersReceived.html
---

# DownloadTask.offHeadersReceived(function listener)

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除 HTTP Response Header 事件的监听函数

## 参数

### function listener

onHeadersReceived 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    DownloadTask.onHeadersReceived(listener)
    DownloadTask.offHeadersReceived(listener) // 需传入与监听时同一个的函数对象

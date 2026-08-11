---
title: "RequestTask"
type: api
category: api/network/request
api: "RequestTask"
source: https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.html
---

# RequestTask

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

网络请求任务对象

## 方法

### [RequestTask.abort()](<RequestTask.abort.md>)

中断请求任务

### [RequestTask.onHeadersReceived(function listener)](<RequestTask.onHeadersReceived.md>)

监听 HTTP Response Header 事件。会比请求完成事件更早

### [RequestTask.offHeadersReceived(function listener)](<RequestTask.offHeadersReceived.md>)

移除 HTTP Response Header 事件的监听函数

### [RequestTask.onChunkReceived(function listener)](<RequestTask.onChunkReceived.md>)

监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。

### [RequestTask.offChunkReceived(function listener)](<RequestTask.offChunkReceived.md>)

移除 Transfer-Encoding Chunk Received 事件的监听函数

## 示例代码
    
    
    const requestTask = wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data)
      }
    })
    requestTask.abort() // 取消请求任务

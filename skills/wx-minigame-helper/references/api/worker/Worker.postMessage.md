---
title: "Worker.postMessage(Object message)"
type: api
category: api/worker
api: "Worker.postMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.postMessage.html
---

# Worker.postMessage(Object message)

## 功能描述

向主线程/Worker 线程发送的消息。

## 参数

### Object message

需要发送的消息。

## 示例代码

worker 线程中
    
    
    worker.postMessage({
      msg: 'hello from worker'
    })
    

主线程中
    
    
    const worker = wx.createWorker('workers/request/index.js')
    
    worker.postMessage({
      msg: 'hello from main'
    })
    

## 提醒

在基础库版本2.20.2之前，postMessage仅支持传递可序列化的key-value对象。 在基础库2.20.2之后，postMessage支持传递任意类型的数据。

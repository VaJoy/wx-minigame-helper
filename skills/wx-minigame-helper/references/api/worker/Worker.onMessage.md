---
title: "Worker.onMessage(function listener)"
type: api
category: api/worker
api: "Worker.onMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onMessage.html
---

# Worker.onMessage(function listener)

## 功能描述

监听主线程/Worker 线程向当前线程发送的消息的事件。

## 参数

### function listener

主线程/Worker 线程向当前线程发送的消息的事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
message | Object | 主线程/Worker 线程向当前线程发送的消息

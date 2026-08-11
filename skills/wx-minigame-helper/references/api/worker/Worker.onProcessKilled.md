---
title: "Worker.onProcessKilled(function listener)"
type: api
category: api/worker
api: "Worker.onProcessKilled"
source: https://developers.weixin.qq.com/minigame/dev/api/worker/Worker.onProcessKilled.html
---

# Worker.onProcessKilled(function listener)  
  
## 功能描述

监听 worker线程被系统回收事件（开启 useExperimentalWorker 后，当iOS系统资源紧张时，ExperimentalWorker 线程存在被系统回收的可能，开发者可监听此事件并重新创建一个worker）。仅限在主线程 worker 对象上调用。

## 参数

### function listener

worker线程被系统回收事件的监听函数

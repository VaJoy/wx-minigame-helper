---
title: "Worker wx.createWorker(string scriptPath, object options)"
type: api
category: api/worker
api: "wx.createWorker"
source: https://developers.weixin.qq.com/minigame/dev/api/worker/wx.createWorker.html
---

# [Worker](<Worker.md>) wx.createWorker(string scriptPath, object options)

> 基础库 1.9.90 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

创建一个 Worker 线程

## 参数

### string scriptPath

worker 入口文件的**绝对路径**

### object options

可选参数

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
useExperimentalWorker | boolean | false | 否 | 是否使用实验worker。在iOS下，实验worker的JS运行效率比非实验worker提升数倍，如需在worker内进行重度计算的建议开启此选项。同时，实验worker存在极小概率会在系统资源紧张时被系统回收，因此建议配合 worker.onProcessKilled 事件使用，在worker被回收后可重新创建一个。 | [2.13.0](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [Worker](<Worker.md>)

Worker 对象

## 注意事项

  * 接口使用前需要在 game.json （插件为 plugin.json） 中配置 workers 字段，表示 worker 代码根目录。
  * scriptPath 为入口文件的绝对路径，且不以 / 开头。
  * 目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate](<Worker.terminate.md>)
  * [多线程 worker 指南(小游戏)](<../../guide/base-ability/workers.md>)

## 示例代码
    
    
    // 创建普通worker
    wx.createWorker('workers/index.js')
    
    
    
    function createNewWorker() {
      const worker = wx.createWorker('workers/index.js', {
        useExperimentalWorker: true
      })
      // 监听worker被系统回收事件
      worker.onProcessKilled(() => {
        // 重新创建一个worker
        createNewWorker()
      })
    }
    // 创建实验worker
    createNewWorker()

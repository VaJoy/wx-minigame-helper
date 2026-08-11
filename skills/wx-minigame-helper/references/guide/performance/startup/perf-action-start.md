---
title: "启动时序与关键指标"
type: guide
category: guide/performance/startup
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start.html
---

# 启动时序与关键指标

## 概述

提升小游戏启动对于用户新进留存具有非常重要的价值。   
通过[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)应用中的“数据-性能分析”，开发者可以掌握到现网玩家上报的启动时长与留存数据。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/1592bc36-0410-48d9-81ef-be3797c2a57e.png)

左图中我们可以看到游戏的总启动耗时、首次冷启动耗时以及首屏打开留存率的数据。 据统计小游戏整体 Android 首屏留存率在 **80%** 左右。然而这里包括了非首次启动的玩家，对于 **首次打开游戏** 的留存率要明显更低。

右图为未能打开首屏的用户在什么时候流失的，我们可以粗略估算如果能保证所有用户都在 4 秒内完成加载，可以减少大约 30%玩家的流失。

## 小游戏的启动时序

要提升小游戏的启动速度，我们需要先理解小游戏启动时序，启动过程分为代码包加载与首屏渲染两个阶段。

从玩家点击游戏到看到游戏画面时会经历一系列的加载动作，其中包含小游戏框架本身的准备与开发者的初始业务逻辑。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3b25a273-4447-4589-bb08-e2307cb292f6.png)

  * 代码包加载：环境加载、下载代码包
  * 首屏渲染：小游戏框架加载注入、业务代码注入、首屏渲染准备等

## 掌握小游戏的启动性能数据

那么为了优化小游戏的启动性能，我们下一步来看看各个阶段的时长。通过[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)应用中的“数据-性能分析”，开发者能了解到这些数据。

首先我们可以从系统、机型分档、网络类型与是否有下载代码包等多个维度下启动时长的均值与分布：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/4cc381e7-bf04-4bdb-b214-87c3740fe2b5.png)

需要注意的是，“下载代码包”为“是”的数据，因为这表示**首次冷启动** 用户启动时长。

其次，在“启动性能”中我们还能了解到“子阶段“的耗时情况：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/fe52d31c-c0e6-43fb-82a5-272c56832073.png)

在了解启动时序与关键指标后，我们看看应该[如何提升启动速度](<perf-action-start2.md>)

---
title: "内存调优"
type: guide
category: guide/performance/memory
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-memory-overview.html
---

# 内存调优

在开发微信小游戏的过程中，开发者往往会遇到很多内存问题，如内存泄漏或者内存溢出等，运行时内存占用过大是影响游戏稳定性最大的因素，需要开发者足够重视。

## 现网数据：为什么要做小游戏内存优化？

[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)：“小游戏数据助手”是微信发布的官方小程序，支持相关的开发和运营人员查看自身小游戏的运营数据。

> 为了能让开发者掌握游戏的运行性能数据，小游戏框架底层会对现网玩家进行一定概率的采样，采样量可以通过趋势数据勾选得到。需要上报性能数据的玩家会以一定时间间隔（目前为 1 分钟）上报数据，比较准确地反应玩家真实的游戏体验情况。最终呈现在[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)应用中的“数据-性能分析”。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/b8eed5b6-2376-400b-b44a-f52061f57a1e.png)

## 内存问题

通过[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)应用中的“数据-性能分析-运行性能”开发者可以了解到许多内存相关的数据指标：内存均值趋势、内存区间分布、内存随时间变化情况、内存 Crash 率与人数等。通过对目前移动设备分析我们发现，Android 基本已经极少低内存(<1G>)设备，而 iOS 低档机型依然存在约 10%-15%的比例，因此如果要保持小游戏在这些设备下依然稳定，我们则必须优化内存使用。

## 关于 OOM 与内存告警

![](https://res8.wxqcloud.qq.com.cn/wxdoc/91058c73-e8da-46cc-8614-5620aca9d4aa.png)

我们知道，通常设备在遇到内存不足时会采取一定的策略进行内存释放甚至 KILL 掉进程，以保证设备整体的可用性，如上图为典型的 iOS 设备 OOM 阈值。

> 注意：在 iOS 下小游戏与微信客户端是处于同进程，两者总内存达到 OOM 阈值（如上图）时非常容易被系统 KILL 掉。小游戏在遇到系统内存紧张时会产生 wx.onMemoryWarning 回调，连续多次收到系统内存告警时会主动进行小程序的销毁。

通过分析，我们发现许多小游戏在 iOS 的内存异常退出率偏高（尤其是低端机）。如果你在[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)应用中的“数据-性能分析”发现自己的小游戏内存 Crash 率过高，那么就需要着手优化小游戏的内存使用。

## 优化工具与方案

通常，我们可以在开发、测试与现网阶段用以下工具帮助我们进行内存调优。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/5fbbca6f-adfd-4772-8342-7325ebbe1b4d.png)

  * 调优工具： 
    * [开发阶段进行内存调优](<perf-action-memory-dev-profile.md>)
    * [使用云测服务检测内存](<perf-action-memory-cloud-profile.md>)
  * 最佳实践： 
    * [资源纹理压缩](<../render/perf-action-texture-compression.md>)
    * [垃圾回收](<perf-action-memory-gc.md>)

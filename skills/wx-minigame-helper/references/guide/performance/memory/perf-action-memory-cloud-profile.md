---
title: "使用云测服务检测内存"
type: guide
category: guide/performance/memory
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-memory-cloud-profile.html
---

# 使用云测服务检测内存

[小游戏云测试](<https://developers.weixin.qq.com/minigame/dev/minigame-testtool/overview>) 是微信小游戏团队为开发者提供的一套完整易用的在线测试服务，以帮助开发者更高效、更全面地进行自动化游戏性能测试、兼容性测试，驱动产品质量提升和优化，为用户带来更佳的游戏体验。具备高覆盖率的真机设备集群、低成本接入门槛和持续集成性能、兼容性检测工具等特点。

## 内存数据入口

通过测试报告中的内存指标报告，我们可以看到多种维度的内存统计数据。入口是：“测试报告”->“指标维度”->“内存”。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/866a07df-896f-4ce7-a9f9-96e6836903d3.png)

### 内存分布情况

> 可以看到本次测试中内存峰值（max_total）的分布情况，通过此图可以了解游戏在 Top 机型上的大致表现。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/51706c08-d179-454f-9a05-879e3268c02b.png)

### 内存细分情况

> 将内存指标在统计项和机型上再做一些细分，通过此图可以了解具体层面的内存指标（graphics，native，private-other）在高中低不同档位上的具体表现。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/e2f1b3ce-1f4e-4837-a72c-5a284cb72b1a.png)

### 各机型内存具体数据

> 按内存峰值（max_total）进行排序，当该值超过平台建议峰值时会被标红，可重点关注并优化。性能标准可参考：[评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20230626/perf-mesure-20230626>)

![](https://res8.wxqcloud.qq.com.cn/wxdoc/0e013264-8768-4577-b80e-ed84c6af1183.png)

### 设备内存消耗曲线

> 任意选择一台设备，点击“详细报告”->“运行性能”，找到内存指标，可看到测试过程所对应的内存消耗情况的完整曲线，通过曲线可以定位异常拐点的具体时刻和场景。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f28f382e-6aea-460e-a840-53f8271ef4e0.png)

## 开发者常见的内存问题

实际开发过程中，我们发现资源与 JS 分配内存是占用较大的部分，那么接下来我们讨论下这两个话题：[资源纹理压缩](<../render/perf-action-texture-compression.md>)与[垃圾回收](<perf-action-memory-gc.md>).

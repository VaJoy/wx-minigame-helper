---
title: "概述"
type: guide
category: guide/performance/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-runtime-overview.html
---

# 概述

## 运行性能与玩家体验

游戏运行性能，对于玩家核心玩法的体验至关重要，优秀的运行性能是玩家长期留存、在线时长的重要保证。

  * 游戏画面品质既要精美，而且要顺畅的运行。
  * 开发者要保证游戏流畅度的情况下，也需要考虑设备发热量等问题。
  * 确保小游戏在不同的运行设备、网络等环境下依然能足够稳定。

运行性能需要关注的数据指标可以参考[评测标准](<../tools/perf-mesure.md>)。要提升小游戏的运行性能，我们需要理解小游戏的运行框架与常见的游戏优化方案。

## 运行环境

微信小程序运行在多种平台上：iOS（iPhone/iPad）微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。 详细内容可以参考[小程序的运行环境](<../../runtime/env.md>)

运行环境的不同，必然导致相同的游戏代码在不同平台下的运行性能表现不同，我们需要考虑小游戏在不同平台下的差异。

  * iOS 系统下小游戏逻辑层使用 JavaScriptCore 解析执行代码，在没有 JIT 的情况下效率低于 Android。如果在 iOS 上遇到计算瓶颈时，需要采取一些手段减少 CPU 占用。
  * 小游戏在 Android 系统下使用独立进程，而 iOS 则与微信相同进程，对于内存 OOM 限制则更为苛刻。

## 运行状态

开发者需要理解小游戏的生命周期，关于小游戏前台/后台状态、启动与销毁请参考[小程序运行机制](<../../runtime/operating-mechanism.md>)

## 最佳实践

### 降低小游戏内存使用

  * 提前规划美术资源   
项目初期根据玩家设备能力与业务需求，规划不同场景下资源的大小。比如创建角色、大厅、战斗单局等图片尺寸与像素精度，音效采样率等。
  * 机型适配   
小游戏的用户设备极为广泛，必要时根据设备能力适配，可通过[wx.getSystemInfoSync](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html#%E8%BF%94%E5%9B%9E%E5%80%BC>)获取 model 或 benchmarkLevel 获取设备性能等级。
  * 资源尽快释放   
在检测到内存紧张（如 wx.onMemoryWarning 监听到告警事件）的时候采取更为积极的释放策略，优先保证游戏的稳定性。
  * 使用纹理压缩   
纹理压缩是一种专为在计算机图形渲染系统中存储纹理而使用的图像压缩技术。与普通图像压缩算法的不同之处在于，纹理压缩算法为纹素的随机存取做了优化。在 Android 与 iOS 下常见的纹理压缩格式为 ETC 与 PVRTC，更多信息请查阅[资源纹理压缩](<../render/perf-action-texture-compression.md>) 。

### 合理利用设备的计算能力

  * 控制计算复杂度与频率   
目前 JS 脚本执行效率问题，尤其 iOS 的 JavaScriptCore 无法开启 JIT，对于较为复杂的游戏比如 MOBA、FPS 的游戏需要注意控制计算逻辑复杂度，使用[wx.setPreferredFramesPerSecond](<https://developers.weixin.qq.com/minigame/dev/api/render/frame/wx.setPreferredFramesPerSecond.html>)限制帧率保持设备发烫问题。
  * 关注垃圾回收带来的计算负担   
在权衡内存压力的情况下使用对象池，减少对象的临时创建，垃圾回收本身也会对 CPU 造成压力，从而造成游戏的瞬间卡顿，影响游戏操作体验。
  * 将更多的计算转到 GPU   
在 CPU 出现瓶颈而 GPU 较为空闲时，可以采用 GPU 进行分担，比如 GPU 骨骼动画、GPU 粒子等。
  * 合理使用 worker   
一些异步处理的任务，可以放置于 [Worker](<https://developers.weixin.qq.com/miniprogram/dev/framework/workers>)中运行，待运行结束后，再把结果返回到小程序主线程。

### 资源规划与渲染能力

  * 图集合并   
合成图集时会去可以一定程度上减少整体游戏包体，并且有利于引擎进行批次优化，降低 CPU 处理时间。
  * 渲染合批   
开发者可以将一些使用相同材质的物体模型合并成一个模型，或游戏引擎工具在处理渲染队列时进行渲染批次优化，降低 DrawCall 的数量。
  * 降低模型复杂度   
评测不同机型能处理的模型定点数、面数的上限，使用 LOD 技术或在低端设备降低模型精度来提升游戏流畅程度。
  * 使用混合渲染   
开放数据域请使用[混合渲染](<../render/perf-action-render-bind.md>)加快渲染效率。

### 兼容更多的设备

  * 机型适配   
刘海和全面屏手势的手机已经越来越多，对这类设备进行适配对于游戏体验是极为重要的，调用[wx.getSystemInfoSync](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html>)获取设备参数 statusBarHeight 进行屏幕适配。

接下来，让我们深入了解下如何诊断和优化小游戏的运行性能, 后续系列文章会综合数据、工具与游戏实践对小游戏运行性能进行阐述。

  * [内存调优](<../memory/perf-action-memory-overview.md>)
  * [资源纹理压缩](<../render/perf-action-texture-compression.md>)
  * [垃圾回收](<../memory/perf-action-memory-gc.md>)
  * [混合渲染模式](<../render/perf-action-render-bind.md>)

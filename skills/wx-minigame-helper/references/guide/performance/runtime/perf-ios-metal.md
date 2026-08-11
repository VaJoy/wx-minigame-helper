---
title: "iOS Metal"
type: guide
category: guide/performance/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-ios-metal.html
---

# iOS Metal

## 背景

当前，基于 C++ 游戏引擎（如 Unity、Cocos2d-x）开发的微信小游戏，在技术架构上主要遵循以下流程：游戏核心逻辑被编译为 WebAssembly 模块，而其图形渲染部分调用标准的 OpenGL ES 图形 API。 在 iOS 平台上，这一传统渲染路径存在固有的性能瓶颈，其具体流程如下： ![](https://res.wx.qq.com/op_res/ACXJ3vEsXrOiHeBIW_9Wn4vhssGBPiIC03fINQFiy1NqLhUErIBEpzUu-DIpk2e02oXNRXeMUmQHJuYEnZzd6Q)

这一双重转换架构带来了显著的性能损耗：

  * 首次转换：由 Emscripten 工具链将 OpenGL ES 指令转换为 WebGL API 调用
  * 二次转换：在 iOS 系统层面，由于苹果已从 iOS 12 开始将 OpenGL ES 标记为废弃状态，系统需要将 WebGL 指令再次转换为苹果原生图形接口 Metal 的指令流

这额外的系统级转换层导致了不必要的 CPU 和 GPU 开销，成为制约 iOS 平台小游戏性能表现的主要瓶颈。

## 性能优势与技术原理

微信小游戏 iOS Metal 技术方案通过提供原生 Metal 后端，彻底重构了这一渲染路径。接入本方案后，渲染流程优化如下：

![](https://res.wx.qq.com/op_res/ACXJ3vEsXrOiHeBIW_9WnxNOgoHoxQ0yUcYcESw_pbRlXriaQqLgImPSz3jrqOR4SDGFBiUiLSLT2KGD4qFtAA)

### 性能收益

项目 | 优化效果 | 备注  
---|---|---  
功耗 (发热) | **降低 15%** | 视游戏渲染复杂度而定  
帧耗时 | **降低 10% ～ 20%** | 相对于 WebGL 方案，视游戏复杂度而定  
  
  * 当前线上已有多款游戏接入了 **iOS Metal** 特性，Metal 基础渲染能力的完备性已得到验证。
  * iOS Metal 还可以使用 **Compute Shader** 等高级渲染能力，让开发者有更丰富的优化技术手段。

## 准备工作

### 1\. 特别提示

  * iOS Metal 仅支持 **iOS 高性能+** 模式，其他运行时将会自动降级为原有的运行方案。
  * 建议 **充分验证后** 再发布。

### 2\. 运行环境要求

  * **微信版本要求** : 需 **> = 8.0.63**，低版本的基础库会使用原有的运行模式运行游戏。
  * **基础库版本要求** ：需 **> = 3.10.0**，低版本的基础库会使用原有的运行模式运行游戏。
  * **iOS 系统要求** : 与[iOS高性能+模式](<../overview/perf-high-performance-plus.md>)对齐，只会对iOS系统>=14的版本开启；

开发阶段建议尽可能使用高版本的微信。

## 接入方式

### 团结引擎快适配方案

针对于使用 团结引擎快适配方案接入的游戏，请参照 [快适配-iOS Metal 渲染模式](<https://gitee.com/wechat-minigame/minigame-transform/blob/main/Design/iOSMetal.md>)进行接入。

### 其他引擎

基于WebAssembly技术将游戏转换至微信小游戏平台的原生目标引擎（如 Unity、Cocos2d-x、UE等），接入流程详见 [iOS Metal 指令流 - 自研引擎适配](<https://doc.weixin.qq.com/doc/w3_ACQA2gY2AD4CN9djw9UQrRIiPa3U5?scode=AJEAIQdfAAo1knaQsMACQA2gY2AD4>) 文档。

## 常见问题 Q&A

### Q1. 如何判断游戏已成功通过iOS Metal方案运行？

A1. 请按照下面的方式进行操作

  * 确认设备是否满足上方要求的运行环境要求。
  * 重新进入小游戏并打开调试，查看vConsole中的日志，关注是否包含下方的日志信息  
![](https://res.wx.qq.com/op_res/NnXDDhYjL-pFi8R7NNag-k3DJWnvHcvWNPYUk8Jait3TzMSWBgx9kC3ggrCdbypke8Pf3EKjMoS6g-RLce-RvA)

### Q2. 为什么开启了iOS Metal后，性能更差了？比如单帧耗时更大了。

A2. 如果遇到了此类情况，一般是踩到了新方案的坑，请联系我们一起进行排查。

### Q3. 为什么开启iOS Metal模式后，渲染异常了？

A3. Metal 与 WebGL 在底层实现上差异较大，引擎渲染管线可能需要适配，请联系我们一起进行排查。

## 联系我们

如有任何问题，欢迎打开 [微信小游戏 iOS Metal 渲染模式](<https://doc.weixin.qq.com/doc/w3_ACQA2gY2AD4CNJJbgRcfPQdSY0wsK?scode=AJEAIQdfAAo1zRudsXACQA2gY2AD4>) 文档，扫二维码加入官方的技术交流群。

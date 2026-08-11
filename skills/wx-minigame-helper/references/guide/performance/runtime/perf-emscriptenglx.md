---
title: "EmscriptenGLX"
type: guide
category: guide/performance/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-emscriptenglx.html
---

# EmscriptenGLX

## 背景

当前微信小游戏平台以 `webgl/webgl2` 的渲染上下文为主，对于使用JS引擎转换的小游戏，其GL指令调用主要通过 `JS(业务逻辑)` -> `平台渲染`，而对于通过WebAssembly方案（如：[Unity/团结引擎快适配方案](<https://wechat-miniprogram.github.io/minigame-unity-webgl-transform/>)）转换的小游戏，游戏内所有GL指令调用需要经过三层转换：`WASM(业务逻辑)` -> `WebGL JS胶水层(GL -> WebGL)` -> `平台渲染`，对此类转换方案的游戏，WASM模块与JavaScript之间的高频通信无疑带来了繁重的性能开销。

通过EmscriptenGLX渲染模式，可以实现在WASM内部完成 `GL -> WebGL` 指令的处理，将原本 `WebGL JS胶水层` 的代码下沉至业务逻辑(WASM)中，消除**WASM与JS之间高频调用链路** 。

![](https://res.wx.qq.com/op_res/ZCmE4J6QugFYXpGpD2sq8ZwE5i8Ulgbetq-lLiHHEwmcmg8CootgNSgZ-Y_oGq5rmDL4QJTSFs0K7TPgdpS1YQ)

## 性能收益

项目 | 优化效果 | 备注  
---|---|---  
帧耗时 | **降低 10% ～ 20%** | 视游戏复杂度而定  
  
当前线上已有 100+ 游戏接入了 EmscriptenGLX 特性，GLX完备性已得到较多游戏验证，并且从已接入的游戏性能指标来看，大部分游戏，特别是中低端设备上，**游戏的帧率普遍提升10%以上** 。

## 准备工作

### 1\. 特别提示

  * EmscriptenGLX 目前仅支持在 **iOS高性能+模式** 以及 **Android平台** 下运行，其他运行时将会自动降级为原有的运行方案。
  * 建议游戏 **充分验证后** 再进行发布。

### 2\. 运行环境要求

  * **基础库版本要求** ：基础库版本须 `>= 3.8.12`，低版本的基础库会使用原有的运行模式运行游戏。
  * **iOS系统要求** ：与[iOS高性能+模式](<../overview/perf-high-performance-plus.md>)对齐，只会对iOS系统>=14的版本开启；

开发阶段建议尽可能使用高版本的微信。

## 接入方式

### Unity/团结引擎快适配方案

针对于使用 Unity/团结引擎快适配方案接入的游戏，请参照[快适配-EmscriptenGLX接入方案](<../../engine/unity/rendering/EmscriptenGLX.md>)进行接入。

### 其他引擎

基于WebAssembly技术将游戏转换至微信小游戏平台的原生目标引擎（如 Cocos2d-x、UE等），接入流程详见 [原生目标引擎EmscriptenGLX特性接入](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-emscriptenglx-native.html>) 文档。

## 更新日志

EmscriptenGLX特性更新，详见[更新日志](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-emscriptenglx-changelog.html>)

## 常见问题 Q&A

### Q1. 如何判断游戏已成功通过EmscriptenGLX方案运行？

A1. 请按照下面的方式进行操作

  * 确认设备是否满足上方要求的运行环境要求。
  * 重新进入小游戏并打开调试，查看vConsole中的日志，关注是否包含下方的日志信息  
![](https://res.wx.qq.com/op_res/ivM04McCIPOvHFfbgkrDce0PJQiAKaDTjkbv-sx_NGBg9xXTUbls69YKK2SNulqpzmxjATM3hqsfGPIS_RH1zw)

### Q2. 为什么开启了EmscriptenGLX后，性能更差了？比如单帧耗时更大了。

A2. 如果遇到了此类情况，一般是踩到了新方案的坑，请联系我们一起进行排查。

### Q3. 为什么开启EmscriptenGLX模式后，渲染异常了？

A3. 新方案对GL的相关指令进行了重构，若遇到了渲染相关的表现异常问题，请先排查游戏在iOS高性能+ 和 原Android设备下的渲染表现是否正常，若正常，请联系我们一起进行排查。

## 联系我们

如有任何问题，欢迎[联系小助手](<https://res8.wxqcloud.qq.com.cn/wxdoc/0d0a621f-a50f-4a89-8454-2ef762b4fbf0.png>)咨询。

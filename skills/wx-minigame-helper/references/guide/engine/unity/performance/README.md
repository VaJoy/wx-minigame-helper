# 游戏引擎适配 / Unity WebGL 转化 / 性能

> 路径：`guide/engine/unity/performance/`　|　本目录 12 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [Shader 异步 Warmup](AsyncShaderWarmup.md) | 当游戏中 Shader 变体数量较多时，可以通过 ShaderVariantCollection（以下简称 SVC）进行 Shader 预热，以避免游戏运行过程中因 Shader 编译导致的卡顿。 |
| [使用高精度时间进行性能检测](HighPreciseTime.md) | 在浏览器默认环境中，开发者通常使用`performance.now()`或`Date.now()`获取时间戳，但这些API存在精度限制： |
| [团结小游戏多线程使用说明](Multithread.md) | 团结引擎已支持小游戏新版 worker 进行并行渲染，将渲染工作分离到 worker 里进行处理，降低主线程压力。 |
| [优化内存](OptimizationMemory.md) | Unity WebGL游戏通常比普通H5(JS)游戏占用更大的内存，在操作系统的控制策略下超出阈值时非常容易被OOM。 |
| [优化运行性能](OptimizationPerformence.md) | Unity WebGL是以WebAssebly(WASM)+WebGL为核心的技术方案，运行性能会极大影响可承载的游戏内容玩法。 |
| [性能优化实战——使用Particle Budget系统优化粒子性能](ParticleBudget.md) | 在Unity的游戏项目中，针对粒子较多的场景，往往粒子的更新会占用比较高的开销： |
| [性能优化总览](PerfOptimization.md) | Unity WebGL导出形式相对于原生APP应用，需要开发者更关注性能与体验调优。有以下几点原因： |
| [微信小游戏功耗分析指引 --iOS 篇](PowerPerf-iOS.md) | 移动互联网快速发展，微信小游戏凭借便捷性和社交性成为热门休闲选择。移动端设备上，微信小游戏的功耗表现对于用户体验具有显著的影响。本文将介绍微信小游戏功耗分析的通用流程，供开发者参考。 |
| [RenderOptimization](RenderOptimization.md) |  |
| [版本更新](Update.md) | 请阅读文档，了解小游戏的更新机制 |
| [代码分包](WasmSplit.md) | unity 导出小游戏项目后，代码是在一个 wasm 文件里，经过 brotli 压缩后，放在 wasmcode 目录下 |
| [iOS 高性能与高性能+模式](iOSOptimization.md) | 在 iOS 环境下，标准的微信小游戏 WASM 运行模式是无 JIT, 对于计算性能要求较高的游戏会受到比较大的限制。常见情况是： |

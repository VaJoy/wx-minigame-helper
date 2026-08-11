# 性能 / 运行时机制

> 路径：`guide/performance/runtime/`　|　本目录 6 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [通过Worker异步计算优化CPU使用](perf-action-cpu-worker.md) | 在小游戏每一帧中，JS主线程主要做了两件事情：计算和渲染。相对地，每一帧的Frame Time = 计算耗时 + 渲染耗时。根据Chrome 团队提出的用户感知性能模型 RAIL，播放动画时JS执行时 |
| [概述](perf-action-runtime-overview.md) | 游戏运行性能，对于玩家核心玩法的体验至关重要，优秀的运行性能是玩家长期留存、在线时长的重要保证。 |
| [EmscriptenGLX](perf-emscriptenglx.md) | 当前微信小游戏平台以 `webgl/webgl2` 的渲染上下文为主，对于使用JS引擎转换的小游戏，其GL指令调用主要通过 `JS(业务逻辑)` -> `平台渲染`，而对于通过WebAssembly方 |
| [iOS Metal](perf-ios-metal.md) | 当前，基于 C++ 游戏引擎（如 Unity、Cocos2d-x）开发的微信小游戏，在技术架构上主要遵循以下流程：游戏核心逻辑被编译为 WebAssembly 模块，而其图形渲染部分调用标准的 Ope |
| [WXWebAssembly](perf-webassembly.md) | WXWebAssembly 类似于 Web 标准 WebAssembly，能够在一定程度上提高小游戏的性能。 |
| [温控模式](power-saving-mode.md) | 温控模式是小游戏针对 iOS 设备发烫、掉电过快等场景提供的解决方案。原理是通过调整底层系统资源调度，在降低部分算力的前提下，大幅降低小游戏功耗。 |

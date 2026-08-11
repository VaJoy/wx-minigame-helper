# 专题：Unity WebGL 项目转化为小游戏

> 任务：把已有 Unity 项目（WebGL 导出）转化为微信小游戏。这是官方投入最大的引擎适配方案（63 篇文档）。

## 转化路径总览

```
Unity 项目 → 安装 WX-WASM-SDK → WebGL 构建配置 → 转换工具出包
→ 首包优化（WasmSplit/资源CDN/预加载）→ 性能调优 → 发布
```

## 学习路径（按顺序读）

### 1. 入门（guide/engine/unity/getting-started/）
- [方案概述 Guide](../guide/engine/unity/getting-started/Guide.md) — 先看这篇，了解转化原理与限制
- [转化流程 Transform](../guide/engine/unity/getting-started/Transform.md) — 手把手转换步骤
- [SDK 安装 SDKInstaller](../guide/engine/unity/getting-started/SDKInstaller.md)
- [WX_SDK 能力](../guide/engine/unity/getting-started/WX_SDK.md) — C# 侧调用微信能力
- [技术原理 TechSummary](../guide/engine/unity/getting-started/TechSummary.md)
- [常见问题 QA](../guide/engine/unity/getting-started/DevelopmentQAList.md)、[上线问题 IssueForProduction](../guide/engine/unity/getting-started/IssueForProduction.md)
- [InstantGame 方案](../guide/engine/unity/getting-started/InstantGameGuide.md) — 免安装即点即玩

### 2. 启动优化（unity/startup/）
- [启动流程 Startup](../guide/engine/unity/startup/Startup.md)、[启动优化 StartupOptimization](../guide/engine/unity/startup/StartupOptimization.md)
- [首场景优化 FirstSceneOptimization](../guide/engine/unity/startup/FirstSceneOptimization.md)
- [自定义 Loading](../guide/engine/unity/startup/CustomLoading.md)、[启动上报 ReportStartupStat](../guide/engine/unity/startup/ReportStartupStat.md)

### 3. 资源管理（unity/assets/）— 包体是关键瓶颈
- [资源总述 AssetDescription](../guide/engine/unity/assets/AssetDescription.md)、[资源优化 AssetOptimization](../guide/engine/unity/assets/AssetOptimization.md)
- [预加载 UsingPreload](../guide/engine/unity/assets/UsingPreload.md)、[资源加载 Loader](../guide/engine/unity/assets/UsingLoader.md)
- [AssetBundle](../guide/engine/unity/assets/UsingAssetBundle.md)、[Addressable](../guide/engine/unity/assets/UsingAddressable.md)
- [文件缓存 FileCache](../guide/engine/unity/assets/FileCache.md)、[数据 CDN DataCDN](../guide/engine/unity/assets/DataCDN.md)
- [压缩纹理 CompressedTexture](../guide/engine/unity/assets/CompressedTexture.md)、[分包 MultiPackage](../guide/engine/unity/assets/MultiPackage.md)

### 4. 性能与渲染（unity/performance/、unity/rendering/）
- [性能优化总述 PerfOptimization](../guide/engine/unity/performance/PerfOptimization.md)、[内存 OptimizationMemory](../guide/engine/unity/performance/OptimizationMemory.md)
- [渲染优化 RenderOptimization](../guide/engine/unity/performance/RenderOptimization.md)、[iOS 优化 iOSOptimization](../guide/engine/unity/performance/iOSOptimization.md)
- [多线程 Multithread](../guide/engine/unity/performance/Multithread.md)、[Wasm 分包 WasmSplit](../guide/engine/unity/performance/WasmSplit.md)
- [WebGL2](../guide/engine/unity/rendering/WebGL2.md)、[iOS Metal](../guide/engine/unity/rendering/iOSMetal.md)、[自定义 URP](../guide/engine/unity/rendering/CustomURP.md)

### 5. 性能分析（unity/profiling/）
- [性能评测 PerfMeasure](../guide/engine/unity/profiling/PerfMeasure.md)、[性能面板 PerformanceMonitor](../guide/engine/unity/profiling/PerformanceMonitor.md)
- [UnityProfiler](../guide/engine/unity/profiling/UnityProfiler.md)、[深度分析 DeepProfileTool](../guide/engine/unity/profiling/DeepProfileTool.md)

### 6. 平台能力接入（unity/platform/）
- [输入适配 InputAdaptation](../guide/engine/unity/platform/InputAdaptation.md)、[音视频 AudioAndVideo](../guide/engine/unity/platform/AudioAndVideo.md)
- [网络 UsingNetworking](../guide/engine/unity/platform/UsingNetworking.md)、[开放数据 OpenData](../guide/engine/unity/platform/OpenData.md)

## 其他引擎

- Cocos / Laya / Egret：[guide/engine/cocos-laya-egret.md](../guide/engine/cocos-laya-egret.md)
- 自研/其他引擎（Cocos2dx、UE4、Emscripten）：[guide/engine/common-adaptation/](../guide/engine/common-adaptation/README.md)，核心是适配层（FileSystem/Http/Socket Adapter）
- [引擎插件](../guide/base-ability/game-engine-plugin.md) — 引擎运行库分离，显著减包体

## 常见坑

1. **包体**：首包 4M 限制 → WasmSplit + 资源走 CDN 是标准解法。
2. iOS 高性能模式见[高性能模式](../guide/performance/overview/perf-high-performance.md)。
3. Unity 版本兼容性：见 getting-started 中的推荐引擎版本说明。

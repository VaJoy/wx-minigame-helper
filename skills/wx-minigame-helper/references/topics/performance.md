# 专题：性能优化与问题排查

> 任务：游戏卡顿、发热、闪退、启动慢 — 系统性地定位与解决性能问题。

## 排查路径

```
先度量（tools/）→ 定界（启动 or 运行时 or 内存）→ 对症优化 → 回归验证
```

### 按症状索引

| 症状 | 先看 |
|---|---|
| 启动慢、白屏久 | [启动优化](../guide/performance/startup/README.md)（另见[分包与启动专题](subpackage-startup.md)） |
| 卡顿、掉帧 | [运行时优化](../guide/performance/runtime/perf-action-runtime-overview.md)、[渲染优化](../guide/performance/render/README.md) |
| 内存溢出、闪退（尤其 iOS） | [内存优化](../guide/performance/memory/README.md) |
| 发热耗电 | [运行时](../guide/performance/runtime/README.md)、[省电模式](../guide/performance/runtime/power-saving-mode.md) |
| 弱网体验差 | [弱网优化](../guide/performance/network/weak-network.md)、[网络优化](../guide/performance/network/perf-network.md) |

## 关键文档

### 方法论（guide/performance/）
- [性能总览](../guide/performance/overview/perf-overview.md)、[技术手册](../guide/performance/overview/perf-technical-manual.md)
- [性能标准 benchmarkLevel](../guide/performance/overview/perf-benchmarkLevel.md)
- [高性能模式](../guide/performance/overview/perf-high-performance.md) / [高性能+](../guide/performance/overview/perf-high-performance-plus.md) — iOS 必看
- [WebAssembly](../guide/performance/runtime/perf-webassembly.md)、[iOS Metal](../guide/performance/runtime/perf-ios-metal.md)
- [Worker 分担 CPU](../guide/performance/runtime/perf-action-cpu-worker.md)

### 内存专题
- [内存总览](../guide/performance/memory/perf-action-memory-overview.md)、[内存管理](../guide/performance/memory/perf-action-memory-management.md)
- [GC](../guide/performance/memory/perf-action-memory-gc.md)、[开发者工具 Profile](../guide/performance/memory/perf-action-memory-dev-profile.md)、[云真机 Profile](../guide/performance/memory/perf-action-memory-cloud-profile.md)

### 渲染专题
- [绑定优化](../guide/performance/render/perf-action-render-bind.md)、[纹理压缩](../guide/performance/render/perf-action-texture-compression.md)

### 工具（guide/performance/tools/ + perf-audit/）
- [性能评测 perf-mesure](../guide/performance/tools/perf-mesure.md)、[云测试](../guide/performance/tools/perf-tools-cloudtest.md)
- [性能面板 monitor](../guide/performance/tools/monitor.md)、[调试 debug](../guide/performance/tools/debug.md)
- [性能评测集 perf-audit](../guide/performance/perf-audit/README.md)

### API
- [api/base/performance/](../api/base/performance/README.md) — wx.getPerformance / Performance / PerformanceEntry
- [api/base/debug/](../api/base/debug/README.md) — 日志与调试（RealtimeLogManager 等）
- 数据分析上报：[api/data-analysis/](../api/data-analysis/README.md) — 自定义性能数据上报

## Unity 项目

Unity 转化项目有专门的性能章节：[性能优化](../guide/engine/unity/performance/README.md)、[性能分析工具](../guide/engine/unity/profiling/README.md)。

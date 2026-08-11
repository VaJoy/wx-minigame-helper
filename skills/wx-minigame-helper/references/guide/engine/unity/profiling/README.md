# 游戏引擎适配 / Unity WebGL 转化 / 性能分析

> 路径：`guide/engine/unity/profiling/`　|　本目录 7 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [使用Android CPU Profiler性能调优](AndroidProfile.md) | 0. 转换导出插件勾选"Profiling-funcs", 请勿使用Development(该模式将极大降低性能)。 发布上线版本请务必关闭该选项！ |
| [错误调试与异常排查](DebugAndException.md) | 本文阐述开发者在遇到转换后的游戏在开发者工具或真机遇到异常时，如何找到对应堆栈并解决问题。 |
| [性能深度分析工具使用指南](DeepProfileTool.md) | 性能深度分析工具由微信小游戏平台提供，无缝集成在微信小游戏适配插件内。它就像一位专业的性能分析师，聚焦于小游戏开发过程中执行效率、内存管理以及渲染效果等关键领域，助力开发团队精准定位性能瓶颈，为游戏性 |
| [小游戏适配方案性能标准](PerfMeasure.md) | 性能评测标准用于开发者优化游戏性能数据，提升用户体验。评测标准根据小游戏整体的性能数据表现，结合操作系统、机型分档等多种维度建立。 |
| [最佳实践检测工具](PerformanceMonitor.md) | 为了使游戏达到比较好的性能表现，仍需要开发者结合游戏实际情况进行优化。平台针对启动和运行输出了大量优化手段，使用最佳实践检测，可帮助开发者在**开发阶段** 针对问题进行优化 |
| [使用Unity Profiler性能调优](UnityProfiler.md) | 1. 导出选项时勾选"Development Build"与"Autoconnect Profiler" |
| [使用ProfilingMemory内存分析](UsingMemoryProfiler.md) | 在微信开发者工具运行游戏，利用ProfilingMemory，我们可以分析UnityHeap 或 DynamicMemory(CPU主内存)的详细分配堆栈与统计数值。 |

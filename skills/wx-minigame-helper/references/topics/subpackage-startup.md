# 专题：分包与启动优化

> 任务：解决"包太大""启动慢"问题 — 小游戏留存的第一道门槛。

## 包体限制与分包结构

- 主包 ≤ 4M，整包（主包+分包）≤ 更大上限（见[代码包](../guide/base-ability/code-package.md)）
- `game.json` 配置 `subpackages`，见[配置](../guide/getting-started/configuration.md)

```
主包（启动必需的最小集）
├── 普通分包（进入对应玩法才下载）
└── 独立分包（可不依赖主包独立启动，适合活动页）
```

## 启动优化组合拳

1. **减首包**：代码分包 + 资源上 CDN + [引擎插件](../guide/base-ability/game-engine-plugin.md)
2. **预下载**：[分包预下载](../guide/performance/startup/predownload-of-minigame-packages.md)、[周期性更新 background-fetch](../guide/base-ability/background-fetch.md)、[数据预拉取 pre-fetch](../guide/base-ability/pre-fetch.md)
3. **并行下载**：[guide/performance/startup/perf-action-start-parallel-download.md](../guide/performance/startup/perf-action-start-parallel-download.md)
4. **启动加载插件化**：[perf-action-start-loading-plugin](../guide/performance/startup/perf-action-start-loading-plugin.md)
5. **度量**：先上报才能优化 — [启动场景上报 perf-action-start-reportScene](../guide/performance/startup/perf-action-start-reportScene.md)

## 关键文档

### 指南
- [代码包](../guide/base-ability/code-package.md)、[分包加载](../guide/base-ability/subpackage/)、[独立分包](../guide/base-ability/independent-sub-packages.md)
- 启动优化实战：[guide/performance/startup/](../guide/performance/startup/README.md)（perf-action-start、perf-action-start2 两篇是总纲）
- [文件系统](../guide/base-ability/file-system.md) — 下载资源的落盘管理
- Unity 项目另见[资源管理](../guide/engine/unity/assets/README.md)（WasmSplit/DataCDN）

### API
- 分包加载：[api/base/subpackage/](../api/base/subpackage/README.md)（[wx.loadSubpackage](../api/base/subpackage/wx.loadSubpackage.md)、[wx.preDownloadSubpackage](../api/base/subpackage/wx.preDownloadSubpackage.md)）
- 下载：[wx.downloadFile](../api/network/download/wx.downloadFile.md)、[DownloadTask](../api/network/download/DownloadTask.md)
- 周期性更新：[api/storage/background-fetch/](../api/storage/background-fetch/README.md)

## 度量与标准

- [启动性能标准](../guide/performance/startup/perf-action-start.md) 给出的启动时长分级目标
- [性能评测工具 perf-mesure](../guide/performance/tools/perf-mesure.md)、[云测试](../guide/performance/tools/perf-tools-cloudtest.md)

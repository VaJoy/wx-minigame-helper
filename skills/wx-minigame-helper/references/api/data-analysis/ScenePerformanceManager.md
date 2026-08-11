---
title: "ScenePerformanceManager"
type: api
category: api/data-analysis
api: "ScenePerformanceManager"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/ScenePerformanceManager.html
---

# ScenePerformanceManager

> 基础库 3.11.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

ScenePerformanceManager 类用于管理小游戏运行性能数据上报。可以通过 [wx.getScenePerformanceManager](<wx.getScenePerformanceManager.md>) 获取。

## 方法

### [Object ScenePerformanceManager.getCommonInfo()](<ScenePerformanceManager.getCommonInfo.md>)

获取通用信息（由setCommonInfo数据得到）

### [ScenePerformanceManager.setCommonInfo(Object params)](<ScenePerformanceManager.setCommonInfo.md>)

设置通用信息（全局维度），用于描述贯穿所有上报的固定属性（如机型档位、用户角色等）。每次执行 `setData` 时都会自动带上这些信息。多次调用 `setCommonInfo` 会整体覆盖之前设置的参数。

### [ScenePerformanceManager.setData(Object param)](<ScenePerformanceManager.setData.md>)

上报当前所处的场景及其附加信息，用于对运行性能数据做多维度的筛选分析。

上报的数据分为两级维度：

  * `sceneId`（一级维度）：标识当前所处的「大场景」，例如战斗、大厅、加载等。查看运行性能数据时，可先按 `sceneId` 筛选出某个场景的整体表现。
  * `sceneData`（二级维度）：在同一场景内进一步细分的标签，用于在场景内部做更细粒度的下钻筛选。例如同为「战斗」场景，还可以按战斗类型、关卡、组队人数等区分，从而定位「Boss 战是否卡顿」「多人组队是否掉帧」等具体问题。

`sceneData` 会与初始化时通过 `commonInfo` 设置的通用信息合并后一起上报，若字段同名则以 `sceneData` 覆盖 `commonInfo`。

---
title: "ScenePerformanceManager.setData(Object param)"
type: api
category: api/data-analysis
api: "ScenePerformanceManager.setData"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/ScenePerformanceManager.setData.html
---

# ScenePerformanceManager.setData(Object param)

> 基础库 3.11.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

上报当前所处的场景及其附加信息，用于对运行性能数据做多维度的筛选分析。

上报的数据分为两级维度：

  * `sceneId`（一级维度）：标识当前所处的「大场景」，例如战斗、大厅、加载等。查看运行性能数据时，可先按 `sceneId` 筛选出某个场景的整体表现。
  * `sceneData`（二级维度）：在同一场景内进一步细分的标签，用于在场景内部做更细粒度的下钻筛选。例如同为「战斗」场景，还可以按战斗类型、关卡、组队人数等区分，从而定位「Boss 战是否卡顿」「多人组队是否掉帧」等具体问题。

`sceneData` 会与初始化时通过 `commonInfo` 设置的通用信息合并后一起上报，若字段同名则以 `sceneData` 覆盖 `commonInfo`。

## 参数

### Object param

场景数据上报的参数对象。

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
sceneId | number |  | 是 | 场景 ID（一级维度），标识当前所处的大场景。  
sceneData | Object |  | 否 | 场景附加信息（二级维度），用于在同一场景内做更细粒度的筛选。会与 `commonInfo` 合并后一起上报，字段同名时覆盖 `commonInfo`。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码

以一款 RPG 游戏的战斗场景为例：`sceneId` 标记「战斗场景」，`sceneData` 携带战斗类型、关卡、组队人数等信息，便于在查看性能数据时逐层下钻筛选。
    
    
    const scenePerformanceManager = wx.getScenePerformanceManager({
      commonInfo: {
        deviceLevel: 'high', // 机型档位（全局通用信息，每次上报都会携带）
      }
    });
    
    // 进入战斗场景时上报
    scenePerformanceManager.setData({
      sceneId: 1001,          // 一级维度：1001 代表「战斗场景」
      sceneData: {            // 二级维度：战斗场景内的细分标签
        battleType: 'boss',   // 战斗类型：Boss 战
        level: 15,            // 当前关卡
        playerCount: 4,       // 组队人数
      },
    });
    // 上报后可在运行性能数据中先按 sceneId=1001 查看战斗场景整体表现，
    // 再叠加 battleType=boss 等标签，进一步分析 Boss 战场景是否存在性能问题。

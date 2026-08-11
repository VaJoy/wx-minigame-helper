---
title: "小游戏运行性能场景上报"
type: guide
category: guide/performance/startup
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-runtime-reportPerformanceScene.html
---

# 小游戏运行性能场景上报

## 概述

在小游戏环境下，玩家对运行流畅度非常敏感，运行阶段的 FPS、卡顿、内存等表现会直接影响留存与付费转化。开发者可在[小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)查看整体运行性能数据，但整包数据将战斗、副本、多人同屏等**不同玩法场景混在一起** ，难以定位到具体阶段的性能问题。

为了帮助开发者主动发现**不同运行场景下** 的性能问题，现提供官方上报接口 [`wx.getScenePerformanceManager`](<https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getScenePerformanceManager.html>)，让开发者在运行过程中标记当前所处的场景（并可附加业务维度），平台按场景 ID 聚合对应的 FPS / 卡顿 / 内存等指标，实现分场景的性能分析与优化。

> **说明** 本能力仅用于**运行阶段** 的场景化性能上报。如需上报**启动阶段** 的场景耗时，请使用 [`wx.reportScene`](<perf-action-start-reportScene.md>)。

## 运行性能场景上报

运行性能场景上报是指：在小游戏运行过程中，开发者可以通过接口标记当前所处的玩法场景，客户端会定时采集当前场景下的运行性能数据（FPS、卡顿、内存等），并按场景 ID 聚合上报到平台，供后台多维度分析。

其核心特点如下：

  1. 与客户端的性能采集机制关联，提供**运行阶段全流程** 的分场景性能分析能力
  2. 支持开发者通过 `commonInfo` 与 `sceneData` 传入**自定义维度** ，按业务口径进行细分分析

### 场景说明

运行性能场景无系统预设，全部由**开发者自定义** ：在平台注册 `sceneId` 后，通过接口在运行时进行标记上报（新建与调用详见「使用方法」）。

> **注意**
> 
>   1. 本能力仅用于**运行阶段** 的性能数据采集，不适用于启动耗时上报。
>   2. 每次 `setData` 标记后，客户端按内部采集周期上报最近场景下的性能数据；客户端侧限制为 **30 秒内最多 5 次`setData` 调用**，超出后本次调用不会更新当前场景。
>   3. 调用 `setData` 后，当前场景会持续生效，直到下一次 `setData` 调用切换场景。若不调用新场景，客户端会持续将后续采样数据归到当前场景，无需手动"结束场景"。
> 

### 与启动场景上报的区别

对比项 | 启动场景上报 (`wx.reportScene`) | 运行性能场景上报 (`wx.getScenePerformanceManager`)  
---|---|---  
使用阶段 | 启动阶段（用户点击到可交互） | 运行阶段（游戏持续运行期间）  
上报方式 | 开发者主动上报一次 | 标记场景后，客户端定时采集并自动上报  
数据内容 | 场景耗时 + 自定义维度/指标 | FPS / 卡顿 / 内存等客户端采集的性能数据  
同一场景是否可多次上报 | 不可以（`sceneId` 不可重复） | 可以（每次 `setData` 都会更新当前场景）  
自定义数据 | `dimension`（维度 string）+ `metric`（指标 string） | `sceneData`（ object，与 `commonInfo` 合并）  
基础库版本 | ≥ 2.26.2 | ≥ 3.11.0  
  
## 使用方法

### 1\. 新建运行性能场景

登录 [微信公众平台](<https://mp.weixin.qq.com>) →「开发」→「研发工具箱」→「**场景管理** 」→ 新建场景，得到 `sceneId`。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ee052a24-b442-4b58-8292-9cb5103af291.png)

### 2\. 设置自定义维度

开发者可通过 `commonInfo` 与 `sceneData` 传入**自定义维度** ，按业务口径进行细分分析：

  * `commonInfo`：**多个场景共享** 的全局信息（如画质档位、用户角色等，不随场景变化）
  * `sceneData`：**当前场景特有** 的维度数据（如战斗类型、关卡、组队人数等）

两者均为 `Object<string, string | number>`，`value` 支持字符串或非负整数，不支持对象、数组、布尔值、`null`。字段同名时以 `sceneData` 覆盖 `commonInfo`。

### 3\. 初始化 Manager 并设置公共信息
    
    
    // 基础库版本 >= 3.11.0
    let scenePerformanceManager = null;
    
    // 兼容处理：低版本基础库无该 API
    if (wx.getScenePerformanceManager) {
      scenePerformanceManager = wx.getScenePerformanceManager({
        debug: true,                    // 是否开启调试日志（仅开发版/体验版生效）
        commonInfo: {
          qualityLevel: 'high',         // 画质档位（多场景通用的全局维度，每次上报都会携带）
          userRole: 'vip',              // 用户角色（跨场景不变的业务属性）
        },
      });
    }
    

### 4\. 上报运行性能场景

以一款 RPG 游戏的战斗场景为例：`sceneId` 标记「战斗场景」，`sceneData` 携带战斗类型、关卡、组队人数等细分维度。
    
    
    // 进入战斗场景时上报
    scenePerformanceManager.setData({
      sceneId: 1001,          // 一级维度：示例值，请替换为平台「场景管理」中生成的实际 sceneId
                              //          必须为在平台预先注册的自然数（≥ 0）
      sceneData: {            // 二级维度：战斗场景内的细分标签
        battleType: 'boss',   // 战斗类型：Boss 战
        level: 15,            // 当前关卡
        playerCount: 4,       // 组队人数
      },
      success(res)  { console.log('success', res)  },
      fail(res)     { console.log('fail', res)     },
      complete(res) { console.log('complete', res) },
    });
    

上报后可在「统计 → 基础数据 → 游戏日志分析 → 游戏运行时性能」中按 `sceneId=1001` 查看战斗场景整体表现，再过滤 开发者自定义额外信息 等标签，进一步分析 Boss 战场景是否存在性能问题。

### 5\. 公共参数与场景数据的配合使用

  * `setCommonInfo(commonInfo)`：设置多个场景共享的**公共信息** （不随场景变化的全局属性）。
  * `setData({ sceneId, sceneData })`：设置**当前场景** 特有的维度数据。

两者会在内部合并为 `extraInfo` 后上报（字段同名时以 `sceneData` 覆盖 `commonInfo`）：
    
    
    scenePerformanceManager.setCommonInfo({
      qualityLevel: 'high',
      userRole: 'vip',
    });
    
    scenePerformanceManager.setData({
      sceneId: 1001,
      sceneData: { battleType: 'boss', level: 15 },
    });
    
    // 实际上报的 extraInfo ≈
    // { qualityLevel: 'high', userRole: 'vip', battleType: 'boss', level: 15 }
    

> **注意**
> 
>   * `setCommonInfo` 多次调用会**完全覆盖** 之前的值（不是合并）。如需更新某个字段，请传入完整的 `commonInfo` 对象；如需清空 `commonInfo`，请调用 `setCommonInfo({})`。
>   * 初始化 `getScenePerformanceManager({ commonInfo })` 传入的值与后续 `setCommonInfo` 行为一致，后者会整体覆盖前者。
>   * `setData` 多次调用时，每次调用会整体替换当前场景的 `sceneData`，上一次的 `sceneData` 不会保留。
>   * `sceneData` 单独序列化后建议不超过 **1024 字符** ；超出后对应维度字段可能被截断或丢弃，建议控制 key 数量与 value 长度。`commonInfo` 与 `sceneData` 合并后整体大小同样需控制，避免因 `extraInfo` 过大导致上报失败。
> 

### 6\. 运行性能场景上报调试

#### 6.1 开启调试日志

初始化 `getScenePerformanceManager` 时传入 `debug: true` 即可开启调试日志。开启后，每次调用 `setData` 会在控制台打印当前场景 ID 和最终合并后的 `extraInfo` 内容。
    
    
    wx.getScenePerformanceManager({
      debug: true,
      commonInfo: { /* ... */ },
    });
    

#### 6.2 验证上报是否成功

开启调试日志后，每次调用 `setData` 会在控制台打印当前场景 ID 和最终合并后的 `extraInfo` 内容，可用于快速验证调用是否符合预期。后台数据的查看方式见「数据分析」。

> **注意**
> 
>   1. Debug 能力**仅作用于开发版/体验版** 小游戏，正式版下即使传入 `debug: true` 也不会输出任何日志。
>   2. 请确保测试设备**基础库版本 ≥ 3.11.0** （可通过 vConsole 最上面一行确认）。
>   3. 后台数据存在一定的聚合延迟，建议等待片刻后再查看聚合数据。
> 

## 数据分析

平台会将开发者上报的**自定义场景** 与客户端采集的**运行性能指标** （FPS、卡顿、内存等）进行聚合，登录 [微信公众平台](<https://mp.weixin.qq.com>) →「统计」→「基础数据」→「游戏日志分析」→「游戏运行时性能」，可直接查看对应的运行性能日志数据，用于快速核对上报是否符合预期。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/5e91db8e-54c5-4626-870f-292ce4573f68.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/f9b68964-0844-4288-9490-859bb120570c.png)

## 数据上报机制

### 上报流程

  1. 开发者调用 `setData` 标记当前场景。
  2. 基础库将 `sceneId` 与合并后的 `extraInfo`（`commonInfo` \+ `sceneData`）传给客户端。
  3. 客户端在后台**定时采集** FPS / 卡顿 / 内存等运行指标，并携带最近一次的场景信息一起上报。
  4. 服务端按 `sceneId` \+ `extraInfo` 维度进行聚合，供后台查询。

> **说明**
> 
>   * 性能数据为**非实时上报** ，由客户端定时采集后批量上报，后台存在**分钟级聚合延迟** ，具体延迟以后台展示为准。
>   * 调用 `setData` 后，新的场景信息在**下一次采样周期** 生效；场景快速切换时，数据按实际采样时刻归属的最近一次场景归因。
> 

## 注意事项

  1. **基础库兼容** ：本能力需要基础库版本 **≥ 3.11.0** ，仅支持小游戏（不支持小游戏插件/分包独立调用）。Android、iOS支持，开发版/体验版/正式版均会上报，后台数据是否区分版本以实际入口为准。低版本需做兼容处理：
         
         if (wx.getScenePerformanceManager) {
           // 使用运行性能场景上报
         }
         

  2. **调用频率限制** ：客户端侧限制为 30 秒内最多 5 次 `setData` 调用，超出后本次调用不会更新当前场景。请在场景切换的关键节点调用，**避免每帧调用** 。同一 `sceneId` 只更新 `sceneData` 也会计入调用次数。
  3. **`sceneId` 取值**：必须传入在平台「场景管理」中预先注册并生成的 `sceneId`（自然数，≥ 0），不可为负数或 `NaN`。
  4. **`sceneData` 大小限制**：序列化后建议不超过 **1024 字符** ，超出后对应维度字段可能被截断或丢弃。
  5. **维度基数** ：不建议上传用户 ID、时间戳、随机数、局内唯一房间号等高基数字段，否则会影响聚合效果。

## 常见问题

**Q：同一个`sceneId` 可以频繁调用 `setData` 吗？** A：可以。每次调用都会更新当前场景信息和维度数据。但受 **30 秒内最多 5 次** 的限制，建议只在场景切换的关键节点调用。

**Q：上报后多久能在后台看到数据？** A：性能数据为非实时上报，后台存在分钟级聚合延迟，可以在「统计 → 基础数据 → 游戏日志分析 → 游戏运行时性能」验证日志是否已上报，具体延迟以后台展示为准。

## 联系我们

如有任何问题、建议，欢迎扫码联系小助手咨询

![](https://res8.wxqcloud.qq.com.cn/wxdoc/01d047dd-8a6e-4844-94d0-e5fe99809988.png)

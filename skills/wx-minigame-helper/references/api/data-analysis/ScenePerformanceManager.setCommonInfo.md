---
title: "ScenePerformanceManager.setCommonInfo(Object params)"
type: api
category: api/data-analysis
api: "ScenePerformanceManager.setCommonInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/ScenePerformanceManager.setCommonInfo.html
---

# ScenePerformanceManager.setCommonInfo(Object params)

> 基础库 3.11.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

设置通用信息（全局维度），用于描述贯穿所有上报的固定属性（如机型档位、用户角色等）。每次执行 `setData` 时都会自动带上这些信息。多次调用 `setCommonInfo` 会整体覆盖之前设置的参数。

## 参数

### Object params

通用信息设置的参数对象，每次执行 setData 时都会带上这些信息。数据类型为 object，且能够通过 JSON.stringify 序列化。

## 示例代码
    
    
    const scenePerformanceManager = wx.getScenePerformanceManager({ commonInfo: { role: 1 } });
    
    scenePerformanceManager.setCommonInfo({
        role: 2, // 用户角色
    });

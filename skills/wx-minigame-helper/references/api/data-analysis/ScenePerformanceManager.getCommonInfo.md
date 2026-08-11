---
title: "Object ScenePerformanceManager.getCommonInfo()"
type: api
category: api/data-analysis
api: "ScenePerformanceManager.getCommonInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/ScenePerformanceManager.getCommonInfo.html
---

# Object ScenePerformanceManager.getCommonInfo()

> 基础库 3.11.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

获取通用信息（由setCommonInfo数据得到）

## 返回值

### Object

当前已设置的通用信息对象（即最近一次通过 `setCommonInfo` 设置的值，或初始化时通过 `commonInfo` 传入的值；若从未设置则为 `{}`）。

## 示例代码
    
    
    const scenePerformanceManager = wx.getScenePerformanceManager({ debug: true, commonInfo: { role: 1 } });
    
    scenePerformanceManager.setCommonInfo({ role: 1 })
    scenePerformanceManager.getCommonInfo()  // { role: 1 }

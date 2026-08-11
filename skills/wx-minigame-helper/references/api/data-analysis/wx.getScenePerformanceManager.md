---
title: "ScenePerformanceManager wx.getScenePerformanceManager(Object param)"
type: api
category: api/data-analysis
api: "wx.getScenePerformanceManager"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getScenePerformanceManager.html
---

# [ScenePerformanceManager](<ScenePerformanceManager.md>) wx.getScenePerformanceManager(Object param)

> 基础库 3.11.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

该接口专门用于协助开发者分析场景化的运行性能数据。通过上报场景 ID，在查看运行性能数据时，可以筛选场景的性能。 初始化并返回一个ScenePerformanceManager实例，用于记录和管理小游戏性能数据上报。使用前请注意阅读[《运行性能场景上报分析》](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-runtime-reportPerformanceScene.html>)。

## 参数

### Object param

初始化参数对象，可选。

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
commonInfo | Object |  | 否 | 通用信息设置的参数对象，每次执行 setData 时都会带上这些信息。数据类型为 object，且能够通过 JSON.stringify 序列化。  
debug | boolean | false | 否 | 是否开启调试模式。开启后，调用 `setData` 时会在控制台打印本次上报的 `sceneId` 及合并后的附加信息，便于开发阶段核对上报内容。**仅在开发版（develop）和体验版（trial）下生效** ，正式版下即使传入 `true` 也不会输出日志。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### [ScenePerformanceManager](<ScenePerformanceManager.md>)

## 示例代码
    
    
    let scenePerformanceManager = null;
    if (wx.getScenePerformanceManager) {
      scenePerformanceManager = wx.getScenePerformanceManager({
        commonInfo: {
          role: 2, // 用户角色
        }
      });
    }
    
    scenePerformanceManager.setCommonInfo({
        role: 1, // 用户角色
    });
    
    scenePerformanceManager.setData({
        sceneId: 1011,
        sceneData: { level: 1 },
        success(res) {
          console.log('success', res)
        },
        fail(res) {
          console.log('fail', res)
       },
        complete(res) {
          console.log('complete', res)
        }
      });

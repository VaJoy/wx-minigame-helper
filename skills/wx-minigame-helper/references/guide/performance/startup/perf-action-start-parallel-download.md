---
title: "并行下载能力"
type: guide
category: guide/performance/startup
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-parallel-download.html
---

# 并行下载能力

## 概述

随着小游戏的玩法越来越丰富，许多开发者会使用[代码分包](<../../base-ability/subpackage/useSubPackage.md>)的能力，降低小游戏主包的体积，减少小游戏启动耗时，将原有整包资源的下载耗时分摊到后续游戏运行中的分包加载中。

在使用分包后，用户启动流程中仅需要下载较小体积的主包，而后[启动流程](<perf-action-start.md>)将会进入到框架准备和JS注入等CPU密集的阶段，通过实验测试发现，用户的网络带宽并未得到充分利用。 为了能够充分使用用户的网络带宽，我们提供了代码分包的并行下载能力，提前下载后续游戏必要的分包资源，减少用户后续等待分包资源下载的时间，缩短用户进入游戏核心玩法的耗时。

## 并行下载能力介绍

### 实现原理

> **说明：**  
>  游戏首帧 - 用户看到首帧游戏画面的时间   
>  游戏可交互 - 用户最早可操作游戏的时间，通常意义上指 游戏创角 或 进入游戏核心玩法（如大厅、新手指引等）

启动流程中，平台会在网络空闲时，自动将开发者配置好的并行下载代码分包信息提前到和小游戏主包**同时下载** ，后续业务通过 [wx.loadSubpackage](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html>) 加载需并行下载的分包，若并行下载已完成，则会从缓存中直接加载；若并行下载未完成，则复用此并行下载任务，不会重复发起网络请求。并行下载能力适用于使用了代码分包的小游戏，其原理图如下：

![并行下载原理图](https://mmgame.qpic.cn/image/b24fc9dc5ffa20c6190b47d455ab25b790fbff8e69841b0932de26621b28a0eb/0)

### 使用方法

开发者需要提前在 `game.json` 中配置并行下载的分包信息。

假设游戏的目录结构如下：
    
    
    ├── game.js
    ├── game.json
    ├── images
    │   ├── a.png
    │   ├── b.png
    ├── subPkg1
    │   └── game.js
    │   └── images
    │       ├── 1.png
    │       ├── 2.png
    ├── subPkg2
    │   └── game.js
    │   └── images
    │       ├── 1.png
    │       ├── 2.png
    

`game.json`，新增 `parallelPreloadSubpackages` 配置：
    
    
    {
      "subpackages": [
        {
          "name": "sub1",
          "root": "subPkg1/"
        },
        {
          "name": "sub2",
          "root": "subPkg2/"
        }
      ],
      "parallelPreloadSubpackages": [
        {
          "name": "sub1"
        },
        {
          "name": "sub2"
        }
      ]
    }
    

**注意：**

  1. 并行下载能力仅作用于 **正式版** 小游戏。
  2. 因在启动阶段发起了额外的网络请求，并行下载能力对游戏首帧耗时有微小影响，对游戏可交互有正向作用，请结合业务具体情况使用。
  3. 分包并行下载的使用前提是游戏使用了[代码分包](<../../base-ability/subpackage/useSubPackage.md>)能力。
  4. 并行下载仅支持代码分包资源，不支持其他游戏自有资源的下载。

### 效果验证

通过并行下载，能够一定程度上减少启动流程中用户等待资源下载的时长，让用户能更快地与游戏进行交互，通过实验测试，用户进入**游戏可交互耗时** 的时间大概能降低 **`0.5～2s`** 左右。

由于并行下载能力仅作用于正式版小游戏，开发者可考虑通过如下途径验证并行下载能力的效果

  1. 使用[启动场景上报分析](<perf-action-start-reportScene.md>)能力，新建维度，在调用上报接口时带上当前维度对应的维度值信息，通过同一个启动场景（如：游戏可交互）对比使用并行下载能力前后的耗时情况。
  2. 控制版本发布灰度比例，通过筛选自定义维度数据，验证新版本灰度用户与非新版本用户的数据表现。

## 联系我们

如有任何问题，欢迎[联系小助手](<https://res8.wxqcloud.qq.com.cn/wxdoc/0d0a621f-a50f-4a89-8454-2ef762b4fbf0.png>)咨询。

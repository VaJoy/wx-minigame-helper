---
title: "团结小游戏多线程使用说明"
type: guide
category: guide/engine/unity/performance
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/Multithread.html
---

# 团结小游戏多线程使用说明

## 简介

团结引擎已支持小游戏新版 worker 进行并行渲染，将渲染工作分离到 worker 里进行处理，降低主线程压力。

目前支持两种渲染线程：

  * 并行渲染
  * RHI 渲染

两种都依赖小游戏新版worker的offscreencanvas 能力。

## 接入指南

### 小游戏多线程接入

目前多线程能力灰度中，具体见[多线程worker v2](<../../../base-ability/new-worker.md>)灰度说明

### 打开渲染多线程

勾选 Parallel Rendering 或者 Multithreaded rendering（二选一），然后正常导出即可

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f84f4bda-e6fb-4238-8725-222c1fc3afa7.png)

### 小游戏转换

更新转换插件到`v0.1.33`即可。

微信开发者工具暂不支持运行新版多线程小游戏，需要真机预览，具体环境需求见[多线程worker v2](<../../../base-ability/new-worker.md>)

### 多包构建与合并

在开启并行渲染后，导出的包依赖运行环境支持多线程，不能单独发布，需要同时构建单线程包，两个包合并后一起发布，因此我们另外提供了多包融合工具，方便进行合包发布。

推荐流程：

  1. 导出单线程包
  2. 导出多线程包
  3. 使用多包融合工具合包
  4. 上传融合后的包
  5. 运行时根据环境能力自动选择单线程或多线程包

最终效果：

  * 支持多线程能力的环境加载多线程包。
  * 不支持多线程能力的环境加载单线程包。
  * 开发者只需要上传一个融合后的小游戏包。

具体融合见[多包融合说明文档](<../assets/MultiPackage.md>)

## 常见问题

### 只上传多线程包可以吗？

不建议。多线程能力对基础环境有版本要求。

### 合包失败提示 project.config.json 冲突怎么办？

说明单线程包和多线程包的 `project.config.json` 中存在不一致的关键字段。请先统一两个包的小游戏项目配置，然后重新导出并合包。

### 融合后的包能否支持wasm分包？

目前不支持。需要先做wasm分包，再做多包融合。

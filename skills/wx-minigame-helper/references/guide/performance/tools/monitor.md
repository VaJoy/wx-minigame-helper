---
title: "异常分析与监控"
type: guide
category: guide/performance/tools
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/monitor.html
---

# 异常分析与监控

## 背景

为帮助开发者快捷地排查漏洞、定位问题，我们推出了JS错误分析，告警群，告警订阅等功能。开发者可从MP后台【WE分析 -> 性能质量 -> JS分析】进入代码错误日志查询页面，进而查看当前小游戏的错误日志内容。

![./error-log.png](https://res8.wxqcloud.qq.com.cn/wxdoc/51f51d6b-ce0d-4494-8243-d5b7d63d17d9.png) ![./error-log2.png](https://res8.wxqcloud.qq.com.cn/wxdoc/bb0a02c4-1c1f-4d1c-9708-d8f8f57c7990.png)

## 注意事项

### 基于游戏引擎开发的小游戏

基于游戏引擎开发的小游戏，是经过游戏引擎二次打包的，所以如果开发者需要定位到游戏开发的源码，构建小游戏时，需默认勾选输出 source map，小游戏错误日志才可以利用上传的 Source Map 文件进行错误分析

例如 Cocos Creator 引擎中打包时勾选 SourceMap 就可以生成生成 source map，如图所示： ![./source-cocos.png](https://res8.wxqcloud.qq.com.cn/wxdoc/2a7d06aa-970d-42c0-afa6-d89dc7307df8.png)

## 注意事项

  1. **Source Map 文件不计入代码包大小计算，也不会被包含在体验版/正式版代码包中。**
  2. **inline sourcemap 不计入代码包大小计算。**
  3. **详情参见：[Source Map](<../../runtime/debug/SourceMap.md>)**

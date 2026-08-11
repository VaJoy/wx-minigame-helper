---
title: "线上异常问题排查"
type: guide
category: guide/performance/tools
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/debug.html
---

# 线上异常问题排查

当开发者的游戏上线后，可能会遇到一些在开发过程中没有测试到的问题，这些问题可能会在特定的客户端或者基础库版本出现，或者在特殊的游戏场景下出现，此时需要看游戏线上运行日志才能知道如何复现问题以便进行排查修复。

平台提供了两种主动记录线上日志的API，[LogManager](<https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.html>)和[RealtimeLogManager](<https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.html>)，这两个API的区别在于日志存储的位置不同：

  * [LogManager](<https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.html>)的日志存储在用户的客户端缓存中，仅在用户反馈时上传。建议开发者在大部分场景都应该接入，便于排查线上问题。

  * [RealtimeLogManager](<https://developers.weixin.qq.com/minigame/dev/api/base/debug/RealtimeLogManager.html>)则是把日志实时上传到了小程序后台，增加了运营维护成本。实时日志的功能区分了基础版和专业版，如果游戏体量较大，建议开启专业版。如果只用基础版，可存数据较少，建议只在非常关键的错误位置进行上报，例如支付等模块。

## 用户反馈日志

在游戏逻辑中使用[wx.getLogManager](<https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.getLogManager.html>)，这些日志会记录在用户本地缓存（最多保存 5M 的日志内容），当用户向开发者反馈时，开发者可以在【MP后台 -> 功能 -> 用户反馈】找到反馈的用户，点用户左侧的【+】，在相关日志点【下载】，下载 log 文件后在本地查看该用户日志

[LogManager 使用说明](<https://developers.weixin.qq.com/minigame/dev/api/base/debug/LogManager.html>)
    
    
    const logger = wx.getLogManager({ level: 1 });
    // 以下代码示例仅表示可传的参数类型，具体参数内容需要根据实际使用场景自行定义
    logger.log({ str: "hello world" }, "basic log", 100, [1, 2, 3]);
    logger.info({ str: "hello world" }, "info log", 100, [1, 2, 3]);
    logger.warn({ str: "hello world" }, "warn log", 100, [1, 2, 3]);
    logger.debug({ str: "hello world" }, "debug log", 100, [1, 2, 3]);
    
    // 例如当用户反馈广告打不开时，如果想查看用户广告拉起失败的原因，可以这样用：
    let videoAd = wx.createRewardedVideoAd({
      adUnitId: "adunit-xxx"
    });
    videoAd.onError(res => {
      logger.debug({
        type: "videoAd",
        result: `videoAd error:${res.errCode} ${res.errMsg}`
      });
    });
    videoAd.show().catch(() => {
      logger.warn({ type: "videoAd", result: "videoAd show error, try again" });
      // ...
    });
    

## 用户实时日志

开发者可以通过[wx.getGameLogManager](<https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getGameLogManager.html>)来实时上报用户操作日志，日志会汇聚并上报到小游戏管理后台，开发者可从小游戏管理后台 “基础数据 -> 游戏日志分析”进入日志分析页面，查看开发者上报的相关日志信息。

具体介绍详见[游戏日志分析使用说明](<../../runtime/debug/gamelogmanager.md>)

## 代码错误日志

为帮助开发者快捷地排查漏洞、定位问题，我们推出了JS错误分析，告警群，告警订阅等功能。开发者可从MP后台【WE分析 -> 性能质量 -> JS分析】进入代码错误日志查询页面，进而查看当前小游戏的错误日志内容。

具体介绍详见[异常分析与监控](<monitor.md>)

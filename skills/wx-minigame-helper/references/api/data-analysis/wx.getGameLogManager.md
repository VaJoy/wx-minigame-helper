---
title: "GameLogManager wx.getGameLogManager(Object param)"
type: api
category: api/data-analysis
api: "wx.getGameLogManager"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.getGameLogManager.html
---

# [GameLogManager](<GameLogManager.md>) wx.getGameLogManager(Object param)

> 基础库 3.7.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

初始化并返回一个游戏日志管理器实例，用于记录和管理游戏日志。

## 参数

### Object param

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
commonInfo | Object |  | 否 | 自定义全局日志信息。该信息会包含在每条日志的基础信息中。数据类型为 object，且能够通过 JSON.stringify 序列化。  
debug | boolean | false | 否 | 是否开启调试模式，调试模式下每次上报成功都会在控制台输出上报内容。调试模式仅在开发版和体验版小游戏中生效。  
success | function |  | 否 | 初始化成功后的回调。  
fail | function |  | 否 | 初始化失败后的回调。  
complete | function |  | 否 | 初始化完成后的回调（成功、失败都会执行）。  
  
## 返回值

### [GameLogManager](<GameLogManager.md>)

## 上报限制

单次游戏生命周期内，上报日志的条数最大为999条。 单条日志体积最大为16KB。 超出上报限制，日志将无法上报成功。

## 示例代码

1、调用 wx.getGameLogManager 获取游戏日志管理器实例，为了兼容旧的基础库版本，在使用游戏日志上报相关功能时，建议使用如下代码封装一下，例如将相关兼容代码封装在本地的`gamelog.js`中：
    
    
    let logger = null;
    if (wx.getGameLogManager) {
      logger = wx.getGameLogManager({
        commonInfo: {
          version: "1.0.0",
          env: "prod"
        }
      });
    }
    export const gameLogAdaptor = {
      log() {
        if (!logger) console.log.apply(logger, arguments); // 防止低版本基础库调用报错
        logger.log.apply(logger, arguments);
      },
      tag() {
        if (!logger) return console;
        return logger.tag.apply(logger, arguments);
      },
      getCommonInfo() {
        if (!logger) return {};
        return logger.getCommonInfo.apply(logger, arguments);
      },
      updateCommonInfo() {
        if (!logger) console.log.apply(logger, arguments);
        logger.updateCommonInfo.apply(logger, arguments);
      }
    };
    

2、在游戏逻辑合适的位置打印相关的日志
    
    
    import { gameLogAdaptor } from "./gamelog.js"; // 引用上面的gamelog.js文件，具体路径以游戏实现为准
    
    // 使用tag后的上报方法上报日志
    const cacheLogger = gameLogAdaptor.tag("cache"); // 用于缓存相关日志上报
    cacheLogger.warn("cache not found", { key: "tableCache" }); // 上报 warn 级别的日志
    
    // 直接使用log方法上报日志
    gameLogAdaptor.log({
      level: "info",
      key: "login",
      value: { loginTime: "1731915939" }
    });

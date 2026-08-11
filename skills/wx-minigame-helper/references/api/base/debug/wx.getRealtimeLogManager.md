---
title: "RealtimeLogManager wx.getRealtimeLogManager()"
type: api
category: api/base/debug
api: "wx.getRealtimeLogManager"
source: https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.getRealtimeLogManager.html
---

# [RealtimeLogManager](<RealtimeLogManager.md>) wx.getRealtimeLogManager()

> 基础库 2.14.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取实时日志管理器对象。

## 返回值

### [RealtimeLogManager](<RealtimeLogManager.md>)

## 示例代码
    
    
    // 小程序端
    const logger = wx.getRealtimeLogManager()
    logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
    logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
    logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
    
    // 插件端，基础库 2.16.0 版本后支持，只允许采用 key-value 的新格式上报
    const logManager = wx.getRealtimeLogManager()
    const logger = logManager.tag('plugin-log1')
    logger.info('key1', 'value1')
    logger.error('key2', {str: 'value2'})
    logger.warn('key3', 'value3')

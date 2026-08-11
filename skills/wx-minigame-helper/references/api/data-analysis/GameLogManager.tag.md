---
title: "Object GameLogManager.tag(string key)"
type: api
category: api/data-analysis
api: "GameLogManager.tag"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.tag.html
---

# Object GameLogManager.tag(string key)

> 基础库 3.7.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

tag 方法接受一个字符串参数，作为上报日志的 key 。同时返回 info、warn、error、debug 四个上报方法。若不传入 key 参数，上报使用默认 key 'default'。与使用 log 方法上报不同，使用 tag 返回的方法上报日志，不需要重复设置日志等级、日志标签，简化了上报操作。

## 参数

### string key

日志标签，用于日志分类（如 登录、战斗……）。key 只能是 string 类型，且能够通过 JSON.stringify 序列化。若不传入 key 参数，上报使用默认 key 'default'。

## 返回值

### Object

返回对象 object，包含 info、warn、error、debug 四个上报方法的对象。

属性 | 类型 | 说明  
---|---|---  
info | function | 上报 info 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。  
warn | function | 上报 warn 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。  
error | function | 上报 error 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。  
debug | function | 上报 debug 级别的日志，仅支持传入日志内容。key 固定为 tag 传入的参数。  
  
## 示例代码
    
    
    const logger = wx.getGameLogManager({
      commonInfo: { version: '1.0.0' },
    })
    
    const newUserLogger = logger.tag('newUser') // 用于登录相关日志上报
    newUserLogger.info('userName', false) // 上报 info 级别的日志
    
    const cacheLogger = logger.tag('cache') // 用于缓存相关日志上报
    cacheLogger.warn('cache not found', { key: 'tableCache' }) // 上报 warn 级别的日志
    
    const navigationLogger = logger.tag('navigation')
    navigationLogger.error({ reason: 'no permission' })

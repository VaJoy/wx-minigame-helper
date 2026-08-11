---
title: "GameLogManager.log(Object param)"
type: api
category: api/data-analysis
api: "GameLogManager.log"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.log.html
---

# GameLogManager.log(Object param)

> 基础库 3.7.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

上报日志。log 方法支持在上报时传入日志等级、日志标签和日志内容。可设置上报后的回调函数。

## 参数

### Object param

日志上报的参数对象。

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
level | string |  | 是 | 日志等级，用于标识日志的级别和重要性。只能是'info'、'warn'、'error'、'debug'中的一种。  
key | string | 'default' | 是 | 日志标签，用于日志分类（如 登录、战斗……）。key 只能是 string 类型，且能够通过 JSON.stringify 序列化。若不传入 key 参数，上报使用默认 key 'default'。  
value | Object/Array.<any>/number/string/boolean |  | 是 | 日志内容。value 可以是 string/number/boolean/array/object 类型，且能够通过 JSON.stringify 序列化。  
success | function |  | 否 | 上报成功后的回调。  
fail | function |  | 否 | 上报失败后的回调。  
complete | function |  | 否 | 上报完成后的回调，成功、失败都会执行。  
  
## 示例代码
    
    
    const logger = wx.getGameLogManager({
      commonInfo: { version: '1.0.0' },
    })
    logger.log({
      level: 'info',
      key: 'login',
      value: { loginTime: '1731915939' },
    })

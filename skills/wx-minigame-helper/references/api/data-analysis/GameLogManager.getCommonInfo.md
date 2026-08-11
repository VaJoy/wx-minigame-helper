---
title: "Object GameLogManager.getCommonInfo()"
type: api
category: api/data-analysis
api: "GameLogManager.getCommonInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.getCommonInfo.html
---

# Object GameLogManager.getCommonInfo()

> 基础库 3.7.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

读取当前 logger 的全局 commonInfo 对象。

## 返回值

### Object

当前 logger 的全局 commonInfo 对象。

## 示例代码
    
    
    const logger = wx.getGameLogManager({
      commonInfo: { env: 'production' }
    })
    logger.getCommonInfo() // { env: 'production' }

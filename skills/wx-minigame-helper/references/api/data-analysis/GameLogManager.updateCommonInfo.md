---
title: "GameLogManager.updateCommonInfo(Object newCommonInfo)"
type: api
category: api/data-analysis
api: "GameLogManager.updateCommonInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.updateCommonInfo.html
---

# GameLogManager.updateCommonInfo(Object newCommonInfo)

> 基础库 3.7.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

该方法接受一个对象，并将其与当前logger的全局 commonInfo 对象进行合并。合并操作仅限于第一层属性，嵌套的属性将保持不变。如果合并的对象中存在与当前 commonInfo 相同的属性，则新属性将覆盖旧属性。

## 参数

### Object newCommonInfo

新的 commonInfo 对象。数据类型为 object，且能够通过 JSON.stringify 序列化。

## 示例代码
    
    
    const logger = wx.getGameLogManager({
      commonInfo: { env: 'dev' }
    })
    logger.setCommonInfo({ version: '1.0.0' })
    logger.getCommonInfo()  // { env: 'dev', version: '1.0.0' }
    
    logger.setCommonInfo({ env: 'production' })
    logger.getCommonInfo()  // { env: 'production', version: '1.0.0' }

---
title: "GameServerManager.onLockStepError(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onLockStepError"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLockStepError.html
---

# GameServerManager.onLockStepError(function listener)  
  
> 基础库 2.11.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听帧同步出错

## 参数

### function listener

的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
errCode | number | 错误码  
errMsg | string | 错误原因

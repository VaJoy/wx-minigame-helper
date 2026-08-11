---
title: "GameServerManager.offLockStepError(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offLockStepError"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLockStepError.html
---

# GameServerManager.offLockStepError(function listener)

> 基础库 2.11.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除帧同步出错的监听函数

## 参数

### function listener

onLockStepError 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onLockStepError(listener)
    GameServerManager.offLockStepError(listener) // 需传入与监听时同一个的函数对象

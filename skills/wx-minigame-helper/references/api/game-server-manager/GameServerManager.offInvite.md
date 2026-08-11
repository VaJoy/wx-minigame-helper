---
title: "GameServerManager.offInvite(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offInvite"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offInvite.html
---

# GameServerManager.offInvite(function listener)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除接收邀请，当用户确认邀请之后会收到此事件的监听函数

## 参数

### function listener

onInvite 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onInvite(listener)
    GameServerManager.offInvite(listener) // 需传入与监听时同一个的函数对象

---
title: "GameServerManager.offMatch(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offMatch"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offMatch.html
---

# GameServerManager.offMatch(function listener)

> 基础库 2.14.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

移除游戏匹配成功的事件的监听函数

## 参数

### function listener

onMatch 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onMatch(listener)
    GameServerManager.offMatch(listener) // 需传入与监听时同一个的函数对象

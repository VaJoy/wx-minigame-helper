---
title: "GameServerManager.offGameStart(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offGameStart"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offGameStart.html
---

# GameServerManager.offGameStart(function listener)

## 功能描述

移除帧同步游戏开始的监听函数

## 参数

### function listener

onGameStart 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onGameStart(listener)
    GameServerManager.offGameStart(listener) // 需传入与监听时同一个的函数对象

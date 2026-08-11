---
title: "GameServerManager.offDisconnect(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offDisconnect"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offDisconnect.html
---

# GameServerManager.offDisconnect(function listener)

## 功能描述

移除断开连接，收到此事件的监听函数

## 参数

### function listener

onDisconnect 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onDisconnect(listener)
    GameServerManager.offDisconnect(listener) // 需传入与监听时同一个的函数对象

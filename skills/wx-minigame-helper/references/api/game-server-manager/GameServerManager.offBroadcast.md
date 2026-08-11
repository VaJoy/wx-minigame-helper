---
title: "GameServerManager.offBroadcast(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offBroadcast"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBroadcast.html
---

# GameServerManager.offBroadcast(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除收到同个房间内的广播消息的监听函数

## 参数

### function listener

onBroadcast 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onBroadcast(listener)
    GameServerManager.offBroadcast(listener) // 需传入与监听时同一个的函数对象

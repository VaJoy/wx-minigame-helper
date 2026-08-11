---
title: "GameServerManager.offRoomInfoChange(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offRoomInfoChange"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offRoomInfoChange.html
---

# GameServerManager.offRoomInfoChange(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除房间信息更新的监听函数

## 参数

### function listener

onRoomInfoChange 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onRoomInfoChange(listener)
    GameServerManager.offRoomInfoChange(listener) // 需传入与监听时同一个的函数对象

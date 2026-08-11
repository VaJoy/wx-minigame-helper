---
title: "GameServerManager.offSyncFrame(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offSyncFrame"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offSyncFrame.html
---

# GameServerManager.offSyncFrame(function listener)

## 功能描述

移除收到同个房间的帧同步消息的监听函数

## 参数

### function listener

onSyncFrame 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onSyncFrame(listener)
    GameServerManager.offSyncFrame(listener) // 需传入与监听时同一个的函数对象

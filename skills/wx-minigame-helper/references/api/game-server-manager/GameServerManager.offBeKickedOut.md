---
title: "GameServerManager.offBeKickedOut(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offBeKickedOut"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offBeKickedOut.html
---

# GameServerManager.offBeKickedOut(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除自己被踢出当前房间的监听函数

## 参数

### function listener

onBeKickedOut 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onBeKickedOut(listener)
    GameServerManager.offBeKickedOut(listener) // 需传入与监听时同一个的函数对象

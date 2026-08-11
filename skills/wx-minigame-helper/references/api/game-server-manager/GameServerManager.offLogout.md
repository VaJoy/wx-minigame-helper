---
title: "GameServerManager.offLogout(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offLogout"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offLogout.html
---

# GameServerManager.offLogout(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除用户登出游戏服务事件的监听函数

## 参数

### function listener

onLogout 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onLogout(listener)
    GameServerManager.offLogout(listener) // 需传入与监听时同一个的函数对象

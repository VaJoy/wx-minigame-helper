---
title: "GameServerManager.offStateUpdate(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.offStateUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.offStateUpdate.html
---

# GameServerManager.offStateUpdate(function listener)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

移除好友在线状态变更（该接口需要在开放数据域使用）的监听函数

## 参数

### function listener

onStateUpdate 传入的监听函数。不传此参数则移除所有监听函数。

## 示例代码
    
    
    const listener = function (res) { console.log(res) }
    
    GameServerManager.onStateUpdate(listener)
    GameServerManager.offStateUpdate(listener) // 需传入与监听时同一个的函数对象

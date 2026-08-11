---
title: "Promise GameServerManager.restart(Object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.restart"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.restart.html
---

# Promise GameServerManager.restart(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

重启游戏并进入"组队中"的状态。如果当前房间游戏已结束，调用可进入"组队中"状态并重置所有玩家的准备状态；如果当前房间已经在"组队中"状态，调用不改变状态；如果当前房间游戏进行中，调用失败。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

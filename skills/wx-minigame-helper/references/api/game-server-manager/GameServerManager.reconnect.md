---
title: "Promise<ReconnectSuccessRes> GameServerManager.reconnect(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.reconnect"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html
---

# Promise<[ReconnectSuccessRes](<ReconnectSuccessRes.md>)> GameServerManager.reconnect(object object)

## 功能描述

重连游戏服务。如果此时连接并未断开或游戏未开始，会直接成功；如果游戏已开始并且连接已断开，会进行重连，并返回此时服务器的最大帧号。

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
accessInfo | string |  | 是 | 需要重连的对局房间唯一标识  
  
## 返回值

### Promise.<[ReconnectSuccessRes](<ReconnectSuccessRes.md>)>

调用结果返回的 Promise。resolve 后返回 reconnectSuccessRes

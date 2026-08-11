---
title: "GameServerManager.onDisconnect(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onDisconnect"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onDisconnect.html
---

# GameServerManager.onDisconnect(function listener)  
  
## 功能描述

监听断开连接，收到此事件后，需要调用 `GameServerManager.reconnect` 进行重连

## 参数

### function listener

断开连接，收到此事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  res | Object |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  type | string |   
| |  合法值 | 说明  
---|---  
room | 房间服务断开连接，只有在进入房间后有机会收到。房间服务断开连接后，将无法进行房间相关的操作，以及无法收到房间信息变化事件。  
game | 游戏服务断开连接，只有在游戏开始后有机会收到。游戏服务断开连接后，将无法收发帧。

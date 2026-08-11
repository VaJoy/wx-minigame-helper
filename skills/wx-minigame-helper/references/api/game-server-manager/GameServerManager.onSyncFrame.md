---
title: "GameServerManager.onSyncFrame(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onSyncFrame"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html
---

# GameServerManager.onSyncFrame(function listener)  
  
## 功能描述

监听收到同个房间的帧同步消息

## 参数

### function listener

的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
frameId | number | 帧号，从 1 开始递增  
actionList | Array.<string>/Array.<ArrayBuffer> | 帧数据列表，如果为空则说明该帧是空帧，每一项的类型与配置项 `lockStepOption.dataType` 一致

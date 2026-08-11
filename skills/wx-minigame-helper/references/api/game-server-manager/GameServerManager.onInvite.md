---
title: "GameServerManager.onInvite(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onInvite"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onInvite.html
---

# GameServerManager.onInvite(function listener)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听接收邀请，当用户确认邀请之后会收到此事件

## 参数

### function listener

接收邀请，当用户确认邀请之后会收到此事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
res | Object |   
openId | string | 邀请者的 openId  
data | string | 邀请者附带的额外信息

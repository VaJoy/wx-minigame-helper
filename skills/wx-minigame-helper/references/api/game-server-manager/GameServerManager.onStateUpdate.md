---
title: "GameServerManager.onStateUpdate(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onStateUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onStateUpdate.html
---

# GameServerManager.onStateUpdate(function listener)  
  
> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听好友在线状态变更（该接口需要在开放数据域使用）

## 参数

### function listener

的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  res | Object |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  userState | string | 该玩家的自定义状态信息  
|  sysState | number | 系统状态，0 掉线 1 在线  
|  openId | string | 好友 openId

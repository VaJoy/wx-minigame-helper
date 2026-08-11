---
title: "GameServerManager.onMatch(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onMatch"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html
---

# GameServerManager.onMatch(function listener)

> 基础库 2.14.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听游戏匹配成功的事件

## 参数

### function listener

游戏匹配成功的事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  res | Object |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  matchId | string | 与 startMatch 一致的 matchId  
|  openId | string | 自己的 openId  
|  roomServiceAccessInfo | string | 房间服务的accessinfo，如果matchid中指定需要匹配完成时创建房间服务，则会携带下来，后续调用房间服务相关接口加入房间即可  
|  raceId | string | 唯一的本次对局id  
|  groupInfoList | Array.<Object> | 匹配到的队伍信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  groupIndex | number | 队伍的序号  
|  memberInfoList | Array.<Object> | 队伍中成员信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  memberIndex | number | 成员的序号  
|  openId | string | 队伍中成员的openid  
|  nickName | string | 队伍中成员的昵称  
|  avatarUrl | string | 队伍中成员的头像

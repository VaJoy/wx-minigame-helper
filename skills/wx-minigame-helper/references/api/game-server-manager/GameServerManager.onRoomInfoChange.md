---
title: "GameServerManager.onRoomInfoChange(function listener)"
type: api
category: api/game-server-manager
api: "GameServerManager.onRoomInfoChange"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onRoomInfoChange.html
---

# GameServerManager.onRoomInfoChange(function listener)  
  
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听房间信息更新

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
|  appId | string | 小游戏 appId  
|  roomIdStr | number | 房间 ID  
|  roomState | number | 房间状态  
| |  合法值 | 说明  
---|---  
1 | 组队中  
2 | 该房间的对局游戏已开始  
3 | 该房间的对局游戏已结束  
4 | 房间已销毁  
5 | 房间连接已建立，等待对战连接建立  
|  maxMemberNum | number | 房间最多可容纳人数  
|  createTimestamp | number | 创建时间  
|  updateTimestamp | number | 最近更新时间  
|  gameTick | number | 游戏下发帧的时间间隔，单位 ms  
|  startPercent | number | 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。  
|  roomExtInfo | string | 游戏自定义的关于房间的扩展信息  
|  gameLastTime | number | 游戏对局时长，单位 s  
|  udpReliabilityStrategy | number | UDP可靠性策略， 0：全冗余 N：固定冗余N帧  
|  memberList | Array.<Object> | 成员列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  isReady | boolean | 玩家准备状态  
|  role | number | 角色  
| |  合法值 | 说明  
---|---  
0 | 普通成员  
1 | 房主  
|  posNum | number | 座位号，从 0 开始  
|  headimg | string | 头像 URL（房间 needUserInfo 为 true 时才会有）  
|  nickname | string | 用户昵称（房间 needUserInfo 为 true 时才会有）  
|  clientId | number | 用户在房间内的唯一标识  
|  enableToStart | boolean | 是否已做好游戏开始准备（调用过 startGame）  
|  memberExtInfo | string | 游戏自定义的关于成员的扩展信息  
  
|  seed | string | 游戏随机种子

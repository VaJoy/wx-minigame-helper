---
title: "Promise GameServerManager.getLastRoomInfo(Object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.getLastRoomInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getLastRoomInfo.html
---

# Promise GameServerManager.getLastRoomInfo(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取最近参与房间的 accessInfo

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  data | object |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  accessInfo | string | 最近参与房间的 accessInfo  
|  roomInfo | Object | 最近参与房间的详细信息  
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
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

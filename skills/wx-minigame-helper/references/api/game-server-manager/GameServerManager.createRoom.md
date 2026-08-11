---
title: "Promise GameServerManager.createRoom(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.createRoom"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.createRoom.html
---

# Promise GameServerManager.createRoom(object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建游戏房间

## 参数

### object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  maxMemberNum | number |  | 是 | 房间最大人数  
|  startPercent | number | 0 | 否 | 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。  
|  needUserInfo | boolean | false | 否 | 是否需要用户头像和昵称  
| |  合法值 | 说明  
---|---  
true | 需要用户头像和昵称，则每个加入房间的人必须授权过用户信息，MemberInfo 中会有 headimage 和 nickname  
false | 不需要用户头像和昵称，MemberInfo 中不会有 headimage 和 nickname  
|  gameLastTime | number | 1200 | 否 | 游戏对局时长，到达指定时长时游戏会结束，最大值 3600。  
|  roomExtInfo | string |  | 否 | 游戏自定义的关于房间扩展信息，其他人可在 `RoomInfo` 中读取到最多 32 个字节  
|  memberExtInfo | string |  | 否 | 游戏自定义的关于个人的扩展信息，其他人可在 `MemberInfo` 中读取到，最多 32 个字节  
|  needGameSeed | boolean | false | 否 | 是否需要生成游戏随机种子，设置为 true，房间信息会携带 gameSeed 属性  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  data | object |   
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  accessInfo | string | 房间唯一标识  
|  clientId | number | 用户在房间内的唯一标识  
  
|  errMsg | string | 错误信息  
|  errCode | number | 错误码  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

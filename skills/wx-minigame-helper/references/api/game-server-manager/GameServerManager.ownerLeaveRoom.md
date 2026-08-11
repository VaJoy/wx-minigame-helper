---
title: "Promise GameServerManager.ownerLeaveRoom(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.ownerLeaveRoom"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.ownerLeaveRoom.html
---

# Promise GameServerManager.ownerLeaveRoom(object object)  
  
> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

房主退出房间，`assign_owner_to_pos_num` 参数被优先处理，其次是 `assign_to_min_pos_num`，如果二者都没有被设置，则房主退出且房间销毁。

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
accessInfo | string |  | 是 | 游戏房间访问凭证  
assignOwnerToPosNum | boolean |  | 否 | 指定座位号的玩家接任房主角色，优先级高于 assignToMinPosNum  
assignToMinPosNum | boolean |  | 否 | 自动指定最小座位号玩家作为新房主  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

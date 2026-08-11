---
title: "Promise GameServerManager.broadcastInRoom(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.broadcastInRoom"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.broadcastInRoom.html
---

# Promise GameServerManager.broadcastInRoom(object object)  
  
> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

在房间内广播

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
msg | string |  | 是 | 广播内容  
toPosNumList | Array.<number> |  | 是 | 给座位号为哪些的玩家发送信息，不填代表给房间所有人发送  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

---
title: "Promise GameServerManager.joinRoom(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.joinRoom"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html
---

# Promise GameServerManager.joinRoom(object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

加入游戏房间

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
accessInfo | string |  | 是 | 游戏房间访问凭证  
memberExtInfo | string |  | 否 | 游戏自定义的关于个人的扩展信息，其他人可在 `MemberInfo` 中读取到，最多 32 个字节  
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
|  myPos | number | 加入房间后被分配的座位号  
|  clientId | number | 用户在房间内的唯一标识  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

---
title: "Promise GameServerManager.getJoinVoIPChatSignature(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.getJoinVoIPChatSignature"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getJoinVoIPChatSignature.html
---

# Promise GameServerManager.getJoinVoIPChatSignature(object object)  
  
> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取实时语音签名，签名的 groupId 与当前房间服务的房间 ID 绑定

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
subRoomId | string |  | 否 | 子房间 ID，用于区分同一房间下的不同语音子房间  
voipType | number |  | 否 | voip 房间类型，1 为整个游戏房间，2 为子房间  
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
|  signature | string | 签名  
|  nonceStr | string | 随机字符串  
|  timeStamp | number | 时间戳  
|  groupId | string | 语音房间的 groupId  
  
|  errMsg | string | 错误信息  
|  errCode | number | 错误码  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

---
title: "Promise GameServerManager.getLostFrames(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.getLostFrames"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getLostFrames.html
---

# Promise GameServerManager.getLostFrames(object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

补帧，补帧区间为 [beginFrameId, endFrameId)，即左闭右合。

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
beginFrameId | number |  | 是 | 起始帧号。不填或非法值默认从第 1 帧开始补  
endFrameId | number |  | 是 | 结尾帧号。不填或非法值默认补到当前最新帧  
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
|  frameList | Array.<Frame> | 丢失的帧数组  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

---
title: "Promise GameServerManager.cancelMatch(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.cancelMatch"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.cancelMatch.html
---

# Promise GameServerManager.cancelMatch(object object)

> 基础库 2.14.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

取消游戏匹配

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
matchId | string |  | 是 | 需要取消匹配的matchId  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 返回值

### Promise

调用结果返回的 Promise，resolve/reject 回调结果对应 success/fail。

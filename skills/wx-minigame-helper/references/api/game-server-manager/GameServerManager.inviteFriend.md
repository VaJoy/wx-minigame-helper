---
title: "GameServerManager.inviteFriend(object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.inviteFriend"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.inviteFriend.html
---

# GameServerManager.inviteFriend(object object)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

邀请好友，该好友的系统状态必须为在线（该接口需要在开放数据域使用）该接口没有回调也没有返回值

## 参数

### object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
openId | string |  | 是 | 被邀请玩家的 openId  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

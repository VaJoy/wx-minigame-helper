---
title: "GameServerManager.getFriendsStateData(Object object)"
type: api
category: api/game-server-manager
api: "GameServerManager.getFriendsStateData"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html
---

# GameServerManager.getFriendsStateData(Object object)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **[用户授权](<../../guide/base-ability/authorize.md>)** ：需要 scope.WxFriendInteraction
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取所有好友的在线状态及信息。该接口需要用户授权，且只在开放数据域下可用。

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
|  list | Array.<Object> | 好友状态信息列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  userState | string | 该玩家的自定义状态信息，通过 `GameServerManager.setState` 接口设置  
|  sysState | number | 系统状态，0 掉线 1 在线  
|  openId | string | 好友 openId  
|  nickName | string | 好友昵称  
|  avatarUrl | string | 好友头像  
|  gender | number | 好友性别 0未设置 1男 2女

---
title: "GameServerManager wx.getGameServerManager()"
type: api
category: api/game-server-manager
api: "wx.getGameServerManager"
source: https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/wx.getGameServerManager.html
---

# [GameServerManager](<GameServerManager.md>) wx.getGameServerManager()

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取 **全局唯一** 的游戏服务管理器。注意：`GameServerManager.inviteFriend`、`GameServerManager.onStateUpdate`、`GameServerManager.offStateUpdate`、`GameServerManager.getFriendsStateData` 这几个接口只允许在开放数据域内使用，其他接口则只允许在游戏域内使用。

## 返回值

### [GameServerManager](<GameServerManager.md>)

## 错误

错误码 | 错误信息 | 说明  
---|---|---  
1001 | has not logged in to server | 未登录到服务器就调用接口  
2100 |  | 登录帧同步服务器超时  
2101 |  | 重连帧同步服务器超时  
2200 |  | 登录帧同步服务器错误或失败导致的disconnect  
2201 |  | 长期未收到帧导致的disconnect  
2202 |  | 长期未收到心跳导致的disconnect  
2203 |  | 断线过久，无法重连导致的disconnect  
2204 |  | UDPconnectionfail导致的disconnect  
2300 |  | UDPsocketerror  
2301 |  | UDPsystemerror  
2303 |  | UDPaddresserror  
2304 |  | UDPporterror  
2305 |  | UDPsenderror  
2401 |  | 登录帧同步服务器成功之前发送帧  
2402 |  | frame长度超过MTU  
4001 | system error | 系统错误  
4002 | record not exist | 访问记录不存在  
4003 | invalid req | 非法请求  
4005 | invalid room state | 房间状态异常  
4006 | reach room member limit | 房间到达人数上限，无法加入  
4009 | headimg and nickname is not authorized by the user | 该房间需要用户头像昵称，但用户未授权  
4010 | fail to start game | 启动游戏失败  
4011 | fail to broadcast | 广播消息失败  
4013 | buffer overflow | 自定义 buffer 超过指定大小（matchInfo 和 extInfo）  
200000 |  | 无效的请求参数  
200006 |  | matchid此时为未打开状态  
500001 |  | 用户已经在匹配队列中  
500003 |  | 用户未在匹配队列中  
500005 |  | 无效的match_id  
500009 |  | 路由到错误的服务器

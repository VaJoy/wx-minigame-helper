---
title: "游戏服务"
type: guide
category: guide/open-ability/gameplay
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-server.html
---

## 游戏服务

微信提供了一套游戏服务，用于帮助开发者快速开发后台相关玩法。

### 接入方式

获取游戏服务管理对象：通过 `wx.getGameServerManager` 接口可以获取游戏服务管理对象，游戏服务相关的方法都通过该对象调用。通过 `GameServerManager.login` 接口可以登录到游戏服务，大部分游戏服务需要在登录后才能使用。登录之后有可能因为网络切换或其他原因被动退出，通过 `GameServerManager.onLogout` 可以监听退出登录事件，可以在网络恢复正常的时候重新调用 `GameServerManager.login` 进行登录。在不再要使用游戏服务的时候，可以调用 `GameServerManager.logout` 主动退出。

### 服务列表

  * [帧同步游戏服务](<lock-step.md>)
  * [房间服务](<roomservice.md>)
  * [好友状态及在线邀请](<../account/user-status.md>)
  * [对局匹配](<gamematch.md>)

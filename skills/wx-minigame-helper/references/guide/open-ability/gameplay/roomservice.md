---
title: "房间服务"
type: guide
category: guide/open-ability/gameplay
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/roomservice.html
---

## 房间服务

房间服务是[游戏服务](<game-server.md>)的一项，适用于多人游戏。可以进行房间内信息的广播，也支持开启[帧同步服务](<lock-step.md>)。

### 功能介绍

小游戏可以创建游戏房间，邀请好友或者其他玩家加入，进行房间内的信息同步或者开启[帧同步服务](<lock-step.md>)。

在同一个游戏房间内的用户可以通过房间内广播与房间内各个成员进行通信。

在房间内成员信息满足房间服务设置的情况下，各个玩家调用[startGame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html>)接口后 ，则会开启帧同步服务，用于游戏对局内各个玩家的操作和信息同步。

### 开发

#### 创建游戏房间

  1. 小游戏内直接创建：[GameServerManager.createRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.createRoom.html>)
  2. 后台http接口创建：[lock-step.createGameRoom](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.creategameroom>)
  3. 对局匹配结果中下发：[GameServerManager.onMatch](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html>)

创建房间成功后会返回房间唯一标识：`accessInfo`，加入房间时需要携带该信息。

房间服务会缓存房间信息2个小时。如果游戏房间2个小时没有状态变更（例如玩家加入退出，发送广播信息等），则会自动销毁。
    
    
    server.createRoom({
        maxMemberNum: 2,
        startPercent: 100,
        needUserInfo: true,
    }).then(res => {
        console.log(res.data)
    });
    

#### 加入游戏房间

调用[GameServerManager.joinRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html>)可以加入由`accessInfo`指定的游戏房间。

在加入房间时，可以设置`memberExtInfo`字段，用于个人信息标识。在拉取房间信息时会得到各个成员设置的`memberExtInfo`字段。
    
    
    server.joinRoom({accessInfo});
    

#### 获取房间信息

用户可以通过[GameServerManager.getRoomInfo](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getRoomInfo.html>)获取当前房间信息及各个成员信息。

如果用户断线并重连，会失去上次连接的登陆态。可用通过[GameServerManager.getLastRoomInfo](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getLastRoomInfo.html>)获取上次加入的房间信息。

如果房间没有销毁，并且该房间状态合法（游戏逻辑自行判定），则可以通过`accessInfo`重新加入房间。
    
    
    server.getRoomInfo().then((res) => {
      console.log(res)
    }
    server.getLastRoomInfo().then((res) => {
    	console.log(res)
    }
    

#### 监听房间信息变更

小游戏需要通过[GameServerManager.onRoomInfoChange](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onRoomInfoChange.html>)函数监听房间成员信息变更。
    
    
    server.onRoomInfoChange(function (res) {
      console.log('来自系统的onRoomInfoChange')
      console.log(res)
    });
    

#### 发送接口广播信息

小游戏可以通过[GameServerManager.broadcastInRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.broadcastInRoom.html>)接口发送房间内的广播信息，推送给当前房间的各个成员。

可以通过[GameServerManager.onBroadcast](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onBroadcast.html>)回调函数监听其他玩家的广播信息。
    
    
    server.broadcastInRoom({
        msg: "MSG",
    });
    

#### 开启帧同步游戏服务

房间服务中所有玩家调用[GameServerManager.startGame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html>)接口后，则会开启[帧同步服务](<lock-step.md>)。
    
    
    server.startGame();
    

### 示例小游戏

https://github.com/wechat-miniprogram/minigame-lockstep-demo

![](https://res.wx.qq.com/a/fed_upload/f287e20d-2b1f-404b-a12d-9ee9d3304f9a/6551612169135_.pic.jpg)

---
title: "帧同步游戏服务"
type: guide
category: guide/open-ability/gameplay
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/lock-step.html
---

## 帧同步游戏服务

帧同步游戏服务是 [游戏服务](<game-server.md>) 其中一项，适用多人实时对战游戏使用。

### 游戏流程

#### 前端创建房间

![](https://res8.wxqcloud.qq.com.cn/wxdoc/3d2e04ab-4735-48fa-9438-4e1478881137.png)

#### 后台创建房间

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ee3aa555-4f51-4474-8e62-c2949264c7a1.png)

#### 游戏过程

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f2faab18-efa6-4b8e-9c63-d7ebb5033add.png)

### 开发

#### 配置

`game.json` 需要配置帧同步相关参数，具体字段名和含义如下：

属性 | 类型 | 必填 | 默认值 | 描述  
---|---|---|---|---  
lockStepOptions | Object | 否 |  | 帧同步配置对象  
lockStepOptions.gameTick | Number | 否 | 33 | 游戏帧下发周期，单位 ms  
lockStepOptions.heartBeatTick | Number | 否 | 2000 | 帧同步心跳周期，单位 ms  
lockStepOptions.offlineTimeLength | Number | 否 | 100000 | 帧同步心跳超时时长，单位 ms  
lockStepOptions.UDPReliabilityStrategy | Number | 否 | 3 | 帧冗余策略表示每次下发帧时总共下发的帧数量  
lockStepOptions.dataType | String | 否 | "String" | actionList 的数据类型，有效值："String" 字符串；"ArrayBuffer" 二进制数据  
  
#### 前端接口

##### 初始化

所有接口和事件都通过 [wx.getGameServerManager](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/wx.getGameServerManager.html>) 返回的 [GameServerManager](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.html>) 对象调用。获取到该对象之后，首先要调用 [GameServerManager.login](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.login.html>) 建立和服务器的连接，连接成功后，才能调用后续的 [GameServerManager.createRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.createRoom.html>)、[GameServerManager.joinRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html>) 等接口。

##### 断线重连

房间服务和游戏服务是两条不同连接，游戏开始之前，只需要关注房间服务。收到 [GameServerManager.onLogout](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onLogout.html>) 事件之后，需要自行选择合适的时机调用 [GameServerManager.login](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.login.html>) 重连回服务器。游戏开始之后，需要关注游戏服务的连接，收到 [GameServerManager.onDisconnect](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onDisconnect.html>) 事件之后，需要自行选择合适的时机调用 [GameServerManager.reconnect](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html>) 重连服务器。

如果小游戏发生了重启，需要自行选择合适的时机按顺序调用 [GameServerManager.login](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.login.html>) 和 [GameServerManager.reconnect](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html>) 进行重连。

##### 补帧

游戏已开始的情况下，发生断线重连后，会在[重连](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html>)的回调收到当前最大帧号 [maxFrameId](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.reconnect.html>)，并通过 [onSyncFrame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html>) 补回丢失的帧。没有提供主动补帧接口。

### 示例小游戏

<https://github.com/wechat-miniprogram/minigame-lockstep-demo>

#### 后台接口

第三方后台可以通过https调用帧同步相关后台接口。

##### [后台创建游戏房间](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.creategameroom>)

如果已经通过匹配或者其他方式已经组好对局，后台可以通过https直接创建帧同步游戏房间。

后续各个玩家在前端调用[GameServerManager.joinRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html>)加入房间，[GameServerManager.startGame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html>)开始游戏。根据在创建房间时传入的[start_percent](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.creategameroom>)参数，达到相应人数的玩家调用[GameServerManager.startGame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html>)接口后，即可进入帧同步流程。

##### [分片拉取对局游戏帧](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.getgameframe>)

游戏结束后，第三方后台可以游戏对局时同步的游戏帧，用于数据校验和对局回放等功能。

还可以通过传入游戏帧序号的返回拉取固定区间的游戏帧。

##### [获取游戏房间信息](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.getgameroominfo>)

同样的可以拉取当前房间的信息，查看当前房间和其中各个玩家的状态。

##### [获取对局玩家位次信息](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.getgameidentityinfo>)

在玩家加入房间(调用[GameServerManager.joinRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html>))后，会分配唯一的[clientId](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html>)。通过该接口可以拉取房间中各个玩家的`openId`和其[clientId](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html>)。

##### Q&A

###### Q1：调用 [GameServerManager.startGame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startGame.html>) 已返回 `errCode:0`，但客户端始终收不到 [onSyncFrame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html>)？

`startGame` 返回成功只代表本端发起请求被服务器接收，**不代表对局真正进入帧同步流程** 。常见原因：

  1. **未达到`start_percent`**：服务端要等达标人数都各自调用了 `startGame` 才会开始下发帧。请确认房间内每一个客户端都各自调过 `startGame`，且都返回 `errCode:0`。
  2. **`lockStepOptions` 配置无效**：见 Q1，配置项校验失败时会回退默认值，部分场景下会出现不下发帧。
  3. **存在未清理的旧房间** ：用户上次未正常结束的对局如果未通过 [GameServerManager.endGame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.endGame.html>) / [GameServerManager.memberLeaveRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.memberLeaveRoom.html>) / [GameServerManager.ownerLeaveRoom](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.ownerLeaveRoom.html>) 清理，可能会影响新房间开局。处理方式见 Q5。
  4. **真机网络受限** ：部分网络环境（企业 NAT、IPv6-only 等）会影响 UDP 通道建立，建议切换网络重试。

###### Q2：[onSyncFrame](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onSyncFrame.html>) 中的 `frameId` 会跳号吗？

正常网络下 `frameId` 单调递增；断线重连后服务端会通过 `onSyncFrame` 补发缺失帧，期间客户端可能收到一段连续的旧 `frameId`，需要按服务端为准推进本地逻辑帧，**不要** 因为本地 `frameId` 看起来"倒退"就丢弃这些帧——这些正是补帧数据。

###### Q3：帧同步常见优化手段

  * 缓冲节流：降低上传频次 在帧同步管理器中新增 bufferFrame 缓冲机制，替代直接 uploadFrame： 高频指令加入缓冲队列，按帧率间隔（40ms）批量上传 对同类型指令做去重，同一对象的同类指令只保留最新一条 低频关键指令标记 immediate，优先发送

  * 增量同步：只发变化的数据 对象状态同步从"全量同步所有对象"改为"只同步状态有实际变化的对象"，无变化的对象不再纳入上传数据。

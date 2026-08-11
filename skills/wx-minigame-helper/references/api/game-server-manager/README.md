# 对局服务器

> 路径：`api/game-server-manager/`　|　本目录 54 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [Promise GameServerManager.broadcastInRoom(object object)](GameServerManager.broadcastInRoom.md) | 在房间内广播 |
| [Promise GameServerManager.cancelMatch(object object)](GameServerManager.cancelMatch.md) | 取消游戏匹配 |
| [Promise GameServerManager.changeSeat(object object)](GameServerManager.changeSeat.md) | 玩家换座位 |
| [Promise GameServerManager.createRoom(object object)](GameServerManager.createRoom.md) | 创建游戏房间 |
| [Promise GameServerManager.endGame(Object object)](GameServerManager.endGame.md) | 结束帧同步 |
| [Promise GameServerManager.endStateService(Object object)](GameServerManager.endStateService.md) | 结束游戏状态同步服务 |
| [GameServerManager.getFriendsStateData(Object object)](GameServerManager.getFriendsStateData.md) | 获取所有好友的在线状态及信息。该接口需要用户授权，且只在开放数据域下可用。 |
| [Promise GameServerManager.getJoinVoIPChatSignature(object object)](GameServerManager.getJoinVoIPChatSignature.md) | 获取实时语音签名，签名的 groupId 与当前房间服务的房间 ID 绑定 |
| [Promise GameServerManager.getLastRoomInfo(Object object)](GameServerManager.getLastRoomInfo.md) | 获取最近参与房间的 accessInfo |
| [Promise GameServerManager.getLostFrames(object object)](GameServerManager.getLostFrames.md) | 补帧，补帧区间为 [beginFrameId, endFrameId)，即左闭右合。 |
| [Promise GameServerManager.getRoomInfo(Object object)](GameServerManager.getRoomInfo.md) | 获取房间详情 |
| [GameServerManager.inviteFriend(object object)](GameServerManager.inviteFriend.md) | 邀请好友，该好友的系统状态必须为在线（该接口需要在开放数据域使用）该接口没有回调也没有返回值 |
| [Promise GameServerManager.joinRoom(object object)](GameServerManager.joinRoom.md) | 加入游戏房间 |
| [Promise GameServerManager.kickoutMember(object object)](GameServerManager.kickoutMember.md) | 把一名玩家踢出房间（仅房主有权限） |
| [Promise GameServerManager.login()](GameServerManager.login.md) | 登录游戏服务 |
| [Promise GameServerManager.logout()](GameServerManager.logout.md) | 登出游戏服务 |
| [GameServerManager](GameServerManager.md) |  |
| [Promise GameServerManager.memberLeaveRoom(object object)](GameServerManager.memberLeaveRoom.md) | 普通成员退出房间 |
| [GameServerManager.offBeKickedOut(function listener)](GameServerManager.offBeKickedOut.md) | 移除自己被踢出当前房间的监听函数 |
| [GameServerManager.offBroadcast(function listener)](GameServerManager.offBroadcast.md) | 移除收到同个房间内的广播消息的监听函数 |
| [GameServerManager.offDisconnect(function listener)](GameServerManager.offDisconnect.md) | 移除断开连接，收到此事件的监听函数 |
| [GameServerManager.offGameEnd(function listener)](GameServerManager.offGameEnd.md) | 移除帧同步游戏结束的监听函数 |
| [GameServerManager.offGameStart(function listener)](GameServerManager.offGameStart.md) | 移除帧同步游戏开始的监听函数 |
| [GameServerManager.offInvite(function listener)](GameServerManager.offInvite.md) | 移除接收邀请，当用户确认邀请之后会收到此事件的监听函数 |
| [GameServerManager.offLockStepError(function listener)](GameServerManager.offLockStepError.md) | 移除帧同步出错的监听函数 |
| [GameServerManager.offLogout(function listener)](GameServerManager.offLogout.md) | 移除用户登出游戏服务事件的监听函数 |
| [GameServerManager.offMatch(function listener)](GameServerManager.offMatch.md) | 移除游戏匹配成功的事件的监听函数 |
| [GameServerManager.offRoomInfoChange(function listener)](GameServerManager.offRoomInfoChange.md) | 移除房间信息更新的监听函数 |
| [GameServerManager.offStateUpdate(function listener)](GameServerManager.offStateUpdate.md) | 移除好友在线状态变更（该接口需要在开放数据域使用）的监听函数 |
| [GameServerManager.offSyncFrame(function listener)](GameServerManager.offSyncFrame.md) | 移除收到同个房间的帧同步消息的监听函数 |
| [GameServerManager.onBeKickedOut(function listener)](GameServerManager.onBeKickedOut.md) | 监听自己被踢出当前房间 |
| [GameServerManager.onBroadcast(function listener)](GameServerManager.onBroadcast.md) | 监听收到同个房间内的广播消息 |
| [GameServerManager.onDisconnect(function listener)](GameServerManager.onDisconnect.md) | 监听断开连接，收到此事件后，需要调用 `GameServerManager.reconnect` 进行重连 |
| [GameServerManager.onGameEnd(function listener)](GameServerManager.onGameEnd.md) | 监听帧同步游戏结束 |
| [GameServerManager.onGameStart(function listener)](GameServerManager.onGameStart.md) | 监听帧同步游戏开始 |
| [GameServerManager.onInvite(function listener)](GameServerManager.onInvite.md) | 监听接收邀请，当用户确认邀请之后会收到此事件 |
| [GameServerManager.onLockStepError(function listener)](GameServerManager.onLockStepError.md) | 监听帧同步出错 |
| [GameServerManager.onLogout(function listener)](GameServerManager.onLogout.md) | 监听用户登出游戏服务事件，可能是主动登出也可能是其他原因被动登出 |
| [GameServerManager.onMatch(function listener)](GameServerManager.onMatch.md) | 监听游戏匹配成功的事件 |
| [GameServerManager.onRoomInfoChange(function listener)](GameServerManager.onRoomInfoChange.md) | 监听房间信息更新 |
| [GameServerManager.onStateUpdate(function listener)](GameServerManager.onStateUpdate.md) | 监听好友在线状态变更（该接口需要在开放数据域使用） |
| [GameServerManager.onSyncFrame(function listener)](GameServerManager.onSyncFrame.md) | 监听收到同个房间的帧同步消息 |
| [Promise GameServerManager.ownerLeaveRoom(object object)](GameServerManager.ownerLeaveRoom.md) | 房主退出房间，`assign_owner_to_pos_num` 参数被优先处理，其次是 `assign_to_min_pos_num`，如果二者都没有被设置，则房主退出且房间销毁。 |
| [Promise<ReconnectSuccessRes> GameServerManager.reconnect(object object)](GameServerManager.reconnect.md) | 重连游戏服务。如果此时连接并未断开或游戏未开始，会直接成功；如果游戏已开始并且连接已断开，会进行重连，并返回此时服务器的最大帧号。 |
| [Promise GameServerManager.restart(Object object)](GameServerManager.restart.md) | 重启游戏并进入"组队中"的状态。如果当前房间游戏已结束，调用可进入"组队中"状态并重置所有玩家的准备状态；如果当前房间已经在"组队中"状态，调用不改变状态；如果当前房间游戏进行中，调用失败。 |
| [boolean GameServerManager.setInviteData(string data)](GameServerManager.setInviteData.md) | 设置邀请好友附带的数据 |
| [Promise GameServerManager.setState(object object)](GameServerManager.setState.md) | 更新玩家状态信息 |
| [GameServerManager.startGame(Object object)](GameServerManager.startGame.md) | 启动帧同步 |
| [Promise GameServerManager.startMatch(object object)](GameServerManager.startMatch.md) | 开始游戏匹配。在调用 startMatch 之前，需要先调用后台接口 gamematch.setMatchIdOpenState  把 matchId 设置为打开状态。 |
| [Promise GameServerManager.startStateService(object object)](GameServerManager.startStateService.md) | 开启状态管理服务，只有开启状态管理服务，才能获取在线好友列表以及接收好友邀请 |
| [Promise GameServerManager.updateReadyStatus(object object)](GameServerManager.updateReadyStatus.md) | 更新玩家准备信息 |
| [Promise GameServerManager.uploadFrame(object object)](GameServerManager.uploadFrame.md) | 上传游戏帧 |
| [ReconnectSuccessRes](ReconnectSuccessRes.md) |  |
| [GameServerManager wx.getGameServerManager()](wx.getGameServerManager.md) | 获取 **全局唯一** 的游戏服务管理器。注意：`GameServerManager.inviteFriend`、`GameServerManager.onStateUpdate`、`GameServ |

// 微信小游戏 API 类型声明 — 域：game-server-manager（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface GameServerManagerBroadcastInRoomOption {
  /** 广播内容 */
  msg: string
  /** 给座位号为哪些的玩家发送信息，不填代表给房间所有人发送 */
  toPosNumList: number[]
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerCancelMatchOption {
  /** 需要取消匹配的matchId */
  matchId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerChangeSeatOption {
  /** 座位号，从 0 开始 */
  posNum: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerCreateRoomSuccessCallbackResult {
  data: Record<string, any>
  /** 房间唯一标识 */
  accessInfo: string
  /** 用户在房间内的唯一标识 */
  clientId: number
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errCode: number
}

interface GameServerManagerCreateRoomOption {
  /** 房间最大人数 */
  maxMemberNum: number
  /**
   * 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。
   * 默认值 0
   */
  startPercent?: number
  /**
   * 是否需要用户头像和昵称
   * 默认值 false
   */
  needUserInfo?: boolean
  /**
   * 游戏对局时长，到达指定时长时游戏会结束，最大值 3600。
   * 默认值 1200
   */
  gameLastTime?: number
  /** 游戏自定义的关于房间扩展信息，其他人可在 `RoomInfo` 中读取到最多 32 个字节 */
  roomExtInfo?: string
  /** 游戏自定义的关于个人的扩展信息，其他人可在 `MemberInfo` 中读取到，最多 32 个字节 */
  memberExtInfo?: string
  /**
   * 是否需要生成游戏随机种子，设置为 true，房间信息会携带 gameSeed 属性
   * 默认值 false
   */
  needGameSeed?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerCreateRoomSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerEndGameOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerEndStateServiceOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerGetFriendsStateDataSuccessCallbackResult {
  /** 好友状态信息列表 */
  list: Record<string, any>[]
  /** 该玩家的自定义状态信息，通过 `GameServerManager.setState` 接口设置 */
  userState: string
  /** 系统状态，0 掉线 1 在线 */
  sysState: number
  /** 好友 openId */
  openId: string
  /** 好友昵称 */
  nickName: string
  /** 好友头像 */
  avatarUrl: string
  /** 好友性别 0未设置 1男 2女 */
  gender: number
}

interface GameServerManagerGetFriendsStateDataOption {
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerGetFriendsStateDataSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerGetJoinVoIPChatSignatureSuccessCallbackResult {
  data: Record<string, any>
  /** 签名 */
  signature: string
  /** 随机字符串 */
  nonceStr: string
  /** 时间戳 */
  timeStamp: number
  /** 语音房间的 groupId */
  groupId: string
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errCode: number
}

interface GameServerManagerGetJoinVoIPChatSignatureOption {
  /** 子房间 ID，用于区分同一房间下的不同语音子房间 */
  subRoomId?: string
  /** voip 房间类型，1 为整个游戏房间，2 为子房间 */
  voipType?: number
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerGetJoinVoIPChatSignatureSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerGetLastRoomInfoSuccessCallbackResult {
  data: Record<string, any>
  /** 最近参与房间的 accessInfo */
  accessInfo: string
  /** 最近参与房间的详细信息 */
  roomInfo: Record<string, any>
  /** 小游戏 appId */
  appId: string
  /** 房间 ID */
  roomIdStr: number
  /** 房间状态 */
  roomState: number
  /** 房间最多可容纳人数 */
  maxMemberNum: number
  /** 创建时间 */
  createTimestamp: number
  /** 最近更新时间 */
  updateTimestamp: number
  /** 游戏下发帧的时间间隔，单位 ms */
  gameTick: number
  /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。 */
  startPercent: number
  /** 游戏自定义的关于房间的扩展信息 */
  roomExtInfo: string
  /** 游戏对局时长，单位 s */
  gameLastTime: number
  /** UDP可靠性策略， 0：全冗余 N：固定冗余N帧 */
  udpReliabilityStrategy: number
  /** 成员列表 */
  memberList: Record<string, any>[]
  /** 玩家准备状态 */
  isReady: boolean
  /** 角色 */
  role: number
  /** 座位号，从 0 开始 */
  posNum: number
  /** 头像 URL（房间 needUserInfo 为 true 时才会有） */
  headimg: string
  /** 用户昵称（房间 needUserInfo 为 true 时才会有） */
  nickname: string
  /** 用户在房间内的唯一标识 */
  clientId: number
  /** 是否已做好游戏开始准备（调用过 startGame） */
  enableToStart: boolean
  /** 游戏自定义的关于成员的扩展信息 */
  memberExtInfo: string
  /** 游戏随机种子 */
  seed: string
}

interface GameServerManagerGetLastRoomInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerGetLastRoomInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerGetLostFramesSuccessCallbackResult {
  data: Record<string, any>
  /** 丢失的帧数组 */
  frameList: Frame[]
}

interface GameServerManagerGetLostFramesOption {
  /** 起始帧号。不填或非法值默认从第 1 帧开始补 */
  beginFrameId: number
  /** 结尾帧号。不填或非法值默认补到当前最新帧 */
  endFrameId: number
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerGetLostFramesSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerGetRoomInfoSuccessCallbackResult {
  data: Record<string, any>
  roomInfo: Record<string, any>
  /** 小游戏 appId */
  appId: string
  /** 房间 ID */
  roomIdStr: number
  /** 房间状态 */
  roomState: number
  /** 房间最多可容纳人数 */
  maxMemberNum: number
  /** 创建时间 */
  createTimestamp: number
  /** 最近更新时间 */
  updateTimestamp: number
  /** 游戏下发帧的时间间隔，单位 ms */
  gameTick: number
  /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。 */
  startPercent: number
  /** 游戏自定义的关于房间的扩展信息 */
  roomExtInfo: string
  /** 游戏对局时长，单位 s */
  gameLastTime: number
  /** UDP可靠性策略， 0：全冗余 N：固定冗余N帧 */
  udpReliabilityStrategy: number
  /** 成员列表 */
  memberList: Record<string, any>[]
  /** 玩家准备状态 */
  isReady: boolean
  /** 角色 */
  role: number
  /** 座位号，从 0 开始 */
  posNum: number
  /** 头像 URL（房间 needUserInfo 为 true 时才会有） */
  headimg: string
  /** 用户昵称（房间 needUserInfo 为 true 时才会有） */
  nickname: string
  /** 用户在房间内的唯一标识 */
  clientId: number
  /** 是否已做好游戏开始准备（调用过 startGame） */
  enableToStart: boolean
  /** 游戏自定义的关于成员的扩展信息 */
  memberExtInfo: string
  /** 游戏随机种子 */
  seed: string
}

interface GameServerManagerGetRoomInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerGetRoomInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerInviteFriendOption {
  /** 被邀请玩家的 openId */
  openId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerJoinRoomSuccessCallbackResult {
  data: Record<string, any>
  /** 加入房间后被分配的座位号 */
  myPos: number
  /** 用户在房间内的唯一标识 */
  clientId: number
}

interface GameServerManagerJoinRoomOption {
  /** 游戏房间访问凭证 */
  accessInfo: string
  /** 游戏自定义的关于个人的扩展信息，其他人可在 `MemberInfo` 中读取到，最多 32 个字节 */
  memberExtInfo?: string
  /** 接口调用成功的回调函数 */
  success?: (res: GameServerManagerJoinRoomSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerKickoutMemberOption {
  /** 欲踢除的玩家的座位号 */
  kickoutPos: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerMemberLeaveRoomOption {
  /** 游戏房间访问凭证 */
  accessInfo: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerOnBeKickedOutListenerCallbackResult {
  res: Record<string, any>
}

interface GameServerManagerOnBroadcastListenerCallbackResult {
  /** 广播消息 */
  msg: string
}

interface GameServerManagerOnDisconnectListenerCallbackResult {
  res: Record<string, any>
  type: string
}

interface GameServerManagerOnGameEndListenerCallbackResult {
  /** 游戏唯一标识，用于后台接口拉取对局记录 */
  gameAccessInfo: string
}

interface GameServerManagerOnInviteListenerCallbackResult {
  res: Record<string, any>
  /** 邀请者的 openId */
  openId: string
  /** 邀请者附带的额外信息 */
  data: string
}

interface GameServerManagerOnLockStepErrorListenerCallbackResult {
  /** 错误码 */
  errCode: number
  /** 错误原因 */
  errMsg: string
}

interface GameServerManagerOnMatchListenerCallbackResult {
  res: Record<string, any>
  /** 与 startMatch 一致的 matchId */
  matchId: string
  /** 自己的 openId */
  openId: string
  /** 房间服务的accessinfo，如果matchid中指定需要匹配完成时创建房间服务，则会携带下来，后续调用房间服务相关接口加入房间即可 */
  roomServiceAccessInfo: string
  /** 唯一的本次对局id */
  raceId: string
  /** 匹配到的队伍信息 */
  groupInfoList: Record<string, any>[]
  /** 队伍的序号 */
  groupIndex: number
  /** 队伍中成员信息 */
  memberInfoList: Record<string, any>[]
  /** 成员的序号 */
  memberIndex: number
  /** 队伍中成员的openid */
  openId: string
  /** 队伍中成员的昵称 */
  nickName: string
  /** 队伍中成员的头像 */
  avatarUrl: string
}

interface GameServerManagerOnRoomInfoChangeListenerCallbackResult {
  res: Record<string, any>
  /** 小游戏 appId */
  appId: string
  /** 房间 ID */
  roomIdStr: number
  /** 房间状态 */
  roomState: number
  /** 房间最多可容纳人数 */
  maxMemberNum: number
  /** 创建时间 */
  createTimestamp: number
  /** 最近更新时间 */
  updateTimestamp: number
  /** 游戏下发帧的时间间隔，单位 ms */
  gameTick: number
  /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100，0 表示只要有一个人调用开始就启动，100 表示要求所有人都开始才能启动。 */
  startPercent: number
  /** 游戏自定义的关于房间的扩展信息 */
  roomExtInfo: string
  /** 游戏对局时长，单位 s */
  gameLastTime: number
  /** UDP可靠性策略， 0：全冗余 N：固定冗余N帧 */
  udpReliabilityStrategy: number
  /** 成员列表 */
  memberList: Record<string, any>[]
  /** 玩家准备状态 */
  isReady: boolean
  /** 角色 */
  role: number
  /** 座位号，从 0 开始 */
  posNum: number
  /** 头像 URL（房间 needUserInfo 为 true 时才会有） */
  headimg: string
  /** 用户昵称（房间 needUserInfo 为 true 时才会有） */
  nickname: string
  /** 用户在房间内的唯一标识 */
  clientId: number
  /** 是否已做好游戏开始准备（调用过 startGame） */
  enableToStart: boolean
  /** 游戏自定义的关于成员的扩展信息 */
  memberExtInfo: string
  /** 游戏随机种子 */
  seed: string
}

interface GameServerManagerOnStateUpdateListenerCallbackResult {
  res: Record<string, any>
  /** 该玩家的自定义状态信息 */
  userState: string
  /** 系统状态，0 掉线 1 在线 */
  sysState: number
  /** 好友 openId */
  openId: string
}

interface GameServerManagerOnSyncFrameListenerCallbackResult {
  /** 帧号，从 1 开始递增 */
  frameId: number
  /** 帧数据列表，如果为空则说明该帧是空帧，每一项的类型与配置项 `lockStepOption.dataType` 一致 */
  actionList: string[] | ArrayBuffer[]
}

interface GameServerManagerOwnerLeaveRoomOption {
  /** 游戏房间访问凭证 */
  accessInfo: string
  /** 指定座位号的玩家接任房主角色，优先级高于 assignToMinPosNum */
  assignOwnerToPosNum?: boolean
  /** 自动指定最小座位号玩家作为新房主 */
  assignToMinPosNum?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerReconnectOption {
  /** 需要重连的对局房间唯一标识 */
  accessInfo: string
}

interface GameServerManagerRestartOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerSetStateOption {
  /** 该玩家的自定义状态信息，长度限制为 256 个字符 */
  userState: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerStartGameOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerStartMatchOption {
  /** 通过后台接口申请的matchId */
  matchId: string
  /**
   * 补充类型，0:自动补充队友 1:不补充队友
   * 默认值 0
   */
  fillType?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerStartStateServiceOption {
  /** 该玩家的自定义状态信息，长度限制为 256 个字符 */
  userState: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerUpdateReadyStatusOption {
  /** 游戏房间访问凭证 */
  accessInfo: string
  /** 是否准备完成 */
  isReady: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameServerManagerUploadFrameOption {
  /** 指令数组，每一项的类型必须与配置项 `lockStepOption.dataType` 一致 */
  actionList: string[] | ArrayBuffer[]
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/**
 * 游戏服务管理器，可通过 wx.getGameServerManager 获取。注意：`GameServerManager.inviteFriend`、`GameServerManager.onStateUpdate`、`GameServerManager.offStateUpdate`、`GameServerManager.getFriendsStateData` 这几个接口只允许在开放数据域内使用，其他接口则只允许在游戏域内使用。
 */
interface GameServerManager {
  /** 在房间内广播 */
  broadcastInRoom(object?: GameServerManagerBroadcastInRoomOption): Promise<any>
  /** 取消游戏匹配 */
  cancelMatch(object?: GameServerManagerCancelMatchOption): Promise<any>
  /** 玩家换座位 */
  changeSeat(object?: GameServerManagerChangeSeatOption): Promise<any>
  /** 创建游戏房间 */
  createRoom(object?: GameServerManagerCreateRoomOption): Promise<any>
  /** 结束帧同步 */
  endGame(object?: GameServerManagerEndGameOption): Promise<any>
  /** 结束游戏状态同步服务 */
  endStateService(object?: GameServerManagerEndStateServiceOption): Promise<any>
  /** 获取所有好友的在线状态及信息。该接口需要用户授权，且只在开放数据域下可用。 */
  getFriendsStateData(object?: GameServerManagerGetFriendsStateDataOption): void
  /** 获取实时语音签名，签名的 groupId 与当前房间服务的房间 ID 绑定 */
  getJoinVoIPChatSignature(object?: GameServerManagerGetJoinVoIPChatSignatureOption): Promise<any>
  /** 获取最近参与房间的 accessInfo */
  getLastRoomInfo(object?: GameServerManagerGetLastRoomInfoOption): Promise<any>
  /** 补帧，补帧区间为 [beginFrameId, endFrameId)，即左闭右合。 */
  getLostFrames(object?: GameServerManagerGetLostFramesOption): Promise<any>
  /** 获取房间详情 */
  getRoomInfo(object?: GameServerManagerGetRoomInfoOption): Promise<any>
  /** 邀请好友，该好友的系统状态必须为在线（该接口需要在开放数据域使用）该接口没有回调也没有返回值 */
  inviteFriend(object?: GameServerManagerInviteFriendOption): void
  /** 加入游戏房间 */
  joinRoom(object?: GameServerManagerJoinRoomOption): Promise<any>
  /** 把一名玩家踢出房间（仅房主有权限） */
  kickoutMember(object?: GameServerManagerKickoutMemberOption): Promise<any>
  /** 登录游戏服务 */
  login(): Promise<any>
  /** 登出游戏服务 */
  logout(): Promise<any>
  /** 普通成员退出房间 */
  memberLeaveRoom(object?: GameServerManagerMemberLeaveRoomOption): Promise<any>
  /** 移除自己被踢出当前房间的监听函数 */
  offBeKickedOut(listener: (res: any) => void): void
  /** 移除收到同个房间内的广播消息的监听函数 */
  offBroadcast(listener: (res: any) => void): void
  /** 移除断开连接，收到此事件的监听函数 */
  offDisconnect(listener: (res: any) => void): void
  /** 移除帧同步游戏结束的监听函数 */
  offGameEnd(listener: (res: any) => void): void
  /** 移除帧同步游戏开始的监听函数 */
  offGameStart(listener: (res: any) => void): void
  /** 移除接收邀请，当用户确认邀请之后会收到此事件的监听函数 */
  offInvite(listener: (res: any) => void): void
  /** 移除帧同步出错的监听函数 */
  offLockStepError(listener: (res: any) => void): void
  /** 移除用户登出游戏服务事件的监听函数 */
  offLogout(listener: (res: any) => void): void
  /** 移除游戏匹配成功的事件的监听函数 */
  offMatch(listener: (res: any) => void): void
  /** 移除房间信息更新的监听函数 */
  offRoomInfoChange(listener: (res: any) => void): void
  /** 移除好友在线状态变更（该接口需要在开放数据域使用）的监听函数 */
  offStateUpdate(listener: (res: any) => void): void
  /** 移除收到同个房间的帧同步消息的监听函数 */
  offSyncFrame(listener: (res: any) => void): void
  /** 监听自己被踢出当前房间 */
  onBeKickedOut(listener: (res: GameServerManagerOnBeKickedOutListenerCallbackResult) => void): void
  /** 监听收到同个房间内的广播消息 */
  onBroadcast(listener: (res: GameServerManagerOnBroadcastListenerCallbackResult) => void): void
  /** 监听断开连接，收到此事件后，需要调用 `GameServerManager.reconnect` 进行重连 */
  onDisconnect(listener: (res: GameServerManagerOnDisconnectListenerCallbackResult) => void): void
  /** 监听帧同步游戏结束 */
  onGameEnd(listener: (res: GameServerManagerOnGameEndListenerCallbackResult) => void): void
  /** 监听帧同步游戏开始 */
  onGameStart(listener: (res: any) => void): void
  /** 监听接收邀请，当用户确认邀请之后会收到此事件 */
  onInvite(listener: (res: GameServerManagerOnInviteListenerCallbackResult) => void): void
  /** 监听帧同步出错 */
  onLockStepError(listener: (res: GameServerManagerOnLockStepErrorListenerCallbackResult) => void): void
  /** 监听用户登出游戏服务事件，可能是主动登出也可能是其他原因被动登出 */
  onLogout(listener: (res: any) => void): void
  /** 监听游戏匹配成功的事件 */
  onMatch(listener: (res: GameServerManagerOnMatchListenerCallbackResult) => void): void
  /** 监听房间信息更新 */
  onRoomInfoChange(listener: (res: GameServerManagerOnRoomInfoChangeListenerCallbackResult) => void): void
  /** 监听好友在线状态变更（该接口需要在开放数据域使用） */
  onStateUpdate(listener: (res: GameServerManagerOnStateUpdateListenerCallbackResult) => void): void
  /** 监听收到同个房间的帧同步消息 */
  onSyncFrame(listener: (res: GameServerManagerOnSyncFrameListenerCallbackResult) => void): void
  /**
   * 房主退出房间，`assign_owner_to_pos_num` 参数被优先处理，其次是 `assign_to_min_pos_num`，如果二者都没有被设置，则房主退出且房间销毁。
   */
  ownerLeaveRoom(object?: GameServerManagerOwnerLeaveRoomOption): Promise<any>
  /** 重连游戏服务。如果此时连接并未断开或游戏未开始，会直接成功；如果游戏已开始并且连接已断开，会进行重连，并返回此时服务器的最大帧号。 */
  reconnect(object?: GameServerManagerReconnectOption): any
  /**
   * 重启游戏并进入"组队中"的状态。如果当前房间游戏已结束，调用可进入"组队中"状态并重置所有玩家的准备状态；如果当前房间已经在"组队中"状态，调用不改变状态；如果当前房间游戏进行中，调用失败。
   */
  restart(object?: GameServerManagerRestartOption): Promise<any>
  /** 设置邀请好友附带的数据 */
  setInviteData(data: string): boolean
  /** 更新玩家状态信息 */
  setState(object?: GameServerManagerSetStateOption): Promise<any>
  /** 启动帧同步 */
  startGame(object?: GameServerManagerStartGameOption): void
  /**
   * 开始游戏匹配。在调用 startMatch 之前，需要先调用后台接口 gamematch.setMatchIdOpenState 把 matchId 设置为打开状态。
   */
  startMatch(object?: GameServerManagerStartMatchOption): Promise<any>
  /** 开启状态管理服务，只有开启状态管理服务，才能获取在线好友列表以及接收好友邀请 */
  startStateService(object?: GameServerManagerStartStateServiceOption): Promise<any>
  /** 更新玩家准备信息 */
  updateReadyStatus(object?: GameServerManagerUpdateReadyStatusOption): Promise<any>
  /** 上传游戏帧 */
  uploadFrame(object?: GameServerManagerUploadFrameOption): Promise<any>
}

interface ReconnectSuccessResObject {
  data: Record<string, any>
  /** 此时服务器的最大帧号。 */
  maxFrameId: Frame[]
}

/** GameServerManager.reconnect 接口 resolve 后的返回值 */
interface ReconnectSuccessRes {
  object: ReconnectSuccessResObject
}

interface WxGameServerManager {
  /**
   * 获取 **全局唯一** 的游戏服务管理器。注意：`GameServerManager.inviteFriend`、`GameServerManager.onStateUpdate`、`GameServerManager.offStateUpdate`、`GameServerManager.getFriendsStateData` 这几个接口只允许在开放数据域内使用，其他接口则只允许在游戏域内使用。
   */
  getGameServerManager(): GameServerManager;
}

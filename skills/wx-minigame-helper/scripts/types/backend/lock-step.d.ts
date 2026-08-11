// 微信小游戏服务端 API 类型声明 — 域：lock-step（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 创建帧同步游戏房间（lock-step.createGameRoom） — 第三方后台创建帧同步游戏房间
 * @endpoint POST https://api.weixin.qq.com/wxa/createwxagameroom?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface LockStepCreateGameRoomQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface LockStepCreateGameRoomRequest {
  /** 后台下发游戏逻辑帧的周期，单位 ms，最小不得小于 33ms */
  game_tick: number
  /** 使用的 UDP 可靠性策略，N：固定冗余 N 帧。建议值：3 */
  udp_reliability_strategy: number
  /**
   * 不填或者填 0 代表微信后台只要收到一次“开始游戏”指令就会开始游戏，否则微信后台会统计发送“开始游戏”指令的玩家数达到规定的百分比后才能启动游戏，填 50 表征 50%
   */
  start_percent: number
  /**
   * 房间是否需要用户的头像昵称——如果填 True，微信后台会去校验用户是否授权该应用获取其头像昵称的权限。如果房间需要头像昵称但是用户未授权，则用户后续加入房间的请求会返回失败；如果 need_user_info 为 False，后续用户的加入房间操作会成功，但微信后台不会在房间信息中下发用户的头像昵称。
   */
  need_user_info?: boolean
  /** 游戏对局时长，单位 s，不得超过微信后台最大限制 1 个小时，如果不填或填 0 则默认为 20 分钟 */
  game_last_time?: number
  /** 第三方自定义的房间信息，不得超过 32 个字节 */
  room_ext_info?: string
  /** 是否需要在创建房间时同时生成一个随机的游戏种子 */
  need_game_seed?: boolean
}

interface LockStepCreateGameRoomResponse {
  /** 错误码 */
  errcode?: number
  /** 错误提示信息 */
  errmsg?: string
  /** 房间/对局访问凭证数据 */
  data?: LockStepCreateGameRoomData
}

interface LockStepCreateGameRoomData {
  /** 房间/对局访问凭证 */
  access_info?: string
}

/**
 * 分片拉取对局游戏帧（lock-step.getGameFrame） — 本接口用于分片拉取对局游戏帧
 * @endpoint POST https://api.weixin.qq.com/wxa/getwxagameframe?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface LockStepGetGameFrameQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface LockStepGetGameFrameRequest {
  /** 微信后台接口调用凭证（备选字段，二选一） */
  access_token?: string
  /** 微信后台接口调用凭证（备选字段，二选一） */
  cloudbase_access_token?: string
  /** 填 onGameEnd 接口返回给开发者的 gameAccessInfo */
  access_info: string
  /** 待获取帧的起始 frame_id */
  begin_frame_id: number
  /** 待获取帧的终止 frame_id，左闭右开区间 */
  end_frame_id: number
}

interface LockStepGetGameFrameResponse {
  /** 错误码 */
  errcode?: number
  /** 错误提示信息 */
  errmsg?: string
  /** 房间/对局访问凭证数据 */
  data?: LockStepGetGameFrameData
}

interface LockStepGetGameFrameData {
  /** 是否还有更多帧可以获取 */
  has_more?: boolean
  /** 游戏帧数据列表 */
  frame_list?: LockStepGetGameFrameDataFrameList[]
}

interface LockStepGetGameFrameDataFrameList {
  /** 帧编号，从 1 开始 */
  frame_id?: number
  /** 指令包列表，每个指令包具体格式见下面 */
  pkg_list?: LockStepGetGameFrameDataFrameListPkgList[]
}

interface LockStepGetGameFrameDataFrameListPkgList {
  /** 该包发送者的 OpenId */
  open_id?: string
  /** 第三方自定义游戏指令数组 */
  action_list?: any[]
  /** true 代表是空帧 */
  b?: boolean
  /** 微信内部使用，无需理解，为了更快速返回数据，没有去掉该字段内容 */
  dp_id?: number
}

/**
 * 获取对局玩家位次信息（lock-step.getGameIdentityInfo） — 本接口用于获取对局玩家位次信息
 * @endpoint GET https://api.weixin.qq.com/wxa/getwxagameidentityinfo?access_token=ACCESS_TOKEN&access_info=ACCESS_INFO
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface LockStepGetGameIdentityInfoQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 填onGameEnd接口返回给开发者的 gameAccessInfo */
  access_info: string
}

interface LockStepGetGameIdentityInfoResponse {
  /** 错误码 */
  errcode?: number
  /** 错误提示信息 */
  errmsg?: string
  /** 房间/对局访问凭证数据 */
  data?: LockStepGetGameIdentityInfoData
}

interface LockStepGetGameIdentityInfoData {
  /** 房间/对局访问凭证 */
  info_list?: LockStepGetGameIdentityInfoDataInfoList[]
}

interface LockStepGetGameIdentityInfoDataInfoList {
  /** 玩家在房间里的唯一性标识 id，该 id 不同于玩家座位号，一旦分配不能修改 */
  client_id?: number
  /** 玩家 OpenId */
  open_id?: string
}

/**
 * 获取指定房间信息（lock-step.getGameRoomInfo） — 本接口用于获取指定房间信息
 * @endpoint GET https://api.weixin.qq.com/wxa/getwxagameroominfo?access_token=ACCESS_TOKEN&access_info=ACCESS_INFO
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface LockStepGetGameRoomInfoQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 房间/对局访问凭证，不同于 access_token */
  access_info: string
}

interface LockStepGetGameRoomInfoResponse {
  /** 错误码 */
  errcode?: number
  /** 错误提示信息 */
  errmsg?: string
  /** 房间/对局访问凭证数据 */
  data?: LockStepGetGameRoomInfoData
}

interface LockStepGetGameRoomInfoData {
  /** 房间 ID */
  room_id_str?: string
  /** 1：组队中，2：该房间的对局游戏已开始，3：该房间的对局游戏已结束，4：房间已销毁 */
  room_state?: number
  /** 房间最大可容纳人数 */
  max_member_num?: number
  /** 创建时间 */
  create_timestamp?: number
  /** 最近更新时间 */
  update_timestamp?: number
  /** 游戏下发帧的时间间隔，单位 ms */
  game_tick?: number
  /** 真正开始帧同步需要达到多少百分比的玩家发送了开始指令，填 50 表征 50% */
  start_percent?: number
  /** 游戏对局时长，单位 s */
  game_last_time?: number
  /** 第三方自定义的游戏版本号 */
  game_version?: number
  /** 该房间对应的游戏的 access_info */
  game_access_info?: string
  /** UDP 可靠性策略， 0：全冗余 N：固定冗余 N 帧 */
  udp_reliability_strategy?: number
  /** 给第三方用的 buffer，最长 32 个字节 */
  room_ext_info?: string
  /** 游戏随机种子 */
  seed?: string
  /** 成员列表 */
  member_list?: LockStepGetGameRoomInfoDataMemberList[]
}

interface LockStepGetGameRoomInfoDataMemberList {
  /** 玩家准备状态 */
  is_ready?: boolean
  /** 0：普通成员 1：房主 */
  role?: number
  /** 座位号，从 0 开始 */
  pos_num?: number
  /** 头像 URL（用户授权才会返回） */
  headimg?: string
  /** 用户昵称（用户授权才会返回） */
  nickname?: string
  /** 用户在房间内的唯一标识 */
  client_id?: number
  /** 是否已做好游戏开始准备 */
  enable_to_start?: boolean
  /** 给第三方用的 buffer，最长 32 个字节 */
  member_ext_info?: string
}

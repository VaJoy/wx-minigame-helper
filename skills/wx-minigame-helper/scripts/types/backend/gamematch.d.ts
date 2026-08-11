// 微信小游戏服务端 API 类型声明 — 域：gamematch（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 创建对局匹配规则（gamematch.createMatchRule） — 小游戏创建对局匹配规则，并返回一个 matchid。
 * @endpoint POST https://api.weixin.qq.com/wxa/business/gamematch/creatematchrule?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GamematchCreateMatchRuleQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GamematchCreateMatchRuleRequest {
  /** 匹配结果中的队伍数量 */
  team_count: number
  /** 匹配结果每个队伍对应的成员数量 */
  team_member_count: number
  /**
   * 是否需要在下发匹配结果时同步创建帧同步房间。0:不需要，1:需要。如果填 1，则会在下发对局匹配结果时携带accessInfo，用于加入帧同步房间。 要求 team_count * team_member_count 不超过 10 人才可以使用该项。
   */
  need_room_service_info?: number
  /** 创建帧同步房间时的房间信息。在 need_room_service_info 为 1 时有效。 */
  game_room_info?: GamematchCreateMatchRuleGameRoomInfo
}

interface GamematchCreateMatchRuleResponse {
  /** 错误码 */
  errcode?: number
  /** 错误提示信息 */
  errmsg?: string
  /** 匹配池对应的 id，加入匹配时需要携带 matchid 以加入对应的匹配池 */
  match_id?: string
}

interface GamematchCreateMatchRuleGameRoomInfo {
  /** 后台下发游戏逻辑帧的周期，单位 ms，最小不得小于 33ms */
  game_tick: number
  /**
   * 不填或者填 0 代表微信后台只要收到一次“开始游戏”指令就会开始游戏，否则微信后台会统计发送“开始游戏”指令的玩家数达到规定的百分比后才能启动游戏，填 50 表征 50%
   */
  start_percent: number
  /** 使用的 UDP 可靠性策略，N：固定冗余 N 帧。建议值：3 */
  udp_reliability_strategy: number
  /**
   * 房间是否需要用户的头像昵称——如果填 True，微信后台会去校验用户是否授权该应用获取其头像昵称的权限。如果房间需要头像昵称但是用户未授权，则用户后续加入房间的请求会返回失败；如果 need_user_info 为 False，后续用户的加入房间操作会成功，但微信后台不会在房间信息中下发用户的头像昵称。
   */
  need_user_info?: boolean
  /** 游戏对局时长，单位 s，不得超过微信后台最大限制 1 个小时，如果不填或填 0 则默认为 20 分钟 */
  game_last_time?: number
  /** 是否需要在创建房间时同时生成一个随机的游戏种子 */
  need_game_seed?: boolean
}

/**
 * 删除对局匹配规则（gamematch.deleteMatchRule） — 小游戏删除对局匹配规则，每个规则对应一个唯一的 matchid。
 * @endpoint POST https://api.weixin.qq.com/wxa/business/gamematch/deletematchrule?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GamematchDeleteMatchRuleQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GamematchDeleteMatchRuleRequest {
  /** 需要删除的 matchid，通过createMatchRule后台接口创建 */
  match_id: string
}

interface GamematchDeleteMatchRuleResponse {
  /** 错误码 */
  errcode?: number
  /** 错误提示信息 */
  errmsg?: string
}

/**
 * 获取对局匹配规则（gamematch.getAllMatchRule） — 获取小游戏拥有的所有 matchid 及其对应的匹配规则，以及 matchid 的打开状态。
 * @endpoint POST https://api.weixin.qq.com/wxa/business/gamematch/getallmatchrule?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GamematchGetAllMatchRuleQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GamematchGetAllMatchRuleResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 小游戏拥有的游戏规则列表 */
  match_rule_list?: GamematchGetAllMatchRuleMatchRuleList[]
}

interface GamematchGetAllMatchRuleMatchRuleList {
  /** matchid，通过createMatchRule后台接口创建 */
  match_id?: string
  /** 创建 matchid 的小程序 appid */
  appid?: string
  /** matchid 的打开状态，具体值见setMatchIdOpenState */
  open_state?: number
  /** 匹配结果中的队伍数量 */
  team_count?: number
  /** 匹配结果每个队伍对应的成员数量 */
  team_member_count?: number
  /**
   * 是否需要在下发匹配结果时同步创建帧同步房间。0:不需要，1:需要。如果填 1，则会在下发对局匹配结果时携带accessInfo，用于加入帧同步房间。 要求 team_count * team_member_count 不超过 10 人才可以使用该项。
   */
  need_room_service_info?: number
  /** 创建帧同步房间时的房间信息。 */
  game_room_info?: GamematchGetAllMatchRuleMatchRuleListGameRoomInfo
}

interface GamematchGetAllMatchRuleMatchRuleListGameRoomInfo {
  /** 后台下发游戏逻辑帧的周期，单位 ms，最小不得小于 33ms */
  game_tick?: number
  /**
   * 不填或者填 0 代表微信后台只要收到一次“开始游戏”指令就会开始游戏，否则微信后台会统计发送“开始游戏”指令的玩家数达到规定的百分比后才能启动游戏，填 50 表征 50%
   */
  start_percent?: number
  /** 使用的 UDP 可靠性策略，N：固定冗余 N 帧。建议值：3 */
  udp_reliability_strategy?: number
  /**
   * 房间是否需要用户的头像昵称——如果填 True，微信后台会去校验用户是否授权该应用获取其头像昵称的权限。如果房间需要头像昵称但是用户未授权，则用户后续加入房间的请求会返回失败；如果 need_user_info 为 False，后续用户的加入房间操作会成功，但微信后台不会在房间信息中下发用户的头像昵称。
   */
  need_user_info?: boolean
  /** 游戏对局时长，单位 s，不得超过微信后台最大限制 1 个小时，如果不填或填 0 则默认为 20 分钟 */
  game_last_time?: number
  /** 是否需要在创建房间时同时生成一个随机的游戏种子 */
  need_game_seed?: boolean
}

/**
 * 修改对局规则打开状态（gamematch.setMatchIdOpenState） — 改 matchid 对应的打开状态。
 * @endpoint POST https://api.weixin.qq.com/wxa/business/gamematch/setmatchopenstate?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GamematchSetMatchIdOpenStateQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GamematchSetMatchIdOpenStateRequest {
  /** 需要变更状态的 matchid，通过createMatchRule后台接口创建 */
  match_id: number
  /** matchid 的打开状态 */
  open_state: GamematchSetMatchIdOpenStateOpenStateEnum
}

interface GamematchSetMatchIdOpenStateResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 匹配池对应的 id，加入匹配时需要携带 matchid 以加入对应的匹配池 */
  match_id?: string
}

/** 枚举：open_state */
type GamematchSetMatchIdOpenStateOpenStateEnum = 0 | 1

/**
 * 修改对局匹配规则（gamematch.updateMatchRule） — 修改 matchid 对应的匹配规则。
 * @endpoint POST https://api.weixin.qq.com/wxa/business/gamematch/updatematchrule?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GamematchUpdateMatchRuleQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GamematchUpdateMatchRuleRequest {
  /** 需要变更状态的 matchid，通过createMatchRule后台接口创建 */
  match_id: number
  /** matchid 的打开状态 */
  open_state: GamematchUpdateMatchRuleOpenStateEnum
}

interface GamematchUpdateMatchRuleResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 匹配池对应的 id，加入匹配时需要携带 matchid 以加入对应的匹配池 */
  match_id?: string
}

/** 枚举：open_state */
type GamematchUpdateMatchRuleOpenStateEnum = 0 | 1

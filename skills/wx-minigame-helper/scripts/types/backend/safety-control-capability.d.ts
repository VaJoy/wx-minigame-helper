// 微信小游戏服务端 API 类型声明 — 域：safety-control-capability（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取小游戏外挂分级标签数据（getCheatData） — 本接口用于小游戏开发者拉取自己游戏内被识别为外挂的分级标签数据，可按日期区间分页查询。返回数据按"openid × 命中时间(精确到小时) × 作弊类型"展开，开发者可基于结果进行封禁、二次校验、风控等后续处理。
 * @endpoint GET https://api.weixin.qq.com/wxa/game/content_spam/get_cheat_data?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetCheatDataQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GetCheatDataRequest {
  /** 查询起始日期，格式 yyyyMMdd，例如 20260601 */
  ds_begin: number
  /** 查询时长（天数），取值范围 [1, 7]，实际查询区间为 [ds_begin, ds_begin + duration_days - 1]，闭区间 */
  duration_days: number
  /** 分页起始偏移（0-based），默认 0 */
  offset?: number
  /** 单页条数，默认 100，最大 1000，超过则按 1000 截断 */
  limit?: number
}

interface GetCheatDataResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: number
  /** 实际生效的起始日期 yyyyMMdd */
  ds_begin?: number
  /** 实际生效的截止日期 yyyyMMdd（含） */
  ds_end?: number
  /** 查询区间内的总命中行数（分页前），用于调用方判断是否还有下一页 */
  total_count?: number
  /** 当前页数据列表，长度 ≤ limit */
  rows?: GetCheatDataRows[]
}

interface GetCheatDataRows {
  /** 用户在该小游戏下的 openid */
  openid?: any[]
  /** 命中时间，格式 yyyyMMddHH（精确到小时） */
  ds?: number
  /** 主作弊类型枚举值，1 内存挂；2 按键挂；3 JS 注入；4 JS 修改 */
  cheat_type?: number
  /** 风险等级枚举值，0 未知；1 低危；2 中危；3 高危；4 严重 */
  risk_level?: number
}

/**
 * 获取用户安全等级（getUserRiskRank） — 该接口用于根据提交的用户信息数据获取用户的安全等级 risk_rank（无需用户授权）。详见用户安全解决方案。
 * @endpoint POST https://api.weixin.qq.com/wxa/getuserriskrank?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetUserRiskRankQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GetUserRiskRankRequest {
  /** 小程序appid */
  appid: string
  /** 用户的openid */
  openid: string
  /** 场景值，0:注册，1:营销作弊, 2:UGC */
  scene: number
  /** 用户手机号 */
  mobile_no?: string
  /** 用户访问源ip */
  client_ip: string
  /** 用户邮箱地址 */
  email_address?: string
  /** 额外补充信息 */
  extended_info?: string
  /** 默认值false。false：正式调用，true：测试调用 */
  is_test?: boolean
}

interface GetUserRiskRankResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 用户风险等级，合法值为0,1,2,3,4，数字越大风险越高。 */
  risk_rank?: number
  /** 唯一请求标识，标记单次请求 */
  unoin_id?: number
}

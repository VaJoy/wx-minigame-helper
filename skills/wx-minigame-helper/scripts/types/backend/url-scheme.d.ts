// 微信小游戏服务端 API 类型声明 — 域：url-scheme（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取加密scheme码（generateScheme） — - 该接口用于获取小程序 scheme 码，适用于短信、邮件、外部网页、微信内等拉起小程序的业务场景。目前仅针对国内非个人主体的小程序开放，详见获取 URL scheme。
 * @endpoint POST https://api.weixin.qq.com/wxa/generatescheme?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GenerateSchemeQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface GenerateSchemeRequest {
  /** 跳转到的目标小程序信息。 */
  jump_wxa?: GenerateSchemeJumpWxa
  /**
   * 到期失效的 scheme 码的失效时间，为 Unix 时间戳。生成的到期失效 scheme 码在该时间前有效。最长有效期为30天。is_expire 为 true 且 expire_type 为 0 时必填
   */
  expire_time?: number
  /** 默认值0，到期失效的 scheme 码失效类型，失效时间：0，失效间隔天数：1 */
  expire_type?: number
  /**
   * 到期失效的 scheme 码的失效间隔天数。生成的到期失效 scheme 码在该间隔时间到达前有效。最长间隔天数为30天。is_expire 为 true 且 expire_type 为 1 时必填
   */
  expire_interval?: number
}

interface GenerateSchemeResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 生成的小程序 scheme 码 */
  openlink?: string
}

interface GenerateSchemeJumpWxa {
  /** 通过 scheme 码进入的小程序页面路径，必须是已经发布的小程序存在的页面，不可携带 query。path 为空时会跳转小程序主页。 */
  path?: string
  /**
   * 通过 scheme 码进入小程序时的 query，最大1024个字符，只支持数字，大小写英文以及部分特殊字符：`!#$&'()*+,/:;=?@-._~%``
   */
  query?: string
  /** 默认值"release"。要打开的小程序版本。正式版为"release"，体验版为"trial"，开发版为"develop"，仅在微信外打开时生效。 */
  env_version?: string
}

/**
 * 查询scheme码（queryScheme） — 该接口用于查询小程序 scheme 码，包括加密 scheme 和明文 scheme
 * @endpoint POST https://api.weixin.qq.com/wxa/queryscheme?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface QuerySchemeQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface QuerySchemeRequest {
  /** 小程序 scheme 码。支持加密 scheme 和明文 scheme */
  scheme?: string
  /** 查询类型。默认值0，查询 scheme 码信息：0， 查询每天剩余访问次数：1 */
  query_type?: number
}

interface QuerySchemeResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** scheme 信息 */
  scheme_info?: QuerySchemeSchemeInfo
  /** quota 配置 */
  quota_info?: QuerySchemeQuotaInfo
}

interface QuerySchemeQuotaInfo {
  /** URL Scheme（加密+明文）/加密 URL Link 单天剩余访问次数 */
  remain_visit_quota?: number
}

interface QuerySchemeSchemeInfo {
  /** 小程序 appid */
  appid?: string
  /** 小程序页面路径 */
  path?: string
  /** 小程序页面query */
  query?: string
  /** 创建时间，为 Unix 时间戳 */
  create_time?: number
  /** 到期失效时间，为 Unix 时间戳，0 表示永久生效 */
  expire_time?: number
  /** 要打开的小程序版本。正式版为"release"，体验版为"trial"，开发版为"develop" */
  env_version?: string
}

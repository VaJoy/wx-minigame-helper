// 微信小游戏服务端 API 类型声明 — 域：url-link（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取加密URLLink（generateUrlLink） — 获取小程序 URL Link，适用于短信、邮件、网页、微信内等拉起小程序的业务场景。目前仅针对国内非个人主体的小程序开放，详见获取 URL Link
 * @endpoint POST https://api.weixin.qq.com/wxa/generate_urllink?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GenerateUrlLinkQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface GenerateUrlLinkRequest {
  /** 通过 URL Link 进入的小程序页面路径，必须是已经发布的小程序存在的页面，不可携带 query 。path 为空时会跳转小程序主页 */
  path?: string
  /** 通过 URL Link 进入小程序时的query，最大1024个字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~% */
  query?: string
  /** 默认值0.小程序 URL Link 失效类型，失效时间：0，失效间隔天数：1 */
  expire_type?: number
  /**
   * 到期失效的 URL Link 的失效时间，为 Unix 时间戳。生成的到期失效 URL Link 在该时间前有效。最长有效期为30天。expire_type 为 0 必填
   */
  expire_time?: number
  /** 到期失效的URL Link的失效间隔天数。生成的到期失效URL Link在该间隔时间到达前有效。最长间隔天数为30天。expire_type 为 1 必填 */
  expire_interval?: number
  /** 云开发静态网站自定义 H5 配置参数，可配置中转的云开发 H5 页面。不填默认用官方 H5 页面 */
  cloud_base?: GenerateUrlLinkCloudBase
  /** 默认值"release"。要打开的小程序版本。正式版为 "release"，体验版为"trial"，开发版为"develop"，仅在微信外打开时生效。 */
  env_version?: string
}

interface GenerateUrlLinkResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 生成的小程序 URL Link */
  url_link?: string
}

interface GenerateUrlLinkCloudBase {
  /** 云开发环境 */
  env: string
  /** 静态网站自定义域名，不填则使用默认域名 */
  domain?: string
  /** 云开发静态网站 H5 页面路径，不可携带 query */
  path?: string
  /**
   * 云开发静态网站 H5 页面 query 参数，最大 1024 个字符，只支持数字，大小写英文以及部分特殊字符：`!#$&'()*+,/:;=?@-._~%``
   */
  query?: string
  /** 第三方批量代云开发时必填，表示创建该 env 的 appid （小程序/第三方平台） */
  resource_appid?: string
}

/**
 * 查询加密URLLink（queryUrlLink） — 该接口用于查询小程序加密 url_link 配置
 * @endpoint POST https://api.weixin.qq.com/wxa/query_urllink?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface QueryUrlLinkQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface QueryUrlLinkRequest {
  /** 小程序加密 url_link。 */
  url_link?: string
  /** 查询类型。默认值0，查询 url_link 信息：0， 查询每天剩余访问次数：1 */
  query_type?: number
}

interface QueryUrlLinkResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** url_link 配置 */
  url_link_info?: QueryUrlLinkUrlLinkInfo
  /** quota 配置 */
  quota_info?: QueryUrlLinkQuotaInfo
}

interface QueryUrlLinkQuotaInfo {
  /** URL Scheme（加密+明文）/加密 URL Link 单天剩余访问次数 */
  remain_visit_quota?: number
}

interface QueryUrlLinkUrlLinkInfo {
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

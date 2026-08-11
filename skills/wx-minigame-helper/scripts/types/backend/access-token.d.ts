// 微信小游戏服务端 API 类型声明 — 域：access-token（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取接口调用凭据（getAccessToken） — 本接口用于获取获取全局唯一后台接口调用凭据（Access Token），token 有效期为 7200 秒，开发者需要进行妥善保存，使用注意事项请参考此文档。
 * @endpoint GET https://api.weixin.qq.com/cgi-bin/token?appid=AppID&secret=AppSecret&grant_type=client_credential
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetAccessTokenQuery {
  /** 账号的唯一凭证，即 AppID，点此查看如何获取Appid */
  appid: string
  /** 唯一凭证密钥，即 AppSecret，点此查看如何获取AppSecret */
  secret: string
  /** 填写 client_credential */
  grant_type: string
}

interface GetAccessTokenResponse {
  /** 获取到的凭证 */
  access_token?: string
  /** 凭证有效时间，单位：秒。目前是7200秒之内的值。 */
  expires_in?: number
}

/**
 * 获取稳定版接口调用凭据（getStableAccessToken） — 本接口用于获取获取全局唯一后台接口调用凭据（Access Token），token 有效期为 7200 秒，但此接口和 getAccessToken 互相隔离，且比其更加稳定，推荐使用此接口替代。开发者需要进行妥善保存，使用注意事项请参考此文档。
 * @endpoint POST https://api.weixin.qq.com/cgi-bin/stable_token
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetStableAccessTokenRequest {
  /** 填写 client_credential */
  grant_type: string
  /** 账号的唯一凭证，即 AppID，点此查看如何获取Appid */
  appid: string
  /** 唯一凭证密钥，即 AppSecret，点此查看如何获取AppSecret */
  secret: string
  /**
   * 默认使用 false。1. force_refresh = false 时为普通调用模式，access_token 有效期内重复调用该接口不会更新 access_token；2. 当force_refresh = true 时为强制刷新模式，会导致上次获取的 access_token 失效，并返回新的 access_token
   */
  force_refresh?: boolean
}

interface GetStableAccessTokenResponse {
  /** 获取到的凭证 */
  access_token?: string
  /** 凭证有效时间，单位：秒。目前是7200秒之内的值。 */
  expires_in?: number
}

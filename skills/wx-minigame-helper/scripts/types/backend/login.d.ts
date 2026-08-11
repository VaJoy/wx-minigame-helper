// 微信小游戏服务端 API 类型声明 — 域：login（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 重置登录态（ResetUserSessionKey） — 重置指定的登录态 session_key。为了保持 session_key 私密性，接口不明文传入 session_key，而是通过校验登录态签名完成。
 * @endpoint GET https://api.weixin.qq.com/wxa/resetusersessionkey?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface ResetUserSessionKeyQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface ResetUserSessionKeyRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
  signature: string
  /** 用户登录态签名的哈希方法，目前只支持 hmac_sha256 */
  sig_method: string
}

interface ResetUserSessionKeyResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 用户唯一标识符 */
  openid?: string
  /** 重置后的用户登录态 */
  session_key?: string
}

/**
 * 检验登录态（checkSessionKey） — 校验服务器所保存的登录态 session_key 是否有效。为了保持 session_key 私密性，接口不明文传输 session_key，而是通过校验登录态签名完成。
 * @endpoint GET https://api.weixin.qq.com/wxa/checksession?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface CheckSessionKeyQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface CheckSessionKeyRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
  signature: string
  /** 用户登录态签名的哈希方法，目前只支持 hmac_sha256 */
  sig_method: string
}

interface CheckSessionKeyResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

/**
 * 小程序登录凭证校验（code2Session） — 登录凭证校验。通过 wx.login 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。更多使用方法详见小程序登录。
 * @endpoint GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JS_CODE&grant_type=GRANT_TYPE
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface Code2SessionQuery {
  /** 小程序 appId */
  appid: string
  /** 小程序 appSecret */
  secret: string
  /** 登录时获取的 code，可通过wx.login获取 */
  js_code: string
  /** 授权类型，此处只需填写 authorization_code */
  grant_type: string
}

interface Code2SessionResponse {
  /** 会话密钥 */
  session_key?: string
  /** 用户在开放平台的唯一标识符，若当前小程序已绑定到微信开放平台帐号下会返回，详见 UnionID 机制说明。 */
  unionid?: string
  /** 用户唯一标识 */
  openid?: string
  /** 错误码，请求失败时返回 */
  errcode?: number
  /** 错误信息，请求失败时返回 */
  errmsg?: string
}

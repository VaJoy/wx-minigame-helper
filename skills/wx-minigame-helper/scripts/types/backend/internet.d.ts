// 微信小游戏服务端 API 类型声明 — 域：internet（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取用户encryptKey（getUserEncryptKey） — 该接口用于获取用户encryptKey。 会获取用户最近3次的key，每个key的存活时间为3600s
 * @endpoint GET https://api.weixin.qq.com/wxa/business/getuserencryptkey?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetUserEncryptKeyQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
  /** 用户的openid */
  openid: string
  /**
   * 用sessionkey作为密钥对空字符串签名得到的结果。session_key可通过code2Session接口获得。 伪代码：signature = hmac_sha256(session_key, "")
   */
  signature: string
  /** 签名方法，只支持 hmac_sha256 */
  sig_method: string
}

interface GetUserEncryptKeyResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 用户最近三次的加密key列表 */
  key_info_list?: GetUserEncryptKeyKeyInfoList[]
}

interface GetUserEncryptKeyKeyInfoList {
  /** 加密key */
  encrypt_key?: string
  /** key的版本号 */
  version?: number
  /** 剩余有效时间 */
  expire_in?: number
  /** 加密iv */
  iv?: string
  /** 创建key的时间戳 */
  create_time?: number
}

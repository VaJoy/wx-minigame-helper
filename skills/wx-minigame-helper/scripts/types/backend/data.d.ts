// 微信小游戏服务端 API 类型声明 — 域：data（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 删除已上报KV数据（storage.removeUserStorage） — 本接口用于删除已经上报到微信的 key-value 数据。
 * @endpoint POST https://api.weixin.qq.com/wxa/remove_user_storage?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface StorageRemoveUserStorageQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户唯一标识符 */
  openid: string
  /** 用户登录态签名，签名算法请参考用户登录态签名算法 */
  signature: string
  /** 用户登录态签名的哈希方法，如 hmac_sha256 等，请参考用户登录态签名算法 */
  sig_method: string
}

interface StorageRemoveUserStorageRequest {
  /** 要删除的数据 key 列表 */
  key: any[]
}

interface StorageRemoveUserStorageResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

/**
 * 写用户关系链互动数据存储（storage.setUserInteractiveData） — 本接口用来写入用户关系链互动数据存储
 * @endpoint POST https://api.weixin.qq.com/wxa/setuserinteractivedata?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface StorageSetUserInteractiveDataQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户唯一标识符 */
  openid: string
  /** 用户登录态签名，签名算法请参考用户登录态签名算法 */
  signature: string
  /** 用户登录态签名的哈希方法，如 hmac_sha256 等，请参考用户登录态签名算法 */
  sig_method: string
}

interface StorageSetUserInteractiveDataRequest {
  /** 要上报的数据（云调用时，该参数名为 kvList） */
  kv_list: StorageSetUserInteractiveDataKvList[]
}

interface StorageSetUserInteractiveDataResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

interface StorageSetUserInteractiveDataKvList {
  /** 数据的 key，目前可以为 '1' - '50' */
  key: string
  /** 数据的 value */
  value: number
}

/**
 * 上报用户数据（storage.setUserStorage） — 上报用户数据后台接口。
 * @endpoint POST https://api.weixin.qq.com/wxa/set_user_storage?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface StorageSetUserStorageQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户唯一标识符 */
  openid: string
  /** 用户登录态签名，签名算法请参考用户登录态签名算法 */
  signature: string
  /** 用户登录态签名的哈希方法，如 hmac_sha256 等，请参考用户登录态签名算法 */
  sig_method: string
}

interface StorageSetUserStorageRequest {
  /** 要上报的数据（云调用时，该参数名为 kvList） */
  kv_list: StorageSetUserStorageKvList[]
}

interface StorageSetUserStorageResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

interface StorageSetUserStorageKvList {
  /** 数据的 key，目前可以为 '1' - '50' */
  key: string
  /** 数据的 value */
  value: number
}

// 微信小游戏服务端 API 类型声明 — 域：midas-payment（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 退回扣除游戏币（pay_v2.cancelPay） — 本接口开通了虚拟支付的小游戏可用。
 * @endpoint POST https://api.weixin.qq.com/wxa/game/cancelpay?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface PayV2CancelPayQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户登录态签名 */
  signature: string
  /** 用户登录态签名的哈希方法，只支持 hmac_sha256，请传入"hmac_sha256" */
  sig_method: string
  /** 支付请求签名（pay_sig）算法说明 */
  pay_sig: string
}

interface PayV2CancelPayRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 支付应用 ID（OfferId） */
  offer_id: string
  /** 当前 UNIX 时间戳（请尽可能确保时间准确），单位：秒 如：1668136271 */
  ts: number
  /** 已发布的分区 ID（MP-分区配置-分区 ID）；需要和 env 对应 */
  zone_id: string
  /** 环境配置 */
  env: PayV2CancelPayEnvEnum
  /** 用户外网 ip */
  user_ip: string
  /** 本次退回的退游戏币的数量（支持部分、多次退）（新增字段） */
  amount: number
  /**
   * 扣除游戏币订单号，业务需要保证全局唯一，相同的订单号多次请求不会重复扣除；长度不超过 63，只能是数字、英文大小写字母及*-的组合；不能以下划线（*）开头（2.0 新增约束）
   */
  bill_no: string
  /** 扣除游戏币订单号（原 1.0 的 bill_no 字段）；与 扣除游戏币 接口中的 bill_no 对应 */
  pay_bill_no: string
}

interface PayV2CancelPayResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 扣除游戏币订单号 */
  bill_no?: string
  /** 扣款后的余额 */
  balance?: number
  /** 本次扣的赠送币的数量（原 1.0 的 used_gen_amt） */
  used_present_amount?: number
}

/** 枚举：env */
type PayV2CancelPayEnvEnum = 0 | 1

/**
 * 查询游戏币余额（pay_v2.getBalance） — 查询游戏币余额。本接口开通了虚拟支付的小游戏可用。通过本接口查询某个用户的游戏币余额，查询时机可以是用户支付完成，或者用户查看游戏币余额等场景。**注意，某些极端情况下，支付完成后可能余额会延迟到账，需要按一定间隔定期查询，并提示用户耐心等待。**
 * @endpoint POST https://api.weixin.qq.com/wxa/game/getbalance?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface PayV2GetBalanceQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户登录态签名 */
  signature: string
  /** 用户登录态签名的哈希方法，只支持 hmac_sha256，请传入"hmac_sha256" */
  sig_method: string
  /** 支付请求签名（pay_sig）算法说明 */
  pay_sig: string
}

interface PayV2GetBalanceRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 支付应用 ID（OfferId） */
  offer_id: string
  /** 当前 UNIX 时间戳（请尽可能确保时间准确），单位：秒 如：1668136271 */
  ts: number
  /** 已发布的分区 ID（MP-分区配置-分区 ID），需要和 env 对应 */
  zone_id: string
  /** 环境配置 */
  env: PayV2GetBalanceEnvEnum
  /** 用户外网 ip */
  user_ip: string
  /** 代币类型，默认值0 */
  coin_type?: PayV2GetBalanceCoinTypeEnum
}

interface PayV2GetBalanceResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 游戏币总余额，包括现金充值和赠送部分。 */
  balance?: number
  /** 赠送账户的游戏币余额（原 1.0 的 gen_balance） */
  present_balance?: number
  /** 累计现金充值获得的游戏币数量（原 1.0 的 save_amt） */
  sum_save?: number
  /** 累计赠送的游戏币数量（原 1.0 的 present_sum） */
  sum_present?: number
  /** 累计获得的游戏币数量，包括现金充值和赠送（原 1.0 的 save_sum） */
  sum_balance?: number
  /** 累计总消耗（即扣除）游戏币数量（原 1.0 的 cost_sum） */
  sum_cost?: number
  /** 是否满足首充活动标记（原 1.0 的 first_save） */
  first_save?: boolean
}

/** 枚举：coin_type */
type PayV2GetBalanceCoinTypeEnum = 0 | 1

/** 枚举：env */
type PayV2GetBalanceEnvEnum = 0 | 1

/**
 * 扣除游戏币（pay_v2.pay） — 本接口开通了虚拟支付的小游戏可用。
 * @endpoint POST https://api.weixin.qq.com/wxa/game/pay?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface PayV2PayQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户登录态签名 */
  signature: string
  /** 用户登录态签名的哈希方法，只支持 hmac_sha256，请传入"hmac_sha256" */
  sig_method: string
  /** 支付请求签名（pay_sig）算法说明 */
  pay_sig: string
}

interface PayV2PayRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 支付应用 ID（OfferId） */
  offer_id: string
  /** 当前 UNIX 时间戳（请尽可能确保时间准确），单位：秒 如：1668136271 */
  ts: number
  /** 已发布的分区 ID（MP-分区配置-分区 ID）；需要和 env 对应 */
  zone_id: string
  /** 环境配置 */
  env: PayV2PayEnvEnum
  /** 用户外网 ip */
  user_ip: string
  /** 扣除游戏币数量，需要大于 0（原 1.0 的 amt） */
  amount: number
  /**
   * 扣除游戏币订单号，业务需要保证全局唯一，相同的订单号多次请求不会重复扣除；长度不超过 63，只能是数字、英文大小写字母及*-的组合；不能以下划线（*）开头（2.0 新增约束）
   */
  bill_no: string
  /** 道具信息 */
  payitem?: string
  /** 备注 */
  remark?: string
}

interface PayV2PayResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 扣除游戏币订单号 */
  bill_no?: string
  /** 扣款后的余额 */
  balance?: number
  /** 本次扣的赠送币的数量（原 1.0 的 used_gen_amt） */
  used_present_amount?: number
}

/** 枚举：env */
type PayV2PayEnvEnum = 0 | 1

/**
 * 给用户赠送游戏币（pay_v2.present） — 本接口开通了虚拟支付的小游戏可用。
 * @endpoint POST https://api.weixin.qq.com/wxa/game/present?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface PayV2PresentQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户登录态签名 */
  signature: string
  /** 用户登录态签名的哈希方法，只支持 hmac_sha256，请传入"hmac_sha256" */
  sig_method: string
  /** 支付请求签名（pay_sig）算法说明 */
  pay_sig: string
}

interface PayV2PresentRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 支付应用 ID（OfferId） */
  offer_id: string
  /** 当前 UNIX 时间戳（请尽可能确保时间准确），单位：秒 如：1668136271 */
  ts: number
  /** 已发布的分区 ID（MP-分区配置-分区 ID）；需要和 env 对应 */
  zone_id: string
  /** 环境配置 */
  env: PayV2PresentEnvEnum
  /** 用户外网 ip */
  user_ip: string
  /** 赠送游戏币的个数，不能为 0（原 present_counts） */
  amount: number
  /**
   * 赠送订单号，业务需要保证全局唯一，相同的订单号多次请求不会重复扣除；长度不超过 63，只能是数字、英文大小写字母及*-的组合；不能以下划线（*）开头（2.0 新增约束）
   */
  bill_no: string
}

interface PayV2PresentResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 赠送订单号 */
  bill_no?: string
  /** 赠送后的余额 */
  balance?: number
}

/** 枚举：env */
type PayV2PresentEnvEnum = 0 | 1

/**
 * 查询订单状态（pay_v2.queryOrder） — 本接口用于查看订单状态
 * @endpoint POST https://api.weixin.qq.com/wxa/game/queryorderinfo?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface PayV2QueryOrderQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
  /** 用户登录态签名 */
  signature: string
  /** 用户登录态签名的哈希方法，只支持 hmac_sha256，请传入"hmac_sha256" */
  sig_method: string
  /** 支付请求签名（pay_sig）算法说明 */
  pay_sig: string
}

interface PayV2QueryOrderRequest {
  /** 用户唯一标识符 */
  openid: string
  /** 支付应用 ID（OfferId） */
  offer_id: string
  /** 当前 UNIX 时间戳（请尽可能确保时间准确），单位：秒 如：1668136271 */
  ts: number
  /** 已发布的分区 ID（MP-分区配置-分区 ID） ；需要和 env 对应 */
  zone_id: string
  /** 环境配置 */
  env: PayV2QueryOrderEnvEnum
  /** 充值时传入的外部订单号 */
  out_trade_no: string
  /** 1 代币 2 道具直购 */
  biz_id: number
}

interface PayV2QueryOrderResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 道具 id */
  product_id?: string
  /** 支付状态（用户是否已支付）1 未支付 2 已支付 */
  pay_state?: number
  /** 发货状态（如果是游戏币，则是余额是否增加） 1 未发货 2 已发货 */
  deliver_state?: number
  /** 支付完成时间 */
  pay_finish_time?: number
  /** 充值时传入的外部订单号 */
  out_trade_no?: string
  /** 微信支付商户单号（仅微信支付方式存在） */
  mch_order_no?: string
  /** 交易单号（微信支付订单号，仅微信支付方式存在） */
  transaction_id?: string
}

/** 枚举：env */
type PayV2QueryOrderEnvEnum = 0 | 1

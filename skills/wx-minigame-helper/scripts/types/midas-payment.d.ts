// 微信小游戏 API 类型声明 — 域：midas-payment（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCheckIsSupportMidasPaymentSuccessCallbackResult {
  /** 调用结果信息，格式为 "checkIsSupportMidasPayment:ok" */
  errMsg: string
  /** 支付支持信息对象 */
  data: Record<string, any>
  /** 错误码，0 表示成功 */
  err_code: number
  /** 错误信息，"success" 表示成功 */
  err_msg: string
  /** 是否支持支付，true 表示支持，false 表示不支持 */
  allow_pay: boolean
}

interface WxCheckIsSupportMidasPaymentOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxCheckIsSupportMidasPaymentSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestMidasFriendPaymentSuccessCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法 */
  encryptedData: string
  /** 加密算法的初始向量，详细见加密数据解密算法 */
  iv: string
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据 */
  cloudID: string
}

interface WxRequestMidasFriendPaymentOption {
  /** 支付的类型，不同的支付类型有各自额外要传的附加参数 */
  mode: string
  /** 环境配置 */
  env: number
  /** 在米大师侧申请的应用 id */
  offerId: string
  /** 币种 */
  currencyType: string
  /** 申请接入时的平台，platform 与应用id有关。 */
  platform: string
  /** 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。 */
  buyQuantity: number
  /** 分区 ID */
  zoneId: string
  /** 开发者业务订单号，每个订单号只能使用一次，重复使用会失败。要求32个字符内，只能是数字、大小写字母、符号 `_- */
  outTradeNo: string
  /** 随机字符串，长度应小于 128 */
  nonceStr: string
  /** 生成这个随机字符串的 UNIX 时间戳（精确到秒） */
  timeStamp: number
  /** 签名 */
  signature: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxRequestMidasFriendPaymentSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestMidasPaymentSuccessCallbackResult {
  /** 调用成功信息 */
  errMsg: string
}

interface WxRequestMidasPaymentOption {
  /** 支付的类型，不同的支付类型有各自额外要传的附加参数。 */
  mode: string
  /**
   * 环境配置
   * 默认值 0
   */
  env?: number
  /** 在米大师侧申请的应用 id */
  offerId: string
  /** 币种 */
  currencyType: string
  /** 申请接入时的平台，platform 与应用id有关。 */
  platform?: string
  /** 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。 */
  buyQuantity?: number
  /**
   * 分区 ID
   * 默认值 1
   */
  zoneId?: string
  /**
   * 业务订单号，每个订单号只能使用一次，重复使用会失败。开发者需要确保该订单号在对应游戏下的唯一性，平台会尽可能校验该唯一性约束，但极端情况下可能会跳过对该约束的校验。要求32个字符内，只能是数字、大小写字母、符号_-
   */
  outTradeNo: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxRequestMidasPaymentSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestMidasPaymentGameItemOption {
  /** **支付原串** */
  signData: Record<string, any>
  /** **支付的类型** */
  mode: string
  /** **在米大师侧申请的应用id** */
  offerId: string
  /** **购买数量** */
  buyQuantity: number
  /**
   * **环境配置**
   * 默认值 0
   */
  env?: number
  /** **币种** */
  currencyType: string
  /**
   * **平台**
   * 默认值 android
   */
  platform?: string
  /**
   * **分区ID**
   * 默认值 1
   */
  zoneId?: string
  /** **道具ID** */
  productId: string
  /** **道具单价（分）** */
  goodsPrice: number
  /** **业务订单号** */
  outTradeNo: string
  /** **透传数据** */
  attach?: string
  /** **支付签名** */
  paySig: string
  /** **用户态签名** */
  signature: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxMidasPayment {
  /** 检查当前环境是否支持虚拟支付。使用前请注意阅读相关说明。 */
  checkIsSupportMidasPayment(object?: WxCheckIsSupportMidasPaymentOption): void;
  /**
   * 发起米大师朋友礼物索要。接口用法详见 小游戏礼物索要接入指南
   * @deprecated 接口已废弃
   */
  requestMidasFriendPayment(object?: WxRequestMidasFriendPaymentOption): void;
  /**
   * 发起购买游戏币支付请求，可参考虚拟支付2.0游戏币，虚拟支付全流程可参考技术手册-虚拟支付篇
   * 支持 Promise 风格调用
   */
  requestMidasPayment(object?: WxRequestMidasPaymentOption): void;
  /** 发起道具直购支付请求，可参考虚拟支付2.0道具直购，虚拟支付全流程可参考技术手册-虚拟支付篇 */
  requestMidasPaymentGameItem(object?: WxRequestMidasPaymentGameItemOption): void;
}

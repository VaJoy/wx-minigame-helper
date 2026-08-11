// 微信小游戏 API 类型声明 — 域：util（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxDecodeOption {
  /** 要解码的 ArrayBuffer */
  data: ArrayBuffer
  /**
   * 编码的格式
   * 默认值 utf8
   */
  format?: string
}

interface WxEncodeOption {
  /** 要编码的字符串 */
  data: string
  /**
   * 编码的格式。注意：iOS高性能模式和iOS高性能+模式下，仅支持utf-8格式
   * 默认值 utf8
   */
  format?: string
}

interface WxUtil {
  /** 将 ArrayBuffer 按照指定的编码格式解码成字符串 */
  decode(object?: WxDecodeOption): string;
  /** 将字符串按照指定的编码格式编码成 ArrayBuffer */
  encode(object?: WxEncodeOption): ArrayBuffer;
}

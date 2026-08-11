// 微信小游戏 API 类型声明 — 域：ext（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxGetExtConfigSuccessCallbackResult {
  /** 第三方平台自定义的数据 */
  extConfig: Record<string, any>
}

interface WxGetExtConfigOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetExtConfigSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxExt {
  /**
   * 获取第三方平台自定义的数据字段。
   * 支持 Promise 风格调用
   */
  getExtConfig(object?: WxGetExtConfigOption): void;
  /** wx.getExtConfig 的同步版本。 */
  getExtConfigSync(): void;
}

// 微信小游戏 API 类型声明 — 域：offline-mode（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxEnableOfflineModeDebugSuccessCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface WxEnableOfflineModeDebugOption {
  /** 是否开启离线模式调试 */
  enableDebug: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxEnableOfflineModeDebugSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOfflineMode {
  /** 开启或关闭离线模式调试。仅在开发版和体验版中可用，正式版中调用会失败。若服务端已配置离线模式，则无法通过此接口修改。 */
  enableOfflineModeDebug(object?: WxEnableOfflineModeDebugOption): void;
  /** 取消监听离线模式状态变化事件。 */
  offOfflineModeStateChange(callback: (res: any) => void): void;
  /** 监听离线模式状态变化事件。当离线模式的启用状态发生改变时触发回调。 */
  onOfflineModeStateChange(callback: (res: any) => void): void;
}

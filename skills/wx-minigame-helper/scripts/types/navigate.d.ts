// 微信小游戏 API 类型声明 — 域：navigate（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxExitMiniProgramOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxNavigateBackMiniProgramOption {
  /**
   * 需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 详情。
   * 默认值 {}
   */
  extraData?: Record<string, any>
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxNavigateToMiniProgramOption {
  /** 要打开的小程序 appId */
  appId?: string
  /**
   * 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 wx.onShow 回调函数、wx.getLaunchOptionsSync 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。
   */
  path?: string
  /**
   * 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 wx.onShow、wx.getLaunchOptionsSync 中可以获取到这份数据。
   */
  extraData?: Record<string, any>
  /**
   * 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
   * 默认值 release
   */
  envVersion?: string
  /**
   * 小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。
   * 最低版本 2.18.1
   */
  shortLink?: string
  /**
   * 不reLaunch目标小程序，直接打开目标跳转的小程序退后台时的页面，需满足以下条件：1. 目标跳转的小程序生命周期未被销毁；2. 且目标当次启动的path、query与上次启动相同，apiCategory以wx.getApiCategory接口的返回结果为准。
   * 默认值 false
   * 最低版本 2.24.0
   */
  noRelaunchIfPathUnchanged?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRestartMiniProgramOption {
  /** 打开的页面路径，path 中 ? 后面的部分会成为 query */
  path?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxNavigate {
  /**
   * 退出当前小程序
   * 支持 Promise 风格调用
   */
  exitMiniProgram(object?: WxExitMiniProgramOption): void;
  /**
   * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功。
   * 支持 Promise 风格调用
   */
  navigateBackMiniProgram(object?: WxNavigateBackMiniProgramOption): void;
  /**
   * 打开另一个小程序
   * 支持 Promise 风格调用
   */
  navigateToMiniProgram(object?: WxNavigateToMiniProgramOption): void;
  /** 重启当前小程序 */
  restartMiniProgram(object?: WxRestartMiniProgramOption): void;
}

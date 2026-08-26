// 微信小游戏 API 类型声明 — 域：ad（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCreateBannerAdOption {
  /** 广告单元 id */
  adUnitId: string
  /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） */
  adIntervals?: number
  /** banner 广告组件的样式 */
  style: Record<string, any>
  /** banner 广告组件的左上角横坐标 */
  left: number
  /** banner 广告组件的左上角纵坐标 */
  top: number
  /** banner 广告组件的宽度 */
  width: number
  /** banner 广告组件的高度 */
  height: number
}

interface WxCreateCustomAdOption {
  /** 广告单元 id */
  adUnitId: string
  /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（仅对支持自动刷新的模板生效） */
  adIntervals: number
  /** 原生模板广告组件的样式 */
  style: Record<string, any>
  /** 原生模板广告组件的左上角横坐标 */
  left: number
  /** 原生模板广告组件的左上角纵坐标 */
  top: number
  /** 原生模板广告组件的宽度（仅在某些模板生效，如矩阵格子） */
  width: number
  /** (只对小程序适用) 原生模板广告组件是否固定屏幕位置（不跟随屏幕滚动） */
  fixed: boolean
}

interface WxCreateGridAdOption {
  /** 广告单元 id */
  adUnitId: string
  /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 grid(格子) 广告不会自动刷新） */
  adIntervals?: number
  /** grid(格子) 广告组件的样式 */
  style: Record<string, any>
  /** grid(格子) 广告组件的左上角横坐标 */
  left: number
  /** grid(格子) 广告组件的左上角纵坐标 */
  top: number
  /** grid(格子) 广告组件的宽度 */
  width: number
  /** grid(格子) 广告组件的高度 */
  height: number
  /** grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。 */
  adTheme: string
  /** grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5 */
  gridCount: number
}

interface WxCreateInterstitialAdOption {
  /** 广告单元 id */
  adUnitId: string
}

interface WxCreateRewardedVideoAdOption {
  /** 广告单元 id */
  adUnitId: string
  /**
   * 是否启用多例模式，默认为false
   * 最低版本 2.8.0
   */
  multiton?: boolean
  /**
   * 是否禁用分享页，默认为false
   * 最低版本 3.7.7
   */
  disableFallbackSharePage?: boolean
}

interface WxGetShowSplashAdStatusSuccessCallbackResult {
  /** 封面广告组件展示状态 */
  status: string
  /** 封面广告组件展示状态码 */
  code: number
}

interface WxGetShowSplashAdStatusOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetShowSplashAdStatusSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnDirectAdStatusChangeListenerCallbackResult {
  /** 当前是否处于蒙层阶段 */
  isInMask: boolean
  /** 当前是否处于直接广告中 */
  isInDirectGameAd: boolean
  /** 当前直玩广告是否由于异常流程而结束（如 下拉/搜索 进入正在直玩广告流程中的游戏） */
  isEndByAbnormal: boolean
}

interface BannerAdStyle {
  /** banner 广告组件的左上角横坐标 */
  left: number
  /** banner 广告组件的左上角纵坐标 */
  top: number
  /** banner 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。 */
  width: number
  /** banner 广告组件的高度 */
  height: number
  /** banner 广告组件经过缩放后真实的宽度 */
  realWidth: number
  /** banner 广告组件经过缩放后真实的高度 */
  realHeight: number
}

interface BannerAdOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
  /**
   * 错误码
   * 最低版本 2.2.2
   */
  errCode: number
}

interface BannerAdOnResizeListenerCallbackResult {
  /** 缩放后的宽度 */
  width: number
  /** 缩放后的高度 */
  height: number
}

/**
 * banner 广告组件。banner 广告组件是一个原生组件，层级比普通组件高。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。
 */
interface BannerAd {
  /**
   * banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。
   */
  style: BannerAdStyle
  /** 销毁 banner 广告。 */
  destroy(): void
  /** 隐藏 banner 广告。 */
  hide(): void
  /** 移除 banner 广告错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除 banner 广告加载事件的监听函数 */
  offLoad(listener: (res: any) => void): void
  /** 移除 banner 广告尺寸变化事件的监听函数 */
  offResize(listener: (res: any) => void): void
  /** 监听 banner 广告错误事件。 */
  onError(listener: (res: BannerAdOnErrorListenerCallbackResult) => void): void
  /** 监听 banner 广告加载事件。 */
  onLoad(listener: (res: any) => void): void
  /** 监听 banner 广告尺寸变化事件。 */
  onResize(listener: (res: BannerAdOnResizeListenerCallbackResult) => void): void
  /** 显示 banner 广告。 */
  show(): Promise<any>
}

interface CustomAdStyle {
  /** 原生模板广告组件的左上角横坐标 */
  left: number
  /** 原生模板广告组件的左上角纵坐标 */
  top: number
  /** (只对小程序适用) 原生模板广告组件是否固定屏幕位置（不跟随屏幕滚动） */
  fixed: boolean
}

interface CustomAdOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
  /**
   * 错误码
   * 最低版本 2.2.2
   */
  errCode: number
}

interface CustomAdOnResizeListenerCallbackResult {
  /** 缩放后的宽度 */
  width: number
  /** 缩放后的高度 */
  height: number
}

/**
 * 原生模板广告组件。原生模板广告组件是一个原生组件，层级比普通组件高。原生模板广告组件默认是隐藏的，需要调用 CustomAd.show() 将其显示。如果宽度可配置，原生模板广告会根据开发者设置的宽度进行等比缩放，部分模板缩放后的尺寸会通过 CustomAd.onResize() 事件中提供。
 */
interface CustomAd {
  /** 原生模板广告组件的样式 */
  style: CustomAdStyle
  /** 销毁原生模板广告。 */
  destroy(): void
  /** 隐藏原生模板广告。（某些模板广告无法隐藏） */
  hide(): Promise<any>
  /** 查询原生模板广告展示状态。 */
  isShow(): boolean
  /** 移除原生模板广告关闭事件的监听函数 */
  offClose(listener: (res: any) => void): void
  /** 移除原生模板广告错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除原生模板广告隐藏事件的监听函数 */
  offHide(listener: (res: any) => void): void
  /** 移除原生模板广告加载事件的监听函数 */
  offLoad(listener: (res: any) => void): void
  /** 移除原生模板广告宽高回调事件的监听函数 */
  offResize(listener: (res: any) => void): void
  /** 监听原生模板广告关闭事件（仅部分可被用户关闭的模板支持）。 */
  onClose(listener: (res: any) => void): void
  /** 监听原生模板广告错误事件。 */
  onError(listener: (res: CustomAdOnErrorListenerCallbackResult) => void): void
  /** 监听原生模板广告隐藏事件, 某些模板如矩阵格子模板用户点击关闭时也会触发该事件。 */
  onHide(listener: (res: any) => void): void
  /** 监听原生模板广告加载事件。 */
  onLoad(listener: (res: any) => void): void
  /** 监听原生模板广告宽高回调事件（部分横幅模板支持）。 */
  onResize(listener: (res: CustomAdOnResizeListenerCallbackResult) => void): void
  /** 显示原生模板广告。 */
  show(): Promise<any>
}

interface GridAdStyle {
  /** grid(格子) 广告广告组件的左上角横坐标 */
  left: number
  /** grid(格子) 广告组件的左上角纵坐标 */
  top: number
  /** grid(格子) 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。 */
  width: number
  /** grid(格子) 广告组件的高度 */
  height: number
  /** grid(格子) 广告组件经过缩放后真实的宽度 */
  realWidth: number
  /** grid(格子) 广告组件经过缩放后真实的高度 */
  realHeight: number
}

interface GridAdOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
  /**
   * 错误码
   * 最低版本 2.2.2
   */
  errCode: number
}

interface GridAdOnResizeListenerCallbackResult {
  /** 缩放后的宽度 */
  width: number
  /** 缩放后的高度 */
  height: number
}

/**
 * grid(格子) 广告组件。grid(格子) 广告组件是一个原生组件，层级比普通组件高。grid(格子) 广告组件默认是隐藏的，需要调用 GridAd.show() 将其显示。grid(格子) 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 GridAd.onResize() 事件中提供。
 */
interface GridAd {
  /**
   * grid(格子) 广告广告组件的样式。style 上的属性的值仅为开发者设置的grid(格子) 广告) 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 GridAd.onResize() 事件获得。
   */
  style: GridAdStyle
  /** grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。 */
  adTheme: string
  /** grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5 */
  gridCount: number
  /**
   * 销毁 grid(格子) 广告。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  destroy(): void
  /**
   * 隐藏 grid(格子) 广告。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  hide(): void
  /**
   * 移除 grid(格子) 广告错误事件的监听函数
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  offError(listener: (res: any) => void): void
  /**
   * 移除 grid(格子) 广告加载事件的监听函数
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  offLoad(listener: (res: any) => void): void
  /**
   * 移除 grid(格子) 广告尺寸变化事件的监听函数
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  offResize(listener: (res: any) => void): void
  /**
   * 监听 grid(格子) 广告错误事件。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  onError(listener: (res: GridAdOnErrorListenerCallbackResult) => void): void
  /**
   * 监听 grid(格子) 广告加载事件。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  onLoad(listener: (res: any) => void): void
  /**
   * 监听 grid(格子) 广告尺寸变化事件。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  onResize(listener: (res: GridAdOnResizeListenerCallbackResult) => void): void
  /**
   * 显示 grid(格子) 广告。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  show(): Promise<any>
}

interface InterstitialAdOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errCode: number
}

/**
 * 插屏广告组件。插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用），默认是隐藏的，需要调用 InterstitialAd.show() 将其显示。
 */
interface InterstitialAd {
  /** 销毁插屏广告实例。 */
  destroy(): void
  /** 加载插屏广告。 */
  load(): Promise<any>
  /** 移除插屏广告关闭事件的监听函数 */
  offClose(listener: (res: any) => void): void
  /** 移除插屏错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除插屏广告加载事件的监听函数 */
  offLoad(listener: (res: any) => void): void
  /** 监听插屏广告关闭事件。 */
  onClose(listener: (res: any) => void): void
  /** 监听插屏错误事件。 */
  onError(listener: (res: InterstitialAdOnErrorListenerCallbackResult) => void): void
  /** 监听插屏广告加载事件。 */
  onLoad(listener: (res: any) => void): void
  /** 显示插屏广告。 */
  show(): Promise<any>
}

interface RewardedVideoAdOnCloseListenerCallbackResult {
  /**
   * 视频是否是在用户完整观看的情况下被关闭的
   * 最低版本 2.1.0
   */
  isEnded: boolean
}

interface RewardedVideoAdOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
  /**
   * 错误码
   * 最低版本 2.2.2
   */
  errCode: number
}

interface RewardedVideoAdOnLoadListenerCallbackResult {
  /**
   * 仅小游戏支持，本次展示使用激励广告分享页
   * 最低版本 3.7.7
   */
  useFallbackSharePage: boolean
}

/**
 * 激励视频广告组件。激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示。
 */
interface RewardedVideoAd {
  /** 销毁激励视频广告实例。 */
  destroy(): void
  /** 加载激励视频广告。 */
  load(): Promise<any>
  /** 移除用户点击 `关闭广告` 按钮的事件的监听函数 */
  offClose(listener: (res: any) => void): void
  /** 移除激励视频错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除激励视频广告加载事件的监听函数 */
  offLoad(listener: (res: any) => void): void
  /** 监听用户点击 `关闭广告` 按钮的事件。 */
  onClose(listener: (res: RewardedVideoAdOnCloseListenerCallbackResult) => void): void
  /** 监听激励视频错误事件。 */
  onError(listener: (res: RewardedVideoAdOnErrorListenerCallbackResult) => void): void
  /** 监听激励视频广告加载事件。 */
  onLoad(listener: (res: RewardedVideoAdOnLoadListenerCallbackResult) => void): void
  /** 显示激励视频广告。激励视频广告将从屏幕下方推入。 */
  show(): Promise<any>
}

interface WxAd {
  /**
   * 创建 banner 广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。每次调用该方法创建 banner 广告都会返回一个全新的实例。
   * @deprecated 从基础库 3.5.5 开始，本接口停止维护，请使用 wx.createCustomAd 代替
   */
  createBannerAd(object?: WxCreateBannerAdOption): BannerAd;
  /**
   * 创建原生模板广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.11.1 后再使用该 API。每次调用该方法创建原生模板广告都会返回一个全新的实例。
   */
  createCustomAd(object?: WxCreateCustomAdOption): CustomAd;
  /**
   * 创建 grid(格子) 。每次调用该方法创建 grid(格子) 广告都会返回一个全新的实例。
   * @deprecated 从基础库 2.30.2 开始，本接口停止维护
   */
  createGridAd(object?: WxCreateGridAdOption): GridAd;
  /**
   * 创建插屏广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
   */
  createInterstitialAd(object?: WxCreateInterstitialAdOption): InterstitialAd;
  /**
   * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
   */
  createRewardedVideoAd(object?: WxCreateRewardedVideoAdOption): RewardedVideoAd;
  /** 获取直玩广告组件展示状态。 */
  getDirectAdStatusSync(): Pick<WxOnDirectAdStatusChangeListenerCallbackResult, 'isInMask' | 'isInDirectGameAd'>;
  /**
   * 获取封面广告组件展示状态。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 3.7.8， 小程序端要求 >= 3.7.8）。
   */
  getShowSplashAdStatus(object?: WxGetShowSplashAdStatusOption): void;
  /** 移除监听直玩广告状态变化的监听函数 */
  offDirectAdStatusChange(listener: (res: any) => void): void;
  /** 监听监听直玩广告状态变化 */
  onDirectAdStatusChange(listener: (res: WxOnDirectAdStatusChangeListenerCallbackResult) => void): void;
}

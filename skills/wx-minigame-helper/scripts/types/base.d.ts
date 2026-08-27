// 微信小游戏 API 类型声明 — 域：base（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxEnv {
  /** 文件系统中的用户目录路径 (本地路径) */
  USER_DATA_PATH: string
}

interface WxSafeArea {
  /** 安全区域左上角横坐标 */
  left: number
  /** 安全区域右下角横坐标 */
  right: number
  /** 安全区域左上角纵坐标 */
  top: number
  /** 安全区域右下角纵坐标 */
  bottom: number
  /** 安全区域的宽度，单位逻辑像素 */
  width: number
  /** 安全区域的高度，单位逻辑像素 */
  height: number
}

/** wx.getWindowInfo 的同步返回结果 */
interface WxGetWindowInfoResult {
  /** 设备像素比 */
  pixelRatio: number
  /** 屏幕宽度，单位 px */
  screenWidth: number
  /** 屏幕高度，单位 px */
  screenHeight: number
  /** 可使用窗口宽度，单位 px */
  windowWidth: number
  /** 可使用窗口高度，单位 px */
  windowHeight: number
  /** 状态栏的高度，单位 px */
  statusBarHeight: number
  /** 在竖屏正方向下的安全区域 */
  safeArea: WxSafeArea
}

/** wx.getAppAuthorizeSetting 的同步返回结果 */
interface WxGetAppAuthorizeSettingResult {
  /** 允许微信使用相册的开关（仅 iOS 有效） */
  albumAuthorized: boolean
  /** 蓝牙的系统开关 */
  bluetoothAuthorized: boolean
  /** 允许微信使用摄像头的开关 */
  cameraAuthorized: boolean
  /** 允许微信使用定位的开关 */
  locationAuthorized: boolean
  /** 允许微信使用麦克风的开关 */
  microphoneAuthorized: boolean
  /** 允许微信通知的开关 */
  notificationAuthorized: boolean
  /** 允许微信使用日历的开关 */
  phoneCalendarAuthorized: boolean
}

/** wx.getAppBaseInfo 的同步返回结果 */
interface WxGetAppBaseInfoResult {
  /** 客户端基础库版本 */
  SDKVersion: string
  /** 是否已打开调试 */
  enableDebug: boolean
  /** 微信设置的语言 */
  language: string
  /** 微信版本号 */
  version: string
  /** 系统当前主题，取值为 `light` 或 `dark` */
  theme: 'light' | 'dark'
  /** 当前小程序运行的宿主环境 */
  host?: Record<string, any>
}

/** wx.getDeviceInfo 的同步返回结果 */
interface WxGetDeviceInfoResult {
  /** 设备品牌 */
  brand: string
  /** 设备型号 */
  model: string
  /** 操作系统及版本 */
  system: string
  /** 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好） */
  benchmarkLevel: number
}

/** wx.getSystemSetting 的同步返回结果 */
interface WxGetSystemSettingResult {
  /** 蓝牙的系统开关 */
  bluetoothEnabled: boolean
  /** 地理位置的系统开关 */
  locationEnabled: boolean
  /** Wi-Fi 的系统开关 */
  wifiEnabled: boolean
  /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
  locationReducedAccuracy: boolean
}

interface WxGetDeviceBenchmarkInfoSuccessCallbackResult {
  /** 设备性能等级。-1（性能未知），>=1（设备性能值，该值越高，设备性能越好） */
  benchmarkLevel: number
  /** 设备机型档位。0（档位未知），1（高档机），2（中档机），3（低档机） */
  modelLevel: number
}

interface WxGetDeviceBenchmarkInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetDeviceBenchmarkInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetLogManagerOption {
  /**
   * 取值为0/1，取值为0表示会把 `App`、`Page` 的生命周期函数和 `wx` 命名空间下的函数调用写入日志，取值为1则不会。默认值是 0
   * 默认值 0
   * 最低版本 2.3.2
   */
  level?: number
}

interface WxGetSystemInfoSuccessCallbackResult {
  /**
   * 设备品牌
   * 最低版本 1.5.0
   */
  brand: string
  /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
  model: string
  /** 设备像素比 */
  pixelRatio: number
  /**
   * 屏幕宽度，单位px
   * 最低版本 1.1.0
   */
  screenWidth: number
  /**
   * 屏幕高度，单位px
   * 最低版本 1.1.0
   */
  screenHeight: number
  /** 可使用窗口宽度，单位px */
  windowWidth: number
  /** 可使用窗口高度，单位px */
  windowHeight: number
  /**
   * 状态栏的高度，单位px
   * 最低版本 1.9.0
   */
  statusBarHeight: number
  /** 微信设置的语言 */
  language: string
  /** 微信版本号 */
  version: string
  /** 操作系统及版本 */
  system: string
  /** 客户端平台 */
  platform: string
  /**
   * 是否运行在 Android 平台（已废弃，请使用 platform 判断）
   * @deprecated 该字段已停止维护
   */
  android: boolean
  /**
   * 是否运行在 Windows 平台（已废弃，请使用 platform 判断）
   * @deprecated 该字段已停止维护
   */
  windows: boolean
  /**
   * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
   * 最低版本 1.5.0
   */
  fontSizeSetting: number
  /**
   * 客户端基础库版本
   * 最低版本 1.1.0
   */
  SDKVersion: string
  /** 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好） */
  benchmarkLevel: number
  /**
   * 允许微信使用相册的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  albumAuthorized: boolean
  /**
   * 允许微信使用摄像头的开关
   * 最低版本 2.6.0
   */
  cameraAuthorized: boolean
  /**
   * 允许微信使用定位的开关
   * 最低版本 2.6.0
   */
  locationAuthorized: boolean
  /**
   * 允许微信使用麦克风的开关
   * 最低版本 2.6.0
   */
  microphoneAuthorized: boolean
  /**
   * 允许微信通知的开关
   * 最低版本 2.6.0
   */
  notificationAuthorized: boolean
  /**
   * 允许微信通知带有提醒的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationAlertAuthorized: boolean
  /**
   * 允许微信通知带有标记的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationBadgeAuthorized: boolean
  /**
   * 允许微信通知带有声音的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationSoundAuthorized: boolean
  /**
   * 允许微信使用日历的开关
   * 最低版本 2.19.3
   */
  phoneCalendarAuthorized: boolean
  /**
   * 蓝牙的系统开关
   * 最低版本 2.6.0
   */
  bluetoothEnabled: boolean
  /**
   * 地理位置的系统开关
   * 最低版本 2.6.0
   */
  locationEnabled: boolean
  /**
   * Wi-Fi 的系统开关
   * 最低版本 2.6.0
   */
  wifiEnabled: boolean
  /**
   * 在竖屏正方向下的安全区域。部分机型没有安全区域概念，也不会返回 safeArea 字段，开发者需自行兼容。
   * 最低版本 2.7.0
   */
  safeArea: Record<string, any>
  /** 安全区域左上角横坐标 */
  left: number
  /** 安全区域右下角横坐标 */
  right: number
  /** 安全区域左上角纵坐标 */
  top: number
  /** 安全区域右下角纵坐标 */
  bottom: number
  /** 安全区域的宽度，单位逻辑像素 */
  width: number
  /** 安全区域的高度，单位逻辑像素 */
  height: number
  /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
  locationReducedAccuracy: boolean
  /**
   * 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
   * 最低版本 2.11.0
   */
  theme: string
  /**
   * 当前小程序运行的宿主环境
   * 最低版本 2.12.3
   */
  host: Record<string, any>
  /** 宿主 app 对应的 appId */
  appId: string
  /**
   * 是否已打开调试。可通过右上角菜单或 wx.setEnableDebug 打开调试。
   * 最低版本 2.15.0
   */
  enableDebug: boolean
  /** 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准） */
  deviceOrientation: string
}

interface WxGetSystemInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetSystemInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetSystemInfoAsyncSuccessCallbackResult {
  /**
   * 设备品牌
   * 最低版本 1.5.0
   */
  brand: string
  /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
  model: string
  /** 设备像素比 */
  pixelRatio: number
  /**
   * 屏幕宽度，单位px
   * 最低版本 1.1.0
   */
  screenWidth: number
  /**
   * 屏幕高度，单位px
   * 最低版本 1.1.0
   */
  screenHeight: number
  /** 可使用窗口宽度，单位px */
  windowWidth: number
  /** 可使用窗口高度，单位px */
  windowHeight: number
  /**
   * 状态栏的高度，单位px
   * 最低版本 1.9.0
   */
  statusBarHeight: number
  /** 微信设置的语言 */
  language: string
  /** 微信版本号 */
  version: string
  /** 操作系统及版本 */
  system: string
  /** 客户端平台 */
  platform: string
  /**
   * 是否运行在 Android 平台（已废弃，请使用 platform 判断）
   * @deprecated 该字段已停止维护
   */
  android: boolean
  /**
   * 是否运行在 Windows 平台（已废弃，请使用 platform 判断）
   * @deprecated 该字段已停止维护
   */
  windows: boolean
  /**
   * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
   * 最低版本 1.5.0
   */
  fontSizeSetting: number
  /**
   * 客户端基础库版本
   * 最低版本 1.1.0
   */
  SDKVersion: string
  /** 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好） */
  benchmarkLevel: number
  /**
   * 允许微信使用相册的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  albumAuthorized: boolean
  /**
   * 允许微信使用摄像头的开关
   * 最低版本 2.6.0
   */
  cameraAuthorized: boolean
  /**
   * 允许微信使用定位的开关
   * 最低版本 2.6.0
   */
  locationAuthorized: boolean
  /**
   * 允许微信使用麦克风的开关
   * 最低版本 2.6.0
   */
  microphoneAuthorized: boolean
  /**
   * 允许微信通知的开关
   * 最低版本 2.6.0
   */
  notificationAuthorized: boolean
  /**
   * 允许微信通知带有提醒的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationAlertAuthorized: boolean
  /**
   * 允许微信通知带有标记的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationBadgeAuthorized: boolean
  /**
   * 允许微信通知带有声音的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationSoundAuthorized: boolean
  /**
   * 允许微信使用日历的开关
   * 最低版本 2.19.3
   */
  phoneCalendarAuthorized: boolean
  /**
   * 蓝牙的系统开关
   * 最低版本 2.6.0
   */
  bluetoothEnabled: boolean
  /**
   * 地理位置的系统开关
   * 最低版本 2.6.0
   */
  locationEnabled: boolean
  /**
   * Wi-Fi 的系统开关
   * 最低版本 2.6.0
   */
  wifiEnabled: boolean
  /**
   * 在竖屏正方向下的安全区域。部分机型没有安全区域概念，也不会返回 safeArea 字段，开发者需自行兼容。
   * 最低版本 2.7.0
   */
  safeArea: Record<string, any>
  /** 安全区域左上角横坐标 */
  left: number
  /** 安全区域右下角横坐标 */
  right: number
  /** 安全区域左上角纵坐标 */
  top: number
  /** 安全区域右下角纵坐标 */
  bottom: number
  /** 安全区域的宽度，单位逻辑像素 */
  width: number
  /** 安全区域的高度，单位逻辑像素 */
  height: number
  /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
  locationReducedAccuracy: boolean
  /**
   * 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
   * 最低版本 2.11.0
   */
  theme: string
  /**
   * 当前小程序运行的宿主环境
   * 最低版本 2.12.3
   */
  host: Record<string, any>
  /** 宿主 app 对应的 appId */
  appId: string
  /**
   * 是否已打开调试。可通过右上角菜单或 wx.setEnableDebug 打开调试。
   * 最低版本 2.15.0
   */
  enableDebug: boolean
  /** 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准） */
  deviceOrientation: string
}

interface WxGetSystemInfoAsyncOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetSystemInfoAsyncSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetSystemInfoSyncResult {
  /**
   * 设备品牌
   * 最低版本 1.5.0
   */
  brand: string
  /** 设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。 */
  model: string
  /** 设备像素比 */
  pixelRatio: number
  /**
   * 屏幕宽度，单位px
   * 最低版本 1.1.0
   */
  screenWidth: number
  /**
   * 屏幕高度，单位px
   * 最低版本 1.1.0
   */
  screenHeight: number
  /** 可使用窗口宽度，单位px */
  windowWidth: number
  /** 可使用窗口高度，单位px */
  windowHeight: number
  /**
   * 状态栏的高度，单位px
   * 最低版本 1.9.0
   */
  statusBarHeight: number
  /** 微信设置的语言 */
  language: string
  /** 微信版本号 */
  version: string
  /** 操作系统及版本 */
  system: string
  /** 客户端平台 */
  platform: string
  /**
   * 是否运行在 Android 平台（已废弃，请使用 platform 判断）
   * @deprecated 该字段已停止维护
   */
  android: boolean
  /**
   * 是否运行在 Windows 平台（已废弃，请使用 platform 判断）
   * @deprecated 该字段已停止维护
   */
  windows: boolean
  /**
   * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
   * 最低版本 1.5.0
   */
  fontSizeSetting: number
  /**
   * 客户端基础库版本
   * 最低版本 1.1.0
   */
  SDKVersion: string
  /** 设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好） */
  benchmarkLevel: number
  /**
   * 允许微信使用相册的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  albumAuthorized: boolean
  /**
   * 允许微信使用摄像头的开关
   * 最低版本 2.6.0
   */
  cameraAuthorized: boolean
  /**
   * 允许微信使用定位的开关
   * 最低版本 2.6.0
   */
  locationAuthorized: boolean
  /**
   * 允许微信使用麦克风的开关
   * 最低版本 2.6.0
   */
  microphoneAuthorized: boolean
  /**
   * 允许微信通知的开关
   * 最低版本 2.6.0
   */
  notificationAuthorized: boolean
  /**
   * 允许微信通知带有提醒的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationAlertAuthorized: boolean
  /**
   * 允许微信通知带有标记的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationBadgeAuthorized: boolean
  /**
   * 允许微信通知带有声音的开关（仅 iOS 有效）
   * 最低版本 2.6.0
   */
  notificationSoundAuthorized: boolean
  /**
   * 允许微信使用日历的开关
   * 最低版本 2.19.3
   */
  phoneCalendarAuthorized: boolean
  /**
   * 蓝牙的系统开关
   * 最低版本 2.6.0
   */
  bluetoothEnabled: boolean
  /**
   * 地理位置的系统开关
   * 最低版本 2.6.0
   */
  locationEnabled: boolean
  /**
   * Wi-Fi 的系统开关
   * 最低版本 2.6.0
   */
  wifiEnabled: boolean
  /**
   * 在竖屏正方向下的安全区域。部分机型没有安全区域概念，也不会返回 safeArea 字段，开发者需自行兼容。
   * 最低版本 2.7.0
   */
  safeArea: Record<string, any>
  /** 安全区域左上角横坐标 */
  left: number
  /** 安全区域右下角横坐标 */
  right: number
  /** 安全区域左上角纵坐标 */
  top: number
  /** 安全区域右下角纵坐标 */
  bottom: number
  /** 安全区域的宽度，单位逻辑像素 */
  width: number
  /** 安全区域的高度，单位逻辑像素 */
  height: number
  /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
  locationReducedAccuracy: boolean
  /**
   * 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）
   * 最低版本 2.11.0
   */
  theme: string
  /**
   * 当前小程序运行的宿主环境
   * 最低版本 2.12.3
   */
  host: Record<string, any>
  /** 宿主 app 对应的 appId */
  appId: string
  /**
   * 是否已打开调试。可通过右上角菜单或 wx.setEnableDebug 打开调试。
   * 最低版本 2.15.0
   */
  enableDebug: boolean
  /** 设备方向（注意：IOS客户端横屏游戏获取deviceOrientation可能不准，建议以屏幕宽高为准） */
  deviceOrientation: string
}

interface WxLoadSubpackageOption {
  /** 分包的名字，可以填 name 或者 root。在独立分包内，填 __GAME__ 表示加载主包，详见 小游戏独立分包指南 */
  name: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnShowListenerCallbackResult {
  /** 场景值 */
  scene: number
  /** 查询参数 */
  query: Record<string, string>
  /** shareTicket */
  shareTicket: string
  /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
  referrerInfo: Record<string, any>
  /** 来源小程序或公众号或App的 appId */
  appId: string
  /** 来源小程序传过来的数据，scene=1037或1038时支持 */
  extraData: Record<string, any>
  /** 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 */
  chatType: number
}

interface WxOnUnhandledRejectionListenerCallbackResult {
  /** 拒绝原因，一般是一个 Error 对象 */
  reason: string
  /** 被拒绝的 promise 对象 */
  promise: string
}

interface WxOpenAppAuthorizeSettingOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenSystemBluetoothSettingOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxPreDownloadSubpackageOption {
  /**
   * 分包的类型
   * 默认值 'normal'
   */
  packageType?: string
  /**
   * 分包的名字，可以填分包配置中的 name 或者 root 字段的值。仅在 packageType="normal" 时生效。在独立分包内，填 __GAME__ 表示加载主包，详见 小游戏独立分包指南, 3.4.9及以上版本支持
   */
  name: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetEnableDebugOption {
  /** 是否打开调试 */
  enableDebug: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxUpdateWeChatAppOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface LoadSubpackageTaskOnProgressUpdateListenerCallbackResult {
  /** 分包下载进度百分比 */
  progress: number
  /** 已经下载的数据长度，单位 Bytes */
  totalBytesWritten: number
  /** 预期需要下载的数据总长度，单位 Bytes */
  totalBytesExpectedToWrite: number
}

/** 加载分包任务实例，用于获取分包加载状态 */
interface LoadSubpackageTask {
  /** 监听分包加载进度变化事件 */
  onProgressUpdate(listener: (res: LoadSubpackageTaskOnProgressUpdateListenerCallbackResult) => void): void
}

/** 日志管理器实例，可以通过 wx.getLogManager 获取。 */
interface LogManager {
  /** 写 debug 日志 */
  debug(): void
  /** 写 info 日志 */
  info(): void
  /** 写 log 日志 */
  log(): void
  /** 写 warn 日志 */
  warn(): void
}

interface Performance {
  /** 可以获取当前时间以微秒为单位的时间戳 */
  now(): number
}

interface PreDownloadSubpackageTaskOnProgressUpdateListenerCallbackResult {
  /** 分包下载进度百分比 */
  progress: number
  /** 已经下载的数据长度，单位 Bytes */
  totalBytesWritten: number
  /** 预期需要下载的数据总长度，单位 Bytes */
  totalBytesExpectedToWrite: number
}

/** 预下载分包任务实例，用于获取分包预下载状态 */
interface PreDownloadSubpackageTask {
  /** 监听分包加载进度变化事件 */
  onProgressUpdate(listener: (res: PreDownloadSubpackageTaskOnProgressUpdateListenerCallbackResult) => void): void
}

/** 实时日志管理器实例，可以通过 wx.getRealtimeLogManager 获取。 */
interface RealtimeLogManager {
  /** 添加过滤关键字，暂不支持在插件使用 */
  addFilterMsg(msg: string): void
  /** 写 error 日志，暂不支持在插件使用 */
  error(): void
  /** 写 info 日志，暂不支持在插件使用 */
  info(): void
  /** 设置过滤关键字，暂不支持在插件使用 */
  setFilterMsg(msg: string): void
  /** 写 warn 日志，暂不支持在插件使用 */
  warn(): void
}

interface UpdateManagerOnCheckForUpdateListenerCallbackResult {
  /** 是否有新版本 */
  hasUpdate: boolean
}

/** UpdateManager 对象，用来管理更新，可通过 wx.getUpdateManager 接口获取实例。 */
interface UpdateManager {
  /** 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。 */
  applyUpdate(): void
  /** 监听向微信后台请求检查更新结果事件。微信在小程序每次启动（包括热启动）时自动检查更新，不需由开发者主动触发。 */
  onCheckForUpdate(listener: (res: UpdateManagerOnCheckForUpdateListenerCallbackResult) => void): void
  /** 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
  onUpdateFailed(listener: (res: any) => void): void
  /** 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
  onUpdateReady(listener: (res: any) => void): void
}

interface UserCryptoManagerGetLatestUserKeySuccessCallbackResult {
  /** 用户加密密钥 */
  encryptKey: string
  /** 密钥初始向量 */
  iv: string
  /** 密钥版本 */
  version: number
  /** 密钥过期时间 */
  expireTime: number
}

interface UserCryptoManagerGetLatestUserKeyOption {
  /** 接口调用成功的回调函数 */
  success?: (res: UserCryptoManagerGetLatestUserKeySuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface UserCryptoManagerGetRandomValuesSuccessCallbackResult {
  /** 随机数内容，长度为传入的字节数 */
  randomValues: ArrayBuffer
}

interface UserCryptoManagerGetRandomValuesOption {
  /** 整数，生成随机数的字节数，最大 1048576 */
  length: number
  /** 接口调用成功的回调函数 */
  success?: (res: UserCryptoManagerGetRandomValuesSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 用户加密模块 */
interface UserCryptoManager {
  /** 获取最新的用户加密密钥 */
  getLatestUserKey(object?: UserCryptoManagerGetLatestUserKeyOption): void
  /** 获取密码学安全随机数 */
  getRandomValues(object?: UserCryptoManagerGetRandomValuesOption): void
}

/** WXWeakRef 类似 Web 标准里的 WeakRef。允许您保留对另一个对象的弱引用，而不会阻止此对象被 GC 回收。 */
interface WXWeakRef {
}

interface WxLaunchOptionsReferrerInfo {
  /** 来源小程序、公众号或 App 的 appId */
  appId: string
  /** 来源小程序传过来的数据，scene=1037 或 1038 时支持 */
  extraData: Record<string, any>
}

interface WxLaunchOptionsBase {
  /** 启动小游戏的场景值 */
  scene: number
  /** 启动小游戏的 query 参数 */
  query: Record<string, string>
  /** shareTicket，详见获取更多转发信息 */
  shareTicket?: string
  /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回，否则返回 {} */
  referrerInfo?: WxLaunchOptionsReferrerInfo
  /** 从微信群聊/单聊打开小程序时，表示具体微信群聊/单聊类型 */
  chatType?: number
}

interface WxLaunchOptions extends WxLaunchOptionsBase {
  /** 宿主传递的数据，第三方 app 中运行小游戏时返回，为 json 字符串，其中需要 host_scene 字段，表示宿主 app 对应的场景值 */
  hostExtraData?: string
}

interface WxEnterOptions extends WxLaunchOptionsBase {
  /** API 类别 */
  apiCategory?: 'default' | 'nativeFunctionalized' | 'browseOnly' | 'embedded'
}

interface WxBase {
  readonly env: WxEnv
  /** 获取微信APP授权设置 */
  getAppAuthorizeSetting(): WxGetAppAuthorizeSettingResult;
  /** 获取微信APP基础信息 */
  getAppBaseInfo(): WxGetAppBaseInfoResult;
  /** 获取设备性能得分和机型档位数据 */
  getDeviceBenchmarkInfo(object?: WxGetDeviceBenchmarkInfoOption): void;
  /** 获取设备基础信息 */
  getDeviceInfo(): WxGetDeviceInfoResult;
  /** 获取小游戏打开的参数（包括冷启动和热启动） */
  getEnterOptionsSync(): WxEnterOptions;
  /** 获取小游戏冷启动时的参数。热启动参数通过 wx.onShow 或 wx.getEnterOptionsSync 接口获取。 */
  getLaunchOptionsSync(): WxLaunchOptions;
  /** 获取日志管理器对象。 */
  getLogManager(object?: WxGetLogManagerOption): LogManager;
  /** 获取性能管理器 */
  getPerformance(): Performance;
  /** 获取实时日志管理器对象。 */
  getRealtimeLogManager(): RealtimeLogManager;
  /**
   * 获取系统信息。**由于历史原因，wx.getSystemInfo 是异步的调用格式，但是是同步返回，需要异步获取系统信息请使用wx.getSystemInfoAsync。**
   * @deprecated 从基础库 2.20.1 开始，本接口停止维护，请使用 wx.getSystemSetting、wx.getAppAuthorizeSetting、wx.getDeviceInfo、wx.getWindowInfo、wx.getAppBaseInfo 代替
   * 支持 Promise 风格调用
   */
  getSystemInfo(object?: WxGetSystemInfoOption): void;
  /**
   * 异步获取系统信息。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
   * @deprecated 从基础库 2.20.1 开始，本接口停止维护，请使用 wx.getSystemSetting、wx.getAppAuthorizeSetting、wx.getDeviceInfo、wx.getWindowInfo、wx.getAppBaseInfo 代替
   */
  getSystemInfoAsync(object?: WxGetSystemInfoAsyncOption): void;
  /**
   * wx.getSystemInfo 的同步版本
   * @deprecated 从基础库 2.20.1 开始，本接口停止维护，请使用 wx.getSystemSetting、wx.getAppAuthorizeSetting、wx.getDeviceInfo、wx.getWindowInfo、wx.getAppBaseInfo 代替
   * 支持 Promise 风格调用
   */
  getSystemInfoSync(): WxGetSystemInfoSyncResult;
  /** 获取设备设置 */
  getSystemSetting(): WxGetSystemSettingResult;
  /** 获取**全局唯一** 的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。 */
  getUpdateManager(): UpdateManager;
  /** 获取用户加密模块 */
  getUserCryptoManager(): UserCryptoManager;
  /** 获取窗口信息 */
  getWindowInfo(): WxGetWindowInfoResult;
  /** 触发分包加载，详见 分包加载 */
  loadSubpackage(object?: WxLoadSubpackageOption): LoadSubpackageTask;
  /** 移除音频因为受到系统占用而被中断开始事件的监听函数 */
  offAudioInterruptionBegin(listener: (res: any) => void): void;
  /** 移除音频中断结束事件的监听函数 */
  offAudioInterruptionEnd(listener: (res: any) => void): void;
  /** 移除全局错误事件的监听函数 */
  offError(listener: (res: any) => void): void;
  /** 移除小游戏隐藏到后台事件的监听函数 */
  offHide(listener: (res: any) => void): void;
  /** 移除小游戏回到前台的事件的监听函数 */
  offShow(listener: (res: any) => void): void;
  /** 移除未处理的 Promise 拒绝事件的监听函数 */
  offUnhandledRejection(listener: (res: any) => void): void;
  /**
   * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天、有声广告开始播放、实名认证页面弹出等。此事件触发后，小程序内所有音频会暂停。
   */
  onAudioInterruptionBegin(listener: (res: any) => void): void;
  /** 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功 */
  onAudioInterruptionEnd(listener: (res: any) => void): void;
  /** 监听全局错误事件 */
  onError(listener: (res: any) => void): void;
  /** 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。 */
  onHide(listener: (res: any) => void): void;
  /** 监听小游戏回到前台的事件 */
  onShow(listener: (res: WxOnShowListenerCallbackResult) => void): void;
  /** 监听未处理的 Promise 拒绝事件 */
  onUnhandledRejection(listener: (res: WxOnUnhandledRejectionListenerCallbackResult) => void): void;
  /**
   * 跳转系统微信授权管理页
   * 支持 Promise 风格调用
   */
  openAppAuthorizeSetting(object?: WxOpenAppAuthorizeSettingOption): void;
  /**
   * 跳转系统蓝牙设置页。仅支持安卓。
   * 支持 Promise 风格调用
   */
  openSystemBluetoothSetting(object?: WxOpenSystemBluetoothSettingOption): void;
  /** 触发分包预下载。 */
  preDownloadSubpackage(object?: WxPreDownloadSubpackageOption): PreDownloadSubpackageTask;
  /** 小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见小程序测速指南。 */
  reportPerformance(id: number, value: number, dimensions: any): void;
  /**
   * 设置是否打开调试开关。此开关对正式版也能生效。
   * 支持 Promise 风格调用
   */
  setEnableDebug(object?: WxSetEnableDebugOption): void;
  /**
   * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
   */
  triggerGC(): void;
  /**
   * 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。
   * 支持 Promise 风格调用
   */
  updateWeChatApp(object?: WxUpdateWeChatAppOption): void;
}

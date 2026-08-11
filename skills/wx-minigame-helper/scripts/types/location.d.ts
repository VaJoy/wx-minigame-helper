// 微信小游戏 API 类型声明 — 域：location（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxGetFuzzyLocationSuccessCallbackResult {
  /** 纬度，范围为 -90~90，负数表示南纬 */
  latitude: number
  /** 经度，范围为 -180~180，负数表示西经 */
  longitude: number
}

interface WxGetFuzzyLocationOption {
  /**
   * 返回的坐标类型
   * 默认值 wgs84
   */
  type?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetFuzzyLocationSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetLocationSuccessCallbackResult {
  /** 纬度，范围为 -90~90，负数表示南纬 */
  latitude: number
  /** 经度，范围为 -180~180，负数表示西经 */
  longitude: number
  /** 速度，单位 m/s */
  speed: number
  /** 位置的精确度，反应与真实位置之间的接近程度，可以理解成10即与真实位置相差10m，越小越精确 */
  accuracy: number
  /**
   * 高度，单位 m
   * 最低版本 1.2.0
   */
  altitude: number
  /**
   * 垂直精度，单位 m（Android 无法获取，返回 0）
   * 最低版本 1.2.0
   */
  verticalAccuracy: number
  /**
   * 水平精度，单位 m
   * 最低版本 1.2.0
   */
  horizontalAccuracy: number
}

interface WxGetLocationOption {
  /**
   * wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
   * 默认值 wgs84
   */
  type?: string
  /**
   * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
   * 默认值 false
   * 最低版本 1.6.0
   */
  altitude?: boolean
  /**
   * 开启高精度定位
   * 默认值 false
   * 最低版本 2.9.0
   */
  isHighAccuracy?: boolean
  /**
   * 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果
   * 最低版本 2.9.0
   */
  highAccuracyExpireTime?: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetLocationSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxLocation {
  /** 获取当前的模糊地理位置。 */
  getFuzzyLocation(object?: WxGetFuzzyLocationOption): void;
  /**
   * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02。 基础库 `2.17.0` 版本起 `wx.getLocation` 增加调用频率限制，相关公告。
   * @deprecated 从基础库 3.0.1 开始，本接口停止维护，请使用 wx.getFuzzyLocation 代替
   * 支持 Promise 风格调用
   */
  getLocation(object?: WxGetLocationOption): void;
}

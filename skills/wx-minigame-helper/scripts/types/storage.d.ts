// 微信小游戏 API 类型声明 — 域：storage（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxClearStorageOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBackgroundFetchDataSuccessCallbackResult {
  /** 缓存数据 */
  fetchedData: string
  /** 客户端拿到缓存数据的时间戳 ms。(iOS 时间戳存在异常，8.0.27 修复) */
  timeStamp: number
  /** 小程序页面路径 */
  path: string
  /** 传给页面的 query 参数 */
  query: string
  /** 进入小程序的场景值 */
  scene: number
}

interface WxGetBackgroundFetchDataOption {
  /** 缓存数据类别，取值为 periodic 或 pre */
  fetchType: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBackgroundFetchDataSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBackgroundFetchTokenSuccessCallbackResult {
  /** 自定义的登录态 */
  token: string
  /** 接口调用结果 */
  errMsg: string
}

interface WxGetBackgroundFetchTokenOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBackgroundFetchTokenSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetStorageSuccessCallbackResult {
  /** key对应的内容 */
  data: any
}

interface WxGetStorageOption {
  /** 本地缓存中指定的 key */
  key: string
  /**
   * 是否开启加密存储。只有异步的 getStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 解密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
   * 默认值 false
   * 最低版本 2.21.3
   */
  encrypt?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetStorageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetStorageInfoSuccessCallbackResult {
  /** 当前 storage 中所有的 key */
  keys: string[]
  /** 当前占用的空间大小, 单位 KB */
  currentSize: number
  /** 限制的空间大小，单位 KB */
  limitSize: number
}

interface WxGetStorageInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetStorageInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetStorageInfoSyncResult {
  /** 当前 storage 中所有的 key */
  keys: string[]
  /** 当前占用的空间大小, 单位 KB */
  currentSize: number
  /** 限制的空间大小，单位 KB */
  limitSize: number
}

interface WxOnBackgroundFetchDataListenerCallbackResult {
  /** 缓存数据类别，取值为 periodic 或 pre */
  fetchType: string
  /** 缓存数据 */
  fetchedData: string
  /** 客户端拿到缓存数据的时间戳 */
  timeStamp: number
  /** 小游戏页面路径（一般不需要传，除非使用到小游戏独立分包） */
  path: string
  /** 传给页面的 query 参数 */
  query: string
  /** 进入小游戏的场景值 */
  scene: number
}

interface WxRemoveStorageOption {
  /** 本地缓存中指定的 key */
  key: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetBackgroundFetchTokenOption {
  /** 自定义的登录态。上限 1024 字符。 */
  token: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetStorageOption {
  /** 本地缓存中指定的 key */
  key: string
  /** 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 */
  data: any
  /**
   * 是否开启加密存储。只有异步的 setStorage 接口支持开启加密存储。开启后，将会对 data 使用 AES128 加密，接口回调耗时将会增加。若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true。此外，由于加密后的数据会比原始数据膨胀1.4倍，因此开启 encrypt 的情况下，单个 key 允许存储的最大数据长度为 0.7MB，所有数据存储上限为 7.1MB
   * 默认值 false
   * 最低版本 2.21.3
   */
  encrypt?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStorage {
  /**
   * 清理本地数据缓存。
   * 支持 Promise 风格调用
   */
  clearStorage(object?: WxClearStorageOption): void;
  /**
   * wx.clearStorage 的同步版本
   * 支持 Promise 风格调用
   */
  clearStorageSync(): void;
  /** 根据传入的 buffer 创建一个唯一的 URL 存在内存中 */
  createBufferURL(buffer: any): string;
  /**
   * 拉取 backgroundFetch 客户端缓存数据。 当调用接口时，若当次请求未结束，会先返回本地的旧数据（之前打开小程序时请求的），如果本地没有旧数据，安卓上会返回fail，不会等待请求完成，iOS上会返回success但fetchedData为空，也不会等待请求完成。建议和 wx.onBackgroundFetchData 配合使用
   * 支持 Promise 风格调用
   */
  getBackgroundFetchData(object?: WxGetBackgroundFetchDataOption): void;
  /**
   * 获取设置过的自定义登录态。若无，则返回 fail。
   * 支持 Promise 风格调用
   */
  getBackgroundFetchToken(object?: WxGetBackgroundFetchTokenOption): void;
  /**
   * 从本地缓存中异步获取指定 key 的内容。
   * 支持 Promise 风格调用
   */
  getStorage(object?: WxGetStorageOption): void;
  /**
   * 异步获取当前storage的相关信息。
   * 支持 Promise 风格调用
   */
  getStorageInfo(object?: WxGetStorageInfoOption): void;
  /**
   * wx.getStorageInfo 的同步版本
   * 支持 Promise 风格调用
   */
  getStorageInfoSync(): WxGetStorageInfoSyncResult;
  /** 从本地缓存中同步获取指定 key 的内容。 */
  getStorageSync(key: string): any;
  /**
   * 监听收到 backgroundFetch 数据事件。如果监听时请求已经完成，则事件不会触发。建议和 wx.getBackgroundFetchData 配合使用
   */
  onBackgroundFetchData(listener: (res: WxOnBackgroundFetchDataListenerCallbackResult) => void): void;
  /**
   * 从本地缓存中移除指定 key。
   * 支持 Promise 风格调用
   */
  removeStorage(object?: WxRemoveStorageOption): void;
  /**
   * wx.removeStorage 的同步版本
   * 支持 Promise 风格调用
   */
  removeStorageSync(key: string): void;
  /** 根据 URL 销毁存在内存中的数据 */
  revokeBufferURL(url: string): void;
  /**
   * 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性
   * 支持 Promise 风格调用
   */
  setBackgroundFetchToken(object?: WxSetBackgroundFetchTokenOption): void;
  /**
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
   * 支持 Promise 风格调用
   */
  setStorage(object?: WxSetStorageOption): void;
  /**
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
   */
  setStorageSync(key: string, data: any): void;
}

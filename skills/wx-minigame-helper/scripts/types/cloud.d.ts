// 微信小游戏 API 类型声明 — 域：cloud（微信云开发/云托管）
// 手动补充（其余域为抓取自动生成）：依据 references/api/cloud/（官方小程序云托管文档改编，小游戏用法一致）
// 覆盖 wx.cloud.init / callContainer / connectContainer / getTempFileURL / downloadFile / Cloud（资源复用）
// 注意：connectContainer 返回的 socketTask 类型 SocketTask 声明于 network.d.ts，需引用该域文件

/// <reference path="./network.d.ts" />

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCloudInitOption {
  /**
   * 环境名称。仅使用云托管（callContainer/connectContainer）时可不填或填任意环境，
   * 真正的环境在每次调用的 config.env 中指定
   */
  env?: string
  /** 是否在将用户访问记录到用户管理中。默认值 false */
  traceUser?: boolean
}

/** 云托管环境信息 */
interface WxCloudContainerConfig {
  /** 微信云托管的环境 ID */
  env: string
}

/** callContainer 请求 header（必须含 X-WX-SERVICE，可选 X-WX-EXCLUDE-CREDENTIALS 裁剪身份凭证） */
interface WxCallContainerHeader {
  /** 云托管服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）。必填 */
  'X-WX-SERVICE': string
  /**
   * 排除链路中携带的微信身份凭证，逗号分隔，可选值：openid、unionid、cloudbase-access-token
   * 不填则默认附带全部；业务不需要用户身份时填写可节省约 10~50ms
   * 例：'unionid, cloudbase-access-token, openid'
   */
  'X-WX-EXCLUDE-CREDENTIALS'?: string
  /** 其他自定义 header（不能设置 Referer；content-type 默认 application/json） */
  [key: string]: any
}

interface WxCallContainerOption {
  /** 微信云托管环境 ID */
  config?: WxCloudContainerConfig
  /** 后端服务接口地址，根目录为 / */
  path: string
  /** 请求的参数 */
  data?: string | object | ArrayBuffer
  /** 设置请求的 header（详见 WxCallContainerHeader：必须含 X-WX-SERVICE，可选 X-WX-EXCLUDE-CREDENTIALS 裁剪身份凭证） */
  header: WxCallContainerHeader
  /** 超时时间，单位为毫秒。最大值不能超过 15 秒，否则无效 */
  timeout?: number
  /**
   * HTTP 请求方法
   * 默认值 GET
   */
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
  /**
   * 返回的数据格式
   * 默认值 json：返回后对数据做一次 JSON.parse；其他值不做
   */
  dataType?: string
  /**
   * 响应的数据类型
   * 默认值 text
   */
  responseType?: 'text' | 'arraybuffer'
  /** 接口调用成功的回调函数。传入则不返回 Promise */
  success?: (res: WxCallContainerSuccessCallbackResult) => void
  /** 接口调用失败的回调函数。传入则不返回 Promise */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCallContainerSuccessCallbackResult {
  /** 开发者服务器返回的数据（业务数据在 data 中） */
  data: any
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number
  /** 开发者服务器返回的 HTTP Response Header */
  header: Record<string, any>
  /** 调用结果信息 */
  errMsg: string
  /** 本次调用 id，可用于问题排查 */
  callID: string
}

interface WxConnectContainerOption {
  /** 云环境 ID */
  config: WxCloudContainerConfig
  /** 服务名 */
  service: string
  /** 开发者服务器接口地址，不填默认根目录 /
   * 最低版本 2.21.1 */
  path?: string
  /** 接口调用成功的回调函数。传入则不返回 Promise */
  success?: (res: WxConnectContainerSuccessCallbackResult) => void
  /** 接口调用失败的回调函数。传入则不返回 Promise */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxConnectContainerSuccessCallbackResult {
  /** socket 对象，和 wx.connectSocket 返回值一样 */
  socketTask: SocketTask
}

/** new wx.cloud.Cloud() 构造参数（资源复用：访问授权方的云托管环境） */
interface WxCloudConstructorOption {
  /** 环境所属的账号 appid（授权方的小程序/小游戏/公众号 appid） */
  resourceAppid: string
  /** 微信云托管的环境 ID */
  resourceEnv: string
}

/** wx.cloud.Cloud 实例的 callContainer 参数（环境已在 resourceEnv 绑定，config 可省略） */
interface WxCloudInstanceCallContainerOption extends Omit<WxCallContainerOption, 'config'> {
  /** 微信云托管环境 ID；已在 new wx.cloud.Cloud 的 resourceEnv 绑定时可省略 */
  config?: WxCloudContainerConfig
}

/** wx.cloud.Cloud 实例：资源复用形态下跨账号调用云托管服务（new wx.cloud.Cloud() 创建） */
interface WxCloudInstance {
  /**
   * 初始化实例（异步，需 await 完成后才可发起调用）。
   * 未初始化完成时调用会报 "Cloud API isn't enabled"，可等待后重试
   */
  init(option?: WxCloudInitOption): Promise<void>
  /** 调用云托管服务（参数同 wx.cloud.callContainer，config 可省略） */
  callContainer(object: WxCloudInstanceCallContainerOption): Promise<WxCallContainerSuccessCallbackResult>
  /** 获取云托管对象存储文件临时链接（参数同 wx.cloud.getTempFileURL，env 已在 resourceEnv 绑定） */
  getTempFileURL(object: WxCloudGetTempFileURLOption): Promise<WxCloudGetTempFileURLSuccessCallbackResult>
  /** 从云托管对象存储下载文件到本地临时路径（参数同 wx.cloud.downloadFile，env 已在 resourceEnv 绑定） */
  downloadFile(object: WxCloudDownloadFileOption & Required<Pick<WxCloudDownloadFileOption, 'success'>>): DownloadTask
  /** @see downloadFile —— 仅传 fail 回调时返回 downloadTask */
  downloadFile(object: WxCloudDownloadFileOption & Required<Pick<WxCloudDownloadFileOption, 'fail'>>): DownloadTask
  /** @see downloadFile —— 仅传 complete 回调时返回 downloadTask */
  downloadFile(object: WxCloudDownloadFileOption & Required<Pick<WxCloudDownloadFileOption, 'complete'>>): DownloadTask
  /** @see downloadFile —— 不传任何回调时返回 Promise */
  downloadFile(object: Omit<WxCloudDownloadFileOption, 'success' | 'fail' | 'complete'>): Promise<WxCloudDownloadFileSuccessCallbackResult>
  /** 实现签名（满足上述重载） */
  downloadFile(object: WxCloudDownloadFileOption): DownloadTask | Promise<WxCloudDownloadFileSuccessCallbackResult>
}

/** getTempFileURL 请求 fileList 中单个元素（带有效期的对象形态） */
interface WxCloudGetTempFileURLFileListItem {
  /** 云文件 ID（对象存储文件 ID，从上传接口或控制台获取） */
  fileID: string
  /**
   * 有效期时长，单位秒。默认值 86400（24 小时）
   * 公有读文件获取的链接不会过期；私有文件默认 24h，可用此字段自定义
   */
  maxAge?: number
}

/** getTempFileURL 的 fileList 参数：云文件 ID 字符串数组，或带 maxAge 的对象数组；一次最多 50 个 */
type WxCloudGetTempFileURLFileList = (string | WxCloudGetTempFileURLFileListItem)[]

interface WxCloudGetTempFileURLOption {
  /** 云文件 ID 列表（最多 50 个）。元素可为 fileID 字符串，或 { fileID, maxAge } 对象 */
  fileList: WxCloudGetTempFileURLFileList
  /** 配置。填写 env 后忽略 wx.cloud.init 指定的环境 */
  config?: WxCloudContainerConfig
  /** 接口调用成功的回调函数。传入则不返回 Promise */
  success?: (res: WxCloudGetTempFileURLSuccessCallbackResult) => void
  /** 接口调用失败的回调函数。传入则不返回 Promise */
  fail?: (res: WxCloudGetTempFileURLFailCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** getTempFileURL 返回的 fileList 中单个元素 */
interface WxCloudGetTempFileURLResultFileItem {
  /** 云文件 ID */
  fileID: string
  /** 临时文件路径（真实可访问的 URL） */
  tempFileURL: string
  /** 有效期时长，单位秒 */
  maxAge: number
  /** 状态码，0 为成功 */
  status: number
  /** 成功为 ok，失败为失败原因 */
  errMsg: string
}

interface WxCloudGetTempFileURLSuccessCallbackResult {
  /** 文件列表（每项含 fileID / tempFileURL / maxAge / status / errMsg） */
  fileList: WxCloudGetTempFileURLResultFileItem[]
  /** 整体结果信息，成功为 ok */
  errMsg: string
}

interface WxCloudGetTempFileURLFailCallbackResult {
  /** 错误码 */
  errCode: number
  /** 错误信息，格式 getTempFileURL:fail msg */
  errMsg: string
}

/** downloadFile 请求参数（云托管对象存储：云文件 ID 下载到本地） */
interface WxCloudDownloadFileOption {
  /** 云文件 ID（对象存储文件 ID，从上传文件接口或控制台获取） */
  fileID: string
  /** 配置。填写 env 后忽略 wx.cloud.init 指定的环境 */
  config?: WxCloudContainerConfig
  /** 接口调用成功的回调函数。传入则返回 downloadTask（不返回 Promise） */
  success?: (res: WxCloudDownloadFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数。传入则返回 downloadTask（不返回 Promise） */
  fail?: (res: WxCloudDownloadFileFailCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** downloadFile 成功返回参数 */
interface WxCloudDownloadFileSuccessCallbackResult {
  /** 临时文件路径（下载到本地的文件，可通过 wx.saveFile 持久化） */
  tempFilePath: string
  /** 服务器返回的 HTTP 状态码 */
  statusCode: number
  /** 成功为 downloadFile:ok，失败为失败原因 */
  errMsg: string
}

interface WxCloudDownloadFileFailCallbackResult {
  /** 错误码 */
  errCode: number
  /** 错误信息，格式 downloadFile:fail msg */
  errMsg: string
}

/** wx.cloud 对象：微信云开发/云托管能力入口（无需额外 SDK） */
interface WxCloudApi {
  /**
   * 初始化云能力。使用 callContainer / connectContainer 前必须先执行一次（全局一次）。
   * 小游戏在 game.js 入口执行；仅用云托管时 env 可不填
   */
  init(option?: WxCloudInitOption): void
  /**
   * 调用云托管 HTTP 服务（替代 wx.request，走微信内网，免 request 合法域名配置）。
   * 其余参数同 wx.request；请求 ≤100KiB（对象类型 20MiB）、返回 ≤1000KiB、timeout ≤15s
   * 最低版本 2.23.0
   */
  callContainer(object: WxCallContainerOption): Promise<WxCallContainerSuccessCallbackResult>
  /**
   * 与云托管服务建立 WebSocket 连接（替代 wx.connectSocket，免 socket 合法域名配置），
   * 返回 socketTask（用法同 wx.connectSocket）。
   * 注意：iOS 高性能+ 模式下暂时无法携带微信身份（服务端读不到 x-wx-openid）
   * 最低版本 2.21.1
   */
  connectContainer(object: WxConnectContainerOption): Promise<WxConnectContainerSuccessCallbackResult>
  /** 资源复用形态：创建跨账号（授权方）云环境调用实例 */
  Cloud: new (option: WxCloudConstructorOption) => WxCloudInstance
  /**
   * 用云文件 ID 换取真实临时访问链接（云托管对象存储）。
   * 公有读文件的链接不会过期；私有文件默认 24h 有效期，可用 fileList[].maxAge 自定义。
   * 一次最多 50 个。支持 Promise 风格（不传 success 回调即返回 Promise）；资源复用形态（new wx.cloud.Cloud）同样提供此方法
   */
  getTempFileURL(object: WxCloudGetTempFileURLOption): Promise<WxCloudGetTempFileURLSuccessCallbackResult>
  /**
   * 从云托管对象存储下载文件到本地临时路径（替代 wx.downloadFile，走云托管通道）。
   * - 传入 success/fail/complete 任一回调 → 返回 downloadTask（可用 onProgressUpdate 监听进度、abort 取消）
   * - 不传任何回调 → 返回 Promise（res.tempFilePath 为本地临时路径，可用 wx.saveFile 持久化）
   * fileID 必填；资源复用形态（new wx.cloud.Cloud）同样提供此方法
   */
  downloadFile(object: WxCloudDownloadFileOption & Required<Pick<WxCloudDownloadFileOption, 'success'>>): DownloadTask
  /** @see downloadFile —— 仅传 fail 回调时返回 downloadTask */
  downloadFile(object: WxCloudDownloadFileOption & Required<Pick<WxCloudDownloadFileOption, 'fail'>>): DownloadTask
  /** @see downloadFile —— 仅传 complete 回调时返回 downloadTask */
  downloadFile(object: WxCloudDownloadFileOption & Required<Pick<WxCloudDownloadFileOption, 'complete'>>): DownloadTask
  /** @see downloadFile —— 不传任何回调时返回 Promise */
  downloadFile(object: Omit<WxCloudDownloadFileOption, 'success' | 'fail' | 'complete'>): Promise<WxCloudDownloadFileSuccessCallbackResult>
  /** 实现签名（满足上述重载） */
  downloadFile(object: WxCloudDownloadFileOption): DownloadTask | Promise<WxCloudDownloadFileSuccessCallbackResult>
}

/** api/cloud 域：挂载云开发/云托管能力入口 */
interface WxCloud {
  /** 微信云开发/云托管能力入口（api/cloud/，基础库 2.21.1+） */
  cloud: WxCloudApi
}

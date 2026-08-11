// 微信小游戏 API 类型声明 — 域：network（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCloseSocketOption {
  /**
   * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
   * 默认值 1000（表示正常关闭连接）
   */
  code?: number
  /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
  reason?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxConnectSocketOption {
  /** 开发者服务器 wss 接口地址 */
  url: string
  /** HTTP Header，Header 中不能设置 Referer */
  header?: Record<string, any>
  /**
   * 子协议数组
   * 最低版本 1.4.0
   */
  protocols?: string[]
  /**
   * 建立 TCP 连接的时候的 TCP_NODELAY 设置
   * 默认值 false
   * 最低版本 2.4.0
   */
  tcpNoDelay?: boolean
  /**
   * 是否开启压缩扩展
   * 默认值 false
   * 最低版本 2.8.0
   */
  perMessageDeflate?: boolean
  /**
   * 超时时间，单位为毫秒
   * 最低版本 2.10.0
   */
  timeout?: number
  /**
   * 强制使用蜂窝网络发送请求
   * 默认值 false
   * 最低版本 2.29.0
   */
  forceCellularNetwork?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCreateTCPSocketOption {
  /**
   * 套接字族，必须是 IPv4 或者 IPv6，默认是 IPv4
   * 默认值 ipv4
   * 最低版本 3.6.4
   */
  type?: string
  ipv4?: IPv4
  ipv6?: IPv6
}

interface WxDownloadFileSuccessCallbackResult {
  /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
  tempFilePath: string
  /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
  filePath: string
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number
  /**
   * 网络请求过程中一些调试信息，查看详细说明。目前 iOS 和 Android 端支持。
   * 最低版本 2.10.4
   */
  profile: Record<string, any>
  /**
   * 调用接口的时间。
   * 最低版本 3.8.10
   */
  invokeStart: number
  /**
   * httpDNS 开始查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持
   * 最低版本 3.8.9
   */
  httpDNSDomainLookUpStart: number
  /**
   * httpDNS 完成查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持
   * 最低版本 3.8.9
   */
  httpDNSDomainLookUpEnd: number
  /**
   * 开始排队的时间。达到并行上限时才需要排队。
   * 最低版本 3.8.10
   */
  queueStart: number
  /**
   * 结束排队的时间。达到并行上限时才需要排队。如果未发生排队，则该字段和 queueStart 字段值相同
   * 最低版本 3.8.10
   */
  queueEnd: number
  /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
  redirectStart: number
  /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
  redirectEnd: number
  /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
  fetchStart: number
  /** Local DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpStart: number
  /** Local DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpEnd: number
  /**
   * HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
   */
  connectStart: number
  /**
   * HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
   */
  connectEnd: number
  /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
  SSLconnectionStart: number
  /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
  SSLconnectionEnd: number
  /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
  requestStart: number
  /** HTTP请求读取真实文档结束的时间 */
  requestEnd: number
  /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
  responseStart: number
  /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
  responseEnd: number
  /** 当次请求连接过程中实时 rtt */
  rtt: number
  /** 评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 */
  estimate_nettype: number
  /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
  httpRttEstimate: number
  /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
  transportRttEstimate: number
  /** 评估当前网络下载的kbps */
  downstreamThroughputKbpsEstimate: number
  /** 当前网络的实际下载kbps */
  throughputKbps: number
  /** 当前请求的IP */
  peerIP: string
  /** 当前请求的端口 */
  port: number
  /** 是否复用连接 */
  socketReused: boolean
  /** 发送的字节数 */
  sendBytesCount: number
  /** 收到字节数 */
  receivedBytedCount: number
  /** 使用协议类型，有效值：http1.1, h2, quic, unknown */
  protocol: string
  /** 是否走到了高性能模式。基础库 v3.3.4 起支持。 */
  usingHighPerformanceMode: boolean
}

interface WxDownloadFileOption {
  /** 下载资源的 url */
  url: string
  /** HTTP 请求的 Header，Header 中不能设置 Referer */
  header?: Record<string, any>
  /**
   * 超时时间，单位为毫秒，默认值为 60000 即一分钟。
   * 默认值 60000
   * 最低版本 2.10.0
   */
  timeout?: number
  /**
   * 指定文件下载后存储的路径 (本地路径)
   * 最低版本 1.8.0
   */
  filePath?: string
  /**
   * 是否开启 profile。iOS 和 Android 端默认开启，其他端暂不支持。开启后可在接口回调的 res.profile 中查看性能调试信息。
   * 默认值 true
   */
  enableProfile?: boolean
  /**
   * 是否开启 http2
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableHttp2?: boolean
  /**
   * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议）
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableQuic?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxDownloadFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnSocketCloseListenerCallbackResult {
  /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
  code: number
  /** 一个可读的字符串，表示连接被关闭的原因。 */
  reason: string
}

interface WxOnSocketErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface WxOnSocketMessageListenerCallbackResult {
  /** 服务器返回的消息 */
  data: string | ArrayBuffer
}

interface WxOnSocketOpenListenerCallbackResult {
  /**
   * 连接成功的 HTTP 响应 Header
   * 最低版本 2.0.0
   */
  header: Record<string, any>
}

interface WxRequestSuccessCallbackResult {
  /** 开发者服务器返回的数据 */
  data: string | Record<string, any> | ArrayBuffer
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number
  /**
   * 开发者服务器返回的 HTTP Response Header
   * 最低版本 1.2.0
   */
  header: Record<string, any>
  /**
   * 开发者服务器返回的 cookies，格式为字符串数组
   * 最低版本 2.10.0
   */
  cookies: string[]
  /**
   * 网络请求过程中一些调试信息，查看详细说明。目前仅 iOS 和 Android 端支持，其他端暂不支持。
   * 最低版本 2.10.4
   */
  profile: Record<string, any>
  /**
   * 调用接口的时间。
   * 最低版本 3.8.10
   */
  invokeStart: number
  /**
   * httpDNS 开始查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持
   * 最低版本 3.8.9
   */
  httpDNSDomainLookUpStart: number
  /**
   * httpDNS 完成查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持
   * 最低版本 3.8.9
   */
  httpDNSDomainLookUpEnd: number
  /**
   * 开始排队的时间。达到并行上限时才需要排队。
   * 最低版本 3.8.10
   */
  queueStart: number
  /**
   * 结束排队的时间。达到并行上限时才需要排队。如果未发生排队，则该字段和 queueStart 字段值相同
   * 最低版本 3.8.10
   */
  queueEnd: number
  /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
  redirectStart: number
  /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
  redirectEnd: number
  /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
  fetchStart: number
  /** Local DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpStart: number
  /** Local DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpEnd: number
  /**
   * HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
   */
  connectStart: number
  /**
   * HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
   */
  connectEnd: number
  /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
  SSLconnectionStart: number
  /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
  SSLconnectionEnd: number
  /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
  requestStart: number
  /** HTTP请求读取真实文档结束的时间 */
  requestEnd: number
  /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
  responseStart: number
  /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
  responseEnd: number
  /** 当次请求连接过程中实时 rtt */
  rtt: number
  /** 评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 */
  estimate_nettype: number
  /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
  httpRttEstimate: number
  /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
  transportRttEstimate: number
  /** 评估当前网络下载的kbps */
  downstreamThroughputKbpsEstimate: number
  /** 当前网络的实际下载kbps */
  throughputKbps: number
  /** 当前请求的IP */
  peerIP: string
  /** 当前请求的端口 */
  port: number
  /** 是否复用连接 */
  socketReused: boolean
  /** 发送的字节数 */
  sendBytesCount: number
  /** 收到字节数 */
  receivedBytedCount: number
  /** 使用协议类型，有效值：http1.1, h2, quic, unknown */
  protocol: string
  /** 是否走到了高性能模式。基础库 v3.3.4 起支持。 */
  usingHighPerformanceMode: boolean
  /**
   * 网络请求过程中的一些异常信息，例如httpdns超时等
   * 最低版本 3.0.0
   */
  exception: Record<string, any>
  /** 本次请求底层重试次数 */
  retryCount: number
  /** 本次请求底层失败信息，所有失败信息均符合Errno错误码 */
  reasons: Record<string, any>[]
  /** 错误原因 */
  errMsg: string
  /** 错误码 */
  errno: string
  /**
   * 最终请求是否使用了HttpDNS解析的IP。仅当enableHttpDNS传true时返回此字段。如果开启enableHttpDNS但最终请求未使用HttpDNS解析的IP，可在exception查看原因。
   * 最低版本 3.4.10
   */
  useHttpDNS: boolean
}

interface WxRequestOption {
  /** 开发者服务器接口地址 */
  url: string
  /** 请求的参数 */
  data?: string | Record<string, any> | ArrayBuffer
  /** 设置请求的 header，header 中不能设置 Referer。 */
  header?: Record<string, any>
  /**
   * 超时时间，单位为毫秒。默认值为 60000
   * 最低版本 2.10.0
   */
  timeout?: number
  /**
   * HTTP 请求方法
   * 默认值 GET
   */
  method?: string
  /**
   * 返回的数据格式。值为 `json` 时，返回的数据为 JSON，返回后会对返回的数据进行一次 `JSON.parse`；其他值则不对返回的内容进行 `JSON.parse`
   * 默认值 json
   */
  dataType?: string
  /**
   * 响应的数据类型
   * 默认值 text
   * 最低版本 1.7.0
   */
  responseType?: string
  /**
   * 使用高性能模式。从基础库 v3.5.0 开始在 Android 端默认开启，其他端暂不生效。该模式下有更优的网络性能表现，更多信息请查看下方说明。
   * 默认值 true
   * 最低版本 3.3.3
   */
  useHighPerformanceMode?: boolean
  /**
   * 开启 http2
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableHttp2?: boolean
  /**
   * 是否开启 profile。iOS 和 Android 端默认开启，其他端暂不支持。开启后可在接口回调的 res.profile 中查看性能调试信息。
   * 默认值 true
   */
  enableProfile?: boolean
  /**
   * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议）
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableQuic?: boolean
  /**
   * 开启 Http 缓存
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableCache?: boolean
  /**
   * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS
   * 默认值 false
   * 最低版本 2.19.1
   */
  enableHttpDNS?: boolean
  /**
   * HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS
   * 最低版本 2.19.1
   */
  httpDNSServiceId?: string
  /**
   * HttpDNS 超时时间。HttpDNS解析时间超过该值时不再走HttpDNS，本次请求将回退到localDNS。默认为 10000 毫秒。 HttpDNS 用法详见 移动解析HttpDNS
   * 默认值 10000
   * 最低版本 3.8.9
   */
  httpDNSTimeout?: number
  /**
   * 是否开启 HttpDNS 兜底。开启时，HttpDNS 服务查询失败会回退到 localDNS；关闭时，HttpDNS 服务查询失败将直接报错，不回退到 localDNS。默认为 true。 HttpDNS 用法详见 移动解析HttpDNS
   * 默认值 true
   * 最低版本 3.16.2
   */
  enableHttpDNSFallback?: boolean
  /**
   * 开启 transfer-encoding chunked。
   * 默认值 false
   * 最低版本 2.20.2
   */
  enableChunked?: boolean
  /**
   * 强制使用蜂窝网络发送请求
   * 默认值 false
   * 最低版本 2.21.0
   */
  forceCellularNetwork?: boolean
  /**
   * 重定向拦截策略。（目前安卓、iOS、开发者工具已支持，PC端将在后续支持）
   * 默认值 follow
   * 最低版本 3.2.2
   */
  redirect?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxRequestSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSendSocketMessageOption {
  /** 需要发送的内容 */
  data: string | ArrayBuffer
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxUploadFileSuccessCallbackResult {
  /** 开发者服务器返回的数据 */
  data: string
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number
  /**
   * 网络请求过程中一些调试信息，查看详细说明。目前 iOS 和 Android 端支持。
   * 最低版本 3.5.0
   */
  profile: Record<string, any>
  /**
   * 调用接口的时间。
   * 最低版本 3.8.10
   */
  invokeStart: number
  /**
   * httpDNS 开始查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持
   * 最低版本 3.8.9
   */
  httpDNSDomainLookUpStart: number
  /**
   * httpDNS 完成查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持
   * 最低版本 3.8.9
   */
  httpDNSDomainLookUpEnd: number
  /**
   * 开始排队的时间。达到并行上限时才需要排队。
   * 最低版本 3.8.10
   */
  queueStart: number
  /**
   * 结束排队的时间。达到并行上限时才需要排队。如果未发生排队，则该字段和 queueStart 字段值相同
   * 最低版本 3.8.10
   */
  queueEnd: number
  /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
  redirectStart: number
  /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
  redirectEnd: number
  /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
  fetchStart: number
  /** Local DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpStart: number
  /** Local DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpEnd: number
  /**
   * HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
   */
  connectStart: number
  /**
   * HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
   */
  connectEnd: number
  /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
  SSLconnectionStart: number
  /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
  SSLconnectionEnd: number
  /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
  requestStart: number
  /** HTTP请求读取真实文档结束的时间 */
  requestEnd: number
  /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
  responseStart: number
  /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
  responseEnd: number
  /** 当次请求连接过程中实时 rtt */
  rtt: number
  /** 评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 */
  estimate_nettype: number
  /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
  httpRttEstimate: number
  /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
  transportRttEstimate: number
  /** 评估当前网络下载的kbps */
  downstreamThroughputKbpsEstimate: number
  /** 当前网络的实际下载kbps */
  throughputKbps: number
  /** 当前请求的IP */
  peerIP: string
  /** 当前请求的端口 */
  port: number
  /** 是否复用连接 */
  socketReused: boolean
  /** 发送的字节数 */
  sendBytesCount: number
  /** 收到字节数 */
  receivedBytedCount: number
  /** 使用协议类型，有效值：http1.1, h2, quic, unknown */
  protocol: string
  /** 是否走到了高性能模式。基础库 v3.3.4 起支持。 */
  usingHighPerformanceMode: boolean
}

interface WxUploadFileOption {
  /** 开发者服务器地址 */
  url: string
  /** 要上传文件资源的路径 (本地路径) */
  filePath: string
  /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
  name: string
  /** HTTP 请求 Header，Header 中不能设置 Referer */
  header?: Record<string, any>
  /** HTTP 请求中其他额外的 form data */
  formData?: Record<string, any>
  /**
   * 超时时间，单位为毫秒
   * 最低版本 2.10.0
   */
  timeout?: number
  /**
   * 是否开启 profile。iOS 和 Android 端默认开启，其他端暂不支持。开启后可在接口回调的 res.profile 中查看性能调试信息。
   * 默认值 true
   * 最低版本 3.5.0
   */
  enableProfile?: boolean
  /**
   * 是否开启 http2
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableHttp2?: boolean
  /**
   * 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议）
   * 默认值 false
   * 最低版本 2.10.4
   */
  enableQuic?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxUploadFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface DownloadTaskOnHeadersReceivedListenerCallbackResult {
  /** 开发者服务器返回的 HTTP Response Header */
  header: Record<string, any>
}

interface DownloadTaskOnProgressUpdateListenerCallbackResult {
  /** 下载进度百分比 */
  progress: number
  /** 已经下载的数据长度，单位 Bytes */
  totalBytesWritten: number
  /** 预期需要下载的数据总长度，单位 Bytes */
  totalBytesExpectedToWrite: number
}

/** 一个可以监听下载进度变化事件，以及取消下载任务的对象 */
interface DownloadTask {
  /** 中断下载任务 */
  abort(): void
  /** 移除 HTTP Response Header 事件的监听函数 */
  offHeadersReceived(listener: (res: any) => void): void
  /** 移除下载进度变化事件的监听函数 */
  offProgressUpdate(listener: (res: any) => void): void
  /** 监听 HTTP Response Header 事件。会比请求完成事件更早 */
  onHeadersReceived(listener: (res: DownloadTaskOnHeadersReceivedListenerCallbackResult) => void): void
  /** 监听下载进度变化事件 */
  onProgressUpdate(listener: (res: DownloadTaskOnProgressUpdateListenerCallbackResult) => void): void
}

interface RequestTaskOnChunkReceivedListenerCallbackResult {
  /** 返回的chunk buffer */
  data: ArrayBuffer
}

interface RequestTaskOnHeadersReceivedListenerCallbackResult {
  /** 开发者服务器返回的 HTTP Response Header */
  header: Record<string, any>
  /** 开发者服务器返回的 HTTP 状态码 （目前开发者工具上不会返回 statusCode 字段，可用真机查看该字段，后续将会支持） */
  statusCode: number
  /** 开发者服务器返回的 cookies，格式为字符串数组 */
  cookies: string[]
}

/** 网络请求任务对象 */
interface RequestTask {
  /** 中断请求任务 */
  abort(): void
  /** 移除 Transfer-Encoding Chunk Received 事件的监听函数 */
  offChunkReceived(listener: (res: any) => void): void
  /** 移除 HTTP Response Header 事件的监听函数 */
  offHeadersReceived(listener: (res: any) => void): void
  /** 监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。 */
  onChunkReceived(listener: (res: RequestTaskOnChunkReceivedListenerCallbackResult) => void): void
  /** 监听 HTTP Response Header 事件。会比请求完成事件更早 */
  onHeadersReceived(listener: (res: RequestTaskOnHeadersReceivedListenerCallbackResult) => void): void
}

interface SocketTaskCloseOption {
  /**
   * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
   * 默认值 1000（表示正常关闭连接）
   */
  code?: number
  /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。 */
  reason?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface SocketTaskOnCloseListenerCallbackResult {
  /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 */
  code: number
  /** 一个可读的字符串，表示连接被关闭的原因。 */
  reason: string
}

interface SocketTaskOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface SocketTaskOnMessageListenerCallbackResult {
  /** 服务器返回的消息 */
  data: string | ArrayBuffer
}

interface SocketTaskOnOpenListenerCallbackResult {
  /**
   * 连接成功的 HTTP 响应 Header
   * 最低版本 2.0.0
   */
  header: Record<string, any>
  /**
   * 网络请求过程中一些调试信息
   * 最低版本 2.10.4
   */
  profile: Record<string, any>
  /** 组件准备好使用 SOCKET 建立请求的时间，这发生在检查本地缓存之前 */
  fetchStart: number
  /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpStart: number
  /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
  domainLookUpEnd: number
  /** 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
  connectStart: number
  /**
   * 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
   */
  connectEnd: number
  /** 单次连接的耗时，包括 connect ，tls */
  rtt: number
  /** 握手耗时 */
  handshakeCost: number
  /** 上层请求到返回的耗时 */
  cost: number
}

interface SocketTaskSendOption {
  /** 需要发送的内容 */
  data: string | ArrayBuffer
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** WebSocket 任务，可通过 wx.connectSocket() 接口创建返回 */
interface SocketTask {
  /** 关闭 WebSocket 连接 */
  close(object?: SocketTaskCloseOption): void
  /** 监听 WebSocket 连接关闭事件 */
  onClose(listener: (res: SocketTaskOnCloseListenerCallbackResult) => void): void
  /** 监听 WebSocket 错误事件 */
  onError(listener: (res: SocketTaskOnErrorListenerCallbackResult) => void): void
  /** 监听 WebSocket 接收到服务器的消息事件 */
  onMessage(listener: (res: SocketTaskOnMessageListenerCallbackResult) => void): void
  /** 监听 WebSocket 连接打开事件 */
  onOpen(listener: (res: SocketTaskOnOpenListenerCallbackResult) => void): void
  /** 通过 WebSocket 连接发送数据 */
  send(object?: SocketTaskSendOption): void
}

interface TCPSocketBindWifiOption {
  /** 当前 wifi 网络的 BSSID ，可通过 wx.getConnectedWifi 获取 */
  BSSID: string
}

interface TCPSocketConnectOption {
  /** 套接字要连接的地址 */
  address: string
  /** 套接字要连接的端口 */
  port: number
  /**
   * 套接字要连接的超时时间，默认为 2s
   * 默认值 2
   */
  timeout?: number
  /**
   * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS
   * 默认值 false
   * 最低版本 3.4.0
   */
  enableHttpDNS?: boolean
  /**
   * HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS
   * 最低版本 3.4.0
   */
  httpDNSServiceId?: string
}

interface TCPSocketOnConnectListenerCallbackResult {
  /**
   * 本次连接是否使用了 HttpDNS
   * 最低版本 3.4.0
   */
  useHttpDNS: boolean
  /**
   * 网络请求过程中的一些异常信息（例如：TCPSocket.connect 传了 enableHttpDNS: true，但最终未使用 HttpDNS 时，exception 就会说明未使用 HttpDNS 的原因）
   * 最低版本 3.4.0
   */
  exception: Record<string, any>
  /**
   * 异常信息
   * 最低版本 3.4.0
   */
  reasons: Record<string, any>[]
  /** 错误原因 */
  errMsg: string
  /** 错误码 */
  errno: string
  /**
   * 发送端地址信息（目前仅iOS和Android端支持）
   * 最低版本 3.4.1
   */
  remoteInfo: Record<string, any>
  /**
   * 发送消息的 socket 的地址
   * 最低版本 3.4.1
   */
  address: string
  /**
   * 使用的协议族，为 IPv4 或者 IPv6
   * 最低版本 3.4.1
   */
  family: string
  /**
   * 端口号
   * 最低版本 3.4.1
   */
  port: number
  /**
   * 接收端地址信息（目前仅iOS和Android端支持）
   * 最低版本 3.4.1
   */
  localInfo: Record<string, any>
  /**
   * 接收消息的 socket 的地址
   * 最低版本 3.4.1
   */
  address: string
  /**
   * 使用的协议族，为 IPv4 或者 IPv6
   * 最低版本 3.4.1
   */
  family: string
  /**
   * 端口号
   * 最低版本 3.4.1
   */
  port: number
}

interface TCPSocketOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface TCPSocketOnMessageListenerCallbackResult {
  /** 收到的消息 */
  message: ArrayBuffer
  /** 发送端地址信息 */
  remoteInfo: Record<string, any>
  /** 发送消息的 socket 的地址 */
  address: string
  /** 使用的协议族，为 IPv4 或者 IPv6 */
  family: string
  /** 端口号 */
  port: number
  /** 接收端地址信息 */
  localInfo: Record<string, any>
  /** 接收消息的 socket 的地址 */
  address: string
  /** 使用的协议族，为 IPv4 或者 IPv6 */
  family: string
  /** 端口号 */
  port: number
}

/** 一个 TCP Socket 实例，默认使用 IPv4 协议 */
interface TCPSocket {
  /** 将 TCP Socket 绑定到当前 wifi 网络，成功后会触发 onBindWifi 事件（仅安卓支持） */
  bindWifi(options?: TCPSocketBindWifiOption): void
  /** 关闭连接 */
  close(): void
  /** 在给定的套接字上启动连接 */
  connect(options?: TCPSocketConnectOption): void
  /** 移除当一个 socket 绑定当前 wifi 网络成功时触发该事件的监听函数 */
  offBindWifi(listener: (res: any) => void): void
  /** 移除一旦 socket 完全关闭就发出该事件的监听函数 */
  offClose(listener: (res: any) => void): void
  /** 移除当一个 socket 连接成功建立的时候触发该事件的监听函数 */
  offConnect(listener: (res: any) => void): void
  /** 移除当错误发生时触发的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除当接收到数据的时触发该事件的监听函数 */
  offMessage(listener: (res: any) => void): void
  /** 监听当一个 socket 绑定当前 wifi 网络成功时触发该事件 */
  onBindWifi(listener: (res: any) => void): void
  /** 监听一旦 socket 完全关闭就发出该事件 */
  onClose(listener: (res: any) => void): void
  /** 监听当一个 socket 连接成功建立的时候触发该事件 */
  onConnect(listener: (res: TCPSocketOnConnectListenerCallbackResult) => void): void
  /** 监听当错误发生时触发 */
  onError(listener: (res: TCPSocketOnErrorListenerCallbackResult) => void): void
  /** 监听当接收到数据的时触发该事件 */
  onMessage(listener: (res: TCPSocketOnMessageListenerCallbackResult) => void): void
  /** 在 socket 上发送数据 */
  write(data: any): void
}

interface UDPSocketConnectOption {
  /** 要发消息的地址 */
  address: string
  /** 要发送消息的端口号 */
  port: number
}

interface UDPSocketOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface UDPSocketOnMessageListenerCallbackResult {
  /** 收到的消息。消息长度需要小于4096。 */
  message: ArrayBuffer
  /** 发送端地址信息 */
  remoteInfo: Record<string, any>
  /** 发送消息的 socket 的地址 */
  address: string
  /** 使用的协议族，为 IPv4 或者 IPv6 */
  family: string
  /** 端口号 */
  port: number
  /** message 的大小，单位：字节 */
  size: number
  /** 接收端地址信息，2.18.0 起支持 */
  localInfo: Record<string, any>
  /** 接收消息的 socket 的地址 */
  address: string
  /** 使用的协议族，为 IPv4 或者 IPv6 */
  family: string
  /** 端口号 */
  port: number
}

interface UDPSocketSendOption {
  /** 要发消息的地址。在基础库 <= 2.9.3 版本必须是和本机同网段的 IP 地址，或安全域名列表内的域名地址；之后版本可以是任意 IP 和域名 */
  address: string
  /** 要发送消息的端口号 */
  port: number
  /** 要发送的数据 */
  message: string | ArrayBuffer
  /**
   * 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效
   * 默认值 0
   */
  offset?: number
  /**
   * 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效
   * 默认值 message.byteLength
   */
  length?: number
  /**
   * 向指定地址发消息时，是否要开启广播，基础库 2.24.0 开始支持
   * 默认值 false
   */
  setBroadcast?: boolean
}

interface UDPSocketWriteOption {
  /** 要发消息的地址。在基础库 <= 2.9.3 版本必须是和本机同网段的 IP 地址，或安全域名列表内的域名地址；之后版本可以是任意 IP 和域名 */
  address: string
  /** 要发送消息的端口号 */
  port: number
  /** 要发送的数据 */
  message: string | ArrayBuffer
  /**
   * 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效
   * 默认值 0
   */
  offset?: number
  /**
   * 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效
   * 默认值 message.byteLength
   */
  length?: number
  /**
   * 向指定地址发消息时，是否要开启广播，基础库 2.24.0 开始支持
   * 默认值 false
   */
  setBroadcast?: boolean
}

/** 一个 UDP Socket 实例，默认使用 IPv4 协议。 */
interface UDPSocket {
  /** 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 */
  bind(port: number): number
  /**
   * 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 `UDPSocket` 实例被创建后将被 Native 强引用，保证其不被 GC。在 `UDPSocket.close` 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。
   */
  close(): void
  /** 预先连接到指定的 IP 和 port，需要配合 write 方法一起使用 */
  connect(object?: UDPSocketConnectOption): void
  /** 移除关闭事件的监听函数 */
  offClose(listener: (res: any) => void): void
  /** 移除错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除开始监听数据包消息的事件的监听函数 */
  offListening(listener: (res: any) => void): void
  /** 移除收到消息的事件的监听函数 */
  offMessage(listener: (res: any) => void): void
  /** 监听关闭事件 */
  onClose(listener: (res: any) => void): void
  /** 监听错误事件 */
  onError(listener: (res: UDPSocketOnErrorListenerCallbackResult) => void): void
  /** 监听开始监听数据包消息的事件 */
  onListening(listener: (res: any) => void): void
  /** 监听收到消息的事件 */
  onMessage(listener: (res: UDPSocketOnMessageListenerCallbackResult) => void): void
  /** 向指定的 IP 和 port 发送消息。基础库 2.9.0 起支持广播 (指定地址为 255.255.255.255)。 */
  send(object?: UDPSocketSendOption): void
  /** 设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数 */
  setTTL(ttl: number): void
  /** 用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数） */
  write(object?: UDPSocketWriteOption): void
}

interface UploadTaskOnHeadersReceivedListenerCallbackResult {
  /** 开发者服务器返回的 HTTP Response Header */
  header: Record<string, any>
}

interface UploadTaskOnProgressUpdateListenerCallbackResult {
  /** 上传进度百分比 */
  progress: number
  /** 已经上传的数据长度，单位 Bytes */
  totalBytesSent: number
  /** 预期需要上传的数据总长度，单位 Bytes */
  totalBytesExpectedToSend: number
}

/** 一个可以监听上传进度变化事件，以及取消上传任务的对象 */
interface UploadTask {
  /** 中断上传任务 */
  abort(): void
  /** 移除 HTTP Response Header 事件的监听函数 */
  offHeadersReceived(listener: (res: any) => void): void
  /** 移除上传进度变化事件的监听函数 */
  offProgressUpdate(listener: (res: any) => void): void
  /** 监听 HTTP Response Header 事件。会比请求完成事件更早 */
  onHeadersReceived(listener: (res: UploadTaskOnHeadersReceivedListenerCallbackResult) => void): void
  /** 监听上传进度变化事件 */
  onProgressUpdate(listener: (res: UploadTaskOnProgressUpdateListenerCallbackResult) => void): void
}

interface WxNetwork {
  /**
   * 关闭 WebSocket 连接。
   * 支持 Promise 风格调用
   */
  closeSocket(object?: WxCloseSocketOption): void;
  /** 创建一个 WebSocket 连接。使用前请注意阅读相关说明。 */
  connectSocket(object?: WxConnectSocketOption): SocketTask;
  /** 创建一个 TCP Socket 实例。使用前请注意阅读相关说明。 */
  createTCPSocket(object?: WxCreateTCPSocketOption): TCPSocket;
  /** 创建一个 UDP Socket 实例。使用前请注意阅读相关说明。 */
  createUDPSocket(type: string, options?: Record<string, any>): UDPSocket;
  /**
   * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。使用前请注意阅读相关说明。
   */
  downloadFile(object?: WxDownloadFileOption): DownloadTask;
  /** 监听 WebSocket 连接关闭事件。 */
  onSocketClose(listener: (res: WxOnSocketCloseListenerCallbackResult) => void): void;
  /** 监听 WebSocket 错误事件。 */
  onSocketError(listener: (res: WxOnSocketErrorListenerCallbackResult) => void): void;
  /** 监听 WebSocket 接收到服务器的消息事件。 */
  onSocketMessage(listener: (res: WxOnSocketMessageListenerCallbackResult) => void): void;
  /** 监听 WebSocket 连接打开事件。 */
  onSocketOpen(listener: (res: WxOnSocketOpenListenerCallbackResult) => void): void;
  /** 发起 HTTPS 网络请求。使用前请注意阅读相关说明。 */
  request(object?: WxRequestOption): RequestTask;
  /**
   * 通过 WebSocket 连接发送数据。需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
   * 支持 Promise 风格调用
   */
  sendSocketMessage(object?: WxSendSocketMessageOption): void;
  /**
   * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读相关说明。
   */
  uploadFile(object?: WxUploadFileOption): UploadTask;
}

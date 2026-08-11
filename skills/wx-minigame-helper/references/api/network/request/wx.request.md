---
title: "RequestTask wx.request(Object object)"
type: api
category: api/network/request
api: "wx.request"
source: https://developers.weixin.qq.com/minigame/dev/api/network/request/wx.request.html
---

# [RequestTask](<RequestTask.md>) wx.request(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

发起 HTTPS 网络请求。使用前请注意阅读[相关说明](<../../../guide/base-ability/network.md>)。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  url | string |  | 是 | 开发者服务器接口地址 |   
|  data | string/object/ArrayBuffer |  | 否 | 请求的参数 |   
|  header | Object |  | 否 | 设置请求的 header，header 中不能设置 Referer。  
`content-type` 默认为 `application/json` |   
|  timeout | number |  | 否 | 超时时间，单位为毫秒。默认值为 60000 | [2.10.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  method | string | GET | 否 | HTTP 请求方法 |   
| |  合法值 | 说明  
---|---  
OPTIONS | HTTP 请求 OPTIONS  
GET | HTTP 请求 GET  
HEAD | HTTP 请求 HEAD  
POST | HTTP 请求 POST  
PUT | HTTP 请求 PUT  
DELETE | HTTP 请求 DELETE  
TRACE | HTTP 请求 TRACE  
CONNECT | HTTP 请求 CONNECT  
|  dataType | string | json | 否 | 返回的数据格式。值为 `json` 时，返回的数据为 JSON，返回后会对返回的数据进行一次 `JSON.parse`；其他值则不对返回的内容进行 `JSON.parse` |   
|  responseType | string | text | 否 | 响应的数据类型 | [1.7.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
text | 响应的数据为文本  
arraybuffer | 响应的数据为 ArrayBuffer  
|  useHighPerformanceMode | boolean | true | 否 | 使用高性能模式。从基础库 v3.5.0 开始在 Android 端默认开启，其他端暂不生效。该模式下有更优的网络性能表现，更多信息请查看下方说明。 | [3.3.3](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableHttp2 | boolean | false | 否 | 开启 http2 | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableProfile | boolean | true | 否 | 是否开启 profile。iOS 和 Android 端默认开启，其他端暂不支持。开启后可在接口回调的 res.profile 中查看性能调试信息。 |   
|  enableQuic | boolean | false | 否 | 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议） | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableCache | boolean | false | 否 | 开启 Http 缓存 | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableHttpDNS | boolean | false | 否 | 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](<../../../guide/base-ability/HTTPDNS.md>) | [2.19.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  httpDNSServiceId | string |  | 否 | HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](<../../../guide/base-ability/HTTPDNS.md>) | [2.19.1](<../../../guide/runtime/client-lib/compatibility.md>)  
|  httpDNSTimeout | number | 10000 | 否 | HttpDNS 超时时间。HttpDNS解析时间超过该值时不再走HttpDNS，本次请求将回退到localDNS。默认为 10000 毫秒。 HttpDNS 用法详见 [移动解析HttpDNS](<../../../guide/base-ability/HTTPDNS.md>) | [3.8.9](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableHttpDNSFallback | boolean | true | 否 | 是否开启 HttpDNS 兜底。开启时，HttpDNS 服务查询失败会回退到 localDNS；关闭时，HttpDNS 服务查询失败将直接报错，不回退到 localDNS。默认为 true。 HttpDNS 用法详见 [移动解析HttpDNS](<../../../guide/base-ability/HTTPDNS.md>) | [3.16.2](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableChunked | boolean | false | 否 | 开启 transfer-encoding chunked。 | [2.20.2](<../../../guide/runtime/client-lib/compatibility.md>)  
|  forceCellularNetwork | boolean | false | 否 | 强制使用蜂窝网络发送请求 | [2.21.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  redirect | string | follow | 否 | 重定向拦截策略。（目前安卓、iOS、开发者工具已支持，PC端将在后续支持） | [3.2.2](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
follow | 不拦截重定向，即客户端自动处理重定向  
manual | 拦截重定向。开启后，当 http 状态码为 3xx 时客户端不再自动重定向，而是触发 onHeadersReceived 回调，并结束本次 request 请求。可通过 onHeadersReceived 回调中的 header.Location 获取重定向的 url  
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  data | string/Object/Arraybuffer | 开发者服务器返回的数据 |   
|  statusCode | number | 开发者服务器返回的 HTTP 状态码 |   
|  header | Object | 开发者服务器返回的 HTTP Response Header | [1.2.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  cookies | Array.<string> | 开发者服务器返回的 cookies，格式为字符串数组 | [2.10.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  profile | Object | 网络请求过程中一些调试信息，[查看详细说明](<https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html>)。目前仅 iOS 和 Android 端支持，其他端暂不支持。 | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  invokeStart | number | 调用接口的时间。 | [3.8.10](<../../../guide/runtime/client-lib/compatibility.md>)  
|  httpDNSDomainLookUpStart | number | httpDNS 开始查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持 | [3.8.9](<../../../guide/runtime/client-lib/compatibility.md>)  
|  httpDNSDomainLookUpEnd | number | httpDNS 完成查询的时间。仅当开启 httpDNS 功能时返回该字段。目前仅wx.request接口支持 | [3.8.9](<../../../guide/runtime/client-lib/compatibility.md>)  
|  queueStart | number | 开始排队的时间。达到并行上限时才需要排队。 | [3.8.10](<../../../guide/runtime/client-lib/compatibility.md>)  
|  queueEnd | number | 结束排队的时间。达到并行上限时才需要排队。如果未发生排队，则该字段和 queueStart 字段值相同 | [3.8.10](<../../../guide/runtime/client-lib/compatibility.md>)  
|  redirectStart | number | 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 |   
|  redirectEnd | number | 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 |   
|  fetchStart | number | 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 |   
|  domainLookUpStart | number | Local DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 |   
|  domainLookUpEnd | number | Local DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 |   
|  connectStart | number | HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 |   
|  connectEnd | number | HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 |   
|  SSLconnectionStart | number | SSL建立连接的时间,如果不是安全连接,则值为 0 |   
|  SSLconnectionEnd | number | SSL建立完成的时间,如果不是安全连接,则值为 0 |   
|  requestStart | number | HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 |   
|  requestEnd | number | HTTP请求读取真实文档结束的时间 |   
|  responseStart | number | HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 |   
|  responseEnd | number | HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 |   
|  rtt | number | 当次请求连接过程中实时 rtt |   
|  estimate_nettype | number | 评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 |   
|  httpRttEstimate | number | 协议层根据多个请求评估当前网络的 rtt（仅供参考） |   
|  transportRttEstimate | number | 传输层根据多个请求评估的当前网络的 rtt（仅供参考） |   
|  downstreamThroughputKbpsEstimate | number | 评估当前网络下载的kbps |   
|  throughputKbps | number | 当前网络的实际下载kbps |   
|  peerIP | string | 当前请求的IP |   
|  port | number | 当前请求的端口 |   
|  socketReused | boolean | 是否复用连接 |   
|  sendBytesCount | number | 发送的字节数 |   
|  receivedBytedCount | number | 收到字节数 |   
|  protocol | string | 使用协议类型，有效值：http1.1, h2, quic, unknown |   
|  usingHighPerformanceMode | boolean | 是否走到了高性能模式。基础库 v3.3.4 起支持。 |   
  
|  exception | Object | 网络请求过程中的一些异常信息，例如httpdns超时等 | [3.0.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  retryCount | number | 本次请求底层重试次数  
|  reasons | Array.<Object> | 本次请求底层失败信息，所有失败信息均符合Errno错误码  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误原因  
|  errno | string | 错误码  
  
|  useHttpDNS | boolean | 最终请求是否使用了HttpDNS解析的IP。仅当enableHttpDNS传true时返回此字段。如果开启enableHttpDNS但最终请求未使用HttpDNS解析的IP，可在exception查看原因。 | [3.4.10](<../../../guide/runtime/client-lib/compatibility.md>)  
  
#### object.fail 回调函数

##### 参数

###### Object err

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  errMsg | String | 错误信息 |   
|  errno | Number | errno 错误码，错误码的详细说明参考 [Errno错误码](<../../../guide/runtime/debug/PublicErrno.md>) | [2.24.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  exception | Object | 网络请求过程中的一些异常信息，例如httpdns超时等 | [3.8.10](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  retryCount | number | 本次请求底层重试次数  
|  reasons | Array.<Object> | 本次请求底层失败信息，所有失败信息均符合Errno错误码  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误原因  
|  errno | string | 错误码  
  
|  useHttpDNS | boolean | 最终请求是否使用了HttpDNS解析的IP。仅当enableHttpDNS传true时返回此字段。如果开启enableHttpDNS但最终请求未使用HttpDNS解析的IP，可在exception查看原因。 | [3.8.10](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [RequestTask](<RequestTask.md>)

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

请求任务对象

## data 参数说明

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：

  * 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
  * 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
  * 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`

## useHighPerformanceMode 高性能模式说明

在该模式下，框架将会采用全新的网络请求模块，默认支持 HTTP3，可以提升小程序的网络请求性能。有以下注意事项：

  * 除声明了 `enableChunked` 后会走 HTTP1 以外，均会自动开启 HTTP2/HTTP3 等优化能力，`enableQuic`、`enableHttp2` 参数将会强制开启。建议开发者在后台服务也开启对应能力以获得更好的效果。
  * 暂仅支持 Android，iOS/PC 端设置该参数后会使用原 request 模块。iOS 会在后续支持该参数。
  * 暂不支持 HttpDNS 能力。
  * 开启 `enableProfile` 后，返回的 profile 字段部分信息缺失，会被缺省值代替。缺失部分包括 redirectStart、redirectEnd、rtt、estimate_nettype、httpRttEstimate、transportRttEstimate、downstreamThroughputKbpsEstimate、throughputKbps、peerIP、port。

## 示例代码
    
    
    wx.request({
      url: 'example.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })

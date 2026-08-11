---
title: "DownloadTask wx.downloadFile(Object object)"
type: api
category: api/network/download
api: "wx.downloadFile"
source: https://developers.weixin.qq.com/minigame/dev/api/network/download/wx.downloadFile.html
---

# [DownloadTask](<DownloadTask.md>) wx.downloadFile(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。使用前请注意阅读[相关说明](<../../../guide/base-ability/network.md>)。

注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
url | string |  | 是 | 下载资源的 url |   
header | Object |  | 否 | HTTP 请求的 Header，Header 中不能设置 Referer |   
timeout | number | 60000 | 否 | 超时时间，单位为毫秒，默认值为 60000 即一分钟。 | [2.10.0](<../../../guide/runtime/client-lib/compatibility.md>)  
filePath | string |  | 否 | 指定文件下载后存储的路径 (本地路径) | [1.8.0](<../../../guide/runtime/client-lib/compatibility.md>)  
enableProfile | boolean | true | 否 | 是否开启 profile。iOS 和 Android 端默认开启，其他端暂不支持。开启后可在接口回调的 res.profile 中查看性能调试信息。 |   
enableHttp2 | boolean | false | 否 | 是否开启 http2 | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
enableQuic | boolean | false | 否 | 是否开启 Quic/h3 协议（iOS 微信目前使用 gQUIC-Q43；Android 微信在 v8.0.54 前使用 gQUIC-Q43，v8.0.54 开始使用 IETF QUIC，即 h3 协议；PC微信使用 IETF QUIC，即 h3 协议） | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  tempFilePath | string | 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 |   
|  filePath | string | 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 |   
|  statusCode | number | 开发者服务器返回的 HTTP 状态码 |   
|  profile | Object | 网络请求过程中一些调试信息，[查看详细说明](<https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html>)。目前 iOS 和 Android 端支持。 | [2.10.4](<../../../guide/runtime/client-lib/compatibility.md>)  
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
  
## 返回值

### [DownloadTask](<DownloadTask.md>)

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

一个可以监听下载进度变化事件和取消下载的对象

## 示例代码
    
    
    wx.downloadFile({
      url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
      success (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })

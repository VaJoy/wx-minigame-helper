---
title: "RequestTask.onHeadersReceived(function listener)"
type: api
category: api/network/request
api: "RequestTask.onHeadersReceived"
source: https://developers.weixin.qq.com/minigame/dev/api/network/request/RequestTask.onHeadersReceived.html
---

# RequestTask.onHeadersReceived(function listener)  
  
> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听 HTTP Response Header 事件。会比请求完成事件更早

## 参数

### function listener

HTTP Response Header 事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
header | Object | 开发者服务器返回的 HTTP Response Header  
statusCode | Number | 开发者服务器返回的 HTTP 状态码 （目前开发者工具上不会返回 statusCode 字段，可用真机查看该字段，后续将会支持）  
cookies | Array.<string> | 开发者服务器返回的 cookies，格式为字符串数组

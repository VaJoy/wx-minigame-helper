---
title: "wx.onUnhandledRejection(function listener)"
type: api
category: api/base/app-event
api: "wx.onUnhandledRejection"
source: https://developers.weixin.qq.com/minigame/dev/api/base/app/app-event/wx.onUnhandledRejection.html
---

# wx.onUnhandledRejection(function listener)

> 基础库 2.10.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听未处理的 Promise 拒绝事件

## 参数

### function listener

未处理的 Promise 拒绝事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
reason | string | 拒绝原因，一般是一个 Error 对象  
promise | string | 被拒绝的 promise 对象  
  
## 注意

安卓平台暂时不会派发该事件

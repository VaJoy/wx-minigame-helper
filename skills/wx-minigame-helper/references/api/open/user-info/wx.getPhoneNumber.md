---
title: "wx.getPhoneNumber(Object object)"
type: api
category: api/open/user-info
api: "wx.getPhoneNumber"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getPhoneNumber.html
---

# wx.getPhoneNumber(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

手机号快速验证，向用户申请，并在用户同意后，快速填写和验证手机 [具体说明](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/getPhoneNumber.html>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
isRealtime | boolean | false | 否 | 手机号实时验证，向用户申请，并在用户同意后，快速填写和实时验证手机号 [具体说明](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/getRealtimePhoneNumber.html>)。  
phoneNumberNoQuotaToast | boolean | true | 否 | 当手机号快速验证或手机号实时验证额度用尽时，是否对用户展示“申请获取你的手机号，但该功能使用次数已达当前小程序上限，暂时无法使用”的提示，默认展示。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
code | string | 动态令牌  
errMsg | string | 回调信息（成功失败都会返回）  
errno | number | 错误码（失败时返回）

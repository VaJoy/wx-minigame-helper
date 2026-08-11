---
title: "wx.onNeedPrivacyAuthorization(function listener)"
type: api
category: api/open/privacy
api: "wx.onNeedPrivacyAuthorization"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html
---

# wx.onNeedPrivacyAuthorization(function listener)

> 基础库 2.32.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听隐私接口需要用户授权事件。小游戏注册该事件监听后，会启用自定义隐私授权弹窗模式，当需要用户进行隐私授权时会触发该事件。触发该事件时，开发者需要弹出隐私协议说明，并在用户同意或拒绝授权后调用回调接口 resolve 触发原隐私接口继续执行。隐私合规开发指南详情可见[《小游戏隐私合规开发指南》](<https://developers.weixin.qq.com/community/develop/doc/000aa25cf1c8a0e64310ac3ef66401?highLine=%25E9%259A%2590%25E7%25A7%2581>)

## 参数

### function listener

隐私接口需要用户授权事件的监听函数

## 回调参数

### function resolve

resolve 是 onNeedPrivacyAuthorization 的首个回调参数，是一个接口函数。

当触发 onNeedPrivacyAuthorization 事件时，触发该事件的隐私接口会处于 pending 状态。

如果调用 resolve({ event:'agree' })，则触发当前 onNeedPrivacyAuthorization 事件的原隐私接口会继续执行。

如果调用 resolve({ event: 'disagree' })，则触发当前 onNeedPrivacyAuthorization 事件的原隐私接口会失败并返回 `API:fail privacy permission is not authorized` 的错误信息。

在调用 resolve({ event: 'agree'/'disagree' }) 之前，开发者可以调用 resolve({ event: 'exposureAuthorization' }) 把隐私弹窗曝光告知平台。

### Object eventInfo

eventInfo 是 onNeedPrivacyAuthorization 的第二个回调参数，表示触发本次 onNeedPrivacyAuthorization 事件的关联信息

属性 | 类型 | 说明  
---|---|---  
referrer | string | 触发本次 onNeedPrivacyAuthorization 事件的接口或组件名（例如："getUserInfo", "UserInfoButton.onTap"）  
  
## resolve 接口参数

属性 | 类型 | 说明  
---|---|---  
event | string | 用户操作类型  
  
### event 合法值

event | 说明  
---|---  
exposureAuthorization | 自定义隐私弹窗曝光  
agree | 用户同意隐私授权  
disagree | 用户拒绝隐私授权  
  
## 具体说明：

  *     1. 小游戏未注册 wx.onNeedPrivacyAuthorization 事件监听时，会默认使用平台统一隐私弹窗
  *     2. 小游戏注册 wx.onNeedPrivacyAuthorization 后，会切换至自定义隐私弹窗，此时需要开发者自行渲染隐私弹窗
  *     3. 什么时候会触发 onNeedPrivacyAuthorization 事件？
    *       1. 调用隐私相关接口（比如 wx.getUserInfo、wx.getClipboardData），并且用户还未同意过隐私协议时
    *       2. 调用 wx.requirePrivacyAuthorize 接口来模拟隐私接口调用，并且用户还未同意过隐私协议时
    *       3. 如果用户已经同意过隐私协议，则不会再触发 onNeedPrivacyAuthorization 事件
  *     4. 当触发 onNeedPrivacyAuthorization 事件时，触发该事件的隐私接口会处于 pending 状态，等待用户授权后才会继续执行，此时开发者需要弹出自定义隐私弹窗，并在用户点击同意/拒绝后调用回调接口 resolve，触发该事件的隐私接口才会继续执行。
  *     5. 开发者必须在用户产生点击操作时调用 resolve 接口
  *     6. wx.onNeedPrivacyAuthorization 是覆盖式注册监听，若重复注册监听，则只有最后一次注册会生效。
  *     7. 一定要注册 wx.onNeedPrivacyAuthorization 监听以及调用 resolve 吗？
    *       1. 不是的，如果使用小游戏官方弹窗，不使用自定义弹窗，那就不需要 wx.onNeedPrivacyAuthorization。
    *       2. 但如果注册了 wx.onNeedPrivacyAuthorization 监听，则一定要调用 resolve 接口。

## 示例代码
    
    
    wx.onNeedPrivacyAuthorization((resolve, eventInfo) => {
      console.log('触发本次事件的接口是：' + eventInfo.referrer)
      // ------ 自定义弹窗逻辑 ------ //
      showCustomPopup()
      // -------弹窗后根据用户操作，进行以下逻辑逻辑 ------- //
      // 开发者弹出自定义的隐私弹窗，并调用 resolve 告知平台已经弹窗
      resolve({ event: 'exposureAuthorization' })
      // 用户点击同意后，开发者调用 resolve 告知平台用户已经同意
      resolve({ event: 'agree' })
      // 用户点击拒绝后，开发者调用 resolve 告知平台用户已经拒绝
      resolve({ event: 'disagree' })
    })

---
title: "wx.navigateToMiniProgram(Object object)"
type: api
category: api/navigate
api: "wx.navigateToMiniProgram"
source: https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateToMiniProgram.html
---

# wx.navigateToMiniProgram(Object object)  
  
> 基础库 2.2.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **需要页面权限** ：当前是插件页面时，宿主小程序不能调用该接口，反之亦然
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

打开另一个小程序

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  appId | string |  | 否 | 要打开的小程序 appId |   
|  path | string |  | 否 | 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [wx.onShow](<../base/life-cycle/wx.onShow.md>) 回调函数、[wx.getLaunchOptionsSync](<../base/life-cycle/wx.getLaunchOptionsSync.md>) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。 |   
|  extraData | object |  | 否 | 需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [wx.onShow](<../base/life-cycle/wx.onShow.md>)、[wx.getLaunchOptionsSync](<../base/life-cycle/wx.getLaunchOptionsSync.md>) 中可以获取到这份数据。 |   
|  envVersion | string | release | 否 | 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。 |   
| |  合法值 | 说明  
---|---  
develop | 开发版  
trial | 体验版  
release | 正式版  
|  shortLink | string |  | 否 | 小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。 | [2.18.1](<../../guide/runtime/client-lib/compatibility.md>)  
|  noRelaunchIfPathUnchanged | boolean | false | 否 | 不reLaunch目标小程序，直接打开目标跳转的小程序退后台时的页面，需满足以下条件：1. 目标跳转的小程序生命周期未被销毁；2. 且目标当次启动的path、query与上次启动相同，apiCategory以wx.getApiCategory接口的返回结果为准。 | [2.24.0](<../../guide/runtime/client-lib/compatibility.md>)  
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 使用限制

##### 需要用户触发跳转

从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。

##### 需要用户确认跳转

从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。

## 运营规范

平台将坚决打击小程序盒子等互推行为，使用此功能时请严格遵守[《微信小程序平台运营规范》](<https://developers.weixin.qq.com/miniprogram/product/#_5-10-%E4%BA%92%E6%8E%A8%E8%A1%8C%E4%B8%BA>)，若发现小程序违反运营规范将被下架处理。

## 关于调试

  * 在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](<https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持>)
  * 开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](<https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#跳转小程序调试支持>)

## 示例代码
    
    
    wx.navigateToMiniProgram({
      appId: '',
      path: 'page/index/index?id=123',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })

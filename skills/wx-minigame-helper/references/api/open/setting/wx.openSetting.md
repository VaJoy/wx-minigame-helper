---
title: "wx.openSetting(Object object)"
type: api
category: api/open/setting
api: "wx.openSetting"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html
---

# wx.openSetting(Object object)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](<../../../guide/base-ability/authorize.md>)**。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
withSubscriptions | Boolean | false | 否 | 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。 | [2.10.3](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
authSetting | [AuthSetting](<AuthSetting.md>) | 用户授权结果 |   
subscriptionsSetting | [SubscriptionsSetting](<SubscriptionsSetting.md>) | 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。 | [2.10.3](<../../../guide/runtime/client-lib/compatibility.md>)  
  
  * 注意：[2.3.0](<../../../guide/runtime/client-lib/compatibility.md>) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](<https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008>)

## 示例代码
    
    
    wx.openSetting({
      success (res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })

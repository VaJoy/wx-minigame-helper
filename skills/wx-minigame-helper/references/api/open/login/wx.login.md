---
title: "wx.login(Object object)"
type: api
category: api/open/login
api: "wx.login"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html
---

# wx.login(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台账号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台账号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
timeout | number |  | 否 | 超时时间，单位ms | [1.9.90](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
code | string | 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [code2Session](<https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html>)，使用 code 换取 openid、unionid、session_key 等信息  
  
#### object.fail 回调函数

##### 参数

###### Object err

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
errMsg | String | 错误信息 |   
errno | Number | errno 错误码，错误码的详细说明参考 [Errno错误码](<../../../guide/runtime/debug/PublicErrno.md>) | [2.24.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://example.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

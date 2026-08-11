---
title: "wx.getUserInfo(Object object)"
type: api
category: api/open/user-info
api: "wx.getUserInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html
---

# wx.getUserInfo(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.userInfo。
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取用户信息。详情参考 [用户信息获取](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/user-info.html>)

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  withCredentials | boolean |  | 否 | 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。  
|  lang | string | en | 否 | 显示用户信息的语言  
| |  合法值 | 说明  
---|---  
en | 英文  
zh_CN | 简体中文  
zh_TW | 繁体中文  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
userInfo | [UserInfo](<UserInfo.md>) | 用户信息对象，不包含 openid 等敏感信息 |   
rawData | string | 不包括敏感信息的原始数据字符串，用于计算签名 |   
signature | string | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](<../../../guide/open-ability/data/signature.md>) |   
encryptedData | string | 包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密](<../../../guide/open-ability/data/signature.md>) |   
iv | string | 加密算法的初始向量，详见 [用户数据的签名验证和加解密](<../../../guide/open-ability/data/signature.md>) |   
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>) | [2.7.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    // 必须是在用户已经授权的情况下调用
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    })
    

敏感数据有两种获取方式：

  1. 使用 [加密数据解密算法](<../../../guide/open-ability/data/signature.md>)
  2. 使用 [云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>) 获取得到的开放数据为以下 json 结构：

    
    
    {
      "openId": "OPENID",
      "nickName": "NICKNAME",
      "gender": GENDER,
      "city": "CITY",
      "province": "PROVINCE",
      "country": "COUNTRY",
      "avatarUrl": "AVATARURL",
      "unionId": "UNIONID",
      "watermark": {
        "appid":"APPID",
        "timestamp":TIMESTAMP
      }
    }
    

## 最佳用法
    
    
    // 通过 wx.getSetting 查询用户是否已授权头像昵称信息
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        } else {
          // 否则，先通过 wx.createUserInfoButton 接口发起授权
          let button = wx.createUserInfoButton({
            type: 'text',
            text: '获取用户信息',
            style: {
              left: 10,
              top: 76,
              width: 200,
              height: 40,
              lineHeight: 40,
              backgroundColor: '#ff0000',
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 16,
              borderRadius: 4
            }
          })
          button.onTap((res) => {
            // 用户同意授权后回调，通过回调可获取用户头像昵称信息
            console.log(res)
          })
        }
      }
    })

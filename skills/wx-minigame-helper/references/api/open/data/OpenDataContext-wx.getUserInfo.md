---
title: "wx.getUserInfo(Object object)"
type: api
category: api/open/data
api: "OpenDataContext-wx.getUserInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/OpenDataContext-wx.getUserInfo.html
---

# wx.getUserInfo(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.WxFriendInteraction

## 功能描述

批量获取用户信息，仅支持获取自己和好友的用户信息。该接口需要用户授权，且只在开放数据域下可用。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  openIdList | Array.<string> | [] | 否 | 要获取信息的用户的 openId 数组，如果要获取当前用户信息，则将数组中的一个元素设为 'selfOpenId'  
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

| 属性 | 类型 | 说明  
---|---|---|---  
|  data | Array.<Object> | 用户信息列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  avatarUrl | string | 用户头像图片 url  
|  city | string | 用户所在城市  
|  country | string | 用户所在国家  
|  gender | number | 用户性别  
|  language | string | 显示 country province city 所用的语言  
|  nickName | string | 用户昵称  
|  openId | string | 用户 openId  
|  province | string | 用户所在省份  
  
## 示例代码

获取当前用户和其他几个用户的用户信息
    
    
    wx.getUserInfo({
      openIdList: ['selfOpenId', 'ownAP0b9qt6AzvYOSWOX8VX8KMq0', 'ownAP0QJHIN2w3X60EUsj2Vah5Ig', 'ownAP0f8ANWUCcloXN1oZPfxtz0g'],
      lang: 'zh_CN',
      success: (res) => {
        console.log('success', res.data)
      },
      fail: (res) => {
        reject(res)
      }
    })

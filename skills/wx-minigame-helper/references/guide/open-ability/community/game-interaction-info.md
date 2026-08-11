---
title: "功能介绍"
type: guide
category: guide/open-ability/community
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game_Interaction_Information.html
---

# 功能介绍

为了丰富游戏的社交玩法，我们为开发者提供「游戏互动信息」能力。通过游戏互动信息能力，可满足游戏内 社交互动、好友互访等使用场景。

帮助游戏展示同玩好友：

1、能看到有哪些好友也玩过这个游戏，让玩家感觉不是一个人在玩。

2、好友互访：降低玩家之间建立联系的门槛，比如查看好友主页，去好友的农场/家园串门、偷菜、送礼物这类社交玩法。过去的开放数据域是一个封闭、独立的 JavaScript 作用域，难以实现这类玩法。现在可通过主域直接获取游戏好友的openid。

3、增强用户粘性，有效提升游戏的回流和留存率。有数据表明，有 3 个好友的用户留存率是 0 好友用户的数倍。

4、好友数量的提升，可有效提升游戏的付费渗透率和ARPU。有数据表明，有10个好友的用户付费渗透率和 ARPU是 0 好友用户的数十倍。

# 功能入口

MP-游戏能力地图-社交能力-游戏互动信息

# 功能描述

游戏互动信息：历史与你存在游戏互动记录（包括微信小游戏分享及微信游戏功能操作）且已在本小游戏完成注册的用户列表信息。

游戏可在主域调用该接口，获取当前用户在该游戏已注册的互动游戏好友OpenID列表。单个用户的接口最多返回 20 个互动游戏好友的OpenID。

# 使用场景示例

![](https://res8.wxqcloud.qq.com.cn/wxdoc/3a653942-1c6a-4535-9a19-b9ff53689857.png)

# 游戏接入

# wx.getRelationFriendList(Object object)

> 基础库 3.16.0 开始支持，低版本需做[兼容处理](<../../runtime/client-lib/compatibility.md>)。

> **以 Promise 风格调用** ：不支持
> 
> **[用户授权](<../../base-ability/authorize.md>)** ：需要 scope.scope.interactedUserInfo
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取小游戏同玩互动好友列表。该接口需要用户授权 scope.interactedUserInfo，首次调用时会弹出授权窗口。也可以提前通过 [wx.authorize](<../../base-ability/authorize.md>) 进行授权。当用户拒绝授权后，再次调用该接口不会再弹出授权窗口，而是直接进入 fail 回调。此时开发者可通过弹出提示或者通过 [wx.openSetting](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.openSetting.html>) 引导用户进入设置页面重新开启授权。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/b57a2416-f8f2-4ff1-9825-c52aa4ea25b2.png)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
signature | string | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息  
encryptedData | string | 包括 RelationFriendData 在内的加密数据，详见[加密数据解密算法](<../data/signature.md>)  
iv | string | 加密算法的初始向量  
cloudID | string | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过[云调用直接获取开放数据](<../data/signature.md>)  
  
## 示例代码
    
    
    // 提前授权（可选）
    wx.authorize({
      scope: 'scope.interactedUserInfo',
      success: () => {
        // 用户同意授权，可以调用接口
        getRelationFriends()
      },
      fail: () => {
        console.log('用户拒绝授权')
      }
    })
    
    function getRelationFriends() {
      wx.getRelationFriendList({
        success: (res) => {
          console.log(res.encryptedData)
        },
        fail: (res) => {
          console.error(res)
          // 判断是否为用户拒绝授权导致的失败，此处引导仅为示意，游戏可根据需求自行处理
          // res = { errno: 0, err_code: "-12006", errMsg: "getRelationFriendList:fail auth deny" }
          if (res.errMsg && res.errMsg.indexOf('auth deny') !== -1) {
            // 用户此前已拒绝授权，可通过弹窗提示引导用户前往设置页面重新开启授权
            wx.showModal({
              title: '授权提示',
              content: '需要获取互动好友信息，请在设置中开启授权',
              success: (modalRes) => {
                if (modalRes.confirm) {
                  wx.openSetting()
                }
              }
            })
          }
        },
        complete: (res) => console.log(res)
      })
    }
    
    

## encryptedData 解密后得到的 RelationFriendData 的结构

属性 | 类型 | 说明  
---|---|---  
list | Array\ | 同玩互动好友列表  
  
## RelationFriendInfo 的结构

属性 | 类型 | 说明  
---|---|---  
openid | string | 好友的openid

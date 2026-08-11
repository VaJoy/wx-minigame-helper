---
title: "wx.getRelationFriendList(Object object)"
type: api
category: api/open/data
api: "wx.getRelationFriendList"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getRelationFriendList.html
---

# wx.getRelationFriendList(Object object)

> 基础库 3.16.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **[用户授权](<../../../guide/base-ability/authorize.md>)** ：需要 scope.scope.interactedUserInfo
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取小游戏同玩互动好友列表。该接口需要用户授权 scope.interactedUserInfo，首次调用时会弹出授权窗口。也可以提前通过 [wx.authorize](<../../../guide/base-ability/authorize.md>) 进行授权。当用户拒绝授权后，再次调用该接口不会再弹出授权窗口，而是直接进入 fail 回调。此时开发者可通过弹出提示或者通过 [wx.openSetting](<\(api/open-api/setting\)>) 引导用户进入设置页面重新开启授权。

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
encryptedData | string | 包括 RelationFriendData 在内的加密数据，详见[加密数据解密算法](<../../../guide/open-ability/data/signature.md>)  
iv | string | 加密算法的初始向量  
cloudID | string | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过[云调用直接获取开放数据](<../../../guide/open-ability/data/signature.md>)  
  
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
list | Array<RelationFriendInfo> | 同玩互动好友列表  
  
## RelationFriendInfo 的结构

属性 | 类型 | 说明  
---|---|---  
openid | string | 好友的openid

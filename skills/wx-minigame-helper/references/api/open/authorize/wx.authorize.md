---
title: "wx.authorize(Object object)"
type: api
category: api/open/authorize
api: "wx.authorize"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/authorize/wx.authorize.html
---

# wx.authorize(Object object)

> 基础库 1.2.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](<../../../guide/base-ability/authorize.md>)。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
scope | string |  | 是 | 需要获取权限的 scope，详见 [scope 列表](<../../../guide/base-ability/authorize.md>)  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 注意事项

  * 小游戏内使用 `wx.authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 [wx.createUserInfoButton](<../user-info/wx.createUserInfoButton.md>)
  * 需要授权 `scope.userFuzzyLocation` 时必须[配置地理位置用途说明](<https://developers.weixin.qq.com/minigame/dev/reference/configuration/app.html#permission>)。

## 示例代码
    
    
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.writePhotosAlbum" 这个 scope
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success () {
              // 用户已经同意保存到相册功能，后续调用 wx.saveImageToPhotosAlbum 接口不会弹窗询问
              wx.saveImageToPhotosAlbum()
            }
          })
        }
      }
    })

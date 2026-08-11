---
title: "wx.navigateBackMiniProgram(Object object)"
type: api
category: api/navigate
api: "wx.navigateBackMiniProgram"
source: https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.navigateBackMiniProgram.html
---

# wx.navigateBackMiniProgram(Object object)

> 基础库 3.5.6 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **需要页面权限** ：当前是插件页面时，宿主小程序不能调用该接口，反之亦然
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功。

注意：**微信客户端 iOS 6.5.9，Android 6.5.10 及以上版本支持**

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
extraData | Object | {} | 否 | 需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 [详情](<\(App\)>)。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    wx.navigateBackMiniProgram({
      extraData: {
        foo: 'bar'
      },
      success(res) {
        // 返回成功
      }
    })

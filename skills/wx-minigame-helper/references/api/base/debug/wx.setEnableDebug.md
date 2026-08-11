---
title: "wx.setEnableDebug(Object object)"
type: api
category: api/base/debug
api: "wx.setEnableDebug"
source: https://developers.weixin.qq.com/minigame/dev/api/base/debug/wx.setEnableDebug.html
---

# wx.setEnableDebug(Object object)  
  
> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

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

设置是否打开调试开关。此开关对正式版也能生效。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
enableDebug | boolean |  | 是 | 是否打开调试  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    // 打开调试
    wx.setEnableDebug({
      enableDebug: true
    })
    
    // 关闭调试
    wx.setEnableDebug({
      enableDebug: false
    })
    

## Tips

  * 在正式版打开调试还有一种方法，就是先在开发版或体验版打开调试，再切到正式版就能看到vConsole。

---
title: "Object wx.getAccountInfoSync()"
type: api
category: api/open/account-info
api: "wx.getAccountInfoSync"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/account-info/wx.getAccountInfoSync.html
---

# Object wx.getAccountInfoSync()  
  
> 基础库 2.11.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取当前账号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。

## 返回值

### Object

账号信息

| 属性 | 类型 | 说明  
---|---|---|---  
|  miniProgram | Object | 小程序账号信息  
| |  | 结构属性 | 类型 | 说明 | 最低版本  
---|---|---|---|---  
|  appId | string | 小程序 appId |   
|  envVersion | string | 小程序版本 | [2.10.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
develop | 开发版，提交代码审核时默认使用开发版进行审核。  
trial | 体验版  
release | 正式版  
|  version | string | 线上小程序版本号 | [2.10.2](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  plugin | Object | 插件账号信息（仅在插件中调用时包含这一项）  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  appId | string | 插件 appId  
|  version | string | 插件版本号  
  
## 示例代码
    
    
    const accountInfo = wx.getAccountInfoSync();
    console.log(accountInfo.miniProgram.appId) // 小程序 appId
    console.log(accountInfo.plugin.appId) // 插件 appId
    console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式

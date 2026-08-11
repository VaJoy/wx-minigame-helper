---
title: "wx.showShareImageMenu(Object object)"
type: api
category: api/share
api: "wx.showShareImageMenu"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareImageMenu.html
---

# wx.showShareImageMenu(Object object)  
  
> 基础库 2.14.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

打开分享图片弹窗，可以将图片发送给朋友、收藏或下载

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
path | string |  | 是 | 要分享的图片地址，必须为本地路径或临时路径 |   
needShowEntrance | boolean | false | 否 | 分享的图片消息是否要带小程序入口 (仅部分小程序类目可用) | [3.2.0](<../../guide/runtime/client-lib/compatibility.md>)  
entrancePath | string | '' | 否 | 从消息小程序入口打开小程序的路径，如果当前页面允许分享给朋友，则默认为当前页面路径，否则默认为小程序首页 | [3.2.0](<../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 示例代码
    
    
     wx.downloadFile({
       url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
       success: (res) => {
         wx.showShareImageMenu({
           path: res.tempFilePath
         })
       }
     })

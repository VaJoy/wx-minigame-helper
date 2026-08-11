---
title: "wx.showShareMenu(Object object)"
type: api
category: api/share
api: "wx.showShareMenu"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareMenu.html
---

# wx.showShareMenu(Object object)

> 基础库 1.1.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

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

设置右上角点开的详情界面中的分享按钮是否可用

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
withShareTicket | boolean | false | 否 | 是否使用带 shareTicket 的转发[详情](<../../guide/open-ability/share/share.md>) |   
menus | Array.<string> |  | 否 | 本接口为 Beta 版本，暂只在 Android 平台支持。需要显示的转发按钮名称列表，默认['shareAppMessage']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种 | [2.11.3](<../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 注意事项

  * "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
  * 显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮

## 示例代码
    
    
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })

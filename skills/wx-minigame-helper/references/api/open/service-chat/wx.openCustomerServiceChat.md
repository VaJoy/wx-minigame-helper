---
title: "wx.openCustomerServiceChat(Object object)"
type: api
category: api/open/service-chat
api: "wx.openCustomerServiceChat"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html
---

# wx.openCustomerServiceChat(Object object)

> 基础库 2.30.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

打开微信客服，页面产生点击事件后才可调用。了解更多信息，可以参考[微信客服介绍](<https://work.weixin.qq.com/kf/>)。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  extInfo | Object |  | 是 | 客服信息  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  url | String |  | 是 | 客服链接  
  
|  corpId | String |  | 是 | 企业ID  
|  showMessageCard | Boolean | false | 否 | 是否发送小程序气泡消息  
|  sendMessageTitle | String |  | 否 | 气泡消息标题  
|  sendMessagePath | String |  | 否 | 气泡消息小程序路径  
|  sendMessageImg | String |  | 否 | 气泡消息图片  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
    wx.openCustomerServiceChat({
      extInfo: {url: ''},
      corpId: '',
      success(res) {}
    })

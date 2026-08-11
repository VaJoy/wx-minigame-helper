---
title: "wx.openCustomerServiceConversation(Object object)"
type: api
category: api/open/customer-message
api: "wx.openCustomerServiceConversation"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/customer-message/wx.openCustomerServiceConversation.html
---

# wx.openCustomerServiceConversation(Object object)

> 基础库 2.0.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持

## 功能描述

进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 [客服消息接入](<../../../guide/open-ability/community/customer-message/customer-message.md>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
sessionFrom | string | '' | 否 | 会话来源。该字段会在进入客服会话时透传给开发者配置好的后台服务。该字段（utf-8编码）最长不得超过 1000 个字节（不是字符串长度），超过将被截断。  
showMessageCard | boolean | false | 否 | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息  
sendMessageTitle | string | '' | 否 | 会话内消息卡片标题  
sendMessagePath | string | '' | 否 | 会话内消息卡片路径  
sendMessageImg | string | '' | 否 | 会话内消息卡片图片路径  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
path | string | 在客服会话内点击小程序消息卡片进入小程序时，所带的小程序打开路径  
query | Object | 在客服会话内点击小程序消息卡片进入小程序时，所带的小程序打开参数  
  
## 注意事项

  * 在客服会话内点击小程序消息卡片进入小程序时，不能通过 wx.onShow 或 wx.getEnterOptionsSync 等接口获取启动路径和参数，而是应该通过 wx.openCustomerServiceConversation 接口的 success 回调获取启动路径和参数

---
title: "wx.requestSubscribeSystemMessage(Object object)"
type: api
category: api/open/subscribe-message
api: "wx.requestSubscribeSystemMessage"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html
---

# wx.requestSubscribeSystemMessage(Object object)

> 基础库 2.9.4 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 [wx.getSetting](<../setting/wx.getSetting.md>) 接口可获取用户对相关模板消息的订阅状态。

## 注意事项

  * 使用前建议阅读 [小游戏系统订阅消息使用指引](<../../../guide/open-ability/message/subscribe-system-message.md>)。
  * 系统订阅消息只需要订阅一次，永久有效。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
msgTypeList | Array.<string> |  | 是 | 系统订阅消息类型列表，一次调用最多可订阅3种类型的消息，目前支持："SYS_MSG_TYPE_INTERACTIVE"（好友互动提醒）、"SYS_MSG_TYPE_RANK"（排行榜超越提醒）、"SYS_MSG_TYPE_WHATS_NEW"（游戏更新提醒）  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | String | 接口调用成功时errMsg值为'requestSubscribeSystemMessage:ok'  
MSG_TYPE | String | [MSG_TYPE]是动态的键，即系统订阅消息类型，值为'accept'、'reject'、'ban'，'accept'表示用户同意订阅该类型对应的模板消息，'reject'表示用户拒绝订阅该类型对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeSystemMessage:ok", SYS_MSG_TYPE_INTERACTIVE: "accept" } 表示用户同意订阅'SYS_MSG_TYPE_INTERACTIVE'这条消息  
  
#### object.fail 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | String | 接口调用失败错误信息  
errCode | Number | 接口调用失败错误码  
  
## 错误码

errCode | errMsg | 说明  
---|---|---  
10001 | TmplIds can't be empty | 参数传空了  
10002 | Request list fail | 网络问题，请求消息列表失败  
10003 | Request subscribe fail | 网络问题，订阅请求发送失败  
10004 | Invalid template id | 参数类型错误  
10005 | Cannot show subscribe message UI | 无法展示 UI，一般是小游戏这个时候退后台了导致的  
20004 | The main switch is switched off | 用户关闭了主开关，无法进行订阅  
20005 | This mini program was banned from subscribing messages | 小游戏被禁封  
  
## 示例代码
    
    
    wx.requestSubscribeSystemMessage({
      msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
      success (res) {
        console.log(res)
        // res === {
        //   errMsg: "requestSubscribeSystemMessage:ok",
        //   SYS_MSG_TYPE_INTERACTIVE: "accept",
        //   SYS_MSG_TYPE_RANK: 'reject'
        // }
      }
    })

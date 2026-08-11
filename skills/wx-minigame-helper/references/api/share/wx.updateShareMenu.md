---
title: "wx.updateShareMenu(Object object)"
type: api
category: api/share
api: "wx.updateShareMenu"
source: https://developers.weixin.qq.com/minigame/dev/api/share/wx.updateShareMenu.html
---

# wx.updateShareMenu(Object object)  
  
> 基础库 1.2.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **需要页面权限** ：当前是插件页面时，宿主小程序不能调用该接口，反之亦然
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

更新转发属性

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  withShareTicket | boolean | false | 否 | 是否使用带 shareTicket 的转发[详情](<../../guide/open-ability/share/share.md>) |   
|  isUpdatableMessage | boolean | false | 否 | 是否是动态消息，详见[动态消息](<../../guide/open-ability/share/updatable-message.md>) | [2.4.0](<../../guide/runtime/client-lib/compatibility.md>)  
|  activityId | string |  | 否 | 动态消息的 activityId。通过 [updatableMessage.createActivityId](<errorupdatableMessage.createActivityId\)>) 接口获取 | [2.4.0](<../../guide/runtime/client-lib/compatibility.md>)  
|  toDoActivityId | string |  | 否 | 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 [updatableMessage.createActivityId](<errorupdatableMessage.createActivityId\)>) 接口获取。详见[群待办消息](<../../guide/open-ability/share/share.md>) | [2.11.0](<../../guide/runtime/client-lib/compatibility.md>)  
|  templateInfo | Object |  | 否 | 动态消息的模板信息 | [2.4.0](<../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  parameterList | Array.<Object> |  | 是 | 参数列表  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  name | string |  | 是 | 参数名  
|  value | string |  | 是 | 参数值  
  
|  templateId | string |  | 是 | 模板ID  
  
|  isPrivateMessage | boolean |  | 否 | 是否是私密消息。详见 [小程序私密消息](<../../guide/open-ability/share/private-message.md>) | [2.13.0](<../../guide/runtime/client-lib/compatibility.md>)  
|  participant | Array.<string> | [] | 否 | 参与用户此聊天室下的 group_openid 列表 |   
|  useForChatTool | boolean | false | 否 | 聊天工具模式特殊动态消息 | [3.7.8](<../../guide/runtime/client-lib/compatibility.md>)  
|  chooseType | number | 1 | 否 | 指定成员的方式 | [3.7.8](<../../guide/runtime/client-lib/compatibility.md>)  
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 注意事项

  * bug：在iOS上，如果 withShareTicket 传了 true ，同时 isUpdatableMessage 传了 false，会导致 withShareTicket 失效。解决办法：当 withShareTicket 传了 true 的时候，isUpdatableMessage 传 true 或者不传都可以，但不要传 false。如果需要关掉动态消息设置，则另外单独调用一次 wx.updateShareMenu({ isUpdatableMessage: false }) 即可。

## 示例代码
    
    
    wx.updateShareMenu({
      withShareTicket: true,
      success () { }
    })
    
    
    
    // 转发私密消息
    wx.updateShareMenu({
      isPrivateMessage: true,
      activityId: 'xxx',
      templateInfo: {},
      success () { },
      fail () {}
    })

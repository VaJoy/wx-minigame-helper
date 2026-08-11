---
title: "wx.enterChatToolMode(Object object)"
type: api
category: api/chattool
api: "wx.enterChatToolMode"
source: https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.enterChatToolMode.html
---

# wx.enterChatToolMode(Object object)

> 基础库 3.12.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持

## 功能描述

进入聊天工具开放能力模式。

  1. 不传入聊天室id列表时，微信会拉起聊天列表让用户选择，用户选择后绑定聊天室进入聊天工具模式。
  2. 传入聊天室id列表时（群聊为opengid），会直接绑定这批聊天室进入。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
chatToolRooms | Array.<string> |  | 否 | 聊天室 id，不传则拉起群选择框，可以传入多聊群的 opengid 值  
singleChatRoom | boolean |  | 否 | 是否单选群聊，true 为单选，false 为多选  
selectLimit | number |  | 否 | 多选模式下最多选择的群聊数量  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
      wx.enterChatToolMode({
        singleChatRoom: false
      }) // 拉起聊天列表选择
    
    
    
    
      wx.enterChatToolMode({
        chatToolRooms: [`${opengid}],
      })

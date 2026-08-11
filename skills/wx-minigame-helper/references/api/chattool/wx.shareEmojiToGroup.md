---
title: "wx.shareEmojiToGroup(Object object)"
type: api
category: api/chattool
api: "wx.shareEmojiToGroup"
source: https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareEmojiToGroup.html
---

# wx.shareEmojiToGroup(Object object)

> 基础库 3.7.12 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持

## 功能描述

转发表情到聊天

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
imagePath | string |  | 是 | 要分享的表情地址，必须为本地路径或临时路径  
needShowEntrance | boolean | true | 否 | 分享的表情消息是否要带小程序入口  
entrancePath | string | '' | 否 | 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
      wx.downloadFile({
        url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
        success: (res) => {
          wx.shareEmojiToGroup({
            path: res.tempFilePath
          })
        }
      })

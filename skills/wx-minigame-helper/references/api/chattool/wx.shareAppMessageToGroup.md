---
title: "wx.shareAppMessageToGroup(Object object)"
type: api
category: api/chattool
api: "wx.shareAppMessageToGroup"
source: https://developers.weixin.qq.com/minigame/dev/api/chattool/wx.shareAppMessageToGroup.html
---

# wx.shareAppMessageToGroup(Object object)

> 基础库 3.7.12 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持

## 功能描述

转发小程序卡片到聊天

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
title | string |  | 是 | 转发标题  
path | string | '' | 否 | 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2  
imageUrl | string | '' | 否 | 自定义图片路径，支持PNG及JPG，显示图片长宽比是 5:4，默认使用截图  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 示例代码
    
    
      wx.shareAppMessageToGroup({
        title: '分享标题',
        path: '?a=1',
        imageUrl: '',
      })

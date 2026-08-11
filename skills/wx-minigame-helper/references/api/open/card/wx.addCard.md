---
title: "wx.addCard(Object object)"
type: api
category: api/open/card
api: "wx.addCard"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/card/wx.addCard.html
---

# wx.addCard(Object object)

> 基础库 2.5.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

批量添加卡券。只有通过 [认证](<https://developers.weixin.qq.com/miniprogram/product/renzheng.html>) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](<https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2>)。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  cardList | Array.<Object> |  | 是 | 需要添加的卡券列表  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  cardId | string |  | 是 | 卡券 ID  
|  cardExt | string |  | 是 | 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为**字符串**传入  
  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  cardList | Array.<Object> | 卡券添加结果列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  code | string | 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](<https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V>)  
|  cardId | string | 用户领取到卡券的 ID  
|  cardExt | string | 卡券的扩展参数，结构请参考下文  
|  isSuccess | boolean | 是否成功  
  
## cardExt 说明

cardExt 是卡券的扩展参数，其值是一个 JSON 字符串。

## 示例代码
    
    
    wx.addCard({
      cardList: [
        {
          cardId: '',
          cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }, {
          cardId: '',
          cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }
      ],
      success (res) {
        console.log(res.cardList) // 卡券添加结果
      }
    })

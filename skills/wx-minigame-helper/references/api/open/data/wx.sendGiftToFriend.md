---
title: "wx.sendGiftToFriend(Object object)"
type: api
category: api/open/data
api: "wx.sendGiftToFriend"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.sendGiftToFriend.html
---

# wx.sendGiftToFriend(Object object)

> 基础库 3.11.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

指定 openid 给他好友送礼，该接口只在开放数据域下可用。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
giftId | string |  | 是 | 礼包 id  
openid | string |  | 是 | 好友的 openid  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.fail 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误信息  
|  errno | number | 错误码  
| |  合法值 | 说明  
---|---  
151066169 | 注册天数不足 首次注册时间必须大于 24 小时才能赠礼  
151066170 | 风险用户  
151066168 | 当前时间周期已经赠送，目前支持一天赠送一次  
151066172 | 非好友关系

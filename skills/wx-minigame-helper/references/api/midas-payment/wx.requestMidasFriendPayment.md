---
title: "wx.requestMidasFriendPayment(Object object)"
type: api
category: api/midas-payment
api: "wx.requestMidasFriendPayment"
source: https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasFriendPayment.html
---

# wx.requestMidasFriendPayment(Object object)  
  
接口已废弃

> 基础库 2.11.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

发起米大师朋友礼物索要。接口用法详见 [小游戏礼物索要接入指南](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/friend-payment.html>)

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  mode | string |  | 是 | 支付的类型，不同的支付类型有各自额外要传的附加参数  
| |  合法值 | 说明  
---|---  
game | 购买游戏币  
|  env | number |  | 是 | 环境配置  
| |  合法值 | 说明  
---|---  
0 | 米大师正式环境  
1 | 米大师沙箱环境  
|  offerId | string |  | 是 | 在米大师侧申请的应用 id  
|  currencyType | string |  | 是 | 币种  
| |  合法值 | 说明  
---|---  
CNY | 人民币  
|  platform | string |  | 是 | 申请接入时的平台，platform 与应用id有关。  
| |  合法值 | 说明  
---|---  
android | Android平台  
|  buyQuantity | number |  | 是 | 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。  
|  zoneId | string |  | 是 | 分区 ID  
|  outTradeNo | string |  | 是 | 开发者业务订单号，每个订单号只能使用一次，重复使用会失败。要求32个字符内，只能是数字、大小写字母、符号 `_-|*@`  
|  nonceStr | string |  | 是 | 随机字符串，长度应小于 128  
|  timeStamp | number |  | 是 | 生成这个随机字符串的 UNIX 时间戳（精确到秒）  
|  signature | string |  | 是 | 签名  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息  
encryptedData | string | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](<../../guide/open-ability/data/signature.md>)  
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../../guide/open-ability/data/signature.md>)  
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/minigame/dev/wxcloud/basis/getting-started.html>)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../../guide/open-ability/data/signature.md>)  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
1000 |  | mode错误  
-15005 |  | 索要权限被封禁（索要功能不可用）  
-10073011 |  | 参数错误（具体错误见errMsg）  
-10073003 |  | outTradeNo业务单号重复  
-10073012 |  | 索要单已支付  
-10073013 |  | 索要单已超时  
-10073014 |  | 签名错误  
-10073015 |  | 索要功能不可用  
  
## 示例代码
    
    
    wx.requestMidasFriendPayment({
      success(res) {
        // res
        {
          errMsg: 'requestMidasFriendPayment:ok',
          encryptedData: 'xxxx',
          iv: 'xxx'
        }
      },
      fail() {
    
      }
    })
    

encryptedData 解密后数据结构如下：
    
    
    {
      "outTradeNo": "xxxxxxxx",
      "orderNo": "PBgAAHMjeOhixxxx",
      "watermark": {
        "timestamp": 1585537091,
        "appid": "wx7a727ff7d940xxxx"
      }
    }
    

## buyQuantity限制说明

购买游戏币的时候，buyQuantity 不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。

有效价格等级如下：

价格等级（单位：人民币）  
---  
1  
3  
6  
8  
12  
18  
25  
30  
40  
45  
50  
60  
68  
73  
78  
88  
98  
108  
118  
128  
148  
168  
188  
198  
328  
648  
998  
1998  
2998

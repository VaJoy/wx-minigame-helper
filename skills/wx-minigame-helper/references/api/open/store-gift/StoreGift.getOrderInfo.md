---
title: "Promise StoreGift.getOrderInfo()"
type: api
category: api/open/store-gift
api: "StoreGift.getOrderInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/StoreGift.getOrderInfo.html
---

# Promise StoreGift.getOrderInfo()

> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

查询订单状态

## 返回值

### Promise.<Object>

订单状态

属性 | 类型 | 说明  
---|---|---  
orderStatus | number | 当前订单对应的状态码  
wishMessage | string | 当前订单对应的祝福语  
  
### orderStatus 状态码

值 | 含义  
---|---  
10 | 支付成功，用户可以领取礼物(小程序/小游戏下单成功初始状态)  
20 | 礼物已经领取  
180 | 礼物超时未领取  
181 | 超时退款  
250 | 订单已取消  
  
### 异常捕获

当获取订单失败的时候，通过 catch 捕获异常，数据结构如下

属性 | 类型 | 说明  
---|---|---  
errCode | number | 错误码  
errMsg | string | 错误信息  
  
其中 errCode 状态码如下

值 | 含义  
---|---  
40097 | 参数错误，请检查订单 id 是否传对  
606662 | 606662 表示当前用户非收礼人  
  
errCode不为0代表订单拉取失败，常见的错误码可见 [链接](<https://developers.weixin.qq.com/doc/channels/API/basics/commErrCode.html>)

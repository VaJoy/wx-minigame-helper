---
title: "虚拟支付2.0道具直购"
type: guide
category: guide/open-ability/payment
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/goods.html
---

## 虚拟支付2.0道具直购

### 接口列表

  * [前端]支付接口：wx.requestMidasPaymentGameItem 
    1. 支付接口与之前一致，参数需要以虚拟支付2.0的为准
    2. offerId：传入2.0的支付应用ID（MP-虚拟支付2.0-基础配置-支付应用ID）
    3. zoneId：传入2.0的分区ID（MP-虚拟支付2.0-基础配置-游戏币/道具配置-分区配置-分区ID） 小程序的非正式版（开发版、体验版）可以使用支付的沙箱环境、正式环境发起支付，小程序的正式版只能使用支付的正式环境发起支付
  * [服务端]查询订单：[pay_v2.queryOrder](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/order/api_pay_v2.queryorder>)

### 道具直购时序图

  1. 道具直购时序图 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6e234c84-4eca-433c-a927-4d1eac0ff40f.png)
  2. 道具直购状态图 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a82ce08d-ff86-41d5-8254-7dc63a3b09bb.png)

### 发起米大师支付

详见[wx.requestMidasPaymentGameItem](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPaymentGameItem.html>)

### 配置道具

在“虚拟支付2.0-基本配置-道具配置”中，基于道具直购能力，配置特定的道具信息。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/e16d0c4f-214c-4ea4-ab3f-07c358c47bfe.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d2bd1024-b7f7-41ef-94c5-8bad7a97c28f.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c355c7a1-fc0e-4d44-b3b9-8fcd95c95f7b.png)

### 道具发货消息协议

  1. 接入消息推送能力,在虚拟支付2.0-基础配置-基础配置-发货推送配置中配置推送url ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0464ef26-7d26-45c8-b650-6d8a30b4ba67.png) 参考文档[小游戏消息推送](<https://docs.qq.com/doc/DR1hhWlpnQXJXWHRh>)。
  2. 在虚拟支付2.0-基础配置-直购配置，**点击开启道具发货推送** ，这一步会模拟推送数据。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ffff2434-c42c-4b31-91f3-37cd620f37e1.png)

### 注意事项（重要！！！）

  1. 同样的发货请求（outTradeNo），可能因为网络原因，会请求多次。我们在有限时间内尽量保证触达一次，直到明确返回发货成功为止
  2. 针对重复的请求，开发者需要自行保证只发货一次，并且回包需要和第一次一样返回发货成功
  3. 通知周期：15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h
  4. 必须要开启道具发货推送才能收到回调请求

### 请求参数

字段 | 类型 | 说明  
---|---|---  
ToUserName | String | 小游戏原始ID  
FromUserName | String | 该事件消息的openid，道具发货场景固定为微信官方的openid  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，道具发货场景固定为：event  
Event | String | 事件类型   
道具直购（商城）场景固定为：  
minigame_h5_goods_deliver_notify   
道具直购（游戏内）场景固定为：  
minigame_game_pay_goods_deliver_notify  
MiniGame | Object | 道具直购发货参数，见下文  
  
  * MiniGame

字段 | 类型 | 说明  
---|---|---  
Payload | String | 携带的具体内容，格式为json，具体内容如下表格Payload（因为这里需要对消息内容统一签名，所以统一把消息内容设计成json格式）  
PayEventSig | String | 见[支付类订阅事件签名算法说明](<https://docs.qq.com/doc/DVVZZdHFsYkttYmxl>)  
  
  * Payload(JSON)

字段 | 类型 | 说明  
---|---|---  
OpenId | String | 接收道具的玩家openid  
Env | Number | 环境配置   
0：现网环境（也叫正式环境）   
1：沙箱环境  
OutTradeNo | String | 订单号  
GoodsInfo | Object | 发货道具  
WeChatPayInfo | Object | 微信支付信息（仅微信支付渠道）  
  
  * GoodsInfo

字段 | 类型 | 说明  
---|---|---  
ProductId | String | 游戏道具id标识  
Quantity | Number | 购买道具数量  
ZoneId | String | 分区ID  
OrigPrice | Number | 物品原始价格 （单位：分）  
ActualPrice | Number | 物品实际支付价格（单位：分）  
Attach | String | 透传数据  
OrderSource | Number | 1 游戏内 2 商城下单 3 商城测试下单  
  
  * WeChatPayInfo

字段 | 类型 | 说明  
---|---|---  
MchOrderNo | String | 微信支付商户单号  
TransactionId | String | 交易单号(微信支付单号)  
  
  * 返回参数

字段 | 类型 | 必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 发送状态。0：成功，其他：失败  
ErrMsg | String | 否 | 错误原因，用于调试。在errcode 非0 的情况下可以返回  
  
  * JSON格式示例

    
    
    {
     "ToUserName": "gh_31b2a1c7e78a",
        "FromUserName": "oUrsf0TSXNtiZjP7JL9UUFiGJzmQ",
        "CreateTime": 1583202606,
    	"MsgType": "event",
    	"Event": "minigame_deliver_h5_pay_products",
    	"MiniGame": {
    		"Payload": "{\"OpenId\":\"to_user_openid\",\"Env\":0,\"GoodsInfo\":{\"ProductId\":\"id_100001\",\"ZoneId\":\"1\",\"OrigPrice\":10,\"ActualPrice\":10,\"Quantity\":1},\"WeChatPayInfo\":{\"MchOrderNo\":\"xxxxx\",\"TransactionId\":\"xxxx\"}}",
    		"PayEventSig": "f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0"
    	}
    }
    

  * 成功返回

    
    
    {"ErrCode":0,"ErrMsg":"Success"}
    

  * 失败返回

    
    
    {"ErrCode":99999,"ErrMsg":"internal error"}

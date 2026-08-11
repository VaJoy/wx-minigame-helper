---
title: "支付类事件订阅"
type: guide
category: guide/open-ability/payment
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/event.html
---

# 支付类事件订阅

## 功能介绍

针对小游戏的后台状态变更事件，平台为其中一部分事件提供了自助订阅的能力。开发者订阅后可以通过消息通道收到对应的事件通知。

## 流程接入

开发者可以进入事件订阅页面，查看相关的订阅事件和对应的接入文档

![](https://mmgame.qpic.cn/image/c5ab2d1adeae82ae1f125b5b45b40d0764cb4171e0db87b5daef4e8503ced11c/0)

按对应事件的文档说明接入完成，确保消息接收模块扩容了适当的容量。点击订阅，便可以进入模拟推送环节

![](https://mmgame.qpic.cn/image/f60b71495625074ffcc327c4151fd45306c2d3b45becc90fcdbcbb30cd2b0c8f/0)

点击**模拟推送** ，此时会按对应事件规定的消息格式发送一条**模拟的消息内容** （消息内容相关字段为随机值）给开发者，若回包格式正确，则测试状态转为**测试通过** ，再次点击订阅则完成订阅。**完成订阅后5分钟左右，若有相关事件产生，则开始真实事件推送。**

## 开发指引

订阅事件主动通知基于微信小游戏统一的消息推送能力，因此在订阅事件时，需要开发者服务器处理好消息推送的协议。

**注意** ：MP配置消息回调地址只有1个，所有消息推送场景都会使用该通道，所以需要先根据`MsgType`与`Event`来判断消息类型，进行相应的处理。本文档只介绍订阅事件相关的消息处理协议，其他消息参考对应文档说明。对未测试验证完成的消息（<MsgType,Event>）建议开发者在现网增加一个白名单转发测试环境的开关，这样可以先把未测试完成的消息转回测试环境处理，方便快速开发和调试。

订阅事件处理流程：

1）检测到**非“模拟推送”** （IsMock为false），按真实业务逻辑进行处理

2）检测到当前为“**模拟推送** ”（IsMock为true），则仅检查字段类型，**不要执行其他逻辑**

不管模拟推送还是非模拟推送，最后的回包均需要按对应的事件类型定义的**回包格式返回** 。

### 接入消息推送能力

若之前已接入跳过该步骤。 接入文档可查阅：[消息推送](<../../base-ability/message-push.md>)

### 消息协议

所有的订阅事件消息按如下格式，只是不同**Event类型** 对应**Payload** 消息结构不一样

#### 请求参数

字段 | 类型 | 说明  
---|---|---  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，事件类通知固定为：`event`  
Event | String | 事件类型  
(1)代币发货完成通知  
`minigame_coin_deliver_completed`  
MiniGame | Object | 具体通知内容  
  
**MiniGame**

字段 | 类型 | 说明  
---|---|---  
IsMock | Bool | 是否是模拟推送  
其余字段根据事件类型区分，详情请见下述文档 |  |   
  
## 支付类订阅事件

### 支付类订阅事件签名算法说明

`pay_event_sig`参数的签名算法，使用“**mp-支付基础配置** ”中的**AppKey** 对支付的请求进行签名，代表请求经过开发者服务端的支付模块发起。签名算法伪代码为：
    
    
    pay_event_sig = to_hex(hmac_sha256(app_key, event + '&' + payload))
    

可以参考以下python示例中的`calc_pay_event_sig`实现，其中：

  * `event`为推送的事件类型，如：`minigame_coin_deliver_completed`

  * `app_key`为当前支付环境(env参数)对应的AppKey，从“**mp-支付基础配置** ”处获取

  * `payload`为本次推送的数据，对应minigame结构内的payload，参考具体推送的请求参数说明

**以调用**`minigame_deliver_h5_pay_products`**接口为例，签名计算如下：**
    
    
    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    """ PayEventSig签名算法计算示例 """
    
    import hmac
    import hashlib
    
    
    def calc_pay_event_sig(event, payload, appkey):
        """ pay_event_sig签名算法
          Args:
              event       - 事件类型 例如 minigame_coin_deliver_completed
              payload     - 事件对应包体，通知消息中的payload 例如{"OpenId":"to_user_openid","OutTradeNo":"xxxxxxx","WeChatPayInfo":{"MchOrderNo":"xxxxxxx","TransactionId":"xxxxxxx"},"Env":0,"CoinInfo":{"ZoneId":"1","TotalPrice":100,"BuyQuantity":1,"OrigPrice":100}}
              appkey      - 对应环境的AppKey
          Returns:
              支付请求签名pay_event_sig
        """
        need_sign_msg = event + '&' + payload
        pay_sig = hmac.new(key=appkey.encode('utf-8'), msg=need_sign_msg.encode('utf-8'),
                           digestmod=hashlib.sha256).hexdigest()
        return pay_sig
    
    

### 游戏币发货完成事件（Event=minigame_coin_deliver_completed）

**注意事项**

  * 游戏币的发货在米大师侧完成，充值完成后米大师会给虚拟游戏币账号增加相应比例的游戏币数量，增加完成后触发此事件的推送。若开发者需要更及时感知游戏币是否发货完成，可以订阅该事件。同时建议保持之前的定期查询游戏币账号余额的逻辑，通过接收推送和主动查询双向来保证更及时处理支付业务逻辑，**不要以outTradeNo对应的下单时的道具信息直接发货，最终需以扣除游戏币成功做为依据。**

  * 若通过小游戏的前端版本变更给[wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>)增加了`outTradeNo`参数，则势必存在一个版本覆盖过程，也就是同时存在不传此参数和传了此参数的支付请求，开发者的事件订阅模块需要正确处理好此类事件：比如`outTradeNo`关联不上业务单，则仅认为对应`openid`发生了充值行为，可以去查询余额变动

[wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>)新增一个参数：`outTradeNo`。对外文档暂时未说明，实际上已支持该参数。

字段 | 类型 | 说明  
---|---|---  
outTradeNo | String | 业务订单号，每个订单号只能使用一次，重复使用会失败。开发者需要确保该订单号在对应游戏下的唯一性，平台会尽可能校验该唯一性约束，但极端情况下可能会跳过对该约束的校验。  
要求32个字符内，只能是数字、大小写字母、符号| `_-*@`组成，不能以下划线(_)开头。  
建议每次调用[wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>)都换新的`outTradeNo`。  
若没有传入，则平台会自动填充一个，并以下划线开头  
  
#### 请求参数

字段 | 类型 | 说明  
---|---|---  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，事件类通知固定为：`event`  
Event | String | 事件类型  
其中(1)代(1)代币发货完成通知  
`minigame_coin_deliver_completed`  
MiniGame | Object | 具体通知内容  
  
**MiniGame**

字段 | 类型 | 说明  
---|---|---  
Payload | String | 携带的具体内容，因为需要使用支付密钥进行签名，因此**格式固定为JSON序列化的结果，与消息推送时配置的格式类型无关** 。即哪怕配置了XML格式，此处的内容也仍然是JSON序列化的结果。  
具体JSON定义见随后的`Payload`说明。  
PayEventSig | String | 见下文**支付请求签名算法说明** （`PayEventSig`）  
IsMock | Bool | 是否是模拟数据，模拟数据完全随机，仅用于校验格式。  
  
**Payload**

字段 | 类型 | 说明  
---|---|---  
OpenId | String | 用户openid  
OutTradeNo | String | 业务订单号  
WeChatPayInfo | Object | 微信支付信息非微信支付渠道可能没有  
Env | Number | 环境配置  
0：现网环境（也叫正式环境）  
1：沙箱环境  
CoinInfo | Object | 游戏币信息  
  
**WeChatPayInfo**

字段 | 类型 | 说明  
---|---|---  
MchOrderNo | String | 微信支付商户单号  
TransactionId | String | 交易单号（微信支付订单号）  
  
**CoinInfo**

字段 | 类型 | 说明  
---|---|---  
ZoneId | String | 分区id  
ActualPrice | Number | 实际支付价格(分)  
BuyQuantity | Number | 购买数量  
OrigPrice | Number | 原始价格(分)  
  
#### 返回参数

字段 | 类型 | 是否必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 发送状态。0：成功，其他：失败  
ErrMsg | String | 否 | 错误原因，用于调试。在errcode非0 的情况下可以返回  
  
#### XML格式示例

**请求**
    
    
    <xml>
        <CreateTime>1583202606</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[minigame_coin_deliver_completed]]></Event>
        <MiniGame>
            <Payload>{"OpenId":"to_user_openid","OutTradeNo":"xxxxxxx","WeChatPayInfo":{"MchOrderNo":"xxxxxxx","TransactionId":"xxxxxxx"},"Env":0,"CoinInfo":{"ZoneId":"1","TotalPrice":100,"BuyQuantity":1,"OrigPrice":100}}</Payload>
            <PayEventSig>f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0</PayEventSig>
            <IsMock>true</IsMock>
        </MiniGame>
    </xml>
    
    

**成功返回**
    
    
    <xml>
        <ErrCode>0</ErrCode>
        <ErrMsg>Success</ErrMsg>    
    </xml>
    
    

**失败返回**
    
    
    <xml>
        <ErrCode>99999</ErrCode>
        <ErrMsg>internal error</ErrMsg>    
    </xml>
    
    

#### JSON格式示例

**请求**
    
    
    {
    	"CreateTime": 1583202606,
    	"MsgType": "event",
    	"Event": "minigame_coin_deliver_completed",
    	"MiniGame": {
    		"Payload": "{\"OpenId\":\"to_user_openid\",\"OutTradeNo\":\"xxxxxxx\",\"WeChatPayInfo\":{\"MchOrderNo\":\"xxxxxxx\",\"TransactionId\":\"xxxxxxx\"},\"Env\":0,\"CoinInfo\":{\"ZoneId\":\"1\",\"TotalPrice\":100,\"BuyQuantity\":1,\"OrigPrice\":100}}",
    		"PayEventSig": "f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0"
    	}
    }
    

**成功返回**
    
    
    {"ErrCode":0,"ErrMsg":"Success"}
    

**失败返回**
    
    
    {"ErrCode":99999,"ErrMsg":"internal error"}
    

### 退款成功事件（Event=minigame_pay_refund_succ_notify)

#### 请求参数

字段 | 类型 | 说明  
---|---|---  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，事件类通知固定为：`event`  
Event | String | 事件类型  
(2)退款成功通知  
`minigame_pay_refund_succ_notify`  
MiniGame | Object | 具体通知内容  
  
**MiniGame**

字段 | 类型 | 说明  
---|---|---  
Payload | String | 携带的具体内容，因为需要使用支付密钥进行签名，因此**格式固定为JSON序列化的结果，与消息推送时配置的格式类型无关** 。即哪怕配置了XML格式，此处的内容也仍然是JSON序列化的结果。  
PayEventSig | String | 见下文**支付请求签名算法说明** （`PayEventSig`）  
IsMock | Bool | 是否是模拟数据，模拟数据完全随机，仅用于校验格式。  
  
**Payload**

字段 | 类型 | 说明  
---|---|---  
RefundId | String | 小游戏退款单号  
RefundAmount | Number | 退款金额，单位分  
RefundSource | Number | 退款来源  
1：平台  
2：MP提交  
3：API提交  
Env | Number | 环境配置  
0：现网环境（也叫正式环境）  
1：沙箱环境  
OutTradeNo | String | 业务订单号  
WeChatPayInfo | Object | 退款单对应支付订单的微信支付信息非微信支付渠道可能没有  
  
**WeChatPayInfo**

字段 | 类型 | 说明  
---|---|---  
MchOrderNo | String | 微信支付商户单号  
TransactionId | String | 交易单号（微信支付订单号）  
  
#### 返回参数

字段 | 类型 | 是否必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 发送状态。0：成功，其他：失败  
ErrMsg | String | 否 | 错误原因，用于调试。在errcode非0 的情况下可以返回  
  
#### XML格式示例

**请求**
    
    
    <xml>
        <CreateTime>1583202606</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[minigame_pay_refund_succ_notify]]></Event>
        <MiniGame>
            <Payload>{"RefundId":"refund_id","RefundAmount":100,"RefundSource":1,"Env":0, "WeChatPayInfo":{"MchOrderNo":"xxxxxxx","TransactionId":"xxxxxxx"}}</Payload>
            <PayEventSig>f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0</PayEventSig>
            <IsMock>true</IsMock>
        </MiniGame>
    </xml>
    
    

**成功返回**
    
    
    <xml>
        <ErrCode>0</ErrCode>
        <ErrMsg>Success</ErrMsg>    
    </xml>
    
    

**失败返回**
    
    
    <xml>
        <ErrCode>99999</ErrCode>
        <ErrMsg>internal error</ErrMsg>    
    </xml>
    
    

#### JSON格式示例

**请求**
    
    
    {
    	"CreateTime": 1583202606,
    	"MsgType": "event",
    	"Event": "minigame_pay_refund_succ_notify",
    	"MiniGame": {
    		"Payload": "{\"RefundId\":\"refund_id\",\"RefundAmount\":100,\"RefundSource\":1,\"Env\":0,\"WeChatPayInfo\":{\"MchOrderNo\":\"xxxxxxx\",\"TransactionId\":\"xxxxxxx\"}}",
    		"PayEventSig": "f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0"
    	}
    }
    
    

**成功返回**
    
    
    {"ErrCode":0,"ErrMsg":"Success"}
    
    

**失败返回**
    
    
    {"ErrCode":99999,"ErrMsg":"internal error"}
    

### 充值中心发货完成事件（Event=minigame_recharge_center_coin_deliver_completed）

#### 请求参数

字段 | 类型 | 说明  
---|---|---  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，事件类通知固定为：event  
Event | String | 事件类型：  
(1) 充值中心发货完成通知  
• **minigame_recharge_center_coin_deliver_completed**  
MiniGame | Object | 具体通知内容  
  
**MiniGame**

字段 | 类型 | 说明  
---|---|---  
Payload | String | 携带的具体内容，因为需要使用支付密钥进行签名，**因此格式固定为JSON序列化的结果，与消息推送时配置的格式类型无关** 。即哪怕配置了XML格式，此处的内容也仍然是JSON序列化的结果。  
  
具体JSON定义见随后的Payload 说明。  
PayEventSig | String | 见下文**支付请求签名算法说明** （PayEventSig）  
IsMock | bool | 是否是模拟数据，模拟数据完全随机，只用于校验格式。  
  
**Payload**

字段 | 类型 | 说明  
---|---|---  
OpenId | String | 用户openid  
OutTradeNo | String | 业务订单号  
WeChatPayInfo | Object | 微信支付信息 非微信支付渠道可能没有  
Env | Number | 环境配置  
0：现网环境（也叫正式环境）  
1：沙箱环境  
CoinInfo | Object | 游戏币信息  
  
**WeChatPayInfo**

字段 | 类型 | 说明  
---|---|---  
MchOrderNo | String | 微信支付商户单号  
TransactionId | String | 交易单号（微信支付订单号）  
  
**CoinInfo**

字段 | 类型 | 说明  
---|---|---  
ActualPrice | Number | 实际支付价格(分)  
BuyQuantity | Number | 购买数量  
OrigPrice | Number | 原始价格(分)  
  
#### 返回参数

字段 | 类型 | 是否必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 发送状态。0：成功，其他：失败  
ErrMsg | String | 否 | 错误原因，用于调试。在errcode非0的情况下可以返回  
  
#### XML格式示例

**请求**
    
    
    <xml>
        <CreateTime>1583202606</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[minigame_recharge_center_coin_deliver_completed]]></Event>
        <MiniGame>
            <Payload>{"OpenId":"to_user_openid","OutTradeNo":"xxxxxxx","WeChatPayInfo":{"MchOrderNo":"xxxxxxx","TransactionId":"xxxxxxx"},"Env":0,"CoinInfo":{"TotalPrice":100,"BuyQuantity":1,"OrigPrice":100}}</Payload>
            <PayEventSig>f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0</PayEventSig>
            <IsMock>true</IsMock>
        </MiniGame>
    </xml>
    
    

**成功返回**
    
    
    <xml>
        <ErrCode>0</ErrCode>
        <ErrMsg>Success</ErrMsg>    
    </xml>
    
    

**失败返回**
    
    
    <xml>
        <ErrCode>99999</ErrCode>
        <ErrMsg>internal error</ErrMsg>    
    </xml>
    
    

#### JSON格式示例

**请求**
    
    
    {
    	"CreateTime": 1583202606,
    	"MsgType": "event",
    	"Event": "minigame_recharge_center_coin_deliver_completed",
    	"MiniGame": {
    		"Payload": "{\"OpenId\":\"to_user_openid\",\"OutTradeNo\":\"xxxxxxx\",\"WeChatPayInfo\":{\"MchOrderNo\":\"xxxxxxx\",\"TransactionId\":\"xxxxxxx\"},\"Env\":0,\"CoinInfo\":{\"TotalPrice\":100,\"BuyQuantity\":1,\"OrigPrice\":100}}",
    		"PayEventSig": "f749f67b751fa80f27ddc0b7c8d2821aeda162ea22b323cd64a2c8056c2736f0"
    	}
    }
    
    

**成功返回**
    
    
    {"ErrCode":0,"ErrMsg":"Success"}
    
    

**失败返回**
    
    
    {"ErrCode":99999,"ErrMsg":"internal error"}
    
    

### 注意事项

12小时内总共会发起13次通知，通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h，

### 温馨提示

  1. minigame_pay_refund_succ_notify事件包括虚拟支付（游戏币）退款，以及道具直购退款

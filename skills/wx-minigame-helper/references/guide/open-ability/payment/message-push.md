---
title: "小游戏消息推送"
type: guide
category: guide/open-ability/payment
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/message-push.html
---

# 小游戏消息推送

## 接入小游戏消息推送

首先您得告诉我们您的服务器地址

### 第一步：确定你要接入的推送能力

小游戏目前提了两种消息推送能力，分别是页面（[微信公众平台](<https://mp.weixin.qq.com/>)）「功能」-「虚拟支付2.0」-「基本配置」-「基础配置」下的 “**事件订阅配置** ” 和“**发货推送配置** ”。

  * 事件订阅配置目前用于“[代币发货事件](<event.md>)”等事件通知；

  * 发货推送配置目前用于“**[直购道具](<goods.md>)** ”和“**[商城道具](<https://developers.weixin.qq.com/minigame/introduction/commercialization/virtual-payment/store-group>)** ”的发货推送

### 第二步：填写服务器配置

![](https://mmgame.qpic.cn/image/77ae51f437435506992e3852aa7ba2227b011a423ee73a65387f5fe973b63053/0)

以发货推送配置为例子，点击“**配置** ”填写服务器地址（URL）、令牌（Token） 和 消息加密密钥（EncodingAESKey）等信息。

![](https://mmgame.qpic.cn/image/e1d1cba2b09706ae2ef0f6ecc3f76a111e951241b12d262ca78372a982ff3ff2/0)

  * URL: 开发者用来接收道具发货消息事件的接口 URL。开发者所填写的URL 必须以 http:// 或 https:// 开头，分别支持 80 端口和 443 端口。（如果你的url请求时间超过3s，会发生超时错误）

  * Token: 可由开发者可以任意填写，用作生成签名（该 Token 会和接口 URL 中包含的 Token 进行比对，从而验证安全性）。

  * EncodingAESKey: 由开发者手动填写或随机生成，将用作消息体加解密密钥。

同时，开发者可选择消息加解密方式：明文模式、和安全模式（推荐）。注意：**消息数据格式仅支持JSON 格式** ,使用安全模式开发者需要对收到的消息进行解密，但回复微信服务器的消息不需要加密。

### 第三步：验证消息来自微信服务器

![](https://mmgame.qpic.cn/image/531c4b31be6b6c79d166aee020e1649ad7259e7d2b54091927e4935e697d4f12/0)

点击“模拟推送”，微信服务器会发送**GET** 请求到填写的服务器地址URL上，GET请求(例如: https://your_host?signature=6298f2b139f33959c59d69da33f5c4215d9df26a&timestamp=1700735027&nonce=50328042&echostr=Mzi3wDcVa5uI)携带**参数** 如下表所示：

参数 | 描述  
---|---  
signature | 微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。  
timestamp | 时间戳  
nonce | 随机数  
echostr | 随机字符串  
  
开发者通过检验 signature 对请求进行校验（下面有校验方式）**。若确认此次 GET 请求来自微信服务器，请原样返回 echostr 参数内容，则接入生效，页面的“测试状态”会显示“已通过”，否则接入失败。**

签名校验流程如下：

  1. 将token、timestamp、nonce三个参数进行字典序排序

  2. 将三个参数字符串拼接成一个字符串进行sha1加密

  3. 开发者获得加密后的字符串可与signature对比，确认该请求来源于微信

检验signature的PHP示例代码：
    
    
    private function checkSignature()
    {
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
    
        $token = TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );
    
        if ($tmpStr == $signature ) {
            return true;
        } else {
            return false;
        }
    }
    
    

PHP示例代码下载：下载链接[文档](<../../base-ability/message-push.md>)

### 第四步：配置测试链接

![](https://mmgame.qpic.cn/image/4c46259073ba61a86e2c1ee04078051aaaee266cf379b97575816899addf11f7/0)

**如果开发者有测试需求，可以点击“修改”生成一个发布中的版本，发布中的版本可以添加白名单用于测试。**

![](https://mmgame.qpic.cn/image/af1445b3b59ad437cfcbd44b91e0c8d7da5c64ed6b539d5ad5e761254653f220/0)

服务器配置完成后，有的推送业务（例如“直购道具”和“商城道具”的发货推送）还需要进行业务消息的推送测试才可以开启推送，操作流程看下文的消息推送测试。

## 消息推送协议

### 直购/商城道具发货消息

#### 请求参数

参数 | 类型 | 描述  
---|---|---  
ToUserName | String | 小游戏原始ID  
FromUserName | String | 该事件消息的openid，道具发货场景固定为微信官方的openid  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，道具发货场景固定为：event  
Event | String | 事件类型  
商城道具场景固定为：`minigame_h5_goods_deliver_notify`  
道具直购（游戏内）场景固定为：`minigame_game_pay_goods_deliver_notify`  
MiniGame | Object | 道具直购发货参数  
  
**MiniGame**

字段 | 类型 | 说明  
---|---|---  
Payload | String | 携带的具体内容，格式为json，具体内容如下表格Payload（因为这里需要对消息内容统一签名，所以统一把消息内容设计成json格式）  
PayEventSig | String | 见 [支付请求签名算法说明](<https://docs.qq.com/doc/DVVZZdHFsYkttYmxl>) （PayEventSig）  
IsMock | Bool | True: 模拟测试推送 False：真实推送  
  
**Payload（JSON）**

字段 | 类型 | 说明  
---|---|---  
OpenId | String | 接收道具的玩家openid  
Env | Number | 环境配置  
0：现网环境（也叫正式环境）  
1：沙箱环境  
OutTradeNo | String | 订单号  
GoodsInfo | Object | 发货道具  
  
**GoodsInfo**

字段 | 类型 | 说明  
---|---|---  
ProductId | String | 游戏道具id标识  
Quantity | Number | 购买道具数量  
ZoneId | String | 分区  
OrigPrice | Number | 物品原始价格 （单位：分）  
ActualPrice | Number | 物品实际支付价格（单位：分）  
Attach | String | 透传数据  
OrderSource | Number | 1 游戏内 2 商城下单 3 商城测试下单  
  
#### 返回参数

字段 | 类型 | 是否必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 发送状态。0：成功，其他：失败 todo  
ErrMsg | String | 否 | 错误原因，用于调试。在errcode非0 的情况下可以返回  
  
## 消息推送测试

在完成相应业务的消息推送测试后，才会开启对应业务的消息推送服务，以“直购道具”的发货推送为例。用户在（[微信公众平台](<https://mp.weixin.qq.com/>)）「功能」-「虚拟支付2.0」-「基本配置」-「直购配置」拉到页面最下面，有个开启道具发货推送的选项。

![](https://mmgame.qpic.cn/image/ac4e81f0f95ec87c0c197ab8d13a37ef0cac427901812e48ed9a5750cf60f79e/0) ![](https://mmgame.qpic.cn/image/2323ff18737fe065e7f2564ebd6c06c66abb685f8c5f68e7ac7b40c2758a9c32/0)

点击“开启推送”-“执行测试”后，微信服务器会发送以下消息内容到开发者在页面「功能」-「虚拟支付2.0」-「基本配置」-「基础配置」- 「发货推送配置」填写的服务器。安全模式是指开发者在 “发货推送配置”的消息加密方式中选择了“安全模式”， 明文模式是指开发者在 “发货推送配置”的消息加密方式中选择了“明文模式”

![](https://mmgame.qpic.cn/image/fe18d4016caaa7d84dc6ad656890bdc68a381a524ab303cdd4073f2db8263c3d/0)

### URL参数：

微信服务器发往开发者服务器的请求会附带如下的url参数，其中signature用于验证消息来自微信服务器， msg_signature, nonce, timestamp用于安全模式下对消息内容的解密。

参数 | 是否必填 | 描述  
---|---|---  
signature | 是 | 微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。  
timestamp | 是 | 时间戳  
nonce | 是 | 随机数  
msg_signature | 否 | 安全模式会有此参数， 消息体签名串，用于安全模式的加解密  
encrypt_type | 否 | 安全模式会有此参数，值固定为"aes"  
  
### 消息解密

如果您选择了安全模式，公众平台推送的消息格式如下
    
    
    {   "Encrypt":"$encrpy",
        "ToUserName":"$your_username"
    }
    
    

"$encrypy"是加密后的密文， 这里的加密方法跟小程序消息推送的[加密方法](<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/Message_encryption_and_decryption>)一致，开发者将其解密后即可得到原始消息。对于小游戏推送消息，不管是否加密， 开发者回复明文消息即可。(python3 [解密代码下载](<https://mmgame.qpic.cn/resource/26bd1d65bb54d1e7fe10a93e6ab63a0e34c8d022d6a7be9ee99bcedb9d22f6ef>))

### 消息协议格式：

#### 直购道具发货

**服务器发送：**
    
    
    {
        "ToUserName": "$your_username",
        "FromUserName": "oUrsf0TSXNtiZjP7JL9UUFiGJzmQ",
        "CreateTime": $current_timestamp,
    	"MsgType": "event",
    	"Event": "minigame_game_pay_goods_deliver_notify",
    	"MiniGame": {
    		"Payload": "{\"OpenId\":\"example_open_id\",\"OutTradeNo\":\"example_out_trade_no\",\"WeChatPayInfo\":{\"MchOrderNo\":\"example_mch_order_no\",\"TransactionId\":\"example_transaction_id\"},\"Env\":1,\"GoodsInfo\":{\"ProductId\":\"example_product_id\",\"Quantity\":1,\"ZoneId\":\"example_zone_id\",\"OrigPrice\":1000,\"ActualPrice\":1000,\"Attach\":\"example_attach_data\",\"OrderSource\":1}}",
    		"PayEventSig": "$your_pay_event_sig",
            "IsMock":true
    	}
    }
    
    

**需要返回**
    
    
    {"ErrCode":0,"ErrMsg":"Success"}
    

#### 商城道具发货

**服务器发送：**
    
    
    {
        "ToUserName": "$your_username",
        "FromUserName": "oUrsf0TSXNtiZjP7JL9UUFiGJzmQ",
        "CreateTime": $current_timestamp,
    	"MsgType": "event",
    	"Event": "minigame_deliver_h5_pay_products",
    	"MiniGame": {
    		"Payload": "{\"OpenId\":\"example_open_id\",\"OutTradeNo\":\"example_out_trade_no\",\"WeChatPayInfo\":{\"MchOrderNo\":\"example_mch_order_no\",\"TransactionId\":\"example_transaction_id\"},\"Env\":1,\"GoodsInfo\":{\"ProductId\":\"example_product_id\",\"Quantity\":1,\"ZoneId\":\"example_zone_id\",\"OrigPrice\":1000,\"ActualPrice\":1000,\"Attach\":\"example_attach_data\",\"OrderSource\":2}}",
    		"PayEventSig": "$your_pay_event_sig",
            "IsMock":true
    	}
    }
    
    

**需要返回**
    
    
    {"ErrCode":0,"ErrMsg":"Success"}

---
title: "小游戏礼包"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-gift.html
---

# 小游戏礼包

## 功能介绍

小游戏开发者的游戏内道具，可通过接入平台「礼包系统」，在微信平台各场景发放游戏礼包。 发放场景包括：游戏圈、活动运营工具、发现-游戏-福利中心、广告、搜索等

![](https://res8.wxqcloud.qq.com.cn/wxdoc/bfc8f5ee-534a-4662-919a-9262f8874a88.jpg)

## 功能接入

道具礼包发货基于微信小游戏统一的消息推送能力，因此在使用礼包中心的发货回调时，需要开发者服务器处理好消息推送的协议。 注意：MP 配置消息回调地址只有 1 个，所有消息推送场景都会使用该通道，所以需要先根据 MsgType 与 Event 来判断消息类型，进行相应的处理。这里，只介绍道具发货相关消息的处理协议，其他消息参考对应文档说明。

### 1\. 接入消息推送能力

参考 [接入文档](<../../base-ability/message-push.md>)。如果已经接入过，可跳过该步骤。

### 2\. 道具发货消息协议

#### 请求

字段 | 类型 | 说明  
---|---|---  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，道具发货场景固定为：event  
Event | String | 事件类型， 道具发货场景固定为：minigame_deliver_goods  
MiniGame | Object | 发货参数  
  
#### MiniGame

字段 | 类型 | 说明  
---|---|---  
OrderId | String | 订单唯一 id。 开发者服务器可用于消息去重  
IsPreview | Number | 是否预览调试  
ToUserOpenid | Number | 接收道具的玩家 openid  
Zone | Number | 分区。1001: iOS, 2001: Android、PC  
GiftTypeId | Number | 发货礼包类型：1- 每日登录礼包 2- 周末福利日礼包 3- 日常版本更新活动 4-游戏圈活跃任务 6- 每日在线5分钟礼包 8- 游戏圈创作任务 9- 付费用户礼包 11- 游戏圈每日抽奖 13- 付费用户召回礼包 14- 游戏圈评论抽奖 18- 给朋友送道具 19-送道具任务奖励 20- 擂台赛组件 21-广告新注册礼包 22-游戏圈每日签到礼包 23- PC专属礼包 26-权益页礼包 27-平台社交红包活动  
GiftId | String | 礼包 ID（可在 MP 配置好礼包后，提前获取）  
SendTime | Number | 玩家接收道具的时间  
GoodsList | Array of GoodsInfo | 发货列表  
  
#### GoodsInfo

字段 | 类型 | 说明  
---|---|---  
Id | String | 游戏道具 id 标识  
Num | Number | 发送的道具数量  
  
#### 返回参数

字段 | 类型 | 是否必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 发送状态。0：成功，其他：失败  
ErrMsg | String | 否 | 错误原因，用于调试。在 errcode 非 0 的情况下可以返回  
SubErrCode | Number | 否 | 具体失败错误码，见 SubErrCode 枚举值。指定的失败场景返回指定值，对应平台不同的重试、熔断策略  
  
#### SubErrCode 枚举值

值 | 说明  
---|---  
172935494 | 未注册用户，无法发货  
  
#### XML 格式示例

##### 请求
    
    
    <xml>
        <CreateTime>1583202606</CreateTime>
        <MsgType><![event]]></MsgType>
        <Event><![CDATA[minigame_deliver_goods]]></Event>
        <MiniGame>
            <OrderId>r_123</OrderId>
            <IsPreview>1</IsPreview>
            <ToUserOpenid>to_user_openid</ToUserOpenid>
            <Zone>1001</Zone>
            <GiftTypeId>1</GiftTypeId>
            <GiftId>gift_id_xxx</GiftId>
            <SendTime>1583202600</SendTime>
            <GoodsList>
                <Id>id_100001</Id>
                <Num>3</Num>
            </GoodsList>
        </MiniGame>
    </xml>
    
    

##### 返回
    
    
    <xml>
        <ErrCode>0</ErrCode>
        <ErrMsg>Success</ErrMsg>
    </xml>
    

#### JSON 格式示例

##### 请求
    
    
    {
        "CreateTime": 1583202606,
        "MsgType": "event",
        "Event": "minigame_deliver_goods",
        "MiniGame": {
            "OrderId": "r_123",
            "IsPreview": 1,
            "ToUserOpenid": "to_user_openid",
            "Zone" : 1001,
            "GiftTypeId" : 1,
            "GiftId" : "gift_id_xxx",
            "SendTime" : 1583202600,
            "GoodsList": [{ "Id": "id_100001", "Num": 3 }]
        }
    }
    

##### 返回
    
    
    {"ErrCode":0,"ErrMsg":"Success"}
    
    

### 注意事项

道具发货成功需要返回明确的回包，参考前面的协议说明。若发货应答不符合规范、超时或者返回错误码非 0，将重新发送通知。在通知一直不成功的情况下，会发起多次通知，通知频率为 2^n 分钟(2 分钟/4 分钟/8 分钟……/1024 分钟)。 如果发货失败超过一定阈值，将触发平台的熔断策略。该礼包/道具 将可能会被停用。停用后，需开发者重新调试、测试通过后上线。

## 功能配置步骤

### 第 1 步 - 道具配置

  * 开发者可在「MP 后台-功能-运营功能管理-游戏礼包道具」，添加游戏道具。
  * 道具 ID 为该道具的唯一标识，后续不可以修改。道具名称、icon 将用于各场景的前端展示。
  * 道具名称 不可以有重名。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c6603fd5-0fbf-4497-8a2b-66436c715b59.jpg)

### 第 2 步 - 道具测试、发布

  * 发布前，道具需要先在 MP 上发货成功及测试通过后才可以提交。提交后，平台会进行审核，审核通过后自动发布。发布后才可配置礼包。审核需要 3-7 工作日。
  * 发布后，开发者仍然可以通过 MP 进行道具测试，但测试失败次数较多时，可能导致道具被系统停用。停用后，需要重新测试成功才可以上线。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ab9bc763-01fb-4dd2-8979-1482ccd3a5e4.jpg)

### 第 3 步 - 礼包配置、测试、发布

新建配置礼包，需要满足 信用分>90 且 累计注册用户>1000。如果需要修改礼包内容，需先停用礼包，重新建礼包。

已支持开发者配置礼包类型：

  * 每日签到礼包：打开游戏圈福利，即可领取。发布后,C 端立即生效。开发者需要先配置「每日签到礼包」，才可配置其他小游戏礼包功能
  * 周六福利日礼包：每周六打开游戏圈可领取。发布后,C 端立即生效。
  * 每日登陆礼包：今日登录游戏后可领。发布后,C 端立即生效。
  * 游戏圈礼包：用于 [游戏圈](<../community/game-club.md>) 内，配置话题任务等。新建礼包，需要游戏圈加圈用户>1000。发布后，需在「游戏圈配置」关联活动后才生效。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/003100b0-3d5c-4c50-bc6f-ad2b53cd03d1.jpg)

### 注意

  * 开发者需要保证礼包发货稳定且真实有效发放，如发货接口调用失败频繁或用户投诉，平台将对对礼包停用。

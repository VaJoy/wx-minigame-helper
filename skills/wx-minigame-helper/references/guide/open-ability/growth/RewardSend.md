---
title: "社交玩法激励包"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/RewardSend.html
---

# 社交玩法激励包  
  
## 介绍

针对接入社交玩法的游戏，平台提供 用户运营激励，助力游戏内容联动 及 用户活跃召回。

用户运营激励包，下发规则参考社区活动规则。

  * [社交玩法激励活动——第 2 期 2026 年 7 月](<https://developers.weixin.qq.com/community/minigame/doc/00064632598388ccc3353413666001?blockType=2>)
  * [社交玩法激励活动——第 1 期 2026 年 2 月](<https://developers.weixin.qq.com/community/minigame/doc/000c2665ea48282d2584abd1369401?blockType=2>)

## 接入指引

## 1\. 查看 & 使用激励

位置：运营功能管理 - 基础配置 - 社交玩法激励包

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c73597a1-b72c-4c8d-9543-b3c20c4f9251.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/1618ce85-6c30-49b4-9c58-b5e62c96e545.png)

## 2\. 配置激励资源包

点击「新建奖励」，配置 选择 使用场景「自定义接口」或 「擂台赛组件」及规模。不同的激励包，可用场景范围不同。

  * **总数量** ：配置的总上限，可修改
  * **已发放数据** ：实时的已发放数量

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ba18b013-1374-42db-9c9c-862a8da08ba2.png)

## 3\. 擂台赛场景配置使用

  * 接入擂台赛组件[（接入文档）](<../gameplay/tournament.md>)，最低版本要求：从基础库 3.16.1 开始支持
  * 完成玩法配置，位置：MP-运营功能管理-基础配置-游戏玩法 ID 设置
  * 完成擂台赛配置，位置：MP-能力地图-擂台赛组件 
    * 完成基础配置
    * 关联奖励库。添加「社交玩法激励」至 活动奖励库中

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a90dde74-524e-4f47-9fca-006a418cf20a.png)

  * 将 激励包 配置进 擂主/挑战者 相应奖励位置处。必得奖励建议配置游戏道具。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/7940e0eb-f11c-476d-99f3-3a6cec87e412.png)

  * 完成擂台赛整体测试发布流程

## 4\. 自定义接口使用

游戏内自定义的社交玩法，通过接口发放平台激励。（需 MP 配置奖励后，再调用接口）

### 接口说明

### 1、PreSendCheck

发放前预校验接口，用于在实际发放前判断是否建议向用户发放平台激励，不触发实际发放。

#### 请求方法

`POST`

#### 请求路径
    
    
    https://api.weixin.qq.com/wxa/game/reward/pre_send_check?access_token=ACCESS_TOKEN
    

#### 请求参数 - Query

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
access_token | string | - | 是 | [接口调用凭证](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)  
  
#### 请求参数 - Body

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
reward_id | string | - | 是 | 从 mp 平台创建的奖励 id  
openid | string | - | 是 | 用户 openid  
  
#### 响应参数

属性 | 类型 | 说明  
---|---|---  
errcode | int32 | 错误码  
errmsg | string | 错误提示信息  
send_suggest_level | uint32 | 发放建议等级，详见下方说明  
  
##### send_suggest_level 说明

值 | 说明  
---|---  
0 | 不可发放  
1 | 不建议发放  
2 | 可发放  
  
#### 错误码说明

错误码 | 说明  
---|---  
0 | 请求成功  
41001 | access_token missing（接口调用凭证缺失）  
-1 | 系统繁忙，此时请开发者稍候再试  
-10197401 | reward_id 为空  
-10197402 | openid 为空  
-10197404 | openid 解码失败，请检查 openid 是否合法  
-10197405 | 用户不属于当前游戏  
-10197406 | 奖励不存在  
-10197407 | 奖励未发布  
-10197408 | 奖励已过期  
-10197410 | 获取 appuin 失败  
-10197412 | 奖励场景不支持  
  
### 2、CreateRewardSendOrder

创建奖励发放订单接口

#### 请求方法

`POST`

#### 请求路径
    
    
    https://api.weixin.qq.com/wxa/game/reward/create_reward_send_order?access_token=ACCESS_TOKEN
    

#### 请求参数 - Query

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
access_token | string | - | 是 | [接口调用凭证](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)  
  
#### 请求参数 - Body

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
reward_id | string | - | 是 | 从 mp 平台创建的奖励 id  
openid | string | - | 是 | 用户 openid  
serial | string | - | 是 | 序列号，用于幂等重试  
  
#### 响应参数

属性 | 类型 | 说明  
---|---|---  
errcode | int32 | 错误码  
errmsg | string | 错误提示信息  
order_id | string | 返回的订单 id  
  
#### 错误码说明

错误码 | 说明  
---|---  
0 | 请求成功  
41001 | access_token missing（接口调用凭证缺失）  
-1 | 系统繁忙，此时  
-10197401 | reward_id 为空  
-10197402 | openid 为空  
-10197404 | openid 解码失败，请检查 openid 是否合法  
-10197405 | 用户不属于当前游戏  
-10197406 | 奖励不存在  
-10197407 | 奖励未发布  
-10197408 | 奖励已过期  
-10197410 | 获取 appuin 失败  
-10197412 | 奖励场景不支持  
  
### 3、PageManager

使用 [pageManager](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/PageManager.html>) 打开对应 openlink，在 query 中传入调用发奖接口获取的 orderId，调用通用领奖组件执行后续操作。监听组件抛出的事件，做出对应响应。

社交用户运营激励，openlink 为固定值：1U0tLZIkbBQ1I6TYL_EMir3pqeAk8UYTlfESyNbSwQI0sBiOZl96AuLqCu8a5SCSzB1IJ_e85-XYQ7w30Mt78A

#### 代码示例
    
    
    const pageManager = wx.createPageManager();
    const getRewardLoadReq = {
      openlink: "1U0tLZIkbBQ1I6TYL_EMir3pqeAk8UYTlfESyNbSwQI0sBiOZl96AuLqCu8a5SCSzB1IJ_e85-XYQ7w30Mt78A",
      query: {
        orderId: 'xxxxxxxxxxxx'
      }
    };
    pageManager.load(getRewardLoadReq).then((res) => {
      // 加载成功调用显示
      pageManager.show();
    
      // 监听事件，根据 res 响应
      pageManager.on('rewardInfoUpdated', (res) => {
        console.log('rewardInfoUpdated:', res);
      });
    });
    

#### 字段说明

字段 | 类型 | 必填 | 说明  
---|---|---|---  
openlink | string | 是 | openlink 地址，固定值  
query.orderId | string | 是 | 发奖接口返回的订单 ID  
query.isForceOpen | boolean | 否 | false，则无论奖励是否已经领取成功，都走调用流程，例如蓝包已经领取但是还想查看  
  
#### 事件监听

##### rewardInfoUpdated，奖励信息更新

字段 | 类型 | 说明  
---|---|---  
orderId | string | 订单号  
rewardType | number | 奖励类型枚举  
ctime | number | 下订单时间  
isOrderSuccess | boolean | 是否下单成功  
isGetRewardSuccess | boolean | 是否奖励领取成功（商家券无法获取状态）  
  
##### currentStepUpdated，当前阶段更新

字段 | 类型 | 必填 | 说明  
---|---|---|---  
orderId | string | 是 | 订单号  
currentStep | number | 是 | 阶段枚举  
presentOrderId | string | 否 | 蓝包相关标记  
amount | number | 否 | 现金奖励金额单位为分（可选）  
  
#### 类型枚举

##### 奖励类型

值 | 说明  
---|---  
2 | 现金  
25 | 蓝包  
28 | 微信商家券  
31 | 红包封面  
32 | 微信小店平台券  
  
##### 2.4. 当前阶段

值 | 说明  
---|---  
1 | 无后续流程，可销毁组件实例  
2 | 未知错误  
20 | 打开蓝包  
21 | 打开蓝包成功  
22 | 打开蓝包失败  
30 | 打开提现  
31 | 打开提现成功  
32 | 打开提现失败  
40 | 打开商家券  
41 | 打开商家券成功  
42 | 打开商家券失败  
50 | 打开红包封面  
51 | 打开红包封面成功  
52 | 打开红包封面失败  
60 | 打开小店平台券  
61 | 打开小店平台券成功  
62 | 打开小店平台券失败

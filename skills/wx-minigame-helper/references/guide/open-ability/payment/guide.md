---
title: "技术手册-虚拟支付篇"
type: guide
category: guide/open-ability/payment
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/guide.html
---

## 技术手册-虚拟支付篇

### 背景

对于2022年11月5日后新开通虚拟支付能力的小游戏，均为虚拟支付2.0，在此前开通的为虚拟支付1.0，并且在底层默认对接了虚拟支付2.0。

小游戏虚拟支付从1.0升级到2.0，基础支付能力从游戏币扩展到道具直购、商城服务，本文旨在针对游戏内不同的付费场景提供选型指导，以及在开发者构建支付服务中的一些关键细节提供建议，期望与开发者一道共同努力提升玩家的付费体验。

### 术语定义

  * 游戏币：游戏内的虚拟货币，可以用于进一步兑换游戏内的物品或者服务。比如：《王者荣耀》的点券、《欢乐斗地主》的钻石。游戏内可能还有二级虚拟货币，比如《欢乐斗地主》的钻石兑换的欢乐豆，欢乐豆可以进一步兑换游戏内的“记牌器”道具。本文特指小游戏提供的“游戏币”。
  * 道具：游戏内的虚拟道具，用于增强游戏体验或者提供额外的游戏服务。比如：游戏内的武器、装备、资源。游戏币某种情况下也可以看做一种特殊的“道具”。
  * MP：使用小游戏账号登录mp.weixin.qq.com后的管理控制台

### 开通流程

### 1\. 支付进件流程

[虚拟支付2.0协议签署指引](<virtual-payment2.md>)

### 2\. 开发流程

### 2.1.付费场景

游戏内的付费场景可以分为两大类：（1）游戏币（2）道具直购

### 2.1.1. 游戏币场景

玩家通过现金购买游戏币，且可以直接感知到游戏币账户存在的场景，比如：购买游戏币后可以查看到游戏币的余额，以及使用游戏币兑换游戏内的其他道具。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/f5983501-990a-4e02-93b3-cd29b190b45a.png)

### 2.1.2. 道具直购场景

玩家通过游戏币或者现金购买道具的场景。比如：《欢乐斗地主》的语音包、装扮 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d8af3bc1-7352-4c9f-a46d-7f90d2d040e0.png) 同一个游戏可能出现多类付费混合的情况，既有游戏币场景，又有道具直购场景。当然也有一些游戏仅有道具直购场景，即对玩家来说都是直接通过现金购买道具。

### 2.2. 支付能力

### 2.2.1. 游戏币充值

[游戏币托管能力](<coins.md>)玩家的游戏币账户托管在平台，由平台负责提供游戏币充值能力及安全、可靠的虚拟账户服务的一种支付能力。

  * 开发者可以通过wx.requestMidasPayment为玩家提供游戏币购买入口，扣费成功后由平台负责把对应比例的游戏币发放到托管账户中，现金和游戏币的兑换比例在MP配置。

  * 虚拟账户服务（服务端API） 开发者通过扣除游戏币的方式，把游戏币进一步兑换为游戏内的道具或者服务。虚拟账户提供一系列配套的服务端接口：

    1. 查询余额（pay_v2.getBalance）
    2. 扣除游戏币（pay_v2.pay）
    3. 取消扣除游戏币（pay_v2.cancelPay）
    4. 赠送游戏币（pay_v2.present）

### 2.2.2. 道具直购能力

[道具直购能力](<goods.md>)即玩家通过现金直接购买道具，平台通过后端的可靠回调通知开发者发货，由开发者负责道具的发放的一种支付能力。 开发者可以通过wx.requestMidasPaymentGameItem为玩家提供购买道具的入口，扣费成功后平台主动推送道具发货消息（minigame_game_pay_goods_deliver_notify）到开发者的服务端，通知开发者发放道具。

### 2.2.3. 历史问题，游戏币模式支持道具直购场景

由于小游戏平台之前没有支持道具直购模式，部分游戏开发者通过游戏币的能力实现了道具直购的场景，在上线以后会遇到很多问题，例如：

  1. 游戏币存在到账延迟可能
  2. 前端回调存在丢失可能
  3. 为了区分不同道具，zone_id当成道具ID使用，导致遇到用户分区上限问题等等。

建议道具直购的场景开发者切换至道具直购能力，若开发者切换成本过大，下文3.2.3小节也会给出对应建议。

### 3.小游戏支付最佳实践

对于首次接入支付能力的游戏，我们建议根据付费场景使用对应的支付能力去实现，**即游戏币场景使用游戏币托管能力，道具直购场景使用道具直购能力** 。

### 3.1.正确使用支付能力

首次接入支付能力或者有支付能力改造意愿的游戏，适用于该小节指南。

### 3.1.1.游戏币场景使用游戏币能力

此处所指游戏币场景，是上文**2.1.1. 游戏币场景** 所提及场景， 游戏币的发货由平台负责，正常情况下扣费成功后，即可查询到游戏币余额，极端情况下可能有一定的到账延迟，需要在游戏客户端做好恰当的余额刷新机制。

游戏币扣除[pay_v2.pay](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.pay>)为了避免多扣、少扣，需要开发者实现正确的bill_no语义，即为每一次来自玩家的扣除意图（游戏币兑换道具）分配对应的唯一id（传入pay接口的bill_no字段）。

##### 必须实现

  * **相同扣除意图的请求不管调用多少次都需要使用相同的bill_no** ：同样的扣除意图应保证多次重试时传入相同的bill_no，平台侧保证**48小时** 传入同样的billno游戏不会币被多扣，开发者应在48小时内处理完本次扣除。

反面教材举例：同样的一次兑换意图，如果第一次调用pay接口时使用的bill_no_a1，因为网络原因超时或者微信侧接口返回-1（存在可能实际上平台侧已经执行成功，游戏币已扣除），开发者进行了重试，结果错误的换了新的bill_no_a2再次发起pay请求，则会造成两次扣除。

pay接口对相同的bill_no 48小时内只会扣除对应的游戏币一次，一旦扣除成功，后续同样bill_no的请求会返回90012表示bill_no同样的pay接口请求已扣除成功，如果开发者正确实现了bill_no的语义，可以把90012当成扣除成功。

  * **确保游戏币余额扣除成功** ，确保游戏币余额扣除成功后，再进行游戏内道具的发放。即“扣除游戏币-发放道具”的流程应该可以多次重入，结果上刚好只发放一次对应的道具。

##### 建议实现

建议开发者有自己的服务端余额缓存。极端情况下平台的余额查询接口不可用，可以使用开发者自己的服务端缓存展示给玩家。只作为展示，真正扣除时仍然需要以平台返回的结果为准。

  * 游戏内的游戏币充值模块，在wx.requestMidasPayment返回后： 
    * 不需要做任何失败的提示。即使前端接口返回失败，也不要提示用户充值失败： 
      1. 对于确定充值失败的情况，平台已经做好了恰当的提示，比如：健康系统限制
      2. 极端情况下，存在接口返回失败实际上是充值成功的情况，比如：在Windows内的小游戏中充值，手机扫码支付后，Windows网络断开，Windows上接口会返回失败，实际上手机可以继续付费
    * 立刻查询一次游戏币余额：无论该接口返回成功，还是失败，都进行一次游戏币的余额查询[pay_v2.getBalance](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.getbalance>)，把最新余额展示给玩家。
    * 可接受[游戏币发货事件](<https://docs.qq.com/doc/DVVZZdHFsYkttYmxl>)通知，获取游戏币余额到账通知，主动刷新余额。
  * 若开发者做了余额缓存，建议在玩家进入商城模块、或者每天首次进入游戏时，可以主动调用查询余额接口获取最新余额

![](https://res8.wxqcloud.qq.com.cn/wxdoc/93f3e5e4-bf1c-4233-90e6-19d3d68994a0.png) 更详细的介绍参考：[小游戏虚拟支付2.0开发指南（对外）](<https://docs.qq.com/doc/DVUN0QWJja0J5c2x4>)

### 3.1.2.道具直购场景使用道具直购能力

道具直购能力发货由平台通知开发者，正常情况下扣费成功后，即会通过服务端消息推送通知到开发者，极端情况下可能有一定的通知延迟。 特别提醒

  1. 同样的发货请求（outTradeNo），可能因为网络原因，会请求多次。我们在有限时间内尽量保证触达一次，直到明确返回发货成功为止
  2. 针对重复的请求，开发者需要自行保证只发货一次，并且回包需要和第一次一样返回发货成功
  3. 通知周期：15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h
  4. 必须要开启道具发货推送才能收到回调请求

##### 必须实现

  * 发货消息会尽可能及时、尽可能不漏的通知到开发者服务端，若出现网络异常或者非发货成功的应答，我们会进行重试，开发者的服务端可能会收到重复的发货消息，即相同的订单id被推送多次。开发者需要确保实现道具发货的幂等，相同的订单id（outTradeNo）多次被通知发货时只发货一次。
  * 发货消息通道需要做好请求校验及相关密钥的妥善保管，避免因为密钥泄露导致请求来自恶意第三方。

##### 建议实现

  1. 尽管我们会尽可能保证不漏的推送到开发者服务端，但是若开发者侧有故障，我们不可能一直重试。因此开发者可以增加一定频率的主动发货逻辑： a.下单后按一定间隔（比如10s），定期查询订单状态（pay_v2.queryOrder），越往后间隔建议越大（比如后面可以按1分钟，10分钟查询一次） ![](https://res8.wxqcloud.qq.com.cn/wxdoc/9a6bfd29-7f53-4ff8-b7e2-a5b068573e10.png) 更详细的介绍参考：[道具直购能力](<goods.md>)

### 3.1.3.使用游戏币托管能力实现道具直购场景的优化建议

对于使用了游戏币托管能力来实现道具直购场景的游戏，若考虑到兼容性、研发与运营成本，暂时不愿意切换到新的道具直购能力，我们也建议参考本小结说明进行优化。

游戏币托管能力原本的设计是用于游戏内有游戏币场景的游戏币购买、扣除、查询等操作，而通过游戏币托管能力实现道具直购，对玩家来说看不到“游戏币”账户，是直接花钱购买道具，实现层面则需要把3个步骤串起来，即：

  1. 购买游戏币[wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>)

  2. 扣除游戏币[pay_v2.pay](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.pay>)

  3. 道具发货

##### 必须实现

  * 必须以游戏币扣除（pay_v2.pay）成功为道具发货的依据。

目前购买游戏币的请求并没有要求开发者在服务端签名，所以完全可能被前端恶意篡改，比如outTradeNo对应的游戏币是100个，可以修改为10个，然后发起购买（wx.requestMidasPayment），购买成功后不能直接发放原订单（100个游戏币）对应的道具，应该以扣除100个游戏币成功后再发放相应的道具

  * 扣除游戏币（pay_v2.pay）时为了避免多扣、少扣，需要开发者实现正确的bill_no语义，即为每一次来自玩家的扣除意图（游戏币兑换道具）分配对应的唯一id（传入pay接口的bill_no字段）。这一步可以参考"3.1.1.游戏币场景使用游戏币能力"的说明。

##### 建议实现

  * 游戏币实现道具直购主要问题： 
    1. 极端情况下，wx.requestMidasPayment返回失败，实际上也可能成功（参考“游戏币场景使用游戏币能力”的说明），也有可能会丢失回调。
    2. 游戏币到账会有延迟。
    3. 为了区分不同道具，zone_id当成道具ID使用，导致遇到用户分区上限问题。
  * 建议措施： 
    * 在wx.requestMidasPayment返回后： 
      * 如上文所说不需要做任何失败的提示。即使前端接口返回失败，也不要提示用户充值失败。
      * 若[pay_v2.queryOrder](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/order/api_pay_v2.queryorder>)查到用户已支付，但游戏币尚未到账，可提示用户稍等，平台侧会保证游戏币到账。
    * 开发者服务端： 
      * 开发者服务端通知游戏客户端wx.requestMidasPayment后便开启通知轮询定期查询游戏币余额[pay_v2.getBalance](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.getbalance>)或者查询订单状态[pay_v2.queryOrder](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/order/api_pay_v2.queryorder>)，下单后按一定间隔，至少间隔10s，持续5分钟.
      * 收到[wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>)成功的回调后可以主动查询一下余额到账情况。
      * 事件通知：订阅“[小游戏支付类订阅事件 ](<https://docs.qq.com/doc/DVVZZdHFsYkttYmxl>)”，有这个事件通知作为兜底，定期轮询可以在5分钟后停止，超过5分钟仍未到账的可以依赖事件通知。
      * 开发者服务端可以直接用out_trade_no作为索引来存储订单相关信息，可以根据out_trade_no使用[pay_v2.queryOrder](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/order/api_pay_v2.queryorder>)查询微信侧订单状态，避免使用zone_id当成道具ID使用。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/635bbc67-218a-4c2d-87c3-6a6016582c9f.png)

### 3.2.通用建议

### 3.2.1.微信服务端API域名选择

开发者可以根据自己的服务器部署情况，选择**最佳的接入域名** （延时更低，稳定性更高）。除此之外，可以将其他接入域名用作容灾用途，当网络链路发生故障时，可以考虑选择备用域名来接入。请开发者使用域名进行API接口请求，不要使用IP作为访问。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b96b96e7-c27f-4811-99f7-e075786025d2.png) 注意：该说明对所有“api.weixin.qq.com”下的API都适用，更多细节参考[公众平台接口域名说明](<https://developers.weixin.qq.com/doc/subscription/guide/dev/api/>)。 对于支付类业务而言，建议考虑就近接入以及做好异地容灾域名切换的策略。

### 3.2.2.接口调用凭证（access_token）的建议

  * 为了保证安全性，获取access_token的AppSecret以及access_token本身不要泄露到游戏客户端或者游戏服务端以外的其他地方

  * 建议统一切换到新接口：[获取稳定版接口调用凭据](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getstableaccesstoken>)，对并发限制、调用频率都更为宽松，具体可以看接口说明。新接口与老接口[auth.getAccessToken](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>) 是互不影响的，切换期间可以同时存在

### 3.2.3.登录态与会话密钥session_key（signature）的注意事项

支付相关API涉及用户签名的地方（signature参数），都需要用到session_key，session_key是玩家在使用小游戏期间微信分配的用于微信服务端和游戏服务端之间验证身份、安全通信的一种凭据，是对用户数据进行[加密签名](<../data/signature.md>)的密钥。分别存储于微信服务端、游戏服务端，在调用wx.login时可能触发session_key的重新生成，为了保证游戏服务端存储的session_key和微信侧的一致，开发者需要使用wx.login获得的code去换最新的session_key。

注意事项如下：

  * 开发者实现登录流程可参考[小程序登录](<../account/login.md>)，session_key主要用于微信服务端和游戏服务端之间验证身份。游戏客户端和游戏服务端之间的权限验证开发者应自己实现自定义登陆态。

  * 为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。

  * wx.login 调用时，用户的 session_key 可能会被更新而致使旧 session_key 失效（刷新机制存在最短周期，如果同一个用户短时间内多次调用 wx.login，并非每次调用都导致 session_key 刷新）。

  * session_key目前 **失效时间为天级别** ，用户可能会同时登录手机端和PC端，导致同一个用户重复wx.login，开发者需要在服务端维护最新换取的session_key。

  * wx.login调用有[频率限制](<https://developers.weixin.qq.com/miniprogram/dev/framework/performance/api-frequency>)，**游戏客户端应控制wx.login的调用频率，禁止短期内的多次自动重试** ，可以通过本地存储记录相关调用状态来实现），若检测到多次自动进入重新登录态流程，可以考虑交由玩家决策：弹出对话框提示玩家，重试、重启小程序或者清理缓存后再试。同时，开发者应该针对这类问题增加告警，排查代码逻辑是否有问题。以下任意条件满足则应触发重新登录（调用wx.login）

    1. 首次登录
    2. 游戏服务端存储的session_key失效，例如：调用支付接口返回90010（signature签名错误）和90016（sessionkey过期）时，应通知游戏客户端重走wx.login流程。后台可以通过[auth.checkSessionKey](<https://developers.weixin.qq.com/minigame/dev/api-backend/login/api_checksessionkey>)校验
    3. 进入游戏通过wx.checkSession检查session_key是否有效。
    4. 游戏自定义登陆态失效。

可以进一步参考[session_key相关注意事项](<../data/signature.md>)

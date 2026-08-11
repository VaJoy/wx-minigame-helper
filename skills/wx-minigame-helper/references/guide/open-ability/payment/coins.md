---
title: "虚拟支付2.0游戏币"
type: guide
category: guide/open-ability/payment
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/coins.html
---

## 虚拟支付2.0游戏币

### 接口列表

  * [前端]支付接口：wx.requestMidasPayment

    1. 支付接口与之前一致，参数需要以虚拟支付2.0的为准
    2. offerId：传入2.0的支付应用ID（MP-虚拟支付2.0-基础配置-支付应用ID）
    3. zoneId：传入2.0的分区ID（MP-虚拟支付2.0-基础配置-游戏币/道具配置-分区配置-分区ID） 小程序的非正式版（开发版、体验版）可以使用支付的沙箱环境、正式环境发起支付，小程序的正式版只能使用支付的正式环境发起支付
  * [服务端]获取游戏币余额：[pay_v2.getBalance](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.getbalance>)

  * [服务端]扣除游戏币：[pay_v2.pay](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.pay>)

  * [服务端]取消订单：[pay_v2.cancelPay](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.cancelpay>)

  * [服务端]给用户赠送游戏币：[pay_v2.present](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.present>)

> 提示：以上链接偶现 404，如遇到请刷新后继续访问

### 游戏币调用时序图

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ad7bbb9b-2351-4433-8651-d06593e6e7e8.png) 注意： 1\. 第4步购买前查询余额是否足够可以解决绝大多数掉单问题，现网有极小概率支付成功但前端收不到回调的情况。 比如：用户支付完成后强制杀掉微信或其他情况导致小程序异常退出，此时前端不可能收到回调，通过服务端的查询游戏币余额接口则可以查询到刚刚购买的游戏币。若游戏币数量足够，则不应再发起充值流程，除非当前场景明确是要求购买更多游戏币。 2\. 第11步支付成功后会有小概率延迟到账的情况，查询到的余额会和预期充值的对不上，这时需要提醒用户耐心等待，然后间隔一定时间后尝试重新查询 3\. 第13步需要选择合适的bill_no发起幂等扣除游戏币的请求，需要明确扣除成功（errcode为0）或者遇到逻辑失败（接口有正常的返回数据且errcode非-1）为止，90012 订单号重复代表相同的订单号已经处理过，不需要再重复调用。逻辑失败需要人工介入，比如传入的参数非接口预期，需要参考文档修正后再重新尝试 4\. 为了解决延迟到账或者前端[wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>)回调丢失问题，除了前面提到的定期进行余额轮询，也可以接入事件订阅能力，通过主动接收推送和轮询结合的方式进行更可靠的发货：[小游戏支付类订阅事件 ](<https://docs.qq.com/doc/DVVZZdHFsYkttYmxl>)

### 游戏币虚拟支付2.0与虚拟支付1.0的差异

若小游戏为虚拟支付2.0兼容态，前端wx.requestMidasPayment及后端API均可继续使用之前虚拟支付1.0的API不变，暂时不建议切换到新的API。

若开发者此前所有小游戏从未使用过虚拟支付1.0相关API，可以忽略该部分文档，直接参考虚拟支付2.0其他文档即可。该文档专门给已接触过虚拟支付1.0的开发者在接入新的虚拟支付2.0小游戏时，进行的额外说明。

首先是前端API： [wx.requestMidasPayment](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html>) API，2.0和1.0均为同一个API。

其次是服务端API：

  1. 2.0签名方式有较大的变化，为了增强安全性，增加了signature参数，通过，使用session_key对post body进行签名；同时为了简化签名方式，米大师AppKey的签名方式也基本参考该方式，但略有不同见“支付请求签名算法说明（pay_sig）”小节的介绍
  2. 部分接口的部分字段进行了一致性的调整，见文档字段部分说明，针对1.0相同的字段做了额外的对照注释。
  3. pay_v2.cancelPay接口支持全额退回或者部分退回（可以多次），注意pay_bill_no需要关联原pay接口的bill_no，cancelPay接口的bill_no字段为退回订单id，多次退回需要使用不同的bill_no。

1.0原有api，仅接入过1.0游戏使用

  * business.getPayForOrder
  * midas.cancelPay
  * midas.getBalance
  * midas.pay
  * midas.present

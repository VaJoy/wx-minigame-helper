# 专题：虚拟支付

> 任务：在游戏内售卖虚拟货币/道具（内购）。⚠️ 这是平台强监管能力，规则随平台政策变化，务必以官方指南为准。

## 平台规则（最重要）

- **iOS 端**：受苹果规则限制，iOS 微信内小游戏的虚拟支付有严格限制（历史上长期关闭/仅特定类目开放），接入前必须确认当前政策。
- **安卓端**：通过米大师（Midas）支付体系结算。
- 需要完成商户号开通、类目审核等前置流程。

## 关键文档

### 指南（guide/open-ability/payment/）
- [虚拟支付接入指引](../guide/open-ability/payment/guide.md) — 开户、配置、流程总览
- [虚拟支付 2.0](../guide/open-ability/payment/virtual-payment2.md)
- [代币（游戏币）](../guide/open-ability/payment/coins.md)
- [商品管理](../guide/open-ability/payment/goods.md)
- [支付事件/对账](../guide/open-ability/payment/event.md)
- [支付结果消息推送](../guide/open-ability/payment/message-push.md) — 服务端发货的依据

### API（api/midas-payment/）
- [wx.requestMidasPayment](../api/midas-payment/wx.requestMidasPayment.md) — 发起米大师支付
- 该目录另有支付相关的余额查询、赠送等接口，见 [api/midas-payment/](../api/midas-payment/README.md)

## 实施流程

```
客户端下单参数 → 开发者服务器生成订单（签名）
→ 客户端 wx.requestMidasPayment 调起支付
→ 微信服务器推送支付结果到开发者服务器（message-push）
→ 服务器确认后发货 → 客户端同步结果
```

## 常见坑

1. **发货必须以服务端收到的支付结果推送为准**，不能信客户端回调。
2. iOS/安卓支付能力差异要在产品层面设计好（如 iOS 隐藏充值入口的合规做法）。
3. 沙箱环境测试流程见接入指引。

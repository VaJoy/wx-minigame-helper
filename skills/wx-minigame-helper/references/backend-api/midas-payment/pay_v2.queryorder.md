---
title: "查询订单状态"
type: backend-api
category: backend-api/midas-payment
api: "pay_v2.queryOrder"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/order/api_pay_v2.queryorder.html
---

# 查询订单状态

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：pay_v2.queryOrder

本接口用于查看订单状态

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/game/queryorderinfo?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
```

### 云调用

- 本接口不支持云调用。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)
signature | string | 是 | [用户登录态签名](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature)
sig_method | string | 是 | 用户登录态签名的哈希方法，只支持 hmac_sha256，请传入"hmac_sha256"
pay_sig | string | 是 | [支付请求签名（pay_sig）算法说明](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/signature)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明 | 枚举
---|---|---|---|---
openid | string | 是 | 用户唯一标识符 | -
offer_id | string | 是 | 支付应用 ID（OfferId） | -
ts | number | 是 | 当前 UNIX 时间戳（请尽可能确保时间准确），单位：秒 如：1668136271 | -
zone_id | string | 是 | 已发布的分区 ID（MP-分区配置-分区 ID） ；需要和 env 对应 | -
env | number | 是 | 环境配置 | [枚举值](#Enum_Body__env)
out_trade_no | string | 是 | 充值时传入的外部订单号 | -
biz_id | number | 是 | 1 代币 2 道具直购 | -

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
product_id | string | 道具 id
pay_state | number | 支付状态（用户是否已支付）1 未支付 2 已支付
deliver_state | number | 发货状态（如果是游戏币，则是余额是否增加） 1 未发货 2 已发货
pay_finish_time | number | 支付完成时间
out_trade_no | string | 充值时传入的外部订单号
mch_order_no | string | 微信支付商户单号（仅微信支付方式存在）
transaction_id | string | 交易单号（微信支付订单号，仅微信支付方式存在）

## 4. 枚举信息

### Body.env `Enum`

环境配置

枚举值 | 描述
---|---
0 | 现网环境（也叫正式环境）
1 | 沙箱环境

## 5. 注意事项

本接口无特殊注意事项

## 6. 代码示例

### 6.1 请求示例

请求示例

```json
{
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512806,
  "env": 0,
  "out_trade_no": "test_queryorderinfo_1668512806",
  "offer_id":"xxxx",
  "biz_id":1
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "out_trade_no": "test_queryorderinfo_1668512806",
  "pay_finish_time": 1669364790,
  "product_id": "id_100001",
  "deliver_state": 1,
  "pay_state": 1,
  "mch_order_no": "1217752501201407033233368018",
  "transaction_id": "1217752501201407033233368018"
}
```

### 6.2 请求示例

请求示例

```json
{
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512806,
  "env": 0,
  "out_trade_no": "test_queryorderinfo_1668512806",
  "offer_id":"xxxx",
  "biz_id":1
}
```

返回示例

```json
{
  "errcode": 90018,
  "errmsg": "[openid] openid is invalid"
}
```

## 7. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功
90010 | signature 签名错误
90011 | pay_sig 签名错误
90016 | sessionkey fail，用户 sessionkey 过期，需要重走登录流程
90018 | 参数错误，具体参数见 errmsg 描述
90019 | out_trade_no 未找到

## 8. 适用范围

本接口支持「小游戏（仅认证）」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.requestMidasPayment（前端拉起支付）](../../api/midas-payment/wx.requestMidasPayment.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


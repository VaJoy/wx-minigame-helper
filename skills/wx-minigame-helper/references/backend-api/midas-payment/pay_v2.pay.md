---
title: "扣除游戏币"
type: backend-api
category: backend-api/midas-payment
api: "pay_v2.pay"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.pay.html
---

# 扣除游戏币

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：pay_v2.pay

本接口开通了虚拟支付的小游戏可用。

通过本接口扣除某个用户的游戏币后发放游戏内的等值道具或提供等值的游戏服务。

**由于可能存在接口调用超时、或返回系统繁忙（errcode 为-1），此时订单状态未知（可能扣除成功，也可能扣除失败），此时可以用相同的 bill_no 再次调用本接口，直到明确返回订单号重复（errcode 为 90012）或者非系统繁忙（errcode 不为-1，即其他的逻辑失败）为止。对相同的 billno 多次调用该接口保证 48 小时内操作幂等，不会重复扣除。开发者需保证不同订单对应的 billno 在 openid+zoneid 下唯一。也可以调用[退回扣除游戏币接口](<https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.cancelpay>)取消本次扣除。**

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/game/pay?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
```

### 云调用

- 调用方法：wxa.game.pay
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

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
zone_id | string | 是 | 已发布的分区 ID（MP-分区配置-分区 ID）；需要和 env 对应 | -
env | number | 是 | 环境配置 | [枚举值](#Enum_Body__env)
user_ip | string | 是 | 用户外网 ip | -
amount | number | 是 | 扣除游戏币数量，需要大于 0（原 1.0 的 amt） | -
bill_no | string | 是 | 扣除游戏币订单号，业务需要保证全局唯一，相同的订单号多次请求不会重复扣除；长度不超过 63，只能是数字、英文大小写字母及*-的组合；不能以下划线（*）开头（2.0 新增约束） | -
payitem | string | 否 | 道具信息 | -
remark | string | 否 | 备注 | -

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
bill_no | string | 扣除游戏币订单号
balance | number | 扣款后的余额
used_present_amount | number | 本次扣的赠送币的数量（原 1.0 的 used_gen_amt）

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

### 6.1 成功返回

请求示例

```json
{
  "offer_id": "12345678",
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512428,
  "zone_id": "1",
  "env": 0,
  "bill_no": "test_pay_1668512428",
  "amount": 1,
  "payitem": "钻石",
  "remark": "测试"
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "bill_no": "test_pay_1668512428",
  "balance": 10,
  "used_present_amount": 1
}
```

### 6.2 错误返回

请求示例

```json
{
  "offer_id": "12345678",
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512428,
  "zone_id": "1",
  "env": 0,
  "bill_no": "test_pay_1668512428",
  "amount": 1,
  "payitem": "钻石",
  "remark": "测试"
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
90000 | 订单不存在
90010 | signature 签名错误
90011 | pay_sig 签名错误
90012 | 订单号重复
90013 | 余额不足
90016 | sessionkey fail，用户 sessionkey 过期，需要重走登录流程
90018 | 参数错误，具体参数见 errmsg 描述

## 8. 适用范围

本接口支持「小游戏（仅认证）」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.requestMidasPayment（前端拉起支付）](../../api/midas-payment/wx.requestMidasPayment.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


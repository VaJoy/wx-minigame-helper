---
title: "查询游戏币余额"
type: backend-api
category: backend-api/midas-payment
api: "pay_v2.getBalance"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.getbalance.html
---

# 查询游戏币余额

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：pay_v2.getBalance

查询游戏币余额。本接口开通了虚拟支付的小游戏可用。通过本接口查询某个用户的游戏币余额，查询时机可以是用户支付完成，或者用户查看游戏币余额等场景。**注意，某些极端情况下，支付完成后可能余额会延迟到账，需要按一定间隔定期查询，并提示用户耐心等待。**

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/game/getbalance?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
```

### 云调用

- 调用方法：wxa.game.getBalance
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
zone_id | string | 是 | 已发布的分区 ID（MP-分区配置-分区 ID），需要和 env 对应 | -
env | number | 是 | 环境配置 | [枚举值](#Enum_Body__env)
user_ip | string | 是 | 用户外网 ip | -
coin_type | number | 否 | 代币类型，默认值0 | [枚举值](#Enum_Body__coin_type)

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
balance | number | 游戏币总余额，包括现金充值和赠送部分。
present_balance | number | 赠送账户的游戏币余额（原 1.0 的 gen_balance）
sum_save | number | 累计现金充值获得的游戏币数量（原 1.0 的 save_amt）
sum_present | number | 累计赠送的游戏币数量（原 1.0 的 present_sum）
sum_balance | number | 累计获得的游戏币数量，包括现金充值和赠送（原 1.0 的 save_sum）
sum_cost | number | 累计总消耗（即扣除）游戏币数量（原 1.0 的 cost_sum）
first_save | boolean | 是否满足首充活动标记（原 1.0 的 first_save）

## 4. 枚举信息

### Body.env `Enum`

环境配置

枚举值 | 描述
---|---
0 | 现网环境（也叫正式环境）
1 | 沙箱环境

### Body.coin_type `Enum`

代币类型，默认值0

枚举值 | 描述
---|---
0 | 游戏币
1 | 充值中心余额(zone_id固定填1)

## 5. 注意事项

本接口无特殊注意事项

## 6. 代码示例

### 6.1 正确返回

请求示例

```json
{
  "offer_id": "12345678",
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512543,
  "zone_id": "1",
  "env": 0
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "balance": 11,
  "present_balance": 1,
  "sum_save": 10,
  "sum_present": 1,
  "sum_balance": 11,
  "sum_cost": 0,
  "first_save": false
}
```

### 6.2 错误返回

请求示例

```json
{
  "offer_id": "12345678",
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512543,
  "zone_id": "1",
  "env": 0
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
90016 | sessionkey fail，用户 sessionkey 过期，需要重走登录流程
90018 | 参数错误，具体参数见 errmsg 描述

## 8. 适用范围

本接口支持「小游戏（仅认证）」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.requestMidasPayment（前端拉起支付）](../../api/midas-payment/wx.requestMidasPayment.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


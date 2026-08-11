---
title: "给用户赠送游戏币"
type: backend-api
category: backend-api/midas-payment
api: "pay_v2.present"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/midas-payment/game_currency/api_pay_v2.present.html
---

# 给用户赠送游戏币

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：pay_v2.present

本接口开通了虚拟支付的小游戏可用。

通过该接口赠送游戏币给某个用户。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/game/present?access_token=ACCESS_TOKEN&signature=SIGNATURE&sig_method=SIG_METHOD&pay_sig=PAY_SIG
```

### 云调用

- 调用方法：wxa.game.present
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
amount | number | 是 | 赠送游戏币的个数，不能为 0（原 present_counts） | -
bill_no | string | 是 | 赠送订单号，业务需要保证全局唯一，相同的订单号多次请求不会重复扣除；长度不超过 63，只能是数字、英文大小写字母及*-的组合；不能以下划线（*）开头（2.0 新增约束） | -

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
bill_no | string | 赠送订单号
balance | number | 赠送后的余额

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
  "offer_id": "12345678",
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512716,
  "zone_id": "1",
  "env": 0,
  "bill_no": "test_present_1668512716",
  "amount": 1
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "bill_no": "test_present_1668512716",
  "balance": 11
}
```

### 6.2 请求示例

请求示例

```json
{
  "offer_id": "12345678",
  "openid": "oUrsfxxxxxxxxxx",
  "ts": 1668512716,
  "zone_id": "1",
  "env": 0,
  "bill_no": "test_present_1668512716",
  "amount": 1
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
90012 | 订单已存在
90016 | sessionkey fail，用户 sessionkey 过期，需要重走登录流程
90018 | 参数错误，具体参数见 errmsg 描述

## 8. 适用范围

本接口支持「小游戏（仅认证）」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.requestMidasPayment（前端拉起支付）](../../api/midas-payment/wx.requestMidasPayment.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


---
title: "获取用户安全等级"
type: backend-api
category: backend-api/safety-control-capability
api: "getUserRiskRank"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/safety-control-capability/api_getuserriskrank.html
---

# 获取用户安全等级

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：getUserRiskRank

该接口用于根据提交的用户信息数据获取用户的安全等级 risk_rank（无需用户授权）。详见[用户安全解决方案](<https://developers.weixin.qq.com/miniprogram/dev/framework/operation>)。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/getuserriskrank?access_token=ACCESS_TOKEN
```

> **支持加密请求：** 本接口支持服务通信二次加密和签名，可有效防止数据篡改与泄露。[查看详情](<https://developers.weixin.qq.com/miniprogram/dev/server/getting_started/api_signature>)

### 云调用

- 调用方法：riskControl.getUserRiskRank
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
appid | string | 是 | 小程序appid
openid | string | 是 | 用户的openid
scene | number | 是 | 场景值，0:注册，1:营销作弊, 2:UGC
mobile_no | string | 否 | 用户手机号
client_ip | string | 是 | 用户访问源ip
email_address | string | 否 | 用户邮箱地址
extended_info | string | 否 | 额外补充信息
is_test | boolean | 否 | 默认值false。false：正式调用，true：测试调用

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
risk_rank | number | 用户风险等级，合法值为0,1,2,3,4，数字越大风险越高。
unoin_id | number | 唯一请求标识，标记单次请求

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 HTTPS请求示例

请求示例

```json
{
  "appid": "wx*******",
  "openid": "*****",
  "scene": 1,
  "mobile_no": "12345678",
  "bank_card_no": "******",
  "cert_no": "*******",
  "client_ip": "******",
  "email_address": "***@qq.com",
  "extended_info": ""
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "getuserriskrank succ",
  "risk_rank": 0,
  "unoin_id": 123456
}
```

### 5.2 云函数调用示例

请求示例

```json
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.riskControl.getUserRiskRank({
        "appid": 'wx*******',
        "openid": '*****',
        "scene": 1,
        "mobileNo": '12345678',
        "bankCardNo": '******',
        "certNo": '*******',
        "clientIp": '******',
        "emailAddress": '***@qq.com',
        "extendedInfo": ''
      })
    return result
  } catch (err) {
    return err
  }
}
```

返回示例

```json
{
  "errCode": 0,
  "errMsg": "openapi.riskControl.getUserRiskRank:ok",
  "riskRank": 0,
  "unoinId": 123456
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40001 | invalid credential  access_token isinvalid or not latest | access_token 无效或不为最新获取的 access_token，请开发者确认access_token的有效性
40003 | invalid openid | 不合法的 OpenID ，请开发者确认 OpenID 的有效性
40129 | invalid scene | 场景值错误（目前支持场景 0 注册；1 营销作弊；2 UGC）
41001 | access_token missing | 缺少 access_token 参数
42001 | access_token expired | access_token 超时，请检查 access_token 的有效期，请参考基础支持 - 获取 access_token 中，对 access_token 的详细机制说明
43002 | require POST method | 方法调用错误，请用 post 方法调用
43104 | The openid does not match the appid | appid与 openid 不匹配
44002 | empty post data | POST 的数据包为空。post请求body参数不能为空。
47001 | data format error | 解析 JSON/XML 内容错误;post 数据中参数缺失;参数需以 JSON 字符串格式写在post请求的 body 中，请检查修正后重试
48001 | api unauthorized | 小程序无该 api 权限，可在mp.weixin.qq.com开通接口权限
61007 | api is unauthorized to component | 小程序尚未将对应的权限集授权给第三方平台
61010 | code is expired | 用户访问记录超时（用户未在近两小时访问小程序）
61080 | the service of getuserriskrank is unavailable now | 当前用户安全服务不可用
61081 | get riskrank too frequently | 用户安全接口调用过于频繁
9410009 | the quota is not enough;please apply again! | 测试额度已耗尽

## 7. 适用范围

本接口暂未明确可调用账号类型，或在业务中根据调用传参自行确定是否可调用，请以实际调用情况为准。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


---
title: "获取用户encryptKey"
type: backend-api
category: backend-api/internet
api: "getUserEncryptKey"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/internet/api_getuserencryptkey.html
---

# 获取用户encryptKey

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：getUserEncryptKey

该接口用于获取用户encryptKey。 会获取用户最近3次的key，每个key的存活时间为3600s

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/wxa/business/getuserencryptkey?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
```

> **支持加密请求：** 本接口支持服务通信二次加密和签名，可有效防止数据篡改与泄露。[查看详情](<https://developers.weixin.qq.com/miniprogram/dev/server/getting_started/api_signature>)

### 云调用

- 本接口不支持云调用。

### 第三方调用

- 本接口支持第三方平台代商家调用。
- 该接口所属的权限集 id 为：18
- 服务商获得其中之一权限集授权后，可通过使用 [authorizer_access_token](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/AuthorizerAccessToken>) 代商家进行调用，具体可查看 [第三方调用](<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/call_interface>) 说明文档。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)、[authorizer_access_token](https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken)
openid | string | 是 | 用户的openid
signature | string | 是 | 用sessionkey作为密钥对空字符串签名得到的结果。session_key可通过[code2Session](https://developers.weixin.qq.com/minigame/dev/api-backend/login/api_code2session)接口获得。 伪代码：signature = hmac_sha256(session_key, "")
sig_method | string | 是 | 签名方法，只支持 hmac_sha256

### 请求体 `Request Payload`

无

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
key_info_list | [objarray](#Res__key_info_list<Array>) | 用户最近三次的加密key列表

### Res.key_info_list(Array) `Object Payload`

用户最近三次的加密key列表

参数名 | 类型 | 说明
---|---|---
encrypt_key | string | 加密key
version | number | key的版本号
expire_in | number | 剩余有效时间
iv | string | 加密iv
create_time | number | 创建key的时间戳

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```text
GET https://api.weixin.qq.com/wxa/business/getuserencryptkey?access_token=OsAoOMw4niuuVbfSxxxxxxxxxxxxxxxxxxx&signature=fefce01bfba4670c85b228e6ca2b493c90971e7c442f54fc448662eb7cd72509&openid=oGZUI0egBJY1zhBYw2KhdUfwVJJE&sig_method=hmac_sha256
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "key_info_list": [
    {
      "encrypt_key": "VI6BpyrK9XH4i4AIGe86tg==",
      "version": 10,
      "expire_in": 3597,
      "iv": "6003f73ec441c386",
      "create_time": 1616572301
    },
    {
      "encrypt_key": "aoUGAHltcliiL9f23oTKHA==",
      "version": 9,
      "expire_in": 0,
      "iv": "7996656384218dbb",
      "create_time": 1616504886
    },
    {
      "encrypt_key": "MlZNQNnRQz3zXHHcr6A3mA==",
      "version": 8,
      "expire_in": 0,
      "iv": "58a1814f88883024",
      "create_time": 1616488061
    }
  ]
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
87007 | session_key is not existd or expired | 加密key不存在或已过期
87008 | invalid sig_method | 无效的签名方法
87009 | invalid signature | 无效的签名

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


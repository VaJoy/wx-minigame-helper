---
title: "重置登录态"
type: backend-api
category: backend-api/login
api: "ResetUserSessionKey"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/login/api_resetusersessionkey.html
---

# 重置登录态

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：ResetUserSessionKey

重置指定的登录态 session_key。为了保持 session_key 私密性，接口不明文传入 session_key，而是通过校验登录态签名完成。

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/wxa/resetusersessionkey?access_token=ACCESS_TOKEN
```

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

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
openid | string | 是 | 用户唯一标识符
signature | string | 是 | 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "")
sig_method | string | 是 | 用户登录态签名的哈希方法，目前只支持 hmac_sha256

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
openid | string | 用户唯一标识符
session_key | string | 重置后的用户登录态

## 4. 注意事项

1. 重置用户session_key后，原有的session_key会失效。请注意接口调用时机，以免影响用户在小程序中的体验。
2. 重置后的session_key会继承原有的session_key的过期时间，重置操作不能为session_key续期。
3. 单个小程序appid请求量频率限制为 60000 次 / 分钟。
4. 不允许频繁重置同一个用户的登录态。

## 5. 代码示例

请求示例

```text
GET https://api.weixin.qq.com/wxa/resetusersessionkey?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=hmac_sha256
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "openid": "xxxxxxx",
  "session_key": "xxxxxxxx"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40097 | invalid args | 参数错误
45011 | api minute-quota reach limit  mustslower  retry next minute | API 调用太频繁，请稍候再试
87007 | session_key is not existd or expired | 
87008 | invalid sig_method | 
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


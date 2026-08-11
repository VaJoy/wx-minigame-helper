---
title: "检验登录态"
type: backend-api
category: backend-api/login
api: "checkSessionKey"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/login/api_checksessionkey.html
---

# 检验登录态

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：checkSessionKey

校验服务器所保存的登录态 session_key 是否有效。为了保持 session_key 私密性，接口不明文传输 session_key，而是通过校验登录态签名完成。

session_key 具有唯一性，在使用小程序时，同一用户在同一时刻仅有一个有效的 session_key。
通过 [code2Session](<https://developers.weixin.qq.com/minigame/dev/api-backend/login/api_code2session>) 接口获得的用户 session_key 拥有一定的时效性。
除了过期失效外，触发获取临时登录凭证 code 的操作（[小程序登录](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login>) 和 [数据预拉取](<https://developers.weixin.qq.com/miniprogram/dev/framework/ability/pre-fetch>)）也可能会生成新的登录态 session_key，从而使旧的 session_key 被顶替而失效。

为了处理以上失效情况，可以通过本接口校验用户 session_key 的有效性。

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/wxa/checksession?access_token=ACCESS_TOKEN
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

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```text
GET https://api.weixin.qq.com/wxa/checksession?access_token=OsAoOMw4niuuVbfSxxxxxxxxxxxxxxxxxxx&signature=fefce01bfba4670c85b228e6ca2b493c90971e7c442f54fc448662eb7cd72509&openid=oGZUI0egBJY1zhBYw2KhdUfwVJJE&sig_method=hmac_sha256
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
0 | ok | ok
87009 | invalid signature | 无效的签名

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.checkSession（前端校验登录态）](../../api/open/login/wx.checkSession.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


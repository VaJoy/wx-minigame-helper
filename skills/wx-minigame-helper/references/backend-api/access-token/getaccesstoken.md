---
title: "获取接口调用凭据"
type: backend-api
category: backend-api/access-token
api: "getAccessToken"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken.html
---

# 获取接口调用凭据

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：getAccessToken

本接口用于获取获取全局唯一后台接口调用凭据（Access Token），token 有效期为 7200 秒，开发者需要进行妥善保存，使用注意事项请参考[此文档](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/AccessToken>)。

推荐使用 [获取稳定版接口调用凭据](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getstableaccesstoken>)

- 如使用[云开发](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/basis/getting-started>)，可通过[云调用](<https://developers.weixin.qq.com/miniprogram/dev/server/API/openApi-mgnt/api_clearapiquota>)免维护 access_token 调用。
- 如使用[云托管](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/basic/intro>)，也可以通过[微信令牌/开放接口服务](<https://developers.weixin.qq.com/doc/oplatform/openApi/ams/open/api_agencycheckcanopenpublisher>)免维护 access_token 调用。

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/cgi-bin/token?appid=AppID&secret=AppSecret&grant_type=client_credential
```

### 云调用

- 本接口不支持云调用。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 示例 | 说明
---|---|---|---|---
appid | string | 是 | AppID | 账号的唯一凭证，即 AppID，点此查看[如何获取Appid](https://developers.weixin.qq.com/doc/oplatform/developers/dev/appid)
secret | string | 是 | AppSecret | 唯一凭证密钥，即 AppSecret，点此查看[如何获取AppSecret](https://developers.weixin.qq.com/doc/oplatform/developers/dev/appid)
grant_type | string | 是 | client_credential | 填写 client_credential

### 请求体 `Request Payload`

无

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
access_token | string | 获取到的凭证
expires_in | number | 凭证有效时间，单位：秒。目前是7200秒之内的值。

## 4. 注意事项

1. 不同的应用类型的 `Access Token` 是互相隔离的，且仅支持调用应用类型的接口
2. `AppSecret` 是账号使用后台 `API` 接口的密钥，请开发者妥善保管，避免因泄露造成账号被其他人冒用等风险。
3. 如长期无 `AppSecret` 的使用需求，开发者可以使用对 `AppSeceret` 进行冻结，提高账号的安全性。
4. `AppSecret` 冻结后，开发者无法使用 `AppSecret` 获取 `Access token`（接口返回错误码 40243），不影响账号基本功能的正常使用，不影响通过第三方授权调用后台接口，不影响云开发调用后台接口。
5. 开发者可以随时对 `AppSecret` 进行解冻。

关于如何获取 Appid 和 AppSecret 信息，以及如何冻结/解冻AppSecret，请参考 [此文档](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/appid>)

## 5. 代码示例

请求示例

```bash
GET https://api.weixin.qq.com/cgi-bin/token?appid=AppID&secret=AppSecret&grant_type=client_credential
```

返回示例

```json
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": 7200
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
40002 | invalid grant_type | 不合法的凭证类型
40013 | invalid appid | 不合法的 AppID ，请开发者检查 AppID 的正确性，避免异常字符，注意大小写
40125 | 不合法的 secret | 请检查 secret 的正确性，避免异常字符，注意大小写
40164 | 调用接口的IP地址不在白名单中 | 请在接口IP白名单中进行设置
40243 | AppSecret已被冻结，请解冻后再次调用。 | 点此查看[如何解冻AppSecret](https://developers.weixin.qq.com/doc/oplatform/developers/dev/appid)
41004 | appsecret missing | 缺少 secret 参数
50004 | 禁止使用 token 接口 | 
50007 | 账号已冻结 | 

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 公众号 | 服务号 | 小游戏 | 微信小店 | 联盟带货机构 | 带货助手 | 小店供货商 | 移动应用 | 网站应用 | 视频号助手 | 多端应用
---|---|---|---|---|---|---|---|---|---|---|---
✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


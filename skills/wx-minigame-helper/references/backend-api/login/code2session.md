---
title: "小程序登录凭证校验"
type: backend-api
category: backend-api/login
api: "code2Session"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/login/api_code2session.html
---

# 小程序登录凭证校验

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：code2Session

登录凭证校验。通过 [wx.login](<https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html>) 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。更多使用方法详见[小程序登录。](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login>)

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JS_CODE&grant_type=GRANT_TYPE
```

### 云调用

- 本接口不支持云调用。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
appid | string | 是 | 小程序 appId
secret | string | 是 | 小程序 appSecret
js_code | string | 是 | 登录时获取的 code，可通过[wx.login](https://developers.weixin.qq.com/minigame/dev/api/open-api/login/wx.login.html)获取
grant_type | string | 是 | 授权类型，此处只需填写 authorization_code

### 请求体 `Request Payload`

无

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
session_key | string | 会话密钥
unionid | string | 用户在开放平台的唯一标识符，若当前小程序已绑定到微信开放平台帐号下会返回，详见 [UnionID 机制说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id)。
openid | string | 用户唯一标识
errcode | number | 错误码，请求失败时返回
errmsg | string | 错误信息，请求失败时返回

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```bash
GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
```

返回示例

```json
{
  "openid": "xxxxxx",
  "session_key": "xxxxx",
  "unionid": "xxxxx",
  "errcode": 0,
  "errmsg": "xxxxx"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40029 | code 无效 | js_code无效
40226 | code blocked | 高风险等级用户，小程序登录拦截 。风险等级详见[用户安全解方案](https://developers.weixin.qq.com/miniprogram/dev/framework/operation)
45011 | api minute-quota reach limit  mustslower  retry next minute | API 调用太频繁，请稍候再试

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.login（前端获取登录 code）](../../api/open/login/wx.login.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


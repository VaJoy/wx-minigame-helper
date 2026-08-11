---
title: "创建activity_id"
type: backend-api
category: backend-api/updatable-message
api: "createActivityId"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/updatable-message/api_createactivityid.html
---

# 创建activity_id

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：createActivityId

该接口用于创建被分享动态消息或私密消息的 activity_id。详见[动态消息](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message>)

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/cgi-bin/message/wxopen/activityid/create?access_token=ACCESS_TOKEN&unionid=UNIONID&openid=OPENID
```

### 云调用

- 调用方法：updatableMessage.createActivityId
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口支持第三方平台代商家调用。
- 该接口所属的权限集 id 为：18
- 服务商获得其中之一权限集授权后，可通过使用 [authorizer_access_token](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/AuthorizerAccessToken>) 代商家进行调用，具体可查看 [第三方调用](<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/call_interface>) 说明文档。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)、[authorizer_access_token](https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken)
unionid | string | 否 | 为私密消息创建activity_id时，指定分享者为unionid用户。其余用户不能用此activity_id分享私密消息。 **openid与unionid填一个即可。**私密消息暂不支持云函数生成activity id。
openid | string | 否 | 为私密消息创建activity_id时，指定分享者为openid用户。其余用户不能用此activity_id分享私密消息。**openid与unionid填一个即可。** 私密消息暂不支持云函数生成activity id。

### 请求体 `Request Payload`

无

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
activity_id | string | 动态消息的 ID
expiration_time | number | activity_id 的过期时间戳。默认24小时后过期。
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 HTTPS调用

请求示例

```json
{
  "unionid": "oHAUs6LSuwgHq-mlnFrffKXw3QYM",
  "openid": "OPENID"
}
```

返回示例

```json
{
  "errcode": "42001",
  "errmsg": "access_token 过期"
}
```

### 5.2 云调用示例

请求示例

```js
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.updatableMessage.createActivityId({
      "unionid": "oHAUs6LSuwgHq-mlnFrffKXw3QYM",
      "openid": "OPENID"
    });
    return result;
  } catch (err) {
    return err;
  }
};
```

返回示例

```json
{
  "errcode": "42001",
  "errmsg": "access_token 过期"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.updateShareMenu（前端动态消息菜单）](../../api/share/wx.updateShareMenu.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


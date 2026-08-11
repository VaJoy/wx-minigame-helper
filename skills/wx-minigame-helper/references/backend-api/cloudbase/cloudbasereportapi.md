---
title: "云开发上报接口"
type: backend-api
category: backend-api/cloudbase
api: "cloudbaseReportAPI"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/cloudbase/api_cloudbasereportapi.html
---

# 云开发上报接口

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：cloudbaseReportAPI

该接口为云开发通用上报接口。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/tcb/cloudbasereport?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：cloudbase.report
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口支持第三方平台代商家调用。
- 该接口所属的权限集 id 为：49
- 服务商获得其中之一权限集授权后，可通过使用 [authorizer_access_token](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/AuthorizerAccessToken>) 代商家进行调用，具体可查看 [第三方调用](<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/call_interface>) 说明文档。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [authorizer_access_token](https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
report_action | string | 是 | 上报动作，目前支持（sendSmsTask：发送短信；openH5：H5 打开）
env_id | string | 是 | [环境 ID](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/basis/quickstart)
activity_id | string | 是 | 活动 ID
task_id | string | 是 | 任务 ID【report_action 取 sendSmsTask 时必填】
phone_count | string | 是 | 下发手机号数量【report_action 取 sendSmsTask 时必填】
channel_id | string | 是 | 渠道 ID（云开发 CMS 使用 _cms_sms_）【report_action 取 openH5 时必填】
session_id | string | 是 | 会话 ID【report_action 取 openH5 时必填】

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 sendSmsTask 请求数据示例

请求示例

```json
{
  "report_action": "sendSmsTask",
  "env_id": "xxx",
  "activity_id": "xxx",
  "task_id": "xxx",
  "phone_count": "12345"
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": ""
}
```

### 5.2 云函数调用示例

请求示例

```js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.cloudbase.report({
        "reportAction": 'sendSmsTask',
        "envId": 'xxx',
        "activityId": 'xxx',
        "taskId": 'xxx',
        "phoneCount": '12345'
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
  "errMsg": "openapi.cloudbase.report:ok"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试

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


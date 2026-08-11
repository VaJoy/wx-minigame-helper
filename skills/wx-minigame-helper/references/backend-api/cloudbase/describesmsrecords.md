---
title: "查询短信记录"
type: backend-api
category: backend-api/cloudbase
api: "describeSmsRecords"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/cloudbase/api_describesmsrecords.html
---

# 查询短信记录

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：describeSmsRecords

该接口用于查询 2 个月内的短信记录。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/tcb/describesmsrecords?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：cloudbase.describeSmsRecords
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
EnvId | string | 是 | 环境 ID
StartDate | string | 是 | 开始日期, 如:2021-01-01
EndDate | string | 是 | 结束日期, 如2021-01-07
Mobile | string | 是 | 电话号码
QueryId | string | 是 | 查询ID
PageNumber | number | 是 | 页码(1开始)
PageSize | number | 是 | 每页条目数

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
SmsRecords | [objarray](#Res__SmsRecords<Array>) | 发送记录列表
TotalCount | number | 记录总数
RequestId | string | 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

### Res.SmsRecords(Array) `Object Payload`

发送记录列表

参数名 | 类型 | 说明
---|---|---
Mobile | string | 手机号码
Content | string | 短信内容
ContentSize | number | 短信内容长度
Fee | number | 计费条数
CreateTime | string | 发送时间
ReceivedTime | string | 用户接收时间
Status | string | sent(成功), error(失败)
Remarks | string | 备注

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 HTTPS调用

请求示例

```json
{
  "PostData": {
    "StartDate": "2021-03-01",
    "EndDate": "2021-03-23",
    "EnvId": "xxx",
    "QueryId": "xxx",
    "PageNumber": 1,
    "PageSize": 20
  }
}
```

返回示例

```json
{
  "SmsRecords": [
    {
      "Content": "【XXX】XXX，跳转小程序 https://xxx/xxx 回T退订",
      "ContentSize": 51,
      "CreateTime": "2021-03-22 17:18:37",
      "Fee": 1,
      "Mobile": "+86xxxxxxxxxxx",
      "ReceivedTime": "2021-03-22 17:18:43",
      "Remarks": "用户短信接收成功",
      "Status": "sent"
    }
  ],
  "TotalCount": 1,
  "RequestId": "bf34127a-35bd-48a2-86bb-ae583d2ff9ff"
}
```

### 5.2 云函数调用

请求示例

```js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi({ convertCase: false }).cloudbase.describeSmsRecords({
        "PostData": {
          "StartDate": '2021-03-01',
          "EndDate": '2021-03-23',
          "EnvId": 'xxx',
          "QueryId": 'xxx',
          "PageNumber": 1,
          "PageSize": 20
        }
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
  "Response": {
    "SmsRecords": [
      {
        "Content": "【XXX】XXX，跳转小程序 https://xxx/xxx 回T退订",
        "ContentSize": 51,
        "CreateTime": "2021-03-22 17:18:37",
        "Fee": 1,
        "Mobile": "+86xxxxxxxxxxx",
        "ReceivedTime": "2021-03-22 17:18:43",
        "Remarks": "用户短信接收成功",
        "Status": "sent"
      }
    ],
    "TotalCount": 1,
    "RequestId": "bf34127a-35bd-48a2-86bb-ae583d2ff9ff"
  },
  "errMsg": "openapi.cloudbase.describeSmsRecords:ok"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
85088 | no qbase privilege | 该APP未开通云开发

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


---
title: "获取云开发数据"
type: backend-api
category: backend-api/cloudbase
api: "getCloudBaseStatistics"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/cloudbase/api_getcloudbasestatistics.html
---

# 获取云开发数据

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：getCloudBaseStatistics

该接口用于获取云开发数据。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/tcb/getstatistics?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：cloudbase.getStatistics
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
action | string | 是 | 获取动作，目前支持（smsMarketingOverviewData：短信营销概览数据；smsMarketingConversionData：短信营销转化数据；smsMarketingRealTimeData：短信营销实时数据）
begin_date | number | 是 | 开始时间戳
end_date | number | 是 | 结束时间戳
page_limit | number | 是 | 分页 limit【action 取 smsMarketingOverviewData、smsMarketingConversionData 时必填】
page_offset | number | 是 | 分页 offset【action 取 smsMarketingOverviewData、smsMarketingConversionData 时必填】

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
data_column | [objarray](#Res__data_column<Array>) | 数据列定义
data_value | [objarray](#Res__data_value<Array>) | 数据行
total_num | number | 总行数

### Res.data_column(Array) `Object Payload`

数据列定义

参数名 | 类型 | 说明
---|---|---
col_id | string | 列 id
col_name | string | 列名
col_data_type | string | 数据类型（0:string；1:number；2:double）

### Res.data_value(Array) `Object Payload`

数据行

参数名 | 类型 | 说明
---|---|---
data_value | array | 数据值

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 HTTPS请求示例

请求示例

```json
{
  "action": "smsMarketingOverviewData",
  "begin_date": 1614182400,
  "end_date": 1614268800,
  "page_offset": 0,
  "page_limit": 1000,
  "condition": {
    "env_id": "xxx",
    "activity_id": "xxx",
    "by_channel_id": "0"
  }
}
```

返回示例

```json
{
  "data_column": [
    {
      "col_id": "appid",
      "col_name": "小程序id",
      "col_data_type": "0"
    },
    {
      "col_id": "env_id",
      "col_name": "环境id",
      "col_data_type": "0"
    },
    {
      "col_id": "activity_id",
      "col_name": "活动id",
      "col_data_type": "0"
    },
    {
      "col_id": "channel_id",
      "col_name": "渠道",
      "col_data_type": "0"
    },
    {
      "col_id": "h5_open_uercnt",
      "col_name": "h5打开人数",
      "col_data_type": "1"
    },
    {
      "col_id": "jump_wxapp_uercnt",
      "col_name": "小程序跳转人数",
      "col_data_type": "1"
    },
    {
      "col_id": "sms_send_uercnt",
      "col_name": "短信下发人数",
      "col_data_type": "1"
    },
    {
      "col_id": "sms_send_list",
      "col_name": "下发记录数组",
      "col_data_type": "0"
    },
    {
      "col_id": "jump_wxapp_uercnt_percent",
      "col_name": "跳转人数渠道占比",
      "col_data_type": "2"
    },
    {
      "col_id": "h5_open_uercnt_percent",
      "col_name": "h5打开人数渠道占比",
      "col_data_type": "2"
    },
    {
      "col_id": "h5_sms_rate",
      "col_name": "短信到h5转化率",
      "col_data_type": "2"
    },
    {
      "col_id": "jump_h5_rate",
      "col_name": "h5到跳转转化率",
      "col_data_type": "2"
    }
  ],
  "data_value": [
    {
      "data_value": [
        "xxxxxxxxxxxxxxxxxx",
        "wedcvfr",
        "21ded5cb6001691405171ba161c603d1",
        "_cms_sms_",
        "5000",
        "3000",
        "10000",
        "[task1:5000,task2:5000]",
        "0.535714",
        "0.625",
        "0.5",
        "0.6"
      ]
    }
  ],
  "total_num": 1
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
    const result = await cloud.openapi.cloudbase.getStatistics({
        "action": 'smsMarketingOverviewData',
        "condition": {
          "envId": 'xxx',
          "activityId": 'xxx',
          "byChannelId": '0'
        },
        "beginDate": 1614182400,
        "endDate": 1614268800,
        "pageOffset": 0,
        "pageLimit": 1000
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
  "dataColumn": [
    {
      "colId": "appid",
      "colName": "小程序id",
      "colDataType": "0"
    },
    {
      "colId": "env_id",
      "colName": "环境id",
      "colDataType": "0"
    },
    {
      "colId": "activity_id",
      "colName": "活动id",
      "colDataType": "0"
    },
    {
      "colId": "channel_id",
      "colName": "渠道",
      "colDataType": "0"
    },
    {
      "colId": "h5_open_uercnt",
      "colName": "h5打开人数",
      "colDataType": "1"
    },
    {
      "colId": "jump_wxapp_uercnt",
      "colName": "小程序跳转人数",
      "colDataType": "1"
    },
    {
      "colId": "sms_send_uercnt",
      "colName": "短信下发人数",
      "colDataType": "1"
    },
    {
      "colId": "sms_send_list",
      "colName": "下发记录数组",
      "colDataType": "0"
    },
    {
      "colId": "jump_wxapp_uercnt_percent",
      "colName": "跳转人数渠道占比",
      "colDataType": "2"
    },
    {
      "colId": "h5_open_uercnt_percent",
      "colName": "h5打开人数渠道占比",
      "colDataType": "2"
    },
    {
      "colId": "h5_sms_rate",
      "colName": "短信到h5转化率",
      "colDataType": "2"
    },
    {
      "colId": "jump_h5_rate",
      "colName": "h5到跳转转化率",
      "colDataType": "2"
    }
  ],
  "dataValue": [
    {
      "dataValue": [
        "xxxxxxxxxxxxxxxxxx",
        "wedcvfr",
        "21ded5cb6001691405171ba161c603d1",
        "_cms_sms_",
        "5000",
        "3000",
        "10000",
        "[task1:5000,task2:5000]",
        "0.535714",
        "0.625",
        "0.5",
        "0.6"
      ]
    }
  ],
  "totalNum": 1,
  "errMsg": "openapi.cloudbase.getStatistics:ok"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
10011 | 没有数据 | 

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


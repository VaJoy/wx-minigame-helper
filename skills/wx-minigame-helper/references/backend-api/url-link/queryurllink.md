---
title: "查询加密URLLink"
type: backend-api
category: backend-api/url-link
api: "queryUrlLink"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/url-link/api_queryurllink.html
---

# 查询加密URLLink

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：queryUrlLink

该接口用于查询小程序加密 url_link 配置

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/query_urllink?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：urllink.query
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口支持第三方平台代商家调用。
- 该接口所属的权限集 id 为：88
- 服务商获得其中之一权限集授权后，可通过使用 [authorizer_access_token](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/AuthorizerAccessToken>) 代商家进行调用，具体可查看 [第三方调用](<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/call_interface>) 说明文档。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)、[authorizer_access_token](https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
url_link | string | 否 | 小程序加密 url_link。
query_type | number | 否 | 查询类型。默认值0，查询 url_link 信息：0， 查询每天剩余访问次数：1

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
url_link_info | [object](#Res__url_link_info) | url_link 配置
quota_info | [object](#Res__quota_info) | quota 配置

### Res.url_link_info `Object Payload`

url_link 配置

参数名 | 类型 | 说明
---|---|---
appid | string | 小程序 appid
path | string | 小程序页面路径
query | string | 小程序页面query
create_time | number | 创建时间，为 Unix 时间戳
expire_time | number | 到期失效时间，为 Unix 时间戳，0 表示永久生效
env_version | string | 要打开的小程序版本。正式版为"release"，体验版为"trial"，开发版为"develop"

### Res.quota_info `Object Payload`

quota 配置

参数名 | 类型 | 说明
---|---|---
remain_visit_quota | number | URL Scheme（加密+明文）/加密 URL Link 单天剩余访问次数

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 查询url_link

请求示例

```json
{
  "url_link": "https://wxaurl.cn/BQZRrcFCPvg?cq=a=hello",
  "query_type": 0
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "url_link_info": {
    "appid": "appid",
    "path": "",
    "query": "a=hello",
    "create_time": 611928113,
    "expire_time": 0,
    "env_version": "release",
    "cloud_base": {
      "env": "",
      "doamin": "",
      "path": "",
      "query": "",
      "resource_appid": ""
    }
  }
}
```

### 5.2 查询剩余访问次数

请求示例

```json
{
  "query_type": 1
}
```

返回示例

{
"errcode": 0,
"errmsg": "ok",
"quota_info": {
"remain_visit_quota": 1000000
}
}
}

### 5.3 云函数调用

请求示例

```json
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.urllink.query({
        "urlLink": 'https://wxaurl.cn/BQZRrcFCPvg'
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
  "errcode": 0,
  "errmsg": "ok",
  "urlLinkInfo": {
    "appid": "appid",
    "path": "",
    "query": "",
    "createTime": 611928113,
    "expireTime": 0,
    "envVersion": "release",
    "cloudBase": {
      "env": "",
      "doamin": "",
      "path": "",
      "query": "",
      "resourceAppid": ""
    }
  }
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40097 | invalid args | 参数错误
85403 | not found | scheme/url link不存在

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

相关前端接口（小游戏客户端）：
- [小程序跳转与打开（前端 wx.navigateToMiniProgram 等）](../../api/navigate/README.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


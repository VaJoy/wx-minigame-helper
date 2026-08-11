---
title: "获取加密URLLink"
type: backend-api
category: backend-api/url-link
api: "generateUrlLink"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/url-link/api_generateurllink.html
---

# 获取加密URLLink

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：generateUrlLink

获取小程序 URL Link，适用于短信、邮件、网页、微信内等拉起小程序的业务场景。目前仅针对国内非个人主体的小程序开放，详见[获取 URL Link](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-link>)

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/generate_urllink?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：urllink.generate
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
path | string | 否 | 通过 URL Link 进入的小程序页面路径，必须是已经发布的小程序存在的页面，不可携带 query 。path 为空时会跳转小程序主页
query | string | 否 | 通过 URL Link 进入小程序时的query，最大1024个字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~%
expire_type | number | 否 | 默认值0.小程序 URL Link 失效类型，失效时间：0，失效间隔天数：1
expire_time | number | 否 | 到期失效的 URL Link 的失效时间，为 Unix 时间戳。生成的到期失效 URL Link 在该时间前有效。最长有效期为30天。expire_type 为 0 必填
expire_interval | number | 否 | 到期失效的URL Link的失效间隔天数。生成的到期失效URL Link在该间隔时间到达前有效。最长间隔天数为30天。expire_type 为 1 必填
cloud_base | [object](#Body__cloud_base) | 否 | 云开发静态网站自定义 H5 配置参数，可配置中转的云开发 H5 页面。不填默认用官方 H5 页面
env_version | string | 否 | 默认值"release"。要打开的小程序版本。正式版为 "release"，体验版为"trial"，开发版为"develop"，仅在微信外打开时生效。

### Body.cloud_base `Object Payload`

云开发静态网站自定义 H5 配置参数，可配置中转的云开发 H5 页面。不填默认用官方 H5 页面

参数名 | 类型 | 必填 | 说明
---|---|---|---
env | string | 是 | 云开发环境
domain | string | 否 | 静态网站自定义域名，不填则使用默认域名
path | string | 否 | 云开发静态网站 H5 页面路径，不可携带 query
query | string | 否 | 云开发静态网站 H5 页面 query 参数，最大 1024 个字符，只支持数字，大小写英文以及部分特殊字符：`!#$&'()*+,/:;=?@-._~%``
resource_appid | string | 否 | 第三方批量代云开发时必填，表示创建该 env 的 appid （小程序/第三方平台）

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
url_link | string | 生成的小程序 URL Link

## 4. 注意事项

#### 调用上限

- 生成端：每天生成 URL Scheme（加密+明文） 和 URL Link 的总数量上限为50万
- 打开端：每天通过 URL Scheme（加密+明文） 和 URL Link 打开小程序的总次数上限为300万
- **自 2023 年 12 月 19 日起，取消 URL Link 一人一链的限制，支持同一条连接被多名用户访问。详细调整说明可见[《URL Scheme 和 URL Link优化公告》](<https://developers.weixin.qq.com/community/develop/doc/00024e32cbc36055c0c0a34b066401>)。**

#### 返回值说明

- 如果调用成功，会直接返回生成的小程序 URL Link。如果请求失败，会返回 JSON 格式的数据。

#### 其他注意事项

- **加密 URL Link 支持开发者自行在链接后面拼接 query 参数，详见[获取 URL Link](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-link>)**
- 只能生成已发布的小程序的 URL Link。
- 在微信内或者安卓手机打开 URL Link 时，默认会先跳转官方 H5 中间页，如果需要定制 H5 内容，可以使用云开发静态网站。

## 5. 代码示例

### 5.1 HTTPS请求

请求示例

```json
{
  "path": "/pages/publishHomework/publishHomework",
  "query": "",
  "expire_type": 1,
  "expire_interval": 1,
  "env_version": "release",
  "cloud_base": {
    "env": "xxx",
    "domain": "xxx.xx",
    "path": "/jump-wxa.html",
    "query": "a=1&b=2"
  }
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "url_link": "URL Link"
}
```

### 5.2 云函数调用

请求示例

```json
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.urllink.generate({
        "path": '/pages/publishHomework/publishHomework',
        "query": '',
        "isExpire": true,
        "expireType": 1,
        "expireInterval": 1,
        "envVersion": 'release',
        "cloudBase": {
          "env": 'xxx',
          "domain": 'xxx.xx',
          "path": '/jump-wxa.html',
          "query": 'a=1&b=2'
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
  "errCode": 0,
  "errMsg": "ok",
  "urlLink": "URL Link"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
40002 | invalid grant_type | 暂无生成权限（个人主体小程序无权限，或者NFC 能力的小程序未申请权限）
40013 | invalid appid | 生成权限被封禁
40165 | invalid weapp pagepath | 参数path填写错误，更正后重试
40212 | invalid query | 参数query填写错误 ，query格式遵循URL标准，即k1=v1&k2=v2
44990 | reach max api second frequence limit | 频率过快，超过100次/秒；降低调用频率
44993 | reach max api day frequence limit | 单天生成加密 URL Scheme+URL Link 数量超过上限50万
85079 | miniprogram has no online release | 小程序没有线上版本，即小程序尚未发布，不可进行该操作
85088 | 未开通云开发 | 请先开通云开发
85401 | time limit between 1min and 30days | 参数expire_time填写错误，时间间隔大于1分钟且小于30天，更正后重试
85402 | invalid env_version | 参数env_version填写错误，更正后重试
85406 | daily visit limit | URL Scheme（加密+明文）/加密 URL Link 单天累加访问次数超过上限
85407 | no scheme permission | 暂无生成权限
85408 | appid banned | 生成权限被封禁

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


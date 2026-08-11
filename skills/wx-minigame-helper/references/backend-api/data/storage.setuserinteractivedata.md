---
title: "写用户关系链互动数据存储"
type: backend-api
category: backend-api/data
api: "storage.setUserInteractiveData"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/data/api_storage.setuserinteractivedata.html
---

# 写用户关系链互动数据存储

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：storage.setUserInteractiveData

本接口用来写入用户关系链互动数据存储

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/setuserinteractivedata?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
```

### 云调用

- 调用方法：storage.setUserInteractiveData
- 调用说明：openid（用户唯一标识符）需作为参数传入，另外 kv_list 参数改为 kvList，详情查看下文调用示例
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 示例 | 说明
---|---|---|---|---
access_token | string | 是 | ACCESS_TOKEN | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)
openid | string | 是 | - | 用户唯一标识符
signature | string | 是 | - | 用户登录态签名，签名算法请参考[用户登录态签名算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature)
sig_method | string | 是 | - | 用户登录态签名的哈希方法，如 hmac_sha256 等，请参考[用户登录态签名算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
kv_list | [objarray](#Body__kv_list<Array>) | 是 | 要上报的数据（云调用时，该参数名为 kvList）

### Body.kv_list(Array) `Object Payload`

要上报的数据（云调用时，该参数名为 kvList）

参数名 | 类型 | 必填 | 说明
---|---|---|---
key | string | 是 | 数据的 key，目前可以为 '1' - '50'
value | number | 是 | 数据的 value

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 HTTP 示例

请求示例

```json
{
    "kv_list": [
        {
          "key":"1",
          "value":0
        }
    ]
}
```

返回示例

```json
{
    "errcode": 0,
    "errmsg": ""
}
```

### 5.2 云调用示例

请求示例

```js
// cloud = require('wx-server-sdk')
// ...
// 方法返回 Promise
cloud.openapi.storage.setUserInteractiveData({
  openid: 'xxx',
  kvList: [
    {
      key: '1',
      value: 1,
    },
    {
      key: '2',
      value: 2,
    },
  ],
});
```

返回示例

```json
{
    "errcode": 0,
    "errmsg": ""
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功
87081 | 非法的 openid
87082 | 非法的 key

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.setUserCloudStorage（前端上报用户托管数据）](../../api/open/data/wx.setUserCloudStorage.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


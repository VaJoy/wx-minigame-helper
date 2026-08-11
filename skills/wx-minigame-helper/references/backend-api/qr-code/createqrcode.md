---
title: "获取小程序二维码"
type: backend-api
category: backend-api/qr-code
api: "createQRCode"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/qr-code/api_createqrcode.html
---

# 获取小程序二维码

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：createQRCode

获取小程序二维码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制，详见[获取二维码](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code>)。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=ACCESS_TOKEN
```

> **支持加密请求：** 本接口支持服务通信二次加密和签名，可有效防止数据篡改与泄露。[查看详情](<https://developers.weixin.qq.com/miniprogram/dev/server/getting_started/api_signature>)

### 云调用

- 调用方法：wxacode.createQRCode
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口支持第三方平台代商家调用。
- 该接口所属的权限集 id 为：17
- 服务商获得其中之一权限集授权后，可通过使用 [authorizer_access_token](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/AuthorizerAccessToken>) 代商家进行调用，具体可查看 [第三方调用](<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/Before_Develop/call_interface>) 说明文档。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)、[authorizer_access_token](https://developers.weixin.qq.com/doc/oplatform/openApi/ticket-token/api_getauthorizeraccesstoken)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
path | string | 是 | 扫码进入的小程序页面路径，最大长度 128 个字符，不能为空；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。scancode_time为系统保留参数，不允许配置。
width | number | 否 | 二维码的宽度，单位 px。最小 280px，最大 1280px;默认是430

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
buffer | formdata | 图片 Buffer
errcode | string | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

- 如果调用成功，会直接返回图片二进制内容，如果请求失败，会返回 JSON 格式的数据。
- POST 参数需要转成 JSON 字符串，不支持 form 表单提交。
- 接口只能生成已发布的小程序的二维码。开发版的带参二维码可以在开发者工具预览时生成。
- 与 [wxacode.get](<https://developers.weixin.qq.com/doc/channels/API/funds/qrcode/get.html>) 总共生成的码数量限制为 100,000，请谨慎调用。

## 5. 代码示例

### 5.1 HTTP调用示例（成功）

请求示例

```json
{
  "path": "page/index/index",
  "width": 430
}
```

返回示例

```text
图片 Buffer
```

### 5.2 HTTP调用示例（失败）

请求示例

```json
{
  "path": "",
  "width": 430
}
```

返回示例

```json
{
  "errcode": 40159,
  "errmsg": "invalid length for path  or thedata is not json string"
}
```

### 5.3 云调用示例（成功）

请求示例

```json
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.createQRCode({
        "path": 'page/index/index',
        "width": 430
      })
    return result
  } catch (err) {
    return err
  }
}
```

返回示例

```text
图片 Buffer
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40159 | invalid length for path, or the data is not json string | path 不能为空，且长度不能大于 128 字节
45029 | qrcode count out of limit | 生成码个数总和到达最大个数限制
85096 | page or path not allow include scancode_time field | scancode_time为系统保留参数，不允许配置

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


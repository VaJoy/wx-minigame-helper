---
title: "获取不限制的小程序码"
type: backend-api
category: backend-api/qr-code
api: "getUnlimitedQRCode"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/qr-code/api_getunlimitedqrcode.html
---

# 获取不限制的小程序码

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：getUnlimitedQRCode

该接口用于获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。 更多用法详见 [获取小程序码](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code>)。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
```

> **支持加密请求：** 本接口支持服务通信二次加密和签名，可有效防止数据篡改与泄露。[查看详情](<https://developers.weixin.qq.com/miniprogram/dev/server/getting_started/api_signature>)

### 云调用

- 调用方法：wxacode.getUnlimited
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
scene | string | 是 | 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
page | string | 否 | 默认是主页，页面 page，例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面。scancode_time为系统保留参数，不允许配置
check_path | boolean | 否 | 默认是true，检查page 是否存在，为 true 时 page 必须是已经发布的小程序存在的页面（否则报错）；为 false 时允许小程序未发布或者 page 不存在， 但page 有数量上限（60000个）请勿滥用。
env_version | string | 否 | 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。
width | number | 否 | 默认430，二维码的宽度，单位 px，最小 280px，最大 1280px
auto_color | boolean | 否 | 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
line_color | [object](#Body__line_color) | 否 | 默认是{"r":0,"g":0,"b":0} 。auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
is_hyaline | boolean | 否 | 默认是false，是否需要透明底色，为 true 时，生成透明底色的小程序

### Body.line_color `Object Payload`

默认是{"r":0,"g":0,"b":0} 。auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示

参数名 | 类型 | 必填 | 说明
---|---|---|---
r | - | 是 | 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
g | - | 是 | 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
b | - | 是 | 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
buffer | buffer | 图片 Buffer
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

- 如果调用成功，会直接返回图片二进制内容，如果请求失败，会返回 JSON 格式的数据。
- POST 参数需要转成 JSON 字符串，不支持 form 表单提交。
- 调用分钟频率受限（5000次/分钟），如需大量小程序码，建议预生成

#### 获取 scene 值

- scene 字段的值会作为 query 参数传递给小程序/小游戏。用户扫描该码进入小程序/小游戏后，开发者可以获取到二维码中的 scene 值，再做处理逻辑。
- 调试阶段可以使用开发工具的条件编译自定义参数 scene=xxxx 进行模拟，开发工具模拟时的 scene 的参数值需要进行 encodeURIComponent

##### 小程序

```json
Page({
  onLoad (query) {
    // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
    const scene = decodeURIComponent(query.scene)
  }
})
```

##### 小游戏

```json
// 在首次启动时通过 wx.getLaunchOptionsSync 接口获取
const {query} = wx.getLaunchOptionsSync()
const scene = decodeURIComponent(query.scene)

// 或者在 wx.onShow 事件中获取
wx.onShow(function ({query}) {
  // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
  const scene = decodeURIComponent(query.scene)
})
```

## 5. 代码示例

### 5.1 HTTP调用示例（成功）

请求示例

```json
{
  "page": "pages/index/index",
  "scene": "a=1",
  "check_path": true,
  "env_version": "release"
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
  "page": "pages/index/index",
  "scene": "a=1",
  "check_path": true,
  "env_version": "release_error"
}
```

返回示例

```json
{
  "errcode": 40097,
  "errmsg": "invalid args"
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
    const result = await cloud.openapi.wxacode.getUnlimited({
        "page": 'pages/index/index',
        "scene": 'a=1',
        "checkPath": true,
        "envVersion": 'release'
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
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
40097 | invalid args | 参数错误
40129 | invalid scene | 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
40169 | invalid length for scene  or thedata is not json string | scene 不合法
41030 | invalid page | page路径不正确：根路径前不要填加 /，不能携带参数（参数请放在scene字段里），需要保证在现网版本小程序中存在，与app.json保持一致。 设置check_path=false可不检查page参数。
85096 | not allow include scancode_time field | scancode_time为系统保留参数，不允许配置

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


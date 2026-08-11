---
title: "多媒体内容安全识别"
type: backend-api
category: backend-api/wxa-sec-check
api: "mediaCheckAsync"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/wxa-sec-check/api_mediacheckasync.html
---

# 多媒体内容安全识别

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：mediaCheckAsync

本接口用于异步校验图片/音频是否含有违法违规内容。

- 1.0 版本异步接口文档[【点击查看】](<https://developers.weixin.qq.com/miniprogram/dev/framework/security.mediaCheckAsync-v1>)， 1.0 版本同步接口文档[【点击查看】](<https://developers.weixin.qq.com/miniprogram/dev/framework/security.imgSecCheck>)，1.0版本在2021年9月1日停止更新，请尽快更新至2.0。

应用场景举例：

1. 语音风险识别：社交类用户发表的语音内容检测；
2. 图片智能鉴黄：涉及拍照的工具类应用(如美拍，识图类应用)用户拍照上传检测；电商类商品上架图片检测；媒体类用户文章里的图片检测等；
3. 敏感人脸识别：用户头像；媒体类用户文章里的图片检测；社交类用户上传的图片检测等。

**频率限制：单个 appId 调用上限为 2000 次/分钟，200,000 次/天；文件大小限制：单个文件大小不超过10M**

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/media_check_async?access_token=ACCESS_TOKEN
```

> **支持加密请求：** 本接口支持服务通信二次加密和签名，可有效防止数据篡改与泄露。[查看详情](<https://developers.weixin.qq.com/miniprogram/dev/server/getting_started/api_signature>)

### 云调用

- 调用方法：security.mediaCheckAsync
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

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
media_url | string | 是 | 要检测的图片或音频的url，支持图片格式包括jpg, jpeg, png, bmp, gif（取首帧），支持的音频格式包括mp3, aac, ac3, wma, flac, vorbis, opus, wav
media_type | number | 是 | 1:音频;2:图片
version | number | 是 | 接口版本号，2.0版本为固定值2
scene | number | 是 | 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志）
openid | string | 是 | 用户的openid（用户需在近两小时访问过小程序）

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
trace_id | string | 唯一请求标识，标记单次请求，用于匹配异步推送结果

## 4. 注意事项

media_type 需要准确填写 url 对应的多媒体类型，media_url 需要保证可以被检测服务器下载。

#### 异步检测结果推送

异步检测结果在 30 分钟内会推送到你的消息接收服务器。[点击查看消息接收服务器配置](<https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push>)

返回的 JSON 数据包

属性 | 类型 | 说明
---|---|---
ToUserName | string | 小程序的username
FromUserName | string | 平台推送服务UserName
CreateTime | number | 发送时间
MsgType | string | 默认为：event
Event | string | 默认为：wxa_media_check
appid | string | 小程序的appid
trace_id | string | 任务id
version | number | 可用于区分接口版本
errcode | number | 错误码，仅当该值为0时，结果有效。该值为-1008时表示下载错误，请检查媒体链接是否有效。
result | object | 综合结果
detail | array | 详细检测结果

result为综合结果，包含的属性有

属性 | 类型 | 说明
---|---|---
suggest | string | 建议，有risky、pass、review三种值
label | number | 命中标签枚举值，100 正常；20001 时政；20002 色情；20006 违法犯罪；21000 其他

detail为详细检测结果，包含的属性有

属性 | 类型 | 说明
---|---|---
strategy | string | 策略类型
errcode | number | 错误码，仅当该值为0时，该项结果有效
suggest | string | 建议，有risky、pass、review三种值
label | number | 命中标签枚举值，100 正常；20001 时政；20002 色情；20006 违法犯罪；21000 其他
prob | number | 0-100，代表置信度，越高代表越有可能属于当前返回的标签（label）

#### 异步检测结果推送示例

```json
{
   "ToUserName": "gh_9df7d78a1234",
   "FromUserName": "o4_t144jTUSEoxydysUA2E234_tc",
   "CreateTime": 1626959646,
   "MsgType": "event",
   "Event": "wxa_media_check",
   "appid": "wx8f16a5be77871234",
   "trace_id": "60f96f1d-3845297a-1976a3ae",
   "version": 2,
   "detail": [{
        "strategy": "content_model",
        "errcode": 0,
        "suggest": "pass",
        "label": 100,
        "prob": 90
   }],
   "errcode": 0,
   "errmsg": "ok",
   "result": {
        "suggest": "pass",
        "label": 100
   }
}
```

## 5. 代码示例

请求示例

```json
{
  "openid": "OPENID",
  "scene": 1,
  "version": 2,
  "media_url": "https://developers.weixin.qq.com/miniprogram/assets/images/head_global_z_@all.png",
  "media_type": 2
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "trace_id": "60f96f1d-3845297a-1976a3ae"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40001 | invalid credential  access_token isinvalid or not latest | access_token 无效或不为最新获取的 access_token，请开发者确认access_token的有效性
40003 | invalid openid | 不合法的 OpenID ，请开发者确认 OpenID 的有效性
40004 | invalid media type | media type错误（目前支持多媒体类型 1 音频；2 图片）
43104 | The openid does not match the appid | appid与 openid 不匹配
44991 | reach max api minute frequence | 超出接口每分钟调用限制
45009 | reach max api daily quota limit | 超出接口每日调用限制
61010 | code is expired | 用户访问记录超时（用户未在近两小时访问小程序）
87020 | repeat request limit exceeded | 重复请求超出接口调用限制

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


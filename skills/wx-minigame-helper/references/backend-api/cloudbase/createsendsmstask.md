---
title: "创建发短信任务"
type: backend-api
category: backend-api/cloudbase
api: "createSendSmsTask"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/cloudbase/api_createsendsmstask.html
---

# 创建发短信任务

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：createSendSmsTask

该接口用于创建发短信任务。发送的短信支持打开云开发静态网站 H5，进而在 H5 里可以打开小程序。详情可参考[静态网站 H5 跳小程序](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/staticstorage/jump-miniprogram>)。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/tcb/createsendsmstask?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：cloudbase.createSendSmsTask
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
env | string | 是 | 环境 ID
file_url | string | 是 | 短信 CSV 文件地址CodeUri
template_id | string | 是 | 短信模版 ID 默认值：844110（销类短信模版 ID)

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
query_id | string | 查询 ID

## 4. 注意事项

#### 短信格式：

【小程序名称】${content}，点击 云开发静态网站 URL 打开小程序名称小程序，退订回T。 示例：【云开发】能力上新，跳转小程序https://dllzff.cn/VcdrUJK0 退订回T。

#### 短信由签名和正文内容组成：

- 短信签名是位于短信正文前【】中的署名，小程序发送短信时，签名为小程序名称。
- 正文内容是由短信模板和变量构成，{1}，跳转小程序 {2} 退订回T，模板参数中 {1}，{2} 是变量：

{1} ：用户可自定义传入的内容，当前最长为30个字。

{2} ：用户传入的静态托管的地址，例如 /action/index.html?action=double12。

#### 通过该 API 来实现发短信的完整过程：

1、下载 CSV 模版文件，并按格式填写手机号、短信内容、跳转的静态托管地址

2、上传填写后的 CSV 文件, 并获取CodeUri。

- 调用描述扩展上传文件信息（详见describeExtensionUploadInfo接口），获取上传链接 UploadUrl（FileType 参数填 SMS）
- 使用 HTTP PUT 方法请求 UploadUrl 上传 CSV 文件

3、调用本 API，创建发短信任务，并获取到查询 ID

4、通过查询 ID 可以查询短信任务的执行情况，详见describeSmsRecords接口。

## 5. 代码示例

### 5.1 HTTP示例

请求示例

```json
{
  "env": "xxx",
  "file_url": "xxx"
}
```

返回示例

```json
{
  "errcode": 0,
  "query_id": "xxx"
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
    const result = await cloud.openapi.cloudbase.createSendSmsTask({
      env: 'xxx',
      fileUrl: 'xxx',
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
  "errCode": 0,
  "queryId": "xxx",
  "errMsg": "openapi.cloudbase.createSendSmsTask:ok"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-601033 | 仅支持非个人主体小程序
-601032 | 小程序昵称不能为空
-601028 | 该环境没有开通静态网站
-601027 | 无效的环境
-501007 | 参数有误，具体原因参考 errmsg
-1 | 系统繁忙，此时请开发者稍候再试

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


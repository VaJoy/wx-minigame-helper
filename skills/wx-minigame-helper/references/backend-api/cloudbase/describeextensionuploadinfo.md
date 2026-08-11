---
title: "描述扩展上传文件信息"
type: backend-api
category: backend-api/cloudbase
api: "describeExtensionUploadInfo"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/cloudbase/api_describeextensionuploadinfo.html
---

# 描述扩展上传文件信息

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：describeExtensionUploadInfo

该接口用于描述扩展上传文件信息。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/tcb/describeextensionuploadinfo?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：cloudbase.describeExtensionUploadInfo
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
ExtensionFiles | [objarray](#Body__ExtensionFiles<Array>) | 是 | 待上传的文件列表

### Body.ExtensionFiles(Array) `Object Payload`

待上传的文件列表

参数名 | 类型 | 必填 | 说明
---|---|---|---
FileType | string | 是 | 文件类型。枚举值 FUNCTION：函数代码 STATIC：静态托管代码 SMS：短信文件
FileName | string | 是 | 文件名，长度不超过24

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
FilesData | [objarray](#Res__FilesData<Array>) | 待上传文件的信息数组
RequestId | string | 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。

### Res.FilesData(Array) `Object Payload`

待上传文件的信息数组

参数名 | 类型 | 说明
---|---|---
CodeUri | string | 模板里使用的地址
UploadUrl | string | 上传文件的临时地址，含签名
CustomKey | string | 自定义密钥。如果为空，则表示不需要加密
MaxSize | number | 文件大小限制，单位M，客户端上传前需要主动检查文件大小，超过限制的文件会被删除。

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

### 5.1 HTTPS调用

请求示例

```json
{
  "PostData": {
    "ExtensionFiles": [
      {
        "FileType": "SMS",
        "FileName": "gongzi.csv"
      }
    ]
  }
}
```

返回示例

```json
{
  "Response": {
    "FilesData": [
      {
        "CodeUri": "extension://xxx.zip",
        "UploadUrl": "https://xxx",
        "CustomKey": "",
        "MaxSize": 30
      }
    ],
    "RequestId": "83793d78-b90b-4b1e-9454-d7b4f5317f01"
  }
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
    const result = await cloud.openapi({ convertCase: false }).cloudbase.describeExtensionUploadInfo({
        "PostData": {
          "ExtensionFiles": [
            {
              "FileType": 'SMS',
              "FileName": 'gongzi.csv'
            }
          ]
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
    "FilesData": [
      {
        "CodeUri": "extension://xxx.zip",
        "UploadUrl": "https://xxx",
        "CustomKey": "",
        "MaxSize": 30
      }
    ],
    "RequestId": "83793d78-b90b-4b1e-9454-d7b4f5317f01"
  },
  "errMsg": "openapi.cloudbase.describeExtensionUploadInfo:ok"
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


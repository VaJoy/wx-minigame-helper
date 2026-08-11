---
title: "修改动态消息"
type: backend-api
category: backend-api/updatable-message
api: "setUpdatableMsg"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/updatable-message/api_setupdatablemsg.html
---

# 修改动态消息

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：setUpdatableMsg

该接口用于修改被分享的动态消息。详见[动态消息](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message>)。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/cgi-bin/message/wxopen/updatablemsg/send?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：updatableMessage.setUpdatableMsg
- 调用说明：请求参数改为驼峰命名，具体看下文调用示例
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

参数名 | 类型 | 必填 | 说明 | 枚举
---|---|---|---|---
activity_id | string | 是 | 动态消息的 ID，通过 createActivityId 接口获取 | -
target_state | number | 是 | 动态消息修改后的状态 | [枚举值](#Enum_Body__target_state)
template_info | [object](#Body__template_info) | 是 | 动态消息对应的模板信息 | -

### Body.template_info `Object Payload`

动态消息对应的模板信息

参数名 | 类型 | 必填 | 说明
---|---|---|---
parameter_list | [objarray](#Body__template_info__parameter_list<Array>) | 是 | 模板中需要修改的参数

### Body.template_info.parameter_list(Array) `Object Payload`

模板中需要修改的参数

参数名 | 类型 | 必填 | 说明
---|---|---|---
name | string | 是 | 要修改的参数名，见下文其他说明
value | string | 是 | 修改后的参数值

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 枚举信息

### Body.target_state `Enum`

动态消息修改后的状态

枚举值 | 描述
---|---
0 | 未开始
1 | 已开始

## 5. 注意事项

### name 的合法值

值 | 说明
---|---
member_count | target_state = 0 时必填，文字内容模板中 member_count 的值
room_limit | target_state = 0 时必填，文字内容模板中 room_limit 的值
path | target_state = 1 时必填，点击「进入」启动小程序时使用的路径。对于小游戏，没有页面的概念，可以用于传递查询字符串（query），如 "?foo=bar"
version_type | target_state = 1 时必填，点击「进入」启动小程序时使用的版本。有效参数值为：develop（开发版），trial（体验版），release（正式版）

### 消息状态

消息有两个状态（target_state），分别有其对应的文字内容和颜色。文字内容模板和颜色不支持变更。

状态 | 文字内容 | 颜色 | 允许转移的状
---|---|---|---
0 | "成员正在加入，当前 {member_count}/{room_limit} 人" | #FA9D39 | 0, 1
1 | "已开始" | #CCCCCC | 无

活动的默认有效期是 24 小时。活动结束后，消息内容会变成统一的样式：

- 文字内容：“已结束”
- 文字颜色：#00ff00

## 6. 代码示例

### 6.1 HTTPS调用

请求示例

```json
{
  "activity_id": "966_NGiqxxxxxxxxxx...xxxxxxxxE33BlwX",
  "target_state": 0,
  "template_info": {
    "parameter_list": [
      {
        "name": "member_count",
        "value": "2"
      },
      {
        "name": "room_limit",
        "value": "5"
      }
    ]
  }
}
```

返回示例

```json
{
"errcode": 0, 
"errmsg": "ok"
}
```

### 6.2 云调用示例

请求示例

```js
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.updatableMessage.setUpdatableMsg({
      "activityId": "966_NGiqxxxxxxxxxx...xxxxxxxxE33BlwX",
      "targetState": 0,
      "templateInfo": {
        "parameterList": [
          {
            "name": "member_count",
            "value": "2"
          },
          {
            "name": "room_limit",
            "value": "5"
          }
        ]
      }
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
    "errMsg": ""
}
```

## 7. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
42001 | access_token expired | access_token 超时，请检查 access_token 的有效期，请参考基础支持 - 获取 access_token 中，对 access_token 的详细机制说明
44002 | empty post data | POST 的数据包为空
47001 | data format error | 解析 JSON/XML 内容错误;post 数据中参数缺失;检查修正后重试。
47501 | activity_id error | 参数 activity_id 错误
47502 | target_state error | 参数 target_state 错误
47503 | version_type error | 参数 version_type 错误，调整后重试
47504 | activity_id expired time | activity_id 过期

## 8. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.updateShareMenu（前端动态消息菜单）](../../api/share/wx.updateShareMenu.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


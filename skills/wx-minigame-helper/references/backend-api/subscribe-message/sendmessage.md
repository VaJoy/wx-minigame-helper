---
title: "发送订阅消息"
type: backend-api
category: backend-api/subscribe-message
api: "sendMessage"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/subscribe-message/api_sendmessage.html
---

# 发送订阅消息

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：sendMessage

该接口用于发送订阅消息。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：subscribeMessage.send
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
template_id | string | 是 | 所需下发的订阅模板id
page | string | 否 | 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转
touser | string | 是 | 接收者（用户）的 openid
data | [object](#Body__data) | 是 | 模板内容，格式形如{ "phrase3": { "value": "审核通过" }, "name1": { "value": "订阅" }, "date2": { "value": "2019-12-25 09:42" } }
miniprogram_state | string | 是 | 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版
lang | string | 是 | 进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

#### 订阅消息参数值内容限制说明

参数类别 | 参数说明 | 参数值限制 | 说明
---|---|---|---
thing.DATA | 事物 | 20个以内字符 | 可汉字、数字、字母或符号组合
number.DATA | 数字 | 32位以内数字 | 只能数字，可带小数
letter.DATA | 字母 | 32位以内字母 | 只能字母
symbol.DATA | 符号 | 5位以内符号 | 只能符号
character_string.DATA | 字符串 | 32位以内数字、字母或符号 | 可数字、字母或符号组合
time.DATA | 时间 | 24小时制时间格式（支持+年月日），支持填时间段，两个时间点之间用“~”符号连接 | 例如：15:01，或：2019年10月1日 15:01
date.DATA | 日期 | 年月日格式（支持+24小时制时间），支持填时间段，两个时间点之间用“~”符号连接 | 例如：2019年10月1日，或：2019年10月1日 15:01
amount.DATA | 金额 | 1个币种符号+10位以内纯数字，可带小数，结尾可带“元” | 可带小数
phone_number.DATA | 电话 | 17位以内，数字、符号 | 电话号码，例：+86-0766-66888866
car_number.DATA | 车牌 | 8位以内，第一位与最后一位可为汉字，其余为字母或数字 | 车牌号码：粤A8Z888挂
name.DATA | 姓名 | 10个以内纯汉字或20个以内纯字母或符号 | 中文名10个汉字内；纯英文名20个字母内；中文和字母混合按中文名算，10个字内
phrase.DATA | 汉字 | 5个以内汉字 | 5个以内纯汉字，例如：配送中
enum.DATA | 枚举值 | 只能上传枚举值范围内的字段值 | [调用接口获取参考枚举值](https://developers.weixin.qq.com/miniprogram/dev/server/API/mp-message-management/subscribe-message/api_getwxapubnewtemplate)

符号表示除中文、英文、数字外的常见符号，不能带有换行等控制字符。 时间格式支持HH:MM:SS或者HH:MM。 日期包含年月日，为y年m月d日，y年m月、m月d日格式，或者用‘-’、‘/’、‘.’符号连接，如2018-01-01，2018/01/01，2018.01.01，2018-01，01-01。 每个模板参数都会以类型为前缀，例如第一个数字模板参数为number01.DATA，第二个为number02.DATA

例如，模板的内容为：

```text
姓名: {{name01.DATA}}
金额: {{amount01.DATA}}
行程: {{thing01.DATA}}
日期: {{date01.DATA}}
```

则对应的json为：

```json
{
  "touser": "OPENID",
  "template_id": "TEMPLATE_ID",
  "page": "index",
  "data": {
      "name01": {
          "value": "某某"
      },
      "amount01": {
          "value": "￥100"
      },
      "thing01": {
          "value": "广州至北京"
      } ,
      "date01": {
          "value": "2018-01-01"
      }
  }
}
```

## 5. 代码示例

### 5.1 HTTPS请求示例

请求示例

```json
{
  "touser": "OPENID",
  "template_id": "TEMPLATE_ID",
  "page": "index",
  "miniprogram_state": "developer",
  "lang": "zh_CN",
  "data": {
    "phrase3": {
      "value": "审核通过"
    },
    "name1": {
      "value": "订阅"
    },
    "date2": {
      "value": "2019-12-25 09:42"
    }
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

### 5.2 云函数调用示例

请求示例

```js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        "touser": 'OPENID',
        "page": 'index',
        "lang": 'zh_CN',
        "data": {
          "number01": {
            "value": '339208499'
          },
          "date01": {
            "value": '2015年01月05日'
          },
          "site01": {
            "value": 'TIT创意园'
          },
          "site02": {
            "value": '广州市新港中路397号'
          }
        },
        "templateId": 'TEMPLATE_ID',
        "miniprogramState": 'developer'
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
  "errmsg": "ok"
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
40001 | invalid credential  access_token isinvalid or not latest | 获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
40003 | invalid openid | 不合法的 OpenID ，请开发者确认 OpenID （该用户）是否已关注公众号，或是否是其他公众号的 OpenID
40014 | invalid access_token | 不合法的 access_token ，请开发者认真比对 access_token 的有效性（如是否过期），或查看是否正在为恰当的公众号调用接口
40037 | invalid template_id | 不合法的 template_id
43101 | 用户未订阅消息 | 检查订阅弹窗回调结果或事件推送确认是否订阅成功，检查是否一次性订阅的次数之前已下发完
43107 | 订阅消息能力封禁 | 检查账号是否被封禁订阅消息能力，检查模板id对应的模板是否被封禁
43108 | 并发下发消息给同一个粉丝 | 检查是否有同时下发多个消息给同一粉丝的情况
45168 | 命中敏感词 | 检查下发消息中是否带有敏感词
47003 | 参数错误 | 根据wiki文档检查data结构格式是否正确，检查各个关键词是否满足对应规则

## 7. 适用范围

本接口在不同账号类型下的可调用情况：

小程序 | 小游戏
---|---
✔ | ✔

- ✔：该账号可调用此接口。
- 其他未明确声明的账号类型，如无特殊说明，均不可调用此接口。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.requestSubscribeMessage（前端发起订阅）](../../api/open/subscribe-message/wx.requestSubscribeMessage.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


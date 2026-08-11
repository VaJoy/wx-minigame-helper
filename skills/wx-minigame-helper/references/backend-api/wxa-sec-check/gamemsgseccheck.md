---
title: "文本内容安全识别"
type: backend-api
category: backend-api/wxa-sec-check
api: "gameMsgSecCheck"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/wxa-sec-check/api_gamemsgseccheck.html
---

# 文本内容安全识别

[调试诊断](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_tools>)

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：gameMsgSecCheck

文本审核接口能够识别游戏领域常见的违规内容，例如：谩骂、低俗、营销广告、小语种，无意义灌水以及违法违规，帮助构建健康的游戏环境。

- 违法违规内容识别
- 谩骂，隐晦低俗，软色情
- 灰黑产广告引流识别
- 文本变种对抗，拆字叠楼识别
- 文本小语种类型识别
- 灌水无意义文本识别

应用场景：

- 用户昵称检测
- 聊天类文本检测
- 游戏素材类文本检测
- 社区类文本检测
- 资料类文本检测
- 其他文本检测场景

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/game/content_spam/msg_sec_check?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：wxa.game.contentSpam.msgSecCheck
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 示例 | 说明
---|---|---|---|---
access_token | string | 是 | ACCESS_TOKEN | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
openid | string | 是 | 用户的 openid
version | number | 是 | 接口版本号，固定值 2
scene | number | 是 | 场景枚举值: 1 资料;2 评论;3 论坛;4 社交日志;5 聊天;
content | string | 是 | 需检测的文本内容，文本字数的上限为 2500 字，需使用 UTF-8 编码
nickname | string | 否 | 用户昵称，需使用 UTF-8 编码

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
trace_id | string | 唯一请求标识，标记单次请求
result | [object](#Res__result) | 综合结果
detail | [objarray](#Res__detail<Array>) | 详细检测结果

### Res.result `Object Payload`

综合结果

参数名 | 类型 | 说明 | 枚举
---|---|---|---
suggest | string | 有risky(拦截)、pass(通过)三种值 | -
label | number | 命中标签 | [枚举值](#Enum_Res__result__label)
replaced_content | string | 将关键词替换成`*`之后得到文本，如果未命中关键词而是命中模型则全文替换成`*`，通过则为原文 | -

### Res.detail(Array) `Object Payload`

详细检测结果

参数名 | 类型 | 说明 | 枚举
---|---|---|---
strategy | string | 策略类型 | -
errcode | number | 错误码，仅当该值为0时，该项结果有效 | -
suggest | string | 有risky(拦截)、pass(通过)三种值 | -
label | number | 命中标签 | [枚举值](#Enum_Res__detail<Array>__label)
keyword | string | 命中的自定义关键词 | -
prob | number | 0-100，代表置信度，越高代表越有可能属于当前返回的标签（label） | -

## 4. 枚举信息

### Res.result.label `Enum`

命中标签

枚举值 | 描述
---|---
100 | 正常
10001 | 营销广告
20001 | 时政
20002 | 色情
20003 | 辱骂
20006 | 违法犯罪
20012 | 低俗
21000 | 其他

### Res.detail(Array).label `Enum`

命中标签

枚举值 | 描述
---|---
100 | 正常
10001 | 营销广告
20001 | 时政
20002 | 色情
20003 | 辱骂
20006 | 违法犯罪
20012 | 低俗
21000 | 其他

## 5. 注意事项

- 版本说明: 原 1.0 和 2.0 内容安全接口[【点击查看】](<https://developers.weixin.qq.com/miniprogram/dev/server/API/sec-center/sec-check/api_msgseccheck>)适配小程序通用场景，小游戏建议使用游戏专用场景内容安全接口(本接口适配游戏场景标准，增强游戏场景谩骂低俗识别能力，新增对抗叠楼、游戏营销引流、小语种、灌水无意义文本识别能力)；
- 频率限制: 单个 AppID 调用上限为 1 万/分钟，1000 万/天，特殊情况可申请上调；
- 请求耗时: 接口同步返回，一般耗时在 500ms 内，考虑http请求链路耗时，建议设置超时 1s；
- 数据范围: 所有在微信端展示的数据，都建议请求本接口，包括小游戏用户产生的内容，以及其他渠道产生但会在微信端曝光的内容；

## 6. 代码示例

### 6.1 HTTP示例

请求示例

```json
{
  "openid": "OPENID",
  "scene": 5,
  "version": 2,
  "content": "最新队换马嗖红胡子攻略团"
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "trace_id": "54bf091a-821t3794-237p1237",
  "result": {
    "suggest": "risky",
    "label": 10001,
    "replaced_content": "最新***嗖红胡子攻略团"
  },
  "detail": [
    {
      "strategy": "minigame_content_model",
      "errcode": 0,
      "suggest": "risky",
      "label": 10001,
      "prob": 90
    },
    {
      "strategy": "keyword",
      "errcode": 0,
      "suggest": "risky",
      "label": 10001,
      "level": 90,
      "keyword": "命中的关键词1"
    }
  ]
}
```

### 6.2 云调用示例

请求示例

```javascript
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxa.game.contentSpam.msgSecCheck({
      openid: 'OPENID',
      scene: 5,
      version: 2,
      content: '最新队换马嗖红胡子攻略团',
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
  "errcode": 0,
  "errmsg": "ok",
  "trace_id": "54bf091a-821t3794-237p1237",
  "result": {
    "suggest": "risky",
    "label": 10001,
    "replaced_content": "最新***嗖红胡子攻略团"
  },
  "detail": [
    {
      "strategy": "minigame_content_model",
      "errcode": 0,
      "suggest": "risky",
      "label": 10001,
      "prob": 90
    },
    {
      "strategy": "keyword",
      "errcode": 0,
      "suggest": "risky",
      "label": 10001,
      "level": 90,
      "keyword": "命中的关键词1"
    }
  ]
}
```

## 7. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
0 | 成功
40001 | access_token 无效或不为最新获取的 access_token，请开发者确认 access_token 的有效性
40003 | 不合法的 OpenID ，请开发者确认 OpenID 的有效性
40129 | 场景值错误（目前支持场景:1 资料;2 评论;3 论坛;4 社交日志;5 聊天;）
43002 | 方法调用错误，请用 post 方法调用
43104 | appid 与 openid 不匹配
44002 | POST 的数据包为空。post 请求 body 参数不能为空
47001 | 解析 JSON/XML 内容错误;post 数据中参数缺失;检查修正后重试。
750030 | 版本号错误
750031 | 该游戏不支持，联系小游戏侧配置
750032 | 每分钟调用超过上限，有需求可联系小游戏侧修改
750033 | 每日调用超过上限，有需求可联系小游戏侧修改

## 8. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


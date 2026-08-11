---
title: "删除对局匹配规则"
type: backend-api
category: backend-api/gamematch
api: "gamematch.deleteMatchRule"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.deletematchrule.html
---

# 删除对局匹配规则

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：gamematch.deleteMatchRule

小游戏删除对局匹配规则，每个规则对应一个唯一的 matchid。

每个小游戏持有的 matchid 数量有限制，可以通过此接口删除无效的 matchid。

删除接口在删除 matchid 的同时，也会释放掉 matchid 对应的匹配池。如果是线上正在使用的 matchid，请谨慎使用该接口。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/business/gamematch/deletematchrule?access_token=ACCESS_TOKEN
```

### 云调用

- 本接口不支持云调用。

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
match_id | string | 是 | 需要删除的 matchid，通过[createMatchRule](https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.creatematchrule)后台接口创建

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | 错误提示信息

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```json
{
  "match_id":"FD0PT4rKguEdK-L83RaJgdbchUCW8wjhSwgCku4CLQk"
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

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功
1 | matchid 不存在
200000 | 无效的请求数据
500005 | 无效的 matchid

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


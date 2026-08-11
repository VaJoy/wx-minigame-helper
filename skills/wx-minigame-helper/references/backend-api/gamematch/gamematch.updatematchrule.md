---
title: "修改对局匹配规则"
type: backend-api
category: backend-api/gamematch
api: "gamematch.updateMatchRule"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.updatematchrule.html
---

# 修改对局匹配规则

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：gamematch.updateMatchRule

修改 matchid 对应的匹配规则。

小游戏修改 matchid 对应的规则时，只能修改状态为关闭的 matchid。

matchid 的状态可以通过[setMatchIdOpenState](<https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.setmatchidopenstate>)修改。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/business/gamematch/updatematchrule?access_token=ACCESS_TOKEN
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

参数名 | 类型 | 必填 | 说明 | 枚举
---|---|---|---|---
match_id | number | 是 | 需要变更状态的 matchid，通过[createMatchRule](https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.creatematchrule)后台接口创建 | -
open_state | number | 是 | matchid 的打开状态 | [枚举值](#Enum_Body__open_state)

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
match_id | string | 匹配池对应的 id，[加入匹配](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startMatch.html)时需要携带 matchid 以加入对应的匹配池

## 4. 枚举信息

### Body.open_state `Enum`

matchid 的打开状态

枚举值 | 描述
---|---
0 | 关闭
1 | 打开

## 5. 注意事项

本接口无特殊注意事项

## 6. 代码示例

请求示例

```json
{
  "match_id":"FD0PT4rKguEdK-L83RaJgdbchUCW8wjhSwgCku4CLQk",
  "open_state":1
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok"
}
```

## 7. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功
1 | matchid 不存在
200000 | 无效的请求数据
500005 | 无效的 matchid
500012 | open_state 的值不合法

## 8. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


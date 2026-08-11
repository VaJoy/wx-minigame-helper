---
title: "获取对局匹配规则"
type: backend-api
category: backend-api/gamematch
api: "gamematch.getAllMatchRule"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.getallmatchrule.html
---

# 获取对局匹配规则

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：gamematch.getAllMatchRule

获取小游戏拥有的所有 matchid 及其对应的匹配规则，以及 matchid 的打开状态。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/business/gamematch/getallmatchrule?access_token=ACCESS_TOKEN
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

无

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)
match_rule_list | [objarray](#Res__match_rule_list<Array>) | 小游戏拥有的游戏规则列表

### Res.match_rule_list(Array) `Object Payload`

小游戏拥有的游戏规则列表

参数名 | 类型 | 说明
---|---|---
match_id | string | matchid，通过[createMatchRule](https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.creatematchrule)后台接口创建
appid | string | 创建 matchid 的小程序 appid
open_state | number | matchid 的打开状态，具体值见[setMatchIdOpenState](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startMatch.html)
team_count | number | [匹配结果](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html)中的队伍数量
team_member_count | number | [匹配结果](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html)每个队伍对应的成员数量
need_room_service_info | number | 是否需要在下发[匹配结果](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html)时同步创建帧同步房间。0:不需要，1:需要。如果填 1，则会在下发对局[匹配结果](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html)时携带[accessInfo](https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.joinRoom.html)，用于加入帧同步房间。 要求 team_count * team_member_count 不超过 10 人才可以使用该项。
game_room_info | [object](#Res__match_rule_list<Array>__game_room_info) | [创建帧同步房间](https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.creategameroom)时的房间信息。

### Res.match_rule_list(Array).game_room_info `Object Payload`

[创建帧同步房间](<https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.creategameroom>)时的房间信息。

参数名 | 类型 | 说明
---|---|---
game_tick | number | 后台下发游戏逻辑帧的周期，单位 ms，最小不得小于 33ms
start_percent | number | 不填或者填 0 代表微信后台只要收到一次“开始游戏”指令就会开始游戏，否则微信后台会统计发送“开始游戏”指令的玩家数达到规定的百分比后才能启动游戏，填 50 表征 50%
udp_reliability_strategy | number | 使用的 UDP 可靠性策略，N：固定冗余 N 帧。建议值：3
need_user_info | boolean | 房间是否需要用户的头像昵称——如果填 True，微信后台会去校验用户是否授权该应用获取其头像昵称的权限。如果房间需要头像昵称但是用户未授权，则用户后续加入房间的请求会返回失败；如果 need_user_info 为 False，后续用户的加入房间操作会成功，但微信后台不会在房间信息中下发用户的头像昵称。
game_last_time | number | 游戏对局时长，单位 s，不得超过微信后台最大限制 1 个小时，如果不填或填 0 则默认为 20 分钟
need_game_seed | boolean | 是否需要在创建房间时同时生成一个随机的游戏种子

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```bash
POST https://api.weixin.qq.com/wxa/business/gamematch/getallmatchrule?access_token=ACCESS_TOKEN
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "match_rule_list": [
    {
      "match_id": "FD0PT4rKguEdK-L83RaJgdbchUCW8wjhSwgCku4CLQk",
      "open_state": 0,
      "team_count": 2,
      "team_member_count": 1,
      "need_room_service_info": 1,
      "game_room_info": {
        "game_tick": 30,
        "udp_reliability_strategy": 3,
        "start_percent": 100,
        "need_user_info": true,
        "game_last_time": 1800,
        "need_game_seed": true
      }
    }
  ]
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

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


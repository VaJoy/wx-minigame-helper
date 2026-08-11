---
title: "创建帧同步游戏房间"
type: backend-api
category: backend-api/lock-step
api: "lock-step.createGameRoom"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.creategameroom.html
---

# 创建帧同步游戏房间

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：lock-step.createGameRoom

第三方后台创建帧同步游戏房间

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/createwxagameroom?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：lockstep.createGameRoom
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
game_tick | number | 是 | 后台下发游戏逻辑帧的周期，单位 ms，最小不得小于 33ms
open_id_list | array.<string> | 是 | 房间成员的 OpenId 列表
udp_reliability_strategy | number | 是 | 使用的 UDP 可靠性策略，N：固定冗余 N 帧。建议值：3
start_percent | number | 是 | 不填或者填 0 代表微信后台只要收到一次“开始游戏”指令就会开始游戏，否则微信后台会统计发送“开始游戏”指令的玩家数达到规定的百分比后才能启动游戏，填 50 表征 50%
need_user_info | boolean | 否 | 房间是否需要用户的头像昵称——如果填 True，微信后台会去校验用户是否授权该应用获取其头像昵称的权限。如果房间需要头像昵称但是用户未授权，则用户后续加入房间的请求会返回失败；如果 need_user_info 为 False，后续用户的加入房间操作会成功，但微信后台不会在房间信息中下发用户的头像昵称。
game_last_time | number | 否 | 游戏对局时长，单位 s，不得超过微信后台最大限制 1 个小时，如果不填或填 0 则默认为 20 分钟
room_ext_info | string | 否 | 第三方自定义的房间信息，不得超过 32 个字节
need_game_seed | boolean | 否 | 是否需要在创建房间时同时生成一个随机的游戏种子

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | 错误提示信息
data | [object](#Res__data) | 房间/对局访问凭证数据

### Res.data `Object Payload`

房间/对局访问凭证数据

参数名 | 类型 | 说明
---|---|---
access_info | string | 房间/对局访问凭证

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```json
{
    "game_tick": 0,
    "udp_reliability_strategy": 0,
    "start_percent": 0,
    "need_user_info": false,
    "game_last_time": 0,
    "room_ext_info": "",
    "need_game_seed": false
}
```

返回示例

```json
{
    "errcode": 0,
    "errmsg": "",
    "data": {
        "access_info": ""
    }
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功
4003 | 非法的请求数据
4013 | 自定义的房间信息超过指定大小

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [对局服务器（前端 GameServerManager）](../../api/game-server-manager/README.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


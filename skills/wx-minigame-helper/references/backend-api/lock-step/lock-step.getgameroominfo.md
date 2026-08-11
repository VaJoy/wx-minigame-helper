---
title: "获取指定房间信息"
type: backend-api
category: backend-api/lock-step
api: "lock-step.getGameRoomInfo"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.getgameroominfo.html
---

# 获取指定房间信息

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：lock-step.getGameRoomInfo

本接口用于获取指定房间信息

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/wxa/getwxagameroominfo?access_token=ACCESS_TOKEN&access_info=ACCESS_INFO
```

### 云调用

- 调用方法：lockstep.getGameRoomInfo
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)
access_info | string | 是 | 房间/对局访问凭证，不同于 access_token

### 请求体 `Request Payload`

无

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
room_id_str | string | 房间 ID
room_state | number | 1：组队中，2：该房间的对局游戏已开始，3：该房间的对局游戏已结束，4：房间已销毁
max_member_num | number | 房间最大可容纳人数
create_timestamp | number | 创建时间
update_timestamp | number | 最近更新时间
game_tick | number | 游戏下发帧的时间间隔，单位 ms
start_percent | number | 真正开始帧同步需要达到多少百分比的玩家发送了开始指令，填 50 表征 50%
game_last_time | number | 游戏对局时长，单位 s
game_version | number | 第三方自定义的游戏版本号
game_access_info | string | 该房间对应的游戏的 access_info
udp_reliability_strategy | number | UDP 可靠性策略， 0：全冗余 N：固定冗余 N 帧
room_ext_info | string | 给第三方用的 buffer，最长 32 个字节
seed | string | 游戏随机种子
member_list | [objarray](#Res__data__member_list<Array>) | 成员列表

### Res.data.member_list(Array) `Object Payload`

成员列表

参数名 | 类型 | 说明
---|---|---
is_ready | boolean | 玩家准备状态
role | number | 0：普通成员 1：房主
pos_num | number | 座位号，从 0 开始
headimg | string | 头像 URL（用户授权才会返回）
nickname | string | 用户昵称（用户授权才会返回）
client_id | number | 用户在房间内的唯一标识
enable_to_start | boolean | 是否已做好游戏开始准备
member_ext_info | string | 给第三方用的 buffer，最长 32 个字节

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

本接口无代码示例

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [对局服务器（前端 GameServerManager）](../../api/game-server-manager/README.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


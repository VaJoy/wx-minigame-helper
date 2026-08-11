---
title: "分片拉取对局游戏帧"
type: backend-api
category: backend-api/lock-step
api: "lock-step.getGameFrame"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/lock-step/api_lock-step.getgameframe.html
---

# 分片拉取对局游戏帧

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：lock-step.getGameFrame

本接口用于分片拉取对局游戏帧

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/getwxagameframe?access_token=ACCESS_TOKEN
```

### 云调用

- 调用方法：lockstep.getGameFrame
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
access_token / cloudbase_access_token | string | 是 | 微信后台接口调用凭证
access_info | string | 是 | 填 onGameEnd 接口返回给开发者的 gameAccessInfo
begin_frame_id | number | 是 | 待获取帧的起始 frame_id
end_frame_id | number | 是 | 待获取帧的终止 frame_id，左闭右开区间

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
has_more | boolean | 是否还有更多帧可以获取
frame_list | [objarray](#Res__data__frame_list<Array>) | 游戏帧数据列表

### Res.data.frame_list(Array) `Object Payload`

游戏帧数据列表

参数名 | 类型 | 说明
---|---|---
frame_id | number | 帧编号，从 1 开始
pkg_list | [objarray](#Res__data__frame_list<Array>__pkg_list<Array>) | 指令包列表，每个指令包具体格式见下面

### Res.data.frame_list(Array).pkg_list`Object Payload`

指令包列表，每个指令包具体格式见下面

参数名 | 类型 | 说明
---|---|---
open_id | string | 该包发送者的 OpenId
action_list | array | 第三方自定义游戏指令数组
b | boolean | true 代表是空帧
dp_id | number | 微信内部使用，无需理解，为了更快速返回数据，没有去掉该字段内容

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
1 | 数据不存在
5 | 非法的请求数据
6000 | 获取数据失败

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [对局服务器（前端 GameServerManager）](../../api/game-server-manager/README.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)


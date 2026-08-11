---
title: "获取小游戏外挂分级标签数据"
type: backend-api
category: backend-api/safety-control-capability
api: "getCheatData"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/safety-control-capability/api_getcheatdata.html
---

# 获取小游戏外挂分级标签数据

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：getCheatData

本接口用于小游戏开发者拉取自己游戏内被识别为外挂的分级标签数据，可按日期区间分页查询。返回数据按"openid × 命中时间(精确到小时) × 作弊类型"展开，开发者可基于结果进行封禁、二次校验、风控等后续处理。

应用场景举例：

- 风控处置：拉取近期外挂用户名单，对账号执行封禁/限制；
- 数据分析：统计游戏内不同作弊类型的命中分布与趋势；
- 模型训练：将命中数据作为正样本，辅助开发者自有反作弊策略迭代。

## 1. 调用方式

### HTTPS 调用

```bash
GET https://api.weixin.qq.com/wxa/game/content_spam/get_cheat_data?access_token=ACCESS_TOKEN
```

### 云调用

- 本接口不支持云调用。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 说明
---|---|---|---
access_token | string | 是 | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
ds_begin | number | 是 | 查询起始日期，格式 yyyyMMdd，例如 20260601
duration_days | number | 是 | 查询时长（天数），取值范围 [1, 7]，实际查询区间为 [ds_begin, ds_begin + duration_days - 1]，闭区间
offset | number | 否 | 分页起始偏移（0-based），默认 0
limit | number | 否 | 单页条数，默认 100，最大 1000，超过则按 1000 截断

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | number | [错误信息](#apierrcode)
ds_begin | number | 实际生效的起始日期 yyyyMMdd
ds_end | number | 实际生效的截止日期 yyyyMMdd（含）
total_count | number | 查询区间内的总命中行数（分页前），用于调用方判断是否还有下一页
rows | [objarray](#Res__rows<Array>) | 当前页数据列表，长度 ≤ limit

### Res.rows(Array) `Object Payload`

当前页数据列表，长度 ≤ limit

参数名 | 类型 | 说明
---|---|---
openid | array | 用户在该小游戏下的 openid
ds | number | 命中时间，格式 yyyyMMddHH（精确到小时）
cheat_type | number | 主作弊类型枚举值，1 内存挂；2 按键挂；3 JS 注入；4 JS 修改
risk_level | number | 风险等级枚举值，0 未知；1 低危；2 中危；3 高危；4 严重

## 4. 注意事项

本接口无特殊注意事项

## 5. 代码示例

请求示例

```json
{
  "appid": "wx7a727ff7d940bb3f",
  "ds_begin": 20260601,
  "duration_days": 7,
  "offset": 0,
  "limit": 100
}
```

返回示例

```json
{
  "errcode": 0,
  "errmsg": "ok",
  "ds_begin": 20260601,
  "ds_end": 20260607,
  "total_count": 2,
  "rows": [
    {
      "openid": "oABC123xxxxxxxxxxxxxxxxxxxxxxx",
      "ds": 2026060114,
      "cheat_type": 3,
      "risk_level": 2
    },
    {
      "openid": "oDEF456xxxxxxxxxxxxxxxxxxxxxxx",
      "ds": 2026060209,
      "cheat_type": 1,
      "risk_level": 3
    }
  ]
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述 | 解决方案
---|---|---
-1 | system error | 系统繁忙，此时请开发者稍候再试
40001 | invalid credential | 不合法的调用凭证

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


---
title: "获取小游戏分析数据"
type: backend-api
category: backend-api/data-analysis
api: "analysis.getGameAnalysisData"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/data-analysis/api_analysis.getgameanalysisdata.html
---

# 获取小游戏分析数据

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：analysis.getGameAnalysisData

本接口用于获取小游戏分析数据。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/datacube/getgameanalysisdata?access_token=ACCESS_TOKEN
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
metric | string | 是 | 指标 id, 详见[指标定义](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/data-analysis#%E6%8C%87%E6%A0%87%E5%AE%9A%E4%B9%89) | -
granularity | number | 是 | 时间粒度 | [枚举值](#Enum_Body__granularity)
start_time | number | 是 | 开始时间戳(需按查询粒度的零时刻对齐) | -
end_time | number | 是 | 结束时间戳(需按查询粒度的零时刻对齐) | -
filter_list | [objarray](#Body__filter_list<Array>) | 否 | 维度筛选列表，支持对 1 个或多个维度做条件过滤 | -
group_list | [objarray](#Body__group_list<Array>) | 否 | 维度分组列表，展开单个粒度周期下的 1 个或多个维度的取值分布 | -

### Body.filter_list(Array) `Object Payload`

维度筛选列表，支持对 1 个或多个维度做条件过滤

参数名 | 类型 | 必填 | 说明
---|---|---|---
dimension | string | 是 | 维度 id, 详见[维度定义](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/data-analysis#维度定义)
value | string | 是 | 维度的取值

### Body.group_list(Array) `Object Payload`

维度分组列表，展开单个粒度周期下的 1 个或多个维度的取值分布

参数名 | 类型 | 必填 | 说明
---|---|---|---
dimension | string | 是 | 维度 id, 详见[维度定义](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/data-analysis#维度定义)
value | string | 是 | 维度的取值

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | 错误码(失败时才返回该字段)
errmsg | string | 错误信息(失败时才返回该字段)
data_list | [objarray](#Res__data_list<Array>) | 数据列表

### Res.data_list(Array) `Object Payload`

数据列表

参数名 | 类型 | 说明
---|---|---
timestamp | number | 数据时间戳
time_label | string | 数据时间标签
group_dimension_list | [objarray](#Res__data_list<Array>__group_dimension_list<Array>) | 维度取值分布列表
metric_value | number | 指标数值，当数据存在时该字段存在

### Res.data_list(Array).group_dimension_list`Object Payload`

维度取值分布列表

参数名 | 类型 | 说明
---|---|---
value | string | 维度取值
label | string | 维度标签

## 4. 枚举信息

### Body.granularity `Enum`

时间粒度

枚举值 | 枚举解释 | 最低版本
---|---|---
1 | 1 分钟 | 
5 | 5 分钟 | 
60 | 1 小时 | 
24 | 自然天 | 
7 | 自然周 | 
30 | 自然月 | 

## 5. 注意事项

本接口无特殊注意事项

## 6. 代码示例

本接口无代码示例

## 7. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-10094011 | 接口访问频率限制
-1 | 系统错误
0 | 请求成功
61552 | 指标无效
61553 | 粒度无效
61554 | 时间范围无效
61555 | 维度无效
61556 | 维度重复
61557 | 当前指标不支持该粒度
61558 | 指标已废弃
61559 | 指标不支持查询分布

## 8. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

> 本接口为**服务端专用**接口，无对应前端 `wx.*` 接口，须由开发者服务器调用微信服务端。


// 微信小游戏服务端 API 类型声明 — 域：data-analysis（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取小游戏分析数据（analysis.getGameAnalysisData） — 本接口用于获取小游戏分析数据。
 * @endpoint POST https://api.weixin.qq.com/datacube/getgameanalysisdata?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface AnalysisGetGameAnalysisDataQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface AnalysisGetGameAnalysisDataRequest {
  /** 指标 id, 详见指标定义 */
  metric: string
  /** 时间粒度 */
  granularity: AnalysisGetGameAnalysisDataGranularityEnum
  /** 开始时间戳(需按查询粒度的零时刻对齐) */
  start_time: number
  /** 结束时间戳(需按查询粒度的零时刻对齐) */
  end_time: number
  /** 维度筛选列表，支持对 1 个或多个维度做条件过滤 */
  filter_list?: AnalysisGetGameAnalysisDataFilterList[]
  /** 维度分组列表，展开单个粒度周期下的 1 个或多个维度的取值分布 */
  group_list?: AnalysisGetGameAnalysisDataGroupList[]
}

interface AnalysisGetGameAnalysisDataResponse {
  /** 错误码(失败时才返回该字段) */
  errcode?: number
  /** 错误信息(失败时才返回该字段) */
  errmsg?: string
  /** 数据列表 */
  data_list?: AnalysisGetGameAnalysisDataDataList[]
}

interface AnalysisGetGameAnalysisDataFilterList {
  /** 维度 id, 详见维度定义 */
  dimension: string
  /** 维度的取值 */
  value: string
}

interface AnalysisGetGameAnalysisDataGroupList {
  /** 维度 id, 详见维度定义 */
  dimension: string
  /** 维度的取值 */
  value: string
}

interface AnalysisGetGameAnalysisDataDataList {
  /** 数据时间戳 */
  timestamp?: number
  /** 数据时间标签 */
  time_label?: string
  /** 维度取值分布列表 */
  group_dimension_list?: AnalysisGetGameAnalysisDataDataListGroupDimensionList[]
  /** 指标数值，当数据存在时该字段存在 */
  metric_value?: number
}

interface AnalysisGetGameAnalysisDataDataListGroupDimensionList {
  /** 维度取值 */
  value?: string
  /** 维度标签 */
  label?: string
}

/** 枚举：granularity */
type AnalysisGetGameAnalysisDataGranularityEnum = 1 | 5 | 60 | 24 | 7 | 30

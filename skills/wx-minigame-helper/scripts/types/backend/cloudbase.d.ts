// 微信小游戏服务端 API 类型声明 — 域：cloudbase（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 云开发上报接口（cloudbaseReportAPI） — 该接口为云开发通用上报接口。
 * @endpoint POST https://api.weixin.qq.com/tcb/cloudbasereport?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface CloudbaseReportAPIQuery {
  /** 接口调用凭证，可使用 authorizer_access_token */
  access_token: string
}

interface CloudbaseReportAPIRequest {
  /** 上报动作，目前支持（sendSmsTask：发送短信；openH5：H5 打开） */
  report_action: string
  /** 环境 ID */
  env_id: string
  /** 活动 ID */
  activity_id: string
  /** 任务 ID【report_action 取 sendSmsTask 时必填】 */
  task_id: string
  /** 下发手机号数量【report_action 取 sendSmsTask 时必填】 */
  phone_count: string
  /** 渠道 ID（云开发 CMS 使用 _cms_sms_）【report_action 取 openH5 时必填】 */
  channel_id: string
  /** 会话 ID【report_action 取 openH5 时必填】 */
  session_id: string
}

interface CloudbaseReportAPIResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

/**
 * 创建发短信任务（createSendSmsTask） — 该接口用于创建发短信任务。发送的短信支持打开云开发静态网站 H5，进而在 H5 里可以打开小程序。详情可参考静态网站 H5 跳小程序。
 * @endpoint POST https://api.weixin.qq.com/tcb/createsendsmstask?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface CreateSendSmsTaskQuery {
  /** 接口调用凭证，可使用 authorizer_access_token */
  access_token: string
}

interface CreateSendSmsTaskRequest {
  /** 环境 ID */
  env: string
  /** 短信 CSV 文件地址CodeUri */
  file_url: string
  /** 短信模版 ID 默认值：844110（销类短信模版 ID) */
  template_id: string
}

interface CreateSendSmsTaskResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 查询 ID */
  query_id?: string
}

/**
 * 描述扩展上传文件信息（describeExtensionUploadInfo） — 该接口用于描述扩展上传文件信息。
 * @endpoint POST https://api.weixin.qq.com/tcb/describeextensionuploadinfo?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface DescribeExtensionUploadInfoQuery {
  /** 接口调用凭证，可使用 authorizer_access_token */
  access_token: string
}

interface DescribeExtensionUploadInfoRequest {
  /** 待上传的文件列表 */
  ExtensionFiles: DescribeExtensionUploadInfoExtensionFiles[]
}

interface DescribeExtensionUploadInfoResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 待上传文件的信息数组 */
  FilesData?: DescribeExtensionUploadInfoFilesData[]
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string
}

interface DescribeExtensionUploadInfoExtensionFiles {
  /** 文件类型。枚举值 FUNCTION：函数代码 STATIC：静态托管代码 SMS：短信文件 */
  FileType: string
  /** 文件名，长度不超过24 */
  FileName: string
}

interface DescribeExtensionUploadInfoFilesData {
  /** 模板里使用的地址 */
  CodeUri?: string
  /** 上传文件的临时地址，含签名 */
  UploadUrl?: string
  /** 自定义密钥。如果为空，则表示不需要加密 */
  CustomKey?: string
  /** 文件大小限制，单位M，客户端上传前需要主动检查文件大小，超过限制的文件会被删除。 */
  MaxSize?: number
}

/**
 * 查询短信记录（describeSmsRecords） — 该接口用于查询 2 个月内的短信记录。
 * @endpoint POST https://api.weixin.qq.com/tcb/describesmsrecords?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface DescribeSmsRecordsQuery {
  /** 接口调用凭证，可使用 authorizer_access_token */
  access_token: string
}

interface DescribeSmsRecordsRequest {
  /** 环境 ID */
  EnvId: string
  /** 开始日期, 如:2021-01-01 */
  StartDate: string
  /** 结束日期, 如2021-01-07 */
  EndDate: string
  /** 电话号码 */
  Mobile: string
  /** 查询ID */
  QueryId: string
  /** 页码(1开始) */
  PageNumber: number
  /** 每页条目数 */
  PageSize: number
}

interface DescribeSmsRecordsResponse {
  /** 发送记录列表 */
  SmsRecords?: DescribeSmsRecordsSmsRecords[]
  /** 记录总数 */
  TotalCount?: number
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

interface DescribeSmsRecordsSmsRecords {
  /** 手机号码 */
  Mobile?: string
  /** 短信内容 */
  Content?: string
  /** 短信内容长度 */
  ContentSize?: number
  /** 计费条数 */
  Fee?: number
  /** 发送时间 */
  CreateTime?: string
  /** 用户接收时间 */
  ReceivedTime?: string
  /** sent(成功), error(失败) */
  Status?: string
  /** 备注 */
  Remarks?: string
}

/**
 * 获取云开发数据（getCloudBaseStatistics） — 该接口用于获取云开发数据。
 * @endpoint POST https://api.weixin.qq.com/tcb/getstatistics?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetCloudBaseStatisticsQuery {
  /** 接口调用凭证，可使用 authorizer_access_token */
  access_token: string
}

interface GetCloudBaseStatisticsRequest {
  /**
   * 获取动作，目前支持（smsMarketingOverviewData：短信营销概览数据；smsMarketingConversionData：短信营销转化数据；smsMarketingRealTimeData：短信营销实时数据）
   */
  action: string
  /** 开始时间戳 */
  begin_date: number
  /** 结束时间戳 */
  end_date: number
  /** 分页 limit【action 取 smsMarketingOverviewData、smsMarketingConversionData 时必填】 */
  page_limit: number
  /** 分页 offset【action 取 smsMarketingOverviewData、smsMarketingConversionData 时必填】 */
  page_offset: number
}

interface GetCloudBaseStatisticsResponse {
  /** 数据列定义 */
  data_column?: GetCloudBaseStatisticsDataColumn[]
  /** 数据行 */
  data_value?: GetCloudBaseStatisticsDataValue[]
  /** 总行数 */
  total_num?: number
}

interface GetCloudBaseStatisticsDataColumn {
  /** 列 id */
  col_id?: string
  /** 列名 */
  col_name?: string
  /** 数据类型（0:string；1:number；2:double） */
  col_data_type?: string
}

interface GetCloudBaseStatisticsDataValue {
  /** 数据值 */
  data_value?: any[]
}

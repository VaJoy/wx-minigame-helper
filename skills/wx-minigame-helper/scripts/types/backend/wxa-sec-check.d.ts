// 微信小游戏服务端 API 类型声明 — 域：wxa-sec-check（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 文本内容安全识别（gameMsgSecCheck） — 文本审核接口能够识别游戏领域常见的违规内容，例如：谩骂、低俗、营销广告、小语种，无意义灌水以及违法违规，帮助构建健康的游戏环境。
 * @endpoint POST https://api.weixin.qq.com/wxa/game/content_spam/msg_sec_check?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GameMsgSecCheckQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GameMsgSecCheckRequest {
  /** 用户的 openid */
  openid: string
  /** 接口版本号，固定值 2 */
  version: number
  /** 场景枚举值: 1 资料;2 评论;3 论坛;4 社交日志;5 聊天; */
  scene: number
  /** 需检测的文本内容，文本字数的上限为 2500 字，需使用 UTF-8 编码 */
  content: string
  /** 用户昵称，需使用 UTF-8 编码 */
  nickname?: string
}

interface GameMsgSecCheckResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 唯一请求标识，标记单次请求 */
  trace_id?: string
  /** 综合结果 */
  result?: GameMsgSecCheckResult
  /** 详细检测结果 */
  detail?: GameMsgSecCheckDetail[]
}

interface GameMsgSecCheckDetail {
  /** 策略类型 */
  strategy?: string
  /** 错误码，仅当该值为0时，该项结果有效 */
  errcode?: number
  /** 有risky(拦截)、pass(通过)三种值 */
  suggest?: string
  /** 命中标签 */
  label?: GameMsgSecCheckDetailLabelEnum
  /** 命中的自定义关键词 */
  keyword?: string
  /** 0-100，代表置信度，越高代表越有可能属于当前返回的标签（label） */
  prob?: number
}

interface GameMsgSecCheckResult {
  /** 有risky(拦截)、pass(通过)三种值 */
  suggest?: string
  /** 命中标签 */
  label?: GameMsgSecCheckResultLabelEnum
  /** 将关键词替换成`*`之后得到文本，如果未命中关键词而是命中模型则全文替换成`*`，通过则为原文 */
  replaced_content?: string
}

/** 枚举：detail.label */
type GameMsgSecCheckDetailLabelEnum = 100 | 10001 | 20001 | 20002 | 20003 | 20006 | 20012 | 21000

/** 枚举：result.label */
type GameMsgSecCheckResultLabelEnum = 100 | 10001 | 20001 | 20002 | 20003 | 20006 | 20012 | 21000

/**
 * 图片内容安全识别（gamesecurity.mediaCheck） — 图片审核接口能够识别游戏领域常见的违规内容，例如：色情，低俗软色情、血腥、恐怖、恶心不适、营销引流广告，辱骂以及违法违规，帮助构建健康的游戏环境。
 * @endpoint POST https://api.weixin.qq.com/wxa/game/content_spam/media_check_sync?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GamesecurityMediaCheckQuery {
  /** 接口调用凭证，可使用 access_token */
  access_token: string
}

interface GamesecurityMediaCheckRequest {
  /** 用户的 openid */
  openid: string
  /** 接口版本号，固定值 2 */
  version: number
  /** 场景枚举值:1 资料;2 评论;3 论坛;4 社交日志;5 聊天; */
  scene: number
  /** 检测的图片 url，支持图片格式jpg,jpeg,png,bmp,tif,tiff,webp,gif。 */
  media_url: string
  /** 媒体类型: 固定填 2 图片 */
  media_type: number
}

interface GamesecurityMediaCheckResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 唯一请求标识，标记单次请求 */
  trace_id?: string
  /** 综合结果 */
  result?: GamesecurityMediaCheckResult
  /** 详细检测结果 */
  detail?: GamesecurityMediaCheckDetail[]
}

interface GamesecurityMediaCheckDetail {
  /** 策略类型 */
  strategy?: string
  /** 错误码，仅当该值为0时，该项结果有效 */
  errcode?: number
  /** 有risky(拦截)、pass(通过)三种值 */
  suggest?: string
  /** 命中标签 */
  label?: GamesecurityMediaCheckDetailLabelEnum
  /** 0-100，代表置信度，越高代表越有可能属于当前返回的标签（label） */
  prob?: number
}

interface GamesecurityMediaCheckResult {
  /** 有risky(拦截)、pass(通过)三种值 */
  suggest?: string
  /** 命中标签 */
  label?: GamesecurityMediaCheckResultLabelEnum
}

/** 枚举：detail.label */
type GamesecurityMediaCheckDetailLabelEnum = 100 | 10001 | 20001 | 20002 | 20003 | 20006 | 20012 | 21000

/** 枚举：result.label */
type GamesecurityMediaCheckResultLabelEnum = 100 | 10001 | 20001 | 20002 | 20003 | 20006 | 20012 | 21000

/**
 * 多媒体内容安全识别（mediaCheckAsync） — 本接口用于异步校验图片/音频是否含有违法违规内容。
 * @endpoint POST https://api.weixin.qq.com/wxa/media_check_async?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface MediaCheckAsyncQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface MediaCheckAsyncRequest {
  /**
   * 要检测的图片或音频的url，支持图片格式包括jpg, jpeg, png, bmp, gif（取首帧），支持的音频格式包括mp3, aac, ac3, wma, flac, vorbis, opus, wav
   */
  media_url: string
  /** 1:音频;2:图片 */
  media_type: number
  /** 接口版本号，2.0版本为固定值2 */
  version: number
  /** 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志） */
  scene: number
  /** 用户的openid（用户需在近两小时访问过小程序） */
  openid: string
}

interface MediaCheckAsyncResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
  /** 唯一请求标识，标记单次请求，用于匹配异步推送结果 */
  trace_id?: string
}

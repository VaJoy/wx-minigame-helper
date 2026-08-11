// 微信小游戏服务端 API 类型声明 — 域：subscribe-message（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 发送订阅消息（sendMessage） — 该接口用于发送订阅消息。
 * @endpoint POST https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface SendMessageQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface SendMessageRequest {
  /** 所需下发的订阅模板id */
  template_id: string
  /** 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转 */
  page?: string
  /** 接收者（用户）的 openid */
  touser: string
  /**
   * 模板内容，格式形如{ "phrase3": { "value": "审核通过" }, "name1": { "value": "订阅" }, "date2": { "value": "2019-12-25 09:42" } }
   */
  data: Record<string, any>
  /** 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版 */
  miniprogram_state: string
  /** 进入小程序查看”的语言类型，支持zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为zh_CN */
  lang: string
}

interface SendMessageResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

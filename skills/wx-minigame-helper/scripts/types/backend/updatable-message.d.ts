// 微信小游戏服务端 API 类型声明 — 域：updatable-message（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 创建activity_id（createActivityId） — 该接口用于创建被分享动态消息或私密消息的 activity_id。详见动态消息
 * @endpoint GET https://api.weixin.qq.com/cgi-bin/message/wxopen/activityid/create?access_token=ACCESS_TOKEN&unionid=UNIONID&openid=OPENID
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface CreateActivityIdQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
  /**
   * 为私密消息创建activity_id时，指定分享者为unionid用户。其余用户不能用此activity_id分享私密消息。 **openid与unionid填一个即可。**私密消息暂不支持云函数生成activity id。
   */
  unionid?: string
  /**
   * 为私密消息创建activity_id时，指定分享者为openid用户。其余用户不能用此activity_id分享私密消息。**openid与unionid填一个即可。** 私密消息暂不支持云函数生成activity id。
   */
  openid?: string
}

interface CreateActivityIdResponse {
  /** 动态消息的 ID */
  activity_id?: string
  /** activity_id 的过期时间戳。默认24小时后过期。 */
  expiration_time?: number
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

/**
 * 修改动态消息（setUpdatableMsg） — 该接口用于修改被分享的动态消息。详见动态消息。
 * @endpoint POST https://api.weixin.qq.com/cgi-bin/message/wxopen/updatablemsg/send?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface SetUpdatableMsgQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface SetUpdatableMsgRequest {
  /** 动态消息的 ID，通过 createActivityId 接口获取 */
  activity_id: string
  /** 动态消息修改后的状态 */
  target_state: SetUpdatableMsgTargetStateEnum
  /** 动态消息对应的模板信息 */
  template_info: SetUpdatableMsgTemplateInfo
}

interface SetUpdatableMsgResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

interface SetUpdatableMsgTemplateInfo {
  /** 模板中需要修改的参数 */
  parameter_list: SetUpdatableMsgTemplateInfoParameterList[]
}

interface SetUpdatableMsgTemplateInfoParameterList {
  /** 要修改的参数名，见下文其他说明 */
  name: string
  /** 修改后的参数值 */
  value: string
}

/** 枚举：target_state */
type SetUpdatableMsgTargetStateEnum = 0 | 1

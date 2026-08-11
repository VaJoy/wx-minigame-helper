// 微信小游戏 API 类型声明 — 域：chattool（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxEnterChatToolModeOption {
  /** 聊天室 id，不传则拉起群选择框，可以传入多聊群的 opengid 值 */
  chatToolRooms?: string[]
  /** 是否单选群聊，true 为单选，false 为多选 */
  singleChatRoom?: boolean
  /** 多选模式下最多选择的群聊数量 */
  selectLimit?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxExitChatToolOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetChatToolInfoSuccessCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法 */
  encryptedData: string
  /** 加密算法的初始向量，详细见加密数据解密算法 */
  iv: string
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据 */
  cloudID: string
}

interface WxGetChatToolInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetChatToolInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxNotifyGroupMembersOption {
  /** 文字链标题，发送的内容将由微信拼接为：@的成员列表+“请完成：”/"请参与："+打开小程序的文字链，如「@alex @cindy 请完成：团建报名统计」。 */
  title: string
  /** 需要提醒的用户 group_openid 列表 */
  members: string[]
  /** 如需传参，只传 query 即可，query 形如 ?a=1&b=2 */
  entrancePath: string
  /**
   * 展示的动词
   * 默认值 complete
   */
  type?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenChatToolOption {
  /** 聊天室 id，不传则拉起群选择框，可以传入多聊群的 opengid 值，或者单聊群的 open_single_roomid 值 */
  roomid?: string
  /** 群聊类型 */
  chatType?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSelectGroupMembersSuccessCallbackResult {
  /** 所选用户在此聊天室下的唯一标识，同一个用户在不同的聊天室下id不同 */
  members: string[]
}

interface WxSelectGroupMembersOption {
  /** 最多可选人数 */
  maxSelectCount?: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxSelectGroupMembersSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShareAppMessageToGroupOption {
  /** 转发标题 */
  title: string
  /**
   * 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2
   * 默认值 ''
   */
  path?: string
  /**
   * 自定义图片路径，支持PNG及JPG，显示图片长宽比是 5:4，默认使用截图
   * 默认值 ''
   */
  imageUrl?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShareEmojiToGroupOption {
  /** 要分享的表情地址，必须为本地路径或临时路径 */
  imagePath: string
  /**
   * 分享的表情消息是否要带小程序入口
   * 默认值 true
   */
  needShowEntrance?: boolean
  /**
   * 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2
   * 默认值 ''
   */
  entrancePath?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShareImageToGroupOption {
  /** 要分享的图片地址，必须为本地路径或临时路径 */
  imagePath: string
  /**
   * 分享的图片消息是否要带小程序入口
   * 默认值 true
   */
  needShowEntrance?: boolean
  /**
   * 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2
   * 默认值 ''
   */
  entrancePath?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShareTextToGroupOption {
  /** 要分享的文本内容 */
  content: string
  /**
   * 分享的表情消息是否要带小程序入口
   * 默认值 true
   */
  needShowEntrance?: boolean
  /**
   * 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2
   * 默认值 ''
   */
  entrancePath?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShareVideoToGroupOption {
  /** 要分享的视频地址，必须为本地路径或临时路径 */
  videoPath: string
  /** 缩略图路径，若留空则使用视频首帧 */
  thumbPath?: string
  /**
   * 分享的图片消息是否要带小程序入口
   * 默认值 true
   */
  needShowEntrance?: boolean
  /**
   * 如需传递参数，只传 query 即可，query 形如 ?a=1&b=2
   * 默认值 ''
   */
  entrancePath?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxChattool {
  /** 进入聊天工具开放能力模式。 */
  enterChatToolMode(object?: WxEnterChatToolModeOption): void;
  /** 退出聊天工具开放能力模式 */
  exitChatTool(object?: WxExitChatToolOption): void;
  /**
   * 获取聊天工具模式下的群聊信息。
   * 支持 Promise 风格调用
   */
  getChatToolInfo(object?: WxGetChatToolInfoOption): void;
  /** 是否处于聊天工具模式 */
  isChatTool(): void;
  /**
   * 提醒用户完成任务，标题长度不超过 30 个字符，支持中英文和数字，中文算2个字符。
   * 支持 Promise 风格调用
   */
  notifyGroupMembers(object?: WxNotifyGroupMembersOption): void;
  /**
   * 进入聊天工具模式。
   * 支持 Promise 风格调用
   */
  openChatTool(object?: WxOpenChatToolOption): void;
  /**
   * 选择聊天室的成员，并返回选择成员的 group_openid。若当前为群聊，则会拉起成员选择器；若当前为单聊，则直接返回双方的 group_openid。
   * 支持 Promise 风格调用
   */
  selectGroupMembers(object?: WxSelectGroupMembersOption): void;
  /**
   * 转发小程序卡片到聊天
   * 支持 Promise 风格调用
   */
  shareAppMessageToGroup(object?: WxShareAppMessageToGroupOption): void;
  /**
   * 转发表情到聊天
   * 支持 Promise 风格调用
   */
  shareEmojiToGroup(object?: WxShareEmojiToGroupOption): void;
  /**
   * 转发图片到聊天
   * 支持 Promise 风格调用
   */
  shareImageToGroup(object?: WxShareImageToGroupOption): void;
  /** 转发文本到聊天 */
  shareTextToGroup(object?: WxShareTextToGroupOption): void;
  /**
   * 转发视频到聊天
   * 支持 Promise 风格调用
   */
  shareVideoToGroup(object?: WxShareVideoToGroupOption): void;
}

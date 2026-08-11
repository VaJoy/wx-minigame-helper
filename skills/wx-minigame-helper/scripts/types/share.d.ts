// 微信小游戏 API 类型声明 — 域：share（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxAuthPrivateMessageSuccessCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 验证是否通过 */
  valid: boolean
  /**
   * 经过加密的activityId，解密后可得到原始的activityId。若解密后得到的activityId可以与开发者后台的活动id对应上则验证通过，否则表明valid字段不可靠（被篡改） 详细见加密数据解密算法
   */
  encryptedData: string
  /** 加密算法的初始向量，详细见加密数据解密算法 */
  iv: string
}

interface WxAuthPrivateMessageOption {
  /** shareTicket。可以从 wx.getEnterOptionsSync 中获取。详情 shareTicket */
  shareTicket: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxAuthPrivateMessageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCheckHandoffEnabledSuccessCallbackResult {
  /** 是否可以进行接力 */
  isEnabled: boolean
  /** 错误码，0未知，1用户取消，2电脑未登录，3电脑版本过低，4暂未支持 */
  errCode: number
}

interface WxCheckHandoffEnabledOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxCheckHandoffEnabledSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetShareInfoSuccessCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法 */
  encryptedData: string
  /** 加密算法的初始向量，详细见加密数据解密算法 */
  iv: string
  /**
   * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
   * 最低版本 2.7.0
   */
  cloudID: string
}

interface WxGetShareInfoOption {
  /** shareTicket，详见获取更多转发信息 */
  shareTicket: string
  /**
   * 超时时间，单位 ms
   * 最低版本 1.9.90
   */
  timeout?: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetShareInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxHideShareMenuOption {
  /**
   * 本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
   * 最低版本 2.11.3
   */
  menus?: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnAddToFavoritesListenerCallbackResult {
  /** 收藏标题，不传则默认使用当前小游戏的昵称。 */
  title: string
  /**
   * 查询字符串，必须是 key1=val1&key2=val2 的格式。从收藏进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。
   */
  query: string
  /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
  imageUrl: string
  /** 禁止收藏后长按转发，默认 false */
  disableForward: boolean
}

interface WxOnCopyUrlListenerCallbackResult {
  /**
   * 用短链打开小程序时当前页面携带的查询字符串，默认为空字符串。小程序中使用时，应在进入页面时调用 `wx.onCopyUrl` 自定义 `query`，退出页面时调用 `wx.offCopyUrl`，防止影响其它页面。
   */
  query: string
  /**
   * 短链中的自定义标题，显示在小程序名称之后。在基础库3.15.1之前，默认是 navigationBarTitleText 的值，在基础库3.15.1及之后，默认为空字符串。
   * 最低版本 3.15.1
   */
  title: string
  /**
   * 如果该参数存在且为有效的 Promise，则最终的 `query` 和 `title` 将以该 Promise 的 resolve 结果为准；如果 Promise 在 2 秒内未 resolve 或 reject，则回退使用同步传入的默认参数。
   * 最低版本 3.16.0
   */
  promise: Record<string, any>
}

interface WxOnHandoffListenerCallbackResult {
  /** 需要传递给接力客户端的 query */
  query: string
}

interface WxOnShareAppMessageListenerCallbackResult {
  /** 转发标题，不传则默认使用当前小游戏的昵称。 */
  title: string
  /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
  imageUrl: string
  /**
   * 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。
   */
  query: string
  /**
   * 审核通过的图片编号，详见 使用审核通过的转发图片
   * 最低版本 2.4.3
   */
  imageUrlId: string
  /**
   * 如果该参数存在，则其它的参数将会以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数
   * 最低版本 2.12.0
   */
  promise: Promise<any>
  /**
   * 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。
   * 最低版本 2.12.2
   */
  toCurrentGroup: boolean
  /**
   * 独立分包路径。详见 小游戏独立分包指南
   * 最低版本 2.12.2
   */
  path: string
}

interface WxOnShareMessageToFriendListenerCallbackResult {
  /** 是否成功 */
  success: boolean
  /** 错误信息 */
  errMsg: string
}

interface WxOnShareTimelineListenerCallbackResult {
  /** 转发标题，不传则默认使用当前小游戏的昵称。 */
  title: string
  /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。（该图片用于分享到朋友圈的卡片以及从朋友圈转发到会话消息的卡片展示） */
  imageUrl: string
  /** 审核通过的图片编号，详见 使用审核通过的转发图片 */
  imageUrlId: string
  /**
   * 朋友圈预览图链接，不传则默认使用当前游戏画面截图
   * 最低版本 2.14.3
   */
  imagePreviewUrl: string
  /**
   * 审核通过的朋友圈预览图图片编号，详见 使用审核通过的转发图片
   * 最低版本 2.14.3
   */
  imagePreviewUrlId: string
  /**
   * 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。不传则默认使用当前页面query。
   */
  query: string
  /**
   * 独立分包路径。详见 小游戏独立分包指南
   * 最低版本 2.12.2
   */
  path: string
}

interface WxSetMessageToFriendQueryOption {
  /** 需要传递的代表场景的数字，需要在 0 - 50 之间 */
  shareMessageToFriendScene: number
  /** 需要传递的字符串数据，长度需要在 128 之内 */
  query: string
}

interface WxShareAppMessageOption {
  /** 转发标题，不传则默认使用当前小游戏的昵称。 */
  title?: string
  /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4 */
  imageUrl?: string
  /**
   * 查询字符串，从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。
   */
  query?: string
  /**
   * 审核通过的图片编号，详见 使用审核通过的转发图片
   * 最低版本 2.4.3
   */
  imageUrlId?: string
  /**
   * 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话。
   * 默认值 true
   * 最低版本 2.12.2
   */
  toCurrentGroup?: boolean
  /**
   * 独立分包路径。详见 小游戏独立分包指南
   * 最低版本 2.12.2
   */
  path?: string
}

interface WxShowShareImageMenuOption {
  /** 要分享的图片地址，必须为本地路径或临时路径 */
  path: string
  /**
   * 分享的图片消息是否要带小程序入口 (仅部分小程序类目可用)
   * 默认值 false
   * 最低版本 3.2.0
   */
  needShowEntrance?: boolean
  /**
   * 从消息小程序入口打开小程序的路径，如果当前页面允许分享给朋友，则默认为当前页面路径，否则默认为小程序首页
   * 默认值 ''
   * 最低版本 3.2.0
   */
  entrancePath?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShowShareMenuOption {
  /**
   * 是否使用带 shareTicket 的转发详情
   * 默认值 false
   */
  withShareTicket?: boolean
  /**
   * 本接口为 Beta 版本，暂只在 Android 平台支持。需要显示的转发按钮名称列表，默认['shareAppMessage']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
   * 最低版本 2.11.3
   */
  menus?: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartHandoffOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxUpdateShareMenuOption {
  /**
   * 是否使用带 shareTicket 的转发详情
   * 默认值 false
   */
  withShareTicket?: boolean
  /**
   * 是否是动态消息，详见动态消息
   * 默认值 false
   * 最低版本 2.4.0
   */
  isUpdatableMessage?: boolean
  /**
   * 动态消息的 activityId。通过 updatableMessage.createActivityId 接口获取
   * 最低版本 2.4.0
   */
  activityId?: string
  /**
   * 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 updatableMessage.createActivityId 接口获取。详见群待办消息
   * 最低版本 2.11.0
   */
  toDoActivityId?: string
  /**
   * 动态消息的模板信息
   * 最低版本 2.4.0
   */
  templateInfo?: Record<string, any>
  /** 参数列表 */
  parameterList: Record<string, any>[]
  /** 参数名 */
  name: string
  /** 参数值 */
  value: string
  /** 模板ID */
  templateId: string
  /**
   * 是否是私密消息。详见 小程序私密消息
   * 最低版本 2.13.0
   */
  isPrivateMessage?: boolean
  /**
   * 参与用户此聊天室下的 group_openid 列表
   * 默认值 []
   */
  participant?: string[]
  /**
   * 聊天工具模式特殊动态消息
   * 默认值 false
   * 最低版本 3.7.8
   */
  useForChatTool?: boolean
  /**
   * 指定成员的方式
   * 默认值 1
   * 最低版本 3.7.8
   */
  chooseType?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShare {
  /** 验证私密消息。用法详情见 小程序私密消息使用指南 */
  authPrivateMessage(object?: WxAuthPrivateMessageOption): void;
  /** 检查是否可以进行接力，该接口需要在开放数据域调用 */
  checkHandoffEnabled(object?: WxCheckHandoffEnabledOption): void;
  /**
   * 获取转发详细信息（主要是获取群ID）。 从群聊内的小程序消息卡片打开小程序时，调用此接口才有效。从基础库 v2.17.3 开始，推荐用 wx.getGroupEnterInfo 替代此接口。
   * @deprecated 从基础库 2.17.3 开始，本接口停止维护，请使用 wx.getGroupEnterInfo 代替
   */
  getShareInfo(object?: WxGetShareInfoOption): void;
  /**
   * 隐藏当前页面的转发按钮
   * 支持 Promise 风格调用
   */
  hideShareMenu(object?: WxHideShareMenuOption): void;
  /** 移除用户点击菜单「收藏」按钮时触发的事件的全部监听函数 */
  offAddToFavorites(): void;
  /** 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的全部监听函数 */
  offCopyUrl(): void;
  /** 移除用户点击菜单「在电脑上打开」按钮时触发的事件的全部监听函数 */
  offHandoff(): void;
  /** 移除用户点击右上角菜单的「转发」按钮时触发的事件的监听函数 */
  offShareAppMessage(listener: (res: any) => void): void;
  /** 移除主域接收`wx.shareMessageToFriend`接口的成功失败通知事件的监听函数 */
  offShareMessageToFriend(listener: (res: any) => void): void;
  /** 移除用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件的监听函数 */
  offShareTimeline(listener: (res: any) => void): void;
  /** 监听用户点击菜单「收藏」按钮时触发的事件 */
  onAddToFavorites(listener: (res: WxOnAddToFavoritesListenerCallbackResult) => void): void;
  /** 监听用户点击右上角菜单的「复制链接」按钮时触发的事件。 */
  onCopyUrl(listener: (res: WxOnCopyUrlListenerCallbackResult) => void): void;
  /** 监听用户点击菜单「在电脑上打开」按钮时触发的事件 */
  onHandoff(listener: (res: WxOnHandoffListenerCallbackResult) => void): void;
  /** 监听用户点击右上角菜单的「转发」按钮时触发的事件 */
  onShareAppMessage(listener: (res: WxOnShareAppMessageListenerCallbackResult) => void): void;
  /** 监听主域接收`wx.shareMessageToFriend`接口的成功失败通知事件 */
  onShareMessageToFriend(listener: (res: WxOnShareMessageToFriendListenerCallbackResult) => void): void;
  /** 监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。 */
  onShareTimeline(listener: (res: WxOnShareTimelineListenerCallbackResult) => void): void;
  /** 设置接力参数，该接口需要在游戏域调用 */
  setHandoffQuery(query: string): boolean;
  /** 设置 wx.shareMessageToFriend 接口 query 字段的值 */
  setMessageToFriendQuery(object?: WxSetMessageToFriendQueryOption): boolean;
  /** 主动拉起转发，进入选择通讯录界面。 */
  shareAppMessage(object?: WxShareAppMessageOption): void;
  /**
   * 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载
   * 支持 Promise 风格调用
   */
  showShareImageMenu(object?: WxShowShareImageMenuOption): void;
  /**
   * 设置右上角点开的详情界面中的分享按钮是否可用
   * 支持 Promise 风格调用
   */
  showShareMenu(object?: WxShowShareMenuOption): void;
  /** 开始进行接力，该接口需要在开放数据域调用 */
  startHandoff(object?: WxStartHandoffOption): void;
  /**
   * 更新转发属性
   * 支持 Promise 风格调用
   */
  updateShareMenu(object?: WxUpdateShareMenuOption): void;
}

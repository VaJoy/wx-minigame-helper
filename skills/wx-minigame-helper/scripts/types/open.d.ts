// 微信小游戏 API 类型声明 — 域：open（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxAddCardSuccessCallbackResult {
  /** 卡券添加结果列表 */
  cardList: Record<string, any>[]
  /** 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：code 解码接口 */
  code: string
  /** 用户领取到卡券的 ID */
  cardId: string
  /** 卡券的扩展参数，结构请参考下文 */
  cardExt: string
  /** 是否成功 */
  isSuccess: boolean
}

interface WxAddCardOption {
  /** 需要添加的卡券列表 */
  cardList: Record<string, any>[]
  /** 卡券 ID */
  cardId: string
  /** 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为**字符串**传入 */
  cardExt: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxAddCardSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxAuthorizeOption {
  /** 需要获取权限的 scope，详见 scope 列表 */
  scope: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCheckIsAddedToMyMiniProgramSuccessCallbackResult {
  /** 是否被添加至 「我的小程序」 */
  added: boolean
}

interface WxCheckIsAddedToMyMiniProgramOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxCheckIsAddedToMyMiniProgramSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCheckIsSupportFacialRecognitionOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCheckSessionOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCreateFeedbackButtonOption {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text?: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image?: string
  /** 按钮的样式 */
  style: Record<string, any>
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor?: string
  /** 边框宽度 */
  borderWidth?: number
  /** 边框圆角 */
  borderRadius?: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color?: string
  /** 文本的水平居中方式 */
  textAlign?: string
  /** 字号 */
  fontSize?: number
  /** 文本的行高 */
  lineHeight?: number
}

interface WxCreateGameClubButtonOption {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text?: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image?: string
  /** 按钮的样式 */
  style: Record<string, any>
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor?: string
  /** 边框宽度 */
  borderWidth?: number
  /** 边框圆角 */
  borderRadius?: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color?: string
  /** 文本的水平居中方式 */
  textAlign?: string
  /** 字号 */
  fontSize?: number
  /** 文本的行高 */
  lineHeight?: number
  /** 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效。 */
  icon: string
  /**
   * 设置后可以跳到对应的活动页面，具体进入「MP后台-能力地图-游戏圈」-由帖子的"游戏内跳转ID"生成
   * 最低版本 2.30.3
   */
  openlink?: string
  /**
   * 当传递了openlink值时，此字段生效，决定创建的按钮是否需要拥有红点，默认为true
   * 默认值 true
   * 最低版本 2.30.3
   */
  hasRedDot?: boolean
}

interface WxCreateOpenSettingButtonOption {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text?: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image?: string
  /** 按钮的样式 */
  style: Record<string, any>
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor?: string
  /** 边框宽度 */
  borderWidth?: number
  /** 边框圆角 */
  borderRadius?: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color?: string
  /** 文本的水平居中方式 */
  textAlign?: string
  /** 字号 */
  fontSize?: number
  /** 文本的行高 */
  lineHeight?: number
}

interface WxCreateStoreGiftOption {
  /** 礼物订单id，调用“创建并发送礼物”或通过“查询礼物订单列表”open api拿到，open api文档链接。 */
  presentOrderId?: boolean
  /** 用户 openid */
  openid?: string
}

interface WxCreateUserInfoButtonOption {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text?: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image?: string
  /** 按钮的样式 */
  style: Record<string, any>
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor?: string
  /** 边框宽度 */
  borderWidth?: number
  /** 边框圆角 */
  borderRadius?: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color?: string
  /** 文本的水平居中方式 */
  textAlign?: string
  /** 字号 */
  fontSize?: number
  /** 文本的行高 */
  lineHeight?: number
  /**
   * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
   * 默认值 true
   */
  withCredentials?: boolean
  /**
   * 描述用户信息的语言
   * 默认值 en
   */
  lang?: string
}

interface WxGetChannelsLiveInfoSuccessCallbackResult {
  /** 直播 feedId */
  feedId: string
  /** 直播 nonceId */
  nonceId: string
  /** 直播主题 */
  description: string
  /** 直播状态 */
  status: number
  /** 视频号头像 */
  headUrl: string
  /** 视频号昵称 */
  nickname: string
  /**
   * 直播回放状态
   * 最低版本 2.29.0
   */
  replayStatus: string
  /**
   * 除最近的一条直播外，其他的直播列表（注意：每次最多返回按时间戳增序排列的15个直播信息，其中时间最近的那个直播会在接口其他的返回参数中展示，其余的直播会在该字段中展示）。
   * 最低版本 2.29.0
   */
  otherInfos: Record<string, any>[]
}

interface WxGetChannelsLiveInfoOption {
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
  finderUserName: string
  /**
   * 起始时间，筛选指定时间段的直播。若上传了endTime，未上传startTime，则startTime默认为0
   * 最低版本 2.29.0
   */
  startTime?: number
  /**
   * 结束时间，筛选指定时间段的直播。若上传了startTime，未上传endTime，则endTime默认取当前时间
   * 最低版本 2.29.0
   */
  endTime?: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetChannelsLiveInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetChannelsLiveNoticeInfoSuccessCallbackResult {
  /** 预告 id */
  noticeId: string
  /** 预告状态：0可用 1取消 2已用 */
  status: number
  /** 开始时间 */
  startTime: string
  /** 直播封面 */
  headUrl: string
  /** 视频号昵称 */
  nickname: string
  /** 是否可预约 */
  reservable: boolean
  /**
   * 除最近的一条预告信息外，其他的预告信息列表（注意：每次最多返回按时间戳增序排列的15个预告信息，其中时间最近的那个预告信息会在接口其他的返回参数中展示，其余的预告信息会在该字段中展示）。
   * 最低版本 2.24.6
   */
  otherInfos: Record<string, any>[]
}

interface WxGetChannelsLiveNoticeInfoOption {
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
  finderUserName: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetChannelsLiveNoticeInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetFriendCloudStorageSuccessCallbackResult {
  /** 同玩好友的托管数据 */
  data: UserGameData[]
}

interface WxGetFriendCloudStorageOption {
  /** 要拉取的 key 列表 */
  keyList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetFriendCloudStorageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetFriendSendGiftStatusSuccessCallbackResult {
  /** 好友送礼状态信息列表 */
  data: FriendSendGiftStatus[]
}

interface WxGetFriendSendGiftStatusOption {
  /** 礼包 id */
  giftId: string
  /** 要查询的 openid 列表 */
  openidList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetFriendSendGiftStatusSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetGameClubDataSuccessCallbackResult {
  /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息 */
  signature: string
  /** 包括 GameClubData 在内的加密数据，详见加密数据解密算法 */
  encryptedData: string
  /** 加密算法的初始向量 */
  iv: string
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 */
  cloudID: string
}

interface WxGetGameClubDataOption {
  /** 需要获取的数据指标的对象数组 */
  dataTypeList: Record<string, any>[]
  /** 见type表格说明 */
  type: number
  /** 部分type需要传，见type表格说明 */
  subKey?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetGameClubDataSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetGroupCloudStorageSuccessCallbackResult {
  /** 群同玩成员的托管数据 */
  data: UserGameData[]
}

interface WxGetGroupCloudStorageOption {
  /** 群分享对应的 shareTicket。shareTicket 与 groupid 只需要传其中一个，建议使用 groupid */
  shareTicket?: string
  /**
   * 对应群的 opengid。可通过主域中的 wx.getGroupEnterInfo 接口获取。shareTicket 与 groupid 只需要传其中一个，建议使用 groupid
   * 最低版本 3.8.8
   */
  groupid?: string
  /** 要拉取的 key 列表 */
  keyList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetGroupCloudStorageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetGroupEnterInfoSuccessCallbackResult {
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

interface WxGetGroupEnterInfoOption {
  /**
   * 开启后单聊下返回 open_single_roomid
   * 默认值 false
   * 最低版本 3.7.8
   */
  allowSingleChat?: boolean
  /**
   * 开启后返回用户在群(含单聊)下的 group_openid
   * 默认值 false
   * 最低版本 3.7.8
   */
  needGroupOpenID?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetGroupEnterInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetGroupInfoSuccessCallbackResult {
  /** 群名称 */
  name: string
}

interface WxGetGroupInfoOption {
  /** 群 openGId，可通过 `wx.getGroupEnterInfo` 或 `wx.getShareInfo` 获取 */
  openGId: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetGroupInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetGroupMembersInfoSuccessCallbackResult {
  /** 所选用户的头像昵称列表 */
  membersInfo: Record<string, any>[]
  /** 用户头像图片 url */
  avatarUrl: string
  /** 用户所在城市 */
  city: string
  /** 用户所在国家 */
  country: string
  /** 用户性别 */
  gender: number
  /** 显示 country province city 所用的语言 */
  language: string
  /** 用户昵称 */
  nickName: string
  /** 用户 openId */
  openId: string
  /** 用户所在省份 */
  province: string
}

interface WxGetGroupMembersInfoOption {
  /** 需要获取的群用户的 groupOpenId 列表 */
  members: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetGroupMembersInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetOpenDataContextOption {
  /**
   * 共享画布类型，有效值为 offscreenCanvas 和 screenCanvas，默认为 offscreenCanvas。区别： offscreenCanvas 模式下，sharedCanvas 绘制完后需要渲染到主屏；screenCanvas 模式下，sharedCanvas 为独立渲染，并且本身已经上屏。
   * 默认值 offscreenCanvas
   */
  sharedCanvasMode?: string
}

interface WxGetPhoneNumberSuccessCallbackResult {
  /** 动态令牌 */
  code: string
  /** 回调信息（成功失败都会返回） */
  errMsg: string
  /** 错误码（失败时返回） */
  errno: number
}

interface WxGetPhoneNumberOption {
  /**
   * 手机号实时验证，向用户申请，并在用户同意后，快速填写和实时验证手机号 具体说明。
   * 默认值 false
   */
  isRealtime?: boolean
  /**
   * 当手机号快速验证或手机号实时验证额度用尽时，是否对用户展示“申请获取你的手机号，但该功能使用次数已达当前小程序上限，暂时无法使用”的提示，默认展示。
   * 默认值 true
   */
  phoneNumberNoQuotaToast?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetPhoneNumberSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetPotentialFriendListSuccessCallbackResult {
  /** 可能对游戏感兴趣的未注册好友名单 */
  list: FriendInfo[]
}

interface WxGetPotentialFriendListOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetPotentialFriendListSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetPrivacySettingSuccessCallbackResult {
  /**
   * 是否需要用户授权隐私协议（如果开发者没有在「MP后台-设置-服务内容声明-用户隐私保护指引」中声明隐私收集类型则会返回false；如果开发者声明了隐私收集，且用户之前同意过隐私协议则会返回false；如果开发者声明了隐私收集，且用户还没同意过则返回true；如果用户之前同意过、但后来小程序又新增了隐私收集类型也会返回true）
   */
  needAuthorization: boolean
  /** 隐私授权协议的名称 */
  privacyContractName: string
}

interface WxGetPrivacySettingOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetPrivacySettingSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetRelationFriendListSuccessCallbackResult {
  /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息 */
  signature: string
  /** 包括 RelationFriendData 在内的加密数据，详见加密数据解密算法 */
  encryptedData: string
  /** 加密算法的初始向量 */
  iv: string
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 */
  cloudID: string
}

interface WxGetRelationFriendListOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetRelationFriendListSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetSettingSuccessCallbackResult {
  /** 用户授权结果 */
  authSetting: AuthSetting
  /**
   * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。
   * 最低版本 2.10.1
   */
  subscriptionsSetting: SubscriptionsSetting
  /** 在插件中调用时，当前宿主小程序的用户授权结果 */
  miniprogramAuthSetting: AuthSetting
}

interface WxGetSettingOption {
  /**
   * 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
   * 默认值 false
   * 最低版本 2.10.1
   */
  withSubscriptions?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetSettingSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetUserCloudStorageSuccessCallbackResult {
  /** 用户托管的 KV 数据列表 */
  KVDataList: KVData[]
}

interface WxGetUserCloudStorageOption {
  /** 要获取的 key 列表 */
  keyList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetUserCloudStorageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetUserCloudStorageKeysSuccessCallbackResult {
  /** 用户托管数据当中所有的 key 数组 */
  keys: string[]
}

interface WxGetUserCloudStorageKeysOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetUserCloudStorageKeysSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetUserInfoSuccessCallbackResult {
  /** 用户信息对象，不包含 openid 等敏感信息 */
  userInfo: UserInfo
  /** 不包括敏感信息的原始数据字符串，用于计算签名 */
  rawData: string
  /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密 */
  signature: string
  /** 包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密 */
  encryptedData: string
  /** 加密算法的初始向量，详见 用户数据的签名验证和加解密 */
  iv: string
  /**
   * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
   * 最低版本 2.7.0
   */
  cloudID: string
}

interface WxGetUserInfoOption {
  /**
   * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
   */
  withCredentials?: boolean
  /**
   * 显示用户信息的语言
   * 默认值 en
   */
  lang?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetUserInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetUserInteractiveStorageSuccessCallbackResult {
  /** 加密算法的初始向量，详见 用户数据的签名验证和加解密 */
  iv: string
  /** 加密数据，包含互动型托管数据的值。解密后的结果为一个 `KVDataList`，每一项为一个 `KVData`。 用户数据的签名验证和加解密 */
  encryptedData: string
  /** 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据 */
  cloudID: string
}

interface WxGetUserInteractiveStorageOption {
  /** 要获取的 key 列表 */
  keyList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetUserInteractiveStorageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetWeRunDataSuccessCallbackResult {
  /** 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文 */
  encryptedData: string
  /** 加密算法的初始向量，详细见加密数据解密算法 */
  iv: string
  /**
   * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
   * 最低版本 2.7.0
   */
  cloudID: string
}

interface WxGetWeRunDataOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetWeRunDataSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxLoginSuccessCallbackResult {
  /**
   * 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 code2Session，使用 code 换取 openid、unionid、session_key 等信息
   */
  code: string
}

interface WxLoginOption {
  /**
   * 超时时间，单位ms
   * 最低版本 1.9.90
   */
  timeout?: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxLoginSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxModifyFriendInteractiveStorageOption {
  /** 需要修改的数据的 key，目前可以为 '1' - '50' */
  key: string
  /** 需要修改的数值，目前只能为 1 */
  opNum: number
  /** 修改类型 */
  operation: string
  /** 目标好友的 openId */
  toUser?: string
  /**
   * 分享标题，如果设置了这个值，则在交互成功后自动询问用户是否分享给好友（需要配置模板规则）
   * 最低版本 2.9.0
   */
  title?: string
  /**
   * 分享图片地址，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则）
   * 最低版本 2.9.0
   */
  imageUrl?: string
  /**
   * 分享图片编号，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则）
   * 最低版本 2.9.0
   */
  imageUrlId?: string
  /**
   * 是否静默修改（不弹框）。当进入场景是好友 定向分享 的卡片时有效，代表分享反馈操作，此时 `toUser` 默认为原分享者的 openId
   * 默认值 false
   * 最低版本 2.9.0
   */
  quiet?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenCardOption {
  /** 需要打开的卡券列表 */
  cardList: Record<string, any>[]
  /** 卡券 ID */
  cardId: string
  /** 由 wx.addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：code 解码接口 */
  code: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenChannelsActivityOption {
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
  finderUserName: string
  /** 视频 feedId */
  feedId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenChannelsEventOption {
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
  finderUserName: string
  /** 活动 id */
  eventId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenChannelsLiveOption {
  /** 视频号 id，以“sph”开头的id，可在视频号助手获取 */
  finderUserName: string
  /** 直播 feedId，通过 getChannelsLiveInfo 接口获取（基础库 v2.19.2 之前的版本需要填写） */
  feedId?: string
  /** 直播 nonceId，通过 getChannelsLiveInfo 接口获取（基础库 v2.19.2 之前的版本需要填写） */
  nonceId?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenChannelsUserProfileOption {
  /** 视频号id（参考格式为：sphcqO59YEPCvoe；查看路径为：微信客户端->我tab->视频号->右上角.-＞视频号名字-视频号ID） */
  finderUserName: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenCustomerServiceChatOption {
  /** 客服信息 */
  extInfo: Record<string, any>
  /** 客服链接 */
  url: string
  /** 企业ID */
  corpId: string
  /**
   * 是否发送小程序气泡消息
   * 默认值 false
   */
  showMessageCard?: boolean
  /** 气泡消息标题 */
  sendMessageTitle?: string
  /** 气泡消息小程序路径 */
  sendMessagePath?: string
  /** 气泡消息图片 */
  sendMessageImg?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenCustomerServiceConversationSuccessCallbackResult {
  /** 在客服会话内点击小程序消息卡片进入小程序时，所带的小程序打开路径 */
  path: string
  /** 在客服会话内点击小程序消息卡片进入小程序时，所带的小程序打开参数 */
  query: Record<string, any>
}

interface WxOpenCustomerServiceConversationOption {
  /**
   * 会话来源。该字段会在进入客服会话时透传给开发者配置好的后台服务。该字段（utf-8编码）最长不得超过 1000 个字节（不是字符串长度），超过将被截断。
   * 默认值 ''
   */
  sessionFrom?: string
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息
   * 默认值 false
   */
  showMessageCard?: boolean
  /**
   * 会话内消息卡片标题
   * 默认值 ''
   */
  sendMessageTitle?: string
  /**
   * 会话内消息卡片路径
   * 默认值 ''
   */
  sendMessagePath?: string
  /**
   * 会话内消息卡片图片路径
   * 默认值 ''
   */
  sendMessageImg?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxOpenCustomerServiceConversationSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenPrivacyContractOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOpenSettingSuccessCallbackResult {
  /** 用户授权结果 */
  authSetting: AuthSetting
  /**
   * 用户订阅消息设置，接口参数`withSubscriptions`值为`true`时才会返回。
   * 最低版本 2.10.3
   */
  subscriptionsSetting: SubscriptionsSetting
}

interface WxOpenSettingOption {
  /**
   * 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
   * 默认值 false
   * 最低版本 2.10.3
   */
  withSubscriptions?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxOpenSettingSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRemoveUserCloudStorageOption {
  /** 要删除掉 key 列表 */
  keyList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestFacialRecognitionOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestFacialVerifyOption {
  /** 人脸核身会话唯一标识（小程序后台根据「用户实名信息（姓名+身份证）」调用微信后台getVerifyId接口获取） */
  verifyId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestSubscribeMessageSuccessCallbackResult {
  /** 接口调用成功时errMsg值为'requestSubscribeMessage:ok' */
  errMsg: string
}

interface WxRequestSubscribeMessageOption {
  /**
   * 需要订阅的消息模板的id的集合，一次调用最多可订阅3条消息（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置。每个tmplId对应的模板标题需要不相同，否则会被过滤。
   */
  tmplIds: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxRequestSubscribeMessageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequestSubscribeSystemMessageSuccessCallbackResult {
  /** 接口调用成功时errMsg值为'requestSubscribeSystemMessage:ok' */
  errMsg: string
  /**
   * [MSG_TYPE]是动态的键，即系统订阅消息类型，值为'accept'、'reject'、'ban'，'accept'表示用户同意订阅该类型对应的模板消息，'reject'表示用户拒绝订阅该类型对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeSystemMessage:ok", SYS_MSG_TYPE_INTERACTIVE: "accept" } 表示用户同意订阅'SYS_MSG_TYPE_INTERACTIVE'这条消息
   */
  MSG_TYPE: string
}

interface WxRequestSubscribeSystemMessageOption {
  /**
   * 系统订阅消息类型列表，一次调用最多可订阅3种类型的消息，目前支持："SYS_MSG_TYPE_INTERACTIVE"（好友互动提醒）、"SYS_MSG_TYPE_RANK"（排行榜超越提醒）、"SYS_MSG_TYPE_WHATS_NEW"（游戏更新提醒）
   */
  msgTypeList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxRequestSubscribeSystemMessageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxRequirePrivacyAuthorizeOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxReserveChannelsLiveOption {
  /** 预告 id，通过 getChannelsLiveNoticeInfo 接口获取 */
  noticeId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSendGiftToFriendOption {
  /** 礼包 id */
  giftId: string
  /** 好友的 openid */
  openid: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetUserCloudStorageOption {
  /** 要修改的 KV 数据列表 */
  KVDataList: KVData[]
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShareMessageToFriendOption {
  /** 发送对象的 openId */
  openId: string
  /** 转发标题，不传则默认使用当前小游戏的昵称。 */
  title?: string
  /**
   * 转发显示图片的链接，可使用本地图片文件路径或相对代码包根目录的图片文件路径，不可使用网络图片。如需使用网络图片，可先在游戏域调用 wx.downloadFile 下载到本地后，调用 OpenDataContext.postMessage 发送本地图片路径到开放数据域使用。显示图片长宽比是 5:4
   */
  imageUrl?: string
  /** 审核通过的图片编号，详见 使用审核通过的转发图片 */
  imageUrlId?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 用户授权设置信息，详情参考权限 */
interface AuthSetting {
}

interface FeedbackButtonStyle {
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor: string
  /** 边框宽度 */
  borderWidth: number
  /** 边框圆角 */
  borderRadius: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color: string
  /** 文本的水平居中方式 */
  textAlign: string
  /** 字号 */
  fontSize: number
  /** 文本的行高 */
  lineHeight: number
}

/** 用户点击后打开意见反馈页面的按钮 */
interface FeedbackButton {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image: string
  /** 按钮的样式 */
  style: FeedbackButtonStyle
  /** 销毁意见反馈按钮 */
  destroy(): void
  /** 隐藏意见反馈按钮。 */
  hide(): void
  /** 移除意见反馈按钮的点击事件的监听函数 */
  offTap(listener: (res: any) => void): void
  /** 监听意见反馈按钮的点击事件 */
  onTap(listener: (res: any) => void): void
  /** 显示意见反馈按钮 */
  show(): void
}

interface FriendInfo {
  /** 用户的微信头像 url */
  avatarUrl: string
  /** 用户的微信昵称 */
  nickname: string
  /** 用户 openid */
  openid: string
}

/** 用户送礼状态信息 */
interface FriendSendGiftStatus {
  /** 用户的 openid */
  openid: string
  /** 是否禁止送礼，false 代表当前可以发起赠送 */
  blockSend: boolean
  /** 禁止送礼原因枚举，该字段在 blockSend 为 false 的时候不会返回 */
  blockCode: number
  /** 禁止送礼原因描述，该字段在 blockSend 为 false 的时候不会返回 */
  blockReason: string
  /** 值 | 含义 */
  枚举: any
}

interface GameClubButtonStyle {
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor: string
  /** 边框宽度 */
  borderWidth: number
  /** 边框圆角 */
  borderRadius: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color: string
  /** 文本的水平居中方式 */
  textAlign: string
  /** 字号 */
  fontSize: number
  /** 文本的行高 */
  lineHeight: number
}

/** 游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 游戏圈使用指南 */
interface GameClubButton {
  /** 游戏圈按钮的图标，仅当 type 参数为 image 时有效。 */
  icon: string
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image: string
  /** 按钮的样式 */
  style: GameClubButtonStyle
  /** 销毁游戏圈按钮 */
  destroy(): void
  /** 隐藏游戏圈按钮 */
  hide(): void
  /** 移除游戏圈按钮的点击事件的监听函数 */
  offTap(listener: (res: any) => void): void
  /** 监听游戏圈按钮的点击事件 */
  onTap(listener: (res: any) => void): void
  /** 显示游戏圈按钮 */
  show(): void
}

/** 托管的 KV 数据 */
interface KVData {
  /** 数据的 key */
  key: string
  /** 数据的 value */
  value: string
}

interface WxGetUserInfoSuccessCallbackResult {
  /** 用户信息列表 */
  data: Record<string, any>[]
  /** 用户头像图片 url */
  avatarUrl: string
  /** 用户所在城市 */
  city: string
  /** 用户所在国家 */
  country: string
  /** 用户性别 */
  gender: number
  /** 显示 country province city 所用的语言 */
  language: string
  /** 用户昵称 */
  nickName: string
  /** 用户 openId */
  openId: string
  /** 用户所在省份 */
  province: string
}

interface WxGetUserInfoOption {
  /**
   * 要获取信息的用户的 openId 数组，如果要获取当前用户信息，则将数组中的一个元素设为 'selfOpenId'
   * 默认值 []
   */
  openIdList?: string[]
  /**
   * 显示用户信息的语言
   * 默认值 en
   */
  lang?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetUserInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 开放数据域对象 */
interface OpenDataContext {
  /** 开放数据域和主域共享的 sharedCanvas */
  canvas: Canvas
  /** 批量获取用户信息，仅支持获取自己和好友的用户信息。该接口需要用户授权，且只在开放数据域下可用。 */
  getUserInfo(object?: WxGetUserInfoOption): void
  /** 向开放数据域发送消息 */
  postMessage(message?: Record<string, any>): void
}

interface OpenDataContextUserInfo {
  /** 用户的微信头像 url */
  avatarUrl: string
  /** 用户的微信昵称 */
  nickname: string
  /** 用户的 groupOpenId */
  groupOpenId: string
}

interface OpenSettingButtonStyle {
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor: string
  /** 边框宽度 */
  borderWidth: number
  /** 边框圆角 */
  borderRadius: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color: string
  /** 文本的水平居中方式 */
  textAlign: string
  /** 字号 */
  fontSize: number
  /** 文本的行高 */
  lineHeight: number
}

/** 用户点击后打开设置页面的按钮 */
interface OpenSettingButton {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image: string
  /** 按钮的样式 */
  style: OpenSettingButtonStyle
  /** 销毁打开设置页面按钮 */
  destroy(): void
  /** 隐藏打开设置页面按钮。 */
  hide(): void
  /** 移除设置页面按钮的点击事件的监听函数 */
  offTap(listener: (res: any) => void): void
  /** 监听设置页面按钮的点击事件 */
  onTap(listener: (res: any) => void): void
  /** 显示打开设置页面按钮 */
  show(): void
}

interface PageManagerLoadOption {
  /** 从不同渠道获得的OPENLINK字符串 */
  openlink: string
  /** 选填，部分活动、功能允许接收自定义query参数，请参阅渠道说明，默认可不填 */
  query?: Record<string, any>
  /** 选填，部分活动、功能允许额外提供参数数据，具体使用请根据渠道说明，默认可不填 */
  extraData?: Record<string, any>
}

interface PageManagerShowOption {
  /** 从不同渠道获得的OPENLINK字符串 */
  openlink?: string
  /** 选填，部分活动、功能允许接收自定义query参数，请参阅渠道说明，默认可不填 */
  query?: Record<string, any>
  /** 选填，部分活动、功能允许额外提供参数数据，具体使用请根据渠道说明，默认可不填 */
  extraData?: Record<string, any>
}

/** 小游戏开放页面管理器实例。 */
interface PageManager {
  /** 销毁开放页面实例。 */
  destroy(): void
  /** 提供OPENLINK加载活动、功能信息。 */
  load(object?: PageManagerLoadOption): Promise<any>
  /** 取消监听来自活动、功能向开发者产生的某些事件。 */
  off(eventName: string, callback: (res: any) => void): void
  /** 监听来自活动、功能向开发者产生的某些事件。 */
  on(eventName: string, callback: (res: any) => void): void
  /** 显示已经成功加载信息的开放页面活动、功能。如果调用前未执行 `.load({ ... })` 将自动调用1次并返回加载信息结果。 */
  show(object?: PageManagerShowOption): Promise<any>
}

interface RankManagerAbortOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface RankManagerCreateChallengeOption {
  /** 玩法唯一标识，用于区分不同的擂台赛玩法。可以在 MP后台-运营功能管理-基础配置-游戏玩法ID 中配置 */
  scoreKey: string
  /** 可选子 key，正整数，取值范围1-1000。该参数可用于游戏同一玩法的关卡区分，从基础库版本3.12.1开始支持 */
  subScoreKey?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface RankManagerGetScoreOption {
  /** 玩法唯一标识数组 */
  scoreKeys: string[]
  /** 可选子 key 数组，从基础库版本3.12.1开始支持 */
  subScoreKeys?: number[]
  /** 查询的周期：1：自然日最高分；2：自然周最高分；3：自然月最高分；4：历史最高分；5 最新得分 */
  periodType: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface RankManagerMiddleUpdateOption {
  /** 玩法唯一标识，用于区分不同的擂台赛玩法。可以在 MP后台-运营功能管理-基础配置-游戏玩法ID 中配置 */
  scoreKey: string
  /** 用户得分 */
  score: number
  /** 可选子 key，正整数，取值范围1-1000。该参数可用于游戏同一玩法的关卡区分，从基础库版本3.12.1开始支持 */
  subScoreKey?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface RankManagerOffChallengeStartCallbackCallbackResult {
  /** 玩法唯一标识 */
  scoreKey: string
  /** 可选子 key */
  subScoreKey: number
}

interface RankManagerOnChallengeStartCallbackCallbackResult {
  /** 玩法唯一标识 */
  scoreKey: string
  /** 可选子 key */
  subScoreKey: number
}

interface RankManagerUpdateOption {
  /** 玩法唯一标识，用于区分不同的擂台赛玩法。可以在 MP后台-运营功能管理-基础配置-游戏玩法ID 中配置 */
  scoreKey: string
  /** 分数值 */
  score: number
  /** 可选子 key，正整数，取值范围1-1000。该参数可用于游戏同一玩法的关卡区分，从基础库版本3.12.1开始支持 */
  subScoreKey?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 小游戏擂台赛组件管理器。可通过 wx.getRankManager 获取实例。关于小游戏擂台赛的功能介绍详见小游戏擂台赛指南文档。 */
interface RankManager {
  /** 中途退出擂台赛。若擂台赛进行中则关闭所有相关组件。 */
  abort(params?: RankManagerAbortOption): void
  /** 创建擂台赛，唤起擂台赛起始页。 */
  createChallenge(params?: RankManagerCreateChallengeOption): void
  /** 查询当前用户得分数据。 */
  getScore(params?: RankManagerGetScoreOption): void
  /** 游戏中途更新分数信息，用于在游戏进行过程中实时上报分数。如果接入擂台赛组件，该 api不会触发擂台赛组件结算页，但会触发擂台赛分数超越播报和排行榜更新。 */
  middleUpdate(params?: RankManagerMiddleUpdateOption): void
  /** 取消监听擂台赛开始事件。 */
  offChallengeStart(callback: (res: RankManagerOffChallengeStartCallbackCallbackResult) => void): void
  /** 监听擂台赛开始事件。由擂台赛卡片进入后，用户点击擂台赛页上的“立即挑战”时触发。 */
  onChallengeStart(callback: (res: RankManagerOnChallengeStartCallbackCallbackResult) => void): void
  /**
   * 上报用户分数信息。如果接入擂台赛组件，使用此 api在发起擂台赛前上报，上报的分数将作为发起擂台赛的擂主分数。在擂台赛中上报，上报的分数将作为擂台赛者的分数，并结束擂台赛弹出结果页。
   */
  update(params?: RankManagerUpdateOption): void
}

/** 可通过 wx.createStoreGift 创建。 */
interface StoreGift {
  /** 查询订单状态 */
  getOrderInfo(): Promise<any>
  /** 获取当前环境是否支持礼物组件 */
  isSupported(): boolean
  /** 打开礼物，请注意，这里的回调仅仅是打开礼物界面的回调，并不是收下礼物的回调 */
  open(): Promise<any>
}

/** 订阅消息设置 */
interface SubscriptionsSetting {
  /** 订阅消息总开关，true为开启，false为关闭 */
  mainSwitch: boolean
  /**
   * 每一项订阅消息的订阅状态。itemSettings对象的键为**一次性订阅消息的模板id** 或**系统订阅消息的类型** ，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁。一次性订阅消息使用方法详见 wx.requestSubscribeMessage，永久订阅消息（仅小游戏可用）使用方法详见wx.requestSubscribeSystemMessage
   */
  itemSettings: Record<string, any>
}

interface UserGameData {
  /** 用户的微信头像 url */
  avatarUrl: string
  /** 用户的微信昵称 */
  nickname: string
  /** 用户的 openid */
  openid: string
  /** 用户的托管 KV 数据列表 */
  KVDataList: KVData[]
}

/** 用户头像昵称获取规则已调整，参考 用户信息接口调整说明、小程序用户头像昵称获取规则调整公告 */
interface UserInfo {
  /** 用户昵称 */
  nickName: string
  /**
   * 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。
   */
  avatarUrl: string
  /** 用户性别。不再返回，参考 相关公告 */
  gender: number
  /** 用户所在国家。不再返回，参考 相关公告 */
  country: string
  /** 用户所在省份。不再返回，参考 相关公告 */
  province: string
  /** 用户所在城市。不再返回，参考 相关公告 */
  city: string
  /** 显示 country，province，city 所用的语言。强制返回 “zh_CN”，参考 相关公告 */
  language: string
}

interface UserInfoButtonStyle {
  /** 左上角横坐标 */
  left: number
  /** 左上角纵坐标 */
  top: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
  /** 背景颜色 */
  backgroundColor: string
  /** 边框颜色 */
  borderColor: string
  /** 边框宽度 */
  borderWidth: number
  /** 边框圆角 */
  borderRadius: number
  /** 文本的颜色。格式为 6 位 16 进制数。 */
  color: string
  /** 文本的水平居中方式 */
  textAlign: string
  /** 字号 */
  fontSize: number
  /** 文本的行高 */
  lineHeight: number
}

interface UserInfoButtonOnTapListenerCallbackResult {
  /** 用户信息对象，不包含 openid 等敏感信息 */
  userInfo: UserInfo
  /** 不包括敏感信息的原始数据字符串，用于计算签名 */
  rawData: string
  /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档signature */
  signature: string
  /** 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法 */
  encryptedData: string
  /** 加密算法的初始向量，详细见加密数据解密算法 */
  iv: string
  /**
   * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
   * 最低版本 2.7.0
   */
  cloudID: string
  /** 调用结果（错误原因） */
  errMsg: string
}

/** 用户信息按钮 */
interface UserInfoButton {
  /** 按钮的类型。 */
  type: string
  /** 按钮上的文本，仅当 type 为 `text` 时有效 */
  text: string
  /** 按钮的背景图片，仅当 type 为 `image` 时有效 */
  image: string
  /** 按钮的样式 */
  style: UserInfoButtonStyle
  /** 销毁用户信息按钮 */
  destroy(): void
  /** 隐藏用户信息按钮。 */
  hide(): void
  /** 移除用户信息按钮的点击事件的监听函数 */
  offTap(listener: (res: any) => void): void
  /** 监听用户信息按钮的点击事件 */
  onTap(listener: (res: UserInfoButtonOnTapListenerCallbackResult) => void): void
  /** 显示用户信息按钮 */
  show(): void
}

interface WxOpen {
  /**
   * 批量添加卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档。
   * 支持 Promise 风格调用
   */
  addCard(object?: WxAddCardOption): void;
  /**
   * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 用户授权。
   * 支持 Promise 风格调用
   */
  authorize(object?: WxAuthorizeOption): void;
  /** 检查小程序是否被添加至 「我的小程序」 */
  checkIsAddedToMyMiniProgram(object?: WxCheckIsAddedToMyMiniProgramOption): void;
  /** 检查当前设备是否支持人脸识别能力 */
  checkIsSupportFacialRecognition(object?: WxCheckIsSupportFacialRecognitionOption): void;
  /**
   * 检查登录态 session_key 是否过期。
   * 支持 Promise 风格调用
   */
  checkSession(object?: WxCheckSessionOption): void;
  /** 创建打开意见反馈页面的按钮 */
  createFeedbackButton(object?: WxCreateFeedbackButtonOption): FeedbackButton;
  /**
   * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 游戏圈使用指南。从基础库2.30.3开始，新增传递openlink的特性，支持打开单帖子、话题页、活动页。
   */
  createGameClubButton(object?: WxCreateGameClubButtonOption): GameClubButton;
  /**
   * 创建打开设置页面的按钮
   * @deprecated 从基础库 3.0.0 开始，本接口停止维护，请使用 wx.openSetting 代替
   */
  createOpenSettingButton(object?: WxCreateOpenSettingButtonOption): OpenSettingButton;
  /** 小游戏开放页面管理器，用于启动微信内置的各种小游戏活动、功能页面。具体OPENLINK值由不同的能力渠道获得。 */
  createPageManager(): PageManager;
  /** 创建蓝包组件 */
  createStoreGift(object?: WxCreateStoreGiftOption): StoreGift;
  /** 创建用户信息按钮。使用前请参考 用户信息获取 */
  createUserInfoButton(object?: WxCreateUserInfoButtonOption): UserInfoButton;
  /** 获取当前账号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。 */
  getAccountInfoSync(): void;
  /** 获取视频号直播信息 */
  getChannelsLiveInfo(object?: WxGetChannelsLiveInfoOption): void;
  /** 获取视频号直播预告信息 */
  getChannelsLiveNoticeInfo(object?: WxGetChannelsLiveNoticeInfoOption): void;
  /**
   * 拉取当前用户所有同玩好友的托管数据。该接口需要用户授权，且只在开放数据域下可用。需要注意，添加新微信好友后的2小时内，getFriendCloudStorage 可能获取不到该新好友的数据。
   */
  getFriendCloudStorage(object?: WxGetFriendCloudStorageOption): void;
  /** 指定一批 openid 查询好友送礼状态，该接口只在开放数据域下可用。 */
  getFriendSendGiftStatus(object?: WxGetFriendSendGiftStatusOption): void;
  /** 获取游戏圈数据。 */
  getGameClubData(object?: WxGetGameClubDataOption): void;
  /** 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口需要用户授权，且只在开放数据域下可用。 */
  getGroupCloudStorage(object?: WxGetGroupCloudStorageOption): void;
  /** 获取微信群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。 */
  getGroupEnterInfo(object?: WxGetGroupEnterInfoOption): void;
  /** 获取群信息。该接口需要用户授权，且只在开放数据域下可用。 */
  getGroupInfo(object?: WxGetGroupInfoOption): void;
  /** 获取所选群成员的头像、昵称，自行在开放数据域中渲染 */
  getGroupMembersInfo(object?: WxGetGroupMembersInfoOption): void;
  /** 获取开放数据域 */
  getOpenDataContext(object?: WxGetOpenDataContextOption): OpenDataContext;
  /** 手机号快速验证，向用户申请，并在用户同意后，快速填写和验证手机 具体说明 */
  getPhoneNumber(object?: WxGetPhoneNumberOption): void;
  /** 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。该接口需要用户授权，且只在开放数据域下可用。 */
  getPotentialFriendList(object?: WxGetPotentialFriendListOption): void;
  /** 查询隐私授权情况。隐私合规开发指南详情可见《小游戏隐私合规开发指南》 */
  getPrivacySetting(object?: WxGetPrivacySettingOption): void;
  /** 初始化并返回一个擂台赛管理器实例，用于管理游戏得分存取、得分排行榜（开发中）以及擂台赛功能。小游戏擂台赛功能介绍详见小游戏擂台赛指南文档。 */
  getRankManager(): RankManager;
  /**
   * 获取小游戏同玩互动好友列表。该接口需要用户授权 scope.interactedUserInfo，首次调用时会弹出授权窗口。也可以提前通过 wx.authorize 进行授权。当用户拒绝授权后，再次调用该接口不会再弹出授权窗口，而是直接进入 fail 回调。此时开发者可通过弹出提示或者通过 wx.openSetting 引导用户进入设置页面重新开启授权。
   */
  getRelationFriendList(object?: WxGetRelationFriendListOption): void;
  /**
   * 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的权限**。
   * 支持 Promise 风格调用
   */
  getSetting(object?: WxGetSettingOption): void;
  /** 获取主域和开放数据域共享的 sharedCanvas。**只有开放数据域能调用。** */
  getSharedCanvas(): Canvas;
  /** 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用 */
  getUserCloudStorage(object?: WxGetUserCloudStorageOption): void;
  /** 获取当前用户托管数据当中所有的 key。该接口需要用户授权，且只在开放数据域下可用。 */
  getUserCloudStorageKeys(object?: WxGetUserCloudStorageKeysOption): void;
  /** 获取用户信息。详情参考 用户信息获取 */
  getUserInfo(object?: WxGetUserInfoOption): void;
  /**
   * 获取当前用户互动型托管数据对应 key 的数据。该接口需要用户授权。
   * 支持 Promise 风格调用
   */
  getUserInteractiveStorage(object?: WxGetUserInteractiveStorageOption): void;
  /** 获取用户过去三十一天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新。 */
  getWeRunData(object?: WxGetWeRunDataOption): void;
  /**
   * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台账号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台账号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
   */
  login(object?: WxLoginOption): void;
  /** 修改好友的互动型托管数据，该接口只可在开放数据域下使用。 */
  modifyFriendInteractiveStorage(object?: WxModifyFriendInteractiveStorageOption): void;
  /** 取消监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用 */
  offInteractiveStorageModified(callback: (res: any) => void): void;
  /** 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用 */
  onInteractiveStorageModified(callback: (res: any) => void): void;
  /** 监听主域发送的消息 */
  onMessage(callback: (res: any) => void): void;
  /**
   * 监听隐私接口需要用户授权事件。小游戏注册该事件监听后，会启用自定义隐私授权弹窗模式，当需要用户进行隐私授权时会触发该事件。触发该事件时，开发者需要弹出隐私协议说明，并在用户同意或拒绝授权后调用回调接口 resolve 触发原隐私接口继续执行。隐私合规开发指南详情可见《小游戏隐私合规开发指南》
   */
  onNeedPrivacyAuthorization(listener: (res: any) => void): void;
  /**
   * 查看微信卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档。
   * 支持 Promise 风格调用
   */
  openCard(object?: WxOpenCardOption): void;
  /** 打开视频号视频 */
  openChannelsActivity(object?: WxOpenChannelsActivityOption): void;
  /** 打开视频号活动页 */
  openChannelsEvent(object?: WxOpenChannelsEventOption): void;
  /** 打开视频号直播 */
  openChannelsLive(object?: WxOpenChannelsLiveOption): void;
  /** 打开视频号主页。若为插件环境，只允许在插件页面中调用。 */
  openChannelsUserProfile(object?: WxOpenChannelsUserProfileOption): void;
  /** 打开微信客服，页面产生点击事件后才可调用。了解更多信息，可以参考微信客服介绍。 */
  openCustomerServiceChat(object?: WxOpenCustomerServiceChatOption): void;
  /**
   * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 客服消息接入
   * 支持 Promise 风格调用
   */
  openCustomerServiceConversation(object?: WxOpenCustomerServiceConversationOption): void;
  /** 跳转至隐私协议页面。隐私合规开发指南详情可见《小游戏隐私合规开发指南》 */
  openPrivacyContract(object?: WxOpenPrivacyContractOption): void;
  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的权限**。
   * 支持 Promise 风格调用
   */
  openSetting(object?: WxOpenSettingOption): void;
  /**
   * 删除用户托管数据当中对应 key 的数据。
   * 支持 Promise 风格调用
   */
  removeUserCloudStorage(object?: WxRemoveUserCloudStorageOption): void;
  /**
   * 腾讯游戏人脸识别验证功能是基于健康系统防沉迷体系，用于识别疑似未成年人冒用成年人账号游玩游戏的行为，是防止未成年人沉迷网络游戏的一项重要措施。本接口是为开通虚拟支付功能的小游戏开发者提供的，此接口是基于人脸识别的未成年人身份核验接口。本次识别是根据用户在腾讯健康系统中留存的实名信息进行验证，结果将直接返回至开发者。
   */
  requestFacialRecognition(object?: WxRequestFacialRecognitionOption): void;
  /** 对用户实名信息进行基于生物识别的人脸核身验证 */
  requestFacialVerify(object?: WxRequestFacialVerifyOption): void;
  /**
   * 调起客户端小游戏订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态。
   * 支持 Promise 风格调用
   */
  requestSubscribeMessage(object?: WxRequestSubscribeMessageOption): void;
  /**
   * 调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态。
   * 支持 Promise 风格调用
   */
  requestSubscribeSystemMessage(object?: WxRequestSubscribeSystemMessageOption): void;
  /** 模拟隐私接口调用，并触发隐私弹窗逻辑。隐私合规开发指南详情可见《小游戏隐私合规开发指南》 */
  requirePrivacyAuthorize(object?: WxRequirePrivacyAuthorizeOption): void;
  /** 预约视频号直播 */
  reserveChannelsLive(object?: WxReserveChannelsLiveOption): void;
  /** 指定 openid 给他好友送礼，该接口只在开放数据域下可用。 */
  sendGiftToFriend(object?: WxSendGiftToFriendOption): void;
  /**
   * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
   * 支持 Promise 风格调用
   */
  setUserCloudStorage(object?: WxSetUserCloudStorageOption): void;
  /**
   * 给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之后，可以用 `wx.modifyFriendInteractiveStorage` 传入参数 quiet=true 发起一次无需弹框确认的好友互动。
   */
  shareMessageToFriend(object?: WxShareMessageToFriendOption): void;
}

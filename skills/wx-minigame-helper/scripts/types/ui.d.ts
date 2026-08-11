// 微信小游戏 API 类型声明 — 域：ui（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxHideLoadingOption {
  /**
   * 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性
   * 默认值 false
   * 最低版本 2.22.1
   */
  noConflict?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxHideToastOption {
  /**
   * 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性
   * 默认值 false
   * 最低版本 2.22.1
   */
  noConflict?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnOfficialComponentsInfoChangeListenerCallbackResult {
  /** 全部组件的信息 */
  OfficialComponentsInfo: Record<string, any>
  /** 通知组件信息 */
  notificationComponentInfo: Record<string, any>
  /** 组件的名称 */
  name: string
  /** 组件是否显示 */
  isVisible: boolean
  /** 组件的布局位置信息 */
  boundingClientRect: Record<string, any>
  /** 宽度，单位：px */
  width: number
  /** 高度，单位：px */
  height: number
  /** 上边界坐标，单位：px */
  top: number
  /** 右边界坐标，单位：px */
  right: number
  /** 下边界坐标，单位：px */
  bottom: number
  /** 左边界坐标，单位：px */
  left: number
  /** 福利组件信息 */
  rewardsComponentInfo: Record<string, any>
  /** 组件的名称 */
  name: string
  /** 可领取的礼包数量 */
  canReceiveGiftCount: number
  /** 可领取的好友礼包数量 */
  canReceiveFriendGiftCount: number
  /** 领取事件详情（只在onOfficialComponentsInfoChange回调中返回） */
  receiveDetail: Record<string, any>
  /** gift: 礼包, friendGift: 好友礼包 */
  type: string
  /** 礼包名称，只有 gift 类型才有 */
  name: string
  /** 礼包描述，只有 gift 类型才有 */
  desc: string
  /** 礼包图标，只有 gift 类型才有 */
  icon: string
  /** 擂台赛组件领奖信息 */
  challengeRewardsComponentInfo: Record<string, any>
  /** 组件的名称 */
  name: string
  /** 领取事件详情（只在onOfficialComponentsInfoChange回调中返回） */
  receiveDetail: Record<string, any>
  /** 用户领取的奖励列表 */
  userSourceList: Record<string, any>[]
  /** 奖励来源信息 */
  source: Record<string, any>
  /** 道具列表 */
  propList: Record<string, any>[]
  /** 道具名称 */
  propName: string
  /** 道具数量 */
  propNum: number
  /** 礼包名称 */
  sourceName: string
  /** 奖励类型：1-普通奖励, 2-稀有奖励 */
  type: number
  /** 获取的奖励数量 */
  sourceNum: number
  /** 奖励类型：0-道具礼包, 1-微信蓝包, 2-h5商家券, 3-现金红包, 4-小程序券, 5-盲盒 */
  sourceType: number
  /** 奖励领取结果：1-全部成功, 2-部分成功（礼物达到领取上限）, 3-领奖失败 */
  awardResult: number
  /** 是否收到了稀有奖励 */
  receivedRareReward: boolean
}

interface WxOnWindowResizeListenerCallbackResult {
  /** 变化后的窗口宽度，单位 px */
  windowWidth: number
  /** 变化后的窗口高度，单位 px */
  windowHeight: number
}

interface WxOnWindowStateChangeListenerCallbackResult {
  /** 改变的窗口状态，可能的值为： */
  state: string
}

interface WxSetMenuStyleOption {
  /** 样式风格 */
  style: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetStatusBarStyleOption {
  /** 样式风格 */
  style: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetWindowSizeOption {
  /** 窗口宽度，以像素为单位 */
  width: number
  /** 窗口高度，以像素为单位 */
  height: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShowActionSheetSuccessCallbackResult {
  /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
  tapIndex: number
}

interface WxShowActionSheetOption {
  /**
   * 警示文案
   * 最低版本 2.14.0
   */
  alertText?: string
  /** 按钮的文字数组，数组长度最大为 6 */
  itemList: string[]
  /**
   * 按钮的文字颜色
   * 默认值 #000000
   */
  itemColor?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxShowActionSheetSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShowLoadingOption {
  /** 提示的内容 */
  title: string
  /**
   * 是否显示透明蒙层，防止触摸穿透
   * 默认值 false
   */
  mask?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShowModalSuccessCallbackResult {
  /** editable 为 true 时，用户输入的文本 */
  content: string
  /** 为 true 时，表示用户点击了确定按钮 */
  confirm: boolean
  /**
   * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
   * 最低版本 1.1.0
   */
  cancel: boolean
}

interface WxShowModalOption {
  /** 提示的标题 */
  title?: string
  /** 提示的内容 */
  content?: string
  /**
   * 是否显示取消按钮
   * 默认值 true
   */
  showCancel?: boolean
  /**
   * 取消按钮的文字，最多 4 个字符
   * 默认值 取消
   */
  cancelText?: string
  /**
   * 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
   * 默认值 #000000
   */
  cancelColor?: string
  /**
   * 确认按钮的文字，最多 4 个字符
   * 默认值 确定
   */
  confirmText?: string
  /**
   * 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
   * 默认值 #576B95
   */
  confirmColor?: string
  /**
   * 是否显示输入框
   * 默认值 false
   * 最低版本 2.17.1
   */
  editable?: boolean
  /**
   * 显示输入框时的提示文本
   * 最低版本 2.17.1
   */
  placeholderText?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxShowModalSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShowToastOption {
  /** 提示的内容 */
  title: string
  /**
   * 图标
   * 默认值 success
   */
  icon?: string
  /**
   * 自定义图标的本地路径，image 的优先级高于 icon
   * 最低版本 1.1.0
   */
  image?: string
  /**
   * 提示的延迟时间
   * 默认值 1500
   */
  duration?: number
  /**
   * 是否显示透明蒙层，防止触摸穿透
   * 默认值 false
   */
  mask?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxUi {
  /** 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。 */
  getMenuButtonBoundingClientRect(): void;
  /** 获取所有官方组件的相关信息 */
  getOfficialComponentsInfo(): void;
  /**
   * 隐藏 loading 提示框
   * 支持 Promise 风格调用
   */
  hideLoading(object?: WxHideLoadingOption): void;
  /**
   * 隐藏消息提示框
   * 支持 Promise 风格调用
   */
  hideToast(object?: WxHideToastOption): void;
  /** 移除官方组件信息变化事件的监听函数 */
  offOfficialComponentsInfoChange(listener: (res: any) => void): void;
  /** 移除窗口尺寸变化事件的监听函数 */
  offWindowResize(listener: (res: any) => void): void;
  /** 移除小程序窗口状态变化事件的监听函数 */
  offWindowStateChange(listener: (res: any) => void): void;
  /** 监听官方组件信息变化事件 */
  onOfficialComponentsInfoChange(listener: (res: WxOnOfficialComponentsInfoChangeListenerCallbackResult) => void): void;
  /** 监听窗口尺寸变化事件 */
  onWindowResize(listener: (res: WxOnWindowResizeListenerCallbackResult) => void): void;
  /** 监听小程序窗口状态变化事件。仅适用于 PC 平台 */
  onWindowStateChange(listener: (res: WxOnWindowStateChangeListenerCallbackResult) => void): void;
  /**
   * 动态设置通过右上角按钮拉起的菜单的样式。
   * 支持 Promise 风格调用
   */
  setMenuStyle(object?: WxSetMenuStyleOption): void;
  /**
   * 当在配置中设置 showStatusBar 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。
   * 支持 Promise 风格调用
   */
  setStatusBarStyle(object?: WxSetStatusBarStyleOption): void;
  /**
   * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
   * @deprecated 从基础库 2.11.0 开始，本接口停止维护
   */
  setWindowSize(object?: WxSetWindowSizeOption): void;
  /**
   * 显示操作菜单
   * 支持 Promise 风格调用
   */
  showActionSheet(object?: WxShowActionSheetOption): void;
  /**
   * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
   * 支持 Promise 风格调用
   */
  showLoading(object?: WxShowLoadingOption): void;
  /**
   * 显示模态对话框
   * 支持 Promise 风格调用
   */
  showModal(object?: WxShowModalOption): void;
  /**
   * 显示消息提示框
   * 支持 Promise 风格调用
   */
  showToast(object?: WxShowToastOption): void;
}

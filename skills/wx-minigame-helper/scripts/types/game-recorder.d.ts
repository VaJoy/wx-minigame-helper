// 微信小游戏 API 类型声明 — 域：game-recorder（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCreateGameRecorderShareButtonOption {
  /** 按钮的样式 */
  style: Record<string, any>
  /**
   * 左上角横坐标，单位 逻辑像素
   * 默认值 0
   */
  left?: number
  /**
   * 左上角纵坐标，单位 逻辑像素
   * 默认值 0
   */
  top?: number
  /**
   * 按钮的高度，最小 40 逻辑像素
   * 默认值 40
   */
  height?: number
  /**
   * 图标和文本之间的距离，最小 8 逻辑像素
   * 默认值 8
   */
  iconMarginRight?: number
  /**
   * 文本的字体大小。最小 17，最大 22。
   * 默认值 17
   */
  fontSize?: number
  /**
   * 文本的颜色。
   * 默认值 #ffffff
   */
  color?: string
  /**
   * 按钮的左内边距，最小 16 逻辑像素。
   * 默认值 16
   */
  paddingLeft?: number
  /**
   * 按钮的右内边距，最小 16 逻辑像素。
   * 默认值 16
   */
  paddingRight?: number
  /** 图标的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。 */
  icon?: string
  /** 按钮的背景图片的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。 */
  image?: string
  /** 按钮的文本。 */
  text?: string
  /** 对局回放的分享参数。 */
  share: Record<string, any>
  /** 分享的对局回放打开后跳转小游戏的 query。 */
  query?: string
  /** 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 小游戏独立分包指南 */
  path?: string
  /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 */
  bgm: string
  /**
   * 对局回放的音量大小，最小 0，最大 1。
   * 默认值 1
   */
  volume?: number
  /**
   * 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。
   * 默认值 1
   */
  atempo?: number
  /**
   * 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。
   * 默认值 false
   */
  audioMix?: boolean
}

interface WxOperateGameRecorderVideoOption {
  /** 分享的对局回放打开后的标题内容 */
  title?: string
  /** 分享的对局回放打开后的描述内容 */
  desc?: string
  /** 分享的对局回放打开后跳转小游戏的 query */
  query?: string
  /** 分享的对局回放打开后跳转小游戏的 path （独立分包路径） */
  path?: string
  /** 对局回放背景音乐的地址 */
  bgm?: string
  /**
   * 对局回放的音量大小，最小0，最大1
   * 默认值 1
   */
  volume?: number
  /**
   * 对局回放的播放速率，只能设置以下几个值: 0.3, 0.5, 1, 1.5, 2, 2.5, 3.其中1表示元素播放，小于1表示减速播放，大于1表示加速播放
   * 默认值 1
   */
  atempo?: number
  /**
   * 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音
   * 默认值 false
   */
  audioMix?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface GameRecorderStartOption {
  /**
   * 视频 fps
   * 默认值 24
   */
  fps?: number
  /**
   * 视频的时长限制，单位为秒（s）。最大值 7200，最小值 5，到达指定时长后不会再录入。但还需要手动调用 GameRecorder.stop() 来结束录制。
   * 默认值 7200
   */
  duration?: number
  /**
   * 视频比特率（kbps），默认值1000，最大值 3000，最小值 600
   * 默认值 1000
   */
  bitrate?: number
  /**
   * 视频关键帧间隔
   * 默认值 12
   */
  gop?: number
  /**
   * 是否录制游戏音效（仅iOS支持）
   * 默认值 true
   * 最低版本 2.10.0
   */
  hookBgm?: boolean
}

/** 游戏画面录制对象 */
interface GameRecorder {
  /** 放弃录制游戏画面。此时已经录制的内容会被丢弃。 */
  abort(): Promise<any>
  /** 获取是否支持调节录制视频的播放速率 */
  isAtempoSupported(): boolean
  /** 获取是否支持录制游戏画面 */
  isFrameSupported(): boolean
  /** 获取是否在录制游戏画面的同时支持录制游戏音频的信息 */
  isSoundSupported(): boolean
  /** 获取是否支持调节录制视频的音量 */
  isVolumeSupported(): boolean
  /** 取消监听录制事件。当对应事件触发时，该回调函数不再执行。 */
  off(event: string, callback: (res: any) => void): void
  /** 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。 */
  on(event: string, callback: (res: any) => void): void
  /** 暂停录制游戏画面。 */
  pause(): Promise<any>
  /** 恢复录制游戏画面。 */
  resume(): Promise<any>
  /** 开始录制游戏画面 */
  start(object?: GameRecorderStartOption): void
  /** 结束录制游戏画面。结束录制后可以发起分享。 */
  stop(): Promise<any>
}

interface GameRecorderShareButtonStyle {
  /** 左上角横坐标，单位 逻辑像素 */
  left: number
  /** 左上角纵坐标，单位 逻辑像素 */
  top: number
  /** 按钮的高度，最小 40 逻辑像素 */
  height: number
  /** 图标和文本之间的距离，最小 8 逻辑像素 */
  iconMarginRight: number
  /** 文本的字体大小。最小 17，最大 22。 */
  fontSize: number
  /** 文本的颜色。 */
  color: string
  /** 按钮的左内边距，最小 16 逻辑像素。 */
  paddingLeft: number
  /** 按钮的右内边距，最小 16 逻辑像素。 */
  paddingRight: number
  /** 按钮背景颜色，十六进制颜色值，'transparent'为透明背景。 */
  backgroundColor: string
  /** 按钮圆角大小，单位为逻辑像素。 */
  borderRadius: number
}

interface GameRecorderShareButtonShare {
  /** 分享的对局回放打开后跳转小游戏的 query。 */
  query: string
  /**
   * 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 小游戏独立分包指南
   * 最低版本 2.13.2
   */
  path: string
  /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 */
  bgm: string
  /**
   * 对局回放的音量大小，最小 0，最大 1。
   * 最低版本 2.9.2
   */
  volume: number
  /**
   * 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。
   * 最低版本 2.9.2
   */
  atempo: number
  /**
   * 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。
   * 最低版本 2.10.0
   */
  audioMix: boolean
}

/** 游戏对局回放分享按钮。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。 */
interface GameRecorderShareButton {
  /** 按钮的样式 */
  style: GameRecorderShareButtonStyle
  /**
   * 图标的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。icon尺寸固定，高16px，宽24px。
   */
  icon: string
  /** 按钮的背景图片的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。 */
  image: string
  /** 按钮的文本。 */
  text: string
  /** 对局回放的分享参数。 */
  share: GameRecorderShareButtonShare
  /** 隐藏游戏对局回放分享按钮 */
  hide(): void
  /** 移除游戏对局回放分享按钮的点击事件的监听函数 */
  offTap(listener: (res: any) => void): void
  /** 监听游戏对局回放分享按钮的点击事件。只有当分享由于非用户取消的原因失败时，该事件的回调函数才会执行。 */
  onTap(listener: (res: any) => void): void
  /** 显示游戏对局回放分享按钮 */
  show(): void
}

interface WxGameRecorder {
  /** 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。 */
  createGameRecorderShareButton(object?: WxCreateGameRecorderShareButtonOption): GameRecorderShareButton;
  /** 获取全局唯一的游戏画面录制对象 */
  getGameRecorder(): GameRecorder;
  /** 分享游戏对局回放。安卓微信8.0.28开始支持，iOS微信8.0.30开始支持。 */
  operateGameRecorderVideo(object?: WxOperateGameRecorderVideoOption): void;
}

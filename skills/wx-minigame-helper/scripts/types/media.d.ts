// 微信小游戏 API 类型声明 — 域：media（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxChooseImageSuccessCallbackResult {
  /** 图片的本地临时文件路径列表 (本地路径) */
  tempFilePaths: string[]
  /**
   * 图片的本地临时文件列表
   * 最低版本 1.2.0
   */
  tempFiles: Record<string, any>[]
  /** 本地临时文件路径 (本地路径) */
  path: string
  /** 本地临时文件大小，单位 B */
  size: number
}

interface WxChooseImageOption {
  /**
   * 最多可以选择的图片张数
   * 默认值 9
   */
  count?: number
  /**
   * 所选的图片的尺寸
   * 默认值 ['original', 'compressed']
   */
  sizeType?: string[]
  /**
   * 选择图片的来源
   * 默认值 ['album', 'camera']
   */
  sourceType?: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxChooseImageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxChooseMediaSuccessCallbackResult {
  /** 本地临时文件列表 */
  tempFiles: Record<string, any>[]
  /** 本地临时文件路径 (本地路径) */
  tempFilePath: string
  /** 本地临时文件大小，单位 B */
  size: number
  /** 视频的时间长度 */
  duration: number
  /** 视频的高度 */
  height: number
  /** 视频的宽度 */
  width: number
  /** 视频缩略图临时文件路径 */
  thumbTempFilePath: string
  /** 文件类型 */
  fileType: string
  /** 文件类型，有效值有 image 、video、mix */
  type: string
}

interface WxChooseMediaOption {
  /**
   * 最多可以选择的文件个数，基础库2.25.0前，最多可支持9个文件，2.25.0及以后最多可支持20个文件
   * 默认值 9
   */
  count?: number
  /**
   * 文件类型
   * 默认值 ['image', 'video']
   */
  mediaType?: string[]
  /**
   * 图片和视频选择的来源
   * 默认值 ['album', 'camera']
   */
  sourceType?: string[]
  /**
   * 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。
   * 默认值 10
   */
  maxDuration?: number
  /**
   * 是否压缩所选文件，基础库2.25.0前仅对 mediaType 为 image 时有效，2.25.0及以后对全量 mediaType 有效
   * 默认值 ['original', 'compressed']
   */
  sizeType?: string[]
  /**
   * 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头
   * 默认值 'back'
   */
  camera?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxChooseMediaSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxChooseMessageFileSuccessCallbackResult {
  /** 返回选择的文件的本地临时文件对象数组 */
  tempFiles: Record<string, any>[]
  /** 本地临时文件路径 (本地路径) */
  path: string
  /** 本地临时文件大小，单位 B */
  size: number
  /** 选择的文件名称 */
  name: string
  /** 选择的文件类型 */
  type: string
  /** 选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性 */
  time: number
}

interface WxChooseMessageFileOption {
  /** 最多可以选择的文件个数，可以 0～100 */
  count: number
  /**
   * 所选的文件的类型
   * 默认值 'all'
   */
  type?: string
  /**
   * 根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。
   * 最低版本 2.6.0
   */
  extension?: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxChooseMessageFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCompressImageSuccessCallbackResult {
  /** 压缩后图片的临时文件路径 (本地路径) */
  tempFilePath: string
}

interface WxCompressImageOption {
  /** 图片路径，图片的路径，支持本地路径、代码包路径 */
  src: string
  /**
   * 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。
   * 默认值 80
   */
  quality?: number
  /**
   * 压缩后图片的宽度，单位为px，若不填写则默认以compressedHeight为准等比缩放。
   * 最低版本 2.26.0
   */
  compressedWidth?: number
  /**
   * 压缩后图片的高度，单位为px，若不填写则默认以compressedWidth为准等比缩放
   * 最低版本 2.26.0
   */
  compressedHeight?: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxCompressImageSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCreateCameraOption {
  /**
   * 相机的左上角横坐标
   * 默认值 0
   */
  x?: number
  /**
   * 相机的左上角纵坐标
   * 默认值 0
   */
  y?: number
  /**
   * 相机的宽度
   * 默认值 300
   */
  width?: number
  /**
   * 相机的高度
   * 默认值 150
   */
  height?: number
  /**
   * 摄像头朝向，值为 front, back
   * 默认值 back
   */
  devicePosition?: string
  /**
   * 闪光灯，值为 auto, on, off
   * 默认值 auto
   */
  flash?: string
  /**
   * 帧数据图像尺寸，值为 small, medium, large
   * 默认值 small
   */
  size?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCreateInnerAudioContextOption {
  /**
   * 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项。
   * 默认值 false
   * 最低版本 2.19.0
   */
  useWebAudioImplement?: boolean
}

interface WxCreateVideoOption {
  /**
   * 视频的左上角横坐标
   * 默认值 0
   */
  x?: number
  /**
   * 视频的左上角纵坐标
   * 默认值 0
   */
  y?: number
  /**
   * 视频的宽度
   * 默认值 300
   */
  width?: number
  /**
   * 视频的高度
   * 默认值 150
   */
  height?: number
  /** 视频的资源地址 */
  src: string
  /** 视频的封面 */
  poster?: string
  /**
   * 视频的初始播放位置，单位为 s 秒
   * 默认值 0
   */
  initialTime?: number
  /**
   * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5
   * 默认值 1.0
   */
  playbackRate?: number
  /**
   * 视频是否为直播
   * 默认值 false
   */
  live?: boolean
  /**
   * 视频的缩放模式
   * 默认值 'contain'
   */
  objectFit?: string
  /**
   * 视频是否显示控件
   * 默认值 true
   */
  controls?: boolean
  /**
   * 是否显示视频底部进度条
   * 默认值 true
   * 最低版本 2.12.0
   */
  showProgress?: boolean
  /**
   * 是否显示控制栏的进度条
   * 默认值 true
   * 最低版本 2.12.0
   */
  showProgressInControlMode?: boolean
  /**
   * 视频背景颜色
   * 默认值 '#000000'
   * 最低版本 2.12.0
   */
  backgroundColor?: string
  /**
   * 视频是否自动播放
   * 默认值 false
   */
  autoplay?: boolean
  /**
   * 视频是否是否循环播放
   * 默认值 false
   */
  loop?: boolean
  /**
   * 视频是否禁音播放
   * 默认值 false
   */
  muted?: boolean
  /**
   * 视频是否遵循系统静音开关设置（仅iOS）
   * 默认值 false
   * 最低版本 2.4.0
   */
  obeyMuteSwitch?: boolean
  /**
   * 是否启用手势控制播放进度
   * 默认值 true
   */
  enableProgressGesture?: boolean
  /**
   * 是否开启双击播放的手势
   * 默认值 false
   */
  enablePlayGesture?: boolean
  /**
   * 是否显示视频中央的播放按钮
   * 默认值 true
   */
  showCenterPlayBtn?: boolean
  /**
   * 视频是否显示在游戏画布之下（配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas实现透明效果）
   * 默认值 false
   * 最低版本 2.11.0
   */
  underGameView?: boolean
  /**
   * 视频跳转后自动暂停播放
   * 默认值 true
   */
  autoPauseIfNavigate?: boolean
  /**
   * 视频跳转原生页后自动暂停播放
   * 默认值 true
   */
  autoPauseIfOpenNative?: boolean
}

interface WxExitVoIPChatOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetAvailableAudioSourcesSuccessCallbackResult {
  /**
   * 支持的音频输入源列表，可在 RecorderManager.start() 接口中使用。返回值定义参考 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource
   */
  audioSources: string[]
}

interface WxGetAvailableAudioSourcesOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetAvailableAudioSourcesSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxJoinVoIPChatSuccessCallbackResult {
  /** 在此通话中的成员 openId 名单 */
  openIdList: string[]
  /** 错误码 */
  errCode: number
  /** 调用结果 */
  errMsg: string
}

interface WxJoinVoIPChatOption {
  /**
   * 房间类型
   * 默认值 voice
   */
  roomType?: string
  /** 签名，用于验证小游戏的身份 */
  signature: string
  /** 验证所需的随机字符串 */
  nonceStr: string
  /** 验证所需的时间戳 */
  timeStamp: number
  /** 小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间。 */
  groupId: string
  /** 静音设置 */
  muteConfig?: Record<string, any>
  /**
   * 是否静音麦克风
   * 默认值 false
   */
  muteMicrophone?: boolean
  /**
   * 是否静音耳机
   * 默认值 false
   */
  muteEarphone?: boolean
  /**
   * 开启后，joinVoIPChat 会同时走 Wi-Fi 和蜂窝网络2种网络模式，保证实时通话体验。
   * 默认值 false
   * 最低版本 2.29.0
   */
  forceCellularNetwork?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxJoinVoIPChatSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnVoIPChatInterruptedListenerCallbackResult {
  /** 错误码 */
  errCode: number
  /** 调用结果（错误原因） */
  errMsg: string
}

interface WxOnVoIPChatMembersChangedListenerCallbackResult {
  /** 还在实时语音通话中的成员 openId 名单 */
  openIdList: string[]
  /** 错误码 */
  errCode: number
  /** 调用结果 */
  errMsg: string
}

interface WxOnVoIPChatSpeakersChangedListenerCallbackResult {
  /** 还在实时语音通话中的成员 openId 名单 */
  openIdList: string[]
  /** 错误码 */
  errCode: number
  /** 调用结果（错误原因） */
  errMsg: string
}

interface WxOnVoIPChatStateChangedListenerCallbackResult {
  /** 事件码 */
  code: number
  /** 附加信息 */
  data: Record<string, any>
  /** 错误码 */
  errCode: number
  /** 调用结果 */
  errMsg: string
}

interface WxPreviewImageOption {
  /** 需要预览的图片链接列表。2.2.3 起支持云文件ID。 */
  urls: string[]
  /**
   * 是否显示长按菜单。
   * 默认值 true
   * 最低版本 2.13.0
   */
  showmenu?: boolean
  /**
   * 当前显示图片的链接
   * 默认值 urls 的第一张
   */
  current?: string
  /**
   * `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；
   * 默认值 no-referrer
   * 最低版本 2.13.0
   */
  referrerPolicy?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxPreviewMediaOption {
  /** 需要预览的资源列表 */
  sources: Record<string, any>[]
  /** 图片或视频的地址 */
  url: string
  /**
   * 资源的类型，默认为图片
   * 默认值 image
   */
  type?: string
  /** 视频的封面图片 */
  poster?: string
  /**
   * 当前显示的资源序号
   * 默认值 0
   */
  current?: number
  /**
   * 是否显示长按菜单。
   * 默认值 true
   * 最低版本 2.13.0
   */
  showmenu?: boolean
  /**
   * `origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；
   * 默认值 no-referrer
   * 最低版本 2.13.0
   */
  referrerPolicy?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSaveImageToPhotosAlbumOption {
  /** 图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径 */
  filePath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetInnerAudioOptionOption {
  /**
   * 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐
   * 默认值 true
   */
  mixWithOther?: boolean
  /**
   * （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音
   * 默认值 true
   */
  obeyMuteSwitch?: boolean
  /**
   * true 代表用扬声器播放，false 代表听筒播放，默认值为 true。
   * 默认值 true
   */
  speakerOn?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxUpdateVoIPChatMuteConfigOption {
  /** 静音设置 */
  muteConfig: Record<string, any>
  /**
   * 是否静音麦克风
   * 默认值 false
   */
  muteMicrophone?: boolean
  /**
   * 是否静音耳机
   * 默认值 false
   */
  muteEarphone?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/**
 * AudioBuffer接口表示存在内存里的一段短小的音频资源，利用WebAudioContext.decodeAudioData方法从一个音频文件构建，或者利用 WebAudioContext.createBuffer从原始数据构建。把音频放入AudioBuffer后，可以传入到一个 AudioBufferSourceNode进行播放。
 */
interface AudioBuffer {
  /** 存储在缓存区的PCM数据的采样率（单位为sample/s) */
  sampleRate: number
  /** 返回存储在缓存区的PCM数据的采样帧率 */
  length: number
  /** 返回存储在缓存区的PCM数据的时长（单位为秒） */
  duration: number
  /** 储存在缓存区的PCM数据的通道数 */
  numberOfChannels: number
  /** 从AudioBuffer的指定频道复制到数组终端。 */
  copyFromChannel(): void
  /** 从指定数组复制样本到audioBuffer的特定通道 */
  copyToChannel(source: Float32Array, channelNumber: number, startInChannel: number): void
  /** 返回一个 Float32Array，包含了带有频道的PCM数据，由频道参数定义（有0代表第一个频道） */
  getChannelData(channel: number): Float32Array
}

/** 空间音频监听器，代表在一个音频场景内唯一的位置和方向信息。 */
interface AudioListener {
  /** 右手笛卡尔坐标系中X轴的位置。 */
  positionX: number
  /** 右手笛卡尔坐标系中Y轴的位置。 */
  positionY: number
  /** 右手笛卡尔坐标系中Z轴的位置。 */
  positionZ: number
  /** 表示监听器的前向系统在同一笛卡尔坐标系中的水平位置，作为位置（位置x，位置和位置和位置）值。 */
  forwardX: number
  /** 表示听众的前向方向在同一笛卡尔坐标系中作为位置（位置x，位置和位置和位置）值的垂直位置。 */
  forwardY: number
  /** 表示与position (positionX、positionY和positionZ)值在同一笛卡尔坐标系下的听者前进方向的纵向(前后)位置。 */
  forwardZ: number
  /** 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向前方向的水平位置。 */
  upX: number
  /** 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向上方向的水平位置。 */
  upY: number
  /** 表示在与position (positionX、positionY和positionZ)值相同的笛卡尔坐标系中侦听器向后方向的水平位置。 */
  upZ: number
  /** 设置监听器的方向 */
  setOrientation: (...args: any[]) => void
  /** 设置监听器的位置 */
  setPosition: (...args: any[]) => void
}

/** AudioParam 接口代表音频相关的参数，通常是 AudioNode（例如 GainNode.gain）的参数 */
interface AudioParam {
  /** 代表被具体的 AudioNode 创建的 AudioParam 的属性的初始值（只读） */
  defaultValue: number
  /** 代表参数有效范围的最大可能值（只读） */
  maxValue: number
  /** 代表参数有效范围的最小可能值（只读） */
  minValue: number
  /** 当前属性的值（比如音量值或播放倍速值）（可读可写） */
  value: number
}

/** 音频源节点，通过 WebAudioContext.createBufferSource方法获得。 */
interface BufferSourceNode {
  /** 是一个 AudioBuffer， 它定义了要播放的音频，当设置它的值为 0 时，它会定义一个静默的单通道。（可读可写） */
  buffer: AudioBuffer
  /** 定义音频是否循环播放（可读可写） */
  loop: boolean
  /** 定义音频循环播放时，开始播放的位置。单位是秒，默认值是0（可读可写） */
  loopStart: number
  /** 定义音频循环播放时，结束播放的位置。单位是秒，默认值是0（可读可写） */
  loopEnd: number
  /** 定义音频的播放倍速，数值越大速度越快，默认速度1.0，有效范围为 0 < playbackRate <= 2.0（可读可写） */
  playbackRate: AudioParam
  /** 定义音频播放结束事件回调函数（可读可写） */
  onended: (...args: any[]) => void
  /**
   * 连接到一个指定目标。这个指定的目标可能是另一个 AudioNode（从而将音频数据引导到下一个指定节点）或一个AudioParam, 以便上一个节点的输出数据随着时间流逝能自动地对下一个参数值进行改变
   */
  connect(destination: any): void
  /** 与已连接的目标节点断开连接 */
  disconnect(): void
  /** 音频源开始播放 */
  start(when: number, offset: number, duration: number): void
  /** 停止播放 */
  stop(when: number): void
}

interface CameraOnCameraFrameCallbackCallbackResult {
  /** 图像数据矩形的宽度 */
  width: number
  /** 图像数据矩形的高度 */
  height: number
  /** 图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
  data: ArrayBuffer
}

interface CameraSetZoomOption {
  /** 缩放级别，范围 [1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 bindinitdone 返回值中获取。 */
  zoom: number
}

interface Camera {
  /** 相机的左上角横坐标 */
  x: number
  /** 相机的左上角纵坐标 */
  y: number
  /** 相机的宽度 */
  width: number
  /** 相机的高度 */
  height: number
  /** 摄像头朝向 */
  devicePosition: string
  /** 闪光灯，值为 auto, on, off */
  flash: string
  /** 帧数据图像尺寸，值为 small, medium, large */
  size: string
  /** 关闭监听帧数据 */
  closeFrameChange(): void
  /** 销毁相机 */
  destroy(): void
  /** 开启监听帧数据 */
  listenFrameChange(worker: Worker): void
  /** 监听用户不允许授权使用摄像头的情况 */
  onAuthCancel(callback: (res: any) => void): void
  /** 监听摄像头实时帧数据 */
  onCameraFrame(callback: (res: CameraOnCameraFrameCallbackCallbackResult) => void): void
  /** 监听摄像头非正常终止事件，如退出后台等情况 */
  onStop(callback: (res: any) => void): void
  /** 设置缩放比例 */
  setZoom(args?: CameraSetZoomOption): Promise<any>
  /** 开始录像 */
  startRecord(): Promise<any>
  /** 结束录像，成功则返回封面与视频 */
  stopRecord(compressed: boolean): Promise<any>
  /** 拍照，可指定质量，成功则返回图片 */
  takePhoto(quality: string): Promise<any>
}

interface InnerAudioContextOnErrorListenerCallbackResult {
  errMsg: string
  errCode: number
}

/**
 * InnerAudioContext 实例，可通过 wx.createInnerAudioContext 接口获取实例。注意，音频播放过程中，可能被系统中断，可通过 wx.onAudioInterruptionBegin、wx.onAudioInterruptionEnd事件来处理这种情况。
 */
interface InnerAudioContext {
  /** 音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID */
  src: string
  /** 开始播放的位置（单位：s），默认为 0 */
  startTime: number
  /** 是否自动开始播放，默认为 `false` */
  autoplay: boolean
  /** 是否循环播放，默认为 `false` */
  loop: boolean
  /**
   * 是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 wx.setInnerAudioOption 接口统一设置。
   */
  obeyMuteSwitch: boolean
  /** > 基础库 1.9.90 开始支持，低版本需做兼容处理。 */
  volume: number
  /** > 基础库 2.11.0 开始支持，低版本需做兼容处理。 */
  playbackRate: number
  /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
  duration: number
  /**
   * 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（currentTime 属性在基础库 2.26.2 之前只读，基础库 2.26.2 开始可读可写，改变 currentTime 值等同于调用 seek）
   */
  currentTime: number
  /** 当前是是否暂停或停止状态（只读） */
  paused: boolean
  /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
  buffered: number
  /** > 基础库 2.13.0 开始支持，低版本需做兼容处理。 */
  referrerPolicy: string
  /** 销毁当前实例 */
  destroy(): void
  /** 移除音频进入可以播放状态的事件的监听函数 */
  offCanplay(listener: (res: any) => void): void
  /** 移除音频自然播放至结束的事件的监听函数 */
  offEnded(listener: (res: any) => void): void
  /** 移除音频播放错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除音频暂停事件的监听函数 */
  offPause(listener: (res: any) => void): void
  /** 移除音频播放事件的监听函数 */
  offPlay(listener: (res: any) => void): void
  /** 移除音频完成跳转操作的事件的监听函数 */
  offSeeked(listener: (res: any) => void): void
  /** 移除音频进行跳转操作的事件的监听函数 */
  offSeeking(listener: (res: any) => void): void
  /** 移除音频停止事件的监听函数 */
  offStop(listener: (res: any) => void): void
  /** 移除音频播放进度更新事件的监听函数 */
  offTimeUpdate(listener: (res: any) => void): void
  /** 移除音频加载中事件的监听函数 */
  offWaiting(listener: (res: any) => void): void
  /** 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 */
  onCanplay(listener: (res: any) => void): void
  /** 监听音频自然播放至结束的事件 */
  onEnded(listener: (res: any) => void): void
  /** 监听音频播放错误事件 */
  onError(listener: (res: InnerAudioContextOnErrorListenerCallbackResult) => void): void
  /** 监听音频暂停事件 */
  onPause(listener: (res: any) => void): void
  /** 监听音频播放事件 */
  onPlay(listener: (res: any) => void): void
  /** 监听音频完成跳转操作的事件 */
  onSeeked(listener: (res: any) => void): void
  /** 监听音频进行跳转操作的事件 */
  onSeeking(listener: (res: any) => void): void
  /** 监听音频停止事件 */
  onStop(listener: (res: any) => void): void
  /** 监听音频播放进度更新事件 */
  onTimeUpdate(listener: (res: any) => void): void
  /** 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 */
  onWaiting(listener: (res: any) => void): void
  /** 暂停。暂停后的音频再播放会从暂停处开始播放 */
  pause(): void
  /** 播放 */
  play(): void
  /** 跳转到指定位置 */
  seek(position: number): void
  /** 停止。停止后的音频再播放会从头开始播放。 */
  stop(): void
}

/** MediaAudioPlayer 实例，可通过 wx.createMediaAudioPlayer 接口获取实例。 */
interface MediaAudioPlayer {
  /** 音量。范围 0~1。默认为 1 */
  volume: number
  /** 添加音频源 */
  addAudioSource(source: VideoDecoder): Promise<any>
  /** 销毁播放器 */
  destroy(): Promise<any>
  /** 移除音频源 */
  removeAudioSource(source: VideoDecoder): Promise<any>
  /** 启动播放器 */
  start(): Promise<any>
  /** 停止播放器 */
  stop(): Promise<any>
}

interface RecorderManagerOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface RecorderManagerOnFrameRecordedListenerCallbackResult {
  /** 录音分片数据 */
  frameBuffer: ArrayBuffer
  /** 当前帧是否正常录音结束前的最后一帧 */
  isLastFrame: boolean
}

interface RecorderManagerOnStopListenerCallbackResult {
  /** 录音文件的临时路径 (本地路径) */
  tempFilePath: string
  /** 录音总时长，单位：ms */
  duration: number
  /** 录音文件大小，单位：Byte */
  fileSize: number
}

interface RecorderManagerStartOption {
  /**
   * 录音的时长，单位 ms，最大值 600000（10 分钟）
   * 默认值 60000
   */
  duration?: number
  /**
   * 采样率（pc不支持）
   * 默认值 8000
   */
  sampleRate?: number
  /**
   * 录音通道数
   * 默认值 2
   */
  numberOfChannels?: number
  /**
   * 编码码率，有效值见下表格
   * 默认值 48000
   */
  encodeBitRate?: number
  /**
   * 音频格式
   * 默认值 aac
   */
  format?: string
  /** 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3、pcm 格式。 */
  frameSize?: number
  /**
   * 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源
   * 默认值 auto
   * 最低版本 2.1.0
   */
  audioSource?: string
}

/** 全局唯一的录音管理器 */
interface RecorderManager {
  /** 监听录音错误事件 */
  onError(listener: (res: RecorderManagerOnErrorListenerCallbackResult) => void): void
  /** 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。 */
  onFrameRecorded(listener: (res: RecorderManagerOnFrameRecordedListenerCallbackResult) => void): void
  /** 监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发 */
  onInterruptionBegin(listener: (res: any) => void): void
  /** 监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。 */
  onInterruptionEnd(listener: (res: any) => void): void
  /** 监听录音暂停事件 */
  onPause(listener: (res: any) => void): void
  /** 监听录音继续事件 */
  onResume(listener: (res: any) => void): void
  /** 监听录音开始事件 */
  onStart(listener: (res: any) => void): void
  /** 监听录音结束事件 */
  onStop(listener: (res: RecorderManagerOnStopListenerCallbackResult) => void): void
  /** 暂停录音 */
  pause(): void
  /** 继续录音 */
  resume(): void
  /** 开始录音 */
  start(object?: RecorderManagerStartOption): void
  /** 停止录音 */
  stop(): void
}

interface VideoOnErrorListenerCallbackResult {
  /** 错误信息 */
  errMsg: string
}

interface VideoOnProgressListenerCallbackResult {
  /** 当前的缓冲进度，缓冲进度区间为 (0~100]，100表示缓冲完成 */
  buffered: number
  /** 视频的总时长，单位为秒 */
  duration: number
}

interface VideoOnTimeUpdateListenerCallbackResult {
  /** 当前的播放位置，单位为秒 */
  position: number
  /** 视频的总时长，单位为秒 */
  duration: number
}

interface Video {
  /** 视频的左上角横坐标 */
  x: number
  /** 视频的左上角纵坐标 */
  y: number
  /** 视频的宽度 */
  width: number
  /** 视频的高度 */
  height: number
  /** 视频的资源地址 */
  src: string
  /** 视频的封面 */
  poster: string
  /** 视频的初始播放位置，单位为 s 秒 */
  initialTime: number
  /** 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 */
  playbackRate: number
  /** 视频是否为直播 */
  live: boolean
  /** 视频的缩放模式 */
  objectFit: string
  /** 视频是否显示控件 */
  controls: boolean
  /** > 基础库 2.12.0 开始支持，低版本需做兼容处理。 */
  showProgress: boolean
  /** > 基础库 2.12.0 开始支持，低版本需做兼容处理。 */
  showProgressInControlMode: boolean
  /** > 基础库 2.12.0 开始支持，低版本需做兼容处理。 */
  backgroundColor: string
  /** 视频是否自动播放 */
  autoplay: boolean
  /** 视频是否是否循环播放 */
  loop: boolean
  /** 视频是否禁音播放 */
  muted: boolean
  /** > 基础库 2.4.0 开始支持，低版本需做兼容处理。 */
  obeyMuteSwitch: boolean
  /** 是否启用手势控制播放进度 */
  enableProgressGesture: boolean
  /** 是否启用手势控制播放进度 */
  enablePlayGesture: boolean
  /** 是否显示视频中央的播放按钮 */
  showCenterPlayBtn: boolean
  /** 视频由于需要缓冲下一帧而停止时触发的回调函数 */
  onwaiting: (...args: any[]) => void
  /** 视频下载（缓冲）时周期性触发的回调函数 */
  onprogress: (...args: any[]) => void
  /** 视频开始播放时触发的回调函数 */
  onplay: (...args: any[]) => void
  /** 视频暂停时触发的回调函数 */
  onpause: (...args: any[]) => void
  /** 视频播放到末尾时触发的回调函数 */
  onended: (...args: any[]) => void
  /** 每当视频播放进度更新时触发的回调函数 */
  ontimeupdate: (...args: any[]) => void
  /** 视频发生错误时触发的回调函数 */
  onerror: (...args: any[]) => void
  /** 销毁视频 */
  destroy(): void
  /** 视频退出全屏 */
  exitFullScreen(): Promise<any>
  /** 移除视频播放到末尾事件的监听函数 */
  offEnded(listener: (res: any) => void): void
  /** 移除视频错误事件的监听函数 */
  offError(listener: (res: any) => void): void
  /** 移除视频暂停事件的监听函数 */
  offPause(listener: (res: any) => void): void
  /** 移除视频播放事件的监听函数 */
  offPlay(listener: (res: any) => void): void
  /** 移除视频下载（缓冲）事件的监听函数 */
  offProgress(listener: (res: any) => void): void
  /** 移除视频播放进度更新事件的监听函数 */
  offTimeUpdate(listener: (res: any) => void): void
  /** 移除视频由于需要缓冲下一帧而停止时触发的监听函数 */
  offWaiting(listener: (res: any) => void): void
  /** 监听视频播放到末尾事件 */
  onEnded(listener: (res: any) => void): void
  /** 监听视频错误事件 */
  onError(listener: (res: VideoOnErrorListenerCallbackResult) => void): void
  /** 监听视频暂停事件 */
  onPause(listener: (res: any) => void): void
  /** 监听视频播放事件 */
  onPlay(listener: (res: any) => void): void
  /** 监听视频下载（缓冲）事件 */
  onProgress(listener: (res: VideoOnProgressListenerCallbackResult) => void): void
  /** 监听视频播放进度更新事件 */
  onTimeUpdate(listener: (res: VideoOnTimeUpdateListenerCallbackResult) => void): void
  /** 监听视频由于需要缓冲下一帧而停止时触发 */
  onWaiting(listener: (res: any) => void): void
  /** 暂停视频 */
  pause(): Promise<any>
  /** 播放视频 */
  play(): Promise<any>
  /** 视频全屏 */
  requestFullScreen(direction: number): Promise<any>
  /** 视频跳转 */
  seek(time: number): Promise<any>
  /** 停止视频 */
  stop(): Promise<any>
}

interface VideoDecoderStartOption {
  /** 需要解码的视频源文件。基础库 2.13.0 以下的版本只支持本地路径。 2.13.0 开始支持 http:// 和 https:// 协议的远程路径。 */
  source: string
  /**
   * 解码模式。0：按 pts 解码；1：以最快速度解码
   * 默认值 1
   */
  mode?: number
  /**
   * 是否不需要音频轨道
   * 默认值 false
   * 最低版本 2.15.0
   */
  abortAudio?: boolean
  /**
   * 是否不需要视频轨道
   * 默认值 false
   * 最低版本 2.15.0
   */
  abortVideo?: boolean
}

/** 可通过 wx.createVideoDecoder 创建。 */
interface VideoDecoder {
  /** 获取下一帧的解码数据 */
  getFrameData(): void
  /** 取消监听录制事件。当对应事件触发时，该回调函数不再执行 */
  off(eventName: string, callback: (res: any) => void): void
  /** 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行 */
  on(eventName: string, callback: (res: any) => void): void
  /** 移除解码器 */
  remove(): Promise<any>
  /** 跳到某个时间点解码 */
  seek(position: number): Promise<any>
  /** 开始解码 */
  start(object?: VideoDecoderStartOption): Promise<any>
  /** 停止解码 */
  stop(): Promise<any>
}

interface WebAudioContextCreatePeriodicWaveOption {
  /** 如果指定为true则禁用标准化，默认为false */
  disableNormalization?: boolean
}

/** WebAudioContext 实例，通过wx.createWebAudioContext 接口获取该实例。 */
interface WebAudioContext {
  /**
   * 当前WebAudio上下文的状态。可能的值如下：suspended（暂停）、running（正在运行）、closed（已关闭）。需要注意的是，不要在 audioContext close后再访问state属性
   */
  state: string
  /** 可写属性，开发者可以对该属性设置一个监听函数，当WebAudio状态改变的时候，会触发开发者设置的监听函数。 */
  onstatechange: (...args: any[]) => void
  /** 获取当前上下文的时间戳。 */
  currentTime: number
  /** 当前上下文的最终目标节点，一般是音频渲染设备。 */
  destination: WebAudioContextNode
  /** 空间音频监听器。 */
  listener: AudioListener
  /** 采样率，通常在8000-96000之间，通常44100hz的采样率最为常见。 */
  sampleRate: number
  /** 关闭WebAudioContext */
  close(): Promise<any>
  /** 创建一个 AnalyserNode 。可以用来获取音频时间和频率数据，以及实现数据可视化。 */
  createAnalyser(): AnalyserNode
  /** 创建一个BiquadFilterNode */
  createBiquadFilter(): BiquadFilterNode
  /** 创建一个AudioBuffer，代表着一段驻留在内存中的短音频 */
  createBuffer(numOfChannels: number, length: number, sampleRate: number): AudioBuffer
  /** 创建一个BufferSourceNode实例，通过AudioBuffer对象来播放音频数据。 */
  createBufferSource(): BufferSourceNode
  /** 创建一个ChannelMergerNode */
  createChannelMerger(numberOfInputs: number): ChannelMergerNode
  /** 创建一个ChannelSplitterNode */
  createChannelSplitter(numberOfOutputs: number): ChannelSplitterNode
  /** 创建一个ConstantSourceNode */
  createConstantSource(): ConstantSourceNode
  /** 创建一个DelayNode */
  createDelay(maxDelayTime: number): DelayNode
  /** 创建一个DynamicsCompressorNode */
  createDynamicsCompressor(): DynamicsCompressorNode
  /** 创建一个GainNode */
  createGain(): GainNode
  /** 创建一个IIRFilterNode */
  createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode
  /** 创建一个OscillatorNode */
  createOscillator(): OscillatorNode
  /** 创建一个PannerNode */
  createPanner(): PannerNode
  /** 创建一个PeriodicWaveNode */
  createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: WebAudioContextCreatePeriodicWaveOption): PeriodicWaveNode
  /** 创建一个ScriptProcessorNode */
  createScriptProcessor(bufferSize: number, numberOfInputChannels: number, numberOfOutputChannels: number): ScriptProcessorNode
  /** 创建一个WaveShaperNode */
  createWaveShaper(): WaveShaperNode
  /** 异步解码一段资源为AudioBuffer。 */
  decodeAudioData(audioData: ArrayBuffer, successCallback: (res: any) => void, errorCallback: (res: any) => void): AudioBuffer
  /** 同步恢复已经被暂停的WebAudioContext上下文 */
  resume(): Promise<any>
  /** 同步暂停WebAudioContext上下文 */
  suspend(): Promise<any>
}

/**
 * 一类音频处理模块，不同的Node具备不同的功能，如GainNode(音量调整)等。一个WebAudioContextNode可以通过上下文来创建。 目前已经支持以下Node： IIRFilterNode WaveShaperNode ConstantSourceNode ChannelMergerNode OscillatorNode GainNode BiquadFilterNode PeriodicWaveNode BufferSourceNode ChannelSplitterNode ChannelMergerNode DelayNode DynamicsCompressorNode ScriptProcessorNode PannerNode AnalyserNode
 */
interface WebAudioContextNode {
}

interface WxMedia {
  /**
   * 从本地相册选择图片或使用相机拍照。
   * @deprecated 从基础库 2.21.0 开始，本接口停止维护，请使用 wx.chooseMedia 代替
   * 支持 Promise 风格调用
   */
  chooseImage(object?: WxChooseImageOption): void;
  /**
   * 拍摄或从手机相册中选择图片或视频。
   * 支持 Promise 风格调用
   */
  chooseMedia(object?: WxChooseMediaOption): void;
  /**
   * 从客户端会话选择文件。
   * 支持 Promise 风格调用
   */
  chooseMessageFile(object?: WxChooseMessageFileOption): void;
  /**
   * 压缩图片接口，可选压缩质量。iOS 仅支持压缩 JPG 格式图片。
   * 支持 Promise 风格调用
   */
  compressImage(object?: WxCompressImageOption): void;
  /** 创建相机 */
  createCamera(object?: WxCreateCameraOption): Camera;
  /** 创建内部 audio 上下文 InnerAudioContext 对象。 */
  createInnerAudioContext(object?: WxCreateInnerAudioContextOption): InnerAudioContext;
  /** 创建媒体音频播放器对象 MediaAudioPlayer 对象，可用于播放视频解码器 VideoDecoder 输出的音频。 */
  createMediaAudioPlayer(): MediaAudioPlayer;
  /** 创建视频 */
  createVideo(object?: WxCreateVideoOption): Video;
  /** 创建视频解码器，可逐帧获取解码后的数据 */
  createVideoDecoder(): VideoDecoder;
  /** 创建 WebAudio 上下文。 */
  createWebAudioContext(): WebAudioContext;
  /**
   * 退出（销毁）实时语音通话
   * 支持 Promise 风格调用
   */
  exitVoIPChat(object?: WxExitVoIPChatOption): void;
  /**
   * 获取当前支持的音频输入源
   * 支持 Promise 风格调用
   */
  getAvailableAudioSources(object?: WxGetAvailableAudioSourcesOption): void;
  /** 获取**全局唯一** 的录音管理器 RecorderManager */
  getRecorderManager(): RecorderManager;
  /**
   * 加入 (创建) 实时语音通话，更多信息可见 实时语音指南。调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。
   * 支持 Promise 风格调用
   */
  joinVoIPChat(object?: WxJoinVoIPChatOption): void;
  /** 移除被动断开实时语音通话事件的监听函数 */
  offVoIPChatInterrupted(listener: (res: any) => void): void;
  /** 移除实时语音通话成员在线状态变化事件的监听函数 */
  offVoIPChatMembersChanged(listener: (res: any) => void): void;
  /** 移除实时语音通话成员通话状态变化事件的监听函数 */
  offVoIPChatSpeakersChanged(listener: (res: any) => void): void;
  /** 移除房间状态变化事件的监听函数 */
  offVoIPChatStateChanged(listener: (res: any) => void): void;
  /** 监听被动断开实时语音通话事件。包括小游戏切入后端时断开 */
  onVoIPChatInterrupted(listener: (res: WxOnVoIPChatInterruptedListenerCallbackResult) => void): void;
  /** 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调 */
  onVoIPChatMembersChanged(listener: (res: WxOnVoIPChatMembersChangedListenerCallbackResult) => void): void;
  /** 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调 */
  onVoIPChatSpeakersChanged(listener: (res: WxOnVoIPChatSpeakersChangedListenerCallbackResult) => void): void;
  /** 监听房间状态变化事件。 */
  onVoIPChatStateChanged(listener: (res: WxOnVoIPChatStateChangedListenerCallbackResult) => void): void;
  /**
   * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
   * 支持 Promise 风格调用
   */
  previewImage(object?: WxPreviewImageOption): void;
  /**
   * 预览图片和视频。
   * 支持 Promise 风格调用
   */
  previewMedia(object?: WxPreviewMediaOption): void;
  /**
   * 保存图片到系统相册。
   * 支持 Promise 风格调用
   */
  saveImageToPhotosAlbum(object?: WxSaveImageToPhotosAlbumOption): void;
  /**
   * 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。
   * 支持 Promise 风格调用
   */
  setInnerAudioOption(object?: WxSetInnerAudioOptionOption): void;
  /**
   * 更新实时语音静音设置
   * 支持 Promise 风格调用
   */
  updateVoIPChatMuteConfig(object?: WxUpdateVoIPChatMuteConfigOption): void;
}

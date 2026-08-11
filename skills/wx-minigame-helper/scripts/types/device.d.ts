// 微信小游戏 API 类型声明 — 域：device（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCloseBLEConnectionOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCloseBluetoothAdapterOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCreateBLEConnectionOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 超时时间，单位 ms，不填表示不会超时 */
  timeout?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxCreateBLEPeripheralServerSuccessCallbackResult {
  /** 外围设备的服务端。 */
  server: BLEPeripheralServer
}

interface WxCreateBLEPeripheralServerOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxCreateBLEPeripheralServerSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBLEDeviceCharacteristicsSuccessCallbackResult {
  /** 设备特征列表 */
  characteristics: Record<string, any>[]
  /** 蓝牙设备特征的 UUID */
  uuid: string
  /** 该特征支持的操作类型 */
  properties: Record<string, any>
  /** 该特征是否支持 read 操作 */
  read: boolean
  /** 该特征是否支持 write 操作 */
  write: boolean
  /** 该特征是否支持 notify 操作 */
  notify: boolean
  /** 该特征是否支持 indicate 操作 */
  indicate: boolean
  /** 该特征是否支持无回复写操作 */
  writeNoResponse: boolean
  /** 该特征是否支持有回复写操作 */
  writeDefault: boolean
}

interface WxGetBLEDeviceCharacteristicsOption {
  /** 蓝牙设备 id。需要已经通过 wx.createBLEConnection 建立连接 */
  deviceId: string
  /** 蓝牙服务 UUID。需要先调用 wx.getBLEDeviceServices 获取 */
  serviceId: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBLEDeviceCharacteristicsSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBLEDeviceRSSISuccessCallbackResult {
  /** 信号强度，单位 dBm */
  RSSI: number
}

interface WxGetBLEDeviceRSSIOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBLEDeviceRSSISuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBLEDeviceServicesSuccessCallbackResult {
  /** 设备服务列表 */
  services: Record<string, any>[]
  /** 蓝牙设备服务的 UUID */
  uuid: string
  /** 该服务是否为主服务 */
  isPrimary: boolean
}

interface WxGetBLEDeviceServicesOption {
  /** 蓝牙设备 id。需要已经通过 wx.createBLEConnection 建立连接 */
  deviceId: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBLEDeviceServicesSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBLEMTUSuccessCallbackResult {
  /** 最大传输单元 */
  mtu: number
}

interface WxGetBLEMTUOption {
  /** 蓝牙设备 id */
  deviceId: string
  /**
   * 写模式 （iOS 特有参数）
   * 默认值 write
   */
  writeType?: string
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBLEMTUSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBatteryInfoSuccessCallbackResult {
  /** 设备电量，范围 1 - 100 */
  level: number
  /** 是否正在充电中 */
  isCharging: boolean
  /**
   * 是否处于省电模式
   * 最低版本 3.5.0
   */
  isLowPowerModeEnabled: boolean
}

interface WxGetBatteryInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBatteryInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBatteryInfoSyncResult {
  /** 设备电量，范围 1 - 100 */
  level: number
  /** 是否正在充电中 */
  isCharging: boolean
  /**
   * 是否处于省电模式
   * 最低版本 3.5.0
   */
  isLowPowerModeEnabled: boolean
}

interface WxGetBeaconsSuccessCallbackResult {
  /** Beacon 设备列表 */
  beacons: BeaconInfo[]
}

interface WxGetBeaconsOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBeaconsSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBluetoothAdapterStateSuccessCallbackResult {
  /** 是否正在搜索设备 */
  discovering: boolean
  /** 蓝牙适配器是否可用 */
  available: boolean
}

interface WxGetBluetoothAdapterStateOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBluetoothAdapterStateSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetBluetoothDevicesSuccessCallbackResult {
  /** UUID 对应的已连接设备列表 */
  devices: Record<string, any>[]
  /** 蓝牙设备名称，某些设备可能没有 */
  name: string
  /** 蓝牙设备 id */
  deviceId: string
  /** 当前蓝牙设备的信号强度，单位 dBm */
  RSSI: number
  /** 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
  advertisData: ArrayBuffer
  /** 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
  advertisServiceUUIDs: string[]
  /** 当前蓝牙设备的广播数据段中的 LocalName 数据段 */
  localName: string
  /** 当前蓝牙设备的广播数据段中的 ServiceData 数据段 */
  serviceData: Record<string, any>
  /** 当前蓝牙设备是否可连接（ Android 8.0 以下不支持返回该值 ） */
  connectable: boolean
}

interface WxGetBluetoothDevicesOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetBluetoothDevicesSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetClipboardDataSuccessCallbackResult {
  /** 剪贴板的内容 */
  data: string
}

interface WxGetClipboardDataOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetClipboardDataSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetConnectedBluetoothDevicesSuccessCallbackResult {
  /** 搜索到的设备列表 */
  devices: Record<string, any>[]
  /** 蓝牙设备名称，某些设备可能没有 */
  name: string
  /** 用于区分设备的 id */
  deviceId: string
}

interface WxGetConnectedBluetoothDevicesOption {
  /** 蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID） */
  services: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetConnectedBluetoothDevicesSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetLocalIPAddressSuccessCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 本机局域网IP地址 */
  localip: string
  /** 本机局域网子网掩码，基础库 2.24.0 开始支持 */
  netmask: string
}

interface WxGetLocalIPAddressOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetLocalIPAddressSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetNetworkTypeSuccessCallbackResult {
  /** 网络类型 */
  networkType: string
  /** 信号强弱，单位 dbm */
  signalStrength: number
  /**
   * 设备是否使用了网络代理
   * 最低版本 2.22.1
   */
  hasSystemProxy: boolean
  /**
   * 是否处于弱网环境
   * 最低版本 3.5.3
   */
  weakNet: boolean
}

interface WxGetNetworkTypeOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetNetworkTypeSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetScreenBrightnessSuccessCallbackResult {
  /** 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 */
  value: number
}

interface WxGetScreenBrightnessOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetScreenBrightnessSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetScreenRecordingStateSuccessCallbackResult {
  /** 录屏状态 */
  state: string
}

interface WxGetScreenRecordingStateOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetScreenRecordingStateSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxHideKeyboardOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxIsBluetoothDevicePairedOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxMakeBluetoothPairOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** pin 码，Base64 格式。 */
  pin: string
  /**
   * 超时时间，单位 ms
   * 默认值 20000
   */
  timeout?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxNotifyBLECharacteristicValueChangeOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** 是否启用 notify */
  state: boolean
  /**
   * 设置特征订阅类型，有效值有 `notification` 和 `indication`
   * 默认值 indication
   * 最低版本 2.4.0
   */
  type?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxOnAccelerometerChangeListenerCallbackResult {
  /** X 轴 */
  x: number
  /** Y 轴 */
  y: number
  /** Z 轴 */
  z: number
}

interface WxOnBLECharacteristicValueChangeListenerCallbackResult {
  /** 蓝牙设备 id */
  deviceId: string
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** 特征最新的值 */
  value: ArrayBuffer
}

interface WxOnBLEConnectionStateChangeListenerCallbackResult {
  /** 蓝牙设备 id */
  deviceId: string
  /** 是否处于已连接状态 */
  connected: boolean
}

interface WxOnBLEMTUChangeListenerCallbackResult {
  /** 蓝牙设备 id */
  deviceId: string
  /** 最大传输单元 */
  mtu: number
}

interface WxOnBLEPeripheralConnectionStateChangedListenerCallbackResult {
  /** 连接状态变化的设备 id */
  deviceId: string
  /** server 的 UUID */
  serverId: string
  /** 连接目前状态 */
  connected: boolean
}

interface WxOnBeaconServiceChangeListenerCallbackResult {
  /** 服务目前是否可用 */
  available: boolean
  /** 目前是否处于搜索状态 */
  discovering: boolean
}

interface WxOnBeaconUpdateListenerCallbackResult {
  /** 当前搜寻到的所有 Beacon 设备列表 */
  beacons: BeaconInfo[]
}

interface WxOnBluetoothAdapterStateChangeListenerCallbackResult {
  /** 蓝牙适配器是否可用 */
  available: boolean
  /** 蓝牙适配器是否处于搜索状态 */
  discovering: boolean
}

interface WxOnCompassChangeListenerCallbackResult {
  /** 面对的方向度数 */
  direction: number
  /**
   * 精度
   * 最低版本 2.4.0
   */
  accuracy: number | string
}

interface WxOnDeviceMotionChangeListenerCallbackResult {
  /** 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。 */
  alpha: number
  /**
   * 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。
   */
  beta: number
  /** 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。 */
  gamma: number
}

interface WxOnDeviceOrientationChangeListenerCallbackResult {
  /** 切换后的屏幕方向。 */
  value: string
}

interface WxOnGamepadConnectedListenerCallbackResult {
  /** 本次连接到的 Gamepad 实例。 */
  gamepad: string
}

interface WxOnGamepadDisconnectedListenerCallbackResult {
  /** 本次断开的 Gamepad 实例。 */
  gamepad: string
}

interface WxOnGyroscopeChangeListenerCallbackResult {
  /** x 轴的角速度 */
  x: number
  /** y 轴的角速度 */
  y: number
  /** z 轴的角速度 */
  z: number
}

interface WxOnKeyDownListenerCallbackResult {
  /** 同 Web 规范 KeyEvent key 属性 */
  key: string
  /** 同 Web 规范 KeyEvent code 属性 */
  code: string
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnKeyUpListenerCallbackResult {
  /** 同 Web 规范 KeyEvent key 属性 */
  key: string
  /** 同 Web 规范 KeyEvent code 属性 */
  code: string
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnKeyboardCompleteListenerCallbackResult {
  /** 键盘输入的当前值 */
  value: string
}

interface WxOnKeyboardConfirmListenerCallbackResult {
  /** 键盘输入的当前值 */
  value: string
}

interface WxOnKeyboardHeightChangeListenerCallbackResult {
  /** 键盘高度 */
  height: number
}

interface WxOnKeyboardInputListenerCallbackResult {
  /** 键盘输入的当前值 */
  value: string
}

interface WxOnMemoryWarningListenerCallbackResult {
  /** 内存告警等级，只有 Android 才有，对应系统宏定义 */
  level: number
}

interface WxOnMouseDownListenerCallbackResult {
  /** 事件触发时鼠标所在的位置横坐标 */
  x: number
  /** 事件触发时鼠标所在的位置纵坐标 */
  y: number
  /** 按键类型，0左键，1中键，2右键 */
  button: number
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnMouseMoveListenerCallbackResult {
  /** 事件触发时鼠标所在的位置横坐标 */
  x: number
  /** 事件触发时鼠标所在的位置纵坐标 */
  y: number
  /** 鼠标横坐标偏移量 */
  movementX: number
  /** 鼠标纵坐标偏移量 */
  movementY: number
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnMouseUpListenerCallbackResult {
  /** 事件触发时鼠标所在的位置横坐标 */
  x: number
  /** 事件触发时鼠标所在的位置纵坐标 */
  y: number
  /** 按键类型，0左键，1中键，2右键 */
  button: number
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnNetworkStatusChangeListenerCallbackResult {
  /** 当前是否有网络连接 */
  isConnected: boolean
  /** 网络类型 */
  networkType: string
}

interface WxOnNetworkWeakChangeListenerCallbackResult {
  /** 当前是否处于弱网状态 */
  weakNet: boolean
  /** 当前网络类型 */
  networkType: string
}

interface WxOnScreenRecordingStateChangedListenerCallbackResult {
  /** 录屏状态 */
  state: string
}

interface WxOnTouchCancelListenerCallbackResult {
  /** 当前所有触摸点的列表 */
  touches: Touch[]
  /** 触发此次事件的触摸点列表 */
  changedTouches: Touch[]
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnTouchEndListenerCallbackResult {
  /** 当前所有触摸点的列表 */
  touches: Touch[]
  /** 触发此次事件的触摸点列表 */
  changedTouches: Touch[]
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnTouchMoveListenerCallbackResult {
  /** 当前所有触摸点的列表 */
  touches: Touch[]
  /** 触发此次事件的触摸点列表 */
  changedTouches: Touch[]
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnTouchStartListenerCallbackResult {
  /** 当前所有触摸点的列表 */
  touches: Touch[]
  /** 触发此次事件的触摸点列表 */
  changedTouches: Touch[]
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOnUserCaptureScreenListenerCallbackResult {
  /**
   * 支持开发者自定义一键打开小程序时的 query
   * 最低版本 3.3.0
   */
  query: string
  /**
   * 如果该参数存在，则其它的参数将会以 resolve 结果为准，如果一秒内不 resolve，分享会使用上面传入的默认参数
   * 最低版本 3.3.0
   */
  promise: Promise<any>
}

interface WxOnWheelListenerCallbackResult {
  /** 滚轮 x 轴方向滚动量 */
  deltaX: number
  /** 滚轮 y 轴方向滚动量 */
  deltaY: number
  /** 滚轮 z 轴方向滚动量 */
  deltaZ: number
  /** 事件触发时鼠标所在的位置横坐标 */
  x: number
  /** 事件触发时鼠标所在的位置纵坐标 */
  y: number
  /** 事件触发时的时间戳 */
  timeStamp: number
}

interface WxOpenBluetoothAdapterOption {
  /**
   * 蓝牙模式，可作为主/从设备，仅 iOS 需要。
   * 默认值 central
   * 最低版本 2.10.0
   */
  mode?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxReadBLECharacteristicValueOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxScanCodeSuccessCallbackResult {
  /** 所扫码的内容 */
  result: string
  /** 所扫码的类型 */
  scanType: string
  /** 所扫码的字符集 */
  charSet: string
  /** 当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path */
  path: string
  /** 原始数据，base64编码 */
  rawData: string
}

interface WxScanCodeOption {
  /**
   * 是否只能从相机扫码，不允许从相册选择图片
   * 默认值 false
   * 最低版本 1.2.0
   */
  onlyFromCamera?: boolean
  /**
   * 扫码类型
   * 默认值 ['barCode', 'qrCode', 'wxCode']
   * 最低版本 1.7.0
   */
  scanType?: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxScanCodeSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetBLEMTUSuccessCallbackResult {
  /** 最终协商的 MTU 值，与传入参数一致。安卓客户端 8.0.9 开始支持。 */
  mtu: number
}

interface WxSetBLEMTUOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 最大传输单元。设置范围为 (22,512) 区间内，单位 bytes */
  mtu: number
  /** 接口调用成功的回调函数 */
  success?: (res: WxSetBLEMTUSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetClipboardDataOption {
  /** 剪贴板的内容 */
  data: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetDeviceOrientationOption {
  /** 表示切换为横屏还是竖屏 */
  value: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetKeepScreenOnOption {
  /** 是否保持屏幕常亮 */
  keepScreenOn: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetScreenBrightnessOption {
  /** 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮。在安卓端支持传入特殊值 -1，表示屏幕亮度跟随系统变化 */
  value: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxSetVisualEffectOnCaptureOption {
  /**
   * 截屏/录屏时的表现，仅支持 none / hidden，传入 hidden 则表示在截屏/录屏时隐藏屏幕
   * 默认值 none
   */
  visualEffect?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxShowKeyboardOption {
  /** 键盘输入框显示的默认值 */
  defaultValue: string
  /** 键盘中文本的最大长度 */
  maxLength: number
  /** 是否为多行输入 */
  multiple: boolean
  /** 当点击完成时键盘是否保持显示 */
  confirmHold: boolean
  /** 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容 */
  confirmType: string
  /** 键盘类型，默认为文本类型，客户端8.0.57以上支持数字键盘 */
  keyboardType: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartAccelerometerOption {
  /**
   * 监听加速度数据回调函数的执行频率
   * 默认值 normal
   * 最低版本 2.1.0
   */
  interval?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartBeaconDiscoveryOption {
  /** Beacon 设备广播的 UUID 列表 */
  uuids: string[]
  /**
   * 是否校验蓝牙开关，仅在 iOS 下有效。iOS 11 起，控制面板里关掉蓝牙，还是能继续使用 Beacon 服务。
   * 默认值 false
   */
  ignoreBluetoothAvailable?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartBluetoothDevicesDiscoveryOption {
  /**
   * 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID）。某些蓝牙设备会广播自己的主 service 的 UUID。如果设置此参数，则只搜索广播包有对应 UUID 的主服务的蓝牙设备。建议通过该参数过滤掉周边不需要处理的其他蓝牙设备。
   */
  services?: string[]
  /**
   * 是否允许重复上报同一设备。如果允许重复上报，则 wx.onBlueToothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。
   * 默认值 false
   */
  allowDuplicatesKey?: boolean
  /**
   * 上报设备的间隔，单位 ms。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。
   * 默认值 0
   */
  interval?: number
  /**
   * 扫描模式，越高扫描越快，也越耗电。仅安卓微信客户端 7.0.12 及以上支持。
   * 默认值 medium
   */
  powerLevel?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartCompassOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartDeviceMotionListeningOption {
  /**
   * 监听设备方向的变化回调函数的执行频率
   * 默认值 normal
   */
  interval?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStartGyroscopeOption {
  /**
   * 监听陀螺仪数据回调函数的执行频率
   * 默认值 normal
   */
  interval?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopAccelerometerOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopBeaconDiscoveryOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopBluetoothDevicesDiscoveryOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopCompassOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopDeviceMotionListeningOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopGyroscopeOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxUpdateKeyboardOption {
  /** 键盘输入框的当前值 */
  value: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxVibrateLongOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxVibrateShortOption {
  /**
   * 震动强度类型，有效值为：heavy、medium、light
   * 最低版本 2.13.0
   */
  type: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxWriteBLECharacteristicValueOption {
  /** 蓝牙设备 id */
  deviceId: string
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** 蓝牙设备特征对应的二进制值 */
  value: ArrayBuffer
  /** 蓝牙特征值的写模式设置，有两种模式，iOS 优先 write，安卓优先 writeNoResponse 。（基础库 2.22.0 开始支持） */
  writeType?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface BLEPeripheralServerAddServiceOption {
  /** 描述service的Object */
  service: Record<string, any>
  /** 蓝牙服务的 UUID */
  uuid: string
  /** characteristics列表 */
  characteristics: Record<string, any>[]
  /** characteristic 的 UUID */
  uuid: string
  /** 特征支持的操作 */
  properties?: Record<string, any>
  /**
   * 写
   * 默认值 false
   */
  write?: boolean
  /**
   * 无回复写
   * 默认值 false
   */
  writeNoResponse?: boolean
  /**
   * 读
   * 默认值 false
   */
  read?: boolean
  /**
   * 订阅
   * 默认值 false
   */
  notify?: boolean
  /**
   * 回包
   * 默认值 false
   */
  indicate?: boolean
  /** 特征权限 */
  permission?: Record<string, any>
  /**
   * 可读
   * 默认值 false
   */
  readable?: boolean
  /**
   * 可写
   * 默认值 false
   */
  writeable?: boolean
  /**
   * 加密读请求
   * 默认值 false
   */
  readEncryptionRequired?: boolean
  /**
   * 加密写请求
   * 默认值 false
   */
  writeEncryptionRequired?: boolean
  /** 特征对应的二进制值 */
  value?: ArrayBuffer
  /** 描述符数据 */
  descriptors?: Record<string, any>[]
  /** Descriptor 的 UUID */
  uuid: string
  /** 描述符的权限 */
  permission?: Record<string, any>
  /**
   * 写
   * 默认值 false
   */
  write?: boolean
  /**
   * 读
   * 默认值 false
   */
  read?: boolean
  /** 描述符数据 */
  value?: ArrayBuffer
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface BLEPeripheralServerOnCharacteristicReadRequestListenerCallbackResult {
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** 唯一标识码，调用 writeCharacteristicValue 时使用 */
  callbackId: number
}

interface BLEPeripheralServerOnCharacteristicSubscribedListenerCallbackResult {
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
}

interface BLEPeripheralServerOnCharacteristicUnsubscribedListenerCallbackResult {
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
}

interface BLEPeripheralServerOnCharacteristicWriteRequestListenerCallbackResult {
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** 唯一标识码，调用 writeCharacteristicValue 时使用 */
  callbackId: number
  /** 请求写入特征的二进制数据值 */
  value: ArrayBuffer
}

interface BLEPeripheralServerRemoveServiceOption {
  /** service 的 UUID */
  serviceId: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface BLEPeripheralServerStartAdvertisingOption {
  /** 广播自定义参数 */
  advertiseRequest: Record<string, any>
  /**
   * 当前设备是否可连接
   * 默认值 true
   */
  connectable?: boolean
  /** 广播中 deviceName 字段，默认为空 */
  deviceName?: string
  /** 要广播的服务 UUID 列表。使用 16/32 位 UUID 时请参考注意事项。 */
  serviceUuids?: string[]
  /** 广播的制造商信息。仅安卓支持，iOS 因系统限制无法定制。 */
  manufacturerData?: Record<string, any>[]
  /** 制造商ID，0x 开头的十六进制 */
  manufacturerId: string
  /** 制造商信息 */
  manufacturerSpecificData?: ArrayBuffer
  /** 以 beacon 设备形式广播的参数。 */
  beacon?: Record<string, any>
  /** Beacon 设备广播的 UUID */
  uuid: string
  /** Beacon 设备的主 ID */
  major: number
  /** Beacon 设备的次 ID */
  minor: number
  /** 用于判断距离设备 1 米时 RSSI 大小的参考值 */
  measuredPower?: number
  /**
   * 广播功率
   * 默认值 medium
   */
  powerLevel?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface BLEPeripheralServerStopAdvertisingOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface BLEPeripheralServerWriteCharacteristicValueOption {
  /** 蓝牙特征对应服务的 UUID */
  serviceId: string
  /** 蓝牙特征的 UUID */
  characteristicId: string
  /** characteristic 对应的二进制值 */
  value: ArrayBuffer
  /** 是否需要通知主机 value 已更新 */
  needNotify: boolean
  /** 可选，处理回包时使用 */
  callbackId?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 外围设备的服务端 */
interface BLEPeripheralServer {
  /** 添加服务。 */
  addService(object?: BLEPeripheralServerAddServiceOption): void
  /** 移除已连接的设备请求读当前外围设备的特征值事件的监听函数 */
  offCharacteristicReadRequest(listener: (res: any) => void): void
  /** 移除特征订阅事件的监听函数 */
  offCharacteristicSubscribed(listener: (res: any) => void): void
  /** 移除取消特征订阅事件的监听函数 */
  offCharacteristicUnsubscribed(listener: (res: any) => void): void
  /** 移除已连接的设备请求写当前外围设备的特征值事件的监听函数 */
  offCharacteristicWriteRequest(listener: (res: any) => void): void
  /** 监听已连接的设备请求读当前外围设备的特征值事件。收到该消息后需要立刻调用 writeCharacteristicValue 写回数据，否则主机不会收到响应。 */
  onCharacteristicReadRequest(listener: (res: BLEPeripheralServerOnCharacteristicReadRequestListenerCallbackResult) => void): void
  /** 监听特征订阅事件，仅 iOS 支持。 */
  onCharacteristicSubscribed(listener: (res: BLEPeripheralServerOnCharacteristicSubscribedListenerCallbackResult) => void): void
  /** 监听取消特征订阅事件，仅 iOS 支持。 */
  onCharacteristicUnsubscribed(listener: (res: BLEPeripheralServerOnCharacteristicUnsubscribedListenerCallbackResult) => void): void
  /** 监听已连接的设备请求写当前外围设备的特征值事件。收到该消息后需要立刻调用 writeCharacteristicValue 写回数据，否则主机不会收到响应。 */
  onCharacteristicWriteRequest(listener: (res: BLEPeripheralServerOnCharacteristicWriteRequestListenerCallbackResult) => void): void
  /** 移除服务。 */
  removeService(object?: BLEPeripheralServerRemoveServiceOption): void
  /** 开始广播本地创建的外围设备。 */
  startAdvertising(Object?: BLEPeripheralServerStartAdvertisingOption): void
  /** 停止广播。 */
  stopAdvertising(object?: BLEPeripheralServerStopAdvertisingOption): void
  /** 往指定特征写入二进制数据值，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅。 */
  writeCharacteristicValue(Object?: BLEPeripheralServerWriteCharacteristicValueOption): void
}

/** Beacon 设备 */
interface BeaconInfo {
  /** Beacon 设备广播的 UUID */
  uuid: string
  /** Beacon 设备的主 ID */
  major: number
  /** Beacon 设备的次 ID */
  minor: number
  /** 表示设备距离的枚举值（仅iOS） */
  proximity: number
  /** Beacon 设备的距离，单位 m。iOS 上，proximity 为 0 时，accuracy 为 -1。 */
  accuracy: number
  /** 表示设备的信号强度，单位 dBm */
  rssi: number
}

/** 在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。 */
interface Touch {
  /**
   * Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。
   */
  identifier: number
  /** 触点相对于页面左边沿的 X 坐标。 */
  pageX: number
  /** 触点相对于页面上边沿的 Y 坐标。 */
  pageY: number
  /** 触点相对于可见视区左边沿的 X 坐标。 */
  clientX: number
  /** 触点相对于可见视区上边沿的 Y 坐标。 */
  clientY: number
  /** 手指挤压触摸平面的压力大小, 从0.0(没有压力)到1.0(最大压力)的浮点数（仅在支持 force touch 的设备返回） */
  force: number
}

interface WxDevice {
  /**
   * 断开与蓝牙低功耗设备的连接。
   * 支持 Promise 风格调用
   */
  closeBLEConnection(object?: WxCloseBLEConnectionOption): void;
  /**
   * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。
   * 支持 Promise 风格调用
   */
  closeBluetoothAdapter(object?: WxCloseBluetoothAdapterOption): void;
  /**
   * 连接蓝牙低功耗设备。
   * 支持 Promise 风格调用
   */
  createBLEConnection(object?: WxCreateBLEConnectionOption): void;
  /**
   * 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个。
   * 支持 Promise 风格调用
   */
  createBLEPeripheralServer(object?: WxCreateBLEPeripheralServerOption): void;
  /**
   * 获取蓝牙低功耗设备某个服务中所有特征 (characteristic)。
   * 支持 Promise 风格调用
   */
  getBLEDeviceCharacteristics(object?: WxGetBLEDeviceCharacteristicsOption): void;
  /**
   * 获取蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)。
   * 支持 Promise 风格调用
   */
  getBLEDeviceRSSI(object?: WxGetBLEDeviceRSSIOption): void;
  /**
   * 获取蓝牙低功耗设备所有服务 (service)。
   * 支持 Promise 风格调用
   */
  getBLEDeviceServices(object?: WxGetBLEDeviceServicesOption): void;
  /**
   * 获取蓝牙低功耗的最大传输单元。需在 wx.createBLEConnection 调用成功后调用。
   * 支持 Promise 风格调用
   */
  getBLEMTU(object?: WxGetBLEMTUOption): void;
  /**
   * 获取设备电池信息。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
   * 支持 Promise 风格调用
   */
  getBatteryInfo(object?: WxGetBatteryInfoOption): void;
  /**
   * wx.getBatteryInfo 的同步版本
   * 支持 Promise 风格调用
   */
  getBatteryInfoSync(): WxGetBatteryInfoSyncResult;
  /**
   * 获取所有已搜索到的 Beacon 设备
   * 支持 Promise 风格调用
   */
  getBeacons(object?: WxGetBeaconsOption): void;
  /**
   * 获取本机蓝牙适配器状态。
   * 支持 Promise 风格调用
   */
  getBluetoothAdapterState(object?: WxGetBluetoothAdapterStateOption): void;
  /**
   * 获取在蓝牙模块生效期间所有搜索到的蓝牙设备。包括已经和本机处于连接状态的设备。
   * 支持 Promise 风格调用
   */
  getBluetoothDevices(object?: WxGetBluetoothDevicesOption): void;
  /**
   * 获取系统剪贴板的内容
   * 支持 Promise 风格调用
   */
  getClipboardData(object?: WxGetClipboardDataOption): void;
  /**
   * 根据主服务 UUID 获取已连接的蓝牙设备。
   * 支持 Promise 风格调用
   */
  getConnectedBluetoothDevices(object?: WxGetConnectedBluetoothDevicesOption): void;
  /** 获取已连接的游戏手柄信息，仅在 PC 平台支持。 */
  getGamepads(): Record<string, any>[];
  /** 获取局域网IP地址 */
  getLocalIPAddress(object?: WxGetLocalIPAddressOption): void;
  /**
   * 获取网络类型
   * 支持 Promise 风格调用
   */
  getNetworkType(object?: WxGetNetworkTypeOption): void;
  /**
   * 获取屏幕亮度
   * 支持 Promise 风格调用
   */
  getScreenBrightness(object?: WxGetScreenBrightnessOption): void;
  /** 查询用户是否在录屏。 */
  getScreenRecordingState(object?: WxGetScreenRecordingStateOption): void;
  /**
   * 隐藏键盘
   * 支持 Promise 风格调用
   */
  hideKeyboard(object?: WxHideKeyboardOption): void;
  /**
   * 查询蓝牙设备是否配对，仅安卓支持。
   * 支持 Promise 风格调用
   */
  isBluetoothDevicePaired(object?: WxIsBluetoothDevicePairedOption): void;
  /**
   * 蓝牙配对接口，仅安卓支持。
   * 支持 Promise 风格调用
   */
  makeBluetoothPair(object?: WxMakeBluetoothPairOption): void;
  /**
   * 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征。注意：必须设备的特征支持 notify 或者 indicate 才可以成功调用。
   * 支持 Promise 风格调用
   */
  notifyBLECharacteristicValueChange(object?: WxNotifyBLECharacteristicValueChangeOption): void;
  /** 移除加速度数据事件的监听函数 */
  offAccelerometerChange(listener: (res: any) => void): void;
  /** 移除蓝牙低功耗设备的特征值变化事件的全部监听函数 */
  offBLECharacteristicValueChange(): void;
  /** 移除蓝牙低功耗连接状态改变事件的监听函数 */
  offBLEConnectionStateChange(listener: (res: any) => void): void;
  /** 移除蓝牙低功耗的最大传输单元变化事件的监听函数 */
  offBLEMTUChange(listener: (res: any) => void): void;
  /** 移除当前外围设备被连接或断开连接事件的监听函数 */
  offBLEPeripheralConnectionStateChanged(listener: (res: any) => void): void;
  /** 移除 Beacon 服务状态变化事件的全部监听函数 */
  offBeaconServiceChange(): void;
  /** 移除 Beacon 设备更新事件的全部监听函数 */
  offBeaconUpdate(): void;
  /** 移除蓝牙适配器状态变化事件的全部监听函数 */
  offBluetoothAdapterStateChange(): void;
  /** 移除搜索到新设备的事件的全部监听函数 */
  offBluetoothDeviceFound(): void;
  /** 移除罗盘数据变化事件的监听函数 */
  offCompassChange(listener: (res: any) => void): void;
  /** 移除设备方向变化事件的监听函数 */
  offDeviceMotionChange(listener: (res: any) => void): void;
  /** 移除屏幕转向切换事件的监听函数 */
  offDeviceOrientationChange(listener: (res: any) => void): void;
  /** 移除陀螺仪数据变化事件的监听函数 */
  offGyroscopeChange(listener: (res: any) => void): void;
  /** 移除键盘按键按下事件的监听函数 */
  offKeyDown(listener: (res: any) => void): void;
  /** 移除键盘按键弹起事件的监听函数 */
  offKeyUp(listener: (res: any) => void): void;
  /** 移除键盘收起的事件的监听函数 */
  offKeyboardComplete(listener: (res: any) => void): void;
  /** 移除用户点击键盘 Confirm 按钮时的事件的监听函数 */
  offKeyboardConfirm(listener: (res: any) => void): void;
  /** 移除键盘高度变化事件的监听函数 */
  offKeyboardHeightChange(listener: (res: any) => void): void;
  /** 移除键盘输入事件的监听函数 */
  offKeyboardInput(listener: (res: any) => void): void;
  /** 移除内存不足告警事件的监听函数 */
  offMemoryWarning(listener: (res: any) => void): void;
  /** 移除鼠标按键按下事件的监听函数 */
  offMouseDown(listener: (res: any) => void): void;
  /** 移除鼠标移动事件的监听函数 */
  offMouseMove(listener: (res: any) => void): void;
  /** 移除鼠标按键弹起事件的监听函数 */
  offMouseUp(listener: (res: any) => void): void;
  /** 移除网络状态变化事件的监听函数 */
  offNetworkStatusChange(listener: (res: any) => void): void;
  /** 移除弱网状态变化事件的监听函数 */
  offNetworkWeakChange(listener: (res: any) => void): void;
  /** 移除用户录屏事件的监听函数 */
  offScreenRecordingStateChanged(listener: (res: any) => void): void;
  /** 移除触点失效事件的监听函数 */
  offTouchCancel(listener: (res: any) => void): void;
  /** 移除触摸结束事件的监听函数 */
  offTouchEnd(listener: (res: any) => void): void;
  /** 移除触点移动事件的监听函数 */
  offTouchMove(listener: (res: any) => void): void;
  /** 移除开始触摸事件的监听函数 */
  offTouchStart(listener: (res: any) => void): void;
  /** 用户主动截屏事件。取消事件监听。 */
  offUserCaptureScreen(): void;
  /** 移除鼠标滚轮事件的监听函数 */
  offWheel(listener: (res: any) => void): void;
  /** 监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听。 */
  onAccelerometerChange(listener: (res: WxOnAccelerometerChangeListenerCallbackResult) => void): void;
  /**
   * 监听蓝牙低功耗设备的特征值变化事件。必须先调用 wx.notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
   */
  onBLECharacteristicValueChange(listener: (res: WxOnBLECharacteristicValueChangeListenerCallbackResult) => void): void;
  /** 监听蓝牙低功耗连接状态改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等 */
  onBLEConnectionStateChange(listener: (res: WxOnBLEConnectionStateChangeListenerCallbackResult) => void): void;
  /** 监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发）。 */
  onBLEMTUChange(listener: (res: WxOnBLEMTUChangeListenerCallbackResult) => void): void;
  /** 监听当前外围设备被连接或断开连接事件 */
  onBLEPeripheralConnectionStateChanged(listener: (res: WxOnBLEPeripheralConnectionStateChangedListenerCallbackResult) => void): void;
  /** 监听 Beacon 服务状态变化事件，仅能注册一个监听 */
  onBeaconServiceChange(listener: (res: WxOnBeaconServiceChangeListenerCallbackResult) => void): void;
  /** 监听 Beacon 设备更新事件，仅能注册一个监听 */
  onBeaconUpdate(listener: (res: WxOnBeaconUpdateListenerCallbackResult) => void): void;
  /** 监听蓝牙适配器状态变化事件 */
  onBluetoothAdapterStateChange(listener: (res: WxOnBluetoothAdapterStateChangeListenerCallbackResult) => void): void;
  /** 监听搜索到新设备的事件 */
  onBluetoothDeviceFound(listener: (res: any) => void): void;
  /** 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。 */
  onCompassChange(listener: (res: WxOnCompassChangeListenerCallbackResult) => void): void;
  /**
   * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListening() 停止监听。
   */
  onDeviceMotionChange(listener: (res: WxOnDeviceMotionChangeListenerCallbackResult) => void): void;
  /** 监听屏幕转向切换事件 */
  onDeviceOrientationChange(listener: (res: WxOnDeviceOrientationChangeListenerCallbackResult) => void): void;
  /** 监听用户已连接游戏手柄的事件。 */
  onGamepadConnected(listener: (res: WxOnGamepadConnectedListenerCallbackResult) => void): void;
  /** 监听用户断开游戏手柄的事件。 */
  onGamepadDisconnected(listener: (res: WxOnGamepadDisconnectedListenerCallbackResult) => void): void;
  /**
   * 监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听。
   */
  onGyroscopeChange(listener: (res: WxOnGyroscopeChangeListenerCallbackResult) => void): void;
  /** 监听键盘按键按下事件，仅适用于 PC 平台 */
  onKeyDown(listener: (res: WxOnKeyDownListenerCallbackResult) => void): void;
  /** 监听键盘按键弹起事件，仅适用于 PC 平台 */
  onKeyUp(listener: (res: WxOnKeyUpListenerCallbackResult) => void): void;
  /** 监听键盘收起的事件 */
  onKeyboardComplete(listener: (res: WxOnKeyboardCompleteListenerCallbackResult) => void): void;
  /** 监听用户点击键盘 Confirm 按钮时的事件 */
  onKeyboardConfirm(listener: (res: WxOnKeyboardConfirmListenerCallbackResult) => void): void;
  /** 监听键盘高度变化事件 */
  onKeyboardHeightChange(listener: (res: WxOnKeyboardHeightChangeListenerCallbackResult) => void): void;
  /** 监听键盘输入事件 */
  onKeyboardInput(listener: (res: WxOnKeyboardInputListenerCallbackResult) => void): void;
  /** 监听内存不足告警事件。 */
  onMemoryWarning(listener: (res: WxOnMemoryWarningListenerCallbackResult) => void): void;
  /** 监听鼠标按键按下事件 */
  onMouseDown(listener: (res: WxOnMouseDownListenerCallbackResult) => void): void;
  /** 监听鼠标移动事件 */
  onMouseMove(listener: (res: WxOnMouseMoveListenerCallbackResult) => void): void;
  /** 监听鼠标按键弹起事件 */
  onMouseUp(listener: (res: WxOnMouseUpListenerCallbackResult) => void): void;
  /** 监听网络状态变化事件 */
  onNetworkStatusChange(listener: (res: WxOnNetworkStatusChangeListenerCallbackResult) => void): void;
  /** 监听弱网状态变化事件 */
  onNetworkWeakChange(listener: (res: WxOnNetworkWeakChangeListenerCallbackResult) => void): void;
  /** 监听用户录屏事件。 */
  onScreenRecordingStateChanged(listener: (res: WxOnScreenRecordingStateChangedListenerCallbackResult) => void): void;
  /** 监听触点失效事件 */
  onTouchCancel(listener: (res: WxOnTouchCancelListenerCallbackResult) => void): void;
  /** 监听触摸结束事件 */
  onTouchEnd(listener: (res: WxOnTouchEndListenerCallbackResult) => void): void;
  /** 监听触点移动事件 */
  onTouchMove(listener: (res: WxOnTouchMoveListenerCallbackResult) => void): void;
  /** 监听开始触摸事件 */
  onTouchStart(listener: (res: WxOnTouchStartListenerCallbackResult) => void): void;
  /** 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听 */
  onUserCaptureScreen(listener: (res: WxOnUserCaptureScreenListenerCallbackResult) => void): void;
  /** 监听鼠标滚轮事件 */
  onWheel(listener: (res: WxOnWheelListenerCallbackResult) => void): void;
  /**
   * 初始化蓝牙模块。iOS 上开启主机/从机（外围设备）模式时需分别调用一次，并指定对应的 `mode`。
   * 支持 Promise 风格调用
   */
  openBluetoothAdapter(object?: WxOpenBluetoothAdapterOption): void;
  /**
   * 读取蓝牙低功耗设备特征值的二进制数据。注意：必须设备的特征支持 read 才可以成功调用。
   * 支持 Promise 风格调用
   */
  readBLECharacteristicValue(object?: WxReadBLECharacteristicValueOption): void;
  /**
   * 调起客户端扫码界面进行扫码
   * 支持 Promise 风格调用
   */
  scanCode(object?: WxScanCodeOption): void;
  /**
   * 协商设置蓝牙低功耗的最大传输单元 (Maximum Transmission Unit, MTU)。需在 wx.createBLEConnection 调用成功后调用。仅安卓系统 5.1 以上版本有效，iOS 因系统限制不支持。
   * 支持 Promise 风格调用
   */
  setBLEMTU(object?: WxSetBLEMTUOption): void;
  /**
   * 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
   * 支持 Promise 风格调用
   */
  setClipboardData(object?: WxSetClipboardDataOption): void;
  /** 切换横竖屏。接口调用成功后会触发 wx.onDeviceOrientationChange 事件 */
  setDeviceOrientation(object?: WxSetDeviceOrientationOption): void;
  /**
   * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
   * 支持 Promise 风格调用
   */
  setKeepScreenOn(object?: WxSetKeepScreenOnOption): void;
  /**
   * 设置屏幕亮度
   * 支持 Promise 风格调用
   */
  setScreenBrightness(object?: WxSetScreenBrightnessOption): void;
  /** 设置截屏/录屏时屏幕表现 */
  setVisualEffectOnCapture(object?: WxSetVisualEffectOnCaptureOption): void;
  /**
   * 显示键盘
   * 支持 Promise 风格调用
   */
  showKeyboard(object?: WxShowKeyboardOption): void;
  /**
   * 开始监听加速度数据。
   * 支持 Promise 风格调用
   */
  startAccelerometer(object?: WxStartAccelerometerOption): void;
  /**
   * 开始搜索附近的 Beacon 设备
   * 支持 Promise 风格调用
   */
  startBeaconDiscovery(object?: WxStartBeaconDiscoveryOption): void;
  /**
   * 开始搜寻附近的蓝牙外围设备。
   * 支持 Promise 风格调用
   */
  startBluetoothDevicesDiscovery(object?: WxStartBluetoothDevicesDiscoveryOption): void;
  /**
   * 开始监听罗盘数据
   * 支持 Promise 风格调用
   */
  startCompass(object?: WxStartCompassOption): void;
  /**
   * 开始监听设备方向的变化。
   * 支持 Promise 风格调用
   */
  startDeviceMotionListening(object?: WxStartDeviceMotionListeningOption): void;
  /**
   * 开始监听陀螺仪数据。
   * 支持 Promise 风格调用
   */
  startGyroscope(object?: WxStartGyroscopeOption): void;
  /**
   * 停止监听加速度数据。
   * 支持 Promise 风格调用
   */
  stopAccelerometer(object?: WxStopAccelerometerOption): void;
  /**
   * 停止搜索附近的 Beacon 设备
   * 支持 Promise 风格调用
   */
  stopBeaconDiscovery(object?: WxStopBeaconDiscoveryOption): void;
  /**
   * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
   * 支持 Promise 风格调用
   */
  stopBluetoothDevicesDiscovery(object?: WxStopBluetoothDevicesDiscoveryOption): void;
  /**
   * 停止监听罗盘数据
   * 支持 Promise 风格调用
   */
  stopCompass(object?: WxStopCompassOption): void;
  /**
   * 停止监听设备方向的变化。
   * 支持 Promise 风格调用
   */
  stopDeviceMotionListening(object?: WxStopDeviceMotionListeningOption): void;
  /**
   * 停止监听陀螺仪数据。
   * 支持 Promise 风格调用
   */
  stopGyroscope(object?: WxStopGyroscopeOption): void;
  /**
   * 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果
   * 支持 Promise 风格调用
   */
  updateKeyboard(object?: WxUpdateKeyboardOption): void;
  /**
   * 使手机发生较长时间的振动（400 ms)
   * 支持 Promise 风格调用
   */
  vibrateLong(object?: WxVibrateLongOption): void;
  /**
   * 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
   * 支持 Promise 风格调用
   */
  vibrateShort(object?: WxVibrateShortOption): void;
  /**
   * 向蓝牙低功耗设备特征值中写入二进制数据。注意：必须设备的特征支持 write 才可以成功调用。
   * 支持 Promise 风格调用
   */
  writeBLECharacteristicValue(object?: WxWriteBLECharacteristicValueOption): void;
}

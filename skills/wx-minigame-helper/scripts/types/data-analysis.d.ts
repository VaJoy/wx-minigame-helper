// 微信小游戏 API 类型声明 — 域：data-analysis（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxGetGameExptInfoSuccessCallbackResult {
  /** 结果对象，各项为实验的相关信息 */
  list: Record<string, any>[]
  /** 实验ID，标识实验 */
  expt_id: number
  /** 参数名称 */
  param_name: string
  /** 参数值 */
  param_value: string
}

interface WxGetGameExptInfoOption {
  /** 实验参数数组，不填则获取所有实验参数 */
  keyList: string[]
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetGameExptInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetGameLogManagerOption {
  /** 自定义全局日志信息。该信息会包含在每条日志的基础信息中。数据类型为 object，且能够通过 JSON.stringify 序列化。 */
  commonInfo?: Record<string, any>
  /**
   * 是否开启调试模式，调试模式下每次上报成功都会在控制台输出上报内容。调试模式仅在开发版和体验版小游戏中生效。
   * 默认值 false
   */
  debug?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetMiniReportManagerOption {
  /**
   * 需要上报的事件ID列表
   * 默认值 []
   */
  eventList?: string[]
  /**
   * 是否开启调试模式，调试模式下每次上报成功都会在控制台输出上报内容。调试模式仅在开发版和体验版小游戏中生效。
   * 默认值 false
   */
  debug?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetScenePerformanceManagerOption {
  /** 通用信息设置的参数对象，每次执行 setData 时都会带上这些信息。数据类型为 object，且能够通过 JSON.stringify 序列化。 */
  commonInfo?: Record<string, any>
  /**
   * 是否开启调试模式。开启后，调用 `setData` 时会在控制台打印本次上报的 `sceneId` 及合并后的附加信息，便于开发阶段核对上报内容。**仅在开发版（develop）和体验版（trial）下生效** ，正式版下即使传入 `true` 也不会输出日志。
   * 默认值 false
   */
  debug?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxReportSceneSuccessCallbackResult {
  /**
   * 开发者上报的原始数据
   * 最低版本 2.28.1
   */
  data: Record<string, any>
}

interface WxReportSceneOption {
  /** 场景ID，在「小程序管理后台」获取 */
  sceneId: number
  /**
   * 此场景的耗时，单位 ms
   * 默认值 0
   */
  costTime?: number
  /** 自定义维度数据，key在「小程序管理后台」获取。只支持能够通过JSON.stringify序列化的对象，且序列化后长度不超过1024个字符 */
  dimension?: Record<string, any>
  /** 自定义指标数据，key在「小程序管理后台」获取。只支持能够通过JSON.stringify序列化的对象，且序列化后长度不超过1024个字符 */
  metric?: Record<string, any>
  /** 接口调用成功的回调函数 */
  success?: (res: WxReportSceneSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxReportUserBehaviorBranchAnalyticsOption {
  /** 分支ID，在「小程序管理后台」获取 */
  branchId: string
  /** 自定义维度，基础库 v2.14.0 开始支持可选 */
  branchDim?: string
  /** 事件类型，1：曝光； 2：点击 */
  eventType: number
}

interface GameLogManagerLogOption {
  /** 日志等级，用于标识日志的级别和重要性。只能是'info'、'warn'、'error'、'debug'中的一种。 */
  level: string
  /**
   * 日志标签，用于日志分类（如 登录、战斗……）。key 只能是 string 类型，且能够通过 JSON.stringify 序列化。若不传入 key 参数，上报使用默认 key 'default'。
   * 默认值 'default'
   */
  key: string
  /** 日志内容。value 可以是 string/number/boolean/array/object 类型，且能够通过 JSON.stringify 序列化。 */
  value: Record<string, any> | any[] | number | string | boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** GameLogManager 类用于管理小游戏日志。可以通过 wx.getGameLogManager 获取。 */
interface GameLogManager {
  /** 读取当前 logger 的全局 commonInfo 对象。 */
  getCommonInfo(): void
  /** 上报日志。log 方法支持在上报时传入日志等级、日志标签和日志内容。可设置上报后的回调函数。 */
  log(param?: GameLogManagerLogOption): void
  /**
   * tag 方法接受一个字符串参数，作为上报日志的 key 。同时返回 info、warn、error、debug 四个上报方法。若不传入 key 参数，上报使用默认 key 'default'。与使用 log 方法上报不同，使用 tag 返回的方法上报日志，不需要重复设置日志等级、日志标签，简化了上报操作。
   */
  tag(key: string): void
  /**
   * 该方法接受一个对象，并将其与当前logger的全局 commonInfo 对象进行合并。合并操作仅限于第一层属性，嵌套的属性将保持不变。如果合并的对象中存在与当前 commonInfo 相同的属性，则新属性将覆盖旧属性。
   */
  updateCommonInfo(newCommonInfo?: Record<string, any>): void
}

interface MiniReportManagerReportOption {
  /** 关卡事件 ID，在 小游戏管理后台->统计-> 收入诊断调优->分析调优->事件上报中配置 */
  eventID: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** MiniReportManager 类用于管理小游戏日志。可以通过 wx.getMiniReportManager 获取。 */
interface MiniReportManager {
  /**
   * 上报关卡日志。report 方法支持在上报时传入关卡事件 ID、关卡 ID、关卡名称、关卡行为、关卡结果、关卡耗时、关卡道具、关卡广告、关卡分享。可设置上报后的回调函数。
   */
  report(param?: MiniReportManagerReportOption): void
}

interface ScenePerformanceManagerSetDataOption {
  /** 场景 ID（一级维度），标识当前所处的大场景。 */
  sceneId: number
  /** 场景附加信息（二级维度），用于在同一场景内做更细粒度的筛选。会与 `commonInfo` 合并后一起上报，字段同名时覆盖 `commonInfo`。 */
  sceneData?: Record<string, any>
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** ScenePerformanceManager 类用于管理小游戏运行性能数据上报。可以通过 wx.getScenePerformanceManager 获取。 */
interface ScenePerformanceManager {
  /** 获取通用信息（由setCommonInfo数据得到） */
  getCommonInfo(): void
  /**
   * 设置通用信息（全局维度），用于描述贯穿所有上报的固定属性（如机型档位、用户角色等）。每次执行 `setData` 时都会自动带上这些信息。多次调用 `setCommonInfo` 会整体覆盖之前设置的参数。
   */
  setCommonInfo(params?: Record<string, any>): void
  /** 上报当前所处的场景及其附加信息，用于对运行性能数据做多维度的筛选分析。 */
  setData(param?: ScenePerformanceManagerSetDataOption): void
}

interface WxDataAnalysis {
  /** 给定实验参数数组，获取对应的实验参数值。keys 不填则获取所有实验参数 */
  getExptInfoSync(keys?: string[]): Record<string, any>;
  /** 给定实验参数数组，获取对应的实验参数值 */
  getGameExptInfo(options?: WxGetGameExptInfoOption): void;
  /** 初始化并返回一个游戏日志管理器实例，用于记录和管理游戏日志。 */
  getGameLogManager(param?: WxGetGameLogManagerOption): GameLogManager;
  /** 初始化并返回一个MiniReportManager实例，用于记录和管理小游戏上报。 */
  getMiniReportManager(param?: WxGetMiniReportManagerOption): MiniReportManager;
  /**
   * 该接口专门用于协助开发者分析场景化的运行性能数据。通过上报场景 ID，在查看运行性能数据时，可以筛选场景的性能。 初始化并返回一个ScenePerformanceManager实例，用于记录和管理小游戏性能数据上报。使用前请注意阅读《运行性能场景上报分析》。
   */
  getScenePerformanceManager(param?: WxGetScenePerformanceManagerOption): ScenePerformanceManager;
  /** 事件上报 */
  reportEvent(eventId: string, data?: Record<string, any>): void;
  /**
   * 自定义业务数据监控上报接口。
   * @deprecated 从基础库 2.31.1 开始，本接口停止维护，请使用 wx.reportEvent 代替
   */
  reportMonitor(name: string, value: number): void;
  /** 用于游戏启动阶段的自定义场景上报。使用前请注意阅读相关说明。 */
  reportScene(object?: WxReportSceneOption): void;
  /** 上报场景分析，用于UI组件（一般是按钮）相关事件的上报，事件目前有曝光、点击两种，查看相关文档 */
  reportUserBehaviorBranchAnalytics(object?: WxReportUserBehaviorBranchAnalyticsOption): void;
}

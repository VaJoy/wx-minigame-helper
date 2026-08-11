// 微信小游戏 API 类型声明 — 域：worker（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCreateWorkerOption {
  /**
   * 是否使用实验worker。在iOS下，实验worker的JS运行效率比非实验worker提升数倍，如需在worker内进行重度计算的建议开启此选项。同时，实验worker存在极小概率会在系统资源紧张时被系统回收，因此建议配合 worker.onProcessKilled 事件使用，在worker被回收后可重新创建一个。
   * 默认值 false
   * 最低版本 2.13.0
   */
  useExperimentalWorker?: boolean
}

interface WorkerEnv {
  /** 文件系统中的用户目录路径 (本地路径) */
  USER_DATA_PATH: string
}

interface WorkerOnErrorListenerCallbackResult {
  /** 错误对象 */
  error: Record<string, any>
}

interface WorkerOnMessageListenerCallbackResult {
  /** 主线程/Worker 线程向当前线程发送的消息 */
  message: Record<string, any>
}

/** Worker 实例，主线程中可通过 wx.createWorker 接口获取，worker 线程中可通过全局变量 `worker` 获取。 */
interface Worker {
  /** worker内的环境变量 */
  env: WorkerEnv
  /** 获取摄像头当前帧图像，返回ArrayBuffer数据。仅限在 worker 线程中使用。 */
  getCameraFrameData(): ArrayBuffer
  /** 监听 Worker 线程错误事件。当 Worker 线程中发生脚本错误时会触发此事件。 */
  onError(listener: (res: WorkerOnErrorListenerCallbackResult) => void): void
  /** 监听主线程/Worker 线程向当前线程发送的消息的事件。 */
  onMessage(listener: (res: WorkerOnMessageListenerCallbackResult) => void): void
  /**
   * 监听 worker线程被系统回收事件（开启 useExperimentalWorker 后，当iOS系统资源紧张时，ExperimentalWorker 线程存在被系统回收的可能，开发者可监听此事件并重新创建一个worker）。仅限在主线程 worker 对象上调用。
   */
  onProcessKilled(listener: (res: any) => void): void
  /** 向主线程/Worker 线程发送的消息。 */
  postMessage(message?: Record<string, any>): void
  /** 结束当前 Worker 线程。仅限在主线程 worker 对象上调用。 */
  terminate(): void
  /**
   * 用于模拟 iOS ExperimentalWorker 线程被系统回收事件，以便于调试。接口仅在 worker 线程内可用。参考 Worker.onProcessKilled
   */
  testOnProcessKilled(): void
}

interface WxWorker {
  /** 创建一个 Worker 线程 */
  createWorker(scriptPath: string, options?: WxCreateWorkerOption): Worker;
}

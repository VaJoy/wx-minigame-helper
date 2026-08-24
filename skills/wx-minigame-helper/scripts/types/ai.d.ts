// 微信小游戏 API 类型声明 — 域：ai（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxCreateInferenceSessionOption {
  /** 模型文件路径，目前只执行后缀为.onnx格式(支持代码包路径，和本地文件系统路径） */
  model: string
  /**
   * 推理精度，有效值为 0 - 4。一般来说，使用的precisionLevel等级越低，推理速度越快，但可能会损失精度。推荐开发者在开发时，在效果满足需求时优先使用更低精度以提高推理速度，节约能耗。
   * 默认值 4
   */
  precisionLevel?: number
  /**
   * 是否生成量化模型推理
   * 默认值 false
   */
  allowQuantize?: boolean
  /**
   * 是否使用NPU推理，仅对IOS有效
   * 默认值 false
   */
  allowNPU?: boolean
  /** 输入典型分辨率 */
  typicalShape?: Record<string, any>
}

interface WxCreateVKSessionOption {
  /**
   * vision kit 版本。
   * 最低版本 2.22.0
   */
  version?: string
  /**
   * 跟踪能力配置，目前不同的跟踪能力之间是互斥的，默认使用平面跟踪能力。需要注意目前 track 中不同的跟踪配置存在互斥关系（比如 marker 跟踪配置和 OSD 跟踪配置不能同时存在），请按需配置。
   */
  track: {
    /** 平面跟踪配置 */
    plane?: {
      /** 平面跟踪配置模式 */
      mode?: number
      /**
       * 是否开启强制使用V2的模式，只有 v2 版本支持
       * 最低版本 3.6.5
       */
      force?: boolean
    }
    /**
     * marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力
     * 最低版本 2.24.5
     */
    marker?: boolean
    /**
     * OSD 跟踪配置
     * 最低版本 2.24.5
     */
    OSD?: boolean
    /**
     * 深度识别配置。用法详情指南文档。
     * 最低版本 3.0.0
     */
    depth?: {
      /** 深度识别模式 */
      mode?: number
    }
    /**
     * 人脸检测配置。用法详情指南文档。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。
     * 最低版本 2.25.0
     */
    face?: {
      /** 人脸检测模式 */
      mode?: number
    }
    /**
     * OCR检测配置。用法详情指南文档。
     * 最低版本 2.27.0
     */
    OCR?: {
      /** OCR检测模式 */
      mode?: number
    }
    /**
     * 身份证检测配置。用法详情指南文档。
     * 最低版本 3.3.0
     */
    IDCard?: {
      /** 身份证检测模式 */
      mode?: number
    }
    /**
     * 人体检测配置。用法详情指南文档。
     * 最低版本 2.28.0
     */
    body?: {
      /** 人体检测模式 */
      mode?: number
    }
    /**
     * 手势检测配置。用法详情指南文档。
     * 最低版本 2.28.0
     */
    hand?: {
      /** 手势检测模式 */
      mode?: number
    }
    /**
     * 鞋部检测配置。用法详情指南文档。
     * 最低版本 3.2.1
     */
    shoe?: {
      /** 鞋部检测模式 */
      mode?: number
    }
    /**
     * 提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。
     * 最低版本 2.28.0
     */
    threeDof?: boolean
  }
  /**
   * 绑定的 WebGLRenderingContext 对象
   * 最低版本 2.23.0
   */
  gl?: WebGLRenderingContext
}

interface WxFaceDetectSuccessCallbackResult {
  /** 脸部方框数值，对象包含 height, width, originX, originY 四个属性 (origin 为方框左上角坐标) */
  detectRect: Record<string, any>
  /** 脸部中心点横坐标，检测不到人脸则为 -1 */
  x: number
  /** 脸部中心点纵坐标，检测不到人脸则为 -1 */
  y: number
  /** 标记人脸轮廓的 106 个点位置数组，数组每个对象包含 x 和 y */
  pointArray: Record<string, any>[]
  /** 人脸置信度，取值范围 [0, 1]，数值越大置信度越高（遮挡越少） */
  confArray: Record<string, any>
  /** 整体可信度 */
  global: number
  /** 左眼可信度 */
  leftEye: number
  /** 右眼可信度 */
  rightEye: number
  /** 嘴巴可信度 */
  mouth: number
  /** 鼻子可信度 */
  nose: number
  /** 人脸角度信息，取值范围 [-1, 1]，数值越接近 0 表示越正对摄像头 */
  angleArray: Record<string, any>
  /** 仰俯角（点头） */
  pitch: number
  /** 偏航角（摇头） */
  yaw: number
  /** 翻滚角（左右倾） */
  roll: number
  /** 多人模式（enableMultiFace）下的人脸信息，每个对象包含上述其它属性 */
  faceInfo: Record<string, any>[]
}

interface WxFaceDetectOption {
  /** 图像像素点数据，每四项表示一个像素点的 RGBA */
  frameBuffer: ArrayBuffer
  /** 图像宽度 */
  width: number
  /** 图像高度 */
  height: number
  /**
   * 是否返回当前图像的人脸（106 个点）
   * 默认值 false
   */
  enablePoint?: boolean
  /**
   * 是否返回当前图像的人脸的置信度（可表示器官遮挡情况）
   * 默认值 false
   */
  enableConf?: boolean
  /**
   * 是否返回当前图像的人脸角度信息
   * 默认值 false
   */
  enableAngle?: boolean
  /**
   * 是否返回多张人脸的信息
   * 默认值 false
   */
  enableMultiFace?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: WxFaceDetectSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxGetInferenceEnvInfoSuccessCallbackResult {
  /** AI推理引擎版本 */
  ver: string
}

interface WxGetInferenceEnvInfoOption {
  /** 接口调用成功的回调函数 */
  success?: (res: WxGetInferenceEnvInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxInitFaceDetectOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface WxStopFaceDetectOption {
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 推理 Session 实例，通过wx.createInferenceSession 接口获取该实例。使用前可参考AI指南文档 */
interface InferenceSession {
  /** 销毁 InferenceSession 实例 */
  destroy(): void
  /** 取消监听模型加载失败事件 */
  offError(callback: (res: any) => void): void
  /** 取消监听模型加载完成事件 */
  offLoad(callback: (res: any) => void): void
  /** 监听模型加载失败事件 */
  onError(callback: (res: any) => void): void
  /** 监听模型加载完成事件 */
  onLoad(callback: (res: any) => void): void
  /**
   * 运行推断。需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。
   */
  run(tensors: Tensors): any
}

/** Tensor */
interface Tensor {
  /**
   * Tensor shape （Tensor 形状，例如 `[1, 3, 224, 224]` 即表示一个4唯Tensor，每个维度的长度分别为1, 3, 224, 224）
   */
  shape: number[]
  /** Tensor 值，一段 ArrayBuffer */
  data: ArrayBuffer
  /** ArrayBuffer 值的类型，合法值有 `uint8`, `int8`, `uint32`, `int32`, `float32` */
  type: string
}

/**
 * Tensors 是 key-value 形式的对象，对象的 key 会作为 input/output name，对象的 value 则是 Tensor。 Tensor 结构如下。
 */
interface Tensors {
  /** Tensor，每个 Tensor 包含 shape、data、type 字段。 */
  key: Tensor
}

interface VKBodyAnchorSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

interface VKBodyAnchorOrigin {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number
}

/** 人体 anchor */
interface VKBodyAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 识别序号 */
  detectId: number
  /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  size: VKBodyAnchorSize
  /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  origin: VKBodyAnchorOrigin
  /** 关键点的置信度 */
  confidence: number[]
  /** 关键点 */
  points: Record<string, any>[]
  /** 总体置信值 */
  score: number
}

interface VKCamera {
  /** 相机原始的Pose矩阵 */
  transform: Float32Array
  /** 视图矩阵 */
  viewMatrix: Float32Array
  /** > 基础库 2.22.0 开始支持，低版本需做兼容处理。 */
  intrinsics: Float32Array
  /** 获取投影矩阵 */
  getProjectionMatrix(near: number, far: number): Float32Array
}

interface VKDepthAnchorSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

/** depth anchor */
interface VKDepthAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  size: VKDepthAnchorSize
  /** 包含深度信息的数组 */
  depthArray: number[]
}

interface VKFaceAnchorOrigin {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number
}

interface VKFaceAnchorSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

/** 人脸 anchor */
interface VKFaceAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 识别序号 */
  detectId: number
  /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  origin: VKFaceAnchorOrigin
  /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  size: VKFaceAnchorSize
  /** 人脸 106 个关键点的坐标 */
  points: Record<string, any>[]
  /** 人脸角度信息 */
  angle: number[]
  /** 关键点的置信度 */
  confidence: number[]
}

/** vision kit 会话对象。 */
interface VKFrame {
  /** 生成时间，单位:纳秒(ns) */
  timestamp: number
  /** 相机对象 */
  camera: VKCamera
  /**
   * 获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象时必须传入 gl 参数。此接口仅建议拿来做帧分析使用，上屏请使用 getCameraTexture 来代替。
   */
  getCameraBuffer(width: number, height: number): ArrayBuffer
  /** 获取当前帧的 jpg 信息Buffer。安卓微信 8.0.49 开始支持，iOS微信 8.0.49 开始支持。 */
  getCameraJpgBuffer(width: number, height: number, quality: number): ArrayBuffer
  /** 获取当前帧纹理，目前只支持 YUV 纹理。 */
  getCameraTexture(gl: WebGLRenderingContext): void
  /** 获取每帧的深度图信息Buffer。安卓微信 8.0.38 开始支持，iOS微信 8.0.39 开始支持。 */
  getDepthBuffer(): void
  /** 获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪。 */
  getDisplayTransform(): Float32Array
  /** 获取每帧的腿部分割信息Buffer，安卓微信 8.0.43，iOS微信 8.0.43 开始支持。 */
  getLegSegmentBuffer(): void
}

interface VKHandAnchorSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

interface VKHandAnchorOrigin {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number
}

/** 手势 anchor */
interface VKHandAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 识别序号 */
  detectId: number
  /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  size: VKHandAnchorSize
  /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  origin: VKHandAnchorOrigin
  /** 关键点的置信度 */
  confidence: number[]
  /** 关键点 */
  points: Record<string, any>[]
  /** 总体置信值 */
  score: number
  /** 手势分类, 返回整数-1到18, -1表示无效手势 */
  gesture: number
}

/** marker anchor */
interface VKMarkerAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 包含位置、旋转、放缩信息的矩阵，以列为主序 */
  transform: Float32Array
  /** marker id */
  markerId: number
  /** 图片路径 */
  path: string
}

/** OCR anchor */
interface VKOCRAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 识别的文字结果 */
  text: string
}

interface VKOSDAnchorSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

interface VKOSDAnchorOrigin {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number
}

/** OSD anchor */
interface VKOSDAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** marker id */
  markerId: number
  /** 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  size: VKOSDAnchorSize
  /** 图片路径 */
  path: string
  /** 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 */
  origin: VKOSDAnchorOrigin
}

interface VKPlaneAnchorSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

/** 平面 anchor，只有 v2 版本支持 */
interface VKPlaneAnchor {
  /** 唯一标识 */
  id: number
  /** 类型 */
  type: number
  /** 包含位置、旋转、放缩信息的矩阵，以列为主序 */
  transform: Float32Array
  /** 尺寸 */
  size: VKPlaneAnchorSize
  /** 方向 */
  alignment: number
}

interface VKSessionConfig {
  /**
   * vision kit 版本。
   * 最低版本 2.22.0
   */
  version: string
  /**
   * 跟踪能力配置，目前不同的跟踪能力之间是互斥的，默认使用平面跟踪能力。需要注意目前 track 中不同的跟踪配置存在互斥关系（比如 marker 跟踪配置和 OSD 跟踪配置不能同时存在），请按需配置。
   */
  track: {
    /** 平面跟踪配置 */
    plane?: {
      /** 平面跟踪配置模式 */
      mode?: number
      /**
       * 是否开启强制使用V2的模式，只有 v2 版本支持
       * 最低版本 3.6.5
       */
      force?: boolean
    }
    /**
     * marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力
     * 最低版本 2.24.5
     */
    marker?: boolean
    /**
     * OSD 跟踪配置
     * 最低版本 2.24.5
     */
    OSD?: boolean
    /**
     * 深度识别配置。用法详情指南文档。
     * 最低版本 3.0.0
     */
    depth?: {
      /** 深度识别模式 */
      mode?: number
    }
    /**
     * 人脸检测配置。用法详情指南文档。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。
     * 最低版本 2.25.0
     */
    face?: {
      /** 人脸检测模式 */
      mode?: number
    }
    /**
     * OCR检测配置。用法详情指南文档。
     * 最低版本 2.27.0
     */
    OCR?: {
      /** OCR检测模式 */
      mode?: number
    }
    /**
     * 身份证检测配置。用法详情指南文档。
     * 最低版本 3.3.0
     */
    IDCard?: {
      /** 身份证检测模式 */
      mode?: number
    }
    /**
     * 人体检测配置。用法详情指南文档。
     * 最低版本 2.28.0
     */
    body?: {
      /** 人体检测模式 */
      mode?: number
    }
    /**
     * 手势检测配置。用法详情指南文档。
     * 最低版本 2.28.0
     */
    hand?: {
      /** 手势检测模式 */
      mode?: number
    }
    /**
     * 鞋部检测配置。用法详情指南文档。
     * 最低版本 3.2.1
     */
    shoe?: {
      /** 鞋部检测模式 */
      mode?: number
    }
    /**
     * 提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。
     * 最低版本 2.28.0
     */
    threeDof?: boolean
  }
  /**
   * 绑定的 WebGLRenderingContext 对象
   * 最低版本 2.23.0
   */
  gl: WebGLRenderingContext
}

interface VKSessionCameraSize {
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

interface VKSessionDetectBodyOption {
  /** 人脸图像像素点数据，每四项表示一个像素点的 RGBA */
  frameBuffer: ArrayBuffer
  /** 图像宽度 */
  width: number
  /** 图像高度 */
  height: number
  /**
   * 评分阈值。正常情况传入 0.8 即可。
   * 默认值 0.8
   */
  scoreThreshold?: number
  /**
   * 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果
   * 默认值 1
   */
  sourceType?: number
}

interface VKSessionDetectDepthOption {
  /** 需要识别深度的图像像素点数据，每四项表示一个像素点的 RGBA */
  frameBuffer: ArrayBuffer
  /** 图像宽度 */
  width: number
  /** 图像高度 */
  height: number
}

interface VKSessionDetectFaceOption {
  /** 人脸图像像素点数据，每四项表示一个像素点的 RGBA */
  frameBuffer: ArrayBuffer
  /** 图像宽度 */
  width: number
  /** 图像高度 */
  height: number
  /**
   * 评分阈值。正常情况传入 0.8 即可。
   * 默认值 0.8
   */
  scoreThreshold?: number
  /**
   * 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果
   * 默认值 1
   */
  sourceType?: number
  /**
   * 算法模型类型。正常情况传入 1 即可。0、1、2 分别表示小、中、大模型，模型越大识别准确率越高，但资源占用也越高。建议根据用户设备性能进行选择。
   * 默认值 1
   */
  modelModel?: number
  /**
   * 是否返回瞳孔周围点信息，默认为 false。
   * 默认值 false
   */
  pupilInfo?: boolean
}

interface VKSessionDetectHandOption {
  /** 人脸图像像素点数据，每四项表示一个像素点的 RGBA */
  frameBuffer: ArrayBuffer
  /** 图像宽度 */
  width: number
  /** 图像高度 */
  height: number
  /**
   * 评分阈值。正常情况传入 0.8 即可。
   * 默认值 0.8
   */
  scoreThreshold?: number
  /** 算法检测模式 */
  algoMode?: number
}

interface VKSessionRunOCROption {
  /** 待识别图像的像素点数据，每四项表示一个像素点的 RGBA */
  frameBuffer: ArrayBuffer
  /** 图像宽度 */
  width: number
  /** 图像高度 */
  height: number
}

interface VKSessionUpdate3DModeOption {
  /** 是否开启三维识别 */
  open3d: boolean
}

interface VKSessionUpdateMaskModeOption {
  /** 设置是否开启试鞋，返回腿部遮挡纹理 */
  useMask: boolean
}

/** vision kit 会话对象。 */
interface VKSession {
  /** 会话状态 */
  state: number
  /** 会话配置 */
  config: VKSessionConfig
  /** 相机尺寸 */
  cameraSize: VKSessionCameraSize
  /** 添加一个 marker，要求调 wx.createVKSession 时传入的 track.marker 为 true */
  addMarker(path: string): number
  /**
   * 添加一个 OSD marker（one-shot detection marker），要求调 wx.createVKSession 时传入的 track.OSD 为 true
   */
  addOSDMarker(path: string): number
  /** 取消由 requestAnimationFrame 添加到计划中的动画帧请求。 */
  cancelAnimationFrame(requestID: number): void
  /** 销毁会话。 */
  destroy(): void
  /**
   * 静态图像人体关键点检测。当 wx.createVKSession 参数传入 {track: {body: {mode: 2} } } 时可用。用法详情指南文档。
   */
  detectBody(object?: VKSessionDetectBodyOption): void
  /** 深度识别。当 wx.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。用法详情指南文档。 */
  detectDepth(object?: VKSessionDetectDepthOption): void
  /**
   * 静态图像人脸关键点检测。当 wx.createVKSession 参数传入 {track: {face: {mode: 2} } } 时可用。用法详情指南文档。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。
   */
  detectFace(object?: VKSessionDetectFaceOption): void
  /**
   * 静态图像手势关键点检测。当 wx.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。用法详情指南文档。
   */
  detectHand(object?: VKSessionDetectHandOption): void
  /** 获取所有 marker，要求调 wx.createVKSession 时传入的 track.marker 为 true */
  getAllMarker(): Record<string, any>[]
  /** 获取所有 OSD marker，要求调 wx.createVKSession 时传入的 track.OSD 为 true */
  getAllOSDMarker(): Record<string, any>[]
  /**
   * 获取帧对象，每调用一次都会触发一次帧分析过程。目前 VKSession 相机的最大帧数是 30 fps，因此调用 getVKFrame 的频率也可以限制在 30 fps，以减少渲染开销。
   */
  getVKFrame(width: number, height: number): VKFrame
  /**
   * 触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。如果需要重新识别其他平面，可以在调用此方法时将 reset 参数置为 true。
   */
  hitTest(x: number, y: number, reset?: Record<string, any>): Record<string, any>[]
  /** 取消监听会话事件。 */
  off(eventName: string, fn: (res: any) => void): void
  /** 监听会话事件。 */
  on(eventName: string, fn: (res: any) => void): void
  /** 删除一个 marker，要求调 wx.createVKSession 时传入的 track.marker 为 true */
  removeMarker(markerId: number): void
  /** 删除一个 OSD marker，要求调 wx.createVKSession 时传入的 track.OSD 为 true */
  removeOSDMarker(markerId: number): void
  /** 在下次进行重绘时执行。 */
  requestAnimationFrame(callback: (res: any) => void): number
  /** 静态图像OCR检测。当 wx.createVKSession 参数传入 {track: {OCR: {mode: 2} } } 时可用。用法详情指南文档。 */
  runOCR(object?: VKSessionRunOCROption): void
  /** 更新 深度遮挡 Occ范围，要求调 wx.createVKSession 时传入 {track: {depth: {mode: 2} } } */
  setDepthOccRange(threshold: number): void
  /** 开启会话。 */
  start(callback: (res: any) => void): void
  /** 停止会话。 */
  stop(): void
  /** 更新三维识别相关配置，要求调 wx.createVKSession 时使用 face / hand / body。 */
  update3DMode(object?: VKSessionUpdate3DModeOption): void
  /** 设置裁剪相关配置，要求调 wx.createVKSession 时使用 shoe。 */
  updateMaskMode(object?: VKSessionUpdateMaskModeOption): void
  /** 更新 OSD 识别精确度，要求调 wx.createVKSession 时传入的 track.OSD 为 true */
  updateOSDThreshold(threshold: number): void
}

interface WxAi {
  /** 创建 AI 推理 Session。使用前可参考AI指南文档 */
  createInferenceSession(object?: WxCreateInferenceSessionOption): InferenceSession;
  /** 创建 vision kit 会话对象。详见指南 */
  createVKSession(object?: WxCreateVKSessionOption): VKSession;
  /**
   * 人脸检测，使用前需要通过 wx.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据。本接口不再维护，请使用 wx.createVKSession 接口代替。详情参考人脸检测指南文档
   * @deprecated 该接口已停止维护，推荐使用 wx.createVKSession 代替
   */
  faceDetect(object?: WxFaceDetectOption): void;
  /** 获取通用AI推理引擎版本。使用前可参考AI指南文档 */
  getInferenceEnvInfo(object?: WxGetInferenceEnvInfoOption): void;
  /**
   * 初始化人脸检测。本接口不再维护，请使用 wx.createVKSession 接口代替。详情参考人脸检测指南文档
   * @deprecated 该接口已停止维护，推荐使用 wx.createVKSession 代替
   */
  initFaceDetect(object?: WxInitFaceDetectOption): void;
  /** 判断支持版本 */
  isVKSupport(version: string): boolean;
  /**
   * 停止人脸检测。本接口不再维护，请使用 wx.createVKSession 接口代替。详情参考人脸检测指南文档
   * @deprecated 该接口已停止维护，推荐使用 wx.createVKSession 代替
   */
  stopFaceDetect(object?: WxStopFaceDetectOption): void;
}

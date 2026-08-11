// 微信小游戏 API 类型声明 — 域：render（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxGetTextLineHeightOption {
  /**
   * 字体样式
   * 默认值 normal
   */
  fontStyle?: string
  /**
   * 字重
   * 默认值 normal
   */
  fontWeight?: string
  /**
   * 字号
   * 默认值 16
   */
  fontSize?: number
  /** 字体名称 */
  fontFamily: string
  /** 文本的内容 */
  text: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface CanvasGetContextOption {
  /**
   * 表示是否抗锯齿
   * 默认值 false
   */
  antialias?: boolean
  /**
   * 表示是否绘图完成后是否保留绘图缓冲区
   * 默认值 false
   */
  preserveDrawingBuffer?: boolean
  /**
   * 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持
   * 默认值 2
   */
  antialiasSamples?: number
  /**
   * 是否开启透明通道，仅当 contextType 为 webgl 时有效。（开启后，配合wx.createVideo({underGameView: true}) 即可在video组件之上渲染主屏画布）
   * 默认值 false
   * 最低版本 2.11.0
   */
  alpha?: boolean
}

interface CanvasToTempFilePathSuccessCallbackResult {
  /** canvas 生成的临时文件路径 (本地路径) */
  tempFilePath: string
}

interface CanvasToTempFilePathOption {
  /**
   * 截取 canvas 的左上角横坐标
   * 默认值 0
   */
  x?: number
  /**
   * 截取 canvas 的左上角纵坐标
   * 默认值 0
   */
  y?: number
  /**
   * 截取 canvas 的宽度
   * 默认值 canvas 的宽度
   */
  width?: number
  /**
   * 截取 canvas 的高度
   * 默认值 canvas 的高度
   */
  height?: number
  /**
   * 目标文件的宽度，会将截取的部分拉伸或压缩至该数值
   * 默认值 canvas 的宽度
   */
  destWidth?: number
  /**
   * 目标文件的高度，会将截取的部分拉伸或压缩至该数值
   * 默认值 canvas 的高度
   */
  destHeight?: number
  /**
   * 目标文件的类型
   * 默认值 png
   */
  fileType?: string
  /**
   * jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
   * 默认值 1.0
   */
  quality?: number
  /** 接口调用成功的回调函数 */
  success?: (res: CanvasToTempFilePathSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface CanvasToTempFilePathSyncOption {
  /**
   * 截取 canvas 的左上角横坐标
   * 默认值 0
   */
  x?: number
  /**
   * 截取 canvas 的左上角纵坐标
   * 默认值 0
   */
  y?: number
  /**
   * 截取 canvas 的宽度
   * 默认值 canvas 的宽度
   */
  width?: number
  /**
   * 截取 canvas 的高度
   * 默认值 canvas 的高度
   */
  height?: number
  /**
   * 目标文件的宽度，会将截取的部分拉伸或压缩至该数值
   * 默认值 canvas 的宽度
   */
  destWidth?: number
  /**
   * 目标文件的高度，会将截取的部分拉伸或压缩至该数值
   * 默认值 canvas 的高度
   */
  destHeight?: number
  /**
   * 目标文件的类型
   * 默认值 png
   */
  fileType?: string
  /**
   * jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
   * 默认值 1.0
   */
  quality?: number
}

interface Canvas {
  /** 画布的宽度 */
  width: number
  /** 画布的高度 */
  height: number
  /** 获取画布对象的绘图上下文 */
  getContext(contextType: string, contextAttributes?: CanvasGetContextOption): RenderingContext
  /** 把画布上的绘制内容以一个 data URI 的格式返回 */
  toDataURL(): string
  /**
   * 将当前 Canvas 保存为一个临时文件。**如果使用了开放数据域，则生成后的文件仅能被用于以下接口：`wx.saveImageToPhotosAlbum`、`wx.shareAppMessage`、`wx.onShareAppMessage`、`wx.previewImage`、`wx.previewMedia`、`wx.onShareTimeline`、`wx.showShareImageMenu`**
   */
  toTempFilePath(object?: CanvasToTempFilePathOption): void
  /** Canvas.toTempFilePath 的同步版本 */
  toTempFilePathSync(object?: CanvasToTempFilePathSyncOption): string
}

interface Image {
  /** 图片的 URL */
  src: string
  /** 图片的真实宽度 */
  width: number
  /** 图片的真实高度 */
  height: number
  /** 图片加载完成后触发的回调函数 */
  onload: (...args: any[]) => void
  /** 图片加载发生错误后触发的回调函数 */
  onerror: (...args: any[]) => void
}

/** ImageData 对象。用于动态创建一个图片对象。 */
interface ImageData {
  /** 使用像素描述 ImageData 的实际宽度 */
  width: number
  /** 使用像素描述 ImageData 的实际高度 */
  height: number
  /** 一维数组，包含以 RGBA 顺序的数据，数据使用 0 至 255（包含）的整数表示 */
  data: Uint8ClampedArray
}

/**
 * Canvas 2D API 的接口 Path2D 用来声明路径，此路径稍后会被 CanvasRenderingContext2D 对象使用。允许你在 canvas 中根据需要创建可以保留并重用的路径。
 */
interface Path2D {
}

/** 画布对象的绘图上下文。 */
interface RenderingContext {
}

interface WebGLRenderingContext {
  /**
   * 将一个 Canvas 对应的 Texture 绑定到 WebGL 上下文。
   * @deprecated 从基础库 3.13.0 开始，本接口停止维护
   */
  wxBindCanvasTexture(texture: number, canvas: Canvas): void
}

/** 取消由 requestAnimationFrame 添加到计划中的动画帧请求 */
interface cancelAnimationFrame {
}

/** 在下次进行重绘时执行。 */
interface requestAnimationFrame {
}

interface WxRender {
  /** 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 */
  createCanvas(): Canvas;
  /** 创建一个图片对象 */
  createImage(): Image;
  /** 这里有两种使用方法, 一种是指定ImageData的宽和高, 另外一种使用已有的ImageData的图像二进制数据，来构建新的对象。 */
  createImageData(width: number, height: number, data: Uint8ClampedArray): ImageData;
  /** 创建一个 Path2D 路径对象 */
  createPath2D(): Path2D;
  /** 解除锁定鼠标指针。此接口仅在 Windows、Mac 端支持。 */
  exitPointerLock(): void;
  /** 获取 WebGPU 的 GPU 对象，等价于 Web 端的 navigator.gpu。仅 Android 平台支持。 */
  getGPU(): any;
  /** 获取一行文本的行高 */
  getTextLineHeight(object?: WxGetTextLineHeightOption): number;
  /** 检查鼠标指针是否被锁定。此接口仅在 Windows、Mac 端支持。 */
  isPointerLocked(): boolean;
  /** 加载自定义字体文件 */
  loadFont(path: string): string;
  /**
   * 锁定鼠标指针。锁定指针后，鼠标会被隐藏，可以通过 wx.touchMove 事件获取鼠标偏移量。 **此接口仅在 Windows、Mac 端支持，且必须在用户进行操作后才可调用。**
   */
  requestPointerLock(): void;
  /** 加载自定义光标，仅支持 PC 平台 */
  setCursor(path: string, x: number, y: number): boolean;
  /** 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。 */
  setPreferredFramesPerSecond(fps: number): void;
}

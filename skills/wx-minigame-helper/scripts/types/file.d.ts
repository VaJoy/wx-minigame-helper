// 微信小游戏 API 类型声明 — 域：file（自动生成，请勿手改）

interface ErrnoCallbackResult {
  /** 错误信息 */
  errMsg: string
  /** 错误码 */
  errno: number
}

interface WxSaveFileToDiskOption {
  /** 待保存文件路径 */
  filePath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

/** 每个 FileStats 对象包含 path 和 Stats */
interface FileStats {
  /** 文件/目录路径 */
  path: string
  /** Stats 对象，即描述文件状态的对象 */
  stats: Stats
}

interface FileSystemManagerAccessOption {
  /** 要判断是否存在的文件/目录路径 (本地路径) */
  path: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerAppendFileOption {
  /** 要追加内容的文件路径 (本地路径) */
  filePath: string
  /** 要追加的文本或二进制数据 */
  data: string | ArrayBuffer
  /**
   * 指定写入文件的字符编码
   * 默认值 utf8
   */
  encoding?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerCloseOption {
  /** 需要被关闭的文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerCloseSyncOption {
  /** 需要被关闭的文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
}

interface FileSystemManagerCopyFileOption {
  /** 源文件路径，支持本地路径 */
  srcPath: string
  /** 目标文件路径，支持本地路径 */
  destPath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerFstatSuccessCallbackResult {
  /** Stats 对象，包含了文件的状态信息 */
  stats: Stats
}

interface FileSystemManagerFstatOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerFstatSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerFstatSyncOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
}

interface FileSystemManagerFtruncateOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /**
   * 截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）
   */
  length: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerFtruncateSyncOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /**
   * 截断位置，默认0。如果 length 小于文件长度（单位：字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）
   */
  length: number
}

interface FileSystemManagerGetFileInfoSuccessCallbackResult {
  /** 文件大小，以字节为单位 */
  size: number
  /** 按照传入的 digestAlgorithm 计算得出的的文件摘要 */
  digest: string
}

interface FileSystemManagerGetFileInfoOption {
  /** 要读取的文件路径 (本地路径) */
  filePath: string
  /**
   * 计算文件摘要的算法
   * 默认值 md5
   */
  digestAlgorithm?: string
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerGetFileInfoSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerGetSavedFileListSuccessCallbackResult {
  /** 文件数组 */
  fileList: Record<string, any>[]
  /** 文件路径 (本地路径) */
  filePath: string
  /** 本地文件大小，以字节为单位 */
  size: number
  /** 文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
  createTime: number
}

interface FileSystemManagerGetSavedFileListOption {
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerGetSavedFileListSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerMkdirOption {
  /** 创建的目录路径 (本地路径) */
  dirPath: string
  /**
   * 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
   * 默认值 false
   * 最低版本 2.3.0
   */
  recursive?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerOpenSuccessCallbackResult {
  /** 文件描述符 */
  fd: string
}

interface FileSystemManagerOpenOption {
  /** 文件路径 (本地路径) */
  filePath: string
  /**
   * 文件系统标志，默认值: 'r'
   * 默认值 r
   */
  flag?: string
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerOpenSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerOpenSyncOption {
  /** 文件路径 (本地路径) */
  filePath: string
  /**
   * 文件系统标志，默认值: 'r'
   * 默认值 r
   */
  flag?: string
}

interface FileSystemManagerReadSuccessCallbackResult {
  /** 实际读取的字节数 */
  bytesRead: number
  /** 被写入的缓存区的对象，即接口入参的 arrayBuffer */
  arrayBuffer: ArrayBuffer
}

interface FileSystemManagerReadOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /** 数据写入的缓冲区，必须是 ArrayBuffer 实例 */
  arrayBuffer: ArrayBuffer
  /**
   * 缓冲区中的写入偏移量，默认0
   * 默认值 0
   */
  offset?: number
  /**
   * 要从文件中读取的字节数，默认0
   * 默认值 0
   */
  length?: number
  /**
   * 文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。
   */
  position?: number
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerReadSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerReadCompressedFileSuccessCallbackResult {
  /** 文件内容 */
  data: ArrayBuffer
}

interface FileSystemManagerReadCompressedFileOption {
  /** 要读取的文件的路径 (本地用户文件或代码包文件) */
  filePath: string
  /** 文件压缩类型，目前仅支持 'br'。 */
  compressionAlgorithm: string
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerReadCompressedFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerReadCompressedFileSyncOption {
  /** 要读取的文件的路径 (本地用户文件或代码包文件) */
  filePath: string
  /** 文件压缩类型，目前仅支持 'br'。 */
  compressionAlgorithm: string
}

interface FileSystemManagerReadFileSuccessCallbackResult {
  /** 文件内容 */
  data: string | ArrayBuffer
}

interface FileSystemManagerReadFileOption {
  /** 要读取的文件的路径 (本地路径) */
  filePath: string
  /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
  encoding?: string
  /**
   * 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte
   * 最低版本 2.10.0
   */
  position?: number
  /**
   * 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte
   * 最低版本 2.10.0
   */
  length?: number
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerReadFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerReadSyncOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /** 数据写入的缓冲区，必须是 ArrayBuffer 实例 */
  arrayBuffer: ArrayBuffer
  /**
   * 缓冲区中的写入偏移量，默认0
   * 默认值 0
   */
  offset?: number
  /**
   * 要从文件中读取的字节数，默认0
   * 默认值 0
   */
  length?: number
  /**
   * 文件读取的起始位置，如不传或传 null，则会从当前文件指针的位置读取。如果 position 是正整数，则文件指针位置会保持不变并从 position 读取文件。
   */
  position?: number
}

interface FileSystemManagerReadZipEntrySuccessCallbackResult {
  /**
   * 文件读取结果。res.entries 是一个对象，key是文件路径，value是一个对象 FileItem ，表示该文件的读取结果。每个 FileItem 包含 data （文件内容） 和 errMsg （错误信息） 属性。
   */
  entries: Record<string, any>
  /** 文件路径 */
  path: Record<string, any>
  /** 文件内容 */
  data: string | ArrayBuffer
  /** 错误信息 */
  errMsg: string
}

interface FileSystemManagerReadZipEntryOption {
  /** 要读取的压缩包的路径 (本地路径) */
  filePath: string
  /**
   * 统一指定读取文件的字符编码，只在 entries 值为"all"时有效。如果 entries 值为"all"且不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容
   */
  encoding?: string
  /** 压缩包内文件路径 */
  entries: Array<{
    /** 压缩包内文件路径 */
    path: string
    /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding?: string
    /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
    position?: number
    /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
    length?: number
  }> | 'all'
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerReadZipEntrySuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerReaddirSuccessCallbackResult {
  /** 指定目录下的文件名数组。 */
  files: string[]
}

interface FileSystemManagerReaddirOption {
  /** 要读取的目录路径 (本地路径) */
  dirPath: string
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerReaddirSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerRemoveSavedFileOption {
  /** 需要删除的文件路径 (本地路径) */
  filePath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerRenameOption {
  /** 源文件路径，支持本地路径 */
  oldPath: string
  /** 新文件路径，支持本地路径 */
  newPath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerRmdirOption {
  /** 要删除的目录路径 (本地路径) */
  dirPath: string
  /**
   * 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
   * 默认值 false
   * 最低版本 2.3.0
   */
  recursive?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerSaveFileSuccessCallbackResult {
  /** 存储后的文件路径 (本地路径) */
  savedFilePath: string
}

interface FileSystemManagerSaveFileOption {
  /** 临时存储文件路径 (本地路径) */
  tempFilePath: string
  /** 要存储的文件路径 (本地路径) */
  filePath?: string
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerSaveFileSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerStatSuccessCallbackResult {
  /**
   * 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Array，数组的每一项是一个对象，每个对象包含 path 和 stats。
   */
  stats: Stats | FileStats[]
}

interface FileSystemManagerStatOption {
  /** 文件/目录路径 (本地路径) */
  path: string
  /**
   * 是否递归获取目录下的每个文件的 Stats 信息
   * 默认值 false
   * 最低版本 2.3.0
   */
  recursive?: boolean
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerStatSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerTruncateOption {
  /** 要截断的文件路径 (本地路径) */
  filePath: string
  /**
   * 截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）
   * 默认值 0
   */
  length?: number
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerTruncateSyncOption {
  /** 要截断的文件路径 (本地路径) */
  filePath: string
  /**
   * 截断位置，默认0。如果 length 小于文件长度（字节），则只有前面 length 个字节会保留在文件中，其余内容会被删除；如果 length 大于文件长度，则会对其进行扩展，并且扩展部分将填充空字节（'\0'）
   * 默认值 0
   */
  length?: number
}

interface FileSystemManagerUnlinkOption {
  /** 要删除的文件路径 (本地路径) */
  filePath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerUnzipOption {
  /** 源文件路径，支持本地路径, 只可以是 zip 压缩文件 */
  zipFilePath: string
  /** 目标目录路径, 支持本地路径 */
  targetPath: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerWriteSuccessCallbackResult {
  /** 实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同） */
  bytesWritten: number
}

interface FileSystemManagerWriteOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /** 写入的内容，类型为 String 或 ArrayBuffer */
  data: string | ArrayBuffer
  /**
   * 只在 data 类型是 ArrayBuffer 时有效，决定 ArrayBuffer 中要被写入的部位，即 ArrayBuffer 中的索引，默认0
   * 默认值 0
   */
  offset?: number
  /** 只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 ArrayBuffer 从0开始偏移 offset 个字节后剩余的字节数 */
  length?: number
  /**
   * 只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8
   * 默认值 utf8
   */
  encoding?: string
  /** 指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。 */
  position?: number
  /** 接口调用成功的回调函数 */
  success?: (res: FileSystemManagerWriteSuccessCallbackResult) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerWriteFileOption {
  /** 要写入的文件路径 (本地路径) */
  filePath: string
  /** 要写入的文本或二进制数据 */
  data: string | ArrayBuffer
  /**
   * 指定写入文件的字符编码
   * 默认值 utf8
   */
  encoding?: string
  /** 接口调用成功的回调函数 */
  success?: (res: any) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: ErrnoCallbackResult) => void
  /** 接口调用结束的回调函数（成功、失败都会执行） */
  complete?: (res: any) => void
}

interface FileSystemManagerWriteSyncOption {
  /** 文件描述符。fd 通过 FileSystemManager.open 或 FileSystemManager.openSync 接口获得 */
  fd: string
  /** 写入的内容，类型为 String 或 ArrayBuffer */
  data: string | ArrayBuffer
  /**
   * 只在 data 类型是 ArrayBuffer 时有效，决定 ArrayBuffer 中要被写入的部位，即 ArrayBuffer 中的索引，默认0
   * 默认值 0
   */
  offset?: number
  /** 只在 data 类型是 ArrayBuffer 时有效，指定要写入的字节数，默认为 ArrayBuffer 从0开始偏移 offset 个字节后剩余的字节数 */
  length?: number
  /**
   * 只在 data 类型是 String 时有效，指定写入文件的字符编码，默认为 utf8
   * 默认值 utf8
   */
  encoding?: string
  /** 指定文件开头的偏移量，即数据要被写入的位置。当 position 不传或者传入非 Number 类型的值时，数据会被写入当前指针所在位置。 */
  position?: number
}

/** 文件管理器，可通过 wx.getFileSystemManager 获取。 */
interface FileSystemManager {
  /** 判断文件/目录是否存在 */
  access(object?: FileSystemManagerAccessOption): void
  /** FileSystemManager.access 的同步版本 */
  accessSync(path: string): void
  /** 在文件结尾追加内容 */
  appendFile(object?: FileSystemManagerAppendFileOption): void
  /** FileSystemManager.appendFile 的同步版本 */
  appendFileSync(filePath: string, data: any, encoding: string): void
  /** 关闭文件 */
  close(object?: FileSystemManagerCloseOption): void
  /** 同步关闭文件 */
  closeSync(object?: FileSystemManagerCloseSyncOption): undefined
  /** 复制文件 */
  copyFile(object?: FileSystemManagerCopyFileOption): void
  /** FileSystemManager.copyFile 的同步版本 */
  copyFileSync(srcPath: string, destPath: string): void
  /** 获取文件的状态信息 */
  fstat(object?: FileSystemManagerFstatOption): void
  /** 同步获取文件的状态信息 */
  fstatSync(object?: FileSystemManagerFstatSyncOption): Stats
  /** 对文件内容进行截断操作 */
  ftruncate(object?: FileSystemManagerFtruncateOption): void
  /** 对文件内容进行截断操作 */
  ftruncateSync(object?: FileSystemManagerFtruncateSyncOption): undefined
  /** 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 */
  getFileInfo(object?: FileSystemManagerGetFileInfoOption): void
  /** 获取该小程序下已保存的本地缓存文件列表 */
  getSavedFileList(object?: FileSystemManagerGetSavedFileListOption): void
  /** 创建目录 */
  mkdir(object?: FileSystemManagerMkdirOption): void
  /** FileSystemManager.mkdir 的同步版本 */
  mkdirSync(dirPath: string, recursive: boolean): void
  /** 打开文件，返回文件描述符 */
  open(object?: FileSystemManagerOpenOption): void
  /** 同步打开文件，返回文件描述符 */
  openSync(object?: FileSystemManagerOpenSyncOption): string
  /** 读文件 */
  read(object?: FileSystemManagerReadOption): void
  /** 读取指定压缩类型的本地文件内容 */
  readCompressedFile(object?: FileSystemManagerReadCompressedFileOption): void
  /** 同步读取指定压缩类型的本地文件内容 */
  readCompressedFileSync(object?: FileSystemManagerReadCompressedFileSyncOption): ArrayBuffer
  /** 读取本地文件内容。单个文件大小上限为100M。 */
  readFile(object?: FileSystemManagerReadFileOption): void
  /** FileSystemManager.readFile 的同步版本 */
  readFileSync(filePath: string, encoding: string, position: number, length: number): any
  /** 读文件 */
  readSync(object?: FileSystemManagerReadSyncOption): ReadResult
  /** 读取压缩包内的文件 */
  readZipEntry(object?: FileSystemManagerReadZipEntryOption): void
  /** 读取目录内文件列表 */
  readdir(object?: FileSystemManagerReaddirOption): void
  /** FileSystemManager.readdir 的同步版本 */
  readdirSync(dirPath: string): string[]
  /** 删除该小程序下已保存的本地缓存文件 */
  removeSavedFile(object?: FileSystemManagerRemoveSavedFileOption): void
  /** 重命名文件。可以把文件从 oldPath 移动到 newPath */
  rename(object?: FileSystemManagerRenameOption): void
  /** FileSystemManager.rename 的同步版本 */
  renameSync(oldPath: string, newPath: string): void
  /** 删除目录 */
  rmdir(object?: FileSystemManagerRmdirOption): void
  /** FileSystemManager.rmdir 的同步版本 */
  rmdirSync(dirPath: string, recursive: boolean): void
  /** 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 */
  saveFile(object?: FileSystemManagerSaveFileOption): void
  /** FileSystemManager.saveFile 的同步版本 */
  saveFileSync(tempFilePath: string, filePath: string): string
  /** 获取文件 Stats 对象 */
  stat(object?: FileSystemManagerStatOption): void
  /** FileSystemManager.stat 的同步版本 */
  statSync(path: string, recursive: boolean): any
  /** 对文件内容进行截断操作 */
  truncate(object?: FileSystemManagerTruncateOption): void
  /** 对文件内容进行截断操作 (truncate 的同步版本) */
  truncateSync(object?: FileSystemManagerTruncateSyncOption): undefined
  /** 删除文件 */
  unlink(object?: FileSystemManagerUnlinkOption): void
  /** FileSystemManager.unlink 的同步版本 */
  unlinkSync(filePath: string): void
  /** 解压文件 */
  unzip(object?: FileSystemManagerUnzipOption): void
  /** 写入文件 */
  write(object?: FileSystemManagerWriteOption): void
  /** 写文件 */
  writeFile(object?: FileSystemManagerWriteFileOption): void
  /** FileSystemManager.writeFile 的同步版本 */
  writeFileSync(filePath: string, data: any, encoding: string): void
  /** 同步写入文件 */
  writeSync(object?: FileSystemManagerWriteSyncOption): WriteResult
}

/** 文件读取结果。 通过 FileSystemManager.readSync 接口返回 */
interface ReadResult {
  /** 实际读取的字节数 */
  bytesRead: number
  /** 被写入的缓存区的对象，即接口入参的 arrayBuffer */
  arrayBuffer: ArrayBuffer
}

/** 描述文件状态的对象 */
interface Stats {
  /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
  mode: number
  /** 文件大小，单位：B，对应 POSIX stat.st_size */
  size: number
  /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
  lastAccessedTime: number
  /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
  lastModifiedTime: number
  /** 判断当前文件是否一个目录 */
  isDirectory(): boolean
  /** 判断当前文件是否一个普通文件 */
  isFile(): boolean
}

/** 文件写入结果。 通过 FileSystemManager.writeSync 接口返回 */
interface WriteResult {
  /** 实际被写入到文件中的字节数（注意，被写入的字节数不一定与被写入的字符串字符数相同） */
  bytesWritten: number
}

interface WxFile {
  /** 获取全局唯一的文件管理器 */
  getFileSystemManager(): FileSystemManager;
  /** 保存文件系统的文件到用户磁盘，仅在 PC 端支持 */
  saveFileToDisk(object?: WxSaveFileToDiskOption): void;
}

---
title: "undefined FileSystemManager.closeSync(Object object)"
type: api
category: api/file
api: "FileSystemManager.closeSync"
source: https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.closeSync.html
---

# undefined FileSystemManager.closeSync(Object object)

> 基础库 2.16.1 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

同步关闭文件

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
fd | string |  | 是 | 需要被关闭的文件描述符。fd 通过 [FileSystemManager.open](<FileSystemManager.open.md>) 或 [FileSystemManager.openSync](<FileSystemManager.openSync.md>) 接口获得  
  
## 返回值

### undefined

## 错误

错误码 | 错误信息 | 说明  
---|---|---  
1300001 | operation not permitted | 操作不被允许（例如，filePath 预期传入一个文件而实际传入一个目录）  
1300002 | no such file or directory ${path} | 文件/目录不存在，或者目标文件路径的上层目录不存在  
1300005 | Input/output error | 输入输出流不可用  
1300009 | bad file descriptor | 无效的文件描述符  
1300013 | permission denied | 权限错误，文件是只读或只写  
1300014 | Path permission denied | 传入的路径没有权限  
1300020 | not a directory | dirPath 指定路径不是目录，常见于指定的写入路径的上级路径为一个文件的情况  
1300021 | Is a directory | 指定路径是一个目录  
1300022 | Invalid argument | 无效参数，可以检查length或offset是否越界  
1300036 | File name too long | 文件名过长  
1300066 | directory not empty | 目录不为空  
1300201 | system error | 系统接口调用失败  
1300202 | the maximum size of the file storage limit is exceeded | 存储空间不足，或文件大小超出上限（上限100M）  
1300203 | base64 encode error | 字符编码转换失败（例如 base64 格式错误）  
1300300 | sdcard not mounted | android sdcard 挂载失败  
1300301 | unable to open as fileType | 无法以fileType打开文件  
1301000 | permission denied, cannot access file path | 目标路径无访问权限（usr目录）  
1301002 | data to write is empty | 写入数据为空  
1301003 | illegal operation on a directory | 不可对目录进行此操作（例如，指定的 filePath 是一个已经存在的目录）  
1301004 | illegal operation on a package directory | 不可对代码包目录进行此操作  
1301005 | file already exists ${dirPath} | 已有同名文件或目录  
1301006 | value of length is out of range | 传入的 length 不合法  
1301007 | value of offset is out of range | 传入的 offset 不合法  
1301009 | value of position is out of range | position值越界  
1301100 | store directory is empty | store目录为空  
1301102 | unzip open file fail | 压缩文件打开失败  
1301103 | unzip entry fail | 解压单个文件失败  
1301104 | unzip fail | 解压失败  
1301111 | brotli decompress fail | brotli解压失败（例如，指定的 compressionAlgorithm 与文件实际压缩格式不符）  
1301112 | tempFilePath file not exist | 指定的 tempFilePath 找不到文件  
1302001 | fail permission denied | 指定的 fd 路径没有读权限/没有写权限  
1302002 | excced max concurrent fd limit | fd数量已达上限  
1302003 | invalid flag | 无效的flag  
1302004 | permission denied when open using flag | 无法使用flag标志打开文件  
1302005 | array buffer does not exist | 未传入arrayBuffer  
1302100 | array buffer is readonly | arrayBuffer只读  
  
## 示例代码
    
    
    const fs = wx.getFileSystemManager()
    const fd = fs.openSync({
      filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
      flag: 'a+'
    })
    
    // 关闭文件
    fs.closeSync({fd: fd})

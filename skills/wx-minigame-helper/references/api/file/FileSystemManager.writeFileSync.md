---
title: "FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)"
type: api
category: api/file
api: "FileSystemManager.writeFileSync"
source: https://developers.weixin.qq.com/minigame/dev/api/file/FileSystemManager.writeFileSync.html
---

# FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

[FileSystemManager.writeFile](<FileSystemManager.writeFile.md>) 的同步版本

## 参数

### string filePath

要写入的文件路径 (本地路径)

### string|ArrayBuffer data

要写入的文本或二进制数据

### string encoding

指定写入文件的字符编码

**encoding 的合法值**

值 | 说明 | 最低版本  
---|---|---  
ascii |  |   
base64 | （注意，选择 base64 编码，data 只需要传 base64 内容本身，不要传 Data URI 前缀，否则会报 fail base64 encode error 错误。例如，传 aGVsbG8= 而不是传 data:image/png;base64,aGVsbG8= ） |   
binary |  |   
hex |  |   
ucs2 | 以小端序读取 |   
ucs-2 | 以小端序读取 |   
utf16le | 以小端序读取 |   
utf-16le | 以小端序读取 |   
utf-8 |  |   
utf8 |  |   
latin1 |  |   
  
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
    fs.writeFile({
      filePath: `${wx.env.USER_DATA_PATH}/hello.txt`,
      data: 'some text or arrayBuffer',
      encoding: 'utf8',
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.error(res)
      }
    })
    
    // 同步接口
    try {
      const res = fs.writeFileSync(
        `${wx.env.USER_DATA_PATH}/hello.txt`,
        'some text or arrayBuffer',
        'utf8'
      )
      console.log(res)
    } catch(e) {
      console.error(e)
    }

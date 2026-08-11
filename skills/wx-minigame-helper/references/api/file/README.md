# 文件系统

> 路径：`api/file/`　|　本目录 54 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [FileStats](FileStats.md) |  |
| [FileSystemManager.access(Object object)](FileSystemManager.access.md) | 判断文件/目录是否存在 |
| [FileSystemManager.accessSync(string path)](FileSystemManager.accessSync.md) | FileSystemManager.access 的同步版本 |
| [FileSystemManager.appendFile(Object object)](FileSystemManager.appendFile.md) | 在文件结尾追加内容 |
| [FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)](FileSystemManager.appendFileSync.md) | FileSystemManager.appendFile 的同步版本 |
| [FileSystemManager.close(Object object)](FileSystemManager.close.md) | 关闭文件 |
| [undefined FileSystemManager.closeSync(Object object)](FileSystemManager.closeSync.md) | 同步关闭文件 |
| [FileSystemManager.copyFile(Object object)](FileSystemManager.copyFile.md) | 复制文件 |
| [FileSystemManager.copyFileSync(string srcPath, string destPath)](FileSystemManager.copyFileSync.md) | FileSystemManager.copyFile 的同步版本 |
| [FileSystemManager.fstat(Object object)](FileSystemManager.fstat.md) | 获取文件的状态信息 |
| [Stats FileSystemManager.fstatSync(Object object)](FileSystemManager.fstatSync.md) | 同步获取文件的状态信息 |
| [FileSystemManager.ftruncate(Object object)](FileSystemManager.ftruncate.md) | 对文件内容进行截断操作 |
| [undefined FileSystemManager.ftruncateSync(Object object)](FileSystemManager.ftruncateSync.md) | 对文件内容进行截断操作 |
| [FileSystemManager.getFileInfo(Object object)](FileSystemManager.getFileInfo.md) | 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 |
| [FileSystemManager.getSavedFileList(Object object)](FileSystemManager.getSavedFileList.md) | 获取该小程序下已保存的本地缓存文件列表 |
| [FileSystemManager](FileSystemManager.md) |  |
| [FileSystemManager.mkdir(Object object)](FileSystemManager.mkdir.md) | 创建目录 |
| [FileSystemManager.mkdirSync(string dirPath, boolean recursive)](FileSystemManager.mkdirSync.md) | FileSystemManager.mkdir 的同步版本 |
| [FileSystemManager.open(Object object)](FileSystemManager.open.md) | 打开文件，返回文件描述符 |
| [string FileSystemManager.openSync(Object object)](FileSystemManager.openSync.md) | 同步打开文件，返回文件描述符 |
| [FileSystemManager.read(Object object)](FileSystemManager.read.md) | 读文件 |
| [FileSystemManager.readCompressedFile(Object object)](FileSystemManager.readCompressedFile.md) | 读取指定压缩类型的本地文件内容 |
| [ArrayBuffer FileSystemManager.readCompressedFileSync(Object object)](FileSystemManager.readCompressedFileSync.md) | 同步读取指定压缩类型的本地文件内容 |
| [FileSystemManager.readFile(Object object)](FileSystemManager.readFile.md) | 读取本地文件内容。单个文件大小上限为100M。 |
| [string|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding, number position, number length)](FileSystemManager.readFileSync.md) | FileSystemManager.readFile 的同步版本 |
| [ReadResult FileSystemManager.readSync(Object object)](FileSystemManager.readSync.md) | 读文件 |
| [FileSystemManager.readZipEntry(Object object)](FileSystemManager.readZipEntry.md) | 读取压缩包内的文件 |
| [FileSystemManager.readdir(Object object)](FileSystemManager.readdir.md) | 读取目录内文件列表 |
| [Array.<string> FileSystemManager.readdirSync(string dirPath)](FileSystemManager.readdirSync.md) | FileSystemManager.readdir 的同步版本 |
| [FileSystemManager.removeSavedFile(Object object)](FileSystemManager.removeSavedFile.md) | 删除该小程序下已保存的本地缓存文件 |
| [FileSystemManager.rename(Object object)](FileSystemManager.rename.md) | 重命名文件。可以把文件从 oldPath 移动到 newPath |
| [FileSystemManager.renameSync(string oldPath, string newPath)](FileSystemManager.renameSync.md) | FileSystemManager.rename 的同步版本 |
| [FileSystemManager.rmdir(Object object)](FileSystemManager.rmdir.md) | 删除目录 |
| [FileSystemManager.rmdirSync(string dirPath, boolean recursive)](FileSystemManager.rmdirSync.md) | FileSystemManager.rmdir 的同步版本 |
| [FileSystemManager.saveFile(Object object)](FileSystemManager.saveFile.md) | 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。 |
| [string FileSystemManager.saveFileSync(string tempFilePath, string filePath)](FileSystemManager.saveFileSync.md) | FileSystemManager.saveFile 的同步版本 |
| [FileSystemManager.stat(Object object)](FileSystemManager.stat.md) | 获取文件 Stats 对象 |
| [Stats|Array.<FileStats> FileSystemManager.statSync(string path, boolean recursive)](FileSystemManager.statSync.md) | FileSystemManager.stat 的同步版本 |
| [FileSystemManager.truncate(Object object)](FileSystemManager.truncate.md) | 对文件内容进行截断操作 |
| [undefined FileSystemManager.truncateSync(Object object)](FileSystemManager.truncateSync.md) | 对文件内容进行截断操作 (truncate 的同步版本) |
| [FileSystemManager.unlink(Object object)](FileSystemManager.unlink.md) | 删除文件 |
| [FileSystemManager.unlinkSync(string filePath)](FileSystemManager.unlinkSync.md) | FileSystemManager.unlink 的同步版本 |
| [FileSystemManager.unzip(Object object)](FileSystemManager.unzip.md) | 解压文件 |
| [FileSystemManager.write(Object object)](FileSystemManager.write.md) | 写入文件 |
| [FileSystemManager.writeFile(Object object)](FileSystemManager.writeFile.md) | 写文件 |
| [FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)](FileSystemManager.writeFileSync.md) | FileSystemManager.writeFile 的同步版本 |
| [WriteResult FileSystemManager.writeSync(Object object)](FileSystemManager.writeSync.md) | 同步写入文件 |
| [ReadResult](ReadResult.md) |  |
| [boolean Stats.isDirectory()](Stats.isDirectory.md) | 判断当前文件是否一个目录 |
| [boolean Stats.isFile()](Stats.isFile.md) | 判断当前文件是否一个普通文件 |
| [Stats](Stats.md) |  |
| [WriteResult](WriteResult.md) |  |
| [FileSystemManager wx.getFileSystemManager()](wx.getFileSystemManager.md) | 获取全局唯一的文件管理器 |
| [wx.saveFileToDisk(Object object)](wx.saveFileToDisk.md) | 保存文件系统的文件到用户磁盘，仅在 PC 端支持 |

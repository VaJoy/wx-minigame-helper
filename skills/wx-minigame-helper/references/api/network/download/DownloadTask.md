---
title: "DownloadTask"
type: api
category: api/network/download
api: "DownloadTask"
source: https://developers.weixin.qq.com/minigame/dev/api/network/download/DownloadTask.html
---

# DownloadTask  
  
> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

一个可以监听下载进度变化事件，以及取消下载任务的对象

## 方法

### [DownloadTask.abort()](<DownloadTask.abort.md>)

中断下载任务

### [DownloadTask.onProgressUpdate(function listener)](<DownloadTask.onProgressUpdate.md>)

监听下载进度变化事件

### [DownloadTask.offProgressUpdate(function listener)](<DownloadTask.offProgressUpdate.md>)

移除下载进度变化事件的监听函数

### [DownloadTask.onHeadersReceived(function listener)](<DownloadTask.onHeadersReceived.md>)

监听 HTTP Response Header 事件。会比请求完成事件更早

### [DownloadTask.offHeadersReceived(function listener)](<DownloadTask.offHeadersReceived.md>)

移除 HTTP Response Header 事件的监听函数

## 示例代码
    
    
    const downloadTask = wx.downloadFile({
      url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
      success (res) {
        wx.playVoice({
          filePath: res.tempFilePath
        })
      }
    })
    
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
    
    downloadTask.abort() // 取消下载任务

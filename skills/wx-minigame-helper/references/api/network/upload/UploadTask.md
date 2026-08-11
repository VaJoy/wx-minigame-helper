---
title: "UploadTask"
type: api
category: api/network/upload
api: "UploadTask"
source: https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.html
---

# UploadTask  
  
> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

一个可以监听上传进度变化事件，以及取消上传任务的对象

## 方法

### [UploadTask.abort()](<UploadTask.abort.md>)

中断上传任务

### [UploadTask.onProgressUpdate(function listener)](<UploadTask.onProgressUpdate.md>)

监听上传进度变化事件

### [UploadTask.offProgressUpdate(function listener)](<UploadTask.offProgressUpdate.md>)

移除上传进度变化事件的监听函数

### [UploadTask.onHeadersReceived(function listener)](<UploadTask.onHeadersReceived.md>)

监听 HTTP Response Header 事件。会比请求完成事件更早

### [UploadTask.offHeadersReceived(function listener)](<UploadTask.offHeadersReceived.md>)

移除 HTTP Response Header 事件的监听函数

## 示例代码
    
    
    const uploadTask = wx.uploadFile({
      url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData:{
        'user': 'test'
      },
      success (res){
        const data = res.data
        //do something
      }
    })
    
    uploadTask.onProgressUpdate((res) => {
      console.log('上传进度', res.progress)
      console.log('已经上传的数据长度', res.totalBytesSent)
      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
    })
    
    uploadTask.abort() // 取消上传任务

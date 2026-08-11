---
title: "UploadTask.onProgressUpdate(function listener)"
type: api
category: api/network/upload
api: "UploadTask.onProgressUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/network/upload/UploadTask.onProgressUpdate.html
---

# UploadTask.onProgressUpdate(function listener)

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

监听上传进度变化事件

## 参数

### function listener

上传进度变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
progress | number | 上传进度百分比  
totalBytesSent | number | 已经上传的数据长度，单位 Bytes  
totalBytesExpectedToSend | number | 预期需要上传的数据总长度，单位 Bytes

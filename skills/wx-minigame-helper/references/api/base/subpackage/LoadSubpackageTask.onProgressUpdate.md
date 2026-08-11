---
title: "LoadSubpackageTask.onProgressUpdate(function listener)"
type: api
category: api/base/subpackage
api: "LoadSubpackageTask.onProgressUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/LoadSubpackageTask.onProgressUpdate.html
---

# LoadSubpackageTask.onProgressUpdate(function listener)

> 基础库 2.1.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听分包加载进度变化事件

## 参数

### function listener

分包加载进度变化事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
progress | number | 分包下载进度百分比  
totalBytesWritten | number | 已经下载的数据长度，单位 Bytes  
totalBytesExpectedToWrite | number | 预期需要下载的数据总长度，单位 Bytes

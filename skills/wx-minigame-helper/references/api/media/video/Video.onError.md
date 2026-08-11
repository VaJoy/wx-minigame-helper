---
title: "Video.onError(function listener)"
type: api
category: api/media/video
api: "Video.onError"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.onError.html
---

# Video.onError(function listener)

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

监听视频错误事件

## 参数

### function listener

视频错误事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误信息  
| |  合法值 | 说明  
---|---  
MEDIA_ERR_NETWORK | 当下载时发生错误  
MEDIA_ERR_DECODE | 当解码时发生错误  
MEDIA_ERR_SRC_NOT_SUPPORTED | video 的 src 属性是不支持的资源类型

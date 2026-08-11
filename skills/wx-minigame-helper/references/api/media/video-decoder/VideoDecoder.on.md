---
title: "VideoDecoder.on(string eventName, function callback)"
type: api
category: api/media/video-decoder
api: "VideoDecoder.on"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.on.html
---

# VideoDecoder.on(string eventName, function callback)

> 基础库 2.11.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行

## 参数

### string eventName

事件名

**eventName 的合法值**

值 | 说明 | 最低版本  
---|---|---  
start | 开始事件。返回 {width, height} |   
stop | 结束事件。 |   
seek | seek 完成事件。 |   
bufferchange | 缓冲区变化事件。 |   
ended | 解码结束事件。 |   
  
### function callback

事件触发时执行的回调函数

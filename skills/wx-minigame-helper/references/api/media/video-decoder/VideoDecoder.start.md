---
title: "Promise VideoDecoder.start(Object object)"
type: api
category: api/media/video-decoder
api: "VideoDecoder.start"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.start.html
---

# Promise VideoDecoder.start(Object object)

> 基础库 2.11.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

开始解码

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
source | string |  | 是 | 需要解码的视频源文件。基础库 2.13.0 以下的版本只支持本地路径。 2.13.0 开始支持 http:// 和 https:// 协议的远程路径。 |   
mode | number | 1 | 否 | 解码模式。0：按 pts 解码；1：以最快速度解码 |   
abortAudio | boolean | false | 否 | 是否不需要音频轨道 | [2.15.0](<../../../guide/runtime/client-lib/compatibility.md>)  
abortVideo | boolean | false | 否 | 是否不需要视频轨道 | [2.15.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### Promise

> 基础库 2.16.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

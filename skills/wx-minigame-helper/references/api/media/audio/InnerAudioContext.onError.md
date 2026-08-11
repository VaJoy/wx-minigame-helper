---
title: "InnerAudioContext.onError(function listener)"
type: api
category: api/media/audio
api: "InnerAudioContext.onError"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.onError.html
---

# InnerAudioContext.onError(function listener)

## 功能描述

监听音频播放错误事件

## 参数

### function listener

音频播放错误事件的监听函数

#### 参数

##### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string |   
|  errCode | number |   
| |  合法值 | 说明  
---|---  
10001 | 系统错误  
10002 | 网络错误  
10003 | 文件错误  
10004 | 格式错误  
-1 | 未知错误  
  
## Tips

  1. errCode=100001 时，如若 errMsg 中有 INNERCODE -11828 ，请先检查 response header 是否缺少 Content-Length
  2. errCode=100001 时，如若 errMsg 中有 systemErrCode:200333420，请检查文件编码格式和 fileExtension 是否一致

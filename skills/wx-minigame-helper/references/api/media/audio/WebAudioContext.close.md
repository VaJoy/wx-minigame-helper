---
title: "Promise WebAudioContext.close()"
type: api
category: api/media/audio
api: "WebAudioContext.close"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.close.html
---

# Promise WebAudioContext.close()

## 功能描述

关闭WebAudioContext

## 返回值

### Promise

## 注意事项

同步关闭对应的WebAudio上下文。close后会立即释放当前上下文的资源，**不要在close后再次访问state属性。**
    
    
    const audioCtx = wx.createWebAudioContext()
    audioCtx.close().then(() => {
      console.log(audioCtx.state) // bad case：不应该在close后再访问state
    })

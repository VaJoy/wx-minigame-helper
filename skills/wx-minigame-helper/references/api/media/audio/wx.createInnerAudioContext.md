---
title: "InnerAudioContext wx.createInnerAudioContext(Object object)"
type: api
category: api/media/audio
api: "wx.createInnerAudioContext"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html
---

# [InnerAudioContext](<InnerAudioContext.md>) wx.createInnerAudioContext(Object object)

> 基础库 1.6.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建内部 [audio](<../../../guide/base-ability/audio.md>) 上下文 [InnerAudioContext](<InnerAudioContext.md>) 对象。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
useWebAudioImplement | boolean | false | 否 | 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项。 | [2.19.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [InnerAudioContext](<InnerAudioContext.md>)

## 注意事项

  * InnerAudioContext 音频资源不会自动释放，因此如果不再需要使用音频，请及时调用 InnerAudioContext.destroy() 释放资源，避免内存泄漏。

## 示例代码
    
    
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
    })
    innerAudioContext.src = 'https://wx_test.mp3'
    
    innerAudioContext.play() // 播放
    
    innerAudioContext.pause() // 暂停
    
    innerAudioContext.stop() // 停止
    
    innerAudioContext.destroy() // 释放音频资源

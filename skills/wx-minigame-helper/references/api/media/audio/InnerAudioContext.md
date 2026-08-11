---
title: "InnerAudioContext"
type: api
category: api/media/audio
api: "InnerAudioContext"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html
---

# InnerAudioContext

InnerAudioContext 实例，可通过 [wx.createInnerAudioContext](<wx.createInnerAudioContext.md>) 接口获取实例。注意，音频播放过程中，可能被系统中断，可通过 [wx.onAudioInterruptionBegin](<../../base/app-event/wx.onAudioInterruptionBegin.md>)、[wx.onAudioInterruptionEnd](<../../base/app-event/wx.onAudioInterruptionEnd.md>)事件来处理这种情况。

## 属性

### string src

音频资源的地址，用于直接播放。[2.2.3](<../../../guide/runtime/client-lib/compatibility.md>) 开始支持云文件ID

### number startTime

开始播放的位置（单位：s），默认为 0

### boolean autoplay

是否自动开始播放，默认为 `false`

### boolean loop

是否循环播放，默认为 `false`

### boolean obeyMuteSwitch

是否遵循系统静音开关，默认为 `true`。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [wx.setInnerAudioOption](<wx.setInnerAudioOption.md>) 接口统一设置。

### number volume

> 基础库 1.9.90 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

音量。范围 0~1。默认为 1

### number playbackRate

> 基础库 2.11.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）

### number duration

当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）

### number currentTime

当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（currentTime 属性在基础库 2.26.2 之前只读，基础库 2.26.2 开始可读可写，改变 currentTime 值等同于调用 seek）

### boolean paused

当前是是否暂停或停止状态（只读）

### number buffered

音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）

### string referrerPolicy

> 基础库 2.13.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

`origin`: 发送完整的referrer; `no-referrer`: 不发送。格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；

## 方法

### [InnerAudioContext.play()](<InnerAudioContext.play.md>)

播放

### [InnerAudioContext.pause()](<InnerAudioContext.pause.md>)

暂停。暂停后的音频再播放会从暂停处开始播放

### [InnerAudioContext.stop()](<InnerAudioContext.stop.md>)

停止。停止后的音频再播放会从头开始播放。

### [InnerAudioContext.seek(number position)](<InnerAudioContext.seek.md>)

跳转到指定位置

### [InnerAudioContext.destroy()](<InnerAudioContext.destroy.md>)

销毁当前实例

### [InnerAudioContext.onCanplay(function listener)](<InnerAudioContext.onCanplay.md>)

监听音频进入可以播放状态的事件。但不保证后面可以流畅播放

### [InnerAudioContext.offCanplay(function listener)](<InnerAudioContext.offCanplay.md>)

移除音频进入可以播放状态的事件的监听函数

### [InnerAudioContext.onPlay(function listener)](<InnerAudioContext.onPlay.md>)

监听音频播放事件

### [InnerAudioContext.offPlay(function listener)](<InnerAudioContext.offPlay.md>)

移除音频播放事件的监听函数

### [InnerAudioContext.onPause(function listener)](<InnerAudioContext.onPause.md>)

监听音频暂停事件

### [InnerAudioContext.offPause(function listener)](<InnerAudioContext.offPause.md>)

移除音频暂停事件的监听函数

### [InnerAudioContext.onStop(function listener)](<InnerAudioContext.onStop.md>)

监听音频停止事件

### [InnerAudioContext.offStop(function listener)](<InnerAudioContext.offStop.md>)

移除音频停止事件的监听函数

### [InnerAudioContext.onEnded(function listener)](<InnerAudioContext.onEnded.md>)

监听音频自然播放至结束的事件

### [InnerAudioContext.offEnded(function listener)](<InnerAudioContext.offEnded.md>)

移除音频自然播放至结束的事件的监听函数

### [InnerAudioContext.onTimeUpdate(function listener)](<InnerAudioContext.onTimeUpdate.md>)

监听音频播放进度更新事件

### [InnerAudioContext.offTimeUpdate(function listener)](<InnerAudioContext.offTimeUpdate.md>)

移除音频播放进度更新事件的监听函数

### [InnerAudioContext.onError(function listener)](<InnerAudioContext.onError.md>)

监听音频播放错误事件

### [InnerAudioContext.offError(function listener)](<InnerAudioContext.offError.md>)

移除音频播放错误事件的监听函数

### [InnerAudioContext.onWaiting(function listener)](<InnerAudioContext.onWaiting.md>)

监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发

### [InnerAudioContext.offWaiting(function listener)](<InnerAudioContext.offWaiting.md>)

移除音频加载中事件的监听函数

### [InnerAudioContext.onSeeking(function listener)](<InnerAudioContext.onSeeking.md>)

监听音频进行跳转操作的事件

### [InnerAudioContext.offSeeking(function listener)](<InnerAudioContext.offSeeking.md>)

移除音频进行跳转操作的事件的监听函数

### [InnerAudioContext.onSeeked(function listener)](<InnerAudioContext.onSeeked.md>)

监听音频完成跳转操作的事件

### [InnerAudioContext.offSeeked(function listener)](<InnerAudioContext.offSeeked.md>)

移除音频完成跳转操作的事件的监听函数

## 支持格式

格式 | iOS | Android  
---|---|---  
flac | x | √  
m4a | √ | √  
ogg | x | √  
ape | x | √  
amr | x | √  
wma | x | √  
wav | √ | √  
mp3 | √ | √  
mp4 | x | √  
aac | √ | √  
aiff | √ | x  
caf | √ | x  
  
## 示例代码
    
    
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'https://wx_test.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

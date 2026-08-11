---
title: "GameRecorder"
type: api
category: api/game-recorder
api: "GameRecorder"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html
---

# GameRecorder

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

游戏画面录制对象

## 方法

### [boolean GameRecorder.isFrameSupported()](<GameRecorder.isFrameSupported.md>)

获取是否支持录制游戏画面

### [boolean GameRecorder.isSoundSupported()](<GameRecorder.isSoundSupported.md>)

获取是否在录制游戏画面的同时支持录制游戏音频的信息

### [boolean GameRecorder.isVolumeSupported()](<GameRecorder.isVolumeSupported.md>)

获取是否支持调节录制视频的音量

### [boolean GameRecorder.isAtempoSupported()](<GameRecorder.isAtempoSupported.md>)

获取是否支持调节录制视频的播放速率

### [GameRecorder.start(Object object)](<GameRecorder.start.md>)

开始录制游戏画面

### [Promise GameRecorder.stop()](<GameRecorder.stop.md>)

结束录制游戏画面。结束录制后可以发起分享。

### [Promise GameRecorder.pause()](<GameRecorder.pause.md>)

暂停录制游戏画面。

### [Promise GameRecorder.resume()](<GameRecorder.resume.md>)

恢复录制游戏画面。

### [Promise GameRecorder.abort()](<GameRecorder.abort.md>)

放弃录制游戏画面。此时已经录制的内容会被丢弃。

### [GameRecorder.on(string event, function callback)](<GameRecorder.on.md>)

注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。

### [GameRecorder.off(string event, function callback)](<GameRecorder.off.md>)

取消监听录制事件。当对应事件触发时，该回调函数不再执行。

## 错误

错误码 | 错误信息 | 说明  
---|---|---  
22002 | unknown error | 未知错误，没有被归纳到的错误  
22012 | internal failed | 游戏画面录制 SDK 内部错误  
22022 | frame not supported | 当前设备不支持录制游戏画面  
22103 | duration invalid | duration 参数不合法  
22113 | bitrate invalid | bitrate 参数不合法  
22123 | fps invalid | fps 参数不合法  
22133 | gop invalid | gop 参数不合法  
22143 | start while already start recording | 在已经开始录制的情况下调用 start  
22153 | start while already paused | 在已经暂停录制的情况下调用 start，此时只能调用 resume 恢复录制  
22203 | pause while not start recording | 在还没有开始录制的情况下调用 pause  
22213 | pause while already paused | 在已经暂停录制的情况下调用 pause  
22303 | resume while not start recording | 在还没有开始录制的情况下调用 resume  
22313 | resume while recording | 在录制中调用 resume，调用 resume 只能在暂停状态下  
22403 | abort while not start recording | 在还没有开始录制的情况下调用 abort  
22503 | stop while not start recording | 在还没有开始录制的情况下调用 stop  
22603 | no recorded video | 在还没有一个录制好的对局回放的情况下发起分享  
22613 | bgm not found | share.bgm 指定的额背景音乐不存在  
22623 | time range invalid | share.timeRange 不合法  
22633 | duration out of limit | share.timeRange 的所有片段的总和超出上限  
22643 | time range too short.It should be longer than 2s | share.timeRange 太短  
  
## 错误码的使用方法
    
    
    // 可以监听 error 事件
    const recorder = wx.getGameRecorder()
    recorder.on('error', res => {
      const error = res.error
      if (error.code === wx.error.GameRecorder_StartWhileAlreadyStartRecording) {
    
      }
    })
    
    // 也可以在接口的 Promise 中获取
    recorder.stop()
    .catch(res => {
      if (res.error.code === wx.error.GameRecorder_StopWhileNotStartRecording) {
    
      }
    })

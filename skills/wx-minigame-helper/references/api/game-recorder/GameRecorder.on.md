---
title: "GameRecorder.on(string event, function callback)"
type: api
category: api/game-recorder
api: "GameRecorder.on"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.on.html
---

# GameRecorder.on(string event, function callback)

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。

## 参数

### string event

事件名

**event 的合法值**

值 | 说明 | 最低版本  
---|---|---  
start | 录制开始事件。当调用 [GameRecorder.start()](<GameRecorder.start.md>) 且客户端真正开始了对游戏画面录制时触发该事件。 |   
stop | 录制结束事件。当调用 [GameRecorder.stop()](<GameRecorder.stop.md>) 且客户端真正停止了对游戏画面录制时触发该事件。 |   
pause | 录制暂停事件。当调用 [GameRecorder.pause()](<GameRecorder.pause.md>) 且客户端真正暂停了对游戏画面录制时触发该事件。 |   
resume | 录制恢复事件。当调用 [GameRecorder.resume()](<GameRecorder.resume.md>) 且客户端真正恢复了对游戏画面录制时触发该事件。 |   
abort | 录制取消事件。当调用 [GameRecorder.abort()](<GameRecorder.abort.md>) 且客户端真正取消了对游戏画面录制时触发该事件。 |   
timeUpdate | 录制时间更新事件。在录制过程中触发该事件。 |   
error | 错误事件。当录制和分享过程中发生错误时触发该事件。录制是指当调用 [GameRecorder](<GameRecorder.md>) 的接口进行录制；分享是指用户点击 [GameRecorderShareButton](<GameRecorderShareButton.md>) 发起编辑界面并进行分享的过程。 |   
  
### function callback

事件触发时执行的回调函数

## 事件参数

除了 timeUpdate error stop 事件外，其他事件都是无参的

**timeUpdate**

属性 | 类型 | 说明  
---|---|---  
currentTime | number | 当前视频录制到第几秒  
      
    
    const recorder = wx.getGameRecorder()
    recorder.on('timeUpdate', res => {
      console.log(res.currentTime)
    })
    

**error**

属性 | 类型 | 说明  
---|---|---  
code | number | 错误码  
message | string | 错误信息  
      
    
    const recorder = wx.getGameRecorder()
    recorder.on('error', res => {
      console.log('错误码', res.error.code)
      console.log('错误信息', res.error.message)
    
      // 对错误码进行判断
      if (res.error.code === wx.error.GameRecorder_StartWhileAlreadyStartRecording) {
    
      }
    })
    

**stop**

属性 | 类型 | 说明  
---|---|---  
duration | number | 视频的时长，单位 ms 毫秒  
      
    
    const recorder = wx.getGameRecorder()
    recorder.on('stop', res => {
      console.log('视频时长'), res.duration)
    })

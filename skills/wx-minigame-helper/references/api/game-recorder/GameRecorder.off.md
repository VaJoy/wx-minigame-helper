---
title: "GameRecorder.off(string event, function callback)"
type: api
category: api/game-recorder
api: "GameRecorder.off"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.off.html
---

# GameRecorder.off(string event, function callback)

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

取消监听录制事件。当对应事件触发时，该回调函数不再执行。

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

事件触发时不再执行的回调函数

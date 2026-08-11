---
title: "Promise GameRecorder.stop()"
type: api
category: api/game-recorder
api: "GameRecorder.stop"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html
---

# Promise GameRecorder.stop()  
  
> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

结束录制游戏画面。结束录制后可以发起分享。

## 返回值

### Promise

录制结束的 Promise

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

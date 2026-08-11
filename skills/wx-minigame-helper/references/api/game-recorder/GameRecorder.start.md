---
title: "GameRecorder.start(Object object)"
type: api
category: api/game-recorder
api: "GameRecorder.start"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html
---

# GameRecorder.start(Object object)  
  
> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

开始录制游戏画面

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
fps | number | 24 | 否 | 视频 fps |   
duration | number | 7200 | 否 | 视频的时长限制，单位为秒（s）。最大值 7200，最小值 5，到达指定时长后不会再录入。但还需要手动调用 [GameRecorder.stop()](<GameRecorder.stop.md>) 来结束录制。 |   
bitrate | number | 1000 | 否 | 视频比特率（kbps），默认值1000，最大值 3000，最小值 600 |   
gop | number | 12 | 否 | 视频关键帧间隔 |   
hookBgm | boolean | true | 否 | 是否录制游戏音效（仅iOS支持） | [2.10.0](<../../guide/runtime/client-lib/compatibility.md>)  
  
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

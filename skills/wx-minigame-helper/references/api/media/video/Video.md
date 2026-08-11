---
title: "Video"
type: api
category: api/media/video
api: "Video"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.html
---

# Video

视频对象

## 属性

### number x

视频的左上角横坐标

### number y

视频的左上角纵坐标

### number width

视频的宽度

### number height

视频的高度

### string src

视频的资源地址

### string poster

视频的封面

### number initialTime

视频的初始播放位置，单位为 s 秒

### number playbackRate

视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5

### boolean live

视频是否为直播

### string objectFit

视频的缩放模式

### boolean controls

视频是否显示控件

### boolean showProgress

> 基础库 2.12.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

是否显示视频底部进度条，controls为true时才生效

### boolean showProgressInControlMode

> 基础库 2.12.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

是否显示视频控制栏进度条，controls为true时才生效

### string backgroundColor

> 基础库 2.12.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

视频背景颜色

### boolean autoplay

视频是否自动播放

### boolean loop

视频是否是否循环播放

### boolean muted

视频是否禁音播放

### boolean obeyMuteSwitch

> 基础库 2.4.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

视频是否遵从系统静音开关设置（仅iOS）

### boolean enableProgressGesture

是否启用手势控制播放进度

### boolean enablePlayGesture

是否启用手势控制播放进度

### boolean showCenterPlayBtn

是否显示视频中央的播放按钮

### function onwaiting

视频由于需要缓冲下一帧而停止时触发的回调函数

### function onprogress

视频下载（缓冲）时周期性触发的回调函数

### function onplay

视频开始播放时触发的回调函数

### function onpause

视频暂停时触发的回调函数

### function onended

视频播放到末尾时触发的回调函数

### function ontimeupdate

每当视频播放进度更新时触发的回调函数

### function onerror

视频发生错误时触发的回调函数

## 方法

### [Video.destroy()](<Video.destroy.md>)

销毁视频

### [Promise Video.play()](<Video.play.md>)

播放视频

### [Promise Video.pause()](<Video.pause.md>)

暂停视频

### [Promise Video.stop()](<Video.stop.md>)

停止视频

### [Promise Video.seek(number time)](<Video.seek.md>)

视频跳转

### [Promise Video.requestFullScreen(number direction)](<Video.requestFullScreen.md>)

视频全屏

### [Promise Video.exitFullScreen()](<Video.exitFullScreen.md>)

视频退出全屏

### [Video.onWaiting(function listener)](<Video.onWaiting.md>)

监听视频由于需要缓冲下一帧而停止时触发

### [Video.offWaiting(function listener)](<Video.offWaiting.md>)

移除视频由于需要缓冲下一帧而停止时触发的监听函数

### [Video.onProgress(function listener)](<Video.onProgress.md>)

监听视频下载（缓冲）事件

### [Video.offProgress(function listener)](<Video.offProgress.md>)

移除视频下载（缓冲）事件的监听函数

### [Video.onPlay(function listener)](<Video.onPlay.md>)

监听视频播放事件

### [Video.offPlay(function listener)](<Video.offPlay.md>)

移除视频播放事件的监听函数

### [Video.onPause(function listener)](<Video.onPause.md>)

监听视频暂停事件

### [Video.offPause(function listener)](<Video.offPause.md>)

移除视频暂停事件的监听函数

### [Video.onEnded(function listener)](<Video.onEnded.md>)

监听视频播放到末尾事件

### [Video.offEnded(function listener)](<Video.offEnded.md>)

移除视频播放到末尾事件的监听函数

### [Video.onTimeUpdate(function listener)](<Video.onTimeUpdate.md>)

监听视频播放进度更新事件

### [Video.offTimeUpdate(function listener)](<Video.offTimeUpdate.md>)

移除视频播放进度更新事件的监听函数

### [Video.onError(function listener)](<Video.onError.md>)

监听视频错误事件

### [Video.offError(function listener)](<Video.offError.md>)

移除视频错误事件的监听函数

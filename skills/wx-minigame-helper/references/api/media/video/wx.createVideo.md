---
title: "Video wx.createVideo(Object object)"
type: api
category: api/media/video
api: "wx.createVideo"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.createVideo.html
---

# [Video](<Video.md>) wx.createVideo(Object object)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建视频

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  x | number | 0 | 否 | 视频的左上角横坐标 |   
|  y | number | 0 | 否 | 视频的左上角纵坐标 |   
|  width | number | 300 | 否 | 视频的宽度 |   
|  height | number | 150 | 否 | 视频的高度 |   
|  src | string |  | 是 | 视频的资源地址 |   
|  poster | string |  | 否 | 视频的封面 |   
|  initialTime | number | 0 | 否 | 视频的初始播放位置，单位为 s 秒 |   
|  playbackRate | number | 1.0 | 否 | 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 |   
|  live | boolean | false | 否 | 视频是否为直播 |   
|  objectFit | string | 'contain' | 否 | 视频的缩放模式 |   
| |  合法值 | 说明  
---|---  
fill | 填充，视频拉伸填满整个容器，不保证保持原有长宽比例  
contain | 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白  
cover | 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见  
|  controls | boolean | true | 否 | 视频是否显示控件 |   
|  showProgress | boolean | true | 否 | 是否显示视频底部进度条 | [2.12.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  showProgressInControlMode | boolean | true | 否 | 是否显示控制栏的进度条 | [2.12.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  backgroundColor | string | '#000000' | 否 | 视频背景颜色 | [2.12.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  autoplay | boolean | false | 否 | 视频是否自动播放 |   
|  loop | boolean | false | 否 | 视频是否是否循环播放 |   
|  muted | boolean | false | 否 | 视频是否禁音播放 |   
|  obeyMuteSwitch | boolean | false | 否 | 视频是否遵循系统静音开关设置（仅iOS） | [2.4.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableProgressGesture | boolean | true | 否 | 是否启用手势控制播放进度 |   
|  enablePlayGesture | boolean | false | 否 | 是否开启双击播放的手势 |   
|  showCenterPlayBtn | boolean | true | 否 | 是否显示视频中央的播放按钮 |   
|  underGameView | boolean | false | 否 | 视频是否显示在游戏画布之下（配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas实现透明效果） | [2.11.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  autoPauseIfNavigate | boolean | true | 否 | 视频跳转后自动暂停播放 |   
|  autoPauseIfOpenNative | boolean | true | 否 | 视频跳转原生页后自动暂停播放 |   
  
## 返回值

### [Video](<Video.md>)

一个视频对象，可以通过设置该对象上的属性和调用该对象上的方法来控制视频

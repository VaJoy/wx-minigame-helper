---
title: "GameRecorderShareButton wx.createGameRecorderShareButton(Object object)"
type: api
category: api/game-recorder
api: "wx.createGameRecorderShareButton"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html
---

# [GameRecorderShareButton](<GameRecorderShareButton.md>) wx.createGameRecorderShareButton(Object object)

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  style | Object |  | 是 | 按钮的样式  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  left | number | 0 | 否 | 左上角横坐标，单位 逻辑像素  
|  top | number | 0 | 否 | 左上角纵坐标，单位 逻辑像素  
|  height | number | 40 | 否 | 按钮的高度，最小 40 逻辑像素  
|  iconMarginRight | number | 8 | 否 | 图标和文本之间的距离，最小 8 逻辑像素  
|  fontSize | number | 17 | 否 | 文本的字体大小。最小 17，最大 22。  
|  color | string | #ffffff | 否 | 文本的颜色。  
|  paddingLeft | number | 16 | 否 | 按钮的左内边距，最小 16 逻辑像素。  
|  paddingRight | number | 16 | 否 | 按钮的右内边距，最小 16 逻辑像素。  
  
|  icon | string |  | 否 | 图标的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。  
|  image | string |  | 否 | 按钮的背景图片的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标。  
|  text | string |  | 否 | 按钮的文本。  
|  share | Object |  | 是 | 对局回放的分享参数。  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  query | string |  | 否 | 分享的对局回放打开后跳转小游戏的 query。 |   
|  path | string |  | 否 | 分享的对局回放打开后跳转小游戏的 path （独立分包路径）。详见 [小游戏独立分包指南](<../../guide/base-ability/independent-sub-packages.md>) | [2.13.2](<../../guide/runtime/client-lib/compatibility.md>)  
|  bgm | string |  | 是 | 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url。 |   
|  timeRange | Array.<Array.<number>> |  | 是 | 对局回放的剪辑区间，是一个二维数组，单位 ms（毫秒）。[[1000, 3000], [4000, 5000]] 表示剪辑已录制对局回放的 1-3 秒和 4-5 秒最终合成为一个 3 秒的对局回放。对局回放剪辑后的总时长最多 60 秒，即 1 分钟。 |   
|  volume | number | 1 | 否 | 对局回放的音量大小，最小 0，最大 1。 | [2.9.2](<../../guide/runtime/client-lib/compatibility.md>)  
|  atempo | number | 1 | 否 | 对局回放的播放速率，只能设置以下几个值：0.3，0.5，1，1.5，2，2.5，3。其中1表示原速播放，小于1表示减速播放，大于1表示加速播放。 | [2.9.2](<../../guide/runtime/client-lib/compatibility.md>)  
|  audioMix | boolean | false | 否 | 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音。 | [2.10.0](<../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [GameRecorderShareButton](<GameRecorderShareButton.md>)

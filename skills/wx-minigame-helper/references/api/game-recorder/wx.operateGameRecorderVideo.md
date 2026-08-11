---
title: "wx.operateGameRecorderVideo(Object object)"
type: api
category: api/game-recorder
api: "wx.operateGameRecorderVideo"
source: https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.operateGameRecorderVideo.html
---

# wx.operateGameRecorderVideo(Object object)

> 基础库 2.26.1 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **限制** ：仅在[点击行为](<https://developers.weixin.qq.com/minigame/dev/guide/base-ability/touch-limit.html>)时调用

## 功能描述

分享游戏对局回放。安卓微信8.0.28开始支持，iOS微信8.0.30开始支持。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
title | string |  | 否 | 分享的对局回放打开后的标题内容  
desc | string |  | 否 | 分享的对局回放打开后的描述内容  
query | string |  | 否 | 分享的对局回放打开后跳转小游戏的 query  
path | string |  | 否 | 分享的对局回放打开后跳转小游戏的 path （独立分包路径）  
bgm | string |  | 否 | 对局回放背景音乐的地址  
timeRange | Array.<Array.<number>> |  | 否 | 对局回放的剪辑区间，是一个二维数组，单位 ms（毫秒）。[[1000, 3000], [4000, 5000]] 表示剪辑已录制对局回放的 1-3 秒和 4-5 秒最终合成为一个 3 秒的对局回放。对局回放剪辑后的总时长最多 60 秒，即 1 分钟  
volume | number | 1 | 否 | 对局回放的音量大小，最小0，最大1  
atempo | number | 1 | 否 | 对局回放的播放速率，只能设置以下几个值: 0.3, 0.5, 1, 1.5, 2, 2.5, 3.其中1表示元素播放，小于1表示减速播放，大于1表示加速播放  
audioMix | boolean | false | 否 | 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object shareToGameCenter

拥有errCode和errMsg属性，记录分享到游戏中心的状态

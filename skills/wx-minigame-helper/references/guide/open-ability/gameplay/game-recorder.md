---
title: "游戏对局回放"
type: guide
category: guide/open-ability/gameplay
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-recorder.html
---

## 游戏对局回放  
  
游戏对局回放是 一组录制游戏画面来生成对局回放、并可以将对局回放分享给好朋友的 API，基础库 >= v2.8.0 支持。

### 录制

[wx.getGameRecorder()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.getGameRecorder.html>) 返回一个全局单例 [GameRecorder](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html>)，是一个游戏录制对象。录制游戏画面是一项比较消耗性能的能力，在某些系统、设备上无法进行游戏画面录制。因此在调用游戏画面录制能力前，需先判断当前环境是否支持该能力。
    
    
    const recorder = wx.getGameRecorder()
    console.log('是否支持录制游戏画面', recorder.isFrameSupported())
    // 目前还未实现，后期可能会支持到
    console.log('是否支持录制游戏画面的同时也录制音频', recorder.isSoundSupported())
    

所有和录制有关的 API 都挂载在 [GameRecorder](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.html>) 上：

  * [GameRecorder.start()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html>) 开始录制
  * [GameRecorder.stop()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html>) 结束录制
  * [GameRecorder.pause()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html>) 暂停录制
  * [GameRecorder.resume()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html>) 从暂停状态恢复到录制状态
  * ...

调用 [GameRecorder.start()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.start.html>) 开始录制，调用 [GameRecorder.stop()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.stop.html>) 结束录制。
    
    
    const recorder = wx.getGameRecorder()
    // 发起开始录制的调用
    recorder.start()
    // start 事件的回调函数的执行表示录制的真正开始
    recorder.on('start', () => {
      // 真正开始录制后的 5 秒后结束录制
      setTimeout(() => {
        recorder.stop()
      }, 5000)
    })
    // stop 事件的回调函数的执行表示录制完成
    recorder.on('stop', (res) => {
      console.log(`对局回放时长: ${res.duration}`)
    })
    

如果在录制过程中有玩家思考等待等过程，可以调用 [GameRecorder.pause()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.pause.html>) 暂停录制，然后再用 [GameRecorder.resume()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.resume.html>) 恢复录制。
    
    
    recorder.pause()
    // pause 事件的回调函数的执行表示录制真正暂停
    recorder.on('start', () => {
      // 真正开始暂停后的 5 秒后恢复录制
      setTimeout(() => {
        recorder.resume()
      }, 5000)
    })
    
    // resume 事件的回调函数的执行录制继续进行
    recorder.on('resume', () => {
      console.log('继续录制')
    })
    

如果想舍弃已经在录制的视频，可以调用 [GameRecorder.abort()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorder.abort.html>)
    
    
    recorder.abort()
    // abort 事件的回调函数的执行表示录制中的游戏画面已经被舍弃
    recorder.on('abort', () => {
      console.log('继续录制')
    })
    

stop 事件触发就表示已经有一个录制好的视频被输出来了。录制完成的视频保存在内部，不能被访问到，也不能直接播放，只能发送给好友或分享到微信游戏中心。内部只会保存 **最近一次录制的视频** ，发起分享时也只会分享这个 **最近一次录制的视频** 。

### 分享

游戏对局回放的分享可以通过调用 API [wx.operateGameRecorderVideo()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.operateGameRecorderVideo.html>) 触发，或 在用户点击 **游戏对局回放分享按钮** 时发起。

如果使用 API 触发，可以支持分享到游戏圈、会话。

如果使用分享按钮触发，需要调用 [wx.createGameRecorderShareButton()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html>) 创建 **游戏对局回放分享按钮** 。参数分为两部分，指定按钮样式的 **style** 和指定分享配置的 **share** 。

按钮的默认样式如下：

![](https://res.wx.qq.com/op_res/esHoiGLxfGoJC_F1XU-YydF_2mbj9Ey_vt_rd0caN7u6fx92SKkbspZmpjMJ7-mu)

icon 指定左侧的图标，text 指定右侧的按钮文本，style.backgroundColor 指定按钮的背景色，image 指定按钮的背景图片，会覆盖背景色。完整的参数说明参见 [wx.createGameRecorderShareButton()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html>) 。
    
    
    const button = wx.createGameRecorderShareButton({
      // 样式参数
      style: {
        left: 10,
        top: 150,
        height: 50,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4,
        iconMarginRight: 16,
        paddingLeft: 1,
        paddingRight: 30,
      },
      // 按钮的背景图片
      image: 'button.jpg',
      text: '自定义文案',
      icon: 'icon.jpg',
      // 分享参数
      share: {
        query: 'a=1&b=2',
        // 背景音乐的路径
        bgm: 'walkin.mp3',
        timeRange: [[0, 1000], [2000, 3000]],
        title: {
          template: 'default.score',
          data: {
            score: 6500
          }
        },
        button: {
          template: 'default.enter',
        }
      }
    })
    

点击按钮后会拉起视频编辑界面，用户可以对视频再加一首背景音乐或增加一些表情、贴纸。点击视频编辑界面右下角的绿色按钮可以将视频分享到会话 或 朋友圈（beta测试）。

![](https://res.wx.qq.com/op_res/7R395kzZa3t4aj-u7IKZYCQ5CjsWbfbUViqLj2c9PWHxH8PnNA8M4hD-fEDU_sid)

点击分享到会话的卡片可以进入视频，下方按钮可以跳转到该小游戏开发者指定的路径。

![](https://res.wx.qq.com/op_res/PPTdDera409iJR_eZLCMDfayAF3_-O7OUOmsxiRxXyYzFdOElJPDdmVDE6tv0MZc)

点击分享到朋友圈的链接可以进入视频，下方按钮可以跳转到该小游戏开发者指定的路径。可根据 场景值 区分适配，朋友圈内打开“预览模式” 1154，“预览模式”打开小游戏 1155。

TIPS：对局回放分享朋友圈为测试能力，从基础库 version 2.12.0 开始支持，此功能为beta版，暂仅在Android平台支持。

  1. 低版本微信客户端打开时，会进入一个升级提示页面
  2. 支持打开开发版、体验版，无权限人员进入时页面会提示无权限

![](https://res.wx.qq.com/op_res/0wSCOzumDDtAE-VKm0teDXRe9uSV1sbjGJJc5V6b-YcPsvuE35wNissBTW_pfXYd)

分享参数的含义如下：

  * share.title 对局回放标题的配置。这个配置生成的文案会出现在视频上和视频的分享卡片的副标题处。配置的含义见 [wx.createGameRecorderShareButton()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html>)。
  * share.button 对局回放按钮文案的配置。在视频上点击这个按钮会跳转到录制这个视频的小游戏。配置的含义见 [wx.createGameRecorderShareButton()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html>)。
  * share.query 点击按钮跳转小游戏时的 query。
  * share.bgm 对局回放的背景音乐。用户可以在转发之前的视频编辑界面上再选一首背景音乐，两个音乐会混合在一起，而不是覆盖。
  * share.timeRange 录制对局回放的裁剪区间。是一个二维数组，单位 ms（毫秒）。[[1000, 3000], [4000, 5000]] 表示剪辑已录制视频的 1-3 秒和 4-5 秒最终合成为一个 3 秒的视频。对局回放剪辑后的总时长最多 60 秒，即 1 分钟。

#### 分享过程中的异常

分享结果不能被获取到，但是如果分享过程中发生了客户端层面的异常，[GameRecorderShareButton.onTap()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/GameRecorderShareButton.onTap.html>) 注册的回调函数会执行。
    
    
    button.onTap(res => {
      console.log(`错误码：${res.error.code}，错误信息：${res.error.message}`)
    })

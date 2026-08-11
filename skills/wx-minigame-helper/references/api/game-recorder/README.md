# 游戏录屏

> 路径：`api/game-recorder/`　|　本目录 20 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [Promise GameRecorder.abort()](GameRecorder.abort.md) | 放弃录制游戏画面。此时已经录制的内容会被丢弃。 |
| [boolean GameRecorder.isAtempoSupported()](GameRecorder.isAtempoSupported.md) | 获取是否支持调节录制视频的播放速率 |
| [boolean GameRecorder.isFrameSupported()](GameRecorder.isFrameSupported.md) | 获取是否支持录制游戏画面 |
| [boolean GameRecorder.isSoundSupported()](GameRecorder.isSoundSupported.md) | 获取是否在录制游戏画面的同时支持录制游戏音频的信息 |
| [boolean GameRecorder.isVolumeSupported()](GameRecorder.isVolumeSupported.md) | 获取是否支持调节录制视频的音量 |
| [GameRecorder](GameRecorder.md) |  |
| [GameRecorder.off(string event, function callback)](GameRecorder.off.md) | 取消监听录制事件。当对应事件触发时，该回调函数不再执行。 |
| [GameRecorder.on(string event, function callback)](GameRecorder.on.md) | 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行。 |
| [Promise GameRecorder.pause()](GameRecorder.pause.md) | 暂停录制游戏画面。 |
| [Promise GameRecorder.resume()](GameRecorder.resume.md) | 恢复录制游戏画面。 |
| [GameRecorder.start(Object object)](GameRecorder.start.md) | 开始录制游戏画面 |
| [Promise GameRecorder.stop()](GameRecorder.stop.md) | 结束录制游戏画面。结束录制后可以发起分享。 |
| [GameRecorderShareButton.hide()](GameRecorderShareButton.hide.md) | 隐藏游戏对局回放分享按钮 |
| [GameRecorderShareButton](GameRecorderShareButton.md) |  |
| [GameRecorderShareButton.offTap(function listener)](GameRecorderShareButton.offTap.md) | 移除游戏对局回放分享按钮的点击事件的监听函数 |
| [GameRecorderShareButton.onTap(function listener)](GameRecorderShareButton.onTap.md) | 监听游戏对局回放分享按钮的点击事件。只有当分享由于非用户取消的原因失败时，该事件的回调函数才会执行。 |
| [GameRecorderShareButton.show()](GameRecorderShareButton.show.md) | 显示游戏对局回放分享按钮 |
| [GameRecorderShareButton wx.createGameRecorderShareButton(Object object)](wx.createGameRecorderShareButton.md) | 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。 |
| [GameRecorder wx.getGameRecorder()](wx.getGameRecorder.md) | 获取全局唯一的游戏画面录制对象 |
| [wx.operateGameRecorderVideo(Object object)](wx.operateGameRecorderVideo.md) | 分享游戏对局回放。安卓微信8.0.28开始支持，iOS微信8.0.30开始支持。 |

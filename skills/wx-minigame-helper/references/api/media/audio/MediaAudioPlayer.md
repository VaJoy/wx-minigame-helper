---
title: "MediaAudioPlayer"
type: api
category: api/media/audio
api: "MediaAudioPlayer"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/MediaAudioPlayer.html
---

# MediaAudioPlayer

MediaAudioPlayer 实例，可通过 [wx.createMediaAudioPlayer](<wx.createMediaAudioPlayer.md>) 接口获取实例。

## 属性

### number volume

音量。范围 0~1。默认为 1

## 方法

### [Promise MediaAudioPlayer.start()](<MediaAudioPlayer.start.md>)

启动播放器

### [Promise MediaAudioPlayer.addAudioSource(VideoDecoder source)](<MediaAudioPlayer.addAudioSource.md>)

添加音频源

### [Promise MediaAudioPlayer.removeAudioSource(VideoDecoder source)](<MediaAudioPlayer.removeAudioSource.md>)

移除音频源

### [Promise MediaAudioPlayer.stop()](<MediaAudioPlayer.stop.md>)

停止播放器

### [Promise MediaAudioPlayer.destroy()](<MediaAudioPlayer.destroy.md>)

销毁播放器

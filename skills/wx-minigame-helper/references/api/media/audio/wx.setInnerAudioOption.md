---
title: "wx.setInnerAudioOption(Object object)"
type: api
category: api/media/audio
api: "wx.setInnerAudioOption"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html
---

# wx.setInnerAudioOption(Object object)

> 基础库 2.3.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持

## 功能描述

设置 [InnerAudioContext](<InnerAudioContext.md>) 的播放选项。设置之后对当前小程序全局生效。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
mixWithOther | boolean | true | 否 | 是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐  
obeyMuteSwitch | boolean | true | 否 | （仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音  
speakerOn | boolean | true | 否 | true 代表用扬声器播放，false 代表听筒播放，默认值为 true。  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 注意事项

  * 为保证微信整体体验，speakerOn 为 true 时，客户端会忽略 mixWithOther 参数的内容，强制与其它音频互斥
  * 不支持在播放音频的过程中切换为扬声器播放，开发者如需切换可以先暂停当前播放的音频并记录下当前暂停的时间点，然后切换后重新从原来暂停的时间点开始播放音频
  * 目前 wx.setInnerAudioOption 接口不兼容 wx.createWebAudioContext 接口，也不兼容 wx.createInnerAudioContext 开启 useWebAudioImplement 的情况，将在后续版本中支持

---
title: "RewardedVideoAd"
type: api
category: api/ad
api: "RewardedVideoAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.html
---

# RewardedVideoAd  
  
激励视频广告组件。激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示。

## 方法

### [Promise RewardedVideoAd.load()](<RewardedVideoAd.load.md>)

加载激励视频广告。

### [Promise RewardedVideoAd.show()](<RewardedVideoAd.show.md>)

显示激励视频广告。激励视频广告将从屏幕下方推入。

### [RewardedVideoAd.destroy()](<RewardedVideoAd.destroy.md>)

销毁激励视频广告实例。

### [RewardedVideoAd.onLoad(function listener)](<RewardedVideoAd.onLoad.md>)

监听激励视频广告加载事件。

### [RewardedVideoAd.offLoad(function listener)](<RewardedVideoAd.offLoad.md>)

移除激励视频广告加载事件的监听函数

### [RewardedVideoAd.onError(function listener)](<RewardedVideoAd.onError.md>)

监听激励视频错误事件。

### [RewardedVideoAd.offError(function listener)](<RewardedVideoAd.offError.md>)

移除激励视频错误事件的监听函数

### [RewardedVideoAd.onClose(function listener)](<RewardedVideoAd.onClose.md>)

监听用户点击 `关闭广告` 按钮的事件。

### [RewardedVideoAd.offClose(function listener)](<RewardedVideoAd.offClose.md>)

移除用户点击 `关闭广告` 按钮的事件的监听函数

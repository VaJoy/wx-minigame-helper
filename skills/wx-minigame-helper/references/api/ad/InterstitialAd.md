---
title: "InterstitialAd"
type: api
category: api/ad
api: "InterstitialAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.html
---

# InterstitialAd

插屏广告组件。插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用），默认是隐藏的，需要调用 InterstitialAd.show() 将其显示。

## 方法

### [Promise InterstitialAd.show()](<InterstitialAd.show.md>)

显示插屏广告。

### [Promise InterstitialAd.load()](<InterstitialAd.load.md>)

加载插屏广告。

### [InterstitialAd.destroy()](<InterstitialAd.destroy.md>)

销毁插屏广告实例。

### [InterstitialAd.onLoad(function listener)](<InterstitialAd.onLoad.md>)

监听插屏广告加载事件。

### [InterstitialAd.offLoad(function listener)](<InterstitialAd.offLoad.md>)

移除插屏广告加载事件的监听函数

### [InterstitialAd.onError(function listener)](<InterstitialAd.onError.md>)

监听插屏错误事件。

### [InterstitialAd.offError(function listener)](<InterstitialAd.offError.md>)

移除插屏错误事件的监听函数

### [InterstitialAd.onClose(function listener)](<InterstitialAd.onClose.md>)

监听插屏广告关闭事件。

### [InterstitialAd.offClose(function listener)](<InterstitialAd.offClose.md>)

移除插屏广告关闭事件的监听函数

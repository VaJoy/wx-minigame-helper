---
title: "插屏广告"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/interstitialAd-ad.html
---

## 插屏广告

插屏广告组件是由客户端原生的图片、文本、视频控件组成的，层级最高，会覆盖在普通组件上。

开发者可以调用 [wx.createInterstitialAd](<https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createInterstitialAd.html>) 创建插屏广告组件。每调用一次该方法，返回的都是一个全新实例。

### 广告创建

插屏广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。
    
    
    let interstitialAd = wx.createInterstitialAd({ adUnitId: 'xxxx' })
    

为避免滥用广告资源，目前每个用户每天可观看广告的次数有限，建议展示广告按钮前先判断广告是否拉取成功。

### 显示/隐藏

插屏广告组件默认是隐藏的，开发者需要调用 [InterstitialAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.show.html>) 进行显示。如果广告拉取失败或触发频率限制，[InterstitialAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.show.html>) 方法会返回一个rejected Promise，开发者可自行监听错误信息。[常见异常错误参考文档](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.show.html>)
    
    
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
    

用户可以主动关闭插屏广告。开发者不可控制插屏广告组件的隐藏。

### 广告拉取成功与失败

插屏广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户关闭广告后会去拉取下一条广告。

如果拉取成功，通过 [InterstitialAd.onLoad()](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onLoad.html>) 注册的回调函数会执行，回调函数没有参数传递。
    
    
    interstitialAd.onLoad(() => {
      console.log('插屏 广告加载成功')
    })
    

如果拉取失败，通过 [InterstitialAd.onError()](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onError.html>) 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。[常见异常错误参考文档](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onError.html>)
    
    
    interstitialAd.onError(err => {
      console.log(err)
    })
    

### 监听用户关闭广告

如果广告被关闭，通过 [InterstitialAd.onClose()](<https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.onClose.html>) 注册的回调函数会执行，回调函数没有参数传递。
    
    
    interstitialAd.onClose(res => {
        console.log('插屏 广告关闭')
    })

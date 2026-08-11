---
title: "Banner 广告"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/banner-ad.html
---

## Banner 广告

从基础库 3.5.5 开始，本接口停止维护，请使用原生模板广告 wx.createCustomAd 代替

Banner 广告组件是由客户端原生的图片、文本控件组成的原生组件，层级最高，会覆盖在上屏 Canvas 上。

开发者可以调用 [wx.createBannerAd](<https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createBannerAd.html>) 创建 Banner 广告组件。Banner 广告组件在创建后会自动拉取广告数据并进行渲染，开发者只需要控制 Banner 广告组件的位置和显示/隐藏即可。
    
    
    let bannerAd = wx.createBannerAd({
      adUnitId: 'xxxx',
      style: {
        left: 10,
        top: 76,
        width: 320
      }
    })
    
    bannerAd.show()
    

### 显示/隐藏

Banner 广告组件默认是隐藏的，需要调用 [BannerAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.show.html>) 进行显示。
    
    
    bannerAd.show()
    

当切换到没有 Banner 广告组件的场景或页面时，调用 [BannerAd.hide()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.hide.html>) 隐藏 Banner 广告组件。
    
    
    bannerAd.hide()
    

### 广告拉取成功与失败

BannerAd 在创建后会拉取广告。如果拉取失败，通过 [BannerAd.onError()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onError.html>) 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。[常见异常错误参考文档](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onError.html>)
    
    
    bannerAd.onError(err => {
      console.log(err)
    })
    

[BannerAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.show.html>) 返回的 Promise 也会是一个 rejected Promise。
    
    
    bannerAd.show()
    .catch(err => console.log(err))
    

反之，如果拉取成功。[BannerAd.onLoad()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onLoad.html>) 会执行，[BannerAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.show.html>) 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。
    
    
    bannerAd.onLoad(() => {
      console.log('banner 广告加载成功')
    })
    
    bannerAd.show()
    .then(() => console.log('banner 广告显示'))
    

### onResize

开发者在创建 BannerAd 时设置宽高，也可以在创建后设置。
    
    
    let bannerAd = wx.createBannerAd({
      adUnitId: 'xxxx',
      style: {
        left: 10,
        top: 76,
        width: 320
      }
    })
    
    bannerAd.show()
    bannerAd.style.width = 400
    

Banner 广告组件的尺寸会根据开发者设置的宽度，即 `style.width` 进行等比缩放，缩放的范围是 300 到 `屏幕宽度`。屏幕宽度是以逻辑像素为单位的宽度，通过 [wx.getSystemInfoSync()](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html>) 可以获取到。
    
    
    let { screenWidth } = wx.getSystemInfoSync()
    

当 `style.width` 小于 300 时，会取作 300。 当 `style.width` 大于屏幕宽度时，会取作屏幕宽度。 在组件内部会以此值为基准，根据 Banner 广告的标准尺寸，进行缩放。

每当缩放发生且缩放后的尺寸不同时，通过 [BannerAd.onResize()](<https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.onResize.html>) 注册的回调函数就会执行。回调函数的参数是一个包含 BannerAd 缩放后的宽和高的对象。BannerAd 的 `style.realWidth` 和 `style.realHeight` 到经过缩放后的宽和高。
    
    
    bannerAd.onResize(res => {
      console.log(res.width, res.height)
      console.log(bannerAd.style.realWidth, bannerAd.style.realHeight)
    })
    

如果在 onResize 的回调函数中重设 width 且总是与上一次缩放后的 width 不同，那么可能会导致 onResize 的回调函数一直触发，并卡死在 onResize 的回调函数中。
    
    
    bannerAd.onResize(res => {
      bannerAd.style.width = res.width + Math.random()*10
    })
    

### 创建新的 BannerAd，销毁旧的 BannerAd

每个 BannerAd 实例在创建后会去拉取一次广告数据并进行渲染，在此之后不再更新。如果想要展示其他内容的 BannerAd，需要创建新的 BannerAd 并将之前的 BannerAd 进行销毁。

如果不对废弃的 BannerAd 进行销毁，则会导致其上的事件监听器无法释放。当没有释放的 BannerAd 积累过多时，将会产生性能问题。
    
    
    oldBannerAd.destroy()
    let newBannerAd = wx.createBannerAd({
      // ...
    })
    newBannerAd.show()
    

### 广告定时刷新

开发者可以在创建 Banner 广告时传入 `adIntervals` 参数实现广告的定时刷新，`adIntervals` 参数为数字类型，单位为秒。注意：自动刷新的间隔不能低于30秒，因此 `adIntervals` 的参数值必须大于或等于30。
    
    
    let bannerAd = wx.createBannerAd({
      adUnitId: 'xxxx',
      adIntervals: 30, // 自动刷新频率不能小于30秒
      // ...
    })
    
    bannerAd.show()

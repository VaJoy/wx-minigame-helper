---
title: "激励视频广告"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/rewarded-video-ad.html
---

## 激励视频广告

激励视频广告组件是由客户端原生的图片、文本、视频控件组成的，层级最高，会覆盖在上屏 Canvas 上。

开发者可以调用 [wx.createRewardedVideoAd](<https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createRewardedVideoAd.html>) 创建激励视频广告组件。该方法返回的是一个全局单例。
    
    
    let video1 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
    let video2 = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
    console.log(video1 === video2)
    // true
    

激励视频广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。
    
    
    let rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'xxxx' })
    

为避免滥用广告资源，目前每个用户每天可观看激励式视频广告的次数有限，建议展示广告按钮前先判断广告是否拉取成功。

### 显示/隐藏

激励视频广告组件默认是隐藏的，需要调用 [RewardedVideoAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.show.html>) 进行显示。
    
    
    rewardedVideoAd.show()
    

只有在用户点击激励视频广告组件上的 `关闭广告` 按钮时，广告才会关闭。开发者不可控制激励视频广告组件的隐藏。

### 广告拉取成功与失败

激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 `关闭广告` 后会去拉取下一条广告。

如果拉取成功。[RewardedVideoAd.onLoad()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onLoad.html>) 会执行，[RewardedVideoAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.show.html>) 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。
    
    
    rewardedVideoAd.onLoad(() => {
      console.log('激励视频 广告加载成功')
    })
    
    rewardedVideoAd.show()
    .then(() => console.log('激励视频 广告显示'))
    

如果拉取失败，通过 [RewardedVideoAd.onError()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onError.html>) 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。[常见异常错误参考文档](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onError.html>)
    
    
    rewardedVideoAd.onError(err => {
      console.log(err)
    })
    

[RewardedVideoAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.show.html>) 返回的 Promise 也会是一个 rejected Promise。
    
    
    rewardedVideoAd.show()
    .catch(err => console.log(err))
    

### 拉取失败，重新拉取

如果组件的某次自动拉取失败，那么之后调用的 show() 将会被 reject。此时可以调用 [RewardedVideoAd.load()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.load.html>) 手动重新拉取广告。
    
    
    rewardedVideoAd.show()
    .catch(err => {
        rewardedVideoAd.load()
        .then(() => rewardedVideoAd.show())
    })
    

如果组件的自动拉取是成功的，那么调用 load() 方法会直接返回一个 resolved Promise，而不会去拉取广告。
    
    
    rewardedVideoAd.load()
    .then(() => rewardedVideoAd.show())
    

### 监听用户关闭广告

可选：开发者可选择接入服务端验证，为奖励下发提供额外的保护机制，以规避客户端的作弊行为,详见[激励广告反作弊](<../../security/antiadcheat.md>)。

只有在用户点击激励视频广告组件上的 `关闭广告` 按钮时，广告才会关闭。这个事件可以通过 [RewardedVideoAd.onClose()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onClose.html>) 监听。

小于 2.1.0 的基础库版本，`关闭按钮` 是在激励式视频播放结束后才出现，所以触发 onClose 时已经播放结束，`onClose` 触发时可以认为用户已经看完了广告。

大于等于 2.1.0 的基础库版本，`关闭按钮` 将会常驻，如下图所示

![](https://res8.wxqcloud.qq.com.cn/wxdoc/557ef0a9-ce59-48ab-96fa-a97a77bfaedb.png)

[RewardedVideoAd.onClose()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onClose.html>) 的回调函数会传入一个参数 res，`res.isEnded` 描述广告被关闭时的状态。

属性 | 类型 | 说明  
---|---|---  
isEnded | boolean | 视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频  
  
大于等于 2.1.0 的基础库版本，开发者需要根据 `res.isEnded` 判断是否视频是否播放结束、可以向用户下发奖励。
    
    
    rewardedVideoAd.onClose(res => {
        // 用户点击了【关闭广告】按钮
        // 小于 2.1.0 的基础库版本，res 是一个 undefined
        if (res && res.isEnded || res === undefined) {
          // 正常播放结束，可以下发游戏奖励
        }
        else {
            // 播放中途退出，不下发游戏奖励
        }
    })
    

### 1004 兜底分享页

在基础库 3.7.7 及以上版本，如果出现拉取失败中的 1004 错误码情况，激励广告组件会默认生成一个兜底分享页，支持用户分享后获得奖励。

此情况下，通过 [RewardedVideoAd.onError()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onError.html>) 注册的回调函数不会被执行，而通过 [RewardedVideoAd.onLoad()](<https://developers.weixin.qq.com/minigame/dev/api/ad/RewardedVideoAd.onLoad.html>) 注册的回调函数会被执行，回调函数参数是一个包含 useFallbackSharePage 标识的对象。

示例：
    
    
    rewardedVideoAd.onLoad((res) => {
      // res: { useFallbackSharePage: true }
      if (res && res.useFallbackSharePage) {
        console.log('使用兜底分享页')
      }
    })
    

若开发者不希望使用该兜底能力，可使用以下方法关闭： 在广告创建阶段 [wx.createRewardedVideoAd](<https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createRewardedVideoAd.html>)，针对某一个广告实例进行禁用。 示例：
    
    
    rewardedVideoAd = wx.createRewardedVideoAd({
      adUnitId: 'xxxx',
      disableFallbackSharePage: true
    })
    

若开发者希望监听 1004 兜底分享带来的小程序打开行为。可以读取进入小程序的 query 参数（可通过 [wx.getLaunchOptionsSync](<https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html>)获取），判断 query 参数中是否包含 `wxad_fallback_share=1` 的参数，包含意味此次打开来源于 1004 兜底分享。

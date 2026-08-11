---
title: "原生模板广告"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/custom-ad.html
---

## 原生模板广告

小程序广告流量主操作指引：[文档地址](<https://ad.weixin.qq.com/pdf.html?post_id=U2FsdGVkX19ll2hBY/i9/XyTZ3U858nPUczgOnREpy0=>)

原生模板广告组件是由客户端原生的图片、文本、视频控件组成的原生组件，层级最高，会覆盖在上屏 Canvas 上。

开发者可以调用 [wx.createCustomAd](<https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createCustomAd.html>) 创建原生模板广告组件。原生模板广告组件在创建后会自动拉取广告数据并进行渲染，开发者只需要控制原生模板广告组件的位置、宽度和显示即可。
    
    
    const customAd = wx.createCustomAd({
      adUnitId: 'adUnit-xxxx',
      style: {
        left: 10,
        top: 76,
        width: 375, // 用于设置组件宽度，只有部分模板才支持，如矩阵格子模板
        fixed: true // fixed 只适用于小程序环境
      }
    })
    
    customAd.show()
    

### 显示/隐藏

原生模板广告组件默认是隐藏的，需要调用 [CustomAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.show.html>) 进行显示。
    
    
    customAd.show()
    

当切换到没有原生模板广告组件的场景或页面时，调用 [CustomAd.hide()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.hide.html>) 隐藏原生模板广告组件。
    
    
    customAd.hide()
    

### 广告拉取成功与失败

CustomAd 在创建后会拉取广告。如果拉取失败，通过 [CustomAd.onError()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onError.html>) 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。[常见异常错误参考文档](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onError.html>)
    
    
    customAd.onError(err => console.log(err))
    

[CustomAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.show.html>) 返回的 Promise 也会是一个 rejected Promise。
    
    
    customAd.show().catch(err => console.log(err))
    

反之，如果拉取成功。[CustomAd.onLoad()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onLoad.html>) 会执行，[CustomAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.show.html>) 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。
    
    
    customAd.onLoad(() => console.log('原生模板广告加载成功'))
    
    customAd.show().then(() => console.log('原生模板广告显示'))
    

### 监听用户关闭广告

如果广告被用户关闭，通过 [CustomAd.onClose()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onClose.html>) 注册的回调函数会被执行，回调函数没有参数传递。
    
    
    customAd.onClose(() => console.log('原生模板广告关闭'))
    

### 监听广告隐藏

  * 矩阵格子广告触发型特殊说明： 用户在点击右上角关闭按钮时，广告将自动隐藏，开发者可通过 [CustomAd.onHide()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.onHide.html>) 接口监听隐藏事件，在必要时机通过 [CustomAd.show()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.show.html>) 使广告重新展示。（开发者主动调用 hide 也会触发隐藏事件）

    
    
    const handleHide = () => console.log('原生模板广告隐藏')
    customAd.onHide(handleHide)
    

### 销毁广告

在不需要使用广告组件或销毁页面时，可以调用 [CustomAd.destroy()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.destroy.html>) 来销毁原生模板广告

如果不对废弃的 CustomAd 进行销毁，则会导致其上的事件监听器无法释放。
    
    
    customAd.destroy()
    

另外，也可以使用 off 系列 API 来手动解绑事件，支持方法有 [CustomAd.offLoad()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offLoad.html>), [CustomAd.offError()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offError.html>), [CustomAd.offClose()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offClose.html>), [CustomAd.offHide()](<https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.offHide.html>)
    
    
    const handleLoad = () => console.log('原生模板广告加载成功')
    customAd.onLoad(handleLoad)
    customAd.offLoad(handleLoad)

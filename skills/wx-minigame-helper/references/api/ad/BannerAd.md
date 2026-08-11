---
title: "BannerAd"
type: api
category: api/ad
api: "BannerAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/BannerAd.html
---

# BannerAd

banner 广告组件。banner 广告组件是一个原生组件，层级比普通组件高。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。

## 属性

### Object style

banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。

属性 | 类型 | 说明  
---|---|---  
left | number | banner 广告组件的左上角横坐标  
top | number | banner 广告组件的左上角纵坐标  
width | number | banner 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。  
height | number | banner 广告组件的高度  
realWidth | number | banner 广告组件经过缩放后真实的宽度  
realHeight | number | banner 广告组件经过缩放后真实的高度  
  
## 方法

### [Promise BannerAd.show()](<BannerAd.show.md>)

显示 banner 广告。

### [BannerAd.hide()](<BannerAd.hide.md>)

隐藏 banner 广告。

### [BannerAd.destroy()](<BannerAd.destroy.md>)

销毁 banner 广告。

### [BannerAd.onResize(function listener)](<BannerAd.onResize.md>)

监听 banner 广告尺寸变化事件。

### [BannerAd.offResize(function listener)](<BannerAd.offResize.md>)

移除 banner 广告尺寸变化事件的监听函数

### [BannerAd.onLoad(function listener)](<BannerAd.onLoad.md>)

监听 banner 广告加载事件。

### [BannerAd.offLoad(function listener)](<BannerAd.offLoad.md>)

移除 banner 广告加载事件的监听函数

### [BannerAd.onError(function listener)](<BannerAd.onError.md>)

监听 banner 广告错误事件。

### [BannerAd.offError(function listener)](<BannerAd.offError.md>)

移除 banner 广告错误事件的监听函数

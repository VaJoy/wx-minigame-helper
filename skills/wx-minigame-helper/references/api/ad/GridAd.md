---
title: "GridAd"
type: api
category: api/ad
api: "GridAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/GridAd.html
---

# GridAd

grid(格子) 广告组件。grid(格子) 广告组件是一个原生组件，层级比普通组件高。grid(格子) 广告组件默认是隐藏的，需要调用 GridAd.show() 将其显示。grid(格子) 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 GridAd.onResize() 事件中提供。

## 属性

### Object style

grid(格子) 广告广告组件的样式。style 上的属性的值仅为开发者设置的grid(格子) 广告) 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 GridAd.onResize() 事件获得。

属性 | 类型 | 说明  
---|---|---  
left | number | grid(格子) 广告广告组件的左上角横坐标  
top | number | grid(格子) 广告组件的左上角纵坐标  
width | number | grid(格子) 广告组件的宽度。最小 300，最大至 `屏幕宽度`（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。  
height | number | grid(格子) 广告组件的高度  
realWidth | number | grid(格子) 广告组件经过缩放后真实的宽度  
realHeight | number | grid(格子) 广告组件经过缩放后真实的高度  
  
### string adTheme

grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。

### number gridCount

grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5

## 方法

### [Promise GridAd.show()](<GridAd.show.md>)

显示 grid(格子) 广告。

### [GridAd.hide()](<GridAd.hide.md>)

隐藏 grid(格子) 广告。

### [GridAd.destroy()](<GridAd.destroy.md>)

销毁 grid(格子) 广告。

### [GridAd.onResize(function listener)](<GridAd.onResize.md>)

监听 grid(格子) 广告尺寸变化事件。

### [GridAd.offResize(function listener)](<GridAd.offResize.md>)

移除 grid(格子) 广告尺寸变化事件的监听函数

### [GridAd.onLoad(function listener)](<GridAd.onLoad.md>)

监听 grid(格子) 广告加载事件。

### [GridAd.offLoad(function listener)](<GridAd.offLoad.md>)

移除 grid(格子) 广告加载事件的监听函数

### [GridAd.onError(function listener)](<GridAd.onError.md>)

监听 grid(格子) 广告错误事件。

### [GridAd.offError(function listener)](<GridAd.offError.md>)

移除 grid(格子) 广告错误事件的监听函数

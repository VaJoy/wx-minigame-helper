---
title: "CustomAd"
type: api
category: api/ad
api: "CustomAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/CustomAd.html
---

# CustomAd

原生模板广告组件。原生模板广告组件是一个原生组件，层级比普通组件高。原生模板广告组件默认是隐藏的，需要调用 CustomAd.show() 将其显示。如果宽度可配置，原生模板广告会根据开发者设置的宽度进行等比缩放，部分模板缩放后的尺寸会通过 CustomAd.onResize() 事件中提供。

## 属性

### Object style

原生模板广告组件的样式

属性 | 类型 | 说明  
---|---|---  
left | number | 原生模板广告组件的左上角横坐标  
top | number | 原生模板广告组件的左上角纵坐标  
fixed | boolean | (只对小程序适用) 原生模板广告组件是否固定屏幕位置（不跟随屏幕滚动）  
  
## 方法

### [Promise CustomAd.show()](<CustomAd.show.md>)

显示原生模板广告。

### [Promise CustomAd.hide()](<CustomAd.hide.md>)

隐藏原生模板广告。（某些模板广告无法隐藏）

### [boolean CustomAd.isShow()](<CustomAd.isShow.md>)

查询原生模板广告展示状态。

### [CustomAd.destroy()](<CustomAd.destroy.md>)

销毁原生模板广告。

### [CustomAd.onClose(function listener)](<CustomAd.onClose.md>)

监听原生模板广告关闭事件（仅部分可被用户关闭的模板支持）。

### [CustomAd.offClose(function listener)](<CustomAd.offClose.md>)

移除原生模板广告关闭事件的监听函数

### [CustomAd.onHide(function listener)](<CustomAd.onHide.md>)

监听原生模板广告隐藏事件, 某些模板如矩阵格子模板用户点击关闭时也会触发该事件。

### [CustomAd.offHide(function listener)](<CustomAd.offHide.md>)

移除原生模板广告隐藏事件的监听函数

### [CustomAd.onLoad(function listener)](<CustomAd.onLoad.md>)

监听原生模板广告加载事件。

### [CustomAd.offLoad(function listener)](<CustomAd.offLoad.md>)

移除原生模板广告加载事件的监听函数

### [CustomAd.onResize(function listener)](<CustomAd.onResize.md>)

监听原生模板广告宽高回调事件（部分横幅模板支持）。

### [CustomAd.offResize(function listener)](<CustomAd.offResize.md>)

移除原生模板广告宽高回调事件的监听函数

### [CustomAd.onError(function listener)](<CustomAd.onError.md>)

监听原生模板广告错误事件。

### [CustomAd.offError(function listener)](<CustomAd.offError.md>)

移除原生模板广告错误事件的监听函数

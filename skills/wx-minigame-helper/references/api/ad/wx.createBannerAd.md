---
title: "BannerAd wx.createBannerAd(Object object)"
type: api
category: api/ad
api: "wx.createBannerAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createBannerAd.html
---

# [BannerAd](<BannerAd.md>) wx.createBannerAd(Object object)

从基础库 [3.5.5](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护，请使用 [wx.createCustomAd](<wx.createCustomAd.md>) 代替

> 基础库 2.0.4 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建 banner 广告组件。请通过 [wx.getSystemInfoSync()](<../base/system/wx.getSystemInfoSync.md>) 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。每次调用该方法创建 banner 广告都会返回一个全新的实例。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  adUnitId | string |  | 是 | 广告单元 id  
|  adIntervals | number |  | 否 | 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）  
|  style | Object |  | 是 | banner 广告组件的样式  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  left | number |  | 是 | banner 广告组件的左上角横坐标  
|  top | number |  | 是 | banner 广告组件的左上角纵坐标  
|  width | number |  | 是 | banner 广告组件的宽度  
|  height | number |  | 是 | banner 广告组件的高度  
  
## 返回值

### [BannerAd](<BannerAd.md>)

banner 广告组件

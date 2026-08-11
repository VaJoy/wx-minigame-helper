---
title: "GridAd wx.createGridAd(Object object)"
type: api
category: api/ad
api: "wx.createGridAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createGridAd.html
---

# [GridAd](<GridAd.md>) wx.createGridAd(Object object)

从基础库 [2.30.2](<../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护

> 基础库 2.9.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建 grid(格子) 。每次调用该方法创建 grid(格子) 广告都会返回一个全新的实例。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  adUnitId | string |  | 是 | 广告单元 id  
|  adIntervals | number |  | 否 | 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 grid(格子) 广告不会自动刷新）  
|  style | Object |  | 是 | grid(格子) 广告组件的样式  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  left | number |  | 是 | grid(格子) 广告组件的左上角横坐标  
|  top | number |  | 是 | grid(格子) 广告组件的左上角纵坐标  
|  width | number |  | 是 | grid(格子) 广告组件的宽度  
|  height | number |  | 是 | grid(格子) 广告组件的高度  
  
|  adTheme | string |  | 是 | grid(格子) 广告广告组件的主题，提供 `white` `black` 两种主题选择。  
|  gridCount | number |  | 是 | grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5  
  
## 返回值

### [GridAd](<GridAd.md>)

grid(格子) 广告组件

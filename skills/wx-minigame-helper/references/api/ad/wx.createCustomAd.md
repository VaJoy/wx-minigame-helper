---
title: "CustomAd wx.createCustomAd(Object object)"
type: api
category: api/ad
api: "wx.createCustomAd"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/wx.createCustomAd.html
---

# [CustomAd](<CustomAd.md>) wx.createCustomAd(Object object)

> 基础库 2.11.1 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持，需要微信客户端版本不低于 3.16.3

## 功能描述

创建原生模板广告组件。请通过 [wx.getSystemInfoSync()](<../base/system/wx.getSystemInfoSync.md>) 返回对象的 SDKVersion 判断基础库版本号 >= 2.11.1 后再使用该 API。每次调用该方法创建原生模板广告都会返回一个全新的实例。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  adUnitId | string |  | 是 | 广告单元 id  
|  adIntervals | number |  | 是 | 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（仅对支持自动刷新的模板生效）  
|  style | Object |  | 是 | 原生模板广告组件的样式  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  left | number |  | 是 | 原生模板广告组件的左上角横坐标  
|  top | number |  | 是 | 原生模板广告组件的左上角纵坐标  
|  width | number |  | 是 | 原生模板广告组件的宽度（仅在某些模板生效，如矩阵格子）  
|  fixed | boolean |  | 是 | (只对小程序适用) 原生模板广告组件是否固定屏幕位置（不跟随屏幕滚动）  
  
## 返回值

### [CustomAd](<CustomAd.md>)

原生模板广告组件

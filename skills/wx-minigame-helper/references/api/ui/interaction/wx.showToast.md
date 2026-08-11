---
title: "wx.showToast(Object object)"
type: api
category: api/ui/interaction
api: "wx.showToast"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showToast.html
---

# wx.showToast(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

显示消息提示框

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  title | string |  | 是 | 提示的内容 |   
|  icon | string | success | 否 | 图标 |   
| |  合法值 | 说明 | 最低版本  
---|---|---  
success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度 |   
error | 显示失败图标，此时 title 文本最多显示 7 个汉字长度 | [2.14.1](<../../../guide/runtime/client-lib/compatibility.md>)  
loading | 显示加载图标，此时 title 文本最多显示 7 个汉字长度 |   
none | 不显示图标，此时 title 文本最多可显示两行，[1.9.0](<../../../guide/runtime/client-lib/compatibility.md>)及以上版本支持 |   
|  image | string |  | 否 | 自定义图标的本地路径，image 的优先级高于 icon | [1.1.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  duration | number | 1500 | 否 | 提示的延迟时间 |   
|  mask | boolean | false | 否 | 是否显示透明蒙层，防止触摸穿透 |   
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
## 示例代码
    
    
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    

## 注意

  * [wx.showLoading](<wx.showLoading.md>) 和 [wx.showToast](<wx.showToast.md>) 同时只能显示一个
  * [wx.showToast](<wx.showToast.md>) 应与 [wx.hideToast](<wx.hideToast.md>) 配对使用

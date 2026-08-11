---
title: "Promise InterstitialAd.show()"
type: api
category: api/ad
api: "InterstitialAd.show"
source: https://developers.weixin.qq.com/minigame/dev/api/ad/InterstitialAd.show.html
---

# Promise InterstitialAd.show()

## 功能描述

显示插屏广告。

## 返回值

### Promise

插屏广告显示操作的结果

## 错误码信息表

如果插屏广告显示失败，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可以获取到错误码及对应的错误信息。

代码 | 异常情况 | 理由  
---|---|---  
2001 | 触发频率限制 | 小程序启动一定时间内不允许展示插屏广告  
2002 | 触发频率限制 | 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告  
2003 | 触发频率限制 | 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告  
2004 | 广告渲染失败 | 该项错误不是开发者的异常情况，或因小程序页面切换导致广告渲染失败  
2005 | 广告调用异常 | 插屏广告实例不允许跨页面调用

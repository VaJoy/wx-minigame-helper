---
title: "Cocos/Laya/Egret引擎适配"
type: guide
category: guide/engine
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/cocos-laya-egret.html
---

# Cocos/Laya/Egret引擎适配

## 支持情况

许多开发者对小游戏对 Cocos、Egret、Laya等游戏引擎的支持情况非常关心。但是小游戏是一个不同于浏览器的 JavaScript 运行环境，没有 BOM 和 DOM API。然而，基本上所有基于 HTML5 的游戏引擎都是依赖浏览器提供的 BOM 和 DOM API 的。所以如果要在小游戏中使用引擎，需要对引擎进行改造。

目前，Cocos、Egret、Laya 已经完成了自身引擎及其工具对小游戏的适配和支持，对应的官方文档已经对接入小游戏开发做了介绍。

  * Cocos：<https://docs.cocos.com/creator/manual/zh/editor/publish/publish-wechatgame.html>
  * LayaAir：<https://layaair.com/3.x/doc/released/miniGame/wechat/readme.html>
  * Egert：[https://www.egret.uk/egretengine2d/](<https://www.egret.uk/egretengine2d/%E5%8F%91%E5%B8%83%E9%A1%B9%E7%9B%AEpublish/%E5%8F%91%E5%B8%83%E5%88%B0%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%B9%B3%E5%8F%B0/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/%E9%A1%B9%E7%9B%AE%E5%8F%91%E5%B8%83%E5%B0%8F%E6%B8%B8%E6%88%8F%E6%8C%87%E5%8D%97>)

## 小游戏是一个不同于浏览器的运行环境

无论是怎样的引擎，最终在游戏运行时所做的大部分事情都是 **随着用户的交互更新画面和播放声音** 。小游戏的开发语言是 JavaScript，那么在引擎的底层就需要通过 JavaScript 调用绘制 API 和音频 API。

一段 JavaScript 代码在运行时可以调用的 API 是依赖于 `宿主环境` 的。我们最常用的 `console.log` 甚至都不是 JavaScript 语言核心的一部分，而是浏览器这个宿主环境提供的。常见的宿主环境有浏览器、Node.js 等。浏览器有 BOM 和 DOM API，而 Node.js 则没有；Node.js 有 fs、net 等 Node.js 核心模块提供的文件、网络 API，而浏览器则不具备这些模块。例如，下面这段在浏览器中可以正常运行的代码，在 Node.js 中运行就会报错。
    
    
    let canvas = document.createElement('canvas')
    

因为 Node.js 这个宿主环境根本没有提供 document 这个内置的全局变量。
    
    
    ReferenceError: document is not defined
    

小游戏的运行环境是一个不同于浏览器的宿主环境，没有提供 BOM 和 DOM API，提供的是 wx API。通过 wx API，开发者可以调用 Native 提供的绘制、音视频、网络、文件等能力。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/feaa7a8b-c254-46ec-b5c9-d2679a27a48a.png)

如果你想创建画布，你需要调用 [wx.createCanvas()](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html>)
    
    
    let canvas = wx.createCanvas()
    let context = canvas.getContext('2d')
    

如果你想创建一个音频对象，你需要调用 [wx.createInnerAudioContext()](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html>)
    
    
    let audio = wx.createInnerAudioContext()
    // src 地址仅作演示，并不真实存在
    audio.src = 'bgm.mp3'
    audio.play()
    

如果你想获取屏幕的宽高，你需要调用 [wx.getSystemInfoSync()](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getSystemInfoSync.html>)
    
    
    let { screenWidth, screenHeight } = wx.getSystemInfoSync()
    

但是基于 HTML5 的游戏引擎会通过以下方式去创建画布、音频，获取屏幕宽高
    
    
    let canvas = document.createElement('canvas')
    let audio = document.createElement('audio')
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    

此时会产生错误，理由如前文所述，小游戏这个宿主环境根本没有提供 document 和 window 这两个在浏览器中内置的全局变量。因为小游戏环境是一个不同于浏览器的宿主环境。
    
    
    ReferenceError: document is not defined
    ReferenceError: window is not defined
    

所以，基本上所有基于 HTML5 的游戏引擎都不能直接迁移到小游戏中使用，因为引擎可能或多或少都用到了 BOM 和 DOM 这些浏览器环境特有的 API。只有对引擎进行改造，将对 BOM 和 DOM API 的调用改成 wx API 的调用，引擎才能运行在小游戏环境中。

除了修改引擎，还有一种适配方式，即在引擎和游戏逻辑代码之间加一层模拟 BOM 和 DOM API 的适配层，我们称之为 Adapter。这层适配层在全局通过 wx API 模拟了引擎会访问到的那部分 window 和 document 对象的属性和方法，使引擎感受不到环境的差异。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/6df928fa-6a35-4f64-8e51-c0e22ef4df29.png)

Adapter 是用户代码，不是基础库的一部分。关于 Adapter 的介绍，参见教程 [Adapter](<../runtime/adapter.md>)。

## 使用其他游戏引擎

除去以上提到的兼容了小游戏平台的游戏引擎，开发者如果想用其他 HTML5 游戏引擎来开发小游戏也是可以的，但需要对其进行修改。修改思路建议为先引入通用的 Adapter 尝试运行，再把遇到的问题逐个解决。

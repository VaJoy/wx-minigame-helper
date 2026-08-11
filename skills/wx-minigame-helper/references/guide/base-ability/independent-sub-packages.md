---
title: "独立分包"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/independent-sub-packages.html
---

# 独立分包

> 微信客户端 7.0.13，基础库 ['2.12.1'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>) 及以上版本开始支持。开发者工具需使用最新nightly版本，可[点此下载](<https://developers.weixin.qq.com/miniprogram/dev/devtools/log>)。

独立分包是小游戏中一种特殊类型的分包，可以独立于主包和其他分包运行。以独立分包路径启动小游戏时，客户端会仅下载独立分包并启动游戏，不会下载主包，以此实现部分场景下快速启动游戏的需求。开发者可以按需将某些具有一定功能独立性的页面配置到独立分包中，可以很大程度提高页面打开速度。

举个例子，当一个游戏需要实现排行榜分享和打开的功能时，就可以用上独立分包的能力：

  1. 在`game.json`内配置只包含排行榜逻辑的独立分包路径
  2. `wx.shareAppMessage`参数或`wx.onShareAppMessage`回参传入`path`，值为`game.json`内配置的排行榜模块独立分包路径
  3. 通过上面两个接口分享到群聊，群内其他用户通过消息卡片进入游戏时，客户端仅下载排行榜独立分包并启动，不会下载完整代码包，节省启动耗时
  4. 独立分包启动后，开发者可以按需使用`wx.loadSubpackage`接口预下载主包或其他分包，并在合适时机（比如用户点击开始游戏时）执行已下载的代码包逻辑

## 示例代码

假设小游戏目录结构如下：
    
    
    .
    ├── game.js
    ├── game.json
    ├── moduleA
    │   └── game.js
    ├── moduleB
    │   └── game.js
    └── utils
    

开发者通过在`game.json`的`subPackages`字段中对应的分包配置项中定义`independent`字段声明对应分包为独立分包。
    
    
    {
      "subPackages": [
        {
          "name": "moduleA",
          "root": "/moduleA/", // 普通分包
        },
        {
          "independent": true, // 独立分包，指定一个目录，目录根目录下的 game.js 会作为入口文件，目录下所有资源将会统一打包
          "name": "moduleB",
          "root": "/moduleB/",
        }
      ]
    }
    

游戏内分享指定独立分包页面：
    
    
    // 分享给好友、群
    wx.shareAppMessage({
      title: '分享标题',
      imageUrl: 'xx.jpg',
      query: 'a=1&b=2',
      path: '/moduleB/' // path 为 game.json 配置中独立分包的 root
    })
    // 分享到朋友圈
    wx.onShareTimeline({
      title: '分享标题',
      imageUrl: 'xx.jpg',
      query: 'a=1&b=2',
      path: '/moduleB/' // path 为 game.json 配置中独立分包的 root
    })
    // 添加到收藏
    wx.addToFavorites({
      title: '收藏标题',
      imageUrl: 'xx.jpg',
      query: 'a=1&b=2',
      path: '/moduleB/' // path 为 game.json 配置中独立分包的 root
    })
    

独立分包内，下载主包或其他分包
    
    
    const loadTask = wx.loadSubpackage({
      name: '__GAME__', // 下载主包
      success(res) {
        console.log('load __GAME__ success', res)
      },
      fail(err) {
        console.error('load __GAME__ fail', err)
      }
    })
    
    
    
    const loadTask = wx.loadSubpackage({
      name: '/moduleA/', // 下载其他分包
      success(res) {
        console.log('load moduleA success', res)
      },
      fail(err) {
        console.error('load moduleA fail', err)
      }
    })
    

## 使用场景

目前支持独立分包启动的入口包括：

  * 小游戏分享到聊天的消息卡片
  * 小游戏分享到朋友圈的预览页
  * 微信收藏列表中的小游戏链接卡片

## 注意事项

  * 一个小游戏中可以有多个独立分包
  * **小游戏独立分包启动只对冷启动有效**
  * 独立分包属于分包的一种。普通分包的所有限制都对独立分包有效。
  * **独立分包中不能依赖主包和其他分包中的内容** ，包括js文件和资源文件。
  * `wx.shareAppMessage`参数或`wx.onShareAppMessage`回参中的`path`必须是`game.json`中定义的独立分包的`root`字段。

## 开发工具调试

开发者工具自定义编译条件中可以模拟独立分包模式启动，如下图

![](https://res8.wxqcloud.qq.com.cn/wxdoc/27b43dda-c636-49f1-8698-40314ee8673f.png)

## 低版本兼容

低于7.0.13的微信客户端版本不支持小游戏独立分包特性，会默认使用主包启动。

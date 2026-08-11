---
title: "分包加载"
type: guide
category: guide/base-ability/subpackage
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage.html
---

# 分包加载

随着小游戏的玩法越来越丰富，开发者对于扩大包大小的需求越来越强烈，所以我们推出了小游戏分包加载这一个功能。所谓的分包加载，即把游戏内容按一定规则拆分这几包，在首次启动时先下载必要的包，这个必要的包我们称为「主包」，开发者可以在主包内触发其它分包的下载，从而把首次启动的下载耗时分散到游戏运行中。

开发者可以使用框架封装的分包加载能力，也可以在不使用框架的情况下直接使用game.json配置分包。详情在下面内容介绍。

### 分包加载包大小的限制

目前小游戏分包大小有以下限制：

  * 整个小游戏所有主包+分包大小不超过 30M
  * 主包不超过 4M
  * 单个普通分包不限制大小
  * 单个独立分包不超过 4M

## 使用方法

### 1\. 分包配置

假设游戏的目录结构如下：
    
    
    ├── game.js
    ├── game.json
    ├── images
    │   ├── a.png
    │   ├── b.png
    ├── stage1
    │   └── game.js
    │   └── images
    │       ├── 1.png
    │       ├── 2.png
    └── stage2.js
    

`game.json` 中的配置：
    
    
    {
      ...
      "subpackages": [
        {
          "name": "stage1",
          "root": "stage1/" // 可以指定一个目录，目录根目录下的 game.js 会作为入口文件，目录下所有资源将会统一打包
        }, {
          "name": "stage2",
          "root": "stage2.js" // 也可以指定一个 JS 文件
        }
      ]
      ...
    }
    

配置在 `subpackages` 字段内的目录或 js 文件，将按照配置打包成一个个「分包」，没有配置在 `subpackages` 中的目录和 js，将会被打包到主包中。

**注：目前不支持将开放数据域目录（即`openDataContext` 配置目录）设置为分包或置于某个分包下。**

### 2\. 分包加载

我们提供了 [wx.loadSubpackage()](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html>) API 来触发分包的下载，调用 wx.loadSubpackage 后，将触发分包的下载与加载，在加载完成后，通过 wx.loadSubpackage 的 success 回调来通知加载完成。

同时，wx.loadSubpackage 会返回一个 [LoadSubpackageTask](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/LoadSubpackageTask.html>)，可以通过 LoadSubpackageTask 获取当前下载进度。

示例代码：
    
    
    const loadTask = wx.loadSubpackage({
      name: 'stage1', // name 可以填 name 或者 root
      success: function(res) {
        // 分包加载成功后通过 success 回调
      },
      fail: function(res) {
        // 分包加载失败通过 fail 回调
      }
    })
    
    loadTask.onProgressUpdate(res => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
    

### 3\. 分包预加载

**基础库版本['3.4.9'](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>)及以上版本支持**

我们提供了 [wx.preDownloadSubpackage()](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.preDownloadSubpackage.html>) API 来触发分包的预下载，调用 `wx.preDownloadSubpackage` 后，将触发分包的下载与加载，在加载完成后，通过 `wx.preDownloadSubpackage` 的 success 回调来通知加载完成。预加载完成后，需要使用 `wx.loadSubpackage` 执行分包代码。

[wx.preDownloadSubpackage()](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.preDownloadSubpackage.html>) 与 [wx.loadSubpackage()](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html>) 的区别：`wx.preDownloadSubpackage` 只下载代码包，不自动执行代码；`wx.loadSubpackage` 下载完代码包后会自动执行代码。

示例代码：
    
    
    // 预加载
    const loadTask = wx.preDownloadSubpackage({
      name: 'stage1',
      success: function(res) {
        // 分包预加载成功后通过 success 回调
      },
      fail: function(res) {
        // 分包预加载失败通过 fail 回调
      }
    })
    
    loadTask.onProgressUpdate(res => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
    
    // 在合适的时机执行分包代码逻辑
    wx.loadSubpackage({
      name: 'stage1'
    })
    

### 老版本兼容

由微信后台编译来处理旧版本客户端的兼容，后台会编译两份代码包，一份是分包后代码，另外一份是整包的兼容代码。对于老客户端，会去下载整包代码启动。

**开发者在基础库 2.1.0 以下的版本不需要调用 wx.loadSubpackage 触发加载，2.1.0 以下版本不存在 wx.loadSubpackage 方法。**

老版本下，需要开发者调用 `require` 触发分包入口文件的加载，例如：
    
    
    require('stage1/game.js')
    

微信 6.6.7 以下客户端开发版/体验版因历史兼容问题无法打开分包小游戏，正式发布版不受影响。如果不打算兼容老版本，开发者可以通过 mp 小程序后台配置端屏蔽 2.1.0 以下基础版的用户。

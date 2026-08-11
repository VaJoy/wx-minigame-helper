---
title: "封面图插件"
type: guide
category: guide/performance/startup
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-start-loading-plugin.html
---

# 封面图插件

小游戏首屏启动优化有很多最佳实践，其中一个最佳实践是游戏首包仅绘制一张最简单的静态图，玩家能够在最短的时间内看到游戏元素进而提升游戏的启动留存。不少开发者也在社区分享过自己的最佳实践。  
这些最佳实践的普遍思路在于**不依赖游戏引擎用 WebGL 来绘制一张最简单的静态图** ，不依赖游戏引擎是基于首包尽可能小的出发点，仅仅绘制一张静态图是因为如果做比较复杂一点的交互需要一个相对完善一点的渲染引擎，代码包体积又会变大。  
为了能够既满足启动的最佳实践又能够让封面图交互相对丰富，我们将这种最佳实践封装成了封面图插件。

## 封面图插件介绍

封面插件将绘制静态图的 WebGL 逻辑封装在插件内，同时为了能够做更加丰富的交互，基础库内置了渲染引擎，基于渲染引擎我们能够做更加丰富的封面图模板，如静态图模板、多图切换模板、进度条模板等，其架构图如下所示： ![](https://res8.wxqcloud.qq.com.cn/wxdoc/948ad8c2-1881-4ba3-8034-d2966e2a6b1a.png)

## 开发者改造成本

  1. 设计游戏启动封面图（依赖于设计资源，如果有图直接使用即可）；
  2. 更改游戏初始化流程，将游戏代码都改成子包加载方式，首帧逻辑改为初始化插件并异步加载游戏代码执行真正的游戏初始化（1 - 2天）；

在有封面图资源的前提下，**预计1 - 2 天即可完成接入** ；

## 封面图插件优势

  1. 内置渲染引擎：官方维护，封面图阶段可以做到相对丰富的交互而无需游戏额外下载渲染引擎（基础库静默更新）；
  2. 插件优势：不占游戏代码包体积，使用的游戏越多，玩家本地命中插件的概率越大；

## 应用案例

接入游戏：《星途WeGoing》

接入表现：封面图 -> 游戏loading -> 正式进入游戏

![](https://res8.wxqcloud.qq.com.cn/wxdoc/4f831847-2804-4956-94b7-91eeba337e67.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/1d1d1baf-7932-44a8-af44-ce3e7f139535.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/fd62ba7e-7b61-4fd5-a91b-4b27b94fbffa.png)

数据效果 安卓：优化后总启动耗时 2.3s，提升34%； iOS：优化后启动耗时 1.6s，提升33%；

## 接入方式

### 1\. 申请插件

登录MP后台后，点击[插件申请](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxbd990766293b9dc4&token=&lang=zh_CN>)。

### 2\. game.json声明插件
    
    
    {
      "plugins": {
        "MinigameLoading": {
          "version": "latest",
          "provider": "wxbd990766293b9dc4",
          "contexts": [{
            "type": "isolatedContext"
          }]
        }
      }
    }
    

### 3\. 获取contextType及contextAttributes
    
    
    // 这段代码需要在游戏画面渲染后执行。避免影响游戏获取context
    let ctx = GameGlobal.canvas.getContext('2d')
    if (ctx) {
    	console.log('contextType: 2d; ', 'contextAttributes: ', ctx.getContextAttributes())
    } else {
    	ctx = GameGlobal.canvas.getContext('webgl')
    	console.log('contextType: webgl; ', 'contextAttributes: ', ctx.getContextAttributes())
    }
    

### 4\. game.js渲染封面

compareVersion定义可见[版本号比较](<../../runtime/client-lib/compatibility.md>)。
    
    
    // 当基础库版本>=2.1.0才能使用分包能力，当不支持分包功能时，会下载完整包，因此不需要展示加载封面
    if (compareVersion(wx.getSystemInfoSync().SDKVersion, '2.1.0') > -1) {
      try {
        GameGlobal.LoadingManager = requirePlugin('MinigameLoading', {
          customEnv: {
            wx,
            canvas: GameGlobal.canvas, // 传入主屏canvas
          }
        }).default;
        
        // 创建封面
        GameGlobal.LoadingManager.create({
          // 填写图片模板
          images: [{
            src: "images/p1.png",
          }],
          // 接入封面插件前主屏contexttype
          contextType: 'webgl',
          // 接入封面插件前，getContext时，传入的contextAttributes
          contextAttributes: {},
        }).then(() => {
        // 封面已显示
        }).catch((err) => {
        // 封面创建异常
        });
      } catch(err) {
        // 当前客户端不支持使用插件，会黑屏（占比小于1%）
        console.error('当前环境不支持使用插件', error);
      }
      // 支持插件，开始下载必要分包
    } else {
      // 不支持分包，省略分包下载，开始执行游戏逻辑
      // 具体可见分包文档-老版本兼容： https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage.html
    }
    

### 5\. 隐藏封面
    
    
    GameGlobal.LoadingManager.destroy().then(() => {
    	// callback
    })
    

小游戏改造示例：<https://github.com/zhangjunkunn/cocos-blackjack>。

## API文档

插件有独立的插件文档，封面图插件详细的API文档可见[插件文档](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxbd990766293b9dc4&token=&lang=zh_CN>)。

## 联系我们

如有任何问题，欢迎[联系小助手](<https://res8.wxqcloud.qq.com.cn/wxdoc/0d0a621f-a50f-4a89-8454-2ef762b4fbf0.png>)咨询。

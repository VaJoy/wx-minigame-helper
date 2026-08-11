---
title: "研发指引"
type: guide
category: guide/open-ability/playable
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/dev.html
---

## 研发指引

### 运行环境

首先要了解为什么需要一个全新的运行环境，小游戏一直在做启动相关的优化，但一个完整的小游戏运行时免不了要做启动权限检查和各种开放能力注入，在试玩这类场景下，复用小游戏的运行时并不能满足要求，我们希望拉起一个“小游戏”就跟拉起一个激励视频一样轻量，因此我们抽象了一个类似小游戏子集的方式，称为**小游戏试玩** 。

目前小游戏试玩环境支持了在**iOS 微信客户端** 、**Android 微信客户端** 和用于调试的**微信开发者工具上** 运行，PC 微信客户端、Mac 微信客户端暂不支持。

  * 微信客户端版本 >= 8.0.50
  * 微信开发者工具 >= Nightly 1.06.2408262
  * 微信客户端开发预览所需小游戏基础库 >= 3.5.4
  * 微信开发者工具运行所需小游戏基础库 >= 3.5.5

### 基础库

小游戏试玩的基础库和小游戏的基础库是完全独立的。试玩基础库与小游戏基础库一样，API会挂载在全局的 wx 对象上，但试玩里面能用的 wx 接口是不一样的，有些接口名虽然和小游戏的接口名一样，但定义上有细微差别，请仔细查看试玩的[API文档](<api.md>)。

### 能力限制

见[开放能力](<api.md>)

### 开发指南

完成试玩AppID的申请以后，即可参照[常规小游戏开发](<https://developers.weixin.qq.com/minigame/dev/guide>)的方式制作试玩。

使用有服务商运营权限的微信号登录微信开发者工具，新建/导入项目时在开发者工具中填入试玩AppID，即可以试玩模式开发。 

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ade37237-4422-49b3-91a9-56fca400be35.png)

#### 小游戏试玩配置

试玩目录下的`game.json`用来对试玩进行配置，文件内容是一个JSON对象，有以下属性：

属性 | 类型 | 说明 | 是否必填  
---|---|---|---  
deviceOrientation | string | 试玩分包的横竖屏信息，**portrait** 代表竖屏，**landscape** 代表横屏，默认是 **portrait** | 否  
  
### Adapter

目前主流的游戏引擎都已经适配了小游戏，开发试玩可以使用习惯的游戏引擎。游戏引擎适配微信小游戏的方式一般是使用或魔改平台提供的Adapter适配到自家引擎。

值得注意的是，一般引擎的 Adapter 都是为了抹平小游戏和浏览器的差异，比如构造假的BOM和DOM接口使得引擎层面不用改造。但不可避免的引擎魔改后的 Adapter 会依赖小游戏 wx 接口来做适配，前面有提到，小游戏试玩的 wx 对象和小游戏的 wx 对象是独立的，所以这些基于 wx 接口的适配逻辑在小游戏试玩环境下可能会直接运行报错。

为了降低开发者的适配成本，在小游戏试玩环境我们同样提供了一个相对通用的适配器，已内置到试玩基础库中。

如果在开发试玩的过程中出现内置适配器未覆盖的接口调用报错，可参考[旧小游戏试玩适配器](<https://github.com/wechat-miniprogram/minigame-playable>)实现自定义的适配器，并反馈平台完善内置适配器。

修改示例：
    
    
    // 最简示例
    wx.onShow = function(cb: Callback) {
      // 注册onShow就立即回调
      if (cb) {
        cb()
      }
    }
    

### 运行调试

小游戏试玩本身是一个独立工程，可以通过开发者工具来运行：

#### 运行

![](https://res8.wxqcloud.qq.com.cn/wxdoc/41be01df-e123-4752-8605-a694649b12bf.png)

试玩工程不可修改“运行模式”和“编译模式”，点击“编译”，即可在开发者工具-模拟器区域看到试玩内容。

点击“预览”可生成预览二维码，使用iOS、安卓微信客户端扫码，即可在真机上通过宿主运行试玩。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/2bd79227-d376-46dd-a399-885750c8c695.png)

#### 调试

小游戏试玩目前主要是借助 vConsole 在手机上查看 console API 输出的日志内容和额外的调试信息，暂不支持真机调试。与小游戏可以通过右上角菜单手动切换调试不同，因为试玩有独立的运行模式，试玩只能通过 [wx.setEnableDebug](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.setEnableDebug>) 来切换调试模式。

测试时，建议进行多机型多系统测试验证，避免影响线上运行效果。

> 微信开发者工具调试：要求微信开发者工具版本不低于 1.06.2408262 ，小程序基础库版本不低于 3.5.5。 真机调试：要求客户端版本不低于8.0.50，小程序基础库版本不低于 3.5.4；建议小游戏基础库版本不低于3.5.6以支持试玩横竖屏切换。

### 提审发布

小游戏试玩广告的上传、提审、发布和常规小游戏是完全独立的。在开发者工具编辑完成试玩的代码包后，点击上传即可以在后台生成一个可供发布的试玩版本。

上传完成后可以到【微信服务平台】->【小游戏】->【试玩广告页面】管理和发布对应的试玩版本。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/bcb53c10-a5c3-41fa-8984-08c21ab37b0c.png)

### 迁移指南

如果已经使用[旧版试玩](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/v1/guide>)制作了试玩内容，可以修改配置、免开发即可迁移到新版本试玩。

#### 将原试玩分包拆分为独立工程

##### 拆分前

###### 小游戏主包目录结构

其中minigame/playableDemo由于是Cocos/Laya等引擎导出的游戏项目迁移至小游戏独立分包，通常会包含game.json、project.config.json等小游戏必需文件。
    
    
    // minigame目录
    .
    ├── moduleA // 普通分包
    │   └── game.js
    ├── playableDemo // 试玩分包
    │   ├── game.js
    │   ├── game.json
    │   ├── project.config.json
    │   └── playable-adapter.js // 试玩adapter
    ├── game.js
    ├── game.json
    └── project.config.json
    

###### 小游戏主包game.json

`minigame/game.json`
    
    
    {
      "subPackages": [
        {
          "name": "moduleA",
          "root": "/moduleA/" // 普通分包
        },
        {
         "independent": true,
          "name": "playableDemo", // 分包名，可自定义，该名称将被展示到投放界面
          "root": "/playableDemo/", // 分包路径，可自行指定一个目录，目录根目录下的 game.js 会作为入口文件，目录下所有资源将会统一打包
          "meta": {
            "type": "playable", // 固定值，声明为小游戏试玩分包
            "playableOrientation": "portrait" // 可选值，试玩方向，portrait-竖屏，landscape-横屏
          }
        }
      ]
    }
    

###### 试玩game.js

`minigame/playableDemo/game.js`使用了`playable-adapter.js`时内容如下：
    
    
    // minigame/playableDemo/game.js
    // 引用适配器
    const PlayableAdapter = require('./playable-adapter.js').PlayableAdapter;
    
    // 小游戏试玩支持多个独立分包，因此初始化需要传入独立分包的路径
    new PlayableAdapter({
      userPathPrefix: 'playableDemo/',
    });
    // 其他业务逻辑
    // ...
    

##### 拆分后

###### 目录结构

`playableDemo`目录已复制到新目录`playableDemoNew`。
    
    
    .
    ├── minigame // 小游戏主包目录
    │   ├── moduleA // 普通分包
    │   │   └── game.js
    │   ├── playableDemo // 试玩分包
    │   │   ├── game.js
    │   │   ├── game.json
    │   │   ├── project.config.json
    │   │   └── playable-adapter.js // 试玩adapter
    │   ├── game.js
    │   ├── game.json
    │   └── project.config.json
    └── playableDemoNew // 拆分后的试玩目录，注意playable-adapter.js已删除
        ├── game.js
        ├── game.json
        └── project.config.json
    

##### 配置试玩工程

###### 移除Adapter逻辑

试玩基础库已内置`Adapter`，新版试玩无需手动引入`playable-adapter.js`，降低接入成本。

  1. 删除`playableDemoNew/playable-adapter.js`
  2. 修改`playableDemoNew/game.js`

    
    
    /** 删除或注释这段内容
    // minigame/playableDemo/game.js
    // 引用适配器
    const PlayableAdapter = require('./playable-adapter.js').PlayableAdapter;
    
    // 小游戏试玩支持多个独立分包，因此初始化需要传入独立分包的路径
    new PlayableAdapter({
      userPathPrefix: 'playableDemo/',
    });
    */
    
    // 其他业务逻辑
    // ...
    

###### 修改试玩屏幕方向

试玩作为独立工程，屏幕方向的修改和常规小游戏一致，区别是仅支持`portrait`和`landscape`。

**注意：建议试玩工程game.json仅配置deviceOrientation，增加其他配置无效，但不会有任何提示。**

修改`playableDemoNew/game.json`
    
    
    {
      "deviceOrientation": "portrait"
    }
    

#### 「可选」从小游戏主包中移除试玩分包

**注意：从小游戏主包中删除试玩分包后会在下次小游戏提审发布后触发已投放的旧版试玩下线，请谨慎操作。**

  1. 修改`minigame/game.json` 删除试玩独立分包相关配置。

    
    
    {
      "subPackages": [
        {
          "name": "moduleA",
          "root": "/moduleA/" // 普通分包
        }
      ]
    }
    

  2. 删除`minigame/playableDemo`目录

    
    
    // minigame目录
    .
    ├── moduleA // 普通分包
    │   └── game.js
    ├── game.js
    ├── game.json
    └── project.config.json

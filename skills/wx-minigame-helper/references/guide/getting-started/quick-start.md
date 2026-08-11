---
title: "学习新手教程"
type: guide
category: guide/getting-started
source: https://developers.weixin.qq.com/minigame/dev/guide/develop/start.html
---

# 学习新手教程

## 注册小游戏账号

  1. 前往[注册页面](<https://mp.weixin.qq.com/wxopen/waregister?action=step1>)注册小程序账号，[点击查看流程指引](<https://kf.qq.com/faq/170109iQBJ3Q170109JbQfiu.html>)

  2. 选择类目时选择游戏类目，选择游戏类目后，该账号即为小游戏账号（无法更改一级类目，谨慎选择），[点击查看流程指引](<https://developers.weixin.qq.com/minigame/introduction/guide/type>)

## 下载开发者工具

前往 [开发者工具页面](<https://developers.weixin.qq.com/miniprogram/dev/devtools/download>)，选择符合当前系统的版本下载

如果想使用最新的特性和能力，请选择【开发版】，如果想使用更稳定的版本，请选择【稳定版】

## 创建小游戏项目

  1. 打开已安装的开发者工具客户端，使用刚刚注册小游戏账号登记的微信账号“扫一扫”扫码即可进入开发环境。

  2. 选择左侧列表中的“小游戏”，然后点击右侧“+”号，开始创建小游戏项目。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/6d1878bd-88c1-4517-8955-9effaa8da436.png)

  3. 参数填写：创建时有默认的项目名称和目录，可以自行修改合适的项目名称以及本机空目录，下拉选择找到刚注册的小游戏账号的 AppID，勾选【不使用云服务】，可以后面需要使用时再打开

（如果你尚未完成AppID的注册，可以先点击“测试号”，进行体验，“测试号”除了无法验证商业化能力以及无法上传发布，其他功能都可以正常体验）

![](https://res8.wxqcloud.qq.com.cn/wxdoc/0cd4c079-a149-4c17-b5a5-99081037cd00.png)

  4. 均填写完整后点击右下角“创建”按钮，即可完成创建小游戏。

在开发者工具中就能进入小游戏的可视化开发界面了。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/035f6a6d-7b23-4ccc-8f07-cbce4edfb646.png)

如果你想了解开发者工具界面上的各项功能，可以[查看开发者工具主界面介绍](<https://developers.weixin.qq.com/miniprogram/dev/devtools/page#%E4%B8%BB%E7%95%8C%E9%9D%A2>)

## 导入小游戏项目

如果你使用的是[Unity](<../engine/unity-webgl-transform.md>)、[Cocos 或者 Laya](<../engine/cocos-laya-egret.md>)等游戏引擎进行开发，在游戏引擎侧就能导出小游戏代码包，通过面板中的【导入】，选择对应的文件夹目录打开即可

注意：小游戏项目文件夹是必定有`project.config.json`文件的，例如 Unity 导出的项目结构包含了 minigame 和 webgl 这 2 个文件夹，需要选择 minigame 文件夹进行导入

## 小游戏项目结构
    
    
    ├── game.js
    ├── game.json
    ├── project.config.json
    └── project.private.config.json
    

小游戏核心的目录结构主要以以上 4 个文件为主

`project.config.json`和`project.private.config.json`是项目配置文件，是项目编辑时的配置，具体字段详情[点击查看配置介绍](<https://developers.weixin.qq.com/minigame/dev/devtools/projectconfig>)

`game.json`是游戏的配置文件，是游戏运行时的配置，具体字段详情[点击查看配置介绍](<https://developers.weixin.qq.com/minigame/dev/reference/configuration/app>)

`game.js`是游戏执行逻辑的主入口，示例项目中的其他代码和资源均为`game.js`的引用

注意：如果在`project.config.json`中配置了`miniprogramRoot`，则`game.js`和`game.json`可以和`project.config.json`不在同一级目录中

例如创建项目时选择了【微信云开发】模板，则目录结构为
    
    
    ├── cloudfunction
    ├── miniprogram
    │   ├── game.js
    │   ├── game.json
    ├── project.config.json
    └── project.private.config.json
    

## 学习飞机游戏示例

**注意：小游戏创建项目默认创建的飞机游戏示例，本质上是一个 Canvas2D 游戏，本文只提供一个游戏开发的思路讲解，并不推荐在线上环境中使用该示例，我们更推荐使用[Unity](<../engine/unity-webgl-transform.md>)、[Cocos 或者 Laya](<../engine/cocos-laya-egret.md>)等游戏引擎进行小游戏开发**

我们创建的小游戏项目的初始目录结构如下：
    
    
    ├── audio                                      // 音频资源
    ├── images                                     // 图片资源
    ├── js
    │   ├── base
    │   │   ├── animatoin.js                       // 帧动画的简易实现
    │   │   ├── pool.js                            // 对象池的简易实现
    │   │   └── sprite.js                          // 游戏基本元素精灵类
    │   ├── libs
    │   │   └── tinyemitter.js                     // 事件监听和触发
    │   ├── npc
    │   │   └── enemy.js                           // 敌机类
    │   ├── player
    │   │   ├── bullet.js                          // 子弹类
    │   │   └── index.js                           // 玩家类
    │   ├── runtime
    │   │   ├── background.js                      // 背景类
    │   │   ├── gameinfo.js                        // 用于展示分数和结算界面
    │   │   └── music.js                           // 全局音效管理器
    │   ├── databus.js                             // 管控游戏状态
    │   ├── main.js                                // 游戏入口主函数
    │   └── render.js                              // 基础渲染信息
    ├── .eslintrc.js                               // 代码规范
    ├── game.js                                    // 游戏逻辑主入口
    ├── game.json                                  // 游戏运行时配置
    ├── project.config.json                        // 项目配置
    └── project.private.config.json                // 项目个人配置
    

在开发者工具中运行游戏，可以看到一个飞机发射子弹，子弹击打敌机后得分的游戏。接下来，我们简单讲解一下该游戏示例的实现思路：

#### 实现思路

该小游戏示例是一个 Canvas2D 飞机游戏，通过[微信 API](<https://developers.weixin.qq.com/doc/oplatform/openApi/ams/open/api_agencycheckcanopenpublisher>)来实现游戏的交互逻辑。

  * 注意：如果你想以 Web 开发的风格写小游戏代码，可以通过引入[weapp-adapter](<../runtime/adapter.md>)来实现。

我们从项目的主入口`game.js`只引用了`js/main.js`，主要的游戏逻辑都来自`Main`这个类中。

`Main`这个类实现了一个简单的游戏框架，包含了游戏的初始化、重启、敌机生成、碰撞检测、渲染、更新逻辑和主循环等功能。通过这些功能，游戏能够在 Canvas 上动态运行并响应用户的输入。

我们解读一下本示例游戏中几个关键的游戏逻辑构成

#### 1\. 初始化Canvas
    
    
    canvas = wx.createCanvas(); // 创建Canvas画布
    ctx = canvas.getContext("2d"); // 获取canvas的2D绘图上下文
    

我们需要绘制画面到屏幕上，首选需要创建一个 Canvas，并获取 Canvas 的 2D 渲染上下文，用于绘制图形。

如果你有引入 [weapp-adapter](<../runtime/adapter.md>)，在 [weapp-adapter](<../runtime/adapter.md>) 中默认会创建一个 Canvas 做为主屏 Canvas

[wx.createCanvas()](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/wx.createCanvas.html>)有一个规则：首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。

#### 2\. 游戏初始化
    
    
    import Player from './player/index'; // 导入玩家类
    import Enemy from './npc/enemy'; // 导入敌机类
    // ...
    
    export default class Main {
      bg = new BackGround(); // 创建背景
      player = new Player(); // 创建玩家
      gameInfo = new GameInfo(); // 创建游戏UI信息显示
    
      constructor() {
        // 当开始游戏被点击时，重新开始游戏
        this.gameInfo.on("restart", this.start.bind(this));
        // 开始游戏
        this.start();
      }
    
      start() {
        GameGlobal.databus.reset(); // 重置数据
        this.player.init(); // 重置玩家状态
        window.cancelAnimationFrame(this.aniId); // 清除上一局的动画
        this.aniId = window.requestAnimationFrame(this.loop.bind(this)); // 开始新的动画循环
      }
    }
    

我们通过模块导入语句引入了游戏中使用的不同模块，包括玩家、敌机、背景、游戏信息、音乐和数据。

在初始化`Main`类时，我们在类属性中创建了一些必要的实例，例如背景、玩家和游戏用户界面（UI）。

在`Main`的构造函数中，我们设置了对游戏 UI 中`restart`按钮点击事件的监听，以便于重新开始新一局游戏。同时，还主动调用`start`方法以启动游戏。

#### 3\. 游戏帧循环
    
    
      loop() {
        this.update(); // 更新游戏逻辑
        this.render(); // 渲染游戏画面
        // 请求下一帧动画
        this.aniId = requestAnimationFrame(this.loop.bind(this));
      }
    
      update() {
        // ...
        this.bg.update(); // 更新背景
        this.player.update(); // 更新玩家
        GameGlobal.databus.bullets.forEach((item) => item.update()); // 更新所有子弹
        GameGlobal.databus.enemys.forEach((item) => item.update()); // 更新所有敌机
        this.enemyGenerate(); // 生成敌机
        this.collisionDetection(); // 检测碰撞
      }
    
      render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
    
        this.bg.render(ctx); // 绘制背景
        this.player.render(ctx); // 绘制玩家飞机
        GameGlobal.databus.bullets.forEach((item) => item.render(ctx)); // 绘制所有子弹
        GameGlobal.databus.enemys.forEach((item) => item.render(ctx)); // 绘制所有敌机
        this.gameInfo.render(ctx); // 绘制游戏UI
      }
    

游戏帧循环是游戏运行过程中的核心概念。

`loop()` 方法是游戏的主循环，负责更新游戏状态并渲染画面。通过`requestAnimationFrame`，我们实现了流畅的动画效果。每个游戏帧循环都会调用`loop`函数，以计算游戏逻辑并绘制游戏画面。

`update()` 方法主要用于计算和更新游戏状态，包括背景、玩家、子弹和敌机的位置，生成敌机，以及检测碰撞等。

`render()` 方法负责绘制所有游戏元素，包括背景、玩家、敌机、子弹、动画和分数，并处理游戏结束时的逻辑。

#### 4\. 数据和状态管理

维护游戏的当前状态和记录游戏数据至关重要，因为这些数据决定了游戏的进度和需要展示的 UI 信息。

在本示例中，我们通过`DataBus`类来管理游戏的状态和数据，记录用户的分数，判断游戏是否结束。在游戏帧循环的`update`和`render`阶段，都会根据当前的数据进行逻辑判断和调整。

#### 5\. 游戏对象管理

在游戏开发中，`Sprite`是一个非常重要的概念，通常指的是在2D图形中使用的图像或动画的单个对象，是游戏对象的基本单元。

我们在`Main`类中管理游戏中的各种对象，如玩家、敌机、子弹等，负责它们的创建、更新、绘制、销毁等。

如果你已阅读了示例源码的话，可以发现玩家、敌机、子弹等都继承自`Sprite`这个游戏精灵类，并且每个游戏对象都有独立的`update`和`render`方法，方便进行统一的管理和维护。

#### 6\. 增加交互

通过绑定触摸事件或者监听陀螺仪等微信API提供的交互方式，可以允许玩家与游戏进行互动。

在本示例中，我们希望用户和飞机进行交互，我们在`js/player/index.js`中，通过[wx.onTouchStart()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchStart.html>)、[wx.onTouchMove()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchMove.html>)、[wx.onTouchEnd()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchEnd.html>)、[wx.onTouchCancel()](<https://developers.weixin.qq.com/minigame/dev/api/device/touch-event/wx.onTouchCancel.html>)这几个监听触摸事件，来判断用户是否与屏幕交互，当用户的手指在 Player 这个飞机上进行按住并拖动时，可以实现飞机跟随的手指移动的效果。

跟随拖动的原理是：当手指按住时，我们通过`checkIsFingerOnAir`判断是否按在了飞机的区域，当手指拖动时，判断是否已经按住，然后根据`wx.onTouchMove`中获取的屏幕上按住的`x`和`y`坐标的位置，重新计算飞机的`x`和`y`的位置，当下一次`render`时，会根据最新的`x`和`y`进行渲染，屏幕上的飞机也就跟着移动了。

#### 7\. 增强反馈

合理的增加游戏中的动画，音乐，音效，震动等，可以增强游戏的沉浸感。

在本示例中，当敌机和子弹发生碰撞时，会播放一个爆炸动画，并同时[播放音效](<../base-ability/audio.md>)和[震动](<https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateShort.html>)，具体代码可以查看`js/npc/enemy.js`中的`destroy`部分

#### 8\. 总结

游戏开发有几个重要的考虑因素，例如设计好架构以确保代码的模块化和可扩展性，管理好游戏状态和数据，管理好游戏对象等等。

如果你熟悉了这些基本的概念，我们更推荐你直接阅读游戏引擎的开发文档。游戏引擎已经对上述讲的一些基础都做好了封装，可以即开即用。例如在Unity中，你可以直接在层级面板右键创建3D对象或者Image对象，无需自己封装对象和处理帧循环。

使用游戏引擎的好处在于，它们提供了丰富的工具和功能，帮助开发者快速实现创意。引擎通常包含物理引擎、动画系统、音效管理等模块，使得开发者可以专注于游戏的创意和设计，而不是底层的技术细节。

游戏引擎还支持可视化编辑，允许开发者通过拖拽和配置来构建场景和角色，这种直观的方式也降低了开发门槛。

总之，不管你是选择自行封装组件还是使用游戏引擎进行开发，充分利用好各种工具，发挥想象力，将你的创意转化为现实，创造更多有趣的小游戏。

了解更多内容可以查看[学习进阶指南](<advanced.md>)

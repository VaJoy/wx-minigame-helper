---
title: "学习进阶指南"
type: guide
category: guide/getting-started
source: https://developers.weixin.qq.com/minigame/dev/guide/develop/develop.html
---

# 学习进阶指南

如果你已经掌握了一些小游戏开发的[基础知识](<quick-start.md>)，并且想要进一步学习小游戏开发，可以根据代码习惯找到适合自己的方式进行学习。

## 使用C#开发

### 已熟练掌握Unity游戏

我们推荐你直接查阅[Unity/团结快适配方案文档](<https://wechat-miniprogram.github.io/minigame-unity-webgl-transform/>)，文档中有详细的介绍，包括[入门指南](<https://wechat-miniprogram.github.io/minigame-unity-webgl-transform/Design/Guide.html>)和[快速开始](<https://wechat-miniprogram.github.io/minigame-unity-webgl-transform/Design/Transform.html>)，可以快速的把已有的Unity游戏转换为微信小游戏。

如果你没有现成的Unity游戏，可以clone我们的[github](<https://github.com/wechat-miniprogram/minigame-unity-webgl-transform>)，我们将大部分用到的场景都做了示例，推荐你优先在Unity编辑器中打开[API Demo](<https://github.com/wechat-miniprogram/minigame-unity-webgl-transform/tree/main/Demo/API_V2>)并导出，尝试一下“从Unity中导出小游戏->在开发者工具中打开导出的游戏包->使用真机扫码体验”的过程，了解导出的流程并体验微信API提供的能力。

### 学习如何开发Unity游戏

[Unity官方文档](<https://docs.unity.cn/cn/current/Manual/UnityManual.html>)

[团结引擎官方文档](<https://docs.unity.cn/cn/tuanjiemanual/Manual/>)

[Unity中文课堂](<https://learn.u3d.cn/>)

## 使用JavaScript/TypeScript开发

### 小游戏和Web游戏的区别？

如果你是一名前端开发工程师，或者你愿意[学习JavaScript](<https://web.dev/learn/javascript>)，那么上手小游戏会非常容易，你可以把小游戏看作是只有一个全屏Canvas的页面，没有DOM和CSS，只能执行JS，所有的代码都是从`game.js`这个入口启动的，在Canvas渲染的基础上，结合微信的API来实现小游戏。

### 学习如何开发

如果你对游戏的渲染感兴趣，你可以尝试阅读一下[WebGL文档](<https://webglfundamentals.org/webgl/lessons/zh_cn/>)和[学习WebGL](<https://webglfundamentals.org/webgl/lessons/zh_cn/>)来了解更底层的知识。

当然，我们更推荐直接阅读游戏引擎的文档，游戏引擎提供了可视化的编辑器，更容易上手使用，并且他们也针对不同的小游戏平台进行了适配，开发者无需关注一些底层的技术，直接使用游戏引擎封装组件和微信的API即可完成微信小游戏。

[Cocos Creator官方文档](<https://docs.cocos.com/>)

[LayaAir官方文档](<https://layaair.layabox.com/#/doc>)

[开发入门视频介绍(Cocos Creator)](<https://developers.weixin.qq.com/community/business/doc/0002c84144c3c001f13a453d85b80d>)

如果你愿意尝试适配的话，或者已有相关的游戏的话，其他游戏引擎比如[PixiJS](<https://pixijs.com/>)和[ThreeJS](<https://threejs.org/>)等引擎也是可以发布到小游戏的，只需要引入[weapp-adapter](<../runtime/adapter.md>)并做一些适配调整，但是并不推荐没有经验的开发者学习使用。

## 不写代码如何制作小游戏

### 使用可视化制作工具

如果你不会使用代码进行小游戏开发，我们推荐使用[《小游戏可视化制作工具》](<https://gamemaker.weixin.qq.com/#/>)进行学习体验。

《小游戏可视化制作工具》是一个可视化的在线制作小游戏的工具，通过拖动组件实现游戏逻辑，所见即所得，可以查看[小游戏可视化制作工具用户手册](<https://developers.weixin.qq.com/minigame/introduction/gamemaker/brief>)了解如何使用。

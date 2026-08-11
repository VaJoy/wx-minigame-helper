---
title: "微信小游戏适配解决方案（支持 Unity/团结引擎 项目适配）"
type: guide
category: guide/engine
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform.html
---

# 微信小游戏适配解决方案（支持 Unity/团结引擎 项目适配）

本方案是微信小游戏平台提供的技术适配解决方案，支持将 Unity 及团结引擎项目适配到微信小游戏平台，旨在**降低项目适配到微信小游戏的开发成本** 。通过 WebAssembly 技术，开发者无需更换引擎与重写核心代码，即可将原有项目快速适配到微信小游戏。

### 支持引擎

本适配方案支持团结引擎及 Unity 引擎项目的适配转换。采用 WebAssembly 技术，具有非常宽泛的兼容性，转换插件理论上支持的引擎版本涵盖：Unity 2018~2022、[团结引擎](<https://unity.cn/tuanjie/tuanjieyinqing>)

### 方案特点

  * 保持原引擎工具链与技术栈
  * 无需重写游戏核心逻辑，支持大部分第三方插件
  * 由转换工具与微信小游戏运行环境保证适配兼容，保持较高还原度
  * 微信小游戏平台能力以C# SDK方式提供给开发者，快速对接平台开放能力

### 转换案例

我叫MT2(回合战斗) | 旅行串串(休闲) | 谜题大陆(SLG) | 热血神剑(MMO)  
---|---|---|---  
![](https://res8.wxqcloud.qq.com.cn/wxdoc/820c5ee8-446d-4289-b832-83c97880d4b2.png) | ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3b61721b-4a72-474a-8b54-31cb0b9944ba.png) | ![](https://res8.wxqcloud.qq.com.cn/wxdoc/307ec56a-2ed4-4994-a878-6b870ea5843b.png) | ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b35966bc-ed8a-4987-85e0-cb60ec6fffed.png)  
  
[查阅更多转换案例](<unity/getting-started/ShowCase.md>)

## 安装与使用

详细安装请查阅[SDK安装指引](<unity/getting-started/SDKInstaller.md>)

#### 正式版

  * PackageManager(git安装URL)：https://github.com/wechat-miniprogram/minigame-tuanjie-transform-sdk.git
  * UnityPackage：[下载地址](<https://game.weixin.qq.com/cgi-bin/gamewxagwasmsplitwap/getunityplugininfo?download=1>)
  * 更新日志：请查看[更新日志](<https://github.com/wechat-miniprogram/minigame-tuanjie-transform-sdk/blob/main/CHANGELOG.md>)

#### 预览版

  * PackageManager(git安装URL)：https://github.com/wechat-miniprogram/minigame-tuanjie-transform-sdk.git#pre-release
  * UnityPackage：预览版仅支持采用git url安装
  * 更新日志：请查看[更新日志](<https://github.com/wechat-miniprogram/minigame-tuanjie-transform-sdk/blob/pre-release/CHANGELOG.md>)

#### 使用指引

  * 请查阅[推荐引擎版本](<https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/UnityVersion>)，安装时选择WebGL组件
  * 前往[微信开发者工具下载](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getstableaccesstoken>)安装Stable版开发者工具【注意：为保证稳定性，请勿使用小游戏版 Minigame Build】
  * 查阅[小游戏开发者文档-快速上手](<https://developers.weixin.qq.com/minigame/dev/guide>)创建小游戏类目应用
  * 登录[MP微信公众平台](<https://mp.weixin.qq.com>)，能力地图-生产提效包-快适配，开通使用
  * 查阅[快速开始：转换工具导出微信小游戏](<unity/getting-started/Transform.md>)进行小游戏导出转换

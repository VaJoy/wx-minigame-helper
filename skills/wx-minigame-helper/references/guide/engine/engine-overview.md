---
title: "微信小游戏引擎适配概述"
type: guide
category: guide/engine
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/engine-overview.html
---

# 微信小游戏引擎适配概述

## 一、平台与引擎的关系

微信小游戏平台是一个**引擎无关的运行环境** 。平台本身不绑定任何特定游戏引擎，而是提供底层的渲染（WebGL/WebGL2/Metal）、音频（WebAudio/InnerAudio）、网络（HTTP/WebSocket/TCP/UDP）、文件系统等基础能力。游戏引擎通过适配层对接这些底层能力，使得引擎编译或导出的游戏产物能够在微信小游戏环境中运行。

这意味着，**无论使用何种游戏引擎，只要完成对应的平台适配，游戏都可以在微信小游戏中运行** 。

## 二、为什么需要引擎适配

不同游戏引擎有各自的编译产物形式和运行时依赖：

  * **HTML5 引擎** （如 Cocos Creator、Laya、Egret）：编译产物为 JavaScript 代码，运行时通常依赖浏览器的 BOM 和 DOM API。但小游戏环境并非浏览器，没有 `document`、`window` 等全局对象，因此需要通过[适配层（Adapter）](<../runtime/adapter.md>)模拟这些 API，或由引擎官方完成小游戏平台的原生适配。

  * **原生引擎** （如 Unity、团结引擎、Cocos2d-x 等）：编译产物为机器码或中间码，通过 **WebAssembly（Wasm）** 技术将引擎和游戏逻辑编译为 Wasm 模块，再结合 JavaScript 胶水代码与平台层进行交互，实现在小游戏环境中的运行。

引擎适配的核心目标是：**基于引擎编译的产物进行适配，使得游戏能够以低成本、高性能的方式运行于微信小游戏环境中** 。

## 三、适配方式

根据引擎类型的不同，主要有以下两种适配方式：

### 3.1 JavaScript 引擎适配

对于基于 JavaScript/TypeScript 的 HTML5 游戏引擎，适配方式主要是：

  1. **引擎官方适配** ：引擎官方在构建工具中内置微信小游戏的导出选项，开发者在引擎 IDE 中直接选择导出平台即可，无需手动处理底层适配。Cocos Creator、LayaAir、Egret 等引擎均已完成此类适配。

  2. **Adapter 适配层** ：对于尚未官方适配的引擎，可以在引擎和游戏代码之间引入一层 Adapter，通过 wx API 模拟 `window`、`document` 等浏览器对象，使引擎无感知地运行在小游戏环境中。

### 3.2 WebAssembly 引擎适配

对于原生目标的游戏引擎（如 Unity、团结引擎、Cocos2d-x、Unreal Engine (UE)），适配方式基于 **WebAssembly** 技术：

  1. **编译转换** ：使用 Emscripten 工具链将 C/C++/C# 编写的引擎及游戏逻辑编译为 WebAssembly 模块。
  2. **平台对接** ：通过转换插件和 SDK 将引擎的渲染、音频、输入、网络等模块对接到微信小游戏的底层能力。
  3. **性能优化** ：针对小游戏环境的特点（启动速度要求高、内存受限、需要按需加载资源等），提供专项性能优化方案。

这种方式的优势在于**保持原有引擎工具链和技术栈不变** ，开发者无需重写游戏核心逻辑，通过转换工具即可完成小游戏适配。

## 四、各引擎适配方案

微信小游戏平台目前提供以下引擎适配方案，开发者可根据所使用的引擎选择对应的适配指引：

引擎 | 适配方式 | 适配状态 | 文档链接  
---|---|---|---  
Cocos Creator | 引擎官方内置适配 | ✅ 已支持 | [Cocos/Laya/Egret 引擎适配](<cocos-laya-egret.md>)  
LayaAir | 引擎官方内置适配 | ✅ 已支持 | [Cocos/Laya/Egret 引擎适配](<cocos-laya-egret.md>)  
Egret | 引擎官方内置适配 | ✅ 已支持 | [Cocos/Laya/Egret 引擎适配](<cocos-laya-egret.md>)  
Unity/团结引擎 | WebAssembly 转换适配 | ✅ 已支持 | [Unity/团结引擎适配](<unity-webgl-transform.md>)  
Cocos2d-x | WebAssembly 通用适配 | ✅ 已支持 | [通用引擎适配方案](<common-adaptation.md>)  
Unreal Engine (UE) | WebAssembly 通用适配 | ✅ 已支持 | [通用引擎适配方案](<common-adaptation.md>)  
其他原生引擎 | WebAssembly 通用适配 | 需评估 | [通用引擎适配方案](<common-adaptation.md>)  
  
## 五、免责声明

开发者应仅在知悉并确认下列内容的情况下使用微信小游戏平台提供的通用引擎适配方案：

  1. 对适配过程中涉及的游戏作品及相关素材拥有合法权利或已获得合法授权。
  2. 已遵守所使用游戏引擎的许可协议及相关条款，确保在微信小游戏平台上的使用方式符合引擎授权范围。
  3. 如作品与第三方存在任何形式的权利约定，应确保相关使用行为不违反该等约定。

因开发者自身原因（包括但不限于侵犯第三方知识产权、违反引擎许可协议等）导致的法律责任，由开发者自行承担。本文档中提及的第三方引擎名称及商标均为其各自所有者的财产，仅用于技术说明目的。

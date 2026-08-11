---
title: "典型引擎适配"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/EmscriptenExport.html
---

# 典型引擎适配

本方案基于 [Emscripten](<https://emscripten.org/>) 编译器工具链，将 C/C++ 游戏引擎代码编译为 WebAssembly（WASM），使其可在浏览器中运行，再通过转换工具转换为微信小游戏。

## Emscripten 简介

Emscripten 是一个完整的编译器工具链，可以将 C/C++ 代码编译为 WebAssembly（WASM），从而在浏览器中运行。

### 核心原理
    
    
    C/C++ 源码  →  Emscripten (emcc/em++)  →  .js + .wasm + .data  →  浏览器运行
    

### 导出产物说明

文件 | 说明 | 是否必需  
---|---|---  
`game.js` | JavaScript 胶水代码，负责加载和初始化 WASM | ✅ 必需  
`game.wasm` | WebAssembly 二进制文件，包含编译后的 C/C++ 逻辑 | ✅ 必需  
`game.data` | 游戏资源数据包（图片、音频、配置等） | ✅ 必需  
`game.data.js` | 游戏资源包加载和解析 | ✅ UE 引擎必需  
`index.html` | 测试用 HTML 页面 | ⬜ 可选  
  
> ⚠ **`game.js` 文件大小不能超过 2MB**。微信小游戏对主包 JS 文件有严格的大小限制，如果导出的 `game.js` 超过 2MB，需要调整编译优化等级来减小体积。具体优化方式请参考各引擎导出指南中的说明。

> 无论使用什么引擎，最终导出的产物结构都是相同的。本方案的转换工具需要 `.js`、`.wasm` 和 `.data` 文件。

* * *

## 各引擎导出指南

请根据您使用的引擎选择对应的文档：

  * [Cocos2d-x 导出](<Cocos2dxExport.md>) \- Cocos2d-x 通过 Emscripten 编译导出 H5 游戏
  * [UE4 导出](<UE4Export.md>) \- Unreal Engine 通过 Emscripten 编译导出 H5 游戏
  * [自研引擎导出](<CustomEngineExport.md>) \- 自研 C/C++ 引擎通过 Emscripten 编译导出 H5 游戏

如果您使用的引擎不在上述列表中，请参考 [自研引擎导出](<CustomEngineExport.md>)。

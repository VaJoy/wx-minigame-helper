# 游戏引擎适配 / 通用引擎适配

> 路径：`guide/engine/common-adaptation/`　|　本目录 18 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [更新日志](CHANGELOG.md) | 请前往 GitHub 仓库查看完整的更新日志： |
| [Cocos2d-x 导出](Cocos2dxExport.md) | 本文档介绍如何将 Cocos2d-x 引擎通过 Emscripten 编译导出为 H5 游戏。关于 Emscripten 的基本概念和导出产物说明，请参考 典型引擎适配。 |
| [自研引擎导出](CustomEngineExport.md) | 本文档介绍如何将自研 C/C++ 引擎通过 Emscripten 编译导出为 H5 游戏。关于 Emscripten 的基本概念和导出产物说明，请参考 典型引擎适配。 |
| [典型引擎适配](EmscriptenExport.md) | 本方案基于 Emscripten 编译器工具链，将 C/C++ 游戏引擎代码编译为 WebAssembly（WASM），使其可在浏览器中运行，再通过转换工具转换为微信小游戏。 |
| [常见问题 QA](FAQ.md) | 本文档收集了开发过程中的常见问题和解决方案。 |
| [文件系统适配](FileSystemAdapter.md) | 本文档介绍微信小游戏文件系统适配模块的使用方法。 |
| [HTTP 客户端适配](HttpAdapter.md) | 本文档介绍如何在 Emscripten 项目中集成微信小游戏 HTTP 客户端模块，适用于Cocos2dx、自研引擎项目。 |
| [键盘适配](KeyboardAdapter.md) | 本文档介绍如何在 Emscripten 项目中集成微信小游戏虚拟键盘模块。 |
| [启动流程](LaunchProcess.md) | 本文档说明微信小游戏通用适配方案的小游戏启动流程，包括启动插件的注册机制、启动流程各阶段、启动封面配置以及CDN资源的下载与加载过程。 |
| [快速开始](QuickStart.md) | 本文档帮助您在 5 分钟内完成第一次 H5 游戏到微信小游戏的转换。 |
| [SDK 集成指南](SDKBuild.md) | 本文档介绍如何将预编译的 WXGameSdk 集成到您的 Emscripten 项目中。 |
| [TCP/UDP Socket 适配](SocketAdapter.md) | 本文档介绍如何在 Emscripten 项目中集成微信小游戏 Socket 网络通信模块（WXSocketLib），支持 TCP 和 UDP 协议。 |
| [技术原理](TechPrinciple.md) | 本文档介绍通用微信小游戏适配方案的技术架构和工作原理。 |
| [转换工具使用指南](TransformTool.md) | 本文档详细介绍 Emscripten 到微信小游戏的转换工具使用方法。 |
| [UE4 导出](UE4Export.md) | 本文档介绍如何将 Unreal Engine (UE) 项目通过 Emscripten 编译导出为 H5 游戏。关于 Emscripten 的基本概念和导出产物说明，请参考 典型引擎适配。 |
| [UE HTTP 集成指南](UEHttpIntegration.md) | 本文档介绍 Unreal Engine (UE) HTTP 模块在微信小游戏环境下的适配方案、主要修改点以及使用示例。 |
| [微信开放接口集成](WXOpenAPI.md) | 本文档介绍如何在 Emscripten 项目中集成微信小游戏开放接口，实现登录、分享、支付等平台能力。 |
| [WebSocket 适配](WebSocketAdapter.md) | 本文档介绍如何在 Emscripten 项目中集成微信小游戏 WebSocket 通信模块。 |

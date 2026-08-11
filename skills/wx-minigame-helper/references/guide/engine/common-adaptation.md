---
title: "微信小游戏 · 通用引擎适配方案"
type: guide
category: guide/engine
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation.html
---

# 微信小游戏 · 通用引擎适配方案

欢迎使用微信小游戏通用适配方案。本方案基于 WebAssembly（WASM）技术，专门针对 **WASM + WebGL 技术栈的 H5 游戏包** ，帮助开发者将能在浏览器运行的 H5 游戏快速转换为微信小游戏。

[快速开始](<common-adaptation/QuickStart.md>) [技术原理](<common-adaptation/TechPrinciple.md>) [SDK 集成](<common-adaptation/SDKBuild.md>) [更新日志](<common-adaptation/CHANGELOG.md>)

## 方案特点

**通用引擎支持**

不区分游戏引擎，只要能编译导出 WASM + WebGL 的 H5 版本，就可以转换为微信小游戏

**自动化转换**

提供跨平台转换工具，分钟级完成 H5 游戏包到微信小游戏格式的转换

**完善的网络库**

提供 TCP/UDP Socket、WebSocket、HTTP 客户端适配，解决 WASM 环境下的网络通信痛点

**文件系统支持**

标准 C 文件 API 接口适配微信小游戏文件系统，支持文件读写与缓存管理

⌨

**键盘适配**

微信小游戏虚拟键盘适配，支持文本输入场景

**微信开放接口**

一键集成微信登录、分享、支付、广告等平台能力

**内置音频适配**

自动适配 SDL 音频 API，使用微信 WebAudioContext 无需额外集成

**触摸与输入**

自动转换微信触摸事件为标准鼠标/触摸事件，无需额外处理

## 下载中心

[ ↓ 转换工具下载 ](<https://game.weixin.qq.com/cgi-bin/gamewxagwasmsplitwap/getunityplugininfo?download=1&biz_id=3&version=1.0.33>) [ ↓ 能力 SDK 下载 ](<https://game.weixin.qq.com/cgi-bin/gamewxagwasmsplitwap/getunityplugininfo?download=1&biz_id=4&version=1.0.3>) [ ↓ 微信开发者工具 ](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getstableaccesstoken>)

资源 | 说明 | 版本  
---|---|---  
**转换工具** | 将 H5 游戏包转换为微信小游戏格式（支持 Windows / macOS / Linux） | v1.0.33  
**能力 SDK** | 提供网络通信、文件系统等底层能力支持（需集成到项目中） | v1.0.3  
**微信开发者工具** | 微信小游戏的开发、调试和预览工具 | Stable  
  
> 转换工具与能力 SDK 是独立的。转换工具负责格式转换，能力 SDK 提供运行时底层能力支持。详细集成方法请参考 [SDK 集成指南](<common-adaptation/SDKBuild.md>)。

## 联系我们

本方案已验证适配的引擎包括 **Cocos2d-x** 和 **Unreal Engine (UE)** 。如果您使用的是其他原生引擎项目，也可以先尝试使用本方案进行转换，推荐使用 **Emscripten 3.1.51** 版本进行编译导出。

在转换或适配过程中遇到问题？欢迎填写 [收集表](<https://wj.qq.com/s2/14617948/b52b/>) 反馈您的问题，我们会根据项目情况评估后与您建立联系。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/56617deb-b17d-4cf1-bccd-71d2c41ccc76.svg)文档变更日志（2条）

2026 年 06 月 23 日

更新转换工具版本

2026 年 06 月 16 日

更新转换工具版本号

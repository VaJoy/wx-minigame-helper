---
title: "快速开始"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/QuickStart.html
---

# 快速开始

本文档帮助您在 5 分钟内完成第一次 H5 游戏到微信小游戏的转换。

## 整体流程

![整体流程](https://res8.wxqcloud.qq.com.cn/wxdoc/99418660-1b72-4046-8b13-69bd4d1702a7.png)

阶段 | 说明 | 参考文档  
---|---|---  
**构建 H5 产物** | 使用 Emscripten 等工具链将游戏编译为 WASM + WebGL 的 H5 版本 | [Cocos2d-x 适配](<Cocos2dxExport.md>) / [UE4 适配](<UE4Export.md>)  
**转换工具** | 使用转换工具将 H5 游戏包转换为微信小游戏包 | [转换工具使用](<TransformTool.md>)  
**接入 SDK 能力** | 集成网络通信、文件系统、微信开放接口等平台能力 | [SDK 集成指南](<SDKBuild.md>)  
**体验调优** | 启动流程优化、性能调优、问题排查 | [启动流程](<LaunchProcess.md>)、[常见问题](<FAQ.md>)  
  
## 准备工作

### 1\. 确认游戏导出文件

您的 Emscripten 导出目录应包含以下文件：
    
    
    build/
    ├── game.js          # JavaScript 胶水代码（必需）
    ├── game.wasm        # WebAssembly 二进制文件（必需）
    ├── game.data        # 游戏资源数据包（可选）
    └── index.html       # 测试页面
    

### 2\. 下载转换工具

根据您的操作系统下载对应版本：

操作系统 | 文件名  
---|---  
Windows | `wx-transformer-win.exe`  
macOS | `wx-transformer-macos`  
Linux | `wx-transformer-linux`  
  
[下载最新版本](<https://game.weixin.qq.com/cgi-bin/gamewxagwasmsplitwap/getunityplugininfo?download=1&biz_id=3&version=1.0.25>)

### 3\. 安装微信开发者工具

前往 [微信开发者工具下载页](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getstableaccesstoken>) 下载并安装 **Stable 版本** 。

## 转换步骤

### 方式一：使用配置文件（推荐）

  1. **创建配置文件** `config.json`：

    
    
    {
      "jsFile": "build/game.js",
      "wasmFile": "build/game.wasm",
      "dataFile": "build/game.data",
      "cdnUrl": "https://your-cdn.com/game/",
      "appID": "wx1234567890",
      "appName": "我的游戏",
      "engineName": "Cocos2dx",
      "engineVersion": "3.17.2",
      "webglVersion": 2,
      "deviceOrientation": "landscape"
    }
    

  2. **运行转换工具** ：

    
    
    # Windows
    .\wx-transformer-win.exe --config config.json
    
    # macOS/Linux
    chmod +x wx-transformer-macos
    ./wx-transformer-macos --config config.json
    

### 方式二：使用命令行参数
    
    
    ./wx-transformer \
      -j build/game.js \
      -w build/game.wasm \
      -d build/game.data \
      -c https://your-cdn.com/game/ \
      --app-id wx1234567890 \
      --app-name "我的游戏" \
      --engine-name "Cocos2dx" \
      --device-orientation landscape
    

## 转换输出

转换成功后，将在 `wechat-build` 目录或`-o`指定输出目录下生成微信小游戏项目：
    
    
    wechat-build/
    ├── minigame            # 微信小游戏包，可以用微信开发者工具加载运行
    │   ├── data-package    # 游戏资源包
    │   │   ├── 24aacd95f4d4a04.data.bin  # 配置 `loadFromSubpackage`为false走CDN下载，转换工具不会将资源包放置在此目录
    │   │   └── game.js
    │   ├── framework.js    # 小游戏运行胶水文件
    │   ├── game.js         # 小游戏入口
    │   ├── game.json       # 小游戏配置
    │   ├── plugins
    │   │   └── screen-adapter.js
    │   ├── project.config.json # 项目配置
    │   ├── project.private.config.json
    │   ├── README.md
    │   ├── wasmcode        # 游戏代码包
    │   │   ├── bf79f1b1a37e66b.wasm.br
    │   │   └── game.js
    │   ├── workers
    │   │   └── response
    │   │       └── index.js
    │   └── wx-game-kit
    │       ├── check-version.js
    │       ├── config.json # 小游戏用到的主要配置
    │       ├── custom
    │       │   ├── bind-events.js
    │       │   ├── custom-instance.js
    │       │   ├── handlers.js
    │       │   └── index.js
    │       ├── images      # 自定义启动封面
    │       │   ├── background.jpg
    │       │   └── unity_logo.png
    │       ├── index.js
    │       └── loader-config.js # config.js加载文件，可以定义修改config配置项，在小游戏启动前运行
    └── webgl               # 游戏资源包
        └── 24aacd95f4d4a04.data.bin
    

## 测试运行

  1. 打开**微信开发者工具**
  2. 选择**导入项目**
  3. 选择 `wechat-build/minigame` 目录
  4. 填入您的小游戏 AppID
  5. 点击**编译** 运行

## 常见问题

### Q: 转换后游戏黑屏？

A: 检查 CDN 地址是否正确配置，资源是否已上传。

### Q: WebGL 报错？

A: 尝试设置 `--webgl-version 1` 使用 WebGL 1.0。

### Q: 找不到文件？

A: 确保输入文件路径正确，建议使用绝对路径。

## 下一步

  * 查看 [转换工具详细配置](<TransformTool.md>)
  * 了解 [Cocos2d-x 导出](<Cocos2dxExport.md>) \- Cocos2d-x 通过 Emscripten 导出 H5 游戏的方法
  * 了解 [UE4 导出](<UE4Export.md>) \- Unreal Engine 通过 Emscripten 导出 H5 游戏的方法
  * 了解 [自研引擎导出](<CustomEngineExport.md>) \- 自研 C/C++ 引擎通过 Emscripten 导出 H5 游戏的方法
  * 了解 [技术原理](<TechPrinciple.md>)
  * 了解 [启动流程](<LaunchProcess.md>)
  * 需要网络、文件系统等底层能力？请参考 [SDK 集成指南](<SDKBuild.md>) 下载并集成能力 SDK

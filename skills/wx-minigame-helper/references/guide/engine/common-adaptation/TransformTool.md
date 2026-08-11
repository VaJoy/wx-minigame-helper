---
title: "转换工具使用指南"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/TransformTool.html
---

# 转换工具使用指南

本文档详细介绍 Emscripten 到微信小游戏的转换工具使用方法。

## 工具概述

转换工具将 Emscripten 导出的 H5 游戏包转换为微信小游戏可运行的格式，主要完成以下工作：

  1. 修改 JavaScript 胶水代码，适配微信小游戏环境
  2. 生成微信小游戏项目配置文件
  3. 处理资源文件的加载逻辑
  4. 注入小游戏适配层代码

## 命令行参数

### 必需参数

参数 | 缩写 | 说明  
---|---|---  
`--js-file` | `-j` | JavaScript 胶水代码文件路径  
`--wasm-file` | `-w` | WebAssembly 文件路径  
`--data-file` | `-d` | 数据包文件路径  
  
### 可选参数

#### 资源配置

参数 | 缩写 | 默认值 | 说明  
---|---|---|---  
`--data-js-file` | `-dj` | - | 数据 JS 文件路径（UE 引擎需要）  
`--cdn-url` | `-c` | `http://localhost:8000/` | 游戏资源 CDN 地址  
`--output` | `-o` | `wechat-build` | 导出目录路径  
  
#### 基本信息

参数 | 说明  
---|---  
`--app-id` | 微信小游戏 AppID  
`--app-name` | 小游戏项目名称  
`--engine-name` | 引擎名称（如：Cocos2dx, Unreal, Custom）  
`--engine-version` | 引擎版本号  
  
#### 运行时配置

参数 | 默认值 | 说明  
---|---|---  
`--webgl-version` | `2` | WebGL 版本（1 或 2）  
`--alpha-channel` | `false` | 是否启用透明度通道  
`--device-orientation` | `portrait` | 游戏方向（portrait/landscape）  
  
#### 资源加载配置

参数 | 说明  
---|---  
`--background-video` | 加载阶段播放的视频 URL  
`--load-from-subpackage` | 首包资源从本地加载  
`--no-compress` | 不压缩首包资源  
`--preload-list` | 预下载文件列表（JSON 格式）  
  
## 配置文件

推荐使用 JSON 配置文件来管理转换参数。

### 配置文件示例
    
    
    {
      "jsFile": "build/game.js",
      "wasmFile": "build/game.wasm",
      "dataFile": "build/game.data",
      "cdnUrl": "https://cdn.example.com/game/v1.0/",
      "output": "wechat-build",
      
      "appID": "wx1234567890abcdef",
      "appName": "我的游戏",
      "engineName": "Cocos2dx",
      "engineVersion": "3.17.2",
      
      "webglVersion": 2,
      "alphaChannel": false,
      "deviceOrientation": "landscape",
      
      "loadFromSubpackage": true,
      "noCompress": false
    }
    

### 使用配置文件
    
    
    ./wx-transformer --config config.json
    

## 不同引擎的配置示例

### Cocos2d-x
    
    
    {
      "engineName": "Cocos2dx",
      "engineVersion": "3.17.2",
      "jsFile": "build/cocos2d-js-min.js",
      "wasmFile": "build/game.wasm",
      "dataFile": "build/game.data"
    }
    

### Unreal Engine
    
    
    {
      "engineName": "Unreal",
      "engineVersion": "4.27",
      "jsFile": "build/MyGame.js",
      "wasmFile": "build/MyGame.wasm",
      "dataFile": "build/MyGame.data",
      "dataJs": "build/MyGame.data.js"
    }
    

### 自研引擎
    
    
    {
      "engineName": "Custom",
      "engineVersion": "1.0.0",
      "jsFile": "build/engine.js",
      "wasmFile": "build/engine.wasm"
    }
    

## 输出目录结构
    
    
    wechat-build
    ├── minigame // 微信小游戏包，可以用微信开发者工具加载运行
    │   ├── data-package
    │   │   ├── 76709be055c9c26.data.bin // 资源包(可以将资源包从该目录删除，走CDN下载，否则该文件会被打包到小游戏包里)
    │   │   └── game.js
    │   ├── framework.js
    │   ├── game.js  
    │   ├── game.json // 游戏配置:设置屏幕方向，是否启用高性能模式，游戏分包等
    │   ├── plugins
    │   │   └── screen-adapter.js
    │   ├── project.config.json
    │   ├── project.private.config.json
    │   ├── wasmcode
    │   │   ├── 496eb27c25c1b9f.wasm.br  // 游戏代码包
    │   │   └── game.js
    │   ├── workers
    │   │   └── response
    │   │       └── index.js
    │   └── wx-game-kit
    │       ├── check-version.js
    │       ├── config.json  // 小游戏用到的主要配置
    │       ├── custom
    │       │   ├── bind-events.js
    │       │   ├── custom-instance.js  
    │       │   ├── handlers.js  // 可自定义的一些功能handler
    │       │   └── index.js
    │       ├── images  // 自定义启动封面
    │       │   ├── background.jpg
    │       │   └── logo.png
    │       └── index.js
    └── webgl
        └── 76709be055c9c26.data.bin
    

## 微信开发者工具调试

转换工具生成小游戏包后，可以使用微信开发者工具进行调试和体验。

### 第一步：导入项目

打开微信开发者工具，选择左侧菜单中的 **小游戏** 类别，然后点击右上角的 **导入** 按钮（或点击 **+** 号创建新项目）：

![打开微信开发者工具，选择小游戏并导入项目](https://res8.wxqcloud.qq.com.cn/wxdoc/9f1bd1d3-5e31-47ed-bc87-c5ef6c8b322b.png)

### 第二步：配置项目路径

在创建小游戏页面中，将 **目录** 设置为转换工具导出的 `minigame` 文件夹路径，并填入游戏自己的小游戏 **AppID** ，模板选择 **小游戏** ，然后点击 **创建** ：

![设置minigame路径和AppID](https://res8.wxqcloud.qq.com.cn/wxdoc/c28af576-0b55-4131-86ab-5d2a4b1d02a6.png)

### 第三步：预览与真机体验

项目导入成功后，可以直接在开发者工具中体验小游戏。如需真机体验，点击顶部工具栏的 **预览** 按钮，等待二维码生成完成后，使用手机微信扫描二维码即可在真机上体验：

![点击预览生成二维码](https://res8.wxqcloud.qq.com.cn/wxdoc/687ba175-7496-4cf9-8596-7c1751f1d914.png)

### 第四步：查看调试日志

#### 开发者工具控制台

在开发者工具底部的 **调试器** 面板中，切换到 **Console** 标签页，可以查看小游戏运行时的所有日志输出：

![开发者工具控制台查看日志](https://res8.wxqcloud.qq.com.cn/wxdoc/d895693c-bf58-4aad-bb9b-31dcc709937b.png)

#### 真机调试

在真机上扫码打开小游戏后，点击右上角 **...** 按钮，选择 **开发调试** ，然后点击 **打开调试** ：

![真机开发调试面板](https://res8.wxqcloud.qq.com.cn/wxdoc/68fd5576-7796-44d3-82ef-082ecb2ea4a8.png)

开启调试后，重新进入小游戏，屏幕右下角会出现 **vConsole** 按钮，点击即可查看小游戏在真机上的运行日志：

![vConsole真机日志](https://res8.wxqcloud.qq.com.cn/wxdoc/ad575acb-70c9-437a-a24e-b43a041ed2e7.png)

## 故障排除

### 常见错误

#### Error: File not found
    
    
    检查输入文件路径是否正确，建议使用绝对路径
    

## 下一步

  * 了解 [技术原理](<TechPrinciple.md>)
  * 了解 [启动流程](<LaunchProcess.md>)
  * 配置 [文件系统适配](<FileSystemAdapter.md>)
  * 集成 [网络通信模块](<SocketAdapter.md>)

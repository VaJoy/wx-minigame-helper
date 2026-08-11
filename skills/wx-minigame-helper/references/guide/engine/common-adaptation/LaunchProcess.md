---
title: "启动流程"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/LaunchProcess.html
---

# 启动流程

本文档说明微信小游戏通用适配方案的小游戏启动流程，包括启动插件的注册机制、启动流程各阶段、启动封面配置以及CDN资源的下载与加载过程。

## 概述

微信小游戏通用适配方案集成了小游戏启动插件（WXGameKit），通过微信小游戏的`requirePlugin`机制来注册启动插件，由插件统一管理小游戏的启动流程。启动流程主要包括以下几个关键环节：

  1. **插件注册与初始化** \- 通过`requirePlugin`机制加载启动插件
  2. **配置加载** \- 读取并应用启动配置
  3. **启动封面显示** \- 展示加载进度和游戏相关内容
  4. **资源加载** \- 并行下载首资源包和WebAssembly代码包
  5. **引擎初始化** \- 编译Wasm代码并初始化游戏引擎
  6. **游戏启动** \- 完成初始化后进入游戏

![启动流程](https://res8.wxqcloud.qq.com.cn/wxdoc/18ba4fbb-be94-4f38-859a-be8f80d48061.png)

## 插件注册机制

### game.json配置

首先需要在`game.json`中声明使用WXGameKit插件：
    
    
    {
      "plugins": {
        "WXGameKit": {
          "version": "major.minor.patch",
          "provider": "wxe5a48f1ed5f544b7",
          "contexts": [
            {
              "type": "isolatedContext"
            }
          ]
        }
      }
    }
    

### 插件加载与注册

在小游戏代码中通过`requirePlugin`加载并注册插件。首先通过`loader-config.js`（/minigame/wx-game-kit/loader-config.js）加载启动插件相关配置，随后利用该配置完成插件初始化，游戏可以在插件初始化之前自定义修改loaderConfig配置值。

### 启动游戏

在`game.js`（/minigame/game.js）中导入插件并启动游戏：
    
    
    import './wx-game-kit/index';
    import './wx-game-kit/custom/index';
    import commFrameWork from "./framework";
    
    if (typeof WXGameKit.loader !== 'undefined') {
      WXGameKit.loader.setModuleFunctionHandler(commFrameWork);
      WXGameKit.loader.start();
    }
    

  * `setModuleFunctionHandler` \- 传入封装好的胶水层代码函数
  * `start` \- 启动游戏加载流程

## 启动流程详解

### 创建Loader阶段

创建`Loader`时会执行以下步骤：

  1. **版本检查** \- 检查基础库版本是否满足要求
  2. **初始化各模块** \- 初始化网络、文件系统、日志等模块
  3. **加载特性开关** \- 根据环境加载功能特性配置
  4. **准备启动封面** \- 初始化启动封面模块

### Start阶段

调用`loader.start()`后执行以下流程：

  1. **显示启动封面** \- 展示加载页面，显示进度条和加载文案
  2. **并行加载任务** ： 
     * 加载并解压首资源包（从分包或CDN）
     * 加载并编译WebAssembly代码包
  3. **处理资源数据** \- 将资源数据写入内存
  4. **引擎初始化** \- 调用胶水层代码，初始化游戏引擎
  5. **调用Main函数** \- 执行游戏主函数
  6. **隐藏启动封面** \- 加载完成后隐藏封面

### 步骤提前

为了优化启动体验，以下步骤可以在`start`之前提前执行：
    
    
    // 提前显示启动封面（避免黑屏）
    WXGameKit.splash.loadingPage.show();
    
    // 提前开始加载首资源包
    WXGameKit.loader.loadAsset();
    
    // 提前开始加载WebAssembly代码包
    WXGameKit.loader.loadWasm();
    
    // 执行其他自定义逻辑...
    
    // 最后调用start完成启动
    WXGameKit.loader.start();
    

### 生命周期事件

启动插件提供了丰富的生命周期事件，允许在启动流程的不同阶段插入自定义逻辑：
    
    
    // 监听生命周期事件
    WXGameKit.loader.lifeCycle.on(WXGameKit.loader.lifeCycle.event.PluginLaunch, (e) => {
      console.log('插件启动完成');
    });
    
    // 监听区间事件
    WXGameKit.lifeCycle.on(WXGameKit.lifeCycle.event.ParallelLoad, (e) => {
      if (e.type == WXGameKit.lifeCycle.eventType.IntervalStart) {
        console.log('并行加载开始');
      } else if (e.type == WXGameKit.lifeCycle.eventType.IntervalEnd) {
        console.log('并行加载完成，耗时：', e.data.costTimeMs, 'ms');
      }
    });
    

**生命周期事件列表** ：

事件类型 | 事件名称 | 说明  
---|---|---  
点事件 | `PluginLaunch` | 插件启动完成  
点事件 | `FeatureFlagReady` | 特性开关就绪  
点事件 | `LoadingPageReady` | 启动封面就绪  
点事件 | `PreparedModule` | 模块准备完成  
点事件 | `ProcessedAsset` | 资源处理完成  
区间事件 | `ParallelLoad` | 并行加载阶段  
区间事件 | `LoadWasm` | Wasm代码加载  
区间事件 | `InstantiateWasm` | Wasm实例化  
区间事件 | `PrepareAsset` | 资源准备阶段  
区间事件 | `LoadAsset` | 资源加载阶段  
区间事件 | `ReadAsset` | 资源读取阶段  
区间事件 | `UnzipAsset` | 资源解压阶段  
区间事件 | `CallMain` | Main函数调用  
  
## 启动封面配置

启动封面用于在小游戏加载期间展示游戏相关内容，避免玩家面对黑屏等待。配置位于`config.json`（/minigame/wx-game-kit/config.json）的`loadingPage`模块。

### 基础配置
    
    
    {
      "loadingPage": {
        "using": true,                    // 是否启用启动封面
        "hideAfterCallMain": true,        // 引擎初始化后是否自动隐藏封面
        "totalLaunchTime": 7000,          // 预估总启动时间(毫秒)，用于进度条动画
        "animationDuration": 100,         // 动画过渡时间(毫秒)
        "designWidth": 1600,              // 设计宽度(像素)
        "designHeight": 720,              // 设计高度(像素)
        "scaleMode": "EXACT_FIT",         // 缩放模式
        "visible": true                   // 是否显示封面
      }
    }
    

**缩放模式说明** ：

模式 | 说明  
---|---  
`EXACT_FIT` | 精确适配，可能变形  
`NO_BORDER` | 不留黑边，可能裁剪  
`SHOW_ALL` | 完整显示，可能有黑边  
`FIXED_WIDTH` | 宽度适配  
`FIXED_HEIGHT` | 高度适配  
  
### 素材配置
    
    
    {
      "loadingPage": {
        "materialConfig": {
          "backgroundImage": "wx-game-kit/images/background.jpg",  // 背景图片路径
          "backgroundVideo": "",                                   // 背景视频URL（可选）
          "iconImage": "wx-game-kit/images/unity_logo.png"        // 图标图片路径
        }
      }
    }
    

> **注意** ：背景图片和图标图片应放置在小游戏包内；背景视频需要使用网络URL。

### 文本配置
    
    
    {
      "loadingPage": {
        "textConfig": {
          "firstStartText": "首次加载请耐心等待",      // 首次启动提示文本
          "downloadingText": ["正在加载资源"],         // 下载阶段文本（随机选择）
          "compilingText": "编译中",                   // 编译阶段文本
          "initText": "初始化中",                      // 初始化阶段文本
          "completeText": "开始游戏",                  // 完成时文本
          "textDuration": 1500,                        // 文本显示时长(毫秒)
          "style": {
            "bottom": 115,                             // 距底部距离(像素)
            "height": 45,                              // 文本高度(像素)
            "width": 1045,                             // 文本宽度(像素)
            "lineHeight": 45,                          // 行高(像素)
            "color": "#ffffff",                        // 文本颜色
            "fontSize": 28                             // 字体大小(像素)
          }
        }
      }
    }
    

### 进度条配置
    
    
    {
      "loadingPage": {
        "barConfig": {
          "style": {
            "width": 1045,                             // 进度条宽度(像素)
            "height": 15,                              // 进度条高度(像素)
            "padding": 2,                              // 内边距(像素)
            "bottom": 78,                              // 距底部距离(像素)
            "backgroundColor": "#66b71f"               // 进度条颜色
          }
        }
      }
    }
    

### 图标配置
    
    
    {
      "loadingPage": {
        "iconConfig": {
          "visible": true,                             // 是否显示图标
          "style": {
            "width": 64,                               // 图标宽度(像素)
            "height": 23,                              // 图标高度(像素)
            "bottom": 20                               // 距底部距离(像素)
          }
        }
      }
    }
    

### 代码控制启动封面
    
    
    // 手动显示启动封面
    WXGameKit.splash.loadingPage.show();
    
    // 手动隐藏启动封面
    WXGameKit.splash.loadingPage.hide();
    
    // 动态控制显示/隐藏（不会结束封面）
    WXGameKit.config.loadingPage.visible = false;
    

## CDN资源下载与加载

### 资源加载方式

小游戏首资源包支持两种加载方式：

  1. **分包加载** \- 资源作为小游戏分包加载，适用于资源量较小的游戏
  2. **CDN下载** \- 从CDN服务器下载资源，适用于资源量较大的游戏

### CDN配置

在`config.json`（/minigame/wx-game-kit/config.json）中配置CDN地址：
    
    
    {
      "network": {
        "dataFileCDN": "http://localhost:8000/",       // 资源CDN地址
        "usedAutoStreaming": false,                    // 是否使用streaming加载
        "streamingCDN": "",                            // streaming CDN地址
        "preload": {
          "preloadList": [],                           // 预加载资源列表
          "maxConcurrent": 10                          // 最大并发下载数
        }
      }
    }
    

### 首资源包配置
    
    
    {
      "launch": {
        "data": {
          "loadFromSubpackage": false,                 // false表示从CDN下载
          "fileMD5": "bf4af4f0956c43e",               // 资源文件MD5
          "fileSize": 54558229,                        // 原始文件大小(Bytes)
          "optFileSize": 13509324,                     // 优化后文件大小(Bytes)
          "isCompressed": true,                        // 是否压缩
          "subPrefix": "",                             // CDN子路径前缀
          "maxTryCount": 2                             // 下载失败最大重试次数
        }
      }
    }
    

**资源包路径规则** ：

  * 分包加载：`minigame/data-package/{fileMD5}.data.bin`
  * CDN下载：`{dataFileCDN}{subPrefix}{fileMD5}.data.bin`

### Wasm代码包配置

Wasm代码包只支持分包加载方式，存放于`minigame/wasm-code`目录：
    
    
    {
      "launch": {
        "code": {
          "fileMD5": "9605d21ac39af64",               // 代码文件MD5
          "useWasmCodeSplit": false                    // 是否使用代码分包
        }
      }
    }
    

代码包命名格式：`{fileMD5}.wasm.br`

### 资源加载流程

![资源加载流程](https://res8.wxqcloud.qq.com.cn/wxdoc/729e4dfb-750a-4de9-b819-659aabd1cf71.png)

### 缓存机制

启动插件内置了资源缓存机制：

  1. **自动缓存** \- 首次下载的资源会自动缓存到本地
  2. **缓存复用** \- 后续启动会优先使用本地缓存
  3. **缓存管理** \- 支持配置最大缓存容量

    
    
    {
      "fileSystem": {
        "maxStorage": 1024,                           // 最大缓存容量(MB)
        "releaseMemorySize": 31457280                 // 清理时额外释放大小(Bytes)
      }
    }
    

### 网络模块使用

启动插件提供带缓存机制的网络请求模块：
    
    
    // 使用CacheXHR发起请求
    const xhr = new WXGameKit.network.XMLHttpRequest();
    xhr.open('GET', 'http://example.com/cdn/resource.bundle');
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log('下载成功', xhr.response);
        console.log('是否来自缓存:', xhr.isReadFromCache);
      }
    };
    xhr.send();
    

### 动态修改CDN地址

运行时可以动态修改CDN地址：
    
    
    // 方式一：直接修改配置
    WXGameKit.config.network.dataFileCDN = 'http://new-cdn.example.com/';
    
    // 方式二：使用网络模块接口
    WXGameKit.network.setDataCDN('http://new-cdn.example.com/');
    

### 下载失败处理

启动插件支持下载失败重试和错误回调：
    
    
    // 监听下载错误事件
    WXGameKit.network.dataPackage.on(
      WXGameKit.network.dataPackage.eventType.DownloadError, 
      (error, tryCount) => {
        console.log('下载错误:', error);
        console.log('第', tryCount, '次尝试');
        
        // 可以在此切换CDN地址重试
        if (tryCount < 3) {
          WXGameKit.config.network.dataFileCDN = 'http://backup-cdn.example.com/';
        }
      }
    );
    

## 配置验证

启动插件会在加载配置时自动验证配置的完整性和正确性：
    
    
    // 配置验证失败时会抛出错误
    // Error: 配置验证失败:
    // 缺失必填字段:
    //     - launch.code.fileMD5
    // 类型错误字段:
    //     launch.data.fileSize 应为 number 类型
    

**必填配置字段** ：

模块 | 字段 | 类型 | 说明  
---|---|---|---  
project | engine.name | string | 引擎名称  
project | engine.version | string | 引擎版本  
project | convertPluginVersion | string | 转换插件版本  
launch | code.fileMD5 | string | 代码文件MD5  
launch | code.useWasmCodeSplit | boolean | 是否使用代码分包  
launch | data.loadFromSubpackage | boolean | 是否分包加载  
launch | data.fileMD5 | string | 资源文件MD5  
launch | data.fileSize | number | 资源文件大小  
launch | data.optFileSize | number | 优化后文件大小  
  
## 调试配置

开发阶段可以开启调试功能：
    
    
    {
      "develop": {
        "hideTimeLogModal": false,                    // 显示耗时弹框
        "enableDebugLog": true,                       // 打印详细日志
        "monitor": {
          "showSuggestModal": true,                   // 显示优化建议
          "enable": true,                             // 开启性能监控
          "fps": 10,                                  // 低帧率阈值
          "showResultAfterLaunch": true,              // 启动后显示结果
          "duration": 30000                           // 监控时长(毫秒)
        }
      }
    }
    

## 下一步

  * 了解 [技术原理](<TechPrinciple.md>)
  * 了解 [文件系统适配](<FileSystemAdapter.md>)
  * 了解 [HTTP 客户端适配](<HttpAdapter.md>)
  * 了解 [键盘适配](<KeyboardAdapter.md>)
  * 查看 [常见问题](<FAQ.md>)

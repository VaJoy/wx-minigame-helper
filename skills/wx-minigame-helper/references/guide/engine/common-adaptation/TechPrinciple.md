---
title: "技术原理"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/TechPrinciple.html
---

# 技术原理

本文档介绍通用微信小游戏适配方案的技术架构和工作原理。

## 架构概述

![技术架构概览](https://res8.wxqcloud.qq.com.cn/wxdoc/21db6c53-cc54-4008-8176-c493e52ba917.png)

## 核心组件

### 1\. WebAssembly 运行时

编译工具链将 C/C++ 代码编译为 WebAssembly（WASM），在微信小游戏的 JavaScript 环境中运行。

**特点：**

  * 接近原生的执行性能
  * 跨平台二进制格式
  * 与 JavaScript 双向互调

### 2\. JavaScript 胶水代码

编译工具链生成的 JS 文件负责：

  * 加载和实例化 WASM 模块
  * 提供 C 标准库的 JS 实现
  * 管理内存和函数调用

### 3\. 适配层 (Adapter)

适配层解决浏览器 API 与微信小游戏 API 的差异：

浏览器 API | 微信小游戏 API | 适配方案  
---|---|---  
`XMLHttpRequest` | `wx.request` | 自动转换  
`WebSocket` | `wx.connectSocket` | 封装适配  
`localStorage` | `wx.setStorage` | 同步适配  
`Canvas` | `wx.createCanvas` | 自动创建  
`Audio` | `wx.createInnerAudioContext` | 音频适配器  
  
### 4\. SDK 模块

提供原生 C++ 接口的功能模块：
    
    
    // 模块架构
    ┌─────────────────────────────────────┐
    │           SDK 模块层 (C++)           │
    ├──────────┬──────────┬───────────────┤
    │  HTTP    │  Socket  │  WebSocket    │
    │  Client  │  TCP/UDP │  Client       │
    ├──────────┼──────────┼───────────────┤
    │ FileSystem│  Report │  WX Open API  │
    └──────────┴──────────┴───────────────┘
             │
             ↓ WASM Bindings
    ┌─────────────────────────────────────┐
    │        JavaScript 桥接层            │
    │         (*.jslib 文件)              │
    └─────────────────────────────────────┘
             │
             ↓ wx.* API
    ┌─────────────────────────────────────┐
    │        微信小游戏 Runtime            │
    └─────────────────────────────────────┘
    

## 内置能力适配详解

以下能力已由转换工具自动适配，**无需额外集成** ，游戏可直接使用。

### 音频 (SDL) 适配

**适配原理** ：将标准 Web Audio API 的 `AudioContext` 替换为微信小游戏的 `wx.createWebAudioContext()`，实现音频播放能力的无缝切换。

**技术细节** ：

  * 自动拦截 `window.AudioContext` 构造函数，返回微信 WebAudioContext 实例
  * 监听小游戏 `onHide`/`onShow` 事件，自动暂停/恢复音频上下文
  * 针对 iOS 17.5+ 设备进行特殊处理，在 `onShow` 时重建音频上下文以确保兼容性
  * 支持所有 SDL 音频 API：`SDL_OpenAudio`、`SDL_CloseAudio`、`Mix_LoadWAV`、`Mix_PlayChannel` 等

**注意事项** ：

  * 首次播放音频需要用户交互触发
  * 后台切换时音频会自动暂停，返回前台后自动恢复

### 触摸输入适配

**适配原理** ：将微信小游戏的触摸事件（`wx.onTouchStart`、`wx.onTouchMove`、`wx.onTouchEnd`、`wx.onTouchCancel`）转换为标准的触摸/鼠标事件格式。

**技术细节** ：

  * 自动注册微信触摸事件监听器
  * 将触摸坐标转换为 Canvas 相对坐标，考虑设备像素比
  * 同时触发鼠标事件回调和触摸事件回调，确保兼容不同引擎的输入处理方式
  * 支持多点触摸，提供 `touches` 和 `changedTouches` 数组

**支持的回调接口** ：

  * GLFW 回调：`glfwSetMouseButtonCallback`、`glfwSetCursorPosCallback`、`glfwSetScrollCallback`
  * WASM 回调：`emscripten_set_mousedown_callback`、`emscripten_set_mouseup_callback`、`emscripten_set_mousemove_callback`

### 鼠标输入适配

**适配原理** ：在触摸设备上将触摸坐标映射为鼠标坐标，使基于鼠标输入的游戏逻辑能够正常工作。

**技术细节** ：

  * 自动计算触摸位置相对于 Canvas 的坐标
  * 考虑 Canvas 缩放比例和设备像素比进行坐标转换
  * 更新 `Browser.mouseX`、`Browser.mouseY` 和 `Browser.mouseMovementX/Y` 状态
  * 支持自定义坐标转换函数 `Module["customMouseMove"]`

**坐标转换公式** ：
    
    
    x = (touch.pageX - rect.left) * (canvas.width / rect.width);
    y = (touch.pageY - rect.top) * (canvas.height / rect.height);
    

### Canvas/WebGL 适配

**适配原理** ：将 Canvas 和 WebGL 上下文获取逻辑重定向到微信小游戏的 Canvas 对象。

**技术细节** ：

  * `findCanvasEventTarget` 函数始终返回 `Module["canvas"]`，确保所有 Canvas 操作指向正确对象
  * 自动处理 WebGL 上下文创建，支持 WebGL 1.0 和 WebGL 2.0
  * 在 viewport 设置时进行边界检查，防止渲染异常
  * 适配 `document.fullscreenEnabled` 属性，在小游戏环境下始终返回 `true`

**支持的接口** ：

  * `emscripten_webgl_create_context`
  * `emscripten_webgl_make_context_current`
  * `canvas.getContext('webgl')` / `canvas.getContext('webgl2')`

### 屏幕尺寸适配

**适配原理** ：使用微信小游戏的 `wx.getSystemInfoSync()` 获取屏幕尺寸信息，并自动适配到 WASM 运行时的尺寸获取接口。

**技术细节** ：

  * 自动获取 `screenWidth`、`screenHeight` 和 `pixelRatio`
  * 重写 `canvas.clientWidth` 和 `canvas.clientHeight` 属性，返回正确的逻辑尺寸
  * 根据引擎版本自动设置 Canvas 物理尺寸（宽高 × 像素比）
  * 支持 `window._ScaleRate` 全局变量用于坐标转换

**适配的尺寸接口** ：

  * `glfwGetWindowSize` \- 获取窗口尺寸
  * `glfwGetFramebufferSize` \- 获取帧缓冲区尺寸
  * `emscripten_get_canvas_element_size` \- 获取 Canvas 元素尺寸
  * `emscripten_get_screen_size` \- 获取屏幕尺寸

### ⏱ 帧率控制适配

**适配原理** ：将 WASM 运行时的帧率控制逻辑映射到微信小游戏的 `wx.setPreferredFramesPerSecond()` API。

**技术细节** ：

  * 拦截 `emscripten_set_main_loop_timing` 调用
  * 将帧间隔值（16ms/33ms/66ms）转换为对应的帧率模式（60/30/20 FPS）
  * 使用 `requestAnimationFrame` 驱动主循环
  * 支持三种定时模式：setTimeout (mode=0)、rAF (mode=1)、setImmediate (mode=2)

**帧率映射关系** ：

帧间隔 (ms) | 目标帧率 (FPS) | 微信 API 参数  
---|---|---  
16 | 60 | `wx.setPreferredFramesPerSecond(60)`  
33 | 30 | `wx.setPreferredFramesPerSecond(30)`  
66 | 20 | `wx.setPreferredFramesPerSecond(20)`  
  
### 全屏切换适配

**适配原理** ：在微信小游戏环境下，游戏默认全屏运行，全屏相关 API 被适配为空操作或返回适当的状态值。

**技术细节** ：

  * `document.fullscreenEnabled` 始终返回 `true`
  * `emscripten_request_fullscreen` 接口已适配，调用后触发 Canvas 尺寸调整回调
  * `emscripten_exit_fullscreen` 接口已适配
  * 支持软全屏模式，自动处理 Canvas 尺寸和 letterbox 边距

**支持的全屏策略** ：

  * `EMSCRIPTEN_FULLSCREEN_SCALE_DEFAULT` \- 默认缩放
  * `EMSCRIPTEN_FULLSCREEN_SCALE_STRETCH` \- 拉伸填充
  * `EMSCRIPTEN_FULLSCREEN_SCALE_ASPECT` \- 保持宽高比
  * `EMSCRIPTEN_FULLSCREEN_SCALE_CENTER` \- 居中显示

### ⚠ 异常处理适配

**适配原理** ：捕获 WASM 运行时异常和未处理的 Promise 拒绝，通过微信小游戏的日志系统进行上报。

**技术细节** ：

  * 注册 `wx.onError` 监听器，捕获全局错误
  * 注册 `wx.onUnhandledRejection` 监听器，捕获未处理的 Promise 拒绝
  * 错误信息同时写入实时日志（`realtimeLogManager`）和用户反馈日志（`logManager`）
  * `abort()` 函数被拦截，调用 `WXUncaughtException` 进行异常上报

**异常上报内容** ：

  * 错误消息和堆栈信息
  * 发生异常时的调用链
  * 自动过滤框架内部堆栈，保留业务代码堆栈

**注意事项** ：

  * 异常上报依赖微信小游戏的日志管理器初始化
  * 生产环境建议开启实时日志，便于问题排查

## 转换流程

![转换流程](https://res8.wxqcloud.qq.com.cn/wxdoc/26b5ebc8-f4fc-4814-9b9e-12bb27ad3f61.png)

### 转换步骤详解

#### 1\. 代码解析与分析

  * 解析 Emscripten 生成的 JS 代码结构
  * 识别 Module 配置和初始化逻辑
  * 定位资源加载相关代码

#### 2\. 代码注入与修改

  * 替换资源加载 URL 为 CDN 地址
  * 注入微信小游戏运行时基础代码
  * 修改 WASM 实例化逻辑

#### 3\. 配置文件生成

  * 生成 `game.json` 小游戏配置
  * 生成 `project.config.json` 开发工具配置
  * 配置分包和预下载

#### 4\. 资源处理

  * 分离首包和 CDN 资源
  * 处理资源缓存策略

## C++ 与 JavaScript 互调

### C++ 调用 JavaScript

通过 Emscripten 的 `EM_JS` 或 `extern "C"` 机制：
    
    
    // 方式1：EM_JS 内联 JS
    EM_JS(void, js_log, (const char* msg), {
        console.log(UTF8ToString(msg));
    });
    
    // 方式2：jslib 外部实现
    extern "C" {
        extern void JS_HttpRequest(const char* url, const char* method);
    }
    

### JavaScript 调用 C++

通过导出函数和 `ccall`/`cwrap`：
    
    
    // C++ 导出函数
    extern "C" void EMSCRIPTEN_KEEPALIVE OnHttpResponse(int code, const char* data);
    
    // JavaScript 调用
    Module.ccall('OnHttpResponse', null, ['number', 'string'], [200, responseData]);
    

## 内存管理

### 堆内存

  * WASM 使用线性内存模型
  * **强烈建议** 设置 `-s ALLOW_MEMORY_GROWTH=0` 禁用内存动态增长，并通过 `-s INITIAL_MEMORY=805306368` 预设合理的初始内存大小（768MB，游戏根据自身内存占用设置合适值）
  * 启用 `ALLOW_MEMORY_GROWTH=1` 会导致运行时频繁的内存重分配，带来显著的性能开销，在小游戏环境中尤为明显，**不建议使用**

### 字符串传递
    
    
    // C++ 到 JS：使用 UTF8ToString
    // JS 到 C++：使用 stringToUTF8 + malloc
    const char* str = (const char*)EM_ASM_INT({
        var jsStr = "Hello";
        var len = lengthBytesUTF8(jsStr) + 1;
        var ptr = _malloc(len);
        stringToUTF8(jsStr, ptr, len);
        return ptr;
    });
    // 使用后需要 free(str)
    

## 性能优化

### 1\. WASM 加载优化

  * 减小WASM包大小
  * 压缩 WASM 文件

### 2\. 内存优化

  * 合理设置初始内存（避免多次增长）
  * 及时释放不需要的资源
  * 使用内存池减少分配

### 3\. 网络优化

  * 使用 CDN 加速资源加载
  * 启用资源预下载
  * 实现按需加载

### 4\. 文件系统优化

  * 采用合理资源拆分策略（建议1~4MB），避免读取超大包，或者频繁读取超小包
  * 进入关卡时，打开资源文件后及时读取完数据然后关闭资源文件，避免在游戏过程中频繁操作文件系统读取数据
  * 涉及批量资源文件读取时，建议采用TAR包打包成一个整体，载入内存后再批量访问TAR包内的文件，避免直接批量读取微信磁盘文件
  * 实现按需资源读取

## 兼容性说明

### 编译工具链版本

  * Emscripten 版本：仅支持 **3.1.10** 和 **3.1.51**
  * 最低支持：3.1.8

### 微信基础库

  * 推荐版本：2.19.0+
  * WebGL 2.0 需要 2.24.0+

### 已知限制

  * 不支持多线程（pthread）

## 下一步

  * 了解 [启动流程](<LaunchProcess.md>)
  * 了解 [文件系统适配](<FileSystemAdapter.md>)
  * 了解 [键盘适配](<KeyboardAdapter.md>)
  * 配置 [网络通信模块](<SocketAdapter.md>)
  * 集成 [微信开放接口](<WXOpenAPI.md>)

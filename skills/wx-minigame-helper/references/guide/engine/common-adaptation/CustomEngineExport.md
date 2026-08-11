---
title: "自研引擎导出"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/CustomEngineExport.html
---

# 自研引擎导出

本文档介绍如何将自研 C/C++ 引擎通过 Emscripten 编译导出为 H5 游戏。关于 Emscripten 的基本概念和导出产物说明，请参考 [典型引擎适配](<EmscriptenExport.md>)。

## 基本编译流程

如果您使用的是自研引擎，可以直接使用 Emscripten 工具链编译您的 C/C++ 项目。

### 1\. 安装 Emscripten SDK
    
    
    git clone https://github.com/emscripten-core/emsdk.git
    cd emsdk
    ./emsdk install 3.1.51
    ./emsdk activate 3.1.51
    source ./emsdk_env.sh
    

### 2\. 编译项目

**简单项目（单文件）** ：
    
    
    emcc main.cpp -o game.html \
      -s WASM=1 \
      -s USE_WEBGL2=1 \
      -s FULL_ES3=1 \
      -s ALLOW_MEMORY_GROWTH=0 \
      -s INITIAL_MEMORY=805306368 \
      -O2
    

**CMake 项目** ：
    
    
    mkdir build && cd build
    emcmake cmake .. -DCMAKE_BUILD_TYPE=Release
    emmake make -j$(nproc)
    

**Makefile 项目** ：
    
    
    emmake make CC=emcc CXX=em++ AR=emar
    

### 3\. 关键编译参数参考
    
    
    # 基本参数
    -s WASM=1                        # 输出 WebAssembly
    -O2                              # 优化级别（-O0 调试 / -O2 平衡 / -O3 最大优化 / -Oz 最小体积，game.js 超过 2MB 时建议使用 -Oz）
    
    # 图形渲染
    -s USE_WEBGL2=1                  # 启用 WebGL 2.0
    -s FULL_ES3=1                    # 完整 OpenGL ES 3.0 模拟
    -s FULL_ES2=1                    # 完整 OpenGL ES 2.0 模拟（WebGL 1.0）
    -s MIN_WEBGL_VERSION=2           # 最低 WebGL 版本要求
    
    # 内存管理
    -s ALLOW_MEMORY_GROWTH=0         # 不允许内存动态增长（推荐）
    -s INITIAL_MEMORY=805306368      # 初始内存 768MB（游戏根据自身内存占用设置合适值）
    
    # 音频
    -s USE_SDL=2                     # 使用 SDL 2 音频
    
    # 文件系统
    --preload-file assets@/assets    # 预加载资源目录到虚拟文件系统
    
    # 导出
    -s EXPORTED_FUNCTIONS='["_main"]'
    -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap","stringToUTF8","UTF8ToString","lengthBytesUTF8","allocateUTF8"]'
    
    # 调试（开发阶段使用）
    -s ASSERTIONS=2                  # 运行时断言检查
    -g                               # 生成调试信息
    --source-map-base ./             # 源码映射
    

## 常见适配要点

原生 API | Emscripten 适配方式  
---|---  
OpenGL ES 2.0/3.0 | 自动映射为 WebGL 1.0/2.0  
POSIX 文件 I/O | 本方案提供 POSIX 标准文件接口适配，以 `/CustomWritablePath/` 为前缀的路径自动映射到微信小游戏文件系统，支持持久化存储。详见 [文件系统适配](<FileSystemAdapter.md>)  
BSD Socket (TCP/UDP) | 本方案提供接近 POSIX 标准的 TCP/UDP Socket 接口，支持 `connect`/`send`/`recv`/`select` 等常用操作。详见 [TCP/UDP Socket 适配](<SocketAdapter.md>)  
pthreads | 暂不支持  
SDL 2 | Emscripten 内置 SDL 2 端口  
GLFW | Emscripten 内置 GLFW 端口  
主循环 | 使用 `emscripten_set_main_loop()` 替代无限循环  
  
> ⚠ **重要提示** ：浏览器环境中不允许使用阻塞式主循环（`while(true)`），必须使用 `emscripten_set_main_loop()` 或 `emscripten_set_main_loop_timing()` 将主循环交给浏览器的 `requestAnimationFrame` 驱动。

> ⚠ **关于文件系统** ：请勿使用 Emscripten 的 IDBFS 文件系统方案。本方案提供了更高效的文件系统适配，以 `/CustomWritablePath/` 为路径前缀即可自动走微信小游戏文件系统，支持标准 C 文件操作（`fopen`/`fread`/`fwrite` 等），并且支持持久化存储。
> 
> ⚠ **关于网络 Socket** ：Emscripten 默认将 BSD Socket 桥接为 WebSocket，功能受限且不支持 UDP。本方案提供了完整的 TCP/UDP Socket 适配模块，支持 IPv4/IPv6，接口兼容 POSIX 标准，无需修改业务网络代码即可无缝迁移。

* * *

## 验证导出结果

导出完成后请执行以下验证步骤：

### 1\. 本地服务器测试
    
    
    # 使用 Python 启动简单 HTTP 服务器
    cd /path/to/build-output
    python3 -m http.server 8080
    

然后在浏览器中访问 `http://localhost:8080/game.html`，确认游戏能正常运行。

### 2\. 检查导出产物

确认以下文件存在且大小合理：
    
    
    ls -lh game.js game.wasm game.data
    

文件 | 参考大小范围  
---|---  
`.js` | 500KB ~ 2MB（不能超过 2MB）  
`.wasm` | 5MB ~ 50MB  
`.data` | 视资源而定（0 ~ 数百 MB）  
  
> ⚠ **`game.js` 文件大小不能超过 2MB**。微信小游戏对主包 JS 文件有严格的大小限制。如果导出的 `game.js` 超过 2MB，请将编译优化等级调整为 `-Oz`（最小体积优化）：
>     
>     
>     emcc main.cpp -o game.html -Oz -s WASM=1 ...
>     
> 
> 如果使用 CMake 构建，在 `CMakeLists.txt` 中设置：
>     
>     
>     set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Oz")
>     set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Oz")
>     set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Oz")
>     
> 
> 同时可配合 `-flto`（链接时优化）进一步减小体积。

### 3\. 使用转换工具

确认游戏在浏览器中运行正常后，即可使用本方案的转换工具将其转换为微信小游戏：
    
    
    ./wx-transformer --config config.json
    

详细转换步骤请参考 [快速开始](<QuickStart.md>)。

## 下一步

  * 查看 [快速开始](<QuickStart.md>) 完成第一次转换
  * 了解 [Cocos2d-x 导出](<Cocos2dxExport.md>) \- Cocos2d-x 导出 H5 游戏的方法
  * 了解 [UE4 导出](<UE4Export.md>) \- Unreal Engine 导出 H5 游戏的方法
  * 了解 [转换工具详细配置](<TransformTool.md>)
  * 了解 [技术原理](<TechPrinciple.md>)
  * 了解 [SDK 集成指南](<SDKBuild.md>)

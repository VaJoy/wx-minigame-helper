---
title: "SDK 集成指南"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/SDKBuild.html
---

# SDK 集成指南

本文档介绍如何将预编译的 WXGameSdk 集成到您的 Emscripten 项目中。

## 下载能力 SDK

能力 SDK 提供了网络通信（HTTP、TCP/UDP Socket、WebSocket）、文件系统、微信开放接口等模块，帮助您的游戏在微信小游戏环境中使用这些底层能力。

[ 下载最新版能力 SDK](<https://game.weixin.qq.com/cgi-bin/gamewxagwasmsplitwap/getunityplugininfo?download=1&biz_id=4&version=1.0.3>)

下载解压后，您将获得如下 SDK 目录结构，按照后续章节的说明将其集成到项目中即可。

> 能力 SDK 与转换工具是独立的。转换工具负责将 H5 游戏包转换为小游戏格式，能力 SDK 则提供运行时的网络、文件系统等底层能力支持。如需下载转换工具，请参考 [快速开始](<QuickStart.md>)。

## 环境要求

工具 | 版本要求  
---|---  
Emscripten | 仅支持 **3.1.10** 和 **3.1.51** 两个版本  
CMake | 3.10+  
  
## SDK 模块概览

模块 | 说明 | 对应 jslib 文件  
---|---|---  
HTTP | HTTP/HTTPS 客户端 | `libwxhttp_open.jslib`  
Socket | TCP/UDP 网络库 | `libwxsocket_open.jslib`  
WebSocket | WebSocket 客户端 | `libwxwebsocket_open.jslib`  
FileSystem | 文件系统适配 | `libwxfs_open.jslib`  
WX Open API | 微信开放接口 | `SDK-Call-JS.jslib`  
  
## SDK 目录结构

下载的 SDK 包含以下文件：
    
    
    WXGameSdkLib
    ├── base
    │   ├── report
    │   │   ├── libwxreport_open.jslib
    │   │   └── wx_report_interface.h
    │   ├── socket
    │   │   ├── libwxsocket_open.jslib
    │   │   └── wx_socket_interface.h
    │   ├── websocket
    │   │   ├── libwxwebsocket_open.jslib
    │   │   └── wx_websocket_interface.h
    │   ├── http
    │   │   ├── libwxhttp_open.jslib
    │   │   └── wx_http_interface.h
    │   ├── filesystem
    │   │   ├── libwxfs_open.jslib
    │   │   └── wx_fs_interface.h
    ├── wx-open-api(可选)
    │   ├── wx.h
    │   └── SDK-Call-JS.jslib
    └── build
        └── lib
            └── libwxgamesdk.a
    

## 集成方法

### 1\. 添加 SDK 到项目

将 SDK 文件复制到您的项目目录：
    
    
    # 假设您的项目目录为 your_project
    cp -r wxgamesdk your_project/
    

### 2\. 配置 CMakeLists.txt
    
    
    cmake_minimum_required(VERSION 3.10)
    project(MyGame)
    
    set(CMAKE_CXX_STANDARD 11)
    set(WXGAMESDK_DIR "${CMAKE_CURRENT_SOURCE_DIR}/wxgamesdk")
    
    # 添加可执行文件
    add_executable(mygame
        main.cpp
        # 其他源文件...
    )
    
    # 包含 SDK 头文件
    target_include_directories(mygame PRIVATE
        ${WXGAMESDK_DIR}/include
    )
    
    # 链接 SDK 库
    target_link_libraries(mygame
        ${WXGAMESDK_DIR}/lib/libwxgamesdk.a
    )
    
    # Emscripten 链接标志
    set(EXPORTED_FUNCS "[\
        \"_HttpRequestOnCookie\", \
        \"_HttpRequestOnSuccessStrData\", \
        \"_HttpRequestOnSuccessBinData\", \
        \"_HttpOnError\", \
        \"_TcpSocketOnConnect\", \
        \"_TcpSocketOnMessage\", \
        \"_TcpSocketOnError\", \
        \"_UdpSocketOnMessage\", \
        \"_SocketOnClose\", \
        \"_WebSocketOnSuccess\", \
        \"_WebSocketOnError\", \
        \"_WebSocketOnClose\", \
        \"_WebSocketOnStrData\", \
        \"_WebSocketOnBinData\", \
        \"_main\", \"_free\", \"_malloc\"]")
    
    set_target_properties(mygame PROPERTIES
        SUFFIX ".html"
        LINK_FLAGS "\
            -s WASM=1 \
            -s ALLOW_MEMORY_GROWTH=0 \
            -s EXPORTED_RUNTIME_METHODS='[\"ccall\", \"cwrap\", \"stringToUTF8\", \"UTF8ToString\", \"lengthBytesUTF8\", \"allocateUTF8\"]' \
            -s EXPORTED_FUNCTIONS='${EXPORTED_FUNCS}' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxhttp_open.jslib \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxsocket_open.jslib \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxwebsocket_open.jslib \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxfs_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

### 3\. 按需选择模块

如果您只需要部分功能，可以只链接对应的 jslib 文件：

#### 仅使用 HTTP 模块
    
    
    set(EXPORTED_FUNCS "[\
        \"_HttpRequestOnCookie\", \
        \"_HttpRequestOnSuccessStrData\", \
        \"_HttpRequestOnSuccessBinData\", \
        \"_HttpOnError\", \
        \"_main\", \"_free\", \"_malloc\"]")
    
    set_target_properties(mygame PROPERTIES
        LINK_FLAGS "\
            -s WASM=1 \
            -s EXPORTED_FUNCTIONS='${EXPORTED_FUNCS}' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxhttp_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

#### 仅使用 Socket 模块
    
    
    set(EXPORTED_FUNCS "[\
        \"_TcpSocketOnConnect\", \
        \"_TcpSocketOnMessage\", \
        \"_TcpSocketOnError\", \
        \"_UdpSocketOnMessage\", \
        \"_SocketOnClose\", \
        \"_main\", \"_free\", \"_malloc\"]")
    
    set_target_properties(mygame PROPERTIES
        LINK_FLAGS "\
            -s WASM=1 \
            -s EXPORTED_FUNCTIONS='${EXPORTED_FUNCS}' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxsocket_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

#### 仅使用 WebSocket 模块
    
    
    set(EXPORTED_FUNCS "[\
        \"_WebSocketOnSuccess\", \
        \"_WebSocketOnError\", \
        \"_WebSocketOnClose\", \
        \"_WebSocketOnStrData\", \
        \"_WebSocketOnBinData\", \
        \"_main\", \"_free\", \"_malloc\"]")
    
    set_target_properties(mygame PROPERTIES
        LINK_FLAGS "\
            -s WASM=1 \
            -s EXPORTED_FUNCTIONS='${EXPORTED_FUNCS}' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxwebsocket_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

### 4\. 编译项目
    
    
    mkdir build && cd build
    emcmake cmake ..
    emmake make
    

## 关键链接标志说明

### \--whole-archive
    
    
    -Wl,--whole-archive libwxgamesdk.a -Wl,--no-whole-archive
    

**必须使用此标志** ，否则 SDK 中未被显式引用的符号会被链接器丢弃，导致运行时找不到回调函数。

### EXPORTED_FUNCTIONS

导出的 C 函数列表，这些函数可以从 JavaScript 调用：
    
    
    -s EXPORTED_FUNCTIONS='["_main", "_HttpOnError", ...]'
    

> 注意：函数名前需要加下划线 `_`

### EXPORTED_RUNTIME_METHODS

导出的 Emscripten 运行时方法：
    
    
    -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap", "stringToUTF8", "UTF8ToString", "lengthBytesUTF8", "allocateUTF8"]'
    

### \--js-library

链接 JavaScript 库文件：
    
    
    --js-library path/to/libwxhttp_open.jslib
    

## 常见问题

### Q: 链接时提示找不到符号

检查是否使用了 `--whole-archive` 标志。

### Q: 运行时回调函数未被调用

  1. 确保回调函数被正确导出（`EXPORTED_FUNCTIONS`）
  2. 检查 jslib 文件是否正确链接

## 下一步

  * 了解各模块的详细用法： 
    * [HTTP 客户端](<HttpAdapter.md>)
    * [TCP/UDP Socket](<SocketAdapter.md>)
    * [WebSocket](<WebSocketAdapter.md>)
    * [文件系统](<FileSystemAdapter.md>)
    * [键盘适配](<KeyboardAdapter.md>)
    * [微信开放接口](<WXOpenAPI.md>)
    * [UE HTTP 集成](<UEHttpIntegration.md>)

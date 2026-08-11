---
title: "Cocos2d-x 导出"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/Cocos2dxExport.html
---

# Cocos2d-x 导出

本文档介绍如何将 Cocos2d-x 引擎通过 Emscripten 编译导出为 H5 游戏。关于 Emscripten 的基本概念和导出产物说明，请参考 [典型引擎适配](<EmscriptenExport.md>)。

## Cocos2d-x 导出 H5 游戏

### 引擎版本

Cocos2d-x 官方自 **3.0 版本** 开始不再支持 Emscripten 构建。目前 v3 的 Emscripten 构建来自开源项目：

[WuJiayiSH/cocos2d-x](<https://github.com/WuJiayiSH/cocos2d-x>)

推荐使用该开源版本引擎进行 H5 导出。

### 源工程适配

推荐用上述开源版本引擎**替换原项目的引擎** 后，再将项目对引擎的修改 patch 进去。整体流程为：**先跑通导出到 Web，再通过转换工具转换到小游戏** 。

> ⚠ 打包时，检查 `CMakeLists.txt` 中是否包含 `-lidbfs.js`、`--use-preload-cache`，如果有请**去掉** 该参数。

适配工作主要关注以下内容（按开发先后顺序）：

#### 1\. 引擎修改的 patch

如果项目对引擎有修改，需要将该修改 patch 到开源版本引擎中。如果该修改依赖 runtime，则需要做好相应的 Emscripten 相关适配。

#### 2\. 第三方非 JS 库适配

如果项目引入了第三方非 JS 库（如果没有可忽略此项），需区分以下情况：

  * **源码编译** ：如果该库是源码编译的，一般可以忽略，Emscripten 会直接编译
  * **非源码编译，有 JS 实现** ：可以通过 Emscripten 的 [JS 和 C++ 互调机制](<https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html>) 将其适配到 JS 版本
  * **非源码编译，无 JS 实现，不依赖 runtime** ：需要自行适配，通常修改构建脚本即可
  * **非源码编译，无 JS 实现，依赖 runtime** ：需要修改代码，接入 Emscripten SDK，或者自行实现其 JS 版本，再按上述方式适配

### 环境准备

#### 1\. 安装 Emscripten SDK
    
    
    # 克隆 emsdk
    git clone https://github.com/emscripten-core/emsdk.git
    cd emsdk
    
    # 安装并激活支持的版本（仅支持 3.1.10 和 3.1.51）
    ./emsdk install 3.1.51
    ./emsdk activate 3.1.51
    
    # 设置环境变量（每次打开新终端需要执行）
    source ./emsdk_env.sh
    

#### 2\. 安装依赖工具
    
    
    # 确认 emcc 可用
    emcc --version
    
    # 确认 CMake 版本 >= 3.10
    cmake --version
    
    # 确认 Python 3 可用
    python3 --version
    

### 编译步骤

#### 方式一：使用 CMake 构建（推荐）
    
    
    # 进入 Cocos2d-x 项目目录
    cd /path/to/your-cocos2dx-project
    
    # 创建构建目录
    mkdir build-web && cd build-web
    
    # 使用 emcmake 配置项目
    emcmake cmake .. \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_TOOLCHAIN_FILE=$EMSDK/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake
    
    # 编译
    emmake make -j$(nproc)
    

#### 方式二：使用 Cocos 命令行工具

如果您的项目使用 `cocos` 命令行工具管理：
    
    
    # 编译为 Web 平台
    cocos compile -p web -m release
    

### 关键编译参数

在 `CMakeLists.txt` 中，需要关注以下 Emscripten 特有的编译参数：
    
    
    # 启用 WebAssembly
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s WASM=1")
    
    # 禁用内存动态增长，设置固定初始内存（推荐）
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s ALLOW_MEMORY_GROWTH=0")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s INITIAL_MEMORY=805306368")  # 768MB，游戏根据自身内存占用设置合适值
    
    # 使用 WebGL 2.0
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s USE_WEBGL2=1 -s FULL_ES3=1")
    # 若只需 WebGL 1.0
    # set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s FULL_ES2=1")
    
    # 启用 SDL 2（Cocos2d-x 音频和输入依赖）
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -s USE_SDL=2")
    
    # 预加载游戏资源到虚拟文件系统
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} --preload-file ${CMAKE_SOURCE_DIR}/Resources@/")
    
    # 导出需要的运行时方法
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} \
      -s EXPORTED_RUNTIME_METHODS='[\"ccall\",\"cwrap\",\"stringToUTF8\",\"UTF8ToString\",\"lengthBytesUTF8\",\"allocateUTF8\"]'")
    

### 产物结构

编译成功后，产出文件通常位于构建目录中：
    
    
    build-web/
    ├── game.js         # JS 胶水代码（必需）
    ├── game.wasm       # WASM 二进制（必需）
    ├── game.data       # 预加载的资源包（必需，由 --preload-file 生成）
    └── game.html       # 测试页面（可选）
    

> ⚠ **`game.js` 文件大小不能超过 2MB**。微信小游戏对主包 JS 文件有严格的大小限制。如果导出的 `game.js` 超过 2MB，请在 `CMakeLists.txt` 中将优化等级调整为 `-Oz`（最小体积优化）：
>     
>     
>     # 将优化等级改为 -Oz 以减小 JS 文件体积
>     set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Oz")
>     set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Oz")
>     set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Oz")
>     
> 
> 同时确保使用 `Release` 构建类型（`-DCMAKE_BUILD_TYPE=Release`），并可配合 `-flto`（链接时优化）进一步减小体积。

### 常见问题

#### Q: 编译报错 `undefined symbol: glXXX`

A: OpenGL ES 接口未完全映射。检查是否设置了正确的 `-s FULL_ES2=1` 或 `-s FULL_ES3=1` 标志。

#### Q: 资源文件加载失败

A: 确保 `--preload-file` 路径正确。Emscripten 的虚拟文件系统会将资源打包到 `.data` 文件中，路径映射需与游戏代码中的资源路径一致。

#### Q: 编译后 .wasm 文件过大

A: 尝试以下优化方式：

  * 使用 `-O2` 或 `-O3` 优化级别
  * 添加 `-s FILESYSTEM=0`（如果不需要虚拟文件系统）
  * 使用 `-flto` 启用链接时优化（LTO）
  * 移除未使用的引擎模块

* * *

## 验证导出结果

无论使用哪种引擎，导出完成后请执行以下验证步骤：

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
  
### 3\. 使用转换工具

确认游戏在浏览器中运行正常后，即可使用本方案的转换工具将其转换为微信小游戏：
    
    
    ./wx-transformer --config config.json
    

详细转换步骤请参考 [快速开始](<QuickStart.md>)。

## 下一步

  * 查看 [快速开始](<QuickStart.md>) 完成第一次转换
  * 了解 [UE4 导出](<UE4Export.md>) \- Unreal Engine 导出 H5 游戏的方法
  * 了解 [自研引擎导出](<CustomEngineExport.md>) \- 自研 C/C++ 引擎导出 H5 游戏的方法
  * 了解 [转换工具详细配置](<TransformTool.md>)
  * 了解 [技术原理](<TechPrinciple.md>)
  * 了解 [SDK 集成指南](<SDKBuild.md>)

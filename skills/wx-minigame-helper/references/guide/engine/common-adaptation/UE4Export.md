---
title: "UE4 导出"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/UE4Export.html
---

# UE4 导出

本文档介绍如何将 Unreal Engine (UE) 项目通过 Emscripten 编译导出为 H5 游戏。关于 Emscripten 的基本概念和导出产物说明，请参考 [典型引擎适配](<EmscriptenExport.md>)。

## Unreal Engine (UE) 导出 H5 游戏

Unreal Engine 支持通过 Emscripten 将项目编译为 HTML5 版本。

> ⚠ **版本说明** ：UE 4.23 及以前的版本内置 HTML5 平台支持。UE 4.24 起官方移除了 HTML5 平台，但社区维护了 HTML5 插件可继续使用（推荐 [SpeculativeCoder/UnrealEngine-HTML5-ES3](<https://github.com/SpeculativeCoder/UnrealEngine-HTML5-ES3>) 分支）。目前仅支持 UE4，UE5 暂无可用的社区 HTML5 导出方案。
> 
> ⚠ **访问说明** ：由于 UE 源码仓库的访问限制，你需要先将 [Epic Games 账号关联到 GitHub](<https://www.unrealengine.com/en-US/ue-on-github>)，否则访问 SpeculativeCoder/UnrealEngine 仓库时会看到 404 错误。

### UE 4.23 及以前版本

#### 环境准备

UE 4.23 及以前版本自带 HTML5 编译支持，内置了特定版本的 Emscripten。
    
    
    # 进入 UE 引擎目录，运行 HTML5 平台设置脚本
    cd /path/to/UnrealEngine
    ./Setup.sh  # Linux/macOS
    # 或
    Setup.bat   # Windows
    
    # 设置 HTML5 平台的 Emscripten 环境
    cd Engine/Extras/ThirdPartyNotUE/emsdk
    ./emsdk activate latest
    

#### 编译步骤

**方式一：通过 UE 编辑器打包**

  1. 打开 UE 编辑器，加载您的项目
  2. 进入 **File → Package Project → HTML5**
  3. 选择输出目录
  4. 等待编译完成

**方式二：通过命令行打包**
    
    
    # Windows
    RunUAT.bat BuildCookRun \
      -project="/path/to/YourProject.uproject" \
      -platform=HTML5 \
      -clientconfig=Shipping \
      -cook -stage -package -archive \
      -archivedirectory="/path/to/output"
    
    # Linux/macOS
    ./RunUAT.sh BuildCookRun \
      -project="/path/to/YourProject.uproject" \
      -platform=HTML5 \
      -clientconfig=Shipping \
      -cook -stage -package -archive \
      -archivedirectory="/path/to/output"
    

### UE 4.24+ 版本（社区 HTML5 插件）

UE 4.24 之后官方移除了 HTML5 平台支持，推荐使用社区维护的 [SpeculativeCoder/UnrealEngine-HTML5-ES3](<https://github.com/SpeculativeCoder/UnrealEngine-HTML5-ES3>) 分支。该项目在原 @nickshin 社区 HTML5 插件基础上进行了持续维护和增强，提供以下特性：

  * 支持 UE 4.27.2（最新/最终 UE4 版本）
  * 支持 ES3 着色器（WebGL 2.0）
  * 使用较新版本的 Emscripten（4.0.x）
  * 内置资源 gzip 压缩、WebSocket SSL 支持、实验性移动端（ASTC 纹理 + 触控输入）等增强特性

> 该项目同时提供 `4.24-html5-es2` 分支（WebGL 1.0），适用于需要停留在 UE 4.24 的项目。

#### 前置条件

工具 | 要求  
---|---  
**操作系统** | Windows 11（Windows 10 可能也可以）  
**Visual Studio** | 2022（2019 可能也可以），安装 ".NET 桌面开发" 和 "使用 C++ 的游戏开发" 工作负载  
**Windows SDK** | 最新版本的 Windows 11 SDK  
**Git** | [Git for Windows](<https://gitforwindows.org/>)（后续所有命令在 Git Bash 终端中执行）  
**CMake** | 已加入 PATH，可通过 `cmake --version` 验证  
**Python** | Python 3.x，需确保关闭 Windows 的 Python "应用执行别名"  
**Epic Games 账号** | 需 [关联到 GitHub](<https://www.unrealengine.com/en-US/ue-on-github>)，否则无法访问源码仓库  
  
#### 安装步骤

使用 Git Bash 终端执行以下步骤：

**1\. 克隆引擎源码**
    
    
    # 4.27 ES3（WebGL 2）—— 推荐
    git clone -b 4.27-html5-es3 --single-branch \
      https://github.com/SpeculativeCoder/UnrealEngine.git ue-4.27-html5-es3
    
    # 或 4.24 ES2（WebGL 1）—— 备选
    # git clone -b 4.24-html5-es2 --single-branch \
    #   https://github.com/SpeculativeCoder/UnrealEngine.git ue-4.24-html5-es2
    

> ⚠ 源码体积较大，克隆需要较长时间。

**2\. 运行引擎设置**
    
    
    cd ue-4.27-html5-es3
    
    # 下载引擎依赖
    ./Setup.bat
    

**3\. 设置 HTML5 平台（自动安装 Emscripten）**
    
    
    cd Engine/Platforms/HTML5
    ./HTML5Setup.sh
    

> 此步骤会自动下载 Emscripten SDK 并编译支持库（如 PhysX 等），耗时较长。完成后应看到 `Success!` 提示。如未看到该提示，需要排查问题后删除 `Engine/Platforms/HTML5/Build/emsdk` 目录重试。

**4\. 生成项目文件**
    
    
    cd -  # 回到引擎根目录
    ./GenerateProjectFiles.bat
    

> 如果出现 `NODEJS NOT FOUND` 错误，请参考 [仓库 README 的 TROUBLESHOOTING 部分](<https://github.com/SpeculativeCoder/UnrealEngine-HTML5-ES3>) 进行修复。

**5\. 编译引擎**

  1. 用 Visual Studio 2022 打开 `UE4.sln`
  2. 设置 **Solution Configuration** 为 `Development Editor`，**Solution Platform** 为 `Win64`
  3. 右键 **Programs → Add → Existing Project** ，添加 `Engine/Platforms/HTML5/Source/Programs/HTML5/HTML5LaunchHelper/HTML5LauncherHelper.csproj`
  4. 按住 Ctrl 多选以下项目后，右键 → **Build Selection** ： 
     * `UE4`、`AutomationTool`、`AutomationToolLauncher`、`HTML5LaunchHelper`
     * `ShaderCompileWorker`、`UnrealBuildTool`、`UnrealFrontend`、`UnrealHeaderTool`、`UnrealLightmass`、`UnrealPak`

> ⚠ 编译耗时较长（`UE4` 项目最慢）。如果编译结束后有失败项目，至少再重试一次。

#### 打包 HTML5 项目

**方式一：通过 UE 编辑器打包（推荐）**

  1. 运行编译好的编辑器：`Engine/Binaries/Win64/UE4Editor.exe`
  2. 首次运行需等待着色器编译完成
  3. 创建或打开项目后，进入 **File → Package Project → HTML5**
  4. 选择输出目录，等待打包完成
  5. 打包完成后，运行输出目录中的 `HTML5LaunchHelper.exe`，然后访问 `http://localhost:8000`

**方式二：通过命令行打包**
    
    
    # Windows（在 Git Bash 中执行）
    ./Engine/Build/BatchFiles/RunUAT.bat BuildCookRun \
      -project="/path/to/YourProject.uproject" \
      -platform=HTML5 \
      -clientconfig=Shipping \
      -cook -stage -package -archive \
      -archivedirectory="/path/to/output"
    

### UE 项目设置建议

在 UE 编辑器中，进入 **Project Settings** 进行以下配置：

设置项 | 推荐值 | 说明  
---|---|---  
**Platforms → HTML5 → WebGL Version** | WebGL 2 | 使用 WebGL 2.0 以获得更好的渲染效果  
**Platforms → HTML5 → Emscripten → IndexedDB storage** | ❌ 关闭 | 微信小游戏环境下不需要浏览器 IndexedDB 缓存  
**Project → Packaging → Create compressed cooked packages** | ✅ 启用 | 压缩 PAK 文件，显著减小资源体积  
**Platforms → HTML5 → Packaging → Compress files during packaging** | ✅ 启用 | 压缩所有打包文件（尤其显著减小 WASM 体积）  
**Platforms → HTML5 → Packaging → Package JQuery and Bootstrap** | ✅ 启用 | 将 JQuery/Bootstrap 文件打包到本地，不依赖 CDN  
**Packaging → List of maps to include** | 仅包含需要的地图 | 避免打包 Starter Content 等无关资源  
**Platforms → HTML5 → Memory Size (MB)** | 512 或 256 | 根据游戏复杂度调整，微信小游戏建议不超过 512MB  
**Rendering → Mobile HDR** | ❌ 关闭 | 降低 GPU 负担  
**Rendering → Forward Shading** | ✅ 启用 | 前向渲染在移动端性能更好  
  
> **关于加密** ：可在 **Project Settings → Crypto** 中启用 PAK 加密（Encrypt PAK Ini Files / Index / UAsset / All Asset Files），但注意 HTML5 环境下所有数据都会下载到用户端，加密主要起到关联保护作用。

### 产物结构

UE HTML5 打包完成后的产物结构：
    
    
    HTML5/
    ├── YourProject.js        # JS 胶水代码
    ├── YourProject.wasm      # WASM 二进制
    ├── YourProject.data      # 游戏资源包
    ├── YourProject.data.js   # 资源包加载代码
    ├── YourProject.html      # 测试页面
    ├── YourProject.symbols   # 符号文件（可选，用于调试）
    └── Utility.js            # UE 辅助脚本
    

> ⚠ **`YourProject.js` 文件大小不能超过 2MB**。微信小游戏对主包 JS 文件有严格的大小限制。如果导出的 JS 文件超过 2MB，请通过以下方式优化：
> 
>   1. 使用 **Shipping** 构建配置（而非 Development），命令行打包时指定 `-clientconfig=Shipping`
>   2. 在 **Project Settings → Platforms → HTML5 → Emscripten** 中，确认启用了 **Compress files during packaging** 选项
>   3. 如果仍然超过 2MB，可在引擎源码的 HTML5 工具链配置中将优化等级调整为 `-Oz`（路径参考：`Engine/Platforms/HTML5/Source/Programs/UnrealBuildTool/HTML5ToolChain.cs`），将默认的 `-O3` 改为 `-Oz` 以获得最小体积
> 

### 常见问题

#### Q: 编译报错 `memory access out of bounds`

A: 增大内存分配，在 Project Settings 中将 **Memory Size** 调大，或在编译参数中添加 `-s INITIAL_MEMORY=536870912`（512MB）。

#### Q: 打包后画面闪烁或黑屏

A: 检查以下设置：

  * 确认使用了 Forward Shading（前向渲染）
  * 关闭 Mobile HDR

#### Q: UE5 是否支持 HTML5 导出？

A: UE5 官方未提供 HTML5 支持，目前也没有活跃维护的社区 HTML5 插件。如需 HTML5 导出，建议使用 UE 4.27 + [SpeculativeCoder HTML5 ES3 分支](<https://github.com/SpeculativeCoder/UnrealEngine-HTML5-ES3>)。

#### Q: 访问 SpeculativeCoder/UnrealEngine 仓库返回 404？

A: 这是因为 UE 源码仓库需要授权访问。请先将你的 [Epic Games 账号关联到 GitHub](<https://www.unrealengine.com/en-US/ue-on-github>)，关联后即可正常访问。

#### Q: `HTML5Setup.sh` 执行失败怎么办？

A: 如果没有看到 `Success!` 提示，说明过程中出错。需要先删除 `Engine/Platforms/HTML5/Build/emsdk` 目录，排查问题后重新执行 `HTML5Setup.sh`。

#### Q: `GenerateProjectFiles.bat` 报 `NODEJS NOT FOUND` 错误？

A: 参考 [仓库 README 的 TROUBLESHOOTING 部分](<https://github.com/SpeculativeCoder/UnrealEngine-HTML5-ES3>) 进行修复后重新执行即可。

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
    
    
    ls -lh game.js game.wasm game.data game.data.js
    

文件 | 参考大小范围  
---|---  
`.js` | 500KB ~ 2MB（不能超过 2MB）  
`.wasm` | 5MB ~ 50MB  
`.data` | 视资源而定（0 ~ 数百 MB）  
`.data.js` | 10KB ~ 100KB  
  
### 3\. 使用转换工具

确认游戏在浏览器中运行正常后，即可使用本方案的转换工具将其转换为微信小游戏：
    
    
    ./wx-transformer --config config.json
    

详细转换步骤请参考 [快速开始](<QuickStart.md>)。

## 下一步

  * 查看 [快速开始](<QuickStart.md>) 完成第一次转换
  * 了解 [Cocos2d-x 导出](<Cocos2dxExport.md>) \- Cocos2d-x 导出 H5 游戏的方法
  * 了解 [自研引擎导出](<CustomEngineExport.md>) \- 自研 C/C++ 引擎导出 H5 游戏的方法
  * 了解 [转换工具详细配置](<TransformTool.md>)
  * 了解 [技术原理](<TechPrinciple.md>)
  * 了解 [SDK 集成指南](<SDKBuild.md>)
  * 了解 [UE 引擎 HTTP 集成](<UEHttpIntegration.md>)

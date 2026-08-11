---
title: "文件系统适配"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/FileSystemAdapter.html
---

# 文件系统适配

本文档介绍微信小游戏文件系统适配模块的使用方法。

## 概述

Emscripten 默认使用虚拟文件系统（MEMFS），所有文件数据存储在内存中，不仅无法持久化，还会占用宝贵的内存空间。本适配模块将文件操作映射到微信小游戏的文件系统 API，实现真正的磁盘文件读写能力。

**⚠ 重要：涉及文件存储的路径必须以`/CustomWritablePath` 开头**

  * **`/CustomWritablePath/...`** → 映射到微信小游戏用户文件系统，数据存储在**磁盘** ，可持久化、不占用内存
  * **其他路径** → 走 Emscripten 默认的 MEMFS，数据存储在**内存** 中，重启后丢失且占用内存空间

使用标准 C 文件操作接口（`fopen`、`fread`、`fwrite` 等）即可，无需修改代码逻辑，只需确保路径以 `/CustomWritablePath` 开头。

## 功能特性

功能 | 说明  
---|---  
标准 C 文件操作 | 支持 `fopen`/`fread`/`fwrite`/`fseek`/`ftell`/`fclose` 等标准接口  
目录操作 | 支持 `mkdir`/`rmdir`/`access` 等标准接口  
路径自动映射 | 以 `/CustomWritablePath` 开头的路径自动映射到微信文件系统  
扩展接口 | 递归删除目录、TAR 包加载、ZIP 解压、文件同步等  
  
## 快速开始

### 集成到项目

#### CMakeLists.txt 配置
    
    
    cmake_minimum_required(VERSION 3.10)
    project(MyGame)
    
    set(WXGAMESDK_DIR "${CMAKE_CURRENT_SOURCE_DIR}/wxgamesdk")
    
    add_executable(mygame main.cpp)
    
    target_include_directories(mygame PRIVATE
        ${WXGAMESDK_DIR}/include
    )
    
    target_link_libraries(mygame
        ${WXGAMESDK_DIR}/lib/libwxgamesdk.a
    )
    
    set_target_properties(mygame PROPERTIES
        LINK_FLAGS "\
            -s WASM=1 \
            -s EXPORTED_RUNTIME_METHODS='[\"ccall\", \"cwrap\", \"stringToUTF8\", \"UTF8ToString\", \"lengthBytesUTF8\", \"allocateUTF8\"]' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxfs_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

## 基本文件操作

### 路径规则

路径前缀 | 说明  
---|---  
`/CustomWritablePath/` | 映射到微信小游戏用户文件系统（可读写、可持久化）  
`/xxx/` | MEMFS内存资源  
  
### 文件读写示例
    
    
    #include <cstdio>
    #include <cstring>
    #include <cassert>
    #include <unistd.h>
    
    // 写入文件
    void WriteFile() {
        // 路径以 /CustomWritablePath 开头，自动映射到微信文件系统
        FILE* fp = fopen("/CustomWritablePath/awesomeface.txt", "w");
        if (fp) {
            fprintf(fp, "hello world");
            fclose(fp);
        }
        
        // 检查文件是否存在
        assert(access("/CustomWritablePath/awesomeface.txt", F_OK) == 0);
    }
    
    // 读取文件
    void ReadFile() {
        FILE* fp = fopen("/CustomWritablePath/awesomeface.txt", "r");
        if (fp) {
            char buffer[1024];
            size_t readSize = fread(buffer, 1, sizeof(buffer), fp);
            buffer[readSize] = '\0';
            printf("读取内容: %s\n", buffer);
            fclose(fp);
        }
    }
    

### 文件定位（Seek）操作
    
    
    void SeekTest() {
        const char* path = "/CustomWritablePath/seek_test.txt";
        
        // 创建测试文件
        FILE* fp = fopen(path, "w");
        fprintf(fp, "0123456789");
        fclose(fp);
        
        // 读取并定位
        fp = fopen(path, "r");
        
        // 跳转到偏移量 2
        fseek(fp, 2, SEEK_SET);
        
        char buffer[5] = {0};
        fread(buffer, 1, 4, fp);
        // buffer 内容为 "2345"
        
        // 获取文件大小
        fseek(fp, 0, SEEK_END);
        long fileSize = ftell(fp);  // fileSize = 10
        
        fclose(fp);
    }
    

### 目录操作
    
    
    #include "filesystem/wx_fs_interface.h"
    #include <sys/stat.h>
    
    void DirectoryExample() {
        // 递归创建多级目录
        int ret = WXGameSDK::MkdirRecursive("/CustomWritablePath/Library/Application_Support/1.0.0/UpgradeCocos");
        if (ret == 0) {
            printf("目录创建成功\n");
        } else {
            printf("目录创建失败，错误码: %d\n", ret);
        }
        
        // 创建单级目录
        mkdir("/CustomWritablePath/save", 0755);
    }
    

> **说明** ：`MkdirRecursive` 内部调用微信 `mkdirSync(path, true)` 一次性创建所有层级目录，相比逐级 `mkdir` 调用性能更优。

## 扩展接口

SDK 在 `wx_fs_interface.h` 中提供了扩展接口，用于处理更复杂的文件操作场景。

### 头文件
    
    
    #include "filesystem/wx_fs_interface.h"
    

### 接口列表
    
    
    namespace WXGameSDK {
        // 递归创建目录
        int MkdirRecursive(const char* path);
        
        // 递归删除目录
        int RmdirRecursive(const char* path);
        
        // 文件同步（将磁盘文件索引同步到内存）
        int Sync(int num = 300);
        
        // 解压 ZIP 文件（异步）
        int Unzip(const char* zipFile, const char* destDir, void* userData,
                  std::function<void(int callbackId, int result, const std::string& errmsg, void* userData)> callback);
        
        // 加载 TAR 包到内存（创建虚拟文件索引）
        int LoadPackage(const char* packagePath, const char* mountPath);
        
        // 卸载 TAR 包
        int UnloadPackage(const char* packagePath);
    }
    

### 递归创建目录
    
    
    #include "filesystem/wx_fs_interface.h"
    
    void CreateDirectory() {
        // 一次调用递归创建所有层级目录
        int code = WXGameSDK::MkdirRecursive("/CustomWritablePath/Library/Application_Support/1.0.0/UpgradeCocos");
        if (code == 0) {
            printf("目录创建成功\n");
        } else {
            printf("创建失败，错误码: %d\n", code);
        }
    }
    

### 递归删除目录
    
    
    #include "filesystem/wx_fs_interface.h"
    
    void RemoveDirectory() {
        // 递归删除整个目录树
        int code = WXGameSDK::RmdirRecursive("/CustomWritablePath/Library/Application_Support/1.0.0.0");
        if (code == 0) {
            printf("目录删除成功\n");
        } else {
            printf("删除失败，错误码: %d\n", code);
        }
    }
    

### 文件同步

在主循环中调用 `Sync` 确保文件变更被持久化到磁盘：
    
    
    #include "filesystem/wx_fs_interface.h"
    
    bool syncComplete = false;
    
    void MainLoop() {
        // 每帧同步少量文件，避免阻塞
        if (!syncComplete) {
            int ret = WXGameSDK::Sync(300);  // 每次同步最多300个文件
            if (ret == 0) {
                syncComplete = true;
                printf("文件同步完成\n");
            } else if (ret < -1) {
                printf("同步失败，错误码: %d\n", ret);
                syncComplete = true;
            }
            // ret > 0 或 ret == -1 表示还有文件待同步，继续调用
        }
    }
    

### ZIP 解压

异步解压 ZIP 文件到指定目录：
    
    
    #include "filesystem/wx_fs_interface.h"
    
    void UnzipExample() {
        int userData = 123456;  // 用户自定义数据
        
        int ret = WXGameSDK::Unzip(
            "/CustomWritablePath/Library/Application_Support/1.1.0.0/Module_UI_BaseGame.zip",  // ZIP 文件路径
            "/CustomWritablePath/Library/Application_Support/1.1.0.0/Module_UI_BaseGame",      // 解压目标目录
            &userData,
            [](int callbackId, int result, const std::string& errmsg, void* userData) {
                if (result == 0) {
                    printf("解压成功\n");
                    // 检查解压后的文件
                    if (access("/CustomWritablePath/Library/Application_Support/1.1.0.0/Module_UI_BaseGame/Animation/Daoju/Daoju_Tips_jiaohuan-anim.csb", F_OK) == 0) {
                        printf("文件解压正确\n");
                    }
                } else {
                    printf("解压失败: %s\n", errmsg.c_str());
                }
            }
        );
        
        if (ret >= 0) {
            printf("解压请求已提交，callback_id: %d\n", ret);
        } else {
            printf("解压请求失败\n");
        }
    }
    

### TAR 包加载

将 TAR 包加载到内存，创建虚拟文件索引，可以直接通过挂载路径访问 TAR 包内的文件：
    
    
    #include "filesystem/wx_fs_interface.h"
    
    void LoadTarPackage() {
        const char* packagePath = "/CustomWritablePath/tartest.tar";
        const char* mountPath = "/CustomWritablePath/Library/Application_Support/1.1.0.0";
        
        // 检查 TAR 包是否存在
        if (access(packagePath, F_OK) != 0) {
            printf("TAR 包不存在\n");
            return;
        }
        
        // 加载 TAR 包
        int fileCount = WXGameSDK::LoadPackage(packagePath, mountPath);
        if (fileCount >= 0) {
            printf("加载成功，包含 %d 个文件\n", fileCount);
            
            // 直接通过挂载路径访问 TAR 包内的文件
            if (access("/CustomWritablePath/Library/Application_Support/1.1.0.0/tartest/3.txt", F_OK) == 0) {
                printf("文件可访问\n");
                
                // 读取文件内容
                FILE* fp = fopen("/CustomWritablePath/Library/Application_Support/1.1.0.0/tartest/3.txt", "r");
                if (fp) {
                    char buffer[1024];
                    size_t readSize = fread(buffer, 1, sizeof(buffer), fp);
                    buffer[readSize] = '\0';
                    printf("文件内容: %s\n", buffer);
                    fclose(fp);
                }
            }
            
            // 访问子目录中的文件
            FILE* fp = fopen("/CustomWritablePath/Library/Application_Support/1.1.0.0/tartest/folder1/1.json", "r");
            if (fp) {
                // 读取 JSON 文件...
                fclose(fp);
            }
        } else {
            printf("加载失败，错误码: %d\n", fileCount);
        }
    }
    
    void UnloadTarPackage() {
        const char* packagePath = "/CustomWritablePath/tartest.tar";
        
        int ret = WXGameSDK::UnloadPackage(packagePath);
        if (ret == 0) {
            printf("卸载成功\n");
            
            // 卸载后文件不再可访问
            if (access("/CustomWritablePath/Library/Application_Support/1.1.0.0/tartest/3.txt", F_OK) != 0) {
                printf("文件已不可访问\n");
            }
        }
    }
    

**TAR 包特性说明** ：

  * TAR 包内的文件为**只读** ，不能删除、重命名或修改
  * 卸载 TAR 包后，其中的文件将不再可访问
  * 适用于游戏资源包的快速加载场景，无需解压到磁盘

### TAR 包加载 vs ZIP 解压

两种方式都可以用于加载资源包，但在实现原理和性能特性上有显著区别：

对比项 | TAR 包加载（LoadPackage） | ZIP 解压（Unzip）  
---|---|---  
**工作原理** | 整个 TAR 包一次性读入内存，建立文件索引后直接从内存读取 | 异步解压到磁盘，后续通过文件系统 API 逐个读取  
**并发读取** | ✅ 纯内存操作，多个文件可同时读取，无 I/O 竞争 | ⚠ 每次读取都是一次磁盘 I/O 调用，并发时存在 I/O 竞争  
**读取性能** | 零拷贝内存视图，读取延迟极低（微秒级） | 首次需调用微信文件系统 API 读取磁盘，延迟较高（毫秒级）  
**磁盘占用** | 不解压到磁盘，不额外占用用户存储空间 | 解压后文件占用磁盘空间（原始文件 + 解压文件）  
**内存占用** | 整个 TAR 包常驻内存，内存占用较高 | 仅在读取时按需加载，内存占用较低  
**文件权限** | 只读，不可修改或删除包内文件 | 可读写，解压后的文件可自由操作  
**适用场景** | 高频并发读取的只读资源（Lua 脚本、配置文件、美术资源等） | 需要修改的文件，或包体较大不适合常驻内存的场景  
  
> **选型建议** ：如果资源包内的文件是只读的且需要频繁、并发地访问（如 Lua 脚本包、游戏配置包），优先使用 TAR 包加载方式，可以避免磁盘 I/O 瓶颈，获得更好的并发读取性能。如果资源解压后需要修改，或者包体过大（超过可用内存预算），则使用 ZIP 解压方式。

### Lua 脚本包加载示例
    
    
    void LoadLuaScripts() {
        const char* packagePath = "/CustomWritablePath/LuaScripts.tar";
        const char* mountPath = "/CustomWritablePath/Lua";
        
        int fileCount = WXGameSDK::LoadPackage(packagePath, mountPath);
        if (fileCount >= 0) {
            printf("Lua 脚本包加载成功，共 %d 个文件\n", fileCount);
            
            // 访问 Lua 脚本
            if (access("/CustomWritablePath/Lua/app/GlobalVar.lua", F_OK) == 0) {
                FILE* fp = fopen("/CustomWritablePath/Lua/app/GlobalVar.lua", "r");
                if (fp) {
                    // 读取 Lua 脚本内容...
                    fclose(fp);
                }
            }
        }
    }
    

## 路径说明

### 目录结构

以下为示例结构，业务可根据实际需求自行调整。建议最大路径深度不超过 **10** 层。
    
    
    /CustomWritablePath/                    # 用户可写根目录（映射到微信文件系统）
    ├── save/                               # 存档目录（建议）
    ├── config/                             # 配置目录（建议）
    ├── Library/                            
    │   └── Application_Support/            
    │        └── {version}/                  # 版本相关数据
    

## JS 与 C++ 层文件互通

在微信小游戏中，JS 层和 C++（WASM）层各自有独立的文件访问机制。理解两者的互通方式，对于混合使用 JS 和 C++ 进行文件操作的场景至关重要。

C++ 层和 JS 层最终都通过微信文件系统 API 操作同一份磁盘文件，但由于内部机制差异：

  * C++ 层写入的文件，**JS 层可以直接读取**
  * JS 层写入的文件，**C++ 层默认无法访问** ，需要调用 `syncCreateFile` 同步后才能访问

### C++ 写入 → JS 读取

C++ 层通过 POSIX 接口写入 `/CustomWritablePath/` 下的文件后，数据会直接写入微信文件系统的磁盘。JS 层可以通过微信文件系统 API 直接读取，无需额外操作。

**C++ 侧写入** ：
    
    
    // C++ 层写入文件
    FILE* fp = fopen("/CustomWritablePath/save/player_data.json", "w");
    if (fp) {
        const char* data = "{\"level\": 10, \"score\": 9999}";
        fwrite(data, 1, strlen(data), fp);
        fclose(fp);
    }
    

**JS 侧读取** ：
    
    
    // JS 层直接读取 C++ 写入的文件
    const fs = wx.getFileSystemManager();
    const wxPath = `${wx.env.USER_DATA_PATH}/save/player_data.json`;
    
    try {
        const data = fs.readFileSync(wxPath, 'utf-8');
        const playerData = JSON.parse(data);
        console.log('玩家等级:', playerData.level);
    } catch (e) {
        console.error('读取失败:', e);
    }
    

> **路径映射规则** ：C++ 层的 `/CustomWritablePath/xxx` 对应 JS 层的 `wx.env.USER_DATA_PATH + '/xxx'`，`/CustomWritablePath` 前缀在写入磁盘时会自动去掉。

### JS 写入 → C++ 读取

JS 层写入的文件，C++ 层默认无法访问。需要在 JS 层写入完成后，调用 `syncCreateFile` 通知 C++ 层，之后 C++ 层才能正常访问。

**JS 侧写入并同步** ：
    
    
    const fs = wx.getFileSystemManager();
    const wxPath = `${wx.env.USER_DATA_PATH}/config/settings.json`;
    
    // 1. JS 层写入文件
    fs.writeFileSync(wxPath, JSON.stringify({ volume: 0.8, language: 'zh' }), 'utf-8');
    
    // 2. 同步新增文件给 C++ 层（关键步骤）
    GameGlobal.WXGameKit.gameInstance.IDBFS.syncCreateFile('/CustomWritablePath/config/settings.json');
    

**C++ 侧读取** ：
    
    
    // 同步完成后，C++ 层即可正常访问
    FILE* fp = fopen("/CustomWritablePath/config/settings.json", "r");
    if (fp) {
        char buffer[1024];
        size_t readSize = fread(buffer, 1, sizeof(buffer), fp);
        buffer[readSize] = '\0';
        printf("配置内容: %s\n", buffer);
        fclose(fp);
    }
    

### syncCreateFile 接口说明
    
    
    GameGlobal.WXGameKit.gameInstance.IDBFS.syncCreateFile(path)
    

参数 | 类型 | 说明  
---|---|---  
`path` | string | 文件的虚拟路径，如 `/CustomWritablePath/config/settings.json`  
  
**作用** ：在 JS 层创建新文件后，通知 C++ 层该文件的存在，使 C++ 层能够正常访问。

**⚠ 注意事项**

  * 仅当 **JS 层创建新文件** 后需要 C++ 层访问时，才需要调用 `syncCreateFile`
  * C++ 层自身写入的文件无需调用此接口
  * **禁止同时通过 JS 和 C++ 写同一个文件** ，两层各自维护独立的写入状态，并发写入会导致文件内容紊乱

## 存储限制

限制项 | 数值  
---|---  
用户数据目录上限 | 200 MB  
单个文件上限 | 200 MB  
  
> 注意：超出限制时会触发错误，请做好容量管理，业务可以按需扩容磁盘空间：https://developers.weixin.qq.com/minigame/dev/guide/performance/diskspace.html

**文件大小最佳实践** ：

  * **推荐单个文件大小** ：1 ~ 2 MB，最大不超过 10 MB
  * **大文件处理** ：超过 10 MB 的文件建议拆分为多个 1 ~ 10 MB 的小文件，以提升读写效率和稳定性
  * **零散小文件合并** ：大量零散小文件（如配置文件、脚本等）建议合并存储，可采用 TAR 包（参考上文 TAR 包加载）或自定义打包格式，减少文件系统调用开销

## 错误码

错误码 | 说明  
---|---  
0 | 成功  
-1 | 参数无效或文件/目录不存在  
-44 | 目录不存在（RmdirRecursive）  
> 0 | LoadPackage 返回文件数量  
  
## 注意事项

  1. **路径前缀** ：只有以 `/CustomWritablePath` 开头的路径才会映射到微信文件系统
  2. **TAR 包只读** ：通过 `LoadPackage` 加载的文件为只读，无法修改或删除
  3. **异步操作** ：`Unzip` 为异步操作，需要通过回调获取结果
  4. **并发访问** ：避免多处同时读写同一文件

## 下一步

  * 了解 [TCP/UDP Socket 适配](<SocketAdapter.md>)
  * 了解 [WebSocket 适配](<WebSocketAdapter.md>)
  * 了解 [HTTP 客户端适配](<HttpAdapter.md>)
  * 了解 [键盘适配](<KeyboardAdapter.md>)

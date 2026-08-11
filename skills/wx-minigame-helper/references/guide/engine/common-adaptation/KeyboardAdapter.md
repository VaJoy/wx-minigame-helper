---
title: "键盘适配"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/KeyboardAdapter.html
---

# 键盘适配

本文档介绍如何在 Emscripten 项目中集成微信小游戏虚拟键盘模块。

## 概述

本模块提供完整的虚拟键盘实现，将 C++ 的键盘操作映射到微信小游戏的 `wx.showKeyboard`、`wx.hideKeyboard`、`wx.updateKeyboard` 等 API。

业务只需要：

  1. 创建键盘配置对象
  2. 配置键盘参数（默认值、确认按钮类型等）
  3. 设置输入/确认/关闭回调
  4. 显示键盘

## 功能特性

功能 | 说明  
---|---  
单行输入 | 标准文本输入  
多行输入 | 支持换行的多行文本输入  
确认按钮类型 | 发送、搜索、下一个、前往、完成  
键盘类型 | 文本键盘、数字键盘（客户端8.0.57+）  
输入实时回调 | 用户输入时实时通知  
确认回调 | 用户点击确认按钮时通知  
关闭回调 | 键盘关闭时通知  
确认保持 | 点击确认后保持键盘打开（连续输入场景）  
动态更新 | 支持在键盘显示时更新输入内容  
  
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
            -s EXPORTED_FUNCTIONS='[\
                \"_KeyboardOnInput\", \
                \"_KeyboardOnConfirm\", \
                \"_KeyboardOnComplete\", \
                \"_main\", \"_free\", \"_malloc\"]' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxkeyboard_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

## API 参考

### 头文件
    
    
    #include "keyboard/wx_keyboard_interface.h"
    

### 命名空间

所有键盘相关接口都在 `WXGameSDK` 命名空间下。

### 枚举类型

#### KeyboardConfirmType - 确认按钮类型

值 | 说明  
---|---  
`Send` | 发送  
`Search` | 搜索  
`Next` | 下一个  
`Go` | 前往  
`Done` | 完成（默认）  
  
#### KeyboardType - 键盘类型

值 | 说明  
---|---  
`Text` | 文本键盘（默认）  
`Number` | 数字键盘（客户端8.0.57+）  
  
#### KeyboardEventType - 键盘事件类型

值 | 说明  
---|---  
`InputChanged` | 键盘输入内容变化  
`Confirmed` | 键盘确认（用户点击完成/发送等）  
`Closed` | 键盘关闭（点击输入框外区域收起键盘）  
  
### 核心接口

#### 1\. 创建与释放键盘
    
    
    // 创建键盘配置对象
    // keyboard_id: 输出参数，返回键盘ID
    // 返回: KeyboardConfigInterface* 键盘配置对象，nullptr表示创建失败
    WXGameSDK::KeyboardConfigInterface* CreateKeyboard(int* keyboard_id);
    
    // 释放键盘配置对象
    // 返回: 0 成功，-1 失败
    int ReleaseKeyboard(int keyboard_id);
    

#### 2\. 显示与隐藏键盘
    
    
    // 显示微信键盘
    // 返回: 0 成功，-1 失败
    int ShowKeyboard(int keyboard_id);
    
    // 隐藏微信键盘（会触发对应键盘的complete回调）
    // 返回: 0 成功，-1 失败
    int HideKeyboard();
    

#### 3\. 键盘内容操作
    
    
    // 更新键盘输入内容（仅在键盘显示时有效）
    // 返回: 0 成功，-1 失败
    int UpdateKeyboardValue(int keyboard_id, const std::string& text);
    
    // 获取当前键盘输入内容
    std::string GetKeyboardValue(int keyboard_id);
    

### 配置接口 (KeyboardConfigInterface)

方法 | 说明  
---|---  
`SetConfirmType(type)` | 设置确认按钮类型  
`SetDefaultValue(text)` | 设置默认输入内容  
`SetMaxLength(length)` | 设置最大输入长度（默认255）  
`SetMultiple(enable)` | 设置是否多行输入  
`SetConfirmHold(enable)` | 设置确认后是否保持键盘打开  
`SetKeyboardType(type)` | 设置键盘类型（文本/数字）  
`SetInputCallback(callback, user_data)` | 设置输入变化回调  
`SetConfirmCallback(callback, user_data)` | 设置确认回调  
`SetCompleteCallback(callback, user_data)` | 设置键盘关闭回调  
  
### 回调函数签名
    
    
    // 输入变化/确认/关闭回调
    std::function<void(const std::string& text, void* user_data)>
    

## 使用示例

### 基本使用
    
    
    #include "keyboard/wx_keyboard_interface.h"
    #include <cstdio>
    
    using namespace WXGameSDK;
    
    // 创建键盘配置
    int keyboard_id = -1;
    KeyboardConfigInterface* keyboard = CreateKeyboard(&keyboard_id);
    if (!keyboard) {
        printf("创建键盘失败\n");
        return;
    }
    
    // 配置键盘
    keyboard->SetDefaultValue("请输入内容");
    keyboard->SetMaxLength(100);
    keyboard->SetConfirmType(KeyboardConfirmType::Done);
    
    // 设置回调
    keyboard->SetInputCallback([](const std::string& text, void* user_data) {
        printf("输入变化: %s\n", text.c_str());
    }, nullptr);
    
    keyboard->SetConfirmCallback([](const std::string& text, void* user_data) {
        printf("用户确认: %s\n", text.c_str());
    }, nullptr);
    
    keyboard->SetCompleteCallback([](const std::string& text, void* user_data) {
        printf("键盘关闭: %s\n", text.c_str());
    }, nullptr);
    
    // 显示键盘
    int ret = ShowKeyboard(keyboard_id);
    if (ret == 0) {
        printf("键盘显示成功\n");
    } else {
        printf("键盘显示失败\n");
    }
    
    // ... 使用完毕后释放
    ReleaseKeyboard(keyboard_id);
    

### 多行输入
    
    
    int keyboard_id = -1;
    KeyboardConfigInterface* keyboard = CreateKeyboard(&keyboard_id);
    
    // 启用多行输入
    keyboard->SetMultiple(true);
    keyboard->SetDefaultValue("第一行\n第二行");
    keyboard->SetMaxLength(500);
    keyboard->SetConfirmType(KeyboardConfirmType::Send);
    
    // 设置回调...
    
    ShowKeyboard(keyboard_id);
    

### 搜索模式（确认后保持键盘）
    
    
    int keyboard_id = -1;
    KeyboardConfigInterface* keyboard = CreateKeyboard(&keyboard_id);
    
    // 确认后保持键盘打开（适用于连续搜索场景）
    keyboard->SetConfirmHold(true);
    keyboard->SetConfirmType(KeyboardConfirmType::Search);
    
    keyboard->SetConfirmCallback([](const std::string& text, void* user_data) {
        printf("执行搜索: %s\n", text.c_str());
        // 搜索完成后键盘仍然打开，用户可继续输入
    }, nullptr);
    
    ShowKeyboard(keyboard_id);
    

### 动态更新键盘内容
    
    
    // 在键盘显示时更新内容
    UpdateKeyboardValue(keyboard_id, "新的内容");
    
    // 获取当前输入内容
    std::string current = GetKeyboardValue(keyboard_id);
    printf("当前输入: %s\n", current.c_str());
    

## UE 引擎集成

UE 引擎通过实现 `IPlatformTextField` 接口来适配微信小游戏键盘。完整的适配示例请参考：

  * [`HTML5PlatformTextField.h`](<https://git.weixin.qq.com/wechat-minigame/minigame-transform-docs/blob/master/Demo/UE/keyboard/HTML5PlatformTextField.h>) \- 头文件
  * [`HTML5PlatformTextField.cpp`](<https://git.weixin.qq.com/wechat-minigame/minigame-transform-docs/blob/master/Demo/UE/keyboard/HTML5PlatformTextField.cpp>) \- 实现文件

### 集成步骤

#### 1\. 添加头文件

将 SDK 头文件添加到 UE 项目的 Include 路径：
    
    
    Source/ThirdParty/wxgamesdk/include/keyboard/wx_keyboard_interface.h
    

#### 2\. 添加静态库

将编译产物 `libwxgamesdk.a` 添加到链接选项：
    
    
    Source/ThirdParty/wxgamesdk/lib/libwxgamesdk.a
    

#### 3\. 添加 JS 库

确保 `libwxkeyboard_open.jslib` 被包含在 Emscripten 链接选项中：
    
    
    --js-library path/to/libwxkeyboard_open.jslib
    

#### 4\. 导出函数

确保以下函数被导出：
    
    
    -s EXPORTED_FUNCTIONS='["_KeyboardOnInput", "_KeyboardOnConfirm", "_KeyboardOnComplete", ...]'
    

### UE 适配原理

UE 引擎的文本输入框（如 `SEditableText`）在需要显示虚拟键盘时，会调用平台适配层的 `IPlatformTextField` 接口。适配层需要：

  1. **实现`ShowVirtualKeyboard` 方法**：

     * 当 `bShow=true` 时，创建键盘配置并显示键盘
     * 当 `bShow=false` 时，隐藏键盘
  2. **处理三种回调事件** ：

     * `InputCallback`：实时更新 UE 控件文本（`TextEntryUpdated`）
     * `ConfirmCallback`：确认输入（`TextEntryAccepted`）
     * `CompleteCallback`：取消/关闭输入（`TextEntryCanceled`）
  3. **键盘类型映射** ：

     * 将 UE 的 `EKeyboardType` 映射为微信的 `KeyboardConfirmType`

### UE 适配关键代码说明
    
    
    void FHTML5PlatformTextField::ShowVirtualKeyboard(bool bShow, int32 UserIndex,
        TSharedPtr<IVirtualKeyboardEntry> TextEntryWidget) {
        
        if (bShow && TextEntryWidget.IsValid()) {
            // 保存当前活跃的控件引用
            ActiveTextWidget = TextEntryWidget;
    
            // 创建键盘配置
            KeyboardConfigInterface* Keyboard = WXGameSDK::CreateKeyboard(&KeyboardId);
            
            // 从 UE 控件获取默认文本
            FString DefaultText = TextEntryWidget->GetText().ToString();
            Keyboard->SetDefaultValue(TCHAR_TO_UTF8(*DefaultText));
            
            // 根据控件属性配置键盘
            Keyboard->SetMultiple(TextEntryWidget->IsMultilineEntry());
            Keyboard->SetConfirmType(GetWxConfirmType(TextEntryWidget->GetVirtualKeyboardType()));
    
            // 设置回调，将微信键盘事件转发给 UE 控件
            Keyboard->SetInputCallback(<a href="const std::string& Text, void* UserData" target="_blank">this</a> {
                HandleKeyboardInput(Text, UserData);
            }, this);
            
            // ... 其他回调设置
    
            // 显示键盘
            WXGameSDK::ShowKeyboard(KeyboardId);
        } else {
            // 隐藏键盘
            WXGameSDK::HideKeyboard();
        }
    }
    

## 注意事项

  1. **生命周期管理** ：创建的键盘配置对象需要在不使用时调用 `ReleaseKeyboard` 释放
  2. **回调线程** ：所有回调都在主线程（JS 线程）中执行
  3. **同一时间只能显示一个键盘** ：如果调用 `ShowKeyboard` 时已有键盘显示，会先关闭旧键盘
  4. **回调中禁止操作** ：在回调函数中不能调用 `ShowKeyboard`、`HideKeyboard`、`ReleaseKeyboard`
  5. **最大实例数** ：最多同时存在 5 个键盘配置实例

## 错误处理

返回值 | 说明  
---|---  
0 | 成功  
-1 | 通用错误 / 操作失败  
nullptr | 创建失败（CreateKeyboard 返回）  
  
## 下一步

  * 了解 [HTTP 客户端适配](<HttpAdapter.md>)
  * 了解 [文件系统适配](<FileSystemAdapter.md>)
  * 了解 [WebSocket 适配](<WebSocketAdapter.md>)
  * 了解 [微信开放接口](<WXOpenAPI.md>)

---
title: "WebSocket 适配"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/WebSocketAdapter.html
---

# WebSocket 适配

本文档介绍如何在 Emscripten 项目中集成微信小游戏 WebSocket 通信模块。

## 概述

本模块提供完整的 WebSocket 客户端实现，支持 WS 和 WSS 协议，适用于实时通信场景。

## 功能特性

功能 | 说明  
---|---  
协议支持 | WS (ws://) 和 WSS (wss://)  
消息类型 | 文本消息和二进制数据  
自定义头 | 支持设置 HTTP 请求头  
子协议 | 支持 Sec-WebSocket-Protocol  
压缩 | 支持 permessage-deflate  
并发连接 | 最多 5 个并发连接  
  
## ⚠ 重要提示

**微信小游戏环境限制：**

  * ✅ **真机必须使用 WSS 协议** （wss://）- 加密连接
  * ❌ **不支持 WS 协议** （ws://）- 非加密连接仅微信开发者工具支持
  * ✅ **需要在微信公众平台配置域名白名单** （生产环境）

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
                \"_WebSocketOnSuccess\", \
                \"_WebSocketOnError\", \
                \"_WebSocketOnClose\", \
                \"_WebSocketOnStrData\", \
                \"_WebSocketOnBinData\", \
                \"_main\", \"_free\", \"_malloc\"]' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxwebsocket_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

## API 参考

### 头文件
    
    
    #include "websocket/wx_websocket_interface.h"
    

### 客户端接口
    
    
    namespace WXSocket {
        
        // WebSocket 客户端接口类
        class WebSocketClientInterface {
        public:
            // 配置连接
            virtual int SetConnectUrl(const std::string& url) = 0;
            virtual int SetHeader(const std::string& key, const std::string& value) = 0;
            virtual int SetTimeout(int timeout) = 0;
            
            // 设置回调
            virtual int SetMessageReceiveCallback(
                void (*callback)(const void* message, int len, void* user_data),
                void* user_data) = 0;
            virtual int SetSuccessCallback(
                void (*callback)(const std::unordered_map<std::string, std::string>& header, void* user_data),
                void* user_data) = 0;
            virtual int SetFailCallback(
                void (*callback)(const std::string& errmsg, void* user_data),
                void* user_data) = 0;
            virtual int SetCloseCallback(
                void (*callback)(int code, const std::string& reason, void* user_data),
                void* user_data) = 0;
            
            // 高级选项
            virtual int SetProtocols(const std::vector<std::string>& protocols) = 0;
            virtual int SetEnableTcpNoDelay(bool enable) = 0;
            virtual int SetPerMessageDeflate(bool enable) = 0;
            virtual int SetEnableForceCellularNetwork(bool enable) = 0;
        };
        
        // 全局函数
        WebSocketClientInterface* CreateWebSocketClient(int* client_id);
        int ConnectWebSocket(int client_id);
        int SendWebSocketMessage(int client_id, const void* message, int len);
        int CloseWebSocketClient(int client_id, int code = 1000, const std::string& reason = "");
    }
    

## 使用示例

### 基本使用
    
    
    #include <emscripten.h>
    #include "websocket/wx_websocket_interface.h"
    #include <iostream>
    
    using namespace WXSocket;
    
    // 全局变量
    static int g_client_id = -1;
    static WebSocketClientInterface* g_ws_client = nullptr;
    
    // 消息接收回调
    void OnMessageReceived(const void* message, int len, void* user_data) {
        std::string msg((char*)message, len);
        std::cout << "[WebSocket] 收到消息: " << msg << std::endl;
    }
    
    // 连接成功回调
    void OnConnectSuccess(const std::unordered_map<std::string, std::string>& header, 
                          void* user_data) {
        std::cout << "[WebSocket] 连接成功!" << std::endl;
        
        // 发送消息
        const char* msg = "Hello WebSocket!";
        SendWebSocketMessage(g_client_id, msg, strlen(msg));
    }
    
    // 连接失败回调
    void OnConnectFail(const std::string& errmsg, void* user_data) {
        std::cout << "[WebSocket] 连接失败: " << errmsg << std::endl;
    }
    
    // 连接关闭回调
    void OnConnectionClose(int code, const std::string& reason, void* user_data) {
        std::cout << "[WebSocket] 连接关闭: " << code << " - " << reason << std::endl;
    }
    
    int main() {
        std::cout << "启动 WebSocket 客户端..." << std::endl;
        
        // 创建客户端
        g_ws_client = CreateWebSocketClient(&g_client_id);
        if (!g_ws_client) {
            std::cout << "创建 WebSocket 客户端失败" << std::endl;
            return -1;
        }
        
        // 配置连接
        g_ws_client->SetConnectUrl("wss://echo.websocket.org/");
        g_ws_client->SetTimeout(10000);  // 10秒超时
        
        // 设置回调
        g_ws_client->SetMessageReceiveCallback(OnMessageReceived, nullptr);
        g_ws_client->SetSuccessCallback(OnConnectSuccess, nullptr);
        g_ws_client->SetFailCallback(OnConnectFail, nullptr);
        g_ws_client->SetCloseCallback(OnConnectionClose, nullptr);
        
        // 连接
        ConnectWebSocket(g_client_id);
        
        // 保持运行
        emscripten_set_main_loop([](){}, 0, 1);
        
        return 0;
    }
    

### 高级配置
    
    
    #include "websocket/wx_websocket_interface.h"
    
    void CreateAdvancedWebSocket() {
        int client_id;
        auto* client = WXSocket::CreateWebSocketClient(&client_id);
        
        // 设置连接地址
        client->SetConnectUrl("wss://game.example.com/ws");
        
        // 设置超时（毫秒）
        client->SetTimeout(15000);
        
        // 设置 HTTP 请求头
        client->SetHeader("User-Agent", "MyGame/1.0");
        client->SetHeader("Authorization", "Bearer your-token-here");
        client->SetHeader("X-Game-Version", "1.2.3");
        
        // 设置子协议
        std::vector<std::string> protocols = {"game-protocol", "chat"};
        client->SetProtocols(protocols);
        
        // 启用 TCP NoDelay（禁用 Nagle 算法，减少延迟）
        client->SetEnableTcpNoDelay(true);
        
        // 启用消息压缩
        client->SetPerMessageDeflate(true);
        
        // 设置回调
        client->SetMessageReceiveCallback([](const void* msg, int len, void* data) {
            std::cout << "收到: " << std::string((char*)msg, len) << std::endl;
        }, nullptr);
        
        client->SetSuccessCallback([](const auto& header, void* data) {
            std::cout << "连接成功" << std::endl;
        }, nullptr);
        
        client->SetFailCallback([](const std::string& err, void* data) {
            std::cout << "连接失败: " << err << std::endl;
        }, nullptr);
        
        client->SetCloseCallback([](int code, const std::string& reason, void* data) {
            std::cout << "连接关闭: " << code << std::endl;
        }, nullptr);
        
        // 连接
        WXSocket::ConnectWebSocket(client_id);
    }
    

### 封装类示例
    
    
    #include "websocket/wx_websocket_interface.h"
    #include <functional>
    
    class GameWebSocket {
    public:
        using MessageHandler = std::function<void(const std::string&)>;
        using ErrorHandler = std::function<void(const std::string&)>;
        
        bool Connect(const std::string& url) {
            client_ = WXSocket::CreateWebSocketClient(&client_id_);
            if (!client_) return false;
            
            client_->SetConnectUrl(url);
            client_->SetTimeout(10000);
            client_->SetEnableTcpNoDelay(true);
            
            // 使用 this 指针传递
            client_->SetMessageReceiveCallback(
                [](const void* msg, int len, void* user_data) {
                    auto* self = static_cast<GameWebSocket*>(user_data);
                    if (self->on_message_) {
                        self->on_message_(std::string((char*)msg, len));
                    }
                }, this);
            
            client_->SetSuccessCallback(
                [](const auto& header, void* user_data) {
                    auto* self = static_cast<GameWebSocket*>(user_data);
                    self->connected_ = true;
                    std::cout << "WebSocket 已连接" << std::endl;
                }, this);
            
            client_->SetFailCallback(
                [](const std::string& err, void* user_data) {
                    auto* self = static_cast<GameWebSocket*>(user_data);
                    self->connected_ = false;
                    if (self->on_error_) {
                        self->on_error_(err);
                    }
                }, this);
            
            client_->SetCloseCallback(
                [](int code, const std::string& reason, void* user_data) {
                    auto* self = static_cast<GameWebSocket*>(user_data);
                    self->connected_ = false;
                }, this);
            
            WXSocket::ConnectWebSocket(client_id_);
            return true;
        }
        
        void Send(const std::string& message) {
            if (connected_) {
                WXSocket::SendWebSocketMessage(client_id_, message.c_str(), message.length());
            }
        }
        
        void SendBinary(const std::vector<uint8_t>& data) {
            if (connected_) {
                WXSocket::SendWebSocketMessage(client_id_, data.data(), data.size());
            }
        }
        
        void Close(int code = 1000, const std::string& reason = "Normal closure") {
            if (client_id_ >= 0) {
                WXSocket::CloseWebSocketClient(client_id_, code, reason);
                connected_ = false;
            }
        }
        
        void OnMessage(MessageHandler handler) { on_message_ = handler; }
        void OnError(ErrorHandler handler) { on_error_ = handler; }
        
        bool IsConnected() const { return connected_; }
        
    private:
        int client_id_ = -1;
        WXSocket::WebSocketClientInterface* client_ = nullptr;
        bool connected_ = false;
        MessageHandler on_message_;
        ErrorHandler on_error_;
    };
    
    // 使用示例
    void UseGameWebSocket() {
        GameWebSocket ws;
        
        ws.OnMessage([](const std::string& msg) {
            std::cout << "游戏消息: " << msg << std::endl;
        });
        
        ws.OnError([](const std::string& err) {
            std::cout << "错误: " << err << std::endl;
        });
        
        ws.Connect("wss://game.example.com/ws");
    }
    

## 关闭码说明

关闭码 | 含义  
---|---  
1000 | 正常关闭  
1001 | 端点离开  
1002 | 协议错误  
1003 | 不支持的数据类型  
1006 | 异常关闭（未收到关闭帧）  
1007 | 数据格式错误  
1008 | 策略违规  
1009 | 消息过大  
1010 | 缺少扩展  
1011 | 服务器内部错误  
  
## 常见问题

### Q: 连接失败，提示"未完成的操作"？

A: 检查是否使用了 WSS 协议，微信小游戏真机只支持 WSS，开发者工具支持采用WS进行调试。

### Q: 如何在真机测试？

A: 确保服务器有有效的 SSL 证书，并在微信公众平台配置域名白名单。

### Q: 最多支持多少个连接？

A: 最多 5 个并发 WebSocket 连接。

## 下一步

  * 了解 [HTTP 客户端适配](<HttpAdapter.md>)
  * 了解 [TCP/UDP Socket 适配](<SocketAdapter.md>)
  * 了解 [微信开放接口](<WXOpenAPI.md>)

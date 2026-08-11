---
title: "HTTP 客户端适配"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/HttpAdapter.html
---

# HTTP 客户端适配

本文档介绍如何在 Emscripten 项目中集成微信小游戏 HTTP 客户端模块，适用于Cocos2dx、自研引擎项目。

## 概述

本模块提供完整的 HTTP 客户端实现，将 C++ 的 HTTP 请求映射到微信小游戏的 `wx.request`、`wx.downloadFile`、`wx.uploadFile` API。

业务只需要：

  1. 创建 HTTP 客户端对象
  2. 配置请求参数
  3. 设置成功/失败回调
  4. 发送请求

## 功能特性

功能 | 说明  
---|---  
HTTP 请求 | GET, POST, PUT, DELETE, HEAD, OPTIONS 等方法  
文件下载 | 支持下载文件到本地路径  
文件上传 | 支持上传本地文件到服务器  
HTTPS | 支持安全连接  
请求头 | 自定义 HTTP 请求头  
请求体 | 支持文本和二进制数据  
响应处理 | 支持文本和二进制响应  
超时控制 | 可配置请求超时时间  
高级特性 | HTTP/2、QUIC、HttpDNS、缓存等  
  
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
                \"_HttpRequestOnCookie\", \
                \"_HttpRequestOnSuccessStrData\", \
                \"_HttpRequestOnSuccessBinData\", \
                \"_HttpOnError\", \
                \"_main\", \"_free\", \"_malloc\"]' \
            --js-library ${WXGAMESDK_DIR}/jslib/libwxhttp_open.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

## API 参考

### 头文件
    
    
    #include "http/wx_http_interface.h"
    

### 命名空间

所有 HTTP 相关接口都在 `WXSocket` 命名空间下。

### 核心接口

#### 1\. HTTP 请求客户端
    
    
    // 创建 HTTP 客户端
    WXSocket::HttpClientInterface* CreateHttpClient(int* client_id);
    
    // 发送请求
    int SendHttpRequest(int client_id);
    
    // 中止请求
    int AbortHttpRequest(int client_id);
    

#### 2\. 文件下载客户端
    
    
    // 创建下载客户端
    WXSocket::HttpDownloadClientInterface* CreateHttpDownloadClient(int* client_id);
    
    // 发送下载请求
    int SendHttpDownloadRequest(int client_id);
    
    // 中止下载请求
    int AbortHttpDownloadRequest(int client_id);
    

#### 3\. 文件上传客户端
    
    
    // 创建上传客户端
    WXSocket::HttpUploadClientInterface* CreateHttpUploadClient(int* client_id);
    
    // 发送上传请求
    int SendHttpUploadRequest(int client_id);
    
    // 中止上传请求
    int AbortHttpUploadRequest(int client_id);
    

### 响应数据结构
    
    
    namespace WXSocket {
    
    // HTTP 响应信息
    struct Response {
        std::string version;               // HTTP 版本
        int statusCode;                    // 状态码
        std::string reason;                // 状态描述
        Headers headers;                   // 响应头
        std::vector<std::string> cookies;  // Cookies
        bool useHttpDns;                   // 是否使用 HttpDNS
    };
    
    // 错误信息
    struct Error {
        int errorCode;        // 错误码
        std::string errorMsg; // 错误信息
        bool useHttpDns;      // 是否使用 HttpDNS
    };
    
    // 进度信息
    struct HttpRequestProgress {
        int progress;           // 进度百分比
        int totalBytesExpected; // 预期总字节数
        int totalBytes;         // 已传输字节数
    };
    
    }
    

## 使用示例

### 基本 HTTP 请求
    
    
    #include "http/wx_http_interface.h"
    #include <cstdio>
    
    // 定义测试状态结构
    struct HttpTest {
        std::string method;
        bool http_request_success = false;
        bool http_request_complete = false;
        bool http_request_fail = false;
        int client_id = 0;
        
        bool IsComplete() { return http_request_complete; }
        void CheckSuccess() { assert(http_request_success); }
    };
    
    // 成功回调
    void OnSuccess(const WXSocket::Response& response, const void* data, size_t size, void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("HTTP 请求成功, id:%d, method:%s, data:%s\n", 
               test->client_id, test->method.c_str(), (const char*)data);
        test->http_request_success = true;
    }
    
    // 失败回调
    void OnFail(const WXSocket::Error& error, void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("HTTP 请求失败, id:%d, method:%s, error:%d, msg:%s\n", 
               test->client_id, test->method.c_str(), error.errorCode, error.errorMsg.c_str());
        test->http_request_fail = true;
    }
    
    // 完成回调（无论成功或失败都会调用）
    void OnComplete(void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("HTTP 请求完成, id:%d, method:%s\n", test->client_id, test->method.c_str());
        test->http_request_complete = true;
    }
    
    // 构造并发送 HTTP 请求
    WXSocket::HttpClientInterface* ConstructHttpRequest(
        HttpTest* test, 
        const std::string& url, 
        const std::string& method,
        const std::string& body) {
        
        int client_id = 0;
        WXSocket::HttpClientInterface* httpclient = WXSocket::CreateHttpClient(&client_id);
        if (httpclient == nullptr) {
            return nullptr;
        }
        
        // 配置请求参数
        httpclient->SetUrl(url);
        httpclient->SetMethod(method);
        httpclient->SetTimeout(2000);  // 2秒超时
        httpclient->SetResponseType(WXSocket::HttpClientInterface::kResponseTypeString);
        httpclient->SetBody(WXSocket::HttpClientInterface::kDataTypeString, body.c_str(), body.size());
        httpclient->SetHeader("Content-Type", "application/json");
        
        // 保存客户端 ID
        test->client_id = client_id;
        test->method = method;
        
        // 设置回调函数
        httpclient->SetSuccessCallback(OnSuccess, test);
        httpclient->SetFailCallback(OnFail, test);
        httpclient->SetCompleteCallback(OnComplete, test);
        
        return httpclient;
    }
    
    // 使用示例
    void TestHttpRequest() {
        static HttpTest httptest_get;
        static HttpTest httptest_post;
        
        // GET 请求
        auto* client = ConstructHttpRequest(&httptest_get, "https://api.example.com/users", "GET", "");
        if (client) {
            int ret = WXSocket::SendHttpRequest(httptest_get.client_id);
            assert(ret == 0);
        }
        
        // POST 请求
        std::string post_data = R"({"id": 3, "name": "tom", "email": "tom@example.com"})";
        client = ConstructHttpRequest(&httptest_post, "https://api.example.com/users", "POST", post_data);
        if (client) {
            int ret = WXSocket::SendHttpRequest(httptest_post.client_id);
            assert(ret == 0);
        }
    }
    

### 文件下载
    
    
    #include "http/wx_http_interface.h"
    #include <cstdio>
    
    struct HttpTest {
        int client_id = 0;
        bool http_request_success = false;
        bool http_request_complete = false;
    };
    
    // 下载成功回调
    void OnDownloadSuccess(const WXSocket::HttpDownloadClientInterface::HttpDownloadResponse& response, void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("下载成功, id:%d, status_code:%d, tempFilePath:%s, filePath:%s\n",
               test->client_id, response.statusCode, 
               response.tempFilePath.c_str(), response.filePath.c_str());
        test->http_request_success = true;
        
        // 下载完成后可以读取文件
        FILE* fp = fopen(response.filePath.c_str(), "r");
        if (fp) {
            char buffer[1024];
            size_t readsize = fread(buffer, 1, sizeof(buffer), fp);
            printf("读取内容: %.*s\n", (int)readsize, buffer);
            fclose(fp);
        }
    }
    
    void OnDownloadFail(const WXSocket::Error& error, void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("下载失败, id:%d, error:%d, msg:%s\n", 
               test->client_id, error.errorCode, error.errorMsg.c_str());
    }
    
    void OnDownloadComplete(void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        test->http_request_complete = true;
        printf("下载完成, id:%d\n", test->client_id);
    }
    
    // 构造下载请求
    WXSocket::HttpDownloadClientInterface* ConstructHttpDownloadRequest(
        HttpTest* test, 
        const std::string& url,
        const std::string& filePath) {
        
        int client_id = 0;
        WXSocket::HttpDownloadClientInterface* httpclient = WXSocket::CreateHttpDownloadClient(&client_id);
        if (httpclient == nullptr) {
            return nullptr;
        }
        
        httpclient->SetUrl(url);
        httpclient->SetFilePath(filePath);  // 本地保存路径
        httpclient->SetTimeout(60000);       // 60秒超时
        
        test->client_id = client_id;
        httpclient->SetSuccessCallback(OnDownloadSuccess, test);
        httpclient->SetFailCallback(OnDownloadFail, test);
        httpclient->SetCompleteCallback(OnDownloadComplete, test);
        
        return httpclient;
    }
    
    // 使用示例
    void TestDownload() {
        static HttpTest httptest_download;
        
        // 下载文件到本地路径（必须以 /CustomWritablePath 开头）
        const std::string url = "https://example.com/config/settings.json";
        const std::string localPath = "/CustomWritablePath/Library/Application_Support/1.0.0/remoteSettings.json";
        
        auto* client = ConstructHttpDownloadRequest(&httptest_download, url, localPath);
        if (client) {
            int ret = WXSocket::SendHttpDownloadRequest(httptest_download.client_id);
            assert(ret == 0);
            printf("下载请求已发送\n");
        }
    }
    

### 文件上传
    
    
    #include "http/wx_http_interface.h"
    #include <cstdio>
    
    struct HttpTest {
        int client_id = 0;
        bool http_request_success = false;
    };
    
    // 上传成功回调
    void OnUploadSuccess(const WXSocket::HttpUploadClientInterface::HttpUploadResponse& response, 
                         const char* data, void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("上传成功, id:%d, status_code:%d, response:%s\n", 
               test->client_id, response.statusCode, data ? data : "");
        test->http_request_success = true;
    }
    
    void OnUploadFail(const WXSocket::Error& error, void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("上传失败, id:%d, error:%d, msg:%s\n", 
               test->client_id, error.errorCode, error.errorMsg.c_str());
    }
    
    void OnUploadComplete(void* user_data) {
        HttpTest* test = (HttpTest*)user_data;
        printf("上传完成, id:%d\n", test->client_id);
    }
    
    // 构造上传请求
    WXSocket::HttpUploadClientInterface* ConstructHttpUploadRequest(
        HttpTest* test, 
        const std::string& url,
        const std::string& filePath) {
        
        int client_id = 0;
        WXSocket::HttpUploadClientInterface* httpclient = WXSocket::CreateHttpUploadClient(&client_id);
        if (httpclient == nullptr) {
            return nullptr;
        }
        
        httpclient->SetUrl(url);
        httpclient->SetFilePath(filePath);  // 本地文件路径
        httpclient->SetFileName("file");     // 服务端接收的字段名
        httpclient->SetTimeout(30000);
        
        test->client_id = client_id;
        httpclient->SetSuccessCallback(OnUploadSuccess, test);
        httpclient->SetFailCallback(OnUploadFail, test);
        httpclient->SetCompleteCallback(OnUploadComplete, test);
        
        return httpclient;
    }
    
    // 使用示例
    void TestUpload() {
        static HttpTest httptest_upload;
        
        // 先创建一个本地文件
        FILE* fp = fopen("/CustomWritablePath/upload_test.txt", "w");
        fprintf(fp, "hello world");
        fclose(fp);
        
        // 上传文件
        auto* client = ConstructHttpUploadRequest(
            &httptest_upload, 
            "https://api.example.com/upload",
            "/CustomWritablePath/upload_test.txt");
        
        if (client) {
            int ret = WXSocket::SendHttpUploadRequest(httptest_upload.client_id);
            assert(ret == 0);
        }
    }
    

### 主循环中处理请求完成
    
    
    #include <emscripten.h>
    
    static HttpTest httptest_download;
    
    void main_loop() {
        // 检查下载是否完成
        if (httptest_download.http_request_complete) {
            if (httptest_download.http_request_success) {
                printf("下载成功完成\n");
            }
            
            // 中止并释放客户端资源
            if (httptest_download.client_id != 0) {
                int ret = WXSocket::AbortHttpDownloadRequest(httptest_download.client_id);
                assert(ret == 0);
                httptest_download.client_id = 0;
            }
        }
    }
    
    int main() {
        // 发起下载请求
        auto* client = ConstructHttpDownloadRequest(
            &httptest_download,
            "https://example.com/config.json",
            "/CustomWritablePath/config.json");
        
        if (client) {
            WXSocket::SendHttpDownloadRequest(httptest_download.client_id);
        }
        
        // 启动主循环
        emscripten_set_main_loop(main_loop, 0, 0);
        return 0;
    }
    

## HttpClientInterface 详细配置

### 必选配置

方法 | 说明  
---|---  
`SetUrl(url)` | 设置请求 URL  
`SetMethod(method)` | 设置 HTTP 方法（GET/POST/PUT/DELETE 等）  
`SetSuccessCallback(callback, user_data)` | 设置成功回调  
`SetFailCallback(callback, user_data)` | 设置失败回调  
  
### 常用配置

方法 | 说明  
---|---  
`SetTimeout(ms)` | 设置超时时间（毫秒），默认 60000  
`SetHeader(key, value)` | 设置请求头  
`SetBody(type, data, size)` | 设置请求体（文本或二进制）  
`SetResponseType(type)` | 设置响应类型（kResponseTypeString / kResponseTypeBinary）  
`SetCompleteCallback(callback, user_data)` | 设置完成回调（可选）  
  
### 高级配置

方法 | 说明  
---|---  
`SetEnableHttp2(enable)` | 启用 HTTP/2 协议  
`SetEnableQuic(enable)` | 启用 QUIC/H3 协议  
`SetEnableHttpDNS(enable)` | 启用 HttpDNS  
`SetHttpDNSServiceId(serviceId)` | 设置 HttpDNS 服务商 ID  
`SetEnableCache(enable)` | 启用 HTTP 缓存  
`SetEnableChunked(enable)` | 启用分块传输  
`SetUseHighPerformanceMode(enable)` | 启用高性能模式  
`SetHeaderReceivedCallback(callback, user_data)` | 设置响应头接收回调  
`SetChunkReceivedCallback(callback, user_data)` | 设置分块数据接收回调  
  
## HttpDownloadClientInterface 配置

方法 | 说明  
---|---  
`SetUrl(url)` | 下载 URL  
`SetFilePath(path)` | 本地保存路径（必须以 `/CustomWritablePath` 开头）  
`SetHeader(key, value)` | 请求头  
`SetTimeout(ms)` | 超时时间  
`SetSuccessCallback` | 成功回调，返回 `HttpDownloadResponse`  
`SetFailCallback` | 失败回调  
`SetProgressUpdateCallback` | 进度回调（可选）  
  
## HttpUploadClientInterface 配置

方法 | 说明  
---|---  
`SetUrl(url)` | 上传服务器 URL  
`SetFilePath(path)` | 本地文件路径  
`SetFileName(name)` | 文件对应的 key（服务端用此 key 获取文件）  
`SetHeader(key, value)` | 请求头  
`SetFormData(data)` | 额外的表单数据  
`SetTimeout(ms)` | 超时时间  
`SetSuccessCallback` | 成功回调，返回 `HttpUploadResponse`  
`SetFailCallback` | 失败回调  
`SetProgressUpdateCallback` | 进度回调（可选）  
  
## 错误处理

### 错误码说明

错误码 | 说明  
---|---  
0 | 成功  
-1 | 通用错误 / 请求失败  
  
### HTTP 状态码

状态码 | 说明  
---|---  
200 | 成功  
201 | 创建成功  
400 | 请求错误  
401 | 未授权  
403 | 禁止访问  
404 | 未找到  
500 | 服务器内部错误  
  
## 注意事项

  1. **域名配置** ：生产环境需要在微信公众平台配置合法域名
  2. **本地路径** ：下载文件路径必须以 `/CustomWritablePath` 开头
  3. **资源释放** ：请求完成后，SDK 会自动清理资源；如需提前终止请求，调用对应的 `Abort` 方法
  4. **回调线程** ：回调函数在主线程中执行，避免在回调中执行耗时操作
  5. **并发限制** ：注意控制同时发起的请求数量

## 下一步

  * 了解 [文件系统适配](<FileSystemAdapter.md>)
  * 了解 [键盘适配](<KeyboardAdapter.md>)
  * 了解 [TCP/UDP Socket 适配](<SocketAdapter.md>)
  * 了解 [WebSocket 适配](<WebSocketAdapter.md>)
  * 了解 [微信开放接口](<WXOpenAPI.md>)
  * 了解 [UE HTTP 集成](<UEHttpIntegration.md>)

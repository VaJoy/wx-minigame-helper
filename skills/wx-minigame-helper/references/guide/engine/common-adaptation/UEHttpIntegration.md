---
title: "UE HTTP 集成指南"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/UEHttpIntegration.html
---

# UE HTTP 集成指南

本文档介绍 Unreal Engine (UE) HTTP 模块在微信小游戏环境下的适配方案、主要修改点以及使用示例。

## 概述

UE 引擎使用 `FHttpModule` 进行 HTTP 请求。在微信小游戏环境下，我们对 UE 的 HTTP 模块进行了适配，使其能够：

  1. 正确发起 HTTP 请求并处理响应
  2. 支持文件下载模式，将下载文件自动缓存到本地
  3. 支持请求取消功能
  4. 修复异步回调问题

## 源代码文件

本文档相关的源代码文件位于 `Demo/UE/http/` 目录下：

文件 | 说明 | 原始路径  
---|---|---  
[`HTML5HTTP.h`](<https://git.weixin.qq.com/wechat-minigame/minigame-transform-docs/blob/master/Demo/UE/http/HTML5HTTP.h>) | HTTP 请求类头文件 | `Engine/Platforms/HTML5/Source/Runtime/Online/HTTP/Private/`  
[`HTML5HTTP.cpp`](<https://git.weixin.qq.com/wechat-minigame/minigame-transform-docs/blob/master/Demo/UE/http/HTML5HTTP.cpp>) | HTTP 请求类实现文件 | `Engine/Platforms/HTML5/Source/Runtime/Online/HTTP/Private/`  
[`HTML5JavaScriptFx.h`](<https://git.weixin.qq.com/wechat-minigame/minigame-transform-docs/blob/master/Demo/UE/http/HTML5JavaScriptFx.h>) | JavaScript 接口声明头文件 | `Engine/Platforms/HTML5/Source/Runtime/HTML5/HTML5JS/Public/`  
[`HTML5JavaScriptFx.js`](<https://git.weixin.qq.com/wechat-minigame/minigame-transform-docs/blob/master/Demo/UE/http/HTML5JavaScriptFx.js>) | JavaScript 层适配文件 | `Engine/Platforms/HTML5/Source/Runtime/HTML5/HTML5JS/Private/`  
  
### 文件集成说明

将上述文件复制到 UE 引擎源码的对应位置，替换原有文件即可完成 HTTP 模块的微信小游戏适配。

## 引擎修改点

### 1\. C++ 层修改

#### 1.1 新增请求 ID 管理 (HTML5HTTP.h)
    
    
    // 新增头文件引用
    #include "HAL/CriticalSection.h"
    #include "Containers/Set.h"
    
    class FHTML5HttpRequest : public FHttpRequestImpl
    {
    private:
        // 新增：唯一请求 ID，用于取消请求
        uint64 RequestId;
        
        // 新增：线程安全的请求 ID 生成
        static FCriticalSection RequestIdLock;
        static uint64 NextRequestId;
        
        static uint64 GenerateRequestId();
    };
    

#### 1.2 请求生命周期改进 (HTML5HTTP.cpp)

**构造函数改进：**
    
    
    FHTML5HttpRequest::FHTML5HttpRequest()
        : bCanceled(false)
        , bCompleted(false)
        , BytesSent(0)
        , CompletionStatus(EHttpRequestStatus::NotStarted)
        , ElapsedTime(0.0f)
        , RequestId(GenerateRequestId())  // 新增：生成唯一请求 ID
    {
        UE_LOG(LogHttp, Verbose, TEXT("FHTML5HttpRequest::FHTML5HttpRequest() RequestId=%llu"), RequestId);
        // ...
    }
    

**析构函数改进：**
    
    
    FHTML5HttpRequest::~FHTML5HttpRequest()
    {
        UE_LOG(LogHttp, Verbose, TEXT("FHTML5HttpRequest::~FHTML5HttpRequest() RequestId=%llu"), RequestId);
        CleanupRequest();  // 新增：确保资源释放
    }
    

**取消请求改进：**
    
    
    void FHTML5HttpRequest::CancelRequest()
    {
        UE_LOG(LogHttp, Verbose, TEXT("FHTML5HttpRequest::CancelRequest()"));
        UE_CancelHTTPDataRequest(RequestId);  // 新增：调用 JS 层取消请求
        bCanceled = true;
    }
    

#### 1.3 回调修复
    
    
    void FHTML5HttpRequest::ReceiveCallback(void *arg, void *buffer, uint32 size, 
                                             void* httpHeaders, int httpStatusCode)
    {
        // 新增：修复微信完成回调失败问题
        if (!Response.IsValid())
        {
            CompletionStatus = EHttpRequestStatus::Processing;
            Response = MakeShareable(new FHTML5HttpResponse(*this));
            FHttpModule::Get().GetHttpManager().AddRequest(SharedThis(this));
            ElapsedTime = 0.0f;
        }
        
        // 原有处理逻辑...
    }
    

### 2\. JavaScript 层修改 (HTML5JavaScriptFx.js)

#### 2.1 新增请求取消函数
    
    
    UE_CancelHTTPDataRequest: function (id) {
        var GlobalModule = typeof wx !== "undefined" ? 
            GameGlobal.WXGameKit.gameInstance.Module : Module;
        
        if(GlobalModule._HTTPDataRequestMap && GlobalModule._HTTPDataRequestMap[id]){
            let xhr = GlobalModule._HTTPDataRequestMap[id];
            delete GlobalModule._HTTPDataRequestMap[id];
            xhr.abort();
        }
    },
    

#### 2.2 HTTP 请求适配
    
    
    UE_MakeHTTPDataRequest: function (ctx, id, url, verb, payload, payloadsize, 
                                       headers, async, freeBuffer, onload, onerror, onprogress) {
        // 微信环境使用 WXGameKit.network.XMLHttpRequest
        if(typeof wx !== "undefined"){
            var xhr = new WXGameKit.network.XMLHttpRequest();
        } else {
            var xhr = new XMLHttpRequest();
        }
        
        // 请求映射管理
        GlobalModule._HTTPDataRequestMap[id] = xhr;
        
        // 处理响应...
    }
    

## 文件下载与缓存机制

### 核心概念

微信小游戏环境下，HTTP 下载支持两种响应模式：

响应模式 | 条件 | 响应内容  
---|---|---  
二进制数据模式 | 未设置下载文件头 或 不满足缓存规则 | 下载内容的二进制数据  
文件路径模式 | 设置了下载文件头 且 满足缓存规则 | 缓存文件的本地路径  
  
### 设置下载文件头

通过设置 `wechatminigame-downloadfile` 请求头来启用文件下载模式：
    
    
    Request->SetHeader(TEXT("wechatminigame-downloadfile"), TEXT("1"));
    

### 配置缓存规则

在 `handlers.js` 中配置 `setAssetCacheableHandler` 来定义哪些文件可以被缓存：
    
    
    // handlers.js
    WXGameKit.fs.setAssetCacheableHandler((path) => {
      // 定义可缓存的文件标识
      const cacheableFileIdentifier = ["StreamingAssets"];
      // 定义排除的文件标识
      const excludeFileIdentifier = ["json"];
      
      if (cacheableFileIdentifier.some(identifier => path.includes(identifier)
        && excludeFileIdentifier.every(excludeIdentifier => !path.includes(excludeIdentifier)))) {
        return true;
      }
      return false;
    });
    

### 响应处理流程
    
    
    HTTP 请求发起
        ↓
    检查 wechatminigame-downloadfile 头
        ↓
    ├─ 未设置 → 返回二进制数据
    │
    └─ 已设置 → 检查缓存规则 (setAssetCacheableHandler)
                  ↓
              ├─ 不满足规则 → 返回二进制数据
              │
              └─ 满足规则 → 文件缓存到本地
                            → 返回文件路径字符串
                            → 可通过 fopen/fread 直接访问
    

### 缓存文件路径

当文件被缓存时，返回的路径格式为：
    
    
    /CustomWritablePath/__GAME_FILE_CACHE/[原始URL路径]
    

例如：

  * 请求 URL: `https://cdn.example.com/assets/StreamingAssets/audio/bgm.mp3`
  * 缓存路径: `/CustomWritablePath/__GAME_FILE_CACHE/assets/StreamingAssets/audio/bgm.mp3`

## 使用示例

### API 概述

UE HTTP 模块的调用方式与 UE 原生 API 完全一致，主要操作包括：

操作 | API | 说明  
---|---|---  
创建请求 | `FHttpModule::Get().CreateRequest()` | 创建 HTTP 请求对象  
设置方法 | `Request->SetVerb("GET"/"POST"/...)` | 设置 HTTP 方法  
设置 URL | `Request->SetURL(URL)` | 设置请求地址  
设置头 | `Request->SetHeader(Key, Value)` | 设置请求头（包括微信特殊头）  
设置回调 | `Request->OnProcessRequestComplete().Bind...` | 绑定完成回调  
发起请求 | `Request->ProcessRequest()` | 开始执行请求  
取消请求 | `Request->CancelRequest()` | 取消正在进行的请求  
  
### 基本 HTTP GET 请求
    
    
    #include "Http.h"
    #include "HttpModule.h"
    
    void MyClass::SendGetRequest()
    {
        // 创建 HTTP 请求
        TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = 
            FHttpModule::Get().CreateRequest();
        
        // 设置请求参数
        Request->SetURL(TEXT("https://api.example.com/data"));
        Request->SetVerb(TEXT("GET"));
        Request->SetHeader(TEXT("Content-Type"), TEXT("application/json"));
        
        // 设置回调
        Request->OnProcessRequestComplete().BindUObject(
            this, &MyClass::OnResponseReceived);
        
        // 发送请求
        Request->ProcessRequest();
    }
    
    void MyClass::OnResponseReceived(FHttpRequestPtr Request, 
                                      FHttpResponsePtr Response, 
                                      bool bWasSuccessful)
    {
        if (bWasSuccessful && Response.IsValid())
        {
            int32 StatusCode = Response->GetResponseCode();
            FString Content = Response->GetContentAsString();
            
            UE_LOG(LogTemp, Log, TEXT("HTTP 响应: %d - %s"), StatusCode, *Content);
        }
        else
        {
            UE_LOG(LogTemp, Error, TEXT("HTTP 请求失败"));
        }
    }
    

### POST 请求示例
    
    
    void MyClass::SendPostRequest()
    {
        TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = 
            FHttpModule::Get().CreateRequest();
        
        Request->SetURL(TEXT("https://api.example.com/users"));
        Request->SetVerb(TEXT("POST"));
        Request->SetHeader(TEXT("Content-Type"), TEXT("application/json"));
        
        // 设置请求体
        FString JsonBody = TEXT("{\"name\":\"Tom\",\"age\":25}");
        Request->SetContentAsString(JsonBody);
        
        Request->OnProcessRequestComplete().BindUObject(
            this, &MyClass::OnResponseReceived);
        
        Request->ProcessRequest();
    }
    

### 下载任务封装示例

实际项目中，通常会将 HTTP 下载封装为任务类，便于管理请求生命周期和取消操作：
    
    
    // FHttpModuleDownloadTask.h
    class FHttpModuleDownloadTask : public TSharedFromThis<FHttpModuleDownloadTask>
    {
    public:
        void Start();
        void Cancel();
        
    protected:
        // 子类可重写以设置额外的请求参数（如 header）
        virtual void SetupHttpRequest(FHttpRequestPtr& Request);
        
    private:
        void StartHttpRequest();
        void CancelHttpRequest();
        void HandleHttpComplete(FHttpRequestPtr Request, FHttpResponsePtr Response, 
                                bool bWasSuccessful, int32 RequestVersion);
        
        FHttpRequestPtr HttpRequest;
        FString URL;
        int32 CurrentRequestVersion = 0;
        FCriticalSection CriticalSection;
    };
    
    // FHttpModuleDownloadTask.cpp
    void FHttpModuleDownloadTask::StartHttpRequest()
    {
        // 注意：此函数由基类 Start() 调用，且已持有 CriticalSection 锁
        HttpRequest = FHttpModule::Get().CreateRequest();
        HttpRequest->SetVerb(TEXT("GET"));
        HttpRequest->SetURL(URL);
        
        // 允许子类设置额外的请求参数（如 header）
        SetupHttpRequest(HttpRequest);
        
        HttpRequest->OnProcessRequestComplete().BindSP(
            this, &FHttpModuleDownloadTask::HandleHttpComplete, CurrentRequestVersion);
        
        if (!HttpRequest->ProcessRequest())
        {
            UE_LOG(LogTemp, Warning, 
                TEXT("HttpModuleDownloadTask - StartHttpRequest: ProcessRequest failed immediately, URL=%s"), *URL);
            
            TWeakPtr<FHttpModuleDownloadTask> WeakTask = 
                StaticCastSharedRef<FHttpModuleDownloadTask>(AsShared());
            AsyncTask(ENamedThreads::GameThread, [WeakTask]()
            {
                if (TSharedPtr<FHttpModuleDownloadTask> StrongTask = WeakTask.Pin())
                {
                    StrongTask->MarkAsFailed();
                }
            });
        }
        else
        {
            UE_LOG(LogTemp, Log, 
                TEXT("HttpModuleDownloadTask - StartHttpRequest: GET request started, URL=%s"), *URL);
        }
    }
    
    void FHttpModuleDownloadTask::SetupHttpRequest(FHttpRequestPtr& Request)
    {
        // 基类默认不做额外设置，子类可重写
        // 微信小游戏子类可以在这里设置 downloadfile 的 header
    }
    
    void FHttpModuleDownloadTask::CancelHttpRequest()
    {
        // 注意：此函数由基类 Cancel() 调用，且已持有 CriticalSection 锁
        
        // 递增版本号，使已发出请求的回调失效
        ++CurrentRequestVersion;
        
        if (HttpRequest != nullptr)
        {
            HttpRequest->CancelRequest();
            HttpRequest.Reset();
            UE_LOG(LogTemp, Log, 
                TEXT("HttpModuleDownloadTask - CancelHttpRequest: GET request canceled, URL=%s"), *URL);
        }
    }
    

**微信小游戏下载任务子类示例：**
    
    
    // FWXDownloadTask.cpp - 微信小游戏专用下载任务
    class FWXDownloadTask : public FHttpModuleDownloadTask
    {
    protected:
        virtual void SetupHttpRequest(FHttpRequestPtr& Request) override
        {
            // 设置微信下载文件头，启用文件缓存模式
            Request->SetHeader(TEXT("wechatminigame-downloadfile"), TEXT("1"));
            
            // 可选：设置跳过清理标记
            if (bSkipClean)
            {
                Request->SetHeader(TEXT("wechatminigame-skipclean"), TEXT("1"));
            }
        }
        
    private:
        bool bSkipClean = false;
    };
    

### 文件下载（二进制数据模式）
    
    
    void MyClass::DownloadFileBinary()
    {
        TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = 
            FHttpModule::Get().CreateRequest();
        
        Request->SetURL(TEXT("https://cdn.example.com/config/settings.json"));
        Request->SetVerb(TEXT("GET"));
        
        // 不设置 wechatminigame-downloadfile 头
        // 响应将返回二进制数据
        
        Request->OnProcessRequestComplete().BindLambda(
            [](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bSuccess)
            {
                if (bSuccess && Response.IsValid())
                {
                    // 获取二进制数据
                    const TArray<uint8>& Content = Response->GetContent();
                    UE_LOG(LogTemp, Log, TEXT("下载完成，大小: %d 字节"), Content.Num());
                    
                    // 处理数据...
                }
            });
        
        Request->ProcessRequest();
    }
    

### 文件下载（缓存路径模式）
    
    
    void MyClass::DownloadFileWithCache()
    {
        TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = 
            FHttpModule::Get().CreateRequest();
        
        // StreamingAssets 路径会触发缓存（根据 handlers.js 配置）
        Request->SetURL(TEXT("https://cdn.example.com/StreamingAssets/audio/bgm.mp3"));
        Request->SetVerb(TEXT("GET"));
        
        // 设置下载文件头，启用文件缓存模式
        Request->SetHeader(TEXT("wechatminigame-downloadfile"), TEXT("1"));
        
        Request->OnProcessRequestComplete().BindLambda(
            [](FHttpRequestPtr Request, FHttpResponsePtr Response, bool bSuccess)
            {
                if (bSuccess && Response.IsValid())
                {
                    // 获取响应内容
                    FString ResponseStr = Response->GetContentAsString();
                    
                    // 检查是否为缓存文件路径
                    if (ResponseStr.Contains(TEXT("__GAME_FILE_CACHE")))
                    {
                        // 响应是缓存文件路径
                        UE_LOG(LogTemp, Log, TEXT("文件已缓存到: %s"), *ResponseStr);
                        
                        // 可以使用 fopen/fread 直接读取文件
                        ReadCachedFile(ResponseStr);
                    }
                    else
                    {
                        // 响应是二进制数据（不满足缓存规则）
                        const TArray<uint8>& Content = Response->GetContent();
                        UE_LOG(LogTemp, Log, TEXT("返回二进制数据，大小: %d"), Content.Num());
                    }
                }
            });
        
        Request->ProcessRequest();
    }
    
    void MyClass::ReadCachedFile(const FString& FilePath)
    {
        // 使用标准文件 API 读取缓存文件
        FILE* fp = fopen(TCHAR_TO_ANSI(*FilePath), "rb");
        if (fp)
        {
            fseek(fp, 0, SEEK_END);
            long fileSize = ftell(fp);
            fseek(fp, 0, SEEK_SET);
            
            TArray<uint8> Buffer;
            Buffer.SetNum(fileSize);
            fread(Buffer.GetData(), 1, fileSize, fp);
            fclose(fp);
            
            UE_LOG(LogTemp, Log, TEXT("读取缓存文件成功，大小: %d"), fileSize);
        }
    }
    

### 跳过缓存清理的下载
    
    
    void MyClass::DownloadWithSkipClean()
    {
        TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Request = 
            FHttpModule::Get().CreateRequest();
        
        Request->SetURL(TEXT("https://cdn.example.com/StreamingAssets/important.bundle"));
        Request->SetVerb(TEXT("GET"));
        
        // 启用文件缓存模式
        Request->SetHeader(TEXT("wechatminigame-downloadfile"), TEXT("1"));
        
        // 设置跳过清理标记，防止该文件被自动清理
        Request->SetHeader(TEXT("wechatminigame-skipclean"), TEXT("1"));
        
        Request->OnProcessRequestComplete().BindUObject(
            this, &MyClass::OnDownloadComplete);
        
        Request->ProcessRequest();
    }
    

## 缓存管理

### 可清理文件规则

在 `handlers.js` 中配置 `setErasableHandler` 来定义哪些缓存文件可以被清理：
    
    
    WXGameKit.fs.setErasableHandler((info) => {
      // 正在使用的文件不清理
      if (GameGlobal.WXGameKit.gameInstance.IDBFS.isOpen(
          WXGameKit.fs.resolveCachePath(info.path))) {
        return false;
      }
      
      // AssetBundle 不清理
      if (WXGameKit.fs.isWXAssetBundle(info.path)) {
        return false;
      }
      
      // 自定义不清理的文件
      const inErasableIdentifier = [];
      if (inErasableIdentifier.some(identifier => info.path.includes(identifier))) {
        return false;
      }
      
      return true;
    });
    

### 微信资源标识

配置微信资源（WXAssetBundle）文件标识，防止被自动清理：
    
    
    WXGameKit.fs.setWXAssetBundleHandler((path) => {
      return WXGameKit.fs.wxAssetBundles.has(WXGameKit.fs.pathInFileOS(path));
    });
    

## 注意事项

  1. **域名配置** ：生产环境需要在微信公众平台配置合法域名
  2. **缓存空间** ：微信小游戏有存储空间限制，需要合理规划缓存策略
  3. **文件访问** ：只有满足缓存规则的文件才会返回路径，其他情况返回二进制数据
  4. **路径前缀** ：缓存文件路径固定以 `/CustomWritablePath/__GAME_FILE_CACHE/` 开头
  5. **请求取消** ：支持通过 `Request->CancelRequest()` 取消进行中的请求

## 下一步

  * 了解 [HTTP 客户端适配](<HttpAdapter.md>)
  * 了解 [文件系统适配](<FileSystemAdapter.md>)
  * 了解 [TCP/UDP Socket 适配](<SocketAdapter.md>)
  * 了解 [WebSocket 适配](<WebSocketAdapter.md>)

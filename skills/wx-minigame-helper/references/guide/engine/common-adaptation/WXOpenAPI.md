---
title: "微信开放接口集成"
type: guide
category: guide/engine/common-adaptation
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/common-adaptation/Design/WXOpenAPI.html
---

# 微信开放接口集成

本文档介绍如何在 Emscripten 项目中集成微信小游戏开放接口，实现登录、分享、支付等平台能力。

## 概述

微信开放接口模块将微信小游戏的 JavaScript API 封装为 C++ 接口，让游戏可以直接使用微信平台提供的各种能力。

## 功能特性

模块 | 功能  
---|---  
登录认证 | 微信登录、获取用户信息  
社交分享 | 分享到好友、朋友圈、群  
数据存储 | 云端数据存储与同步  
广告 | 激励视频、Banner广告  
支付 | 游戏内支付  
系统信息 | 设备信息、网络状态  
小程序跳转 | 跳转其他小程序  
  
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
            --js-library ${WXGAMESDK_DIR}/jslib/SDK-Call-JS.jslib \
            -Wl,--whole-archive ${WXGAMESDK_DIR}/lib/libwxgamesdk.a -Wl,--no-whole-archive"
    )
    

#### 小游戏端配置

转换后，在小游戏的 `game.js` 中添加：
    
    
    import "./wx-wasm-sdk/index";  // 在 Module 生成之前导入
    

## API 参考

### 头文件
    
    
    #include "wx.h"
    

### 登录认证
    
    
    namespace wxwasmsdk {
        
        // 登录配置
        struct LoginOption {
            int timeout;
            std::function<void(LoginSuccessCallbackResult&)> success;
            std::function<void(GeneralCallbackResult&)> fail;
            std::function<void(GeneralCallbackResult&)> complete;
        };
        
        // 登录结果
        struct LoginSuccessCallbackResult {
            std::string code;  // 用于换取 openid 的临时凭证
        };
        
        // 发起登录
        void Login(LoginOption& option);
        
        // 检查登录态是否过期
        void CheckSession(CheckSessionOption& option);
    }
    

### 用户信息
    
    
    namespace wxwasmsdk {
        
        // 获取用户信息
        void GetUserInfo(GetUserInfoOption& option);
        
        // 创建用户信息按钮
        UserInfoButton* CreateUserInfoButton(CreateUserInfoButtonOption& option);
    }
    

### 系统信息
    
    
    namespace wxwasmsdk {
        
        // 基本信息
        struct AppBaseInfo {
            std::string SDKVersion;      // SDK 版本
            std::string version;         // 微信版本
            std::string language;        // 语言
            std::string theme;           // 主题
            bool enableDebug;            // 是否开启调试
            std::string host;            // 宿主环境
        };
        
        // 同步获取基本信息
        AppBaseInfo GetAppBaseInfo();
        
        // 获取系统信息
        void GetSystemInfo(GetSystemInfoOption& option);
        
        // 同步获取系统信息
        SystemInfo GetSystemInfoSync();
    }
    

### 事件监听
    
    
    namespace wxwasmsdk {
        
        // 监听小游戏显示
        void OnShow(OnShowCallback& callback);
        
        // 监听小游戏隐藏
        void OnHide(OnHideCallback& callback);
        
        // 监听复制链接
        void OnCopyUrl(OnCopyUrlCallback& callback);
    }
    

## 使用示例

### 微信登录
    
    
    #include "wx.h"
    #include <iostream>
    
    void WeChatLogin() {
        wxwasmsdk::LoginOption opt;
        opt.timeout = 10000;  // 10秒超时
        
        opt.success = [](wxwasmsdk::LoginSuccessCallbackResult& res) {
            std::cout << "登录成功！" << std::endl;
            std::cout << "临时凭证 code: " << res.code << std::endl;
            
            // 将 code 发送到自己的服务器换取 openid
            SendCodeToServer(res.code);
        };
        
        opt.fail = [](wxwasmsdk::GeneralCallbackResult& res) {
            std::cout << "登录失败: " << res.errMsg << std::endl;
        };
        
        opt.complete = [](wxwasmsdk::GeneralCallbackResult& res) {
            std::cout << "登录流程完成" << std::endl;
        };
        
        wxwasmsdk::Login(opt);
    }
    
    void SendCodeToServer(const std::string& code) {
        // 发送到后端服务器
        WXHttp::HttpRequestConfig config;
        config.url = "https://your-server.com/api/wx/login";
        config.method = "POST";
        config.headers["Content-Type"] = "application/json";
        config.data = R"({"code": ")" + code + R"("})";
        
        int request_id;
        WXHttp::Request(config, &request_id);
    }
    

### 获取系统信息
    
    
    #include "wx.h"
    
    void GetDeviceInfo() {
        // 同步获取基本信息
        auto appBaseInfo = wxwasmsdk::GetAppBaseInfo();
        std::cout << "SDK 版本: " << appBaseInfo.SDKVersion << std::endl;
        std::cout << "微信版本: " << appBaseInfo.version << std::endl;
        
        // 异步获取完整系统信息
        wxwasmsdk::GetSystemInfoOption opt;
        opt.success = [](wxwasmsdk::GetSystemInfoSuccessCallbackResult& res) {
            std::cout << "设备品牌: " << res.brand << std::endl;
            std::cout << "设备型号: " << res.model << std::endl;
            std::cout << "操作系统: " << res.system << std::endl;
            std::cout << "屏幕宽度: " << res.screenWidth << std::endl;
            std::cout << "屏幕高度: " << res.screenHeight << std::endl;
            std::cout << "像素比: " << res.pixelRatio << std::endl;
        };
        
        wxwasmsdk::GetSystemInfo(opt);
    }
    

### 监听小游戏生命周期
    
    
    #include "wx.h"
    
    void SetupLifecycleListeners() {
        // 监听小游戏切到前台
        wxwasmsdk::OnShowCallback showListener(
            [](wxwasmsdk::OnShowListenerResult& res) {
                std::cout << "小游戏显示" << std::endl;
                std::cout << "场景值: " << res.scene << std::endl;
                
                // 检查启动参数
                if (res.query.HasMember("from")) {
                    std::cout << "来源: " << res.query["from"].GetString() << std::endl;
                }
                
                // 恢复游戏
                ResumeGame();
            }
        );
        wxwasmsdk::OnShow(showListener);
        
        // 监听小游戏切到后台
        wxwasmsdk::OnHideCallback hideListener(
            [](wxwasmsdk::OnHideListenerResult& res) {
                std::cout << "小游戏隐藏" << std::endl;
                
                // 暂停游戏
                PauseGame();
            }
        );
        wxwasmsdk::OnHide(hideListener);
    }
    

### 分享功能
    
    
    #include "wx.h"
    
    void SetupShare() {
        // 设置分享菜单
        wxwasmsdk::ShowShareMenuOption opt;
        opt.withShareTicket = true;
        opt.menus = {"shareAppMessage", "shareTimeline"};
        wxwasmsdk::ShowShareMenu(opt);
        
        // 监听用户点击分享
        wxwasmsdk::OnShareAppMessageCallback shareListener(
            []() -> wxwasmsdk::OnShareAppMessageListenerResult {
                wxwasmsdk::OnShareAppMessageListenerResult result;
                result.title = "我在玩这个游戏，快来挑战我！";
                result.imageUrl = "https://cdn.example.com/share.png";
                result.query = "from=share&inviter=12345";
                return result;
            }
        );
        wxwasmsdk::OnShareAppMessage(shareListener);
    }
    
    // 主动分享
    void ShareToFriend() {
        wxwasmsdk::ShareAppMessageOption opt;
        opt.title = "邀请好友一起玩";
        opt.imageUrl = "https://cdn.example.com/invite.png";
        opt.query = "action=invite&userId=12345";
        
        opt.success = [](wxwasmsdk::GeneralCallbackResult& res) {
            std::cout << "分享成功" << std::endl;
        };
        
        wxwasmsdk::ShareAppMessage(opt);
    }
    

### 激励视频广告
    
    
    #include "wx.h"
    
    class RewardedVideoAd {
    public:
        void Init(const std::string& adUnitId) {
            wxwasmsdk::CreateRewardedVideoAdOption opt;
            opt.adUnitId = adUnitId;
            
            ad_ = wxwasmsdk::CreateRewardedVideoAd(opt);
            
            // 监听广告加载
            ad_->OnLoad([this]() {
                std::cout << "广告加载完成" << std::endl;
                is_loaded_ = true;
            });
            
            // 监听广告错误
            ad_->OnError([](wxwasmsdk::RewardedVideoAdOnErrorListenerResult& res) {
                std::cout << "广告加载失败: " << res.errMsg << std::endl;
            });
            
            // 监听广告关闭
            ad_->OnClose(<a href="wxwasmsdk::RewardedVideoAdOnCloseListenerResult& res" target="_blank">this</a> {
                if (res.isEnded) {
                    std::cout << "用户完整观看广告，发放奖励" << std::endl;
                    GiveReward();
                } else {
                    std::cout << "用户提前关闭广告" << std::endl;
                }
                is_loaded_ = false;
            });
        }
        
        void Show() {
            if (is_loaded_) {
                ad_->Show();
            } else {
                // 加载广告
                ad_->Load();
            }
        }
        
    private:
        wxwasmsdk::RewardedVideoAd* ad_ = nullptr;
        bool is_loaded_ = false;
        
        void GiveReward() {
            // 发放游戏奖励
        }
    };
    

### 云存档
    
    
    #include "wx.h"
    
    void SaveToCloud(const std::string& key, const std::string& value) {
        wxwasmsdk::SetUserCloudStorageOption opt;
        opt.KVDataList.push_back({key, value});
        
        opt.success = [](wxwasmsdk::GeneralCallbackResult& res) {
            std::cout << "云存档保存成功" << std::endl;
        };
        
        opt.fail = [](wxwasmsdk::GeneralCallbackResult& res) {
            std::cout << "云存档保存失败: " << res.errMsg << std::endl;
        };
        
        wxwasmsdk::SetUserCloudStorage(opt);
    }
    
    void LoadFromCloud(const std::vector<std::string>& keys) {
        wxwasmsdk::GetUserCloudStorageOption opt;
        opt.keyList = keys;
        
        opt.success = [](wxwasmsdk::GetUserCloudStorageSuccessCallbackResult& res) {
            for (const auto& item : res.KVDataList) {
                std::cout << item.key << ": " << item.value << std::endl;
            }
        };
        
        wxwasmsdk::GetUserCloudStorage(opt);
    }
    

### 虚拟支付
    
    
    #include "wx.h"
    
    void BuyItem(const std::string& itemId, int price) {
        wxwasmsdk::RequestMidasPaymentOption opt;
        opt.mode = "game";
        opt.env = 0;  // 0: 米大师正式环境
        opt.offerId = "your-offer-id";
        opt.currencyType = "CNY";
        opt.platform = "android";  // 或 "ios"
        opt.buyQuantity = price;
        
        opt.success = <a href="wxwasmsdk::GeneralCallbackResult& res" target="_blank">itemId</a> {
            std::cout << "支付成功" << std::endl;
            // 发放道具
            GiveItem(itemId);
        };
        
        opt.fail = [](wxwasmsdk::GeneralCallbackResult& res) {
            std::cout << "支付失败: " << res.errMsg << std::endl;
        };
        
        wxwasmsdk::RequestMidasPayment(opt);
    }
    

## 封装类示例
    
    
    #include "wx.h"
    
    class WXPlatform {
    public:
        static WXPlatform& Instance() {
            static WXPlatform instance;
            return instance;
        }
        
        // 初始化
        void Init() {
            // 获取系统信息
            auto sysInfo = wxwasmsdk::GetAppBaseInfo();
            sdk_version_ = sysInfo.SDKVersion;
            
            // 设置生命周期监听
            SetupLifecycleListeners();
            
            // 设置分享
            SetupShare();
        }
        
        // 登录
        void Login(std::function<void(const std::string& openid)> onSuccess,
                   std::function<void(const std::string& error)> onFail = nullptr) {
            wxwasmsdk::LoginOption opt;
            opt.timeout = 10000;
            
            opt.success = <a href="wxwasmsdk::LoginSuccessCallbackResult& res" target="_blank">onSuccess, onFail, this</a> {
                // 向服务器换取 openid
                ExchangeOpenId(res.code, onSuccess, onFail);
            };
            
            opt.fail = <a href="wxwasmsdk::GeneralCallbackResult& res" target="_blank">onFail</a> {
                if (onFail) onFail(res.errMsg);
            };
            
            wxwasmsdk::Login(opt);
        }
        
        // 分享
        void Share(const std::string& title, const std::string& imageUrl,
                   const std::string& query = "") {
            wxwasmsdk::ShareAppMessageOption opt;
            opt.title = title;
            opt.imageUrl = imageUrl;
            opt.query = query;
            wxwasmsdk::ShareAppMessage(opt);
        }
        
        // 显示广告
        void ShowRewardedAd(std::function<void()> onRewarded) {
            on_ad_rewarded_ = onRewarded;
            if (rewarded_ad_ && ad_loaded_) {
                rewarded_ad_->Show();
            }
        }
        
        const std::string& GetSDKVersion() const { return sdk_version_; }
        
    private:
        void SetupLifecycleListeners() {
            // ... 参考前面的示例
        }
        
        void SetupShare() {
            // ... 参考前面的示例
        }
        
        void ExchangeOpenId(const std::string& code,
                            std::function<void(const std::string&)> onSuccess,
                            std::function<void(const std::string&)> onFail) {
            // 发送到服务器换取 openid
            // ...
        }
        
        std::string sdk_version_;
        wxwasmsdk::RewardedVideoAd* rewarded_ad_ = nullptr;
        bool ad_loaded_ = false;
        std::function<void()> on_ad_rewarded_;
    };
    

## 常见问题

### Q: 登录时报错"未开通XX权限"？

A: 检查小游戏是否已完成微信认证，并在后台开通相应权限。

### Q: 分享图片不显示？

A: 确保图片 URL 可访问，且图片尺寸符合要求（建议 5:4 比例）。

### Q: 支付失败？

A: 检查米大师配置是否正确，offerId 是否正确。

## 注意事项

  1. **真机测试** ：部分功能只能在真机上测试
  2. **审核合规** ：使用用户信息前需要获取用户授权
  3. **版本兼容** ：注意 API 的最低基础库版本要求
  4. **错误处理** ：始终处理 fail 回调

## 下一步

  * 了解 [文件系统适配](<FileSystemAdapter.md>)
  * 了解 [网络通信模块](<SocketAdapter.md>)
  * 了解 [SDK 编译与集成](<SDKBuild.md>)

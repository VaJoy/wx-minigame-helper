---
title: "用户信息获取"
type: guide
category: guide/open-ability/account
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/user-info.html
---

## 用户信息获取

用户信息指的是微信用户的昵称、头像、性别等个人信息。

### 首次获取

个人信息是用户的敏感信息，因此获取用户信息需要用户同意授权。授权相关说明可以参考 [权限](<../../base-ability/authorize.md>) 章节。具体方法为，使用 [wx.createUserInfoButton](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html>) 引导用户点击后授权。
    
    
    const button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    })
    button.onTap((res) => {
      // 此处可以获取到用户信息
    })
    

注意：

  1. 调用wx.authorize({scope: "scope.userInfo"})不会弹出授权窗口，必须要使用 [wx.createUserInfoButton](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html>)
  2. 调用wx.createUserInfoButton需要用户同意隐私协议，具体查阅[小游戏隐私合规开发指南](<privacy.md>)进行配置

### 已授权的情况下获取

如果用户已经授权过个人信息给小游戏，开发者可以把用户的个人信息记录在业务后台。但用户有可能修改昵称头像，为了保证个人信息不出现过期失效的情况，需要再次获取用户信息。此时不需要再使用 [wx.createUserInfoButton](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html>) 来获取用户信息，而是可以调用 [wx.getUserInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html>) 直接获取。
    
    
    wx.getUserInfo({
      success(res) {
        // 此处可以获取到用户信息
      }
    })
    

### 在开放数据域中获取

如果获取到的用户信息仅用于展示而不需要存储到后台，则可以通过开放数据域的接口 `OpenDataContext-wx.getUserInfo` 来获取。由于保证了数据无法流出，这个接口即使没有用户授权也能直接调用。

### 推荐的使用方式

先通过 [wx.getSetting](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html>) 判断是否已授权，如果已授权，则调用 [wx.getUserInfo](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.getUserInfo.html>) 获取信息，如果没有授权，则调用 [wx.createUserInfoButton](<https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/wx.createUserInfoButton.html>) 创建按钮，用户主动点击后授权后获取信息
    
    
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] === true) {
          wx.getUserInfo({
            success: (res) => {
              // 已经授权，直接获取用户信息
            },
          });
        } else {
          const button = wx.createUserInfoButton({
            type: "image",
            style: {
              left: 100,
              top: 100,
              width: 100,
              height: 100,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
          });
          button.onTap((res) => {
            if (res.errMsg.indexOf(':ok') > -1 && !!res.rawData) {
              // 获取用户信息
            }
          });
        }
      },
    });
    

我们提供了授权相关的[代码片段](<https://developers.weixin.qq.com/s/gu7CIJmw75Rp>)，可以预览代码片段体验如何获取用户信息和使用隐私协议

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/gu7CIJmw75Rp> "在开发者工具中预览效果")

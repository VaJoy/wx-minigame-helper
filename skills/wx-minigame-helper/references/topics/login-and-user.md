# 专题：微信登录与用户体系

> 任务：让小游戏玩家用微信身份登录，获取用户标识与基础资料。

## 核心流程

```
小游戏端 wx.login() 拿到 code（5 分钟有效）
   ↓ 发送到自己的服务器
开发者服务器调用 code2session（code + appid + secret）
   ↓ 获得 openid + session_key（+ unionid，若满足条件）
服务器下发自定义登录态（token）给小游戏端
```

⚠️ `session_key` **不能**下发到客户端；`code` 只能使用一次。

## 关键文档

### 指南
- [登录](../guide/open-ability/account/login.md) — 登录流程官方完整说明
- [UnionID 机制](../guide/open-ability/account/union-id.md) — 同一微信主体下多应用/公众号的用户打通
- [用户信息](../guide/open-ability/account/user-info.md) — 头像昵称获取方式的变迁（getUserInfo 已回收，改用头像昵称填写能力）
- [获取手机号](../guide/open-ability/account/getPhoneNumber.md) 与 [实时手机号](../guide/open-ability/account/getRealtimePhoneNumber.md)
- [权限授权](../guide/base-ability/authorize.md) — scope 授权机制总览
- [隐私授权](../guide/open-ability/account/privacy.md) — 隐私协议弹窗
- [后端 API](../guide/base-ability/backend-api.md) — code2session 等服务端接口
- [用户游戏状态](../guide/open-ability/account/user-status.md) — 获取用户是否未成年等状态

### API
- [wx.login](../api/open/login/wx.login.md) / [wx.checkSession](../api/open/login/wx.checkSession.md)
- [wx.getUserInfo](../api/open/user-info/wx.getUserInfo.md)（注意回收策略）、[wx.createUserInfoButton](../api/open/user-info/wx.createUserInfoButton.md)
- [wx.authorize](../api/open/authorize/wx.authorize.md)、[wx.getSetting](../api/open/setting/wx.getSetting.md)、[wx.openSetting](../api/open/setting/wx.openSetting.md)
- [wx.getAccountInfoSync](../api/open/account-info/wx.getAccountInfoSync.md) — 获取小程序账号信息

## 常见坑

1. **头像昵称**：`wx.getUserInfo` 返回的已是匿名灰色数据，正式方案见用户信息指南中的"头像昵称填写"。
2. **unionid 获取**：需绑定微信开放平台，具体条件见 UnionID 文档。
3. **session 过期**：用 `wx.checkSession` 校验，失败后重新走登录流程。
4. 敏感数据（如开放数据域的签名数据）需用 session_key 校验签名，见[数据签名](../guide/open-ability/data/signature.md)。

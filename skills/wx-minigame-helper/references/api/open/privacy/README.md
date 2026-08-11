# 开放接口 / 隐私授权

> 路径：`api/open/privacy/`　|　本目录 4 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.getPrivacySetting(Object object)](wx.getPrivacySetting.md) | 查询隐私授权情况。隐私合规开发指南详情可见《小游戏隐私合规开发指南》 |
| [wx.onNeedPrivacyAuthorization(function listener)](wx.onNeedPrivacyAuthorization.md) | 监听隐私接口需要用户授权事件。小游戏注册该事件监听后，会启用自定义隐私授权弹窗模式，当需要用户进行隐私授权时会触发该事件。触发该事件时，开发者需要弹出隐私协议说明，并在用户同意或拒绝授权后调用回调接口 |
| [wx.openPrivacyContract(Object object)](wx.openPrivacyContract.md) | 跳转至隐私协议页面。隐私合规开发指南详情可见《小游戏隐私合规开发指南》 |
| [wx.requirePrivacyAuthorize(Object object)](wx.requirePrivacyAuthorize.md) | 模拟隐私接口调用，并触发隐私弹窗逻辑。隐私合规开发指南详情可见《小游戏隐私合规开发指南》 |

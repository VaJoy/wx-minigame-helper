---
title: "小游戏的运行环境"
type: guide
category: guide/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/runtime/env.html
---

# 小游戏的运行环境

微信小游戏运行在多种平台上：iOS（iPhone/iPad）微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。

各平台脚本执行环境是各不相同的：

  * 在 iOS 上，小程序逻辑层的 javascript 代码运行在 JavaScriptCore 中；

  * 在 Android 上，小程序逻辑层的 javascript 代码运行在 [V8](<https://developers.google.com/v8/>) 中；

  * 在 开发工具上，小程序逻辑层的 javascript 代码是运行在 [NW.js](<https://nwjs.io/>) 中。

### 平台差异

尽管各运行环境是十分相似的，但是还是有些许区别：

  * `JavaScript` 语法和 API 支持不一致：语法上开发者可以通过开启 `ES6` 转 `ES5` 的功能来规避（[详情](<https://developers.weixin.qq.com/minigame/dev/devtools/codecompile#es6-转-es5>)）；此外，小游戏基础库内置了必要的Polyfill，来弥补API的差异（[详情](<js-support.md>)）。

**开发者工具仅供调试使用，最终的表现以客户端为准。**

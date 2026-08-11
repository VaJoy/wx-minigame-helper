# 游戏引擎适配 / Unity WebGL 转化 / 渲染与画面

> 路径：`guide/engine/unity/rendering/`　|　本目录 7 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [定制微信小游戏的 URP 管线](CustomURP.md) | ... |
| [EmscriptenGLX 渲染模式](EmscriptenGLX.md) | 游戏内所有 GL 指令调用需要经过三层转换：`WASM(业务逻辑)` -> `WebGL JS胶水层(GL -> WebGL)` -> `平台渲染`，WASM 模块 与 JavaScript 之间的高 |
| [微信系统字体](WXFont.md) | 游戏基本会使用中文，中文字体大小少则2-3M。 |
| [WebGL2.0渲染支持说明](WebGL2.md) | WebGL 是一种用于在 Web 浏览器中渲染图形的 API，基于 OpenGL ES 图形库的功能。WebGL 1.0 大致与 OpenGL ES 2.0 功能相匹配，而 WebGL 2.0 大致与 |
| [屏幕适配](fixScreen.md) | 小游戏的屏幕适配与 unity 游戏适配常见手机屏幕没有区别。常见的适配方式都可以在小游中使用。区别的是一些屏幕信息的获取。 如安全区域的获取需调用 WX.GetWindowInfo 得到其中的安全区 |
| [iOS Metal 渲染模式](iOSMetal.md) | iOS Metal 渲染模式是在 iOS 平台下，小游戏底层渲染不再使用传统 WebGL，而是直接调用 Apple 官方的 Metal 图形接口。Metal 是苹果推出的高性能图形渲染 API，能够更 |
| [wasm水印插件](wasmWaterMark.md) | 在平台原有相似度检测基础上，为进一步保障wasm小游戏的代码安全，引入wasm水印机制 已添加水印的wasm游戏，若遭遇恶意人员扒包抄袭，平台可通过水印准确检测出游戏的原作者，并处罚恶意抄袭人员 |

---
title: "高性能+模式"
type: guide
category: guide/performance/overview
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance-plus.html
---

# 高性能+模式

## 背景

过去我们推出了 [高性能模式](<perf-high-performance.md>)，游戏在 iOS下性能大幅度提升，目前也有大量的游戏享受到了高性能模式的性能增益，但高性能模式仍然存在一些问题，比如**严格的内存限制** 和在部分 iOS 版本下 **WebGL2 渲染异常** 的问题，为了解决这些问题，我们在高性能模式基础上进一步升级，推出**高性能+模式** 。

## 原理简介

高性能模式之所以能够有较好的性能，是因为它运行在独立的进程里面，这是 iOS 提供的能力，因此它的渲染效果、渲染性能一定程度上都受限于 iOS。高性能+模式开创性地在保留游戏独立进程的基础上将渲染重新挪回了微信进程，这使得渲染效果和渲染内存消耗都得到了改善，性能提升如下：

项目 | 优化效果 | 备注  
---|---|---  
GPU 使用率 | **降低 30%** | 视游戏复杂度而定  
高性能模式进程内存消耗 | **降低 100 ~ 150 M** | 视游戏复杂度而定  
WebGL2 | **iOS 全版本支持** | 高性能模式下，iOS 15 才开始支持  
  
## 准备工作

### 1\. 特别提示

  1. 高性能+模式是[高性能模式](<perf-high-performance.md>)的特性升级，要开通高性能+模式请先保证游戏已经在[高性能模式](<perf-high-performance.md>)下；
  2. 高性能+模式目前对[Unity快适配小游戏](<https://github.com/wechat-miniprogram/minigame-unity-webgl-transform>)、Cocos和LayaAir引擎开发的小游戏适配较好，其他引擎建议充分验证后发布；

### 2\. 运行环境要求

**微信版本要求** ：微信版本须 >= 8.0.45，低版本的微信会降级为高性能模式。

**系统要求** ：与高性能模式对齐，只会针对 iOS 系统 >= 14 的版本开启；

开发阶段建议尽可能使用高版本的微信。

### 3\. 高性能+模式开关

1.参考高性能模式文档，先对游戏开启高性能模式；

2.在高性能模式的基础上，进一步配置 game.json 的 **iOSHighPerformance+** 为 true 则可进入高性能模式；  
game.json 配置示意如下：
    
    
    {
      "deviceOrientation": "portrait",
      "iOSHighPerformance": true,
      "iOSHighPerformance+": true
    }
    

可以通过 点击右上角菜单 -> 点击开发调试 弹出来的面板判断当前是否处于高性能+模式，如下所示，左侧为高性能+模式：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/8cb8a91f-7247-46a2-b01c-b0eda9f9078e.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/5ca12dbd-a9d4-458c-9e84-0852263281fb.png)

也可以通过代码变量 GameGlobal.isIOSHighPerformanceModePlus 判断当前运行时是否处于高性能+模式：
    
    
    // 判断当前处于高性能模式+下，安卓下无此属性
    if (GameGlobal.isIOSHighPerformanceModePlus) {
      // 这里可以针对高性能+模式做一些针对性的适配
    }
    

## 性能验收

开启高性能+模式后，开发者可以重点关注游戏内存相关的数据，对于如何测试内存，不同的引擎都有相应的指引文档，如Cocos Creator可以查看[文档](<https://docs.cocos.com/creator/manual/zh/editor/publish/ios/optimize.html#%E5%86%85%E5%AD%98%E9%97%AE%E9%A2%98%E8%AF%8A%E6%96%AD>)。 下面是某小游戏在 iPhone 11 Pro Max 进入游戏大厅挂机一分钟的内存数据对比：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/e1e73918-bcb1-4ced-8859-4ec0dad9f2ec.png)

除此之外，小游戏数据助手在 数据 -> 性能分析 -> 运行性能 也提供了丰富的运行数据：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/dab2f775-5d82-4037-8a9b-b76451daae3c.png)

## 变更记录

  1. 2024.7.31开始，高性能+模式最低客户端版本从8.0.44升级为8.0.45。

## 常见问题 QA

**Q1. 为什么我开了高性能+性能更差了？比如帧率和单帧耗时都变差了。**  
A1. 一般来讲是踩到了新方案的坑，请联系我们一起排查。

**Q2. 我的游戏验证有效果该如何发布？**  
A2. 修改 game.json 的游戏包正常提审发布即可，目前已有1000+游戏线上发布。

**Q3. 非Unity快适配当前能进行发布么？**  
A3. 可以，建议登录微信公众平台 -> 首页能力地图模块 -> 点击进入"生产提效包" -> 高性能模式中配置高性能+模式最低可用微信客户端版本为8.0.45。同时这个设置为可靠开关，低版本微信开发版 game.json 设置了 iOSHighPerformance+ 为 true 虽然会强制进入高性能+模式，但线上版仍然会以这个开关为准。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/16ac9b65-7a16-4539-93ea-40e1306bc427.png)

**Q4. 为什么开启高性能+模式后首屏花屏了**  
A4. WebGL texImage2D 接口 internalformat 和 format 对 RGB 支持有些bug，建议统一使用 RGBA
    
    
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    

**Q5. 为什么开启高性能+模式iOS14有些设备还是不能支持WebGL2**  
A5. iOS14下，低版本客户端在高性能+模式会有点击卡顿的问题，平台统一限定了在 iOS14 下从 8.0.49 的客户端版本才能支持高性能+模式，因此低版本客户端的 iOS14 会回退到高性能模式，不支持 WebGL2。

## 联系我们

如有任何问题，欢迎[联系小助手](<https://res8.wxqcloud.qq.com.cn/wxdoc/0d0a621f-a50f-4a89-8454-2ef762b4fbf0.png>)咨询。

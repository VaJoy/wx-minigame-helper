---
title: "高性能模式"
type: guide
category: guide/performance/overview
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance.html
---

# 高性能模式

## 简介

小游戏平台一直在持续强化小游戏的运行性能，为此我们推出了 iOS 高性能模式，游戏经过简单的适配，将大幅提升性能。

## 性能数据

在验证平台游戏性能的时候，我们经常使用水族馆的测试用例，在高性能模式下， 性能提升显著，效果如下:

机型 | 鱼的数量 | 帧率  
---|---|---  
iPhone 11 Pro Max高性能模式 | 12000 | **48 ~ 50帧**  
iPhone 11 Pro Max普通模式 | 12000 | 10 ~ 15帧  
安卓 Mi 10 | 12000 | 35 ~ 39帧  
  
iPhone 11 Pro Max高性能模式 ![](https://res.wx.qq.com/wxdoc/dist/assets/img/perf-high-performance4.73dcedca.png)

iPhone 11 Pro Max普通模式 ![](https://res.wx.qq.com/wxdoc/dist/assets/img/perf-high-performance5.91d04721.png)

安卓 Mi 10 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ca00f5ec-acc9-4208-b854-c3df68d70fa2.png)

## 准备工作

### 1\. 特别提示

高性能模式下，内存要求更加严格，6s/7/8等 2G RAM 机型的内存限制为1G，7P/8P/iPhoneX/XSAMX/11等3G以上内存机型的内存限制为1.4G，因此开发者务必保证内存峰值不超过该数值。

如果游戏没做好内存优化，不建议开启高性能模式，否则在 iOS 低端机容易出现内存异常退出的情况，如有内存问题，建议采取压缩纹理等方案充分优化内存。

### 2\. 运行环境要求

**微信版本要求** ：微信版本须 >= 8.0.18，直接更新至最新版本微信即可，低版本的微信不能够进入高性能模式，**因此业务代码仍需对普通模式保持兼容** 。

**系统要求** ：iOS下，只会针对 iOS 系统 >= 14 的版本开启，低版本的 iOS 只能进入普通模式。

截止到2024年1月，满足微信版本要求和系统要求的小游戏用户占比已经高达**96%** 。

### 3\. 开通高性能模式开关

开通高性能模式的方式为：登录微信公众平台 -> 首页游戏能力地图 -> 研发能力 -> 点击进入"生产提效包" -> 点击开通高性能模式。

开通成功后，过配置 game.json 的 iOSHighPerformance 为 true 则可进入高性能模式，通过去掉此开关可以正常回退到普通模式，以便两种模式对比。

特别注意：

  1. 判断是否在高性能模式主要通过调试模式下左上角的调试面板来确定，下图左边为普通模式，右边为高性能模式（仅iOS，安卓端无变化）。
  2. 如开关开通成功且配置了 game.json 扫码仍然没进入高性能模式，一般是本地打开过非高性能模式的版本，平台为了启动速度做了状态缓存，请尝试将本地的游戏都删除，包括开发、体验和线上版本，如果打开过高性能模式，后面都没有问题。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/fc2a3fe2-4a4b-4963-ac9d-28fbbf4a553d.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/cef1bb85-6492-486c-a025-1b12d72cedf0.png)

### 4.设置高性能模式最低可用iOS版本

一般来讲，游戏无需关心此项配置，但不可避免的有些游戏期望iOS低版本不要进高性能模式，比如 iOS15才开始支持 WebGL2，从2024年3月开始，平台允许开发者设置高性能模式最低可用iOS版本，可以在开通高性能模式的页面进行配置（除此之外也可以尝试[高性能+模式](<perf-high-performance-plus.md>)）。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/16ac9b65-7a16-4539-93ea-40e1306bc427.png)

## 游戏适配

正常来讲，游戏无需经过改造就能够无缝切换到高性能模式，但不可避免需要做一些声明和适配，下面列举一些常见的适配点。通过 GameGlobal.isIOSHighPerformanceMode 判断当前运行时是否处于高性能模式：
    
    
    // 判断当前处于高性能模式下，安卓下无此属性
    if (GameGlobal.isIOSHighPerformanceMode) {
      // 这里可以针对高性能模式做一些针对性的适配
    }
    

### 1\. 严格模式

业务代码的JS需要开启[严格模式](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode>)，一般游戏引擎都会默认开启。

### 2\. 接口差异

**iOS 下，高性能模式暂不支持以下接口** ：

  * GameServerManager 接口暂不支持；
  * RecorderManager 接口暂不支持(支持中)；
  * VideoDecoder 接口暂不支持；

### 3\. 渲染差异

高性能模式下的渲染接口跟普通模式有差异，因此可能遇到一些跟普通模式不一样的问题，下面列举一些已知问题；

#### 3.1 压缩纹理

iOS 下，高性能模式不支持ETC和PVRTC压缩纹理格式，只剩ASTC和ETC1。

#### 3.2 iOS 14 系统抗锯齿问题

我们发现，部分游戏在 iOS14 下面有诡异的限帧问题，游戏的单帧耗时很低，但是帧率只有20 ~ 40 fps，这个问题 在部分 Laya 引擎游戏和部分 Cocos 2.x版本引擎游戏比较常见。这种情况下可以尝试在WebGL模式下 canvas.getContext 接口将 antialias 参数设置为 true，如果不能解决，请联系我们一起来定位。

compareVersion定义可见[版本号比较](<../../runtime/client-lib/compatibility.md>)。
    
    
    const info = wx.getSystemInfoSync();
    if (info.platform === 'ios' && GameGlobal.isIOSHighPerformanceMode) {
      const iOSVersion = info.system.split(' ')[1];
      
      if (compareVersion(iOSVersion, '15.0') === -1) {
        // 此处仅为示意代码
        canvas.getContext('webgl', { antialias: true });
      }
    }
    
    

#### 3.3 iOS 14.0 ~ iOS 15.3 系统的性能问题

iOS 14 之后，很多H5游戏都遇到性能问题，问题可以归结为：多个drawcall 之间是会共享同一份 vertexBuffer 和 indexBuffer 的，每个 drawcall 使用一个偏移值在共享的 vertexBuffer 和 indexBuffer 中找到本次渲染的数据，在 >= iOS14 系统上，这会使得性能反而变得非常糟糕。

一般不同引擎的社区都有相应的解决方案，如[Cocos Creator](<https://forum.cocos.org/t/topic/97808/11>)和[Egret Engine](<https://mp.weixin.qq.com/s/1Xyh9DhTQCDlLsmgkUyNWQ>)。

我们会和引擎团队逐步建联，后续使用最新版的引擎在高性能模式下会自动做这个修复，目前请参照社区的解决方案手动适配。  
已经适配的引擎列表： Cocos Creator：2.x版本 >= 2.4.9，3.x版本 >= 3.4.2。

特别注意，cocos < 2.4.9必须手动适配，Cocos的修复仅仅是针对浏览器，对小游戏无效，Cocos适配示意：
    
    
    const info = wx.getSystemInfoSync();
    if (info.platform === 'ios' && GameGlobal.isIOSHighPerformanceMode) {
      const iOSVersion = info.system.split(' ')[1];
      // iOS 小于15.4的系统共享buffer有问题，执行修复逻辑
      if (compareVersion(iOSVersion, '15.4') === -1) {
        console.log('执行 iOS 共享 buffer 问题修复');
        // 这里执行修复代码，此处仅为 cocos 引擎修复示意，不同引擎修复方式不同
        cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
          if (this.vertexOffset + vertexCount > 65535) {
            this.uploadData();
            this._batcher._flush();
          }
        };     
        cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
          this.uploadData();
          this.switchBuffer();
        }
      }
    }
    
    

#### 3.4 WebGL2

iOS 15开始支持了WebGL2，但iOS15低版本的WebGL2（如iOS15.0和iOS15.1）是基本不可用的，有可能出现渲染黑屏、花屏等问题，建议统一先关掉WebGL2。如需开启，建议充分测试后才开启，比如判断当前版本 >= iOS 15.5 开启WebGL2。

#### 3.5 WebGL contextAttributes stencil属性差异

小游戏的 getContext 不支持 stencil属性且默认开启，Web标准的 getContext 支持自定义stencil属性，高性能模式下对齐了 Web 标准。 如发现开启高性能模式后出现了部分图片渲染空白，有可能为stencil设置不对，查看当前是否开启 stencil 属性可通过下面的代码：
    
    
    GameGlobal.canvas.getContext('webgl').getContextAttributes();//查看返回结果stencil是否为true
    

特别提示，在同一个 canvas 上以相同的 contextType 多次调用此方法只会返回同一个上下文，如果游戏使用了封面图的方案，getContext 会在封面图阶段执行。

#### 3.6 性能数据

iOS 高性能模式下，在调试模式过程中，只能拿到 fps 数据，DrawCall、Memory等请使用引擎自带的调试面板，小游戏数据助手侧性能板块上游戏的内存和 DrawCall 数据在高性能模式发布后同样会不准。

### 4\. 内存限制

高性能模式下，iOS 低端机(6s/7/8 等)2G RAM 机型的内存限制为 1G，中高端机(7P/8P/iPhoneX/XSAMX/11/12 等)3G 以上内存机型的内存限制为 1.5G（安全内存建议1.2G~1.3G），因此开发者务必保证内存峰值不超过该数值。

## 常见问题 QA

**Q1. 我的游戏开启高性能之后没有任何问题，是不是不用做任何适配了？**  
A1. 并不一定，参考一些限制里面的4.2，有可能 iOS14 上帧率会比较低，建议用iOS14和iOS15的机器都简单过一遍。

**Q2. 为什么普通模式没有问题，一到高性能模式有 js 报错？**  
A2. 因为高性能模式必须开启 js 的严格模式，一些原本不会报错的调用在严格模式下会报错。常见报错如ReferenceError: Can't find variable: SaxO，这通常是因为代码有个地方声明 SaxO = {};这在严格模式下是不允许的，详情可见 [严格模式](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%AD%E7%9A%84%E5%8F%98%E5%8C%96>)：
    
    
    "use strict"; // 假如有一个全局变量叫做mistypedVariable
    mistypedVaraible = 17; // 因为变量名拼写错误, 这一行代码就会抛出 ReferenceError
    

**Q3. 为什么会卡在启动 loading 界面？**  
A3. 通常是因为 game.js 执行报错导致没有触发到 canvas 的渲染，game.js 的执行报错通常也是因为高性能模式默认开了严格模式，导致原本普通模式不会报错的代码报错了。建议在game.js的最开始就执行 canvas的创建和getContext操作，会触发客户端loading界面的消失操作。

**Q4. global.requirePlugin 报错？**  
A4. 基础库版本问题，改成 GameGlobal.requirePlugin 即可。

**Q5. 游戏运行时弹出内存不足** A5. 高性能模式下有内存限制，建议[优化内存](<../memory/perf-action-memory-dev-profile.md>)

## 联系我们

如有任何问题，欢迎扫码联系小助手咨询，特别注意，咨询前请仔细阅读上面的适配文档，基本上所有问题都是因为没有仔细看文档。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a5e6eea2-3f21-4705-8e02-5a5115f41bc8.png)

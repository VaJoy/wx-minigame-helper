---
title: "评测标准"
type: guide
category: guide/performance/tools
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure.html
---

# 评测标准

## 为什么需要性能评测标准？

微信小游戏性能评测标准建立的初衷是希望能引导开发者优化相关性能数据，提升用户体验。 评测标准根据小游戏整体的性能数据表现，结合操作系统、机型分档、网络条件等多种维度建立。

## 开发者需要关注哪些性能指标

从小游戏的运行周期来看，主要由启动和运行两个阶段产生性能问题。

  * 启动阶段：启动时长，该数据将显著影响用户打开留存率
  * 运行阶段：内存峰值、内存Crash率、CPU占用、流畅度、网络等
  * 其他兼容性问题，包括JS异常、黑屏等严重问题

![](https://res8.wxqcloud.qq.com.cn/wxdoc/35eb16db-5fcc-4ae1-85c6-3e19973f045e.png)

## 评测环境与方法

从游戏的生产过程来看，我们主要从开发与现网两个环境进行评测。  

开发阶段：

  * 评测过程的客观环境更为稳定（比如固定的机型基线，网络环境等）
  * Profile数据更为详细，方便掌握性能细节

现网阶段：

  * 基于统计角度进行评测，从整体采样数据取反映游戏质量
  * 覆盖开发测试阶段无法预估的业务场景，比如网络异常、特定条件下的JS异常等

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f9ea53c1-035a-4cdb-9776-cbc98a4f90bb.png)

## 评测标准细则

### 品类评测标准

> 评测标准更新时间：2024-08-05（历史现网标准请查阅历史评测标准）

评测标准依赖于**现网真实玩家上报的性能数据** ，并结合游戏所属品类进行分类统计。

品类 | 游戏玩法 | 评测标准  
---|---|---  
大盘 | 全部 | [大盘评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-all>)  
休闲 | 消除、答题、模拟经营、塔防、捕鱼、益智 | [休闲品类评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-xiuxian>)  
角色 | 卡牌、MMO、ARPG、回合、战争策略 | [角色品类评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-juese>)  
棋牌 | 棋类、牌类 | [棋牌品类评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-qipai>)  
动作 | 跑酷、竞速、音乐舞蹈、益智、飞行射击、体育、对战 | [动作品类评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-dongzuo>)  
竞技 | MOBA、枪战、桌游、对战 | [竞技品类评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-jingji>)  
其他 | 其他 | [其他品类评测标准](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20240805/perf-mesure-other>)  
  
### 评测方法

#### 性能基线

评测小游戏性能首先需要确定性能基线, 即先确定机型设备条件，开发者可通过[机型档位映射](<../overview/perf-benchmarkLevel.md>)获取机型档位的参考机型。

#### 现网阶段

##### 性能报告

为了能够帮助开发者快速了解游戏整体的性能情况，平台通过对评测标准和游戏性能数据的整合，面向开发者提供一个较为全面的大盘性能监控系统，详细可通过 [性能监控系统](<../perf-audit/perf-system-overview.md>) 进行了解和使用。

##### 性能数据

开发者可通过 [小游戏数据助手](<https://developers.weixin.qq.com/minigame/analysis/assistant>)（数据-性能分析）或 [MP-研发工具箱-性能数据](<https://mp.weixin.qq.com/wxamp/frame/pluginRedirect/pluginRedirect?action=plugin_redirect&plugin_uin=1041&lang=zh_CN>) 获取游戏的现网玩家的性能采集数据：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/99345d8e-b76d-4d5d-bd31-b287869204cb.png)

#### 开发阶段

此阶段为当前小游戏新版本还未上线时进行评测的方法，开发者可以利用[PerfDog](<https://perfdog.qq.com/>) 或[小游戏云测试](<perf-tools-cloudtest.md>)进行数据获取，并参照性能基线和云测性能标准进行性能验证。

##### 云测试评测标准

> 评测标准更新时间：2025-06-18（历史云测试评测标准请查阅历史评测标准）

![](https://mmgame.qpic.cn/image/a71470220175ac760a1cc2887aedf87a084daaa6ec3afb73aa0d11ce44ed4ad3/0)

##### 评测工具

###### PerfDog

> 测试方法说明：  
>  1）启动性能：采用录屏分帧方法获取，取10次测试平均值  
>  2）运行性能：完成游戏主流程对局5~10min, PerfDog记录性能数据并上传，取平均值，每种机型测试3组数据再取平均，内存峰值取最大值

  * [Android如何测试微信小游戏&小程序](<https://perfdog.qq.com/article_detail?id=10082&issue_id=0&plat_id=4>)
  * [iOS如何测试微信小游戏&小程序](<https://perfdog.qq.com/article_detail?id=10080&issue_id=0&plat_id=4>)

###### 小游戏云测试

云测试服务是一套完整易用的在线测试服务，以帮助开发者更高效、更全面地进行自动化游戏性能测试、兼容性测试。更多详情可查阅[小游戏云测试](<perf-tools-cloudtest.md>)。

## 影响性能的客观因素

### 机型分档

> 更新时间：2024-08-05（历史机型分档占比请查阅[文档](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20230626/perf-mesure-20230626>)）

微信小游戏的玩家所使用的机型设备也是千差万别，但机型设备又是极为影响性能评测的一个因素。因此，我们需要对众多的机型设备进行一致性分档，唯有此才能更好的定位出现性能瓶颈的设备。  
目前我们的机型分档主要参考机型的CPU、GPU、内存等硬件因素进行分档，将设备分为高中低三档，涵盖>99%以上用户数据，开发者可通过如下途径获取平台用户设备的相关数据：  

  * 通过[《微信小游戏开发者技术手册-设备兼容篇》](<../overview/perf-technical-manual.md>) 了解平台用户设备概况（如 机型档位分布）
  * 通过 [wx.getDeviceBenchmarkInfo](<https://developers.weixin.qq.com/minigame/dev/api/base/system/wx.getDeviceBenchmarkInfo.html>) 获取当前用户设备的性能等级及机型档位
  * 通过[《设备档位下的用户分布》](<../overview/perf-benchmarkLevel.md>) 获取设备性能等级用户占比概况

### 网络环境

目前微信小游戏网络主要为WiFi和5G类型，更多网络概况可通过[《微信小游戏开发者技术手册-设备兼容篇》](<../overview/perf-technical-manual.md>) 进行了解。

### 微信版本与基础库版本

微信客户端iOS与Android以各自不同的迭代速度更新版本，基础库与客户端之间的关系可查阅[《基础库》](<
https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/>)   
公共库版本迭代节奏较快，每个版本都会带来新特性与已知BUG的修复。现网的版本分布可查阅[《基础库版本分布》](<https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version>)

## 历史评测标准

更新日期 | 文档  
---|---  
2024.08.05 | 当前标准  
2023.06.26 | [评测标准文档](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/20230626/perf-mesure-20230626>)  
2023.03.21 | [评测标准文档](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/perf-mesure-20230321>)  
2021.05.21 | [评测标准文档](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-mesure/perf-mesure-20210521>)

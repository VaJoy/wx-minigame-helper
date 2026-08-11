---
title: "开发阶段内存调优，把一切都控制在最开始"
type: guide
category: guide/performance/memory
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-memory-dev-profile.html
---

# 开发阶段内存调优，把一切都控制在最开始

开发过程中，为了方便开放者定位和调试所研发的微信小游戏的内存问题，本文推荐三款内存调试工具

  * 微信开发者工具 Performence 与 Memory   
微信开发者工具中内置了[Google Chrome DevTools](<https://developers.google.com/web/tools/chrome-devtools>) 工具, DevTools 可以帮助开发人员即时编辑页面并快速诊断问题，最终可以帮助开发人员更快地构建更好的小游戏。
  * [Android 真机性能工具](<../tools/perf-action-device-monitor.md>)   
微信 Android 端自身集成了三种内存分析工具，分别是性能监控面板、Heap Snapshot、V8-CPU-Profile。开发者可通过三者监控 Android 真机环境下各性能指标。
  * [PerfDog](<https://perfdog.qq.com/>)   
移动全平台 iOS/Android 性能测试、分析工具平台。快速定位分析性能问题，提升 APP 应用及游戏的性能和品质。手机无需 ROOT/越狱。手机硬件、游戏及 APP 应用也无需做任何修改，极简化即插即用。

## 一、微信开发者工具 Performence 与 Memory

如果想要详细了解微信开发者工具下的 Performance 和 Memory 的全部功能，参考[Chrome Performance](<https://developers.google.com/web/tools/chrome-devtools/evaluate-performance>) 和 [Chrome Memory](<https://developers.google.com/web/tools/chrome-devtools/memory-problems>)。

### 微信开发者工具 之 Performance

> 为了更方便清晰地分析内存问题，建议开发者在引擎端导出微信小游戏项目时，选中“调试模式”。

使用 Performance 的录制步骤如下图所示（勾选上 Performance 下的 ScreenShots 和 Memory，见下图黄褐色框区域）： ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c19747a6-9de4-4421-8051-8288a4732d47.png)

录制完成后会得到如下图所示的结果，对结果按照下文给出的方式进行分析。Performance 中共有 4 个区域，起到不同的作用，接下来分别介绍。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/850458dc-4f66-4dbc-905c-b27f6ba024a3.png)

**区域 1：概览窗口**

包含 FPS、CPU、NET、ScreenShots、HEAP 五部分。其中： NET 对应区域 2 中的 Network。每个彩色条代表一个资源。条越长，检索资源所花费的时间越长。每个栏的浅色代表等待时间（从请求资源到下载第一个字节之间的时间）。深色部分表示传输时间（下载第一个字节和最后一个字节之间的时间）。条的颜色编码如下： HTML 文件是蓝色的。

  * Scripts 是黄色的。
  * Stylesheets 是紫色的。
  * 媒体文件为绿色。
  * 其他资源是 灰色的。

当鼠标放在 FPS，CPU 和 NET 区域时，将显示该时间点的页面截图。 HEAP 是 JS 堆的缩略展示，对应着区域 3。

**区域 2 和区域 3**

包括 Network、Frame、Interactions、Main、GPU、Chrome_childIOThread 和 Compositor 等七个部分，内存问题重点关注 Network 和 Main。

  * NetWork 对应着概览窗口（区域 1）中的 NET，不再赘述。
  * Main: CPU 堆栈跟踪的可视化火焰图。显示了主线程随时间变化的活动图表。x 轴表示一段时间内的记录，每个条形代表一个事件，较宽的条形表示该事件花费了更长的时间。y 轴表示调用堆栈，事件相互叠加时，表示较高的事件导致较低的事件。当选中 Main 时，区域 3 呈现了 JS Heap、Documents、节点数(Nodes)、监听器（Listeners）和 GPU memory 等变化曲线。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/faca6462-0a32-4bb3-bbae-1c1a7699dd12.png)

**区域 4：统计窗口** 在上述三个窗口中选中不同的区域，该窗口呈现不同的统计结果。 分析内存时主要关注 JS Heap 数据及其曲线。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/53526f04-7af9-4041-ab6a-d56b3ca96113.png)

如上图，曲线颜色和上方复选框的颜色保持一致，如 JS Heap 是蓝色，Listeners 是暗黄色。曲线显示了五组数据的曲线图，分别是 JS Heap(JS 堆内存)，Documents(DOM 树根节点数量)，Nodes(节点数)，Listeners(监听器数量)和 GPU Memory。禁用复选框可以从图表中隐藏该类别。点击 JS Heap 曲线时，Main 中会定位到对应的执行函数，对于分析内存变化很有帮助。

### Chrome Devtools 之 Memory

开发者工具中的 Memory 可以帮助你: 找出您的页面当前正在使用多少内存。通过时间轴记录可视化一段时间内的内存使用情况。使用堆快照识别分离的 DOM 树（导致内存泄漏的常见原因）。使用“分配时间轴”记录找出何时在 JS 堆中分配新内存。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/abb1b3f8-6a6e-4032-8f43-8eabddb94789.png)

Memory 的 Profiles 一共有三种类型：

  * Heap snapshot: 显示了当前时刻页面上的 js 对象和对应的 DOM 节点。
  * Allocation instrumentation on timeline: 以时间轴的形式展现出来的 js heap。
  * Allocation sampling: JS heap 的采样，多用于长时间的记录。* 此外，还可以采用 Performance 中的 memory 的方式来获取内存信息，其记录的 js heap 与 memory 基本一致，但是有一点需要注意的是， Heap snapshot 记录的是干净的内存（GC 后的），而 Performance 中记录的内存并不一定经过了 GC。

### Heap snapshot

Heap snapshot 有 Summary、Comparison、Containment 和 Statistics 四种视图。

  * Summary 显示按构造函数名称分组的对象。使用它可以根据构造函数名称分组的类型来查找对象（及其内存使用情况）。这对于跟踪 DOM 泄漏特别有用 。 Comparison 显示两个快照之间的差异。使用它可以比较操作之前和之后的两个（或多个）内存快照。通过检查释放的内存中的增量和引用计数，可以确认内存泄漏的存在和原因。
  * Containment 允许浏览堆内容。它提供了一个更好的对象结构视图，有助于分析全局命名空间（窗口）中引用的对象，以找出使它们保持不变的原因。用它来分析闭包并从低层次深入研究对象。
  * Statistics 显示了当前 js heap 各种类别的资源所占用的内存大小的统计图。

  1. Summary ![](https://res8.wxqcloud.qq.com.cn/wxdoc/dd659604-58db-4b7a-868c-cf204f0e08d1.png)

  * Constructor 表示使用此构造函数创建的所有对象。Shallow Size 显示对象本身占用的内存大小。Retained Size 显示删除对象后可以释放的内存大小（依赖项不可再访问）。这个大小其实主要包含了依赖项的大小。Distance 使用节点到根距离的最短路径。展开每一行，将显示其所有实例。@字符后的数字是对象的唯一 ID，可以按对象比较堆快照。
  * (global property) – 全局对象和其引用对象的中间对象。
  * (roots) – 引用了所选对象的实体对象。引用可能被浏览器引擎出于自身目的所创建。浏览器引擎具备引用缓存，但是这些引用都是弱引用，因此不会阻止所选对象的垃圾回收。
  * (closure) – 通过函数闭包对一组对象的引用计数。
  * (array, string, number, regexp) – 具有引用数组，字符串，数字或正则表达式的属性的对象类型的列表。
  * (compiled code) – 所有与编译代码相关的内容。HTMLDivElement，ArrayBuffer 等 – 对代码引用的特定类型的元素或文档对象的引用。

  2. Comparison 通过将多个快照相互比较来查找存在差异的对象。为了验证某个应用程序操作不会造成泄漏（例如，通常是一对直接和反向操作，例如打开一个文档，然后关闭它，不会留下任何垃圾），您可以遵循以下情形：

  * 在执行操作之前，录制堆快照（take heap snapshot）。
  * 执行一项操作（以您认为会导致泄漏的某种方式与页面进行交互）。
  * 执行相反的操作（进行相反的交互并重复几次）。
  * 拍摄第二个堆快照，并将其视图更改为“比较”，将其与快照 1 进行比较。在“比较”视图中，显示两个快照之间的差异。展开总条目时，显示添加和删除的对象实例：

  3. Containment 本质上是应用程序对象结构的“鸟瞰图”。可以通过它查看函数闭包内部，观察组成 JavaScript 对象的 VM 内部对象，以及了解应用程序在非常低的级别使用了多少内存。该视图提供了几个入口点：

  * DOMWindow objects 是代码层面的“全局”对象。
  * GC root 是 VM 垃圾回收使用的实际 GC 根目录。GC 根目录可以由内置对象映射，符号表，VM 线程堆栈，编译缓存，句柄作用域，全局句柄组成。
  * native object 是 JavaScript 虚拟机内部“推送”以允许自动化的浏览器对象，例如 DOM 节点，CSS 规则。

**Allocation instrumentation on timeline**

录制时，请注意“分配时间轴”上是否有蓝色条状显示，如下面的屏幕截图所示。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c055cfd0-37b5-496d-894d-7388c4dcb745.png)

这些蓝色条表示新的内存分配。可以缩放栏以筛选“Constructor” 窗格，以仅显示在指定时间范围内分配的对象。展开对象，然后单击其值查看有关它的更多详细信息。

## 二、微信 Android 真机性能工具

微信 Android 端自身集成了三种内存分析工具，分别是性能监控面板、Heap Snapshot、V8-CPU-Profile。开发者可通过三者监控 Android 真机环境下各性能指标。通过此工具，开发者可以监控 Android 真机环境下的各个内存指标的实时变化。

### 性能监控面板

微信 Android 7.0.7 版本及以上，微信为小游戏开发版和体验版提供了[性能监控](<../tools/perf-action-device-monitor.md>)面板，可以通过胶囊按钮-开发调试-打开性能监控面板打开。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/1e454d99-b17a-4c54-a4c4-01a0822111fe.png)

开发者可通过在 Android 真机中实时地监控整个游戏过程中的各项资源的变化，更直接地定位和发现内存问题。

### Heap Snapshot

微信 Android 7.0.7 版本及以上，微信为小游戏开发版和体验版提供了 Heap 内存快照的能力，同样是在胶囊按钮中打开，选择开发调试中的 Take Heap Snapshot，在界面弹出如下图所示的提示后，从手机中的提示的位置把 Heap Snapshot 拷贝到电脑上。 之后在微信开发者工具中的调试器的 Memory 中，Load 拷贝出的 Heap Snapshot 文件，就可以查看 V8 的内存快照了.

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a87a42e3-7985-4fa0-8d83-46c05a1aeac8.png)

## 三、PerfDog

[Android 如何测试微信小游戏&小程序](<https://bbs.perfdog.qq.com/article-detail.html?id=46>)   
[iOS 如何测试微信小游戏&小程序](<https://bbs.perfdog.qq.com/article-detail.html?id=46>)

本节只精简地介绍使用 PerfDog 进行内存定位的操作，PerfDog 的作用在于：

  * 追踪内存变化的场景，帮助快速定位到内存异常的场景。
  * 从宏观角度观察微信小游戏运行时总体内存变化趋势，分析小游戏内存的可优化空间。

### iOS 设备使用说明

  * Step 1：打开 PerfDog，选择手机设备（USB 模式或者 WIFI 模式，建议选择 USB 模式），选定应用程序“微信”。此时可以看到右侧区域多个指标的趋势图。本文中重点关注 Memory Usage。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/17bb4516-69be-4fef-a735-c22b3a610db1.png) 为了更清晰地分析内存变化场景，建议在 PerfDog 中打开 ScreenShot（只支持 USB 模式）：打开方式为点击右下角"➕"，选中 ScreenShot。如下图：! ![](https://res8.wxqcloud.qq.com.cn/wxdoc/91347e18-bd8a-48b7-8e39-992accfd9516.png)

  * Step 2：在移动设备终端打开所要测试的微信小游戏。此时正常情况下，可以看到右侧 Memory Usage 中的各个曲线发生变化。

  * Step 3：在微信小游戏的各个场景中进行游戏操作，观察右侧 Memory Usage 的变化。 iOS 设备下微信小游戏与微信处于同一进程，故直接观察微信进程的 Memory Usage 的变化即可。 iOS 设备下 Memory Usage 详细字段含义请参考[PerfDog 使用说明书](<https://bbs.perfdog.qq.com/article-detail.html?id=5>)

  * Step 4：依据 Memory 曲线变化，对照实际操作场景或者 ScreenShot 给出的场景截图，根据微信小游戏的代码逻辑，定位出内存异常的场景。

### Android 设备使用说明

Android 性能采集与 iOS 基本相似，区别在于：

  * Android 设备下微信小游戏与微信处于不同进程，需要在 PerfDog 中选取小游戏进程。选取小游戏进程方式如下图所示：鼠标放置在区域“1”上，会弹出右侧浮动框，其中深色区域是当前微信内活跃的进程。如果此时微信正在运行小游戏，则该进程为微信小游戏进程。点击深色进程，即选中了小游戏进程。此时观察该进程的 Memory 变化即可。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/9ff6065a-d741-4ab6-b855-10866b9e6039.png)

  * 其次，Android 设备下 Memory 指标定义与 iOS 定义有所不同，具体指标请参考[PerfDog 使用说明书](<https://bbs.perfdog.qq.com/article-detail.html?id=5>)

当我们使用工具在开发时调优性能，下一步则可以[使用云测服务检测内存](<perf-action-memory-cloud-profile.md>)以确保在更多的设备上没有出现内存问题。

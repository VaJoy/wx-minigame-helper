---
title: "真机性能监控工具"
type: guide
category: guide/performance/tools
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-device-monitor.html
---

# 真机性能监控工具

## 分析手段和工具

### 性能监控面板

在微信 Android 7.0.7 版本及以上，我们在小游戏开发版和体验版提供了**性能监控面板** ，可以通过胶囊按钮打开，效果如下图所示

![monitoringpanel](https://res8.wxqcloud.qq.com.cn/wxdoc/b6dcf7cf-755b-4498-9f6c-2dd208607284.png)

如果发现内存一直增长，为了排除是 GC 延迟的影响，可以在胶囊按钮中，点击开发调试中的 Request Force GC，会去立即调用一次 GC，以此对比内存的真实增长情况。

Q：安卓如何查看内存  
A：可以使用[adb](<https://developer.android.com/tools/adb?hl=zh-cn>)查看

### Heap Snapshot

除此之外，微信 Android 7.0.7 版本及以上，我们在小游戏开发版和体验版提供了 Heap 内存快照的能力，同样是在胶囊按钮中打开，选择开发调试中的 Take Heap Snapshot，在界面弹出如下图所示的提示后，从提示中的位置把 heapsnapshot 拷贝到电脑上

![monitoringsave](https://res8.wxqcloud.qq.com.cn/wxdoc/d85145d7-007c-4772-9cf6-5011afe4cd07.png)

之后在微信开发者工具中的调试器的 Memory 中，Load 拷贝出来的 heapsnapshot 文件，就可以查看 V8 的内存快照了，效果如下图所示

![idememory](https://res8.wxqcloud.qq.com.cn/wxdoc/7a097284-1585-4563-a857-f93c9ffaa9e2.png)

heapsnapshot 的使用方法可以参考

<https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots>

### V8-CPU-Profile

微信 Android 7.0.7 版本及以上，我们在小游戏开发版和体验版提供了 V8-cpu-profile 的能力，同样是在胶囊按钮中打开，选择开发调试中的 Start CPU Profile，界面上会弹出 “start cpu profiling..” 的提示

![startcpuprofile](https://res8.wxqcloud.qq.com.cn/wxdoc/eaf71464-ac97-4ff6-a5d4-c0175a856f02.png)

之后再在开发调试中选择 Stop CPU Profile，在界面弹出如下图所示的提示后，从提示中的位置把 cpuprofile 拷贝到电脑上

![cpuprofilesave](https://res8.wxqcloud.qq.com.cn/wxdoc/7fc5b1b3-4a10-4201-9866-92c06ae48795.png)

之后在微信开发者工具中的调试器单击右上角三个点的按钮 -> More tools -> JavaScript Profiler -> Load，加载刚才生成的 cpuprofile 文件，就可以查看 CPU 的使用情况了，效果如下图所示

![idecpuprofile](https://res8.wxqcloud.qq.com.cn/wxdoc/85663b73-e1a3-4bce-a9e1-eb0c790af048.png)

左上角的下拉菜单可以选择如下三种模式：

  1. Chart：显示按时间顺序排列的火焰图。
  2. Heavy (Bottom Up)：按照函数对性能的影响排列，同时可以检查函数的调用路径。
  3. Tree (Top Down)：显示调用结构的总体状况，从调用堆栈的顶端开始。

这里我们选择 Tree (Top Down) 模式，按 Total Time 降序排列。可以看到有如下三列：

  1. Self Time：函数调用所耗费的时间，仅包含函数本身的声明，不包含任何子函数的执行时间。
  2. Total Time：函数调用所耗费的总时间，包含函数本身的声明及所有子函数执行时间。即：父函数的 Total Time = 父函数的 Self Time + 所有子函数的 Total Time。
  3. Function：函数名及路径，可展开查看子函数。

具体使用流程可以参考

<https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution>

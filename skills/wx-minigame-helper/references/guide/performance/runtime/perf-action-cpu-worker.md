---
title: "通过Worker异步计算优化CPU使用"
type: guide
category: guide/performance/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-action-cpu-worker.html
---

## 通过Worker异步计算优化CPU使用

### 背景

在小游戏每一帧中，JS主线程主要做了两件事情：计算和渲染。相对地，每一帧的Frame Time = 计算耗时 + 渲染耗时。根据Chrome 团队提出的用户感知性能模型 [RAIL](<https://web.dev/rail/>)，播放动画时JS执行时间（即计算耗时）要小于16ms，且应该尽量低于10ms，以留足额外的6ms用以渲染。因此，对于小游戏而言，每一帧的16ms十分重要。

然而，在小游戏中，一些复杂的计算（比如物理引擎模拟）所消耗的时间很难保证会低于10ms，这时往往会造成游戏帧率下降，并出现卡顿的情况。尤其是iOS的JavaScriptCore无法开启JIT，可能造成iOS上小游戏的性能表现很差。

### 分帧策略

对于计算性能造成游戏帧率下降或卡顿的场景，大多数开发人员会选择分帧策略，将执行时间较长的函数（long task）拆分成多个执行时间短的子任务，将子任务分配到每一帧中，按计划顺序执行，直到全部子任务执行完毕。分帧策略虽然对部分场景有效果，但是依旧存在如下问题：

  * 不是所有计算逻辑都能够被拆分。比如数组排序, 树的递归查找, 图像处理算法等, 执行中需要维护当前状态, 且调用上非线性, 无法轻易地拆分为子任务。
  * 可以拆分的逻辑难以把控力度。拆分的子任务在高性能机器上可以控制在 16ms 内, 但在性能落后的机器上表现并不一定理想。 16ms 的用户感知时间, 并不会因为用户手上机器的差别而变化。
  * 拆分的子任务并不稳定。计算逻辑可能会随着业务场景发生变化，将同步计算逻辑拆分成子任务，可能会造成每次改动业务都需要review多个子任务的代码。

这个时候，可以使用Worker 的多线程能力, **从宏观上将整个同步 JS 任务异步化。**

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a65ed361-cdcd-47fa-b2c4-ececd6a8b6eb.png)

### 小游戏环境的Worker

小游戏环境下的Worker与Web Worker存在一定的差异，在能力的体现上对比如下：

能力 | 小游戏Worker | Web Worker | 主线程  
---|---|---|---  
渲染能力 | ❌ | ❌ | ✅  
JS(wx) API | ❌ | ✅ | ✅  
网络I/O | ❌ | ✅ | ✅  
JS 运行时 | ✅ | ✅ | ✅  
计时器 | ✅ | ✅ | ✅  
JIT | Android支持 / iOS不支持（开启 useExperimentalWorker 后支持） | - | Android支持 / iOS不支持  
引擎能力 | ✅ | - | ✅  
并发数量 | 不能超过1个 | 无限制 | -  
线程通信数据传输方式 | 复制 | 复制 / ArrayBuffer | -  
线程通信-数据传输类型 | 只支持object | object / array | -  
  
小游戏的Worker的能力与Web Worker还有些实现上的差异，具体能力可参看[多线程worker](<https://developers.weixin.qq.com/doc/service/api/customer/servicermanage/api_invitekfworker>)。

需要开发者注意的是：

  * 对于JIT能力，在Android下主线程和Worker线程均有JIT能力，而在iOS下默认没有JIT能力，开启 useExperimentalWorker 后支持JIT。
  * Worker 线程无法进行渲染，也无法调用JS(wx) API， 只能受主线程控制，适合默默干活。
  * 多线程虽然实现了 JS 任务的并行运行, 也带来额外的**通信开销** 。

如下图所示, 从线程A调用 postMessage 发送数据到线程B onMessage 接收到数据有时间差, 这段时间差称为**通信消耗** 。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f186da8a-8b0b-4ff8-aa38-160451840c34.png)

从流程来看Worker分担主线程计算任务时：

  * 使用Worker线程`提升的性能 = 并行提升的性能 – 通信消耗的性能`。在线程计算能力固定的情况下， 要通过多线程提升更多性能, 需要尽量**减少通信消耗。**

  * 主线程 postMessage 和onMessage会占用主线程同步执行，**占用时间与数据规模相关** 。要避免多线程通信导致的主线程卡顿，需要控制每个渲染周期内的数据传输规模。此外，**占用时间与设备系统和设备硬件性能相关** 。iOS系统下的小游戏运行环境没有JIT，不同档型设备的CPU能力存在差异，这些都会导致线程通信占用时间的差异。

### 小游戏中使用Worker

#### Demo 1: 同步

通过一个Demo来看一下”同步计算“的效果。在这个Demo中，使用Cannon.js物理引擎模拟100个小球下落。

“同步计算”时，“物理模拟”（计算）过程和“渲染”过程均在主线程中执行。“物理模拟“的代码如下：
    
    
    function update() {
      sendTime = Date.now()
      if (!world) {
        // Init World
        ......
      }
      world.step(dt); // 物理模拟
     
      // Update rendering meshes
      for (var i = 0; i !== world.bodies.length; i++) {
            var b = world.bodies[i],
            p = b.position,
            q = b.quaternion;
            meshes[i].position.set(p.x, p.y, p.z);
            meshes[i].quaternion.set(q.x,q.y,q.z,q.w);
      }
        
        // If the simulate was faster than the time step (dt seconds), we want to delay the next timestep
        console.log("total compute:", Date.now() - sendTime)
        var delay = dt * 1000 - (Date.now() - sendTime);
        if (delay < 0) {
          delay = 0;
        }
      
        setTimeout(update, delay);
    }
    

看一下演示的效果：

演示设备：iPhone 8，iOS 13.5.1。

`同步（gif动图）：`

![](https://res8.wxqcloud.qq.com.cn/wxdoc/8ab1a8f3-0df5-4137-8162-01bf493a3c46.gif)

从演示效果中可以看到：同步计算时，随着小球的数量越来越多，FPS越来越低；

这是因为同步计算时，`Frame Time = 渲染耗时 + 计算耗时`，随着小球数量的增加，计算耗时逐渐增加，导致Frame Time 越来越大，且Frame Time > 16ms，所以同步计算的FPS越来越低，且低于60，最后仅仅只有20。

根据上文所述，这种因为计算瓶颈导致的小游戏帧率抖动、下降的情况，可以使用Worker多线程来优化。

#### Demo 2: 同步 Vs. 异步（计算与渲染完全剥离）

[点击下载代码示例](<https://res.wx.qq.com/wxdoc/dist/assets/media/miniprogram_worker_demo2.a70c7062.zip>)

“异步计算”时，将“物理模拟”（计算）过程挪到Worker线程中执行，“渲染”过程在主线程中执行。在小游戏开发过程中，为了最大限度地利用CPU资源，以及完全剥离渲染和计算，使两者互不影响，往往采用如下逻辑。

  * 首先，预估计算的平均耗时，以此选择合适的计算帧率；渲染帧率则根据渲染耗时和游戏类型综合考虑来设定。
  * Worker线程按照计算帧率来持续计算，不由主线程驱动。
  * Worker线程的每一次计算结果，通过线程通信返回给主线程。

例如：在本例中，因为当小球变多时，计算耗时已经超过16ms，故将计算帧设置为30，渲染帧保持60。在Worker线程中持续模拟计算，而无需等待主线程驱动。此时，从下图CPU时间片占用中可以看到，同步计算时，物理计算的高计算耗时，导致依旧会出现掉帧、卡顿的情况，如红框区域。

异步计算不仅避免了帧率不稳、卡顿的情况，而且最大限度地利用了CPU。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f02cefd6-1c13-4ed5-b298-e68efd585308.png)

对游戏逻辑修改后的代码如下：

`主线程`：
    
    
    function UseWorker() {
      const worker = wx.createWorker('workers/index.js');
      worker.onMessage(e=>{
        // Get fresh data from the worker
        positions = e.positions;
        quaternions = e.quaternions;
      
        // Update rendering meshes
        for (var i = 0; i !== meshes.length; i++) {
          meshes[i].position.set(positions[3 * i + 0],
            positions[3 * i + 1],
            positions[3 * i + 2]);
          meshes[i].quaternion.set(quaternions[4 * i + 0],
            quaternions[4 * i + 1],
            quaternions[4 * i + 2],
            quaternions[4 * i + 3]);
        }
      })
    }
    

`worker线程`:
    
    
      function update() {
        var simulateTime = Date.now()
        if (!world) {
        	// Init World
        	......
        }
        world.step(dt);
        var sendTime = Date.now()
    
        for (var i = 0; i !== world.bodies.length; i++) {
            var b = world.bodies[i],
                p = b.position,
                q = b.quaternion;
            positions[3 * i + 0] = p.x;
            positions[3 * i + 1] = p.y;
            positions[3 * i + 2] = p.z;
            quaternions[4 * i + 0] = q.x;
            quaternions[4 * i + 1] = q.y;
            quaternions[4 * i + 2] = q.z;
            quaternions[4 * i + 3] = q.w;
        }
        
        worker.postMessage({
             positions: positions,
             quaternions: quaternions
        });
          // If the worker was faster than the time step (dt seconds), we want to delay the next timestep
          var delay = dt * 1000 - (Date.now() - simulateTime);
          if (delay < 0) {
            delay = 0;
          }
          
          setTimeout(update, delay);
      }
    
    

直观对比效果如下：

可以看到，同步计算时即使将计算帧降到30，FPS依旧会下降到13左右，而异步计算时FPS依旧稳定在60。

这是因为异步计算时，物理模拟过程是在Worker线程中，所以主线程渲染的每一帧的`Frame Time = 渲染耗时 + 线程通信耗时`，因为渲染耗时和线程通信耗时都是稳定的，且Frame Time <= 16ms，所以异步计算的FPS能够稳定在60；

`同步（gif动图）：`

![](https://res8.wxqcloud.qq.com.cn/wxdoc/6c688706-8f5a-4d44-80c0-4890c0fecb36.gif)

`异步（gif动图）：`

![](https://res8.wxqcloud.qq.com.cn/wxdoc/59a8333f-579f-46d8-819d-2158ab8868f4.gif)

这个demo说明：**使用Worker多线程异步计算不仅可以避免帧率不稳、卡顿的情况，而且可以更大限度地利用CPU。**

#### Demo 3: 异步（iOS JIT） Vs. 异步（无JIT）

目前，在iOS的worker线程中已经支持开启JIT （通过 `wx.createWorker('workers/index.js', {useExperimentalWorker: true})` 开启），在对iOS性能优化的同时，可以进一步提高Worker多线程带来的优势：提高计算速度，减少线程通信耗时。

将小球的数量增加到400，计算耗时会进一步增加，此时直观对比一下使用和不使用JIT后的计算耗时和通信耗时。可以看到，使用JIT后的物理模拟（计算）耗时显著减少，且PostMessage的时间小幅度提升。

`异步（iOS 无JIT）`

![](https://res8.wxqcloud.qq.com.cn/wxdoc/b2df5d5f-2574-4b38-947b-66135bfdb01d.png)

`异步（iOS JIT）`

![](https://res8.wxqcloud.qq.com.cn/wxdoc/dfc4e2bc-6093-4577-bc6f-63ff67251448.png)

使用和不使用JIT的游戏效果如下：

从效果可以看到，不使用JIT的小游戏卡顿明显(计算瓶颈导致物理更新不及时)，而使用了JIT的小游戏非常流畅。

`异步未使用JIT(gif动图)：`

![](https://res.wx.qq.com/wxdoc/dist/assets/img/perf-action-cpu-worker11.27c07202.gif)

`异步使用JIT(gif动图)：`

![](https://res8.wxqcloud.qq.com.cn/wxdoc/perf-action-cpu-worker12.gif)

这个demo说明：**在使用Worker多线程时，JIT对计算速度有很高的提升。**

### 何时使用Worker

正如上述所说，使用Worker线程`提升的性能 = 并行提升的性能 – 通信消耗的性能`。

  * 当迁移到Worker线程的计算耗时 等于 通信耗时时，使用Worker线程并不能优化小游戏的表现；
  * 当通信数据量很大时，可能会造成通信耗时大于计算耗时，此时使用Worke线程反而会造成负面效果（当然，这种情况也比较难以出现，但并不意味着不会出现）。

因此，虽然使用Worker可以让小游戏在帧率和CPU利用率上有所提升，但是开发者仍然要自己衡量通信耗时所带来的损耗。当通信耗时较大时，开发者可以通过使用JIT，或者减少线程间通信数据量来优化。

### 参考文献

[Web Worker 文献综述](<https://github.com/CntChen/cntchen.github.io/issues/19>)

---
title: "最佳实践：使用多线程加速逻辑"
type: guide
category: guide/engine/unity/platform
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/worker-showcase.html
---

# 最佳实践：使用多线程加速逻辑

## 简介

本实践是基于**新版Worker** 的案例实现，且使用了新版Worker的**ShareArrayBuffer(SAB)特性** 。

本案例基于逻辑表现分离的基础架构。多线程工程在此基础上，将逻辑层的代码提取到Worker实现；Main Thread只消费Worker生产的逻辑数据，只关注表现层的实现。

Worker相关能力介绍可见：[多线程Worker V2](<../../../base-ability/new-worker.md>)

Demo示例可见：[新版worker demo](<https://git.weixin.qq.com/wechat-minigame/minigame-worker-showcase.git>)

![](https://res8.wxqcloud.qq.com.cn/wxdoc/7e1cb958-f838-4a3f-84c8-bb11b97be53c.png)

## 场景复杂度

游戏类型：放置塔防

玩法内容：批量刷怪、受击变色、受击伤害跳字、多种攻击武器（多级弹射、射线武器、追踪武器）

场景实体数：700+

## 性能分析

测试机型：OPPO FindX

其他配置：GLX，Webgl2.0

测试时长：10min

结论：使用Worker多线程后，FPS的帧率有明显的提升，能够稳定在30帧以上，同配置Worker提升约50%，且能有效降低BigJank。

| Avg(FPS) | FPS>=25 [%] | Jank(/10min) | BigJank(/10min)  
---|---|---|---|---  
FPS 30（逻辑帧率）  
Worker | 32 | 81.1 | 51.6 | 4.2  
非Worker（单线程） | 17.3 | 27 | 61.3 | 8.9  
FPS 15（逻辑帧率）  
Worker | 36.7 | 97.4 | 107.3 | 6.1  
非Worker（单线程） | 25.9 | 51.9 | 416.4 | 63  
  
## 案例说明

### 项目描述

该游戏案例表现层和逻辑层分离，并将表现层和逻辑层分别在两个线程执行。 表现层放在Unity（MainThread）；玩法/系统层逻辑层放在Worker计算，并构建单独的C-wasm；两者的数据通过SharedArrayBuffer(SAB)进行交互。

_注意：其他项目如果考虑接入多线程，可根据项目需求，将部分逻辑放到单独的线程Worker中计算。并将该部分代码构建为单独的 C-wasm。线程间由 SAB 进行数据通信（共享）。同时，多线程的框架可参考/复用本项目的多线程框架。_

层级 | 运行位置 | 职责  
---|---|---  
表现层 | 主线程 Unity C# | 场景管理、渲染、事件消费  
逻辑层 | Worker C-wasm | 战斗逻辑、物理计算、帧步进  
数据交互 | ShareArrayBuffer（SAB） | 共享数据  
  
### 技术概要

任务 | 作用 | 说明  
---|---|---  
Worker框架实现 | 包括Worker Init、驱动多线程逻辑、Dispose | [多线程Worker V2](<../../../base-ability/new-worker.md>)  
多线程代码转C | 构建独立的wasm | 便于管理、避免代码混编  
JS Module 驱动 wasm | JS module 驱动 wasm 计算，并将计算结果写回SAB |   
ShareArrayBuffer（SAB） | 线程之间数据共享 |  cmdSAB(主线程→Worker):C# 经jslib 将 Marshal 数据序列化为二进制后写入 resultSAB(Worker →主线程):主线程每帧轮询读取，反序列化后交给 C# 消费  
DllImport poll机制 | Unity读取SAB数据 | Update 通过 poll resultSAB 取回结果反序列化给 C#  
进阶  
RingBuffer | SAB数据管理 | 避免丢帧，双向RingBuffer机制可避免读写而冲突  
Unity多帧缓存 | 避免卡顿 |   
  
### 数据流程图

流程图的线程调度可见 Worker-SAB 架构

![](https://res8.wxqcloud.qq.com.cn/wxdoc/1ffe2c8e-668d-4b1c-ab69-8e6dabce4d35.png)  

![](https://res8.wxqcloud.qq.com.cn/wxdoc/807a1a49-8a3f-47b9-97aa-f5f6a57cce50.png)  

![](https://res8.wxqcloud.qq.com.cn/wxdoc/2fc91d7b-aca4-4d5b-bc41-288e4a97687c.png)

### Worker-SAB 架构

**Worker模式的案例** 架构如下图所示

![](https://res8.wxqcloud.qq.com.cn/wxdoc/34d0b4bd-a094-490b-87a9-1b39d22b0558.png)

  * 主线程 
    * Unity C# 部分的逻辑
    * jslib/JS桥阶层 （Assets/Plugins/WebGL/） 包含 JS API 实现、Worker创建、SAB 初始化
    * 项目框架 Adapter（minigame/framework/）
    * SAB Ring Buffer 读相关的逻辑（minigame/framework/）。
  * Worker线程 
    * SAB Ring Buffer 写相关的逻辑（minigame/Workers/）
    * Worker 线程帧循环调度相关代码（minigame/Workers/）
    * 战斗核心代码（C-wasm）
  * SAB：作为共享内存，由jslib发起创建

### 核心流程

主要说明主线程和Worker的交互模式。

#### Init

初始化阶段包含：Worker初始化，SAB初始化（主线程-Worker的cmdSab，Worker-主线程的resultSab），主线程端初始化Config（一系列配置表）传递给Worker。

##### C# DllImport 声明

在微信小游戏（WebGL）环境下，C# 无法直接调用浏览器/小游戏的 JavaScript API，需要通过 Unity/团结引擎提供的 [DllImport("__Internal")] + .jslib 机制打通 C# → JS → Worker 的调用链。

注意：C#端Bridge，其函数名必须完全匹配 .jslib 中注册的名称
    
    
    #if UNITY_WEBGL && !UNITY_EDITOR
            [DllImport("__Internal")]
            private static extern void TD_BattleWorkerAuthoritative_Init(// ... 省略中间参数 ...);
    
            [DllImport("__Internal")]
            private static extern void TD_BattleWorkerAuthoritative_Dispose(int requestId, int timeoutMs, int debugLogEnabled);
    
            // Plan27 SABTransport: C# 主动轮询 SAB 结果
            [DllImport("__Internal")]
            private static extern int TD_BattleWorkerAuthoritative_PollResult(byte[] buffer, int bufferSize);
    #endif
    
    

#### 主线程触发 Worker 初始化

Unity 构建 WebGL 时，底层使用 Emscripten 工具链将 C#（IL2CPP 转 C++）编译为 WebAssembly。在这个过程中，Assets/Plugins/WebGL/ 目录下.jslib 文件内容会通过 Emscripten 的 --js-library 被"链接"到webgl\Build\webgl.framework.js 供主线程wasm调用。
    
    
    mergeInto(LibraryManager.library, {
      // ...
      TD_BattleWorkerAuthoritative_Init__deps: ['$TD_BattleWorkerShadow_EnsureState', '$TD_BattleWorkerShadow_CreateWorker'],
      TD_BattleWorkerAuthoritative_Init: function (...) {
        // 这里的函数体就是 C# DllImport 调用时实际执行的 JS 代码
      },
    
    

C#主动触发后，JS侧的初始化阶段的伪代码如下：
    
    
    // BattleWorkerShadowBridge.jslib (合并到 Unity 主线程 JS 中)
    
    TD_BattleWorkerAuthoritative_Init: function(gameObjectNamePtr, ..., timeoutMs, debugLogEnabled) {
    
        // ══ Step 1: 获取/创建全局状态 ══
        var state = TD_BattleWorkerShadow_EnsureState();
        state.gameObjectName = UTF8ToString(gameObjectNamePtr);
    
        // ══ Step 2: 创建 Worker（含 SAB 通道） ══
        TD_BattleWorkerShadow_CreateWorker(state);
    
        // ══ Step 3: 从 Emscripten HEAP 拷贝 C# 传入的二进制配置 ══
        function copyBuffer(ptr, length) {
            return HEAPU8.slice(ptr, ptr + length).buffer;
        }
        // ... 其余所有配置 buffer
    
        // ══ Step 4: 检测 SAB 是否启用 ══
        state.sabEnabled = !!(state.Worker && state.Worker.sabEnabled);
    
        // ══ Step 5: 向 Worker 发送 init 消息 ══
        // SAB 模式：走 BATTLE_SAB_INIT，将两个 SAB 引用传递给 Worker
        if (state.sabEnabled) {
            Worker.postMessage({
                type: 'BATTLE_SAB_INIT',
                cmdBuffer: sabChannel.cmdSab,
                resultBuffer: sabChannel.resultSab,
                initPayload: {
                    // 附带 init 配置（一次性 Transferable）
                }
            });
        } else {
            // 降级模式：纯 postMessage
            Worker.postMessage({ type: 'init', ... });
        }
    }
    
    

Step 2: 创建 Worker 的伪代码如下：
    
    
        //.jslb
    
        TD_BattleWorkerShadow_CreateWorker(state);
             内部流程:
        //   ├─ adapter = GameGlobal.TD_BattleCoreWorkerAdapter.create()
        //   │   ├─ wx.createWorker('Workers/request/battlecore-Worker.js')  ← 微信 API 创建 Worker
        //   │   ├─ sabChannel = GameGlobal.TD_BattleCoreSabChannel.create() ← 创建 SAB 通道
        //   └─ state.Worker = adapter
    
    

##### SAB初始化

Worker初始化包括了ShareArrayBuffer（SAB）的初始化以及wasm的初始化，详情可看[多线程Worker V2](<../../../base-ability/new-worker.md>)。
    
    
    // battlecore-Worker.js (独立线程)
    
    Worker.onMessage(function(message) {
    
        // ══ 收到 BATTLE_SAB_INIT ══
        if (message.type === 'BATTLE_SAB_INIT') {
            // Step A: 接收 SAB 引用（此时两端共享同一块物理内存）
            cmdSab    = message.cmdBuffer;       // SharedArrayBuffer
            resultSab = message.resultBuffer;    // SharedArrayBuffer
    
            // Step B: 创建 Typed View（用于后续原子操作 + 二进制读写）
            cmdFlagArray = new Int32Array(cmdSab, 0, 1);
            cmdDataView  = new DataView(cmdSab);
            ringControl  = new Int32Array(resultSab, 0, 4);
    
            // Step C: 启动 1ms 轮询循环（持续监听 cmdSAB 中的命令）
            startCmdPolling();
    
            // Step D: 处理 initPayload — 加载 wasm 并初始化战斗
            var initMsg = message.initPayload;
            loadBattleRuntime().then(function(module) {
                handleInit(module, initMsg);
                // handleInit 内部:
                //   1. module.create()         → 分配 C 运行时实例
                //   2. 将配置写入 wasm HEAP    → module.malloc + memcpy
                //   3. module.loadScene(...)   → C 端解析场景配置
                //   4. 启动帧步进逻辑自驱循环      → setInterval(stepAuthoritativeFrame, 33ms)
                //   5. 将 init-result 写入 resultSAB Ring Buffer
            });
        }
    });
    
    

##### wasm 模块运行时加载

主线程通过`Worker.postMessage`触发初始化后，Worker通过`worker.onMessage`捕获对应的初始化消息并加载对应的wasm模块。
    
    
    # woker.js
    
    function handleBattleCoreMessage(message) {
        if (!validateMessage(message)) {
            protocolError(message, 'Invalid battleCore protocol message');
            return;
        }
    
        loadBattleRuntime().then(function (module) {
            if (message.type === 'init') {   #加载Wasm模块
                handleInit(module, message);
                return;
            }
            if (message.type === 'dispose') {
                handleDispose(module, message);
            }
        }).catch(function (error) {
            protocolError(message, error && error.message ? error.message : String(error));
        });
    }
    
    
    worker.onMessage(handleBattleCoreMessage);
    
    

上述中调用的 `loadBattleRuntime`，就是 Worker 线程加载 `battlecore-runtime.wasm` 的权威入口。
    
    
    function loadBattleRuntime() {
        if (battleCoreRuntimePromise) {
            return battleCoreRuntimePromise;
        }
        battleCoreRuntimePromise = new Promise(function (resolve, reject) {
            var imports = createBattleRuntimeImports();
            var wasmPath = 'battlecore-wasm/battlecore-runtime.wasm';
            var errors = [];
    
            // 优先：微信 Worker 原生能力，直接传相对路径
            instantiateWithWXWebAssembly(wasmPath, imports).then(resolve, function (wxError) {
                errors.push('WXWebAssembly: ' + (wxError && wxError.message ? wxError.message : String(wxError)));
    
                // 兜底：标准 WebAssembly，需要先读取 wasm 二进制
                instantiateWithWebAssembly(wasmPath, imports).then(resolve, function (webError) {
                    errors.push('WebAssembly: ' + (webError && webError.message ? webError.message : String(webError)));
                    reject(new Error('Failed to instantiate battlecore-runtime.wasm. ' + errors.join(' | ')));
                });
            });
        });
        return battleCoreRuntimePromise;
    }
    

#### Per Step

根据数据流分成两部分进行说明，分别是Worker的逻辑数据生产和主线程的数据消费。

##### Worker 线程

Worker 线程中的 JS Module 会通过调用 C 端暴露的 API 接口和wasm进行交互，以驱动 wasm 逻辑。完成逻辑计算后，JS会将数据填充到resultSAB。

###### JS Module 驱动 wasm

JS Module 会通过调用 C 端暴露的 API 接口和wasm进行交互。

在构建wasm时，将对应的 Function 在 wasm 构建时加到**EXPORTED_FUNCTIONS** ，避免dead code elimination。
    
    
    #build-battle-runtime-Worker.ps1
    
    $exportedFunctions = "[...,''_BattleRuntime_Step',...]"
    
    # ...
      -s EXPORTED_FUNCTIONS=$exportedFunctions `
    # ...
    
    

Worker JS 驱动wasm的循环逻辑如下
    
    
    function scheduleAuthoritativeLoop(module) {
        if (!authoritativeLoopActive) {
            return;
        }
        authoritativeLoopTimer = setTimeout(function () {
            stepAuthoritativeFrame(module);
        }, authoritativeStepIntervalMs);
    }
    

###### JS Module 时序
    
    
    function stepAuthoritativeFrame(module) {
        // ...
        // 1 驱动 wasm 计算一帧
        stepResult = module.step(runtimeHandle, frameIndex, 1) | 0;
    
        // 2 获取帧结果大小
        frameResultSize = module.getFrameResultSize(runtimeHandle) >>> 0;
    
        // 3 分配内存
        frameResultPtr = module.malloc(frameResultSize) >>> 0;
    
        // 4 拷贝帧结果到分配的内存
        getResult = module.getFrameResult(runtimeHandle, frameResultPtr, frameResultSize) | 0;
    
        // 5 直接写入 SAB Ring Buffer 给主线程消费
        sabChannel.writeResultDirect(frameIndex, heapView, frameResultPtr, frameResultSize, ...);
    
        // 6 释放内存，推进帧号，调度下一帧
        module.free(frameResultPtr);
        authoritativeNextFrame = frameIndex + 1;
        scheduleAuthoritativeLoop(module);
    }
    

##### 主线程

主线程只负责消费resultSAB数据（也即Worker逻辑运算生产的数据）。

###### C# DllImport 接口定义
    
    
    // ── 第一层：DllImport 声明（C# → JS 桥） ──
    
    [DllImport("__Internal")]
    static extern int TD_BattleWorkerAuthoritative_PollResult(byte[] buffer, int bufferSize);
    // 调用后，JS 侧会：
    //   1. channel.pollResult()  → 从 SAB Ring Buffer 读一个 slot
    //   2. 将结果序列化为 [header + payload] 写入 buffer
    //   3. 返回写入的总字节数（0 = 无数据）
    
    

###### DllImport poll 机制

调用 pollResult 后，回填数据。
    
    
      $TD_BattleWorkerShadow_PollSabResult__deps: ['$TD_BattleWorkerShadow_EnsureState'],
      $TD_BattleWorkerShadow_PollSabResult: function (bufPtr, bufSize) {
    
        // ...
        var result = channel.pollResult();
        // ...
    
        // 构造 header 到 C# buffer
        var headerView = new DataView(HEAPU8.buffer, bufPtr | 0, HEADER_SIZE);
        // ... 填充result到headerView
        return totalLen;
      }
    

pollResult 结合RingBuffer会进行readIndex和writeIndex的控制，通过 Header 和 offset 获取 payload 数据。详情可看下文的RingBuffer章节。
    
    
    /**
     * 轮询读取结果通道 Ring Buffer（Worker→Main）
     * @returns {{ frameIndex: number, data: Uint8Array, resultType: number, requestId: number, success: boolean } | null}
     */
    BattleCoreSabChannel.prototype.pollResult = function () {
        // ...
        // 深拷贝 payload（RingBuffer slot 数据）
        // this.resultSab : SAB
        var copy = resultSize > 0
            ? new Uint8Array(this.resultSab, slotOffset + this.slotHeaderSize, resultSize).slice()
            : new Uint8Array(0);
    
        // 推进 readIdx（释放 slot 给 Worker）
        Atomics.store(this.ringControl, 1, readIdx + 1);
    
        return {
            frameIndex: frameIndex,
            data: copy,
            resultType: resultType,
            requestId: requestId,
            success: success
        };
    };
    
    

###### C# 获取SAB频率

C# Update() 每次申请只读取 RingBuffer 一个 Slot 的数据，将其调用slice深拷贝到预分配的内存
    
    
    // ── 消费队列（流控） ──
    
    Update(){
        //...
        DrainRuntimeInbox();
    }
    void DrainRuntimeInbox()
    {
        // 先轮询 SAB，把 Worker 写入的结果全部读出来
        PollSabResult();
    
        // 再按流控策略从 inbox 取出消息，驱动游戏逻辑
        while (inbox.Count > 0)
        {
            var message = inbox.Dequeue();
    
            if (message.type == "frame-result")
            {
                scheduler.Receive(message);          // 入 Jitter Buffer
                // → 后续 CommitReadyResults() 按节拍取出
                // → EventConsumer 解析 payload 中的弹道/敌人数据
                // → ApplyWorkerMirror() 同步到 C# 游戏世界
            }
        }
    }
    

##### MainThread-Worker

预留了初始化CS-C的SAB链路，可用作交互数据传递链路，目前demo暂无该部分的代码实现，可参考上文，根据需求扩写。

#### Dispose

游戏Dispose流程
    
    
    C# Dispose() → JSlib TD_BattleWorkerAuthoritative_Dispose
      → [SAB模式] sabChannel.writeBinaryCommand(CMD_DISPOSE)
           → Worker 轮询 cmdSAB 读取 → handleDispose()
               → stopAuthoritativeLoop()       // 停止帧循环
               → sabChannel.dispose()          // 清理 Worker 端 SAB
               → module.destroy(runtimeHandle) // 调用 C/wasm 销毁
               → sendMessage('dispose-result') // 结果写入 resultSAB + postMessage
      → JSlib onMessage('dispose-result')
           → adapter.terminate()              // 终止 Worker 线程
           → state.Worker = null
      → C# 收到 dispose-result → _runtimeInitialized = false
    
    

#### SAB消息设计与读写

为了避免丢帧，采用RingBuffer的设计模式暂存主线程未消费的帧。 每帧数据传输的 SAB 通道采用 SPSC（单生产者-单消费者）无锁环形缓冲区，用于 Worker → 主线程 的帧结果传输。示例工程有 8 个固定大小 Slot 组成环形队列。
    
    
    resultSAB (≈512KB):
    ┌─────────── Ring Control Header (16B) ─────────────────────────┐
    │ writeIdx(4B) │ readIdx(4B) │ slotCount(4B)=8 │ slotSize(4B)=64KB
    └───────────────────────────────────────────────────────────────┘
    ├── Slot 0 (64KB): [Header 20B][Payload ≤64KB-20B]
    ├── Slot 1 (64KB): ...
    ├── ...
    └── Slot 7 (64KB): ...
    
    

RingBuffer 依赖 Atomics.store（release）和 Atomics.load（acquire）进行读写。writeIdx用于说明 Worker 独占修改，表示下一个要写入的Slot位置，writeIdx：主线程独占修改，表示下一个要读取的位置。如果有同时写入的情况，则需要加互斥锁。如果是双向通信，也可以通过管理两个SAB实现。

##### SAB Read

通过DllImport注册的JS API，每次Update从RingBuffer Poll生产的数据。
    
    
    //Workers\request\battlecore-sab-channel.js
    
    /**
     * 轮询读取结果通道 Ring Buffer（Worker→Main）
     * @returns {{ frameIndex: number, data: Uint8Array, resultType: number, requestId: number, success: boolean } | null}
     */
    BattleCoreSabChannel.prototype.pollResult = function () {
        if (!this.resultSab || !this.ringControl) {
            return null;
        }
    
        var writeIdx = Atomics.load(this.ringControl, 0);
        var readIdx  = Atomics.load(this.ringControl, 1);
    
        // 无新帧
        if (readIdx >= writeIdx) {
            return null;
        }
    
        // 字段bytes获取...
    
        // 校验
        var maxPayload = this.slotSize - this.slotHeaderSize;
        if (resultSize > maxPayload) {
            Atomics.store(this.ringControl, 1, readIdx + 1); // 跳过坏槽
            return null;
        }
    
        // 拷贝 payload...
    
        // 推进 readIdx（释放 slot 给 Worker）
        Atomics.store(this.ringControl, 1, readIdx + 1);
    
        return {...};
    };
    
    

##### SAB Write

JS模块驱动C端执行一帧后，调取writeResult将结果写入RingBuffer。
    
    
     #Workers\request\battlecore-sab-channel.js
    /*
     * 写入帧结果到结果通道（Worker→Main）— Ring Buffer 版
     * @param {number} frameIndex - 帧索引
     * @param {Uint8Array|ArrayBuffer} data - frame-result 二进制数据
     * @param {number} [resultType] - 响应类型：0=frame, 1=init, 2=dispose, 3=error
     * @param {number} [requestId] - 请求ID（lifecycle 时传递）
     * @param {boolean} [success] - 是否成功
     * @returns {boolean} 写入成功返回 true
     */
    WorkerSabChannel.prototype.writeResult = function (...) {
        if (!this.resultSab || !this.ringControl) {
            return false;
        }
    
        var writeIdx = Atomics.load(this.ringControl, 0); // writeIdx
        var readIdx  = Atomics.load(this.ringControl, 1); // readIdx
    
        // Ring 满判断：已写未读帧数 >= slotCount
        // ...
    
        var bytes;
        // 内存分配...
    
        var slotIndex = writeIdx % this.slotCount;
        var slotOffset = this.ringControlSize + slotIndex * this.slotSize;
    
        // 写入 Slot Header (20B, big-endian)
        // ...
        // 写入 payload
        // ...
        // 推进 writeIdx（release 语义，确保 payload 在 idx 更新前对主线程可见）
        Atomics.store(this.ringControl, 0, writeIdx + 1);
        return true;
    };
    
    

### 编译与加载工具

（**1** ）**wasm构建**

**核心目标** ：将高性能战斗逻辑（C 语言实现）编译为 WebAssembly 模块。

**工具** ：项目采用 Emscripten 作为 WebAssembly 编译工具链，实现 C 源代码到 wasm 模块的编译配置与构建流程。建议依赖用于小游戏转换的**团结引擎内置的Emscripten工具** 进行转换（不会有版本问题），位置如下
    
    
    ...\Tuanjie\Hub\Editor\2022.3.61t7\Editor\Data\PlaybackEngines\WeixinMiniGameSupport\BuildTools\Emscripten
    

**配置** ：

Emscripten 工具链 将 C 源代码交叉编译为 wasm 二进制格式，同时生成配套的 JS 胶水代码（glue code）

逻辑模块：编译产物采用 MODULARIZE=1 模式，导出为具名模块 BattleCoreRuntimeModule，支持按需异步加载

胶水层函数调用：通过 -s EXPORTED_FUNCTIONS 显式导出 C 函数符号（如上文提到的_BattleRuntime_Step），使 JS 侧可通过 ccall/cwrap 或直接符号访问调用原生函数

内存管理：-s ALLOW_MEMORY_GROWTH=1 允许 wasm 线性内存动态增长，适应动态数据结构的内存需求
    
    
    #build-battle-runtime-Worker.ps1
    
    $exportedFunctions = "[......]"
    
    # ...
    
    & $emcc @sources "-I$include" "-I$internalInclude" -O0 `
      -s MODULARIZE=1 `
      -s EXPORT_NAME=BattleCoreRuntimeModule `
      -s EXPORTED_FUNCTIONS=$exportedFunctions `
      -s EXPORTED_RUNTIME_METHODS="[]" `
      -s ALLOW_MEMORY_GROWTH=1 `
      -s ERROR_ON_UNDEFINED_SYMBOLS=1 `
      -o $output
    
    

（**2** ）**模块加载**

项目需要维护一份胶水层代码。以项目为例，在小游戏导出以及wasm构建完成后，需要将对应的胶水层代码注入到MiniGame。

注入后，miniGame的目录结构如下：
    
    
    minigame/
    ├── framework/
    │   ├── battlecore-framework-adapter.js   ← 主线程：C# DllImport 桥
    │   └── battlecore-sab-channel.js         ← 主线程：SAB Ring Buffer 读端
    ├── Workers/
    │   └── request/
    │       ├── battlecore-Worker.js          ← Worker 线程：帧循环 + 驱动 wasm
    │       └── battlecore-sab-channel.js     ← Worker 线程：SAB Ring Buffer 写端
    ├── battlecore-wasm/
    │   └── battlecore-runtime.wasm           ← Worker 加载：C/wasm 战斗计算核心
    └── protocol/
        └── battlecore-protocol.js            ← 可选：消息协议定义

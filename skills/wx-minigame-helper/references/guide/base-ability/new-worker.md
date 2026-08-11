---
title: "多线程Worker V2"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/new-worker.html
---

# 多线程Worker V2

## 背景

小游戏正在灰度新版 Worker 。相比原有 Worker，新版 Worker 的能力更完整，目标是让更多计算、渲染、音频、网络相关逻辑可以从主线程迁移到 Worker 中执行，降低主线程压力。

新版 Worker 重点支持：

  * `OffscreenCanvas`
  * `SharedArrayBuffer`
  * Worker 内调用 innerAudio 音频接口
  * Worker 内调用 webSocket/tcp/udp 网络接口
  * 多worker

## 灰度说明

新版 Worker 当前仍在灰度中，使用前需要先确认基础库、客户端版本和灰度开通状态。

[建联 / 灰度申请](<https://doc.weixin.qq.com/forms/AJEAIQdfAAoABwAoAbdAFwCNgvSjL1JHf>)

## 运行环境要求

**Android：** 客户端 ≥8.0.74，基础库 ≥3.17.0

**iOS：** 能力支持中

> 注意：开发者工具暂不支持新版多线程

## 使用示例

### 基础步骤

同[旧版 worker](<workers.md>)

### 环境支持判断
    
    
    wx.env.isSupportStandardWorker
    

### OffscreenCanvas

新版 Worker 支持 `OffscreenCanvas` 后，可以把部分渲染相关逻辑放到 Worker 中执行，减少主线程压力。

`OffscreenCanvas` 应从主线程已有 Canvas 通过 `transferControlToOffscreen()` 转移，并 postMessage transfer 给 Worker

主线程：
    
    
    const canvas = wx.createCanvas();
    const offscreenCanvas = canvas.transferControlToOffscreen();
    const worker = wx.createWorker('workers/render-worker/index.js');
    
    worker.postMessage({
      type: 'init-canvas',
      canvas: offscreenCanvas,
    }, [offscreenCanvas]);
    

Worker：
    
    
    // workers/render-worker/index.js
    let canvas;
    let ctx;
    
    let renderLoop = (time) => {
      const x = (Math.sin(time / 500) * 0.5 + 0.5) * canvas.width;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#07c160';
      ctx.beginPath();
      ctx.arc(x, canvas.height / 2, 32, 0, Math.PI * 2);
      ctx.fill();
      requestAnimationFrame(renderLoop);
    }
    
    worker.onMessage((res) => {
      if (res.type === 'init-canvas') {
        canvas = res.canvas;
        ctx = canvas.getContext('2d');
        requestAnimationFrame(renderLoop);
      }
    });
    

  * Canvas 控制权 transfer 到 Worker 后，主线程不应再直接操作该 Canvas 的绘制上下文。

### SharedArrayBuffer

新版 Worker 支持 `SharedArrayBuffer` 后，主线程和 Worker 可以共享同一段内存，适合高频、大数据量通信场景。

判断某个 buffer 是否是 `SharedArrayBuffer`：
    
    
    function isSharedArrayBuffer(buffer) {
      return buffer?.constructor?.name === 'SharedArrayBuffer';
    }
    

不要使用下面这种方式判断：
    
    
    buffer instanceof SharedArrayBuffer
    

部分接口只接受普通 `ArrayBuffer`，如果传入 `SharedArrayBuffer` 需要先拷贝：
    
    
    if (heap.buffer.constructor.name === 'SharedArrayBuffer') {
      return new Uint8Array(heap.subarray(offset, offset + length)).buffer; // sab需要先拷贝
    }
    return heap.buffer.slice(offset, offset + length); // 非sab直接用slice
    

下面示例用 `SharedArrayBuffer` 做一个最小任务槽：主线程写入任务，Worker 轮询并消费任务，处理完成后不需要回传结果。

主线程：
    
    
    const worker = wx.createWorker('workers/logic-worker/index.js');
    const state = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
    const view = new Int32Array(state); // [hasTask, taskId]
    
    worker.postMessage({ type: 'task-state', state });
    
    function sendTask(taskId) {
      if (Atomics.load(view, 0) === 1) return; // 上一个任务还未被消费
      Atomics.store(view, 1, taskId);
      Atomics.store(view, 0, 1);
    }
    
    sendTask(1001);
    

Worker：
    
    
    function consumeTask(taskId) {
      console.log('consume task:', taskId);
      // 在这里执行耗时逻辑
    }
    
    worker.onMessage((res) => {
      if (res.type !== 'task-state') return;
    
      const view = new Int32Array(res.state);
      setInterval(() => {
        if (Atomics.compareExchange(view, 0, 1, 0) !== 1) return;
        const taskId = Atomics.load(view, 1);
        consumeTask(taskId);
      }, 16);
    });
    

### worker里调用wx系列api

新版 Worker 支持部分 wx api，比如 innerAudio、webSocket、tcp、udp 等。但在worker里调用的时候，是通过`worker`对象来调用，而不是通过`wx`对象来调用。

下面示例在 Worker 中播放一个音效：

主线程：
    
    
    const worker = wx.createWorker('workers/audio-worker/index.js');
    
    worker.postMessage({
      type: 'play-audio',
      src: 'audio/click.mp3',
    });
    

Worker：
    
    
    // workers/audio-worker/index.js
    const audio = worker.createInnerAudioContext({
      useWebAudioImplement: true,
    });
    
    audio.onError((res) => {
      console.error('audio error:', res.errMsg);
    });
    
    worker.onMessage((res) => {
      if (res.type !== 'play-audio') return;
    
      audio.src = res.src;
      audio.stop();
      audio.play();
    });
    

## Tips

  1. Worker 内代码只能 require 指定 Worker 路径内的文件，无法引用其他路径
  2. Worker 的入口文件由 [wx.createWorker()](<https://developers.weixin.qq.com/minigame/dev/api/worker/wx.createWorker.html>) 时指定，开发者可动态指定 Worker 入口文件
  3. Worker 目录内只支持放置 JS 文件，其他类型的静态文件需要放在 Worker 目录外

## 联系我们

如有任何问题，欢迎打开 [小游戏新版 Worker 能力说明](<https://page.weixin.qq.com/smartpage/p/b1_ABwAoAbdAFwGHaG6VaeQtWmlDMx?p=qPQRcR>) 文档，扫二维码加入官方的技术交流群。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/56617deb-b17d-4cf1-bccd-71d2c41ccc76.svg)文档变更日志（1条）

2026 年 08 月 10 日

修改多线程支持版本

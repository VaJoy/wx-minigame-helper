---
title: "WebAudioContext"
type: api
category: api/media/audio
api: "WebAudioContext"
source: https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.html
---

# WebAudioContext

> 基础库 2.19.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

WebAudioContext 实例，通过[wx.createWebAudioContext](<wx.createWebAudioContext.md>) 接口获取该实例。

## 属性

### string state

当前WebAudio上下文的状态。可能的值如下：suspended（暂停）、running（正在运行）、closed（已关闭）。需要注意的是，不要在 audioContext close后再访问state属性

### function onstatechange

可写属性，开发者可以对该属性设置一个监听函数，当WebAudio状态改变的时候，会触发开发者设置的监听函数。

### number currentTime

获取当前上下文的时间戳。

### [WebAudioContextNode](<WebAudioContextNode.md>) destination

当前上下文的最终目标节点，一般是音频渲染设备。

### [AudioListener](<AudioListener.md>) listener

空间音频监听器。

### number sampleRate

采样率，通常在8000-96000之间，通常44100hz的采样率最为常见。

## 方法

### [Promise WebAudioContext.close()](<WebAudioContext.close.md>)

关闭WebAudioContext

### [Promise WebAudioContext.resume()](<WebAudioContext.resume.md>)

同步恢复已经被暂停的WebAudioContext上下文

### [Promise WebAudioContext.suspend()](<WebAudioContext.suspend.md>)

同步暂停WebAudioContext上下文

### [IIRFilterNode WebAudioContext.createIIRFilter(Array.<number> feedforward, Array.<number> feedback)](<WebAudioContext.createIIRFilter.md>)

创建一个IIRFilterNode

### [WaveShaperNode WebAudioContext.createWaveShaper()](<WebAudioContext.createWaveShaper.md>)

创建一个WaveShaperNode

### [ConstantSourceNode WebAudioContext.createConstantSource()](<WebAudioContext.createConstantSource.md>)

创建一个ConstantSourceNode

### [OscillatorNode WebAudioContext.createOscillator()](<WebAudioContext.createOscillator.md>)

创建一个OscillatorNode

### [GainNode WebAudioContext.createGain()](<WebAudioContext.createGain.md>)

创建一个GainNode

### [PeriodicWaveNode WebAudioContext.createPeriodicWave(Float32Array real, Float32Array imag, object constraints)](<WebAudioContext.createPeriodicWave.md>)

创建一个PeriodicWaveNode

### [BiquadFilterNode WebAudioContext.createBiquadFilter()](<WebAudioContext.createBiquadFilter.md>)

创建一个BiquadFilterNode

### [BufferSourceNode WebAudioContext.createBufferSource()](<WebAudioContext.createBufferSource.md>)

创建一个BufferSourceNode实例，通过AudioBuffer对象来播放音频数据。

### [ChannelMergerNode WebAudioContext.createChannelMerger(number numberOfInputs)](<WebAudioContext.createChannelMerger.md>)

创建一个ChannelMergerNode

### [ChannelSplitterNode WebAudioContext.createChannelSplitter(number numberOfOutputs)](<WebAudioContext.createChannelSplitter.md>)

创建一个ChannelSplitterNode

### [DelayNode WebAudioContext.createDelay(number maxDelayTime)](<WebAudioContext.createDelay.md>)

创建一个DelayNode

### [DynamicsCompressorNode WebAudioContext.createDynamicsCompressor()](<WebAudioContext.createDynamicsCompressor.md>)

创建一个DynamicsCompressorNode

### [ScriptProcessorNode WebAudioContext.createScriptProcessor(number bufferSize, number numberOfInputChannels, number numberOfOutputChannels)](<WebAudioContext.createScriptProcessor.md>)

创建一个ScriptProcessorNode

### [AnalyserNode WebAudioContext.createAnalyser()](<WebAudioContext.createAnalyser.md>)

创建一个 AnalyserNode 。可以用来获取音频时间和频率数据，以及实现数据可视化。

### [PannerNode WebAudioContext.createPanner()](<WebAudioContext.createPanner.md>)

创建一个PannerNode

### [AudioBuffer WebAudioContext.createBuffer(number numOfChannels, number length, number sampleRate)](<WebAudioContext.createBuffer.md>)

创建一个AudioBuffer，代表着一段驻留在内存中的短音频

### [AudioBuffer WebAudioContext.decodeAudioData(ArrayBuffer audioData, function successCallback, function errorCallback)](<WebAudioContext.decodeAudioData.md>)

异步解码一段资源为AudioBuffer。

## 示例代码
    
    
    // 监听状态
    const audioCtx = wx.createWebAudioContext()
    audioCtx.onstatechange = () => {
      console.log(ctx.state)
    }
    setTimeout(audioCtx.suspend, 1000)
    setTimeout(audioCtx.resume, 2000)

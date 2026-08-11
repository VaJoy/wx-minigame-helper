# 媒体 / 音频

> 路径：`api/media/audio/`　|　本目录 70 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [AudioBuffer.copyFromChannel()](AudioBuffer.copyFromChannel.md) | 从AudioBuffer的指定频道复制到数组终端。 |
| [AudioBuffer.copyToChannel(Float32Array source, number channelNumber, number startInChannel)](AudioBuffer.copyToChannel.md) | 从指定数组复制样本到audioBuffer的特定通道 |
| [Float32Array AudioBuffer.getChannelData(number channel)](AudioBuffer.getChannelData.md) | 返回一个 Float32Array，包含了带有频道的PCM数据，由频道参数定义（有0代表第一个频道） |
| [AudioBuffer](AudioBuffer.md) |  |
| [AudioListener](AudioListener.md) |  |
| [AudioParam](AudioParam.md) |  |
| [BufferSourceNode.connect(AudioNode|AudioParam destination)](BufferSourceNode.connect.md) | 连接到一个指定目标。这个指定的目标可能是另一个 AudioNode（从而将音频数据引导到下一个指定节点）或一个AudioParam, 以便上一个节点的输出数据随着时间流逝能自动地对下一个参数值进行改变 |
| [BufferSourceNode.disconnect()](BufferSourceNode.disconnect.md) | 与已连接的目标节点断开连接 |
| [BufferSourceNode](BufferSourceNode.md) |  |
| [BufferSourceNode.start(number when, number offset, number duration)](BufferSourceNode.start.md) | 音频源开始播放 |
| [BufferSourceNode.stop(number when)](BufferSourceNode.stop.md) | 停止播放 |
| [InnerAudioContext.destroy()](InnerAudioContext.destroy.md) | 销毁当前实例 |
| [InnerAudioContext](InnerAudioContext.md) |  |
| [InnerAudioContext.offCanplay(function listener)](InnerAudioContext.offCanplay.md) | 移除音频进入可以播放状态的事件的监听函数 |
| [InnerAudioContext.offEnded(function listener)](InnerAudioContext.offEnded.md) | 移除音频自然播放至结束的事件的监听函数 |
| [InnerAudioContext.offError(function listener)](InnerAudioContext.offError.md) | 移除音频播放错误事件的监听函数 |
| [InnerAudioContext.offPause(function listener)](InnerAudioContext.offPause.md) | 移除音频暂停事件的监听函数 |
| [InnerAudioContext.offPlay(function listener)](InnerAudioContext.offPlay.md) | 移除音频播放事件的监听函数 |
| [InnerAudioContext.offSeeked(function listener)](InnerAudioContext.offSeeked.md) | 移除音频完成跳转操作的事件的监听函数 |
| [InnerAudioContext.offSeeking(function listener)](InnerAudioContext.offSeeking.md) | 移除音频进行跳转操作的事件的监听函数 |
| [InnerAudioContext.offStop(function listener)](InnerAudioContext.offStop.md) | 移除音频停止事件的监听函数 |
| [InnerAudioContext.offTimeUpdate(function listener)](InnerAudioContext.offTimeUpdate.md) | 移除音频播放进度更新事件的监听函数 |
| [InnerAudioContext.offWaiting(function listener)](InnerAudioContext.offWaiting.md) | 移除音频加载中事件的监听函数 |
| [InnerAudioContext.onCanplay(function listener)](InnerAudioContext.onCanplay.md) | 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放 |
| [InnerAudioContext.onEnded(function listener)](InnerAudioContext.onEnded.md) | 监听音频自然播放至结束的事件 |
| [InnerAudioContext.onError(function listener)](InnerAudioContext.onError.md) | 监听音频播放错误事件 |
| [InnerAudioContext.onPause(function listener)](InnerAudioContext.onPause.md) | 监听音频暂停事件 |
| [InnerAudioContext.onPlay(function listener)](InnerAudioContext.onPlay.md) | 监听音频播放事件 |
| [InnerAudioContext.onSeeked(function listener)](InnerAudioContext.onSeeked.md) | 监听音频完成跳转操作的事件 |
| [InnerAudioContext.onSeeking(function listener)](InnerAudioContext.onSeeking.md) | 监听音频进行跳转操作的事件 |
| [InnerAudioContext.onStop(function listener)](InnerAudioContext.onStop.md) | 监听音频停止事件 |
| [InnerAudioContext.onTimeUpdate(function listener)](InnerAudioContext.onTimeUpdate.md) | 监听音频播放进度更新事件 |
| [InnerAudioContext.onWaiting(function listener)](InnerAudioContext.onWaiting.md) | 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 |
| [InnerAudioContext.pause()](InnerAudioContext.pause.md) | 暂停。暂停后的音频再播放会从暂停处开始播放 |
| [InnerAudioContext.play()](InnerAudioContext.play.md) | 播放 |
| [InnerAudioContext.seek(number position)](InnerAudioContext.seek.md) | 跳转到指定位置 |
| [InnerAudioContext.stop()](InnerAudioContext.stop.md) | 停止。停止后的音频再播放会从头开始播放。 |
| [Promise MediaAudioPlayer.addAudioSource(VideoDecoder source)](MediaAudioPlayer.addAudioSource.md) | 添加音频源 |
| [Promise MediaAudioPlayer.destroy()](MediaAudioPlayer.destroy.md) | 销毁播放器 |
| [MediaAudioPlayer](MediaAudioPlayer.md) |  |
| [Promise MediaAudioPlayer.removeAudioSource(VideoDecoder source)](MediaAudioPlayer.removeAudioSource.md) | 移除音频源 |
| [Promise MediaAudioPlayer.start()](MediaAudioPlayer.start.md) | 启动播放器 |
| [Promise MediaAudioPlayer.stop()](MediaAudioPlayer.stop.md) | 停止播放器 |
| [Promise WebAudioContext.close()](WebAudioContext.close.md) | 关闭WebAudioContext |
| [AnalyserNode WebAudioContext.createAnalyser()](WebAudioContext.createAnalyser.md) | 创建一个 AnalyserNode 。可以用来获取音频时间和频率数据，以及实现数据可视化。 |
| [BiquadFilterNode WebAudioContext.createBiquadFilter()](WebAudioContext.createBiquadFilter.md) | 创建一个BiquadFilterNode |
| [AudioBuffer WebAudioContext.createBuffer(number numOfChannels, number length, number sampleRate)](WebAudioContext.createBuffer.md) | 创建一个AudioBuffer，代表着一段驻留在内存中的短音频 |
| [BufferSourceNode WebAudioContext.createBufferSource()](WebAudioContext.createBufferSource.md) | 创建一个BufferSourceNode实例，通过AudioBuffer对象来播放音频数据。 |
| [ChannelMergerNode WebAudioContext.createChannelMerger(number numberOfInputs)](WebAudioContext.createChannelMerger.md) | 创建一个ChannelMergerNode |
| [ChannelSplitterNode WebAudioContext.createChannelSplitter(number numberOfOutputs)](WebAudioContext.createChannelSplitter.md) | 创建一个ChannelSplitterNode |
| [ConstantSourceNode WebAudioContext.createConstantSource()](WebAudioContext.createConstantSource.md) | 创建一个ConstantSourceNode |
| [DelayNode WebAudioContext.createDelay(number maxDelayTime)](WebAudioContext.createDelay.md) | 创建一个DelayNode |
| [DynamicsCompressorNode WebAudioContext.createDynamicsCompressor()](WebAudioContext.createDynamicsCompressor.md) | 创建一个DynamicsCompressorNode |
| [GainNode WebAudioContext.createGain()](WebAudioContext.createGain.md) | 创建一个GainNode |
| [IIRFilterNode WebAudioContext.createIIRFilter(Array.<number> feedforward, Array.<number> feedback)](WebAudioContext.createIIRFilter.md) | 创建一个IIRFilterNode |
| [OscillatorNode WebAudioContext.createOscillator()](WebAudioContext.createOscillator.md) | 创建一个OscillatorNode |
| [PannerNode WebAudioContext.createPanner()](WebAudioContext.createPanner.md) | 创建一个PannerNode |
| [PeriodicWaveNode WebAudioContext.createPeriodicWave(Float32Array real, Float32Array imag, object constraints)](WebAudioContext.createPeriodicWave.md) | 创建一个PeriodicWaveNode |
| [ScriptProcessorNode WebAudioContext.createScriptProcessor(number bufferSize, number numberOfInputChannels, number numberOfOutputChannels)](WebAudioContext.createScriptProcessor.md) | 创建一个ScriptProcessorNode |
| [WaveShaperNode WebAudioContext.createWaveShaper()](WebAudioContext.createWaveShaper.md) | 创建一个WaveShaperNode |
| [AudioBuffer WebAudioContext.decodeAudioData(ArrayBuffer audioData, function successCallback, function errorCallback)](WebAudioContext.decodeAudioData.md) | 异步解码一段资源为AudioBuffer。 |
| [WebAudioContext](WebAudioContext.md) |  |
| [Promise WebAudioContext.resume()](WebAudioContext.resume.md) | 同步恢复已经被暂停的WebAudioContext上下文 |
| [Promise WebAudioContext.suspend()](WebAudioContext.suspend.md) | 同步暂停WebAudioContext上下文 |
| [WebAudioContextNode](WebAudioContextNode.md) |  |
| [InnerAudioContext wx.createInnerAudioContext(Object object)](wx.createInnerAudioContext.md) | 创建内部 audio 上下文 InnerAudioContext 对象。 |
| [MediaAudioPlayer wx.createMediaAudioPlayer()](wx.createMediaAudioPlayer.md) | 创建媒体音频播放器对象 MediaAudioPlayer 对象，可用于播放视频解码器 VideoDecoder 输出的音频。 |
| [WebAudioContext wx.createWebAudioContext()](wx.createWebAudioContext.md) | 创建 WebAudio 上下文。 |
| [wx.getAvailableAudioSources(Object object)](wx.getAvailableAudioSources.md) | 获取当前支持的音频输入源 |
| [wx.setInnerAudioOption(Object object)](wx.setInnerAudioOption.md) | 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。 |

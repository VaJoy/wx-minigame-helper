---
title: "VideoDecoder"
type: api
category: api/media/video-decoder
api: "VideoDecoder"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html
---

# VideoDecoder

> 基础库 2.11.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

可通过 [wx.createVideoDecoder](<wx.createVideoDecoder.md>) 创建。

[VideoDecoder](<VideoDecoder.md>) 视频解码器，可以进行视频解码相关操作，逐帧获取解码数据

## 方法

### [Promise VideoDecoder.start(Object object)](<VideoDecoder.start.md>)

开始解码

### [Promise VideoDecoder.seek(number position)](<VideoDecoder.seek.md>)

跳到某个时间点解码

### [Promise VideoDecoder.stop()](<VideoDecoder.stop.md>)

停止解码

### [Promise VideoDecoder.remove()](<VideoDecoder.remove.md>)

移除解码器

### [Object VideoDecoder.getFrameData()](<VideoDecoder.getFrameData.md>)

获取下一帧的解码数据

### [VideoDecoder.on(string eventName, function callback)](<VideoDecoder.on.md>)

注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行

### [VideoDecoder.off(string eventName, function callback)](<VideoDecoder.off.md>)

取消监听录制事件。当对应事件触发时，该回调函数不再执行

## 示例代码

```js
const decoder = wx.createVideoDecoder()

// 监听解码开始事件
decoder.on('start', (res) => {
  console.log('解码开始', res.width, res.height)
})

// 监听解码结束事件
decoder.on('ended', () => {
  console.log('解码结束')
  decoder.remove()
})

// 开始解码
decoder.start({
  source: 'http://example.com/video.mp4', // 视频源文件
  abortAudio: true, // 不需要音频轨道
}).then(() => {
  // 解码已开始，逐帧获取数据
  let frameData = decoder.getFrameData()
  while (frameData) {
    console.log('帧数据:', frameData.width, frameData.height)
    // frameData.data 为 ArrayBuffer 类型的帧数据
    // frameData.pkPts 为帧原始 pts
    frameData = decoder.getFrameData()
  }
})
```

> 也可以在微信开发者工具中[预览完整效果](https://developers.weixin.qq.com/s/dez7LZm57hIy)

## 低版本异步接口兼容

对基础库 2.16.1 版本前的 videoDecoder，所有的接口都没有返回 Promise 对象，若需要兼容低版本，则可采用如下方式的写法：
    
    
    // 启动 videoDecoder
    await new Promise(resolve => {
      decoder.on('start', resolve)
      decoder.start({
        source: 'http://...',
        abortAudio: true, // 不需要音频
      })
    })

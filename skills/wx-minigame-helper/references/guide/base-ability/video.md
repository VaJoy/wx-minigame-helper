---
title: "视频"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/video.html
---

# 视频

小游戏中有两种播放视频的 API，[Video](<https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.html>) 和 [VideoDecoder](<https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html>)

## Video

通常情况下，[Video](<https://developers.weixin.qq.com/minigame/dev/api/media/video/Video.html>)满足大部分播放视频的需求场景。

可以使用 [wx.createVideo()](<https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.createVideo.html>) 在游戏画布之上插入视频，也可以通过设置`underGameView`参数将视频放在游戏画布之下渲染

### 示例代码
    
    
    const windowInfo = wx.getWindowInfo();
    const { windowWidth, windowHeight } = windowInfo;
    
    const video = wx.createVideo({
      src: "https://baikebcs.bdimg.com/baike-other/big-buck-bunny.mp4",
      width: windowWidth,
      height: windowHeight,
      loop: true,
      controls: false,
      showProgress: false,
      showProgressInControlMode: false,
      autoplay: true,
      showCenterPlayBtn: false,
      underGameView: true,
      enableProgressGesture: false,
      objectFit: "fill"
    });
    
    video.onEnded(() => {
      console.log("视频播放结束");
      video.destroy(); // 销毁视频
    });
    
    video.play(); // 播放视频
    
    video.pause(); // 暂停视频
    
    video.seek(10); // 跳转进度
    

注意：不推荐使用`requestFullScreen`，全屏是交由手机系统处理的，可能会有异常，建议通过修改宽高的方式把视频的宽高设置为屏幕宽高

### 代码片段

我们提供了可运行的[代码片段](<https://developers.weixin.qq.com/s/De7bYWm47KUI>)，可以预览代码片段并在真机进行体验

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/De7bYWm47KUI> "在开发者工具中预览效果")

## VideoDecoder

如果你需要将视频渲染到纹理中，例如 3D 博物馆等场景，需要使用[VideoDecoder](<https://developers.weixin.qq.com/minigame/dev/api/media/video-decoder/VideoDecoder.html>)

### 示例代码
    
    
    // 开发者工具不支持，需要使用预览在真机进行调试
    const videoDecoder = wx.createVideoDecoder({
      type: "wemedia" // 3.0.0以上基础库支持传入type参数
    });
    videoDecoder.on("start", res => {
      console.warn("开始解码", res);
    });
    videoDecoder.on("stop", res => {
      console.warn("停止解码", res);
    });
    videoDecoder.on("seek", res => {
      console.warn("跳转进度", res);
    });
    videoDecoder.on("ended", res => {
      console.warn("播放完成", res);
    });
    videoDecoder.start({
      source: "https://baikebcs.bdimg.com/baike-other/big-buck-bunny.mp4"
    }); // 开始解码
    
    // 帧循环时绘制当前解码的视频数据
    const update = () => {
      if (typeof render != "undefined") {
        const frameData = videoDecoder.getFrameData();
        if (frameData) {
          const { width, height, data } = frameData;
    
          // 此处只是示意，省略其他gl上下文，完整可运行示例查看代码片段
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8ClampedArray(data));
        }
      }
      requestAnimationFrame(update);
    };
    

### 注意事项

  1. 开发者工具不支持`VideoDecoder`，安卓和IOS均已支持
  2. IOS高性能和IOS高性能+均已支持`VideoDecoder`，IOS高性能+需要在start时传入`videoDataType: 2`，具体的实现参考下面的代码片段

### 代码片段

我们提供了视频解码的[代码片段](<https://developers.weixin.qq.com/s/ApFmwWmQ8R4Z>)，可以预览代码片段并在真机进行体验

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/ApFmwWmQ8R4Z> "在开发者工具中预览效果")

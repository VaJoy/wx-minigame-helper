---
title: "音频"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/audio.html
---

# 音频

小游戏中有两种播放音频的 API，[InnerAudio](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html>) 和 [WebAudio](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.html>)

  * 提示：如果你使用游戏引擎进行开发，游戏引擎可能已经适配了音频处理，你只需要使用游戏引擎中的组件即可，例如在Unity场景下，可以直接使用AudioSource组件进行播放

## InnerAudio

[InnerAudio](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html>)播放音频的方式简便快捷，且支持流式播放，但性能低于使用[WebAudio](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.html>)的播放方式，适用于播放较大音频文件，比如背景音乐。

### 相关API

创建：[wx.createInnerAudioContext](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html>)

播放：[InnerAudioContext.play](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.play.html>)

音频配置：[wx.setInnerAudioOption](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.setInnerAudioOption.html>)

### 示例代码
    
    
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭
    });
    innerAudioContext.src = 'https://wx_test.mp3'; // 需要自行替换链接
    innerAudioContext.loop = true; // 设置循环播放
    // innerAudioContext.autoplay = true; // 当可以播放时自动开始播放
    innerAudioContext.onError(res => {
      console.log('异常', res);
    });
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    innerAudioContext.onCanplay(() => {
      console.log('可以播放了')
      innerAudioContext.play(); // 播放
    });
    innerAudioContext.onStop(() => {
      console.log('播放被停止')
    })
    innerAudioContext.onEnded(() => {
      console.log('播放结束')
    });
    innerAudioContext.pause(); // 暂停
    innerAudioContext.stop(); // 停止
    innerAudioContext.destroy(); // 释放音频资源
    
    wx.onShow(() => {
      innerAudioContext.play(); // 当小游戏退后台回来时，恢复播放
    })
    
    wx.onAudioInterruptionEnd(function () {
      innerAudioContext.play() // 当被其他事件中断播放结束后（如电话），恢复播放
    })
    

### 支持的格式

不同音频格式在iOS和Android会有差异，参考[这里](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.html#%E6%94%AF%E6%8C%81%E6%A0%BC%E5%BC%8F>)。

### 注意事项

1：ios高性能模式不支持useWebAudioImplement

2：ios长音频不支持设置playbackRate

### 最佳实践

#### 复用已有的音频实例

对于相同的音效，应该复用已有的音频实例，而不是重新创建一个音频实例。

#### 及时销毁不需要的音频实例

如果一个音频不再需要使用了，可以调用 [InnerAudioContext.destroy()](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/InnerAudioContext.destroy.html>) 接口提前销毁这个实例。

#### 同时播放的音频数量限制

由于系统限制，在 Android 上最多同时播放 10 个音频，超过的部分会做有损处理，对开发者来说不感知，但开发者应尽量避免同时播放过多音频。

## WebAudio

[WebAudio](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/WebAudioContext.html>)播放性能好，能力丰富，但占用内存较大，建议短音频、播放频繁的音效使用。

WebAudio 有两种使用方式：

  1. 使用[wx.createInnerAudioContext](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createInnerAudioContext.html>)并同时传入`useWebAudioImplement`参数为`true`，示例代码如上文

  2. 使用[wx.createWebAudioContext](<https://developers.weixin.qq.com/minigame/dev/api/media/audio/wx.createWebAudioContext.html>)

WebAudio的开发调用方式和其他`JavaScript`环境基本是相同的，建议直接查阅[Web_Audio_API](<https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API>)进行学习

### 示例代码
    
    
    const audioCtx = wx.createWebAudioContext()
    
    const loadAudio = (url) => {
      return new Promise((resolve, reject) => {
        wx.request({
          url,
          responseType: 'arraybuffer',
          success: res => {
            console.log('res.data', res.data)
            audioCtx.decodeAudioData(res.data, buffer => {
              resolve(buffer)
            }, err => {
              console.error('decodeAudioData fail', err)
              reject()
            })
          },
          fail: res => {
            console.error('request fail', res)
            reject()
          }
        })
      })
    }
    
    const play = () => {
      // 需要自行替换链接
      loadAudio('https://wx_test.mp3').then(buffer => {
        let source = audioCtx.createBufferSource()
        source.buffer = buffer
        source.onended = () => {
          console.log('播放结束')
        };
        source.connect(audioCtx.destination)
        source.start()
      }).catch(() => {
        console.log('fail')
      })
    }
    
    play();
    
    wx.onShow(() => {
      audioCtx.resume(); // 当小游戏退后台回来时，恢复播放
    })
    
    wx.onAudioInterruptionEnd(function () {
      audioCtx.resume() // 当被其他事件中断播放结束后（如电话），恢复播放
    })
    

### 注意事项

WebAudio 在 IOS 高性能模式比较特殊，需要适配以下情况：

  1. IOS 系统 17.5 以上版本，小游戏退后台后无法恢复音频播放，需要销毁后重新创建
  2. 旧版本微信客户端 基础库 2.25.3 以上版本，createWebAudioContext 之后需要主动调用一次 resume()

    
    
    const { SDKVersion } = wx.getAppBaseInfo ? wx.getAppBaseInfo() : wx.getSystemInfoSync();
    const { system } = wx.getDeviceInfo ? wx.getDeviceInfo() : wx.getSystemInfoSync();
    const systemVersionArr = system ? system.split(' ') : [];
    const systemVersion = systemVersionArr.length ? systemVersionArr[systemVersionArr.length - 1] : '';
    let webAutoResumeTicker = null;
    function createWebAudioContext() {
      GameGlobal.audioCtx = wx.createWebAudioContext();
      if (compareVersion(SDKVersion, "2.25.3") && GameGlobal.isIOSHighPerformanceMode) {
        webAutoResumeTicker = setTimeout(() => {
          resumeWebAudio();
        }, 2000);
      }
    }
    createWebAudioContext();
    wx.onHide(() => {
      if (webAutoResumeTicker) {
        clearTimeout(webAutoResumeTicker);
        webAutoResumeTicker = null;
      }
      GameGlobal.audioCtx.suspend();
    });
    wx.onShow(() => {
      if (compareVersion(systemVersion, '17.5') && GameGlobal.isIOSHighPerformanceMode) {
        GameGlobal.audioCtx.close();
        createWebAudioContext();
      } else {
        GameGlobal.audioCtx.resume();
      }
    });
    

提示：compareVersion 定义可见[版本号比较](<../runtime/client-lib/compatibility.md>)。

### 代码片段

我们提供了可运行的[代码片段](<https://developers.weixin.qq.com/s/i6Xs7gmq7zXK>)，可以预览代码片段并在真机进行体验

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/i6Xs7gmq7zXK> "在开发者工具中预览效果")

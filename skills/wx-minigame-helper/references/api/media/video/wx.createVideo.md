---
title: "Video wx.createVideo(Object object)"
type: api
category: api/media/video
api: "wx.createVideo"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.createVideo.html
---

# [Video](<Video.md>) wx.createVideo(Object object)

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建视频

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  x | number | 0 | 否 | 视频的左上角横坐标 |   
|  y | number | 0 | 否 | 视频的左上角纵坐标 |   
|  width | number | 300 | 否 | 视频的宽度 |   
|  height | number | 150 | 否 | 视频的高度 |   
|  src | string |  | 是 | 视频的资源地址 |   
|  poster | string |  | 否 | 视频的封面 |   
|  initialTime | number | 0 | 否 | 视频的初始播放位置，单位为 s 秒 |   
|  playbackRate | number | 1.0 | 否 | 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 |   
|  live | boolean | false | 否 | 视频是否为直播 |   
|  objectFit | string | 'contain' | 否 | 视频的缩放模式 |   
| |  合法值 | 说明  
---|---  
fill | 填充，视频拉伸填满整个容器，不保证保持原有长宽比例  
contain | 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白  
cover | 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见  
|  controls | boolean | true | 否 | 视频是否显示控件 |   
|  showProgress | boolean | true | 否 | 是否显示视频底部进度条 | [2.12.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  showProgressInControlMode | boolean | true | 否 | 是否显示控制栏的进度条 | [2.12.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  backgroundColor | string | '#000000' | 否 | 视频背景颜色 | [2.12.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  autoplay | boolean | false | 否 | 视频是否自动播放 |   
|  loop | boolean | false | 否 | 视频是否是否循环播放 |   
|  muted | boolean | false | 否 | 视频是否禁音播放 |   
|  obeyMuteSwitch | boolean | false | 否 | 视频是否遵循系统静音开关设置（仅iOS） | [2.4.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  enableProgressGesture | boolean | true | 否 | 是否启用手势控制播放进度 |   
|  enablePlayGesture | boolean | false | 否 | 是否开启双击播放的手势 |   
|  showCenterPlayBtn | boolean | true | 否 | 是否显示视频中央的播放按钮 |   
|  underGameView | boolean | false | 否 | 视频是否显示在游戏画布之下（配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas实现透明效果） | [2.11.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  autoPauseIfNavigate | boolean | true | 否 | 视频跳转后自动暂停播放 |   
|  autoPauseIfOpenNative | boolean | true | 否 | 视频跳转原生页后自动暂停播放 |   
  
## 返回值

### [Video](<Video.md>)

一个视频对象，可以通过设置该对象上的属性和调用该对象上的方法来控制视频


## 示例

```js
        wx.cloud.downloadFile({
            fileID: 'cloud://xxxx/demo.mp4',
            success(downRes) {
                if (downRes.statusCode !== 200) return

                const windowInfo = wx.getWindowInfo();
                const { windowWidth, windowHeight } = windowInfo;

                const video = wx.createVideo({
                    src: downRes.tempFilePath, // 关键：填下载到的本地临时路径
                    x: 0,
                    y: 0,
                    width: windowWidth,            // 默认 300x150；要全屏就填窗口宽高
                    height: windowHeight,
                    controls: false,        // 显示播放/进度控件
                    autoplay: true,        
                    underGameView: true,     // false=覆盖在画布之上, true=置于画布之下
                    objectFit: windowWidth > windowHeight ? 'contain' : 'cover',   // 竖屏配置，如果是横屏游戏就反着来
                    loop: false
                })
                video.onPlay(() => console.log('开始播放'))
                video.onEnded(() => { video.destroy() })        // 播完销毁，移除覆盖层
                video.onError(e => console.error('播放失败：', e))
                // 没开 autoplay 就：video.play()
            },
            fail(e) { console.error('下载失败：', e) }
        })
```

## 注意事项

在 Cocos Creator 中，如果希望视频播放于游戏画布之下，除了 `wx.createVideo` 中的 `underGameView` 参数值要设为 `true`，还需要：
- 在 “项目设置 - 宏” 里勾选上 `ENABLE_TRANSPARENT_CANVAS`。
- 摄像机的 `ClearFlags` 设为 `SOLID_COLOR`，`ClearColor` 的 alpha 设为 `0`。

在 iOS 上， 视频画面初始化时，iOS 系统会强制附加一个缩放/位移过渡动画（约 0.5~1 秒），如果希望避免看到这个动画，可以提前创建、预置位置在视口外侧，待播放时再调整回视口：

```js
// 提前创建（比如游戏启动时），直接放在最终要显示的位置
this.video = wx.createVideo({
  // 略...
  autoplay: false,    // 关闭自动播放
  x: windowWidth * 2, // 隐藏在视口外
  y: windowHeight * 2,
});

// 需要播放时，直接播放（此时位置已经是正确的，不会有移动动画）
playVideo() {
  this.video.x = 0;  // 移动视频到可见位置
  this.video.y = 0;
  this.video.play();
}
```
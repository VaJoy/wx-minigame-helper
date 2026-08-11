---
title: "VKSession wx.createVKSession(Object object)"
type: api
category: api/ai/visionkit
api: "wx.createVKSession"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/wx.createVKSession.html
---

# [VKSession](<VKSession.md>) wx.createVKSession(Object object)

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建 vision kit 会话对象。详见[指南](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/base.html>)

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  version | string |  | 否 | vision kit 版本。 | [2.22.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明  
---|---  
v1 | v1适用于用户在平面场景下，例如桌面，地面，泛平面场景，放置虚拟物体，不提供真实世界距离。用户放置物体时，手机相机倾斜向下对着目标平面点击即可，具有广泛的机型支持  
v2 | v2提供真实物理距离的 ar 定位功能，提供平面识别功能，用户在平面范围点击放置虚拟物体的功能，具有[有限的机型支持](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/plane.html#%E9%99%84%E5%BD%95>)。iOS 设备在基础库 2.22.0 开始支持v2。安卓设备在基础库 2.25.1 开始支持v2，另外，安卓v2不支持竖直平面。**使用v2算法需要初始化，移动手机进行左右平移初始化效果最佳。**  
|  track | Object |  | 是 | 跟踪能力配置，目前不同的跟踪能力之间是互斥的，默认使用平面跟踪能力。需要注意目前 track 中不同的跟踪配置存在互斥关系（比如 marker 跟踪配置和 OSD 跟踪配置不能同时存在），请按需配置。 |   
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  plane | Object |  | 是 | 平面跟踪配置 |   
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 平面跟踪配置模式 |   
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 检测横向平面 |   
2 | 检测纵向平面，只有 v2 版本支持 | [2.22.0](<../../../guide/runtime/client-lib/compatibility.md>)  
3 | 检测横向和纵向平面，只有 v2 版本支持 | [2.22.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  force | boolean | false | 否 | 是否开启强制使用V2的模式，只有 v2 版本支持 | [3.6.5](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  marker | boolean |  | 否 | marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力 | [2.24.5](<../../../guide/runtime/client-lib/compatibility.md>)  
|  OSD | boolean |  | 否 | OSD 跟踪配置 | [2.24.5](<../../../guide/runtime/client-lib/compatibility.md>)  
|  depth | Object |  | 否 | 深度识别配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/depth.html>)。 | [3.0.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 深度识别模式 | [3.0.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 通过摄像头实时检测 | [3.0.0](<../../../guide/runtime/client-lib/compatibility.md>)  
2 | 静态图片检测 | [3.0.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  face | Object |  | 否 | 人脸检测配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html>)。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。 | [2.25.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 人脸检测模式 | [2.25.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 通过摄像头实时检测 | [2.25.0](<../../../guide/runtime/client-lib/compatibility.md>)  
2 | 静态图片检测 | [2.25.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  OCR | Object |  | 否 | OCR检测配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/ocr.html>)。 | [2.27.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | OCR检测模式 | [2.27.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 通过摄像头实时检测 | [2.27.0](<../../../guide/runtime/client-lib/compatibility.md>)  
2 | 静态图片检测 | [2.27.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  IDCard | Object |  | 否 | 身份证检测配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/idcard.html>)。 | [3.3.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 身份证检测模式 | [3.3.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
2 | 静态图片检测 | [3.3.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  body | Object |  | 否 | 人体检测配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/body.html>)。 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 人体检测模式 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 通过摄像头实时检测 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
2 | 静态图片检测 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  hand | Object |  | 否 | 手势检测配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/hand.html>)。 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 手势检测模式 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 通过摄像头实时检测 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
2 | 静态图片检测 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  shoe | Object |  | 否 | 鞋部检测配置。用法详情[指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/shoe.html>)。 | [3.2.1](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  mode | number |  | 是 | 鞋部检测模式 | [3.2.1](<../../../guide/runtime/client-lib/compatibility.md>)  
| |  合法值 | 说明 | 最低版本  
---|---|---  
1 | 通过摄像头实时检测 | [3.2.1](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  threeDof | boolean |  | 否 | 提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。 | [2.28.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
|  gl | WebGLRenderingContext |  | 否 | 绑定的 WebGLRenderingContext 对象 | [2.23.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [VKSession](<VKSession.md>)

vision kit 会话对象。错误码参考 [错误码列表](<https://developers.weixin.qq.com/miniprogram/dev/framework/usability/PublicErrno.html#%E9%94%99%E8%AF%AF%E7%A0%81%E5%88%97%E8%A1%A8>)

## 示例代码

v1 版本：[VisionKit基础能力使用参考](<https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/visionkit-basic>) v2 版本：[VisionKit-v2基础能力使用参考](<https://github.com/wechat-miniprogram/miniprogram-demo/tree/master/miniprogram/packageAPI/pages/ar/visionkit-basic-v2>)
    
    
    // 以下 demo 以 v2 为例
    // 创建 session 对象
    const ssession = wx.createVKSession({
      track: {
        plane: {mode: 3},
      },
      version: 'v2',
      gl, // WebGLRenderingContext
    })
    
    // 逐帧分析
    const onFrame = timestamp => {
      // 开发者可以自己控制帧率
      const frame = session.getVKFrame(canvasWidth, canvasHeight)
        if (frame) {
          // 分析完毕，可以拿到帧对象
          doRender(frame)
        }
    
      session.requestAnimationFrame(onFrame)
    }
    session.start(err => {
      if (!err) session.requestAnimationFrame(onFrame)
    })
    
    // 渲染函数
    const doRender = frame => {
      // ...
    }

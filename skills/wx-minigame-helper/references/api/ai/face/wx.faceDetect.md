---
title: "wx.faceDetect(Object object)"
type: api
category: api/ai/face
api: "wx.faceDetect"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/face/wx.faceDetect.html
---

# wx.faceDetect(Object object)

该接口已停止维护，推荐使用 [wx.createVKSession](<../visionkit/wx.createVKSession.md>) 代替

> 基础库 2.18.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

人脸检测，使用前需要通过 wx.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据。本接口不再维护，请使用 [wx.createVKSession](<../visionkit/wx.createVKSession.md>) 接口代替。详情参考[人脸检测指南文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/visionkit/face.html>)

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
frameBuffer | ArrayBuffer |  | 是 | 图像像素点数据，每四项表示一个像素点的 RGBA  
width | number |  | 是 | 图像宽度  
height | number |  | 是 | 图像高度  
enablePoint | boolean | false | 否 | 是否返回当前图像的人脸（106 个点）  
enableConf | boolean | false | 否 | 是否返回当前图像的人脸的置信度（可表示器官遮挡情况）  
enableAngle | boolean | false | 否 | 是否返回当前图像的人脸角度信息  
enableMultiFace | boolean | false | 否 | 是否返回多张人脸的信息  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  detectRect | Object | 脸部方框数值，对象包含 height, width, originX, originY 四个属性 (origin 为方框左上角坐标)  
|  x | number | 脸部中心点横坐标，检测不到人脸则为 -1  
|  y | number | 脸部中心点纵坐标，检测不到人脸则为 -1  
|  pointArray | Array.<Object> | 标记人脸轮廓的 106 个点位置数组，数组每个对象包含 x 和 y  
|  confArray | Object | 人脸置信度，取值范围 [0, 1]，数值越大置信度越高（遮挡越少）  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  global | number | 整体可信度  
|  leftEye | number | 左眼可信度  
|  rightEye | number | 右眼可信度  
|  mouth | number | 嘴巴可信度  
|  nose | number | 鼻子可信度  
  
|  angleArray | Object | 人脸角度信息，取值范围 [-1, 1]，数值越接近 0 表示越正对摄像头  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  pitch | number | 仰俯角（点头）  
|  yaw | number | 偏航角（摇头）  
|  roll | number | 翻滚角（左右倾）  
  
|  faceInfo | Array.<Object> | 多人模式（enableMultiFace）下的人脸信息，每个对象包含上述其它属性  
  
### 特别说明

若小程序人脸识别功能涉及采集、存储用户生物特征（如人脸照片或视频、身份证和手持身份证、身份证照和免冠照等），此类型服务需使用[微信原生人脸识别接口](<https://developers.weixin.qq.com/community/develop/doc/000442d352c1202bd498ecb105c00d?highline=%E4%BA%BA%E8%84%B8%E6%A0%B8%E8%BA%AB>)。

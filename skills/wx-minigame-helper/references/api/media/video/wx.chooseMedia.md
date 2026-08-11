---
title: "wx.chooseMedia(Object object)"
type: api
category: api/media/video
api: "wx.chooseMedia"
source: https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.chooseMedia.html
---

# wx.chooseMedia(Object object)

> 基础库 2.23.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

拍摄或从手机相册中选择图片或视频。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  count | number | 9 | 否 | 最多可以选择的文件个数，基础库2.25.0前，最多可支持9个文件，2.25.0及以后最多可支持20个文件  
|  mediaType | Array.<string> | ['image', 'video'] | 否 | 文件类型  
| |  合法值 | 说明  
---|---  
image | 只能拍摄图片或从相册选择图片  
video | 只能拍摄视频或从相册选择视频  
mix | 可同时选择图片和视频  
|  sourceType | Array.<string> | ['album', 'camera'] | 否 | 图片和视频选择的来源  
| |  合法值 | 说明  
---|---  
album | 从相册选择  
camera | 使用相机拍摄  
|  maxDuration | number | 10 | 否 | 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间。不限制相册。  
|  sizeType | Array.<string> | ['original', 'compressed'] | 否 | 是否压缩所选文件，基础库2.25.0前仅对 mediaType 为 image 时有效，2.25.0及以后对全量 mediaType 有效  
|  camera | string | 'back' | 否 | 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头  
| |  合法值 | 说明  
---|---  
back | 使用后置摄像头  
front | 使用前置摄像头  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  tempFiles | Array.<Object> | 本地临时文件列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  tempFilePath | string | 本地临时文件路径 (本地路径)  
|  size | number | 本地临时文件大小，单位 B  
|  duration | number | 视频的时间长度  
|  height | number | 视频的高度  
|  width | number | 视频的宽度  
|  thumbTempFilePath | string | 视频缩略图临时文件路径  
|  fileType | string | 文件类型  
| |  合法值 | 说明  
---|---  
image | 图片  
video | 视频  
  
|  type | string | 文件类型，有效值有 image 、video、mix  
  
## 示例代码
    
    
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles[0].tempFilePath)
        console.log(res.tempFiles[0].size)
      }
    })

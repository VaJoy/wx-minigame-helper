---
title: "string Canvas.toTempFilePathSync(Object object)"
type: api
category: api/render/canvas
api: "Canvas.toTempFilePathSync"
source: https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePathSync.html
---

# string Canvas.toTempFilePathSync(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

[Canvas.toTempFilePath](<Canvas.toTempFilePath.md>) 的同步版本

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  x | number | 0 | 否 | 截取 canvas 的左上角横坐标  
|  y | number | 0 | 否 | 截取 canvas 的左上角纵坐标  
|  width | number | canvas 的宽度 | 否 | 截取 canvas 的宽度  
|  height | number | canvas 的高度 | 否 | 截取 canvas 的高度  
|  destWidth | number | canvas 的宽度 | 否 | 目标文件的宽度，会将截取的部分拉伸或压缩至该数值  
|  destHeight | number | canvas 的高度 | 否 | 目标文件的高度，会将截取的部分拉伸或压缩至该数值  
|  fileType | string | png | 否 | 目标文件的类型  
| |  合法值 | 说明  
---|---  
jpg | jpg 文件  
png | png 文件  
|  quality | number | 1.0 | 否 | jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0  
  
## 返回值

### string tempFilePath

canvas 生成的临时文件路径 (本地路径)

## 示例代码

Canvas.toTempFilePath
    
    
    canvas.toTempFilePath({
      x: 10,
      y: 10,
      width: 200,
      height: 150,
      destWidth: 400,
      destHeight: 300,
      success: (res) => {
        wx.shareAppMessage({
          imageUrl: res.tempFilePath
        })
      }
    })
    
    

Canvas.toTempFilePathSync
    
    
    let tempFilePath = canvas.toTempFilePathSync({
      x: 10,
      y: 10,
      width: 200,
      height: 150,
      destWidth: 400,
      destHeight: 300
    })
    wx.shareAppMessage({
      imageUrl: tempFilePath
    })

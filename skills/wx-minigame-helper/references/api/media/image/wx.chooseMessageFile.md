---
title: "wx.chooseMessageFile(Object object)"
type: api
category: api/media/image
api: "wx.chooseMessageFile"
source: https://developers.weixin.qq.com/minigame/dev/api/media/image/wx.chooseMessageFile.html
---

# wx.chooseMessageFile(Object object)

> 基础库 2.23.0 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

从客户端会话选择文件。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  count | number |  | 是 | 最多可以选择的文件个数，可以 0～100 |   
|  type | string | 'all' | 否 | 所选的文件的类型 |   
| |  合法值 | 说明  
---|---  
all | 从所有文件选择  
video | 只能选择视频文件  
image | 只能选择图片文件  
file | 可以选择除了图片和视频之外的其它的文件  
|  extension | Array.<string> |  | 否 | 根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。 | [2.6.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  tempFiles | Array.<Object> | 返回选择的文件的本地临时文件对象数组  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  path | string | 本地临时文件路径 (本地路径)  
|  size | number | 本地临时文件大小，单位 B  
|  name | string | 选择的文件名称  
|  type | string | 选择的文件类型  
| |  合法值 | 说明  
---|---  
video | 选择了视频文件  
image | 选择了图片文件  
file | 选择了除图片和视频的文件  
|  time | number | 选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性  
      
    
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles
      }
    })

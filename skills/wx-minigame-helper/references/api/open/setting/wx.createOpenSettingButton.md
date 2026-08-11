---
title: "OpenSettingButton wx.createOpenSettingButton(Object object)"
type: api
category: api/open/setting
api: "wx.createOpenSettingButton"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.createOpenSettingButton.html
---

# [OpenSettingButton](<OpenSettingButton.md>) wx.createOpenSettingButton(Object object)

从基础库 [3.0.0](<../../../guide/runtime/client-lib/compatibility.md>) 开始，本接口停止维护，请使用 [wx.openSetting](<wx.openSetting.md>) 代替

> 基础库 2.0.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

创建打开设置页面的按钮

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  type | string |  | 是 | 按钮的类型。  
| |  合法值 | 说明  
---|---  
text | 可以设置背景色和文本的按钮  
image | 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高  
|  text | string |  | 否 | 按钮上的文本，仅当 type 为 `text` 时有效  
|  image | string |  | 否 | 按钮的背景图片，仅当 type 为 `image` 时有效  
|  style | Object |  | 是 | 按钮的样式  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  left | number |  | 是 | 左上角横坐标  
|  top | number |  | 是 | 左上角纵坐标  
|  width | number |  | 是 | 宽度  
|  height | number |  | 是 | 高度  
|  backgroundColor | string |  | 是 | 背景颜色  
|  borderColor | string |  | 否 | 边框颜色  
|  borderWidth | number |  | 否 | 边框宽度  
|  borderRadius | number |  | 否 | 边框圆角  
|  color | string |  | 否 | 文本的颜色。格式为 6 位 16 进制数。  
|  textAlign | string |  | 否 | 文本的水平居中方式  
| |  合法值 | 说明  
---|---  
left | 居左  
center | 居中  
right | 居右  
|  fontSize | number |  | 否 | 字号  
|  lineHeight | number |  | 否 | 文本的行高  
  
## 返回值

### [OpenSettingButton](<OpenSettingButton.md>)

## 示例代码
    
    
    let button = wx.createOpenSettingButton({
      type: 'text',
      text: '打开设置页面',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    })

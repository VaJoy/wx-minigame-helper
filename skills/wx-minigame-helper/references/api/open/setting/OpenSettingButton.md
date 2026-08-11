---
title: "OpenSettingButton"
type: api
category: api/open/setting
api: "OpenSettingButton"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/OpenSettingButton.html
---

# OpenSettingButton

用户点击后打开设置页面的按钮

## 属性

### string type

按钮的类型。

**type 的合法值**

值 | 说明 | 最低版本  
---|---|---  
text | 可以设置背景色和文本的按钮 |   
image | 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高 |   
  
### string text

按钮上的文本，仅当 type 为 `text` 时有效

### string image

按钮的背景图片，仅当 type 为 `image` 时有效

### Object style

按钮的样式

| 属性 | 类型 | 说明  
---|---|---|---  
|  left | number | 左上角横坐标  
|  top | number | 左上角纵坐标  
|  width | number | 宽度  
|  height | number | 高度  
|  backgroundColor | string | 背景颜色  
|  borderColor | string | 边框颜色  
|  borderWidth | number | 边框宽度  
|  borderRadius | number | 边框圆角  
|  color | string | 文本的颜色。格式为 6 位 16 进制数。  
|  textAlign | string | 文本的水平居中方式  
| |  合法值 | 说明  
---|---  
left | 居左  
center | 居中  
right | 居右  
|  fontSize | number | 字号  
|  lineHeight | number | 文本的行高  
  
## 方法

### [OpenSettingButton.show()](<OpenSettingButton.show.md>)

显示打开设置页面按钮

### [OpenSettingButton.hide()](<OpenSettingButton.hide.md>)

隐藏打开设置页面按钮。

### [OpenSettingButton.destroy()](<OpenSettingButton.destroy.md>)

销毁打开设置页面按钮

### [OpenSettingButton.onTap(function listener)](<OpenSettingButton.onTap.md>)

监听设置页面按钮的点击事件

### [OpenSettingButton.offTap(function listener)](<OpenSettingButton.offTap.md>)

移除设置页面按钮的点击事件的监听函数

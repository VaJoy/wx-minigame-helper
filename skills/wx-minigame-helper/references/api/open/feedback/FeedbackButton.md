---
title: "FeedbackButton"
type: api
category: api/open/feedback
api: "FeedbackButton"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/feedback/FeedbackButton.html
---

# FeedbackButton

用户点击后打开意见反馈页面的按钮

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

### [FeedbackButton.show()](<FeedbackButton.show.md>)

显示意见反馈按钮

### [FeedbackButton.hide()](<FeedbackButton.hide.md>)

隐藏意见反馈按钮。

### [FeedbackButton.destroy()](<FeedbackButton.destroy.md>)

销毁意见反馈按钮

### [FeedbackButton.onTap(function listener)](<FeedbackButton.onTap.md>)

监听意见反馈按钮的点击事件

### [FeedbackButton.offTap(function listener)](<FeedbackButton.offTap.md>)

移除意见反馈按钮的点击事件的监听函数

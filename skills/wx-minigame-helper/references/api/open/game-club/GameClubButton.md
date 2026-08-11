---
title: "GameClubButton"
type: api
category: api/open/game-club
api: "GameClubButton"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/GameClubButton.html
---

# GameClubButton

游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南](<../../../guide/open-ability/community/game-club.md>)

## 属性

### string icon

游戏圈按钮的图标，仅当 type 参数为 image 时有效。

**icon 的合法值**

值 | 说明 | 最低版本  
---|---|---  
green | 绿色的图标 |   
white | 白色的图标 |   
dark | 有黑色圆角背景的白色图标 |   
light | 有白色圆角背景的绿色图标 |   
  
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

### [GameClubButton.show()](<GameClubButton.show.md>)

显示游戏圈按钮

### [GameClubButton.hide()](<GameClubButton.hide.md>)

隐藏游戏圈按钮

### [GameClubButton.destroy()](<GameClubButton.destroy.md>)

销毁游戏圈按钮

### [GameClubButton.onTap(function listener)](<GameClubButton.onTap.md>)

监听游戏圈按钮的点击事件

### [GameClubButton.offTap(function listener)](<GameClubButton.offTap.md>)

移除游戏圈按钮的点击事件的监听函数

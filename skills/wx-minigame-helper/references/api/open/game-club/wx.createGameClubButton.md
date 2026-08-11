---
title: "GameClubButton wx.createGameClubButton(Object object)"
type: api
category: api/open/game-club
api: "wx.createGameClubButton"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.createGameClubButton.html
---

# [GameClubButton](<GameClubButton.md>) wx.createGameClubButton(Object object)  
  
> 基础库 2.0.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 [游戏圈使用指南](<../../../guide/open-ability/community/game-club.md>)。从基础库2.30.3开始，新增传递openlink的特性，支持打开单帖子、话题页、活动页。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  type | string |  | 是 | 按钮的类型。 |   
| |  合法值 | 说明  
---|---  
text | 可以设置背景色和文本的按钮  
image | 只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高  
|  text | string |  | 否 | 按钮上的文本，仅当 type 为 `text` 时有效 |   
|  image | string |  | 否 | 按钮的背景图片，仅当 type 为 `image` 时有效 |   
|  style | Object |  | 是 | 按钮的样式 |   
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
  
|  icon | string |  | 是 | 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效。 |   
| |  合法值 | 说明  
---|---  
green | 绿色的图标  
white | 白色的图标  
dark | 有黑色圆角背景的白色图标  
light | 有白色圆角背景的绿色图标  
|  openlink | string |  | 否 | 设置后可以跳到对应的活动页面，具体进入「MP后台-能力地图-游戏圈」-由帖子的"游戏内跳转ID"生成 | [2.30.3](<../../../guide/runtime/client-lib/compatibility.md>)  
|  hasRedDot | boolean | true | 否 | 当传递了openlink值时，此字段生效，决定创建的按钮是否需要拥有红点，默认为true | [2.30.3](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 返回值

### [GameClubButton](<GameClubButton.md>)

## 示例代码
    
    
    let button = wx.createGameClubButton({
      icon: 'green',
      style: {
        left: 10,
        top: 76,
        width: 40,
        height: 40
      },
      openlink: 'Lv-XO1OgAuqztP4pRyKfZnY2aJKe9aE1'
    })

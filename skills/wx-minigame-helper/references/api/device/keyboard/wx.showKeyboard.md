---
title: "wx.showKeyboard(Object object)"
type: api
category: api/device/keyboard
api: "wx.showKeyboard"
source: https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.showKeyboard.html
---

# wx.showKeyboard(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

显示键盘

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  defaultValue | string |  | 是 | 键盘输入框显示的默认值  
|  maxLength | number |  | 是 | 键盘中文本的最大长度  
|  multiple | boolean |  | 是 | 是否为多行输入  
|  confirmHold | boolean |  | 是 | 当点击完成时键盘是否保持显示  
|  confirmType | string |  | 是 | 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容  
| |  合法值 | 说明  
---|---  
done | 完成  
next | 下一个  
search | 搜索  
go | 前往  
send | 发送  
|  keyboardType | string |  | 是 | 键盘类型，默认为文本类型，客户端8.0.57以上支持数字键盘  
| |  合法值 | 说明  
---|---  
text | 文本  
number | 数字  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

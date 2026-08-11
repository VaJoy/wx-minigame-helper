---
title: "string wx.decode(Object object)"
type: api
category: api/util
api: "wx.decode"
source: https://developers.weixin.qq.com/minigame/dev/api/util/wx.decode.html
---

# string wx.decode(Object object)

## 功能描述

将 ArrayBuffer 按照指定的编码格式解码成字符串

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  data | ArrayBuffer |  | 是 | 要解码的 ArrayBuffer  
|  format | string | utf8 | 否 | 编码的格式  
| |  合法值 | 说明  
---|---  
utf8 |   
utf-8 |   
ucs2 | 以小端序读取  
ucs-2 | 以小端序读取  
utf16le | 以小端序读取  
utf-16le | 以小端序读取  
latin1 |   
gbk |   
  
## 返回值

### string

解码后的字符串

## 示例代码
    
    
    var str = '我爱 Beijing 天安门';
    
    var ab = wx.encode({ data: str, format: 'utf8' });
    var result = wx.decode({ data: ab, format: 'utf8' });
    
    console.log(str === result)
    // should be true

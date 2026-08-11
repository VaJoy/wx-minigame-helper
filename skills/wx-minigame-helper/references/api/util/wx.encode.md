---
title: "ArrayBuffer wx.encode(Object object)"
type: api
category: api/util
api: "wx.encode"
source: https://developers.weixin.qq.com/minigame/dev/api/util/wx.encode.html
---

# ArrayBuffer wx.encode(Object object)

## 功能描述

将字符串按照指定的编码格式编码成 ArrayBuffer

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  data | string |  | 是 | 要编码的字符串  
|  format | string | utf8 | 否 | 编码的格式。注意：iOS高性能模式和iOS高性能+模式下，仅支持utf-8格式  
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

### ArrayBuffer

编码后的 ArrayBuffer

## 示例代码
    
    
    var str = '我爱 Beijing 天安门';
    
    var ab = wx.encode({ data: str, format: 'utf8' });
    var result = wx.decode({ data: ab, format: 'utf8' });
    
    console.log(str === result)
    // should be true

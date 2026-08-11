---
title: "wx.getExtConfig(Object object)"
type: api
category: api/ext
api: "wx.getExtConfig"
source: https://developers.weixin.qq.com/minigame/dev/api/ext/wx.getExtConfig.html
---

# wx.getExtConfig(Object object)

> 基础库 2.8.3 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

获取[第三方平台](<https://developers.weixin.qq.com/minigame/dev/devtools/ext.html>)自定义的数据字段。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
extConfig | Object | 第三方平台自定义的数据  
  
## Tips

  1. 本接口暂时无法通过 [wx.canIUse](<\(wx.canIUse\)>) 判断是否兼容，开发者需要自行判断 [wx.getExtConfig](<wx.getExtConfig.md>) 是否存在来兼容

    
    
    if (wx.getExtConfig) {
      wx.getExtConfig({
        success (res) {
          console.log(res.extConfig)
        }
      })
    }

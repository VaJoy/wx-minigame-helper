---
title: "wx.showModal(Object object)"
type: api
category: api/ui/interaction
api: "wx.showModal"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/interaction/wx.showModal.html
---

# wx.showModal(Object object)

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

显示模态对话框

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---  
title | string |  | 否 | 提示的标题 |   
content | string |  | 否 | 提示的内容 |   
showCancel | boolean | true | 否 | 是否显示取消按钮 |   
cancelText | string | 取消 | 否 | 取消按钮的文字，最多 4 个字符 |   
cancelColor | string | #000000 | 否 | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 |   
confirmText | string | 确定 | 否 | 确认按钮的文字，最多 4 个字符 |   
confirmColor | string | #576B95 | 否 | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 |   
editable | boolean | false | 否 | 是否显示输入框 | [2.17.1](<../../../guide/runtime/client-lib/compatibility.md>)  
placeholderText | string |  | 否 | 显示输入框时的提示文本 | [2.17.1](<../../../guide/runtime/client-lib/compatibility.md>)  
success | function |  | 否 | 接口调用成功的回调函数 |   
fail | function |  | 否 | 接口调用失败的回调函数 |   
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明 | 最低版本  
---|---|---|---  
content | string | editable 为 true 时，用户输入的文本 |   
confirm | boolean | 为 true 时，表示用户点击了确定按钮 |   
cancel | boolean | 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） | [1.1.0](<../../../guide/runtime/client-lib/compatibility.md>)  
  
## 示例代码
    
    
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    

## 注意

  * Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
  * Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑
  * 自基础库 2.17.1 版本起，支持传入 editable 参数，显示带输入框的弹窗

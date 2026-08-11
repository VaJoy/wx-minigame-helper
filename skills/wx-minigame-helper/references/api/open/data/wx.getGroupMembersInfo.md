---
title: "wx.getGroupMembersInfo(Object object)"
type: api
category: api/open/data
api: "wx.getGroupMembersInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupMembersInfo.html
---

# wx.getGroupMembersInfo(Object object)  
  
> 基础库 3.7.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

获取所选群成员的头像、昵称，自行在开放数据域中渲染

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
members | Array.<string> |  | 是 | 需要获取的群用户的 groupOpenId 列表  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  membersInfo | Array.<Object> | 所选用户的头像昵称列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  avatarUrl | string | 用户头像图片 url  
|  city | string | 用户所在城市  
|  country | string | 用户所在国家  
|  gender | number | 用户性别  
|  language | string | 显示 country province city 所用的语言  
|  nickName | string | 用户昵称  
|  openId | string | 用户 openId  
|  province | string | 用户所在省份  
  
## 示例代码

获取所选群用户的用户信息
    
    
    wx.getGroupMembersInfo({
      members: ["geoupopenidxxxxxx", "geoupopenidyyyyyy", "geoupopenidzzzzz"],
      success: (res) => {
        console.log('success', res.membersInfo) // [ { groupOpenId: "geoupopenidxxxxxx", nickName: "xx", avatarUrl: "https://example.jpg" }, {}, {} ]
      }
    })

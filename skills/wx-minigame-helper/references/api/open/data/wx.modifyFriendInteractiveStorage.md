---
title: "wx.modifyFriendInteractiveStorage(Object object)"
type: api
category: api/open/data
api: "wx.modifyFriendInteractiveStorage"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.modifyFriendInteractiveStorage.html
---

# wx.modifyFriendInteractiveStorage(Object object)  
  
> 基础库 2.7.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持

## 功能描述

修改好友的互动型托管数据，该接口只可在开放数据域下使用。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 | 最低版本  
---|---|---|---|---|---|---  
|  key | string |  | 是 | 需要修改的数据的 key，目前可以为 '1' - '50' |   
|  opNum | number |  | 是 | 需要修改的数值，目前只能为 1 |   
|  operation | string |  | 是 | 修改类型 |   
| |  合法值 | 说明  
---|---  
add | 加  
|  toUser | string |  | 否 | 目标好友的 openId |   
|  title | string |  | 否 | 分享标题，如果设置了这个值，则在交互成功后自动询问用户是否分享给好友（需要配置模板规则） | [2.9.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  imageUrl | string |  | 否 | 分享图片地址，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则） | [2.9.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  imageUrlId | string |  | 否 | 分享图片编号，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则） | [2.9.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  quiet | boolean | false | 否 | 是否静默修改（不弹框）。当进入场景是好友 [定向分享](<wx.shareMessageToFriend.md>) 的卡片时有效，代表分享反馈操作，此时 `toUser` 默认为原分享者的 openId | [2.9.0](<../../../guide/runtime/client-lib/compatibility.md>)  
|  success | function |  | 否 | 接口调用成功的回调函数 |   
|  fail | function |  | 否 | 接口调用失败的回调函数 |   
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |   
  
#### object.fail 回调函数

##### 参数

###### Object res

| 属性 | 类型 | 说明  
---|---|---|---  
|  errMsg | string | 错误信息  
|  errCode | number | 错误码  
| |  合法值 | 说明  
---|---  
-17006 | 非好友关系  
-17007 | 非法的 toUser openId  
-17008 | 非法的 key  
-17009 | 非法的 operation  
-17010 | 非法的操作数  
-17011 | JSServer 校验写操作失败  
  
## 示例代码
    
    
      wx.modifyFriendInteractiveStorage({
        key: '1',
        opNum: 1,
        operation: 'add',
        toUser: '', // 好友的 openId
        title: '送你 10 个金币，赶快打开游戏看看吧', // 2.9.0 支持
        imageUrl: 'image/xxx' // 2.9.0 支持
      })
    
    

## 赠送动作的校验

调用该接口需要上传 JSServer 函数 "checkInteractiveData"，该函数可用于执行赠送动作的校验逻辑，校验通过后返回结果表示本次赠送是否合法。只有 checkInteractiveData 返回了 `{ret: true}`，此次修改才会成功。

## 使用模板规则进行交互

每次调用该接口会弹窗询问用户是否确认执行该操作，2.9.0 之后版本，需要在 game.json 中设置 `modifyFriendInteractiveStorageTemplates` 来定制交互的文案。 `modifyFriendInteractiveStorageTemplates` 是一个模板数组，每一个模板需要有 key, action, object 参数，还有一个可选参数 ratio，详细说明见示例配置：
    
    
    {
      "modifyFriendInteractiveStorageTemplates": [
        {
          "key": "1", // 这个 key 与接口中同名参数相对应，不同的 key 对应不同的模板
          "action": "赠送", // 互动行为
          "object": "金币", // 互动物品
          "ratio": 10 // 物品比率，opNum * ratio 代表物品个数
        }
      ]
    }
    

最后生成的文案为 "确认 ${action} ${nickname} ${object}？"，或者 "确认 ${action} ${nickname} ${object} x ${opNum * ratio}？"

## 使用自定义文案进行交互

2.7.7 之后，2.9.0 之前的版本，文案通过 game.json 的 `modifyFriendInteractiveStorageConfirmWording` 字段配置。 配置内容可包含 nickname 变量，用 ${nickname} 表示，实际调用时会被替换成好友的昵称。示例配置：
    
    
    {
      "modifyFriendInteractiveStorageConfirmWording": "确认送给${nickname}一个体力？"
    }
    

2.9.0 之后，在 `modifyFriendInteractiveStorageTemplates` 和 `modifyFriendInteractiveStorageConfirmWording` 都存在的情况下，会优先使用前者。

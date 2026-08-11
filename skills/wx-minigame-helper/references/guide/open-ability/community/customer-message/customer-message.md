---
title: "客服消息"
type: guide
category: guide/open-ability/community/customer-message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/customer-message/customer-message.html
---

# 客服消息

## 进入客服会话

当用户调用`wx.openCustomerServiceConversation`时会进入客服会话，如果用户在会话中点击了小程序消息，则会返回到小程序，开发者可以通过`success`事件回调获取到用户所点消息的页面路径`path`和对应的参数`query`。
    
    
    wx.openCustomerServiceConversation({
      success: res => {
        const { path, query } = res;
        console.log(path);
        console.log(query);
      }
    });
    

## 返回参数说明

参数 | 类型 | 说明  
---|---|---  
path | String | 小程序消息指定的路径  
query | Object | 小程序消息指定的查询参数  
  
## 后台接入消息服务

用户向小程序客服发送消息、或者进入会话等情况时，开发者填写的服务器配置 URL / 云开发云函数 / [云托管服务](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/weixin/push>)将得到微信服务器推送过来的消息和事件，开发者可以依据自身业务逻辑进行响应。接入和使用方式请参考[消息推送](<../../payment/message-push.md>)。

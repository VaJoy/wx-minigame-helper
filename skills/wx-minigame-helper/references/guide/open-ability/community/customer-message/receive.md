---
title: "接收消息和事件"
type: guide
category: guide/open-ability/community/customer-message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/customer-message/receive.html
---

# 接收消息和事件

当用户在客服会话发送消息、或由某些特定的用户操作引发事件推送时，微信服务器会将消息或事件的数据包发送到开发者填写的 URL / 云开发云函数 / [云托管服务](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/weixin/push>)（详情请参考[消息推送](<../../payment/message-push.md>)）。开发者收到请求后可以使用 [发送客服消息](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage>) 接口进行异步回复。

各消息类型的推送 JSON、XML 数据包结构如下。

## 文本消息

用户在客服会话中发送文本消息时将产生如下数据包：

### XML 格式
    
    
    <xml>
       <ToUserName><![CDATA[toUser]]></ToUserName>
       <FromUserName><![CDATA[fromUser]]></FromUserName>
       <CreateTime>1482048670</CreateTime>
       <MsgType><![CDATA[text]]></MsgType>
       <Content><![CDATA[this is a test]]></Content>
       <MsgId>1234567890123456</MsgId>
    </xml>
    

### JSON 格式
    
    
    {
      "ToUserName": "toUser",
      "FromUserName": "fromUser",
      "CreateTime": 1482048670,
      "MsgType": "text",
      "Content": "this is a test",
      "MsgId": 1234567890123456
    }
    

### 参数说明

参数 | 说明  
---|---  
ToUserName | 小程序的原始 ID  
FromUserName | 发送者的 openid  
CreateTime | 消息创建时间（整型）  
MsgType | text  
Content | 文本消息内容  
MsgId | 消息 id，64 位整型  
  
## 图片消息

用户在客服会话中发送图片消息时将产生如下数据包：

### XML 格式
    
    
    <xml>
          <ToUserName><![CDATA[toUser]]></ToUserName>
          <FromUserName><![CDATA[fromUser]]></FromUserName>
          <CreateTime>1482048670</CreateTime>
          <MsgType><![CDATA[image]]></MsgType>
          <PicUrl><![CDATA[this is a url]]></PicUrl>
          <MediaId><![CDATA[media_id]]></MediaId>
          <MsgId>1234567890123456</MsgId>
    </xml>
    

### JSON 格式
    
    
    {
      "ToUserName": "toUser",
      "FromUserName": "fromUser",
      "CreateTime": 1482048670,
      "MsgType": "image",
      "PicUrl": "this is a url",
      "MediaId": "media_id",
      "MsgId": 1234567890123456
    }
    

### 参数说明

参数 | 说明  
---|---  
ToUserName | 小程序的原始 ID  
FromUserName | 发送者的 openid  
CreateTime | 消息创建时间（整型）  
MsgType | image  
PicUrl | 图片链接（由系统生成）  
MediaId | 图片消息媒体 id，可以调用[获取临时素材](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getmedia>))接口拉取数据。  
MsgId | 消息 id，64 位整型  
  
## 小程序卡片消息

用户在客服会话中发送小程序卡片消息时将产生如下数据包：

### XML 格式
    
    
    <xml>
      <ToUserName><![CDATA[toUser]]></ToUserName>
      <FromUserName><![CDATA[fromUser]]></FromUserName>
      <CreateTime>1482048670</CreateTime>
      <MsgType><![CDATA[miniprogrampage]]></MsgType>
      <MsgId>1234567890123456</MsgId>
      <Title><![CDATA[Title]]></Title>
      <AppId><![CDATA[AppId]]></AppId>
      <PagePath><![CDATA[PagePath]]></PagePath>
      <ThumbUrl><![CDATA[ThumbUrl]]></ThumbUrl>
      <ThumbMediaId><![CDATA[ThumbMediaId]]></ThumbMediaId>
    </xml>
    

### JSON 格式
    
    
    {
      "ToUserName": "toUser",
      "FromUserName": "fromUser",
      "CreateTime": 1482048670,
      "MsgType": "miniprogrampage",
      "MsgId": 1234567890123456,
      "Title": "title",
      "AppId": "appid",
      "PagePath": "path",
      "ThumbUrl": "",
      "ThumbMediaId": ""
    }
    

### 参数说明

参数 | 说明  
---|---  
ToUserName | 小程序的原始 ID  
FromUserName | 发送者的 openid  
CreateTime | 消息创建时间（整型）  
MsgType | miniprogrampage  
MsgId | 消息 id，64 位整型  
Title | 标题  
AppId | 小程序 appid  
PagePath | 小程序页面路径  
ThumbUrl | 封面图片的临时 cdn 链接  
ThumbMediaId | 封面图片的临时素材 id  
  
## 进入会话事件

用户在小程序“客服会话按钮”进入客服会话时将产生如下数据包：

### XML 格式
    
    
    <xml>
        <ToUserName><![CDATA[toUser]]></ToUserName>
        <FromUserName><![CDATA[fromUser]]></FromUserName>
        <CreateTime>1482048670</CreateTime>
        <MsgType><![CDATA[event]]></MsgType>
        <Event><![CDATA[user_enter_tempsession]]></Event>
        <SessionFrom><![CDATA[sessionFrom]]></SessionFrom>
    </xml>
    

### JSON 格式
    
    
    {
      "ToUserName": "toUser",
      "FromUserName": "fromUser",
      "CreateTime": 1482048670,
      "MsgType": "event",
      "Event": "user_enter_tempsession",
      "SessionFrom": "sessionFrom"
    }
    

### 参数说明

参数 | 说明  
---|---  
ToUserName | 小程序的原始 ID  
FromUserName | 发送者的 openid  
CreateTime | 事件创建时间（整型）  
MsgType | event  
Event | 事件类型，user_enter_tempsession  
SessionFrom | 开发者在[wx.openCustomerServiceConversation](<https://developers.weixin.qq.com/minigame/dev/api/open-api/customer-message/wx.openCustomerServiceConversation.html>)设置的 session-from 属性

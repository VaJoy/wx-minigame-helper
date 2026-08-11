---
title: "自定义条件接入指引"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/custom-task.html
---

## 自定义条件接入指引

## 功能介绍

开发者可以在活动配置任务时，设置与游戏玩法强相关的自定义条件。当配置了自定义条件时，平台将请求游戏后台，校验当前任务条件的完成情况。

## 接入指引

### Step 1 ：MP - 运营功能管理 - 基础配置 - 自定义条件

配置自定义条件的游戏后台请求地址相关信息

![](https://mmgame.qpic.cn/image/c30e7d52e6ff23bb449307e8d73b7b7209e1e57dad53a862dc6a8d0b962d50d5/0)

### Step 2 ：活动配置中配置条件

![](https://mmgame.qpic.cn/image/1dbffad2fc3c026748f329bdbeac7dccb485a6d7ef96151252a6a68226a68433/0) ![](https://mmgame.qpic.cn/image/220c18287de243a5b8b94e76ae5f5aaec891a1287693d342e6709de25a493076/0)

具体活动模版使用可以见下文 **开发者活动条件回调**

### Step 3 ：自定义条件测试

在活动测试流程中测试

## 开发者活动条件回调

### 查询活动条件是否已满足事件

查询参与活动（活动ID为**ActId** ）的用户（用户OpenID为**ActOpenId** ）是否满足条件（条件ID为**ConditionId** ）

#### 请求参数

字段 | 类型 | 说明  
---|---|---  
CreateTime | Number | 消息发送时间  
MsgType | String | 消息类型，事件类通知固定为：event  
Event | String | 固定为：  
**minigame_act_event_query_condition**  
MiniGame | Object | 见下文  
  
**MiniGame**

字段 | 类型 | 说明  
---|---|---  
ActOpenId | String | 参与活动的用户的OpenID  
TemplateId | String | 活动模板 id  
ActId | String | 活动id  
ConditionId | String | 条件ID，字符串枚举，不同类型的活动有不同的ID，具体参考活动配置  
  
#### 返回参数

字段 | 类型 | 是否必填 | 说明  
---|---|---|---  
ErrCode | Number | 是 | 0表示成功，非0表示失败  
ErrMsg | String | 否 | 在ErrCode非0的情况下可以返回详细的错误原因，用于调试  
IsConditionSatisfied | Boolean | 是 | true：表示达成条件；false：表示未达成条件  
TemplateParamMap | Map | 否 | 用于渲染当前任务进度，仅需要渲染任务进度时填写  
**{"key1":value1,"key2":value2}**  
**此处value仅支持数字**  
  
以下是使用方法：  
**若配置活动模版**  
累计登录5天， 进度：${day} / 5  
邀请3个好友，进度：${friend}/3  
在线时长10分钟，进度：${duration}/10  
  
开发者应返回json，x/y/z均为数字  
{"day": x, "friend": y, "duration": z}  
  
渲染后为  
累计登录5天， 进度：x / 5  
邀请3个好友，进度：y / 3  
在线时长10分钟，进度：z / 10  
  
**JSON格式示例**

请求
    
    
    {
        "CreateTime": 1583202606,
        "MsgType": "event",
        "Event":"minigame_act_event_query_condition",
        "MiniGame":{
            "OpenId":"xxx",
            "TemplateId":"xxx",
            "ActId":"xxx",        
            "ConditionId":"query_new_user"
        }
    }
    
    

达成条件返回：
    
    
    {
        "ErrCode":0,
        "IsConditionSatisfied":true,
        "TemplateParamMap":{"key1":value1,"key2":value2}
    }
    
    

未达成条件返回：
    
    
    {
        "ErrCode":0,
        "IsConditionSatisfied":false,
        "TemplateParamMap":{"key1":value1,"key2":value2}
    }

---
title: "IAA获取预测数据插件"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/iaa.html
---

# IAA获取预测数据插件  
  
## 简介:

本插件用于补充小游戏一些额外基础功能，插件包含了其他通用能力可以查看[功能介绍](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxaed5ace05d92b218&token=&lang=zh_CN>)

本文档主要介绍`getUserLabel`功能

  * 无权限会返回-10000401错误码，需检查请求上报是否符合文档

  * 注意体验版和测试版无法跑模型，需要在现网才有模型数据

## 接入:

### 1\. 申请插件权限

  * API接入前，技术上需申请插件权限：[申请地址](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxaed5ace05d92b218&token=&lang=zh_CN>)

### 2\. 整体插件逻辑

#### ● c使用c场景：

在用户【每次看完游戏内广告后】，延迟30s向平台上报【用户数据】，请求到该用户【最近30分钟】或【当日0点至今】在当前游戏的【预测档位】

> （模型效能要求用户看完广告后有个30s计算，才能给出预测）

#### ● 使用案例：

假设在游戏内的「复活场景」，用户当天累计已点了4次『看广告复活』，其中1次成功看完广告，3次都没有看完广告

  1. 当用户第5次看完广告（=c），开发者延迟30s后上报和请求API

  2. **【开发者向平台上报数据】「用户当天累计** **a**.`gift_scene`**=复活类型，b**.`gift_name`**=复活道具** ，**c**.`gift_value`**=5，d.**`gift_value_success`**=2」**

  * 按类型来上报当天累计数。比如复活为一个类型，则上报用户当天累计所有复活类广告的点击拉起广告次数和看完广告次数（对广告位按类打标签）

  3. **【开发者请求API获取】**

  * 开发者后续可对该高潜力用户设计更多广告点和提升吸引力，能获得更多收益

【开发者】  
用户游戏行为数据 | reportDatoa 上报 ⮂ 返回 encryptedData  | 【平台API】  
每30分钟更新数据（均为当前游戏）  
---|---|---  
用户当日累计  
a."gift_scene"："广告触发场景（如玩法单局内，局外签到，局外数值养成等）",  
b."gift_name": "广告设计点（如局内的复活卡、刷新卡，局外养成资源等）",  
c."gift_value": "游戏内用户点击该广告位的次数（指点击按钮的次数、无论用户是否成功拉起广告，都视为1次点击） "  
d."gift_value_success": "游戏内用户成功看完广告的次数 "  |  "value": 0, // 预测档位  
value取值体现预测用户 潜力从小到大 取值见下  |  "today_play_duration":10, // 今天总游玩时长（秒）  
"weekly_login_cnt":10, // 周登陆次数  
"continuous_login_days":10 // 连续登陆天数  
  
  
#### ●【重要】各个预测档位对应的潜力参考系数

插件预测模型综合用户在当前游戏的活跃/分享/潜力等属性，输出IAA预测档位。支持两类档位查询方式。

labelId: 'iaa_feature' | labelId: 'iaa_feature_v2' | 用户活跃属性字段  
---|---|---  
在查询时，近30min数据预测 | 在查询时，按当日0点至今累计数据进行预测  
value字段 | value_exposure字段 | value字段  
近30min潜力系数均值  
value=0-10，潜力系数0-300  
value=10-20，潜力系数300-1000  
value=20-30，潜力系数1000-3000  
|  当日0点至今广告曝光次数  |  当日0点至今潜力系数均值  
value=0-500，潜力系数0-5000  
(value跨度+1，潜力系数+10)  
value=501，潜力系数>5000  |  当天游戏时长 today_play_duration  
周登陆次数 weekly_login_cnt  
连续登陆天数continuous_login_days   
  
### 3\. 在配置中声明使用插件

在`game.json`中声明使用插件
    
    
      "plugins": {
        "MiniGameCommon": {
          "version": "latest",
          "provider": "wxaed5ace05d92b218",
          "contexts": [
            {
              "type": "isolatedContext"
            }
          ]
        }
      }
    
    
    

### 4\. 游戏代码中引用

通过 `requirePlugin` 来调用插件的代码
    
    
    try {
      if (typeof requirePlugin !== 'undefined') {
        const createMiniGameCommon = requirePlugin('MiniGameCommon', {
          enableRequireHostModule: true,
          customEnv: {
            wx,
          },
        }).default;
        const miniGameCommon = createMiniGameCommon();
        if (typeof miniGameCommon === 'undefined' || typeof miniGameCommon.canIUse === 'undefined') {
          // 插件初始化失败
          console.error('miniGameCommon create error');
        } else {
          // 插件初始化成功
          GameGlobal.miniGameCommon = miniGameCommon;
        }
      }
    } catch (e) {
      // 基础库版本过低
      console.error(e);
    }
    
    

如果是unity则调用js，需要开发者自行封装

<https://docs.unity3d.com/cn/2023.2/Manual/webgl-interactingwithbrowserscripting.html>

### 5\. 获取用户
    
    
    // 获取用户标签
    GameGlobal.miniGameCommon.getUserLabel({
        reportData: '{"gift_scene":"游戏页","gift_name":"解锁槽位1","gift_value":1,"gift_value_success":0}',// reportdata是字符串，注意不要传入object
        labelId: 'iaa_feature' // labelId可='iaa_feature'或'iaa_feature_v2'见下文描述
    }).then((res) = >{
        console.log('getUserLabel success:', res);
    }).
    catch((res) = >{
        console.log('getUserLabel fail:', res);
    });
    
    

#### 参数

**Object object**

属性 | 类型 | 必填 | 说明  
---|---|---|---  
labelId | string | 是 | 需要拉取的用户数据标签ID  
目前支持2类查询方式：  
① iaa_feature，查询单次预测价值系数，按30档查询  
② iaa_feature_v2，查询当日累计至今预测价值系数，按500档查询  
reportData | string | 是 | 游戏上需要报对应内容，示例如下  
  
### 不同labelId返回数据区别

#### ① iaa_feature ：查询单次预测价值系数

返回value档位：取值为0-30，计算最近30分钟用户预测价值系数，0-30体现预测的用户潜力从小到大

#### ② iaa_feature_v2：查询当日累计至今预测价值系数

返回value档位：取值为0-501，计算今日0点至今用户预测价值系数，0-501体现预测的用户潜力从小到大

返回value_exposure：计算今日0点至今用户预测视频广告曝光次数

#### reportData
    
    
    //  示意，根据实际情况传
    reportData = 
    '{用户当日累计
    a."gift_scene"："广告触发场景（如玩法单局内，局外签到，局外数值养成等）",
    b."gift_name": "广告设计点（如单局内的复活卡、刷新卡，单局外养成资源等）",
    c."gift_value":  "游戏内用户点击该广告位的次数（指点击按钮的次数、无论用户是否成功拉起广告，都视为1次点击） "
    d."gift_value_success":  "游戏内用户成功看完广告的次数 "
    }'
    

  * 需重点关注，必须回传来保证模型效果；reportData需提前序列化成字符串

#### 返回参数res

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息  
encryptedData | string | 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](<../data/signature.md>)  
iv | string | 加密算法的初始向量，详细见[加密数据解密算法](<../data/signature.md>)  
cloudID | string | 敏感数据对应的云 ID，开通[云开发](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/basis/getting-started>))的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](<../data/signature.md>)  
  
#### 解密encryptedData

解密后数据结构如下：
    
    
    {
      "value": 0, // 在当前游戏的预测档位
      "today_play_duration":10, // 在当前游戏的今天总共游玩时长（秒）
      "weekly_login_cnt":10, // 在当前游戏的周登陆次数
      "continuous_login_days":10 // 在当前游戏的连续登陆天数
      
      // 新增，本周期曝光次数，仅'labelId=='iaa_feature_v2'返回
      "value_exposure": 10
    }
    
    

其中，value 字段解析如下

value 字段含义：代表不同的档位，档位体现预测的用户潜力从小到大，具体

  * 每个用户只属于一个id，若返回“0”有两种情况

  1. 用户潜力低，可广告视频积累后再试探

  2. 为对照组（0～5%间），平台不提供预测信息，开发者自行处理

## 小游戏效果关注

  * 若需要关注变现调优效果，可关注[MP-商业工具箱](<https://mp.weixin.qq.com/wxamp/frame/gameBusinessTool?action=plugin_redirect&plugin_uin=1011&custom=%26hash_path%3Droi_analysis&tab=roi&token=1999780607&lang=zh_CN>)

![](https://mmgame.qpic.cn/image/292b94b30b34bd2378dee1854b26339bcf2fac8ea9eb7c28e686fc6633df465f/0)

[商业化工具箱接口说明](<https://docs.qq.com/doc/DUE56aXd0RkVsRFdT>)

[商业化工具箱外部应用分析看板和API指引](<https://docs.qq.com/doc/DUElMZHVRcExOenFj>)

https://api.weixin.qq.com/publisher/stat

在这个/publisher/stat 路径下对每个appid统一配额：10万次请求/天

[外部应用投放分析](<https://developers.weixin.qq.com/minigame/introduction/commercialization/ad/external-analysis>)

  * 若需实验应用，可关注[MP-统计-收入诊断调优-实验工具](<https://mp.weixin.qq.com/wxamp/subApp/game/minigame_mini_analyze/experiment/list>)

![](https://mmgame.qpic.cn/image/4b5c093e0889404612a79d4d15257dd094a2fd6f830335292d68b5f08f348f17/0)

---
title: "流失用户召回活动说明"
type: guide
category: guide/open-ability/growth/commercialization
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/commercialization/recall-user.html
---

# 流失用户召回活动说明

## 一、活动说明

### 1、活动目的

在微信全场景对流失用户进行触达，辅助拉回核心用户，提升长线留存。

### 2、活动目标用户

  * 普通付费流失用户：累计付费x元以下，且最近一次付费后，连续n天不活跃

  * 核心付费流失用户：累计付费x元及以上，且最近一次付费后，连续n天不活跃

  * x元、n天：支持自定义

### 3、活动模块

  * 回归见面礼：一次性奖励，登录游戏可领取；奖励类型为小游戏礼包

  * 签到领好礼：7日累签奖励，每日签到可领取；第2、4、5、6天的奖励类型为小游戏礼包；第1、3、7天为其他类型奖励

4、用户参与方式

  * 推送入口：目标用户收到回流活动推送，点击推送拉起游戏，参与活动

  * 游戏内入口：开发者在游戏内接入活动入口，用户点击拉起活动面板

  * 福利页活动入口：【右上角···】→【福利】→【专属回归福利】

### 5、示意图

活动示意 | 入口示意（部分）  
---|---  
![](https://mmgame.qpic.cn/image/a0d4489a106162d16b13ee3ebc75c2031c9339208fdd2baa8a3a53ff52ae0eab/0) | ![](https://mmgame.qpic.cn/image/4a368bd4f902b460cba0199de3d65ab5f04b73ede9e21d963ceff7e246d53fa7/0) 「微信游戏」公众号  ![](https://mmgame.qpic.cn/image/80e1359e9432b44b75211d6eed8f1d7a5e0b1195e0e60eb6eb8cbfb39ce03456/0) 服务通知 ![](https://mmgame.qpic.cn/image/51a915ede672b6dea5bf5d1f76367f355ba7d9f291a858cc020d7d8e0485c0a5/0) 福利半屏  
  
## 二、活动接入

### 1、前置条件

已配置游戏圈的「每日签到礼包」，参考：[小游戏文档指引](<https://developers.weixin.qq.com/minigame/introduction/>)

### 2、活动配置流程

#### （1）准备素材

  * 累计10个小游戏礼包，以及签到活动对应的礼包icon

  * 1张活动面板背景图

  * 1张推广素材图

#### （2）新建礼包

  * 路径：[mp--运营功能管理--游戏礼包道具](<https://mp.weixin.qq.com/wxamp/subApp/game/minigame_gift/gift?token=1240441857&lang=zh_CN>)

  * 回归见面礼：2个礼包；分别用于普通付费流失用户、核心付费流失用户的回归登录奖励

  * 签到领好礼：8个礼包；分别用于普通付费流失用户、核心付费流失用户的第2、4、5、6天签到奖励

  * 礼包建议：**为核心付费流失用户配置更高价值的奖励**

#### （3）新建活动与推广

  * 路径：[mp--运营功能管理--流失用户召回活动](<https://mp.weixin.qq.com/wxamp/frame/pluginRedirect/pluginRedirect?action=plugin_redirect&plugin_uin=1033&custom=templateId%3D42&lang=zh_CN&token=317491838>)

  * 新建活动1 → 选择「**普通** 付费流失用户」标签 → 上传图片素材与**普通礼包** → 提审活动 → 配置推广素材 → 提审推广图

  * 新建活动2 → 选择「**核心** 付费流失用户」标签 → 上传图片素材与**核心礼包** → 提审活动 → 配置推广素材 → 提审推广图

#### （4）配置游戏内的活动入口

活动提审后，得到活动对应的开放接口（OpenLink），用于接入游戏内活动入口，参考说明文档接入：[PageManager ](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html>)

## 【附录】详细操作流程

### 1、新建礼包

[https://mp.weixin.qq.com/wxamp/subApp/game/minigame_gift/gift?token=1240441857&lang=zh_CN](<https://mp.weixin.qq.com/wxamp/subApp/game/minigame_gift/gift?token=1240441857&lang=zh_CN>)

| 流程说明 | 示意图  
---|---|---  
1 |  新建礼包 ● 礼包类型：付费用户召回礼包 ● 回归见面礼：2个礼包；用于普通付费流失用户、核心付费流失用户的回归登录奖励 ● 签到领好礼：8个礼包；用于普通付费流失用户、核心付费流失用户的第2、4、5、6天签到奖励  | ![](https://mmgame.qpic.cn/image/66c191d8da4336a7068efe980ff0ec54a59edd6cf1f09cba3ab6c06f80d770cd/0)  
2 |  发布礼包 新建礼包后，完成礼包「测试」与「发布」  | ![](https://mmgame.qpic.cn/image/3c6781d63e32a06bc7c8724c6aebd0e4932edeed098861225ea589e1f13f08d3/0)  
  
### 2、新建活动与推广

[https://mp.weixin.qq.com/wxamp/frame/pluginRedirect/pluginRedirect?action=plugin_redirect&plugin_uin=1033&custom=templateId%3D42&lang=zh_CN&token=317491838](<https://mp.weixin.qq.com/wxamp/frame/pluginRedirect/pluginRedirect?action=plugin_redirect&plugin_uin=1033&custom=templateId%3D42&lang=zh_CN&token=317491838>)

| 流程说明 | 示意图  
---|---|---  
1 |  新建活动 ● 活动名称备注：用于区分活动，C端不外显 ● 活动时间：建议时间足够长 ● 可参与用户类型：结合游戏需求，对所选标签用户进行定义 （以示意图为例：活动面向「普通付费流失用户」定向触发，仅累计付费500元以下，且最近一次付费后，连续2天不活跃的用户可见） | ![](https://mmgame.qpic.cn/image/d071af08f4b7398f5e37f1fc451a8c3991c0692591cf92c969f07b4122b2e7fd/0)  
2 |  基本信息配置 ● 确认活动时间、背景色、用户标签等基本信息 ● 配置完成后，点击右上角[下一项]  | ![](https://mmgame.qpic.cn/image/29d19aff5496d9c86f405666b3913f3d23b6588dd89b1b9ff46ff75d4c11a68e/0)  
3 |  活动奖品库配置 ● 点击[新增奖励] ● 绑定当前活动所需的礼包（如：选择「普通付费流失用户」，仅绑定所需要的普通礼包即可） ● 绑定完成后，点击右上角[下一项]  | ![](https://mmgame.qpic.cn/image/b47cd83724d3b9155b565afaf16bd9d5237988073d6bde9ebcda601f6ffb5147/0) ![](https://mmgame.qpic.cn/image/f5eb76088871a4db1f039f77d025bd9afa70c3399ef67d5f6f206012332b5c19/0)  
4 |  活动背景图配置 ● 建议删除默认背景图，参考设计规范，上传与游戏风格契合的背景图（C端外显） ● 上传成功后，点击右上角[下一项]  | ![](https://mmgame.qpic.cn/image/e64286fb475cb2f775aa0357b4d1045b80f4d84522c0d8f6b4b37229369acbea/0)  
5 |  回归见面礼配置 ● 点击[新增一条] ● 下拉选择回归见面礼对应的礼包 ● 绑定完成后，点击右上角[下一项]  | ![](https://mmgame.qpic.cn/image/03f84ea75bc08ac618369e881d84657761f073c036ce049ec2d231684e1e8c3d/0)  
6 |  签到领好礼配置 ● 点击[新增一条] ● 第1、3、7天：配置异业奖励（下拉选择即可）【异业奖励：官方提供 ，无需开发者配置。非游戏行业的优惠券，如餐饮、日用品等；】 ● 第2、4、5、6天：配置小游戏礼包。下拉选择对应礼包，配置礼包名称、礼包icon（C端外显） ● 配置完成后，点击右上角[保存]，预览整体效果 ● 确认后，点击右上角[预览发布]  | ![](https://mmgame.qpic.cn/image/6e1b5569f380df42c0ff4a3a578e243f6ef4665f2465704dbed4b1a610e84a85/0) ![](https://mmgame.qpic.cn/image/abce90cdb877fa840cc5f7f23320f313cbef88266044d8ba2a33b4f71baa1b2d/0) ![](https://mmgame.qpic.cn/image/75629512b4ed123def82b1620fbed2b9b9d084155f989263d82693d089e1d6ac/0)  
7 |  预览发布 ● 扫描二维码，在移动端预览活动效果 ● 开放接口（OpenLink）：复制，用于接入游戏内活动入口 ● 奖励校验：下发验证，确认奖励能成功发放 ● 所有内容确认无误后，点击[提审] ● 提审后，点击[立即前往]，进行推广图配置  | ![](https://mmgame.qpic.cn/image/466848d1d1aaa12b30c54833413b6ffbb859a5a8ced862ebc68c6c2fa9237248/0) ![](https://mmgame.qpic.cn/image/2d6256314ae58163ee1d53230f5c32c87429592321780f4342e3a96a35850899/0) ![](https://mmgame.qpic.cn/image/1eacc6a7ac02b397e930a8b1ae4b3169d2efd12ef7ee5bffcb55d9580bab8ad3/0)  
8 |  推广图配置 ● 点击[立即前往]后，跳转至活动列表页 ● 点击[推广] ● 点击[选用] ● 参考格式要求，上传推广素材图（建议推广素材图有明显提示，如图上有文字“领取专属礼包”等） ● 提交审核  | ![](https://mmgame.qpic.cn/image/c30f919f53178b8250bac5a789e624b3838e7a292ddfdc60ad816d62460adfdc/0) ![](https://mmgame.qpic.cn/image/a748fcead8c8a5b18a76c220ffbc5cbd5167a97562bcf3c8b6a6fbab8767a5a8/0) ![](https://mmgame.qpic.cn/image/8f05a705d2dfeaf53f26ed3bc0d54a5536cf5cb1d16caa0c17c42c452d5700f6/0) ![](https://mmgame.qpic.cn/image/e61f8e80f38110c9195721d74695ea7ac3bab321216d6d1f7f98c4d8cedc9b18/0)  
  
### 3、配置游戏内活动入口

复制活动对应的开放接口（OpenLink），参考说明文档接入：[PageManager ](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html>)

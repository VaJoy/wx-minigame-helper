---
title: "PC小游戏接入指南"
type: guide
category: guide/open-ability/platform
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/pc-game.html
---

# PC小游戏接入指南

## 概述

微信小游戏当前已支持在 PC 端游玩体验。通过观察发现，相较于移动端，用户在PC端小游戏的人均游戏时长提升 120%，付费渗透率提升 55%，付费 ARPPU 提升130%。由此可见，为用户提供更完善的 PC 体验，有助于提升用户的游戏活跃和付费深度。因此，针对 PC 小游戏投入是非常有必要的。

为此，平台为PC小游戏提供了多种适配能力，并推出了 PC 内购净流水的10%额外配置[PC激励金政策](<https://developers.weixin.qq.com/community/minigame/doc/000ec25c88c4d030a5133e4a666c01?blockType=2>) 。期望与开发者共建更好的 PC 小游戏体验。

默认情况下，已在移动端发布的小游戏可在PC直接访问体验，当前平台已经支持虚拟支付、广告、开放数据域、交互事件等常用功能。为了充分发挥PC端屏幕、输入与性能优势，并使整体体验符合PC用户的使用习惯，本文将指引开发者为PC端进行专项优化。本文从以下几个角度展开：

**●** 开发接入建议

​​ ○ PC可适配能力

​​ ○ PC适配成本评估

​​ ○ 运营及开发支持

**●** 流量接入支持

​​ ○ PC小游戏的多种打开形式

​​ ○ PC小游戏激励政策

**●** 了解更多

## 开发接入建议

开发者可根据下述建议评估自身游戏是否必要优先投入人力予以专项适配

### 建议适配的游戏类目

**●** 强交互/长时会话类游戏，如：策略/SLG、RPG、模拟经营、塔防、射击、沙盒、ARPG、MMO 等；

**●** 精细类操作、屏幕信息密度依赖较高类游戏，如涉及复杂战斗、背包/天赋/交易等多面板管理。

强依赖重力传感器、陀螺仪、多指操作类的游戏，建议审慎考虑适配

### 可适配能力

#### 1\. PC拓展屏

拓展屏是游戏在PC的重要运营场景，可满足用户领取折扣券、快捷充值、领取礼包等需求，对于提升游戏表现有积极作用。

登陆「小游戏MP后台」-> 左侧菜单「PC小游戏/能力地图」->「PC拓展屏」开通该能力。强烈建议开发者配置相应的游戏礼包，对游戏留存的提升效果显著。

![](https://mmgame.qpic.cn/image/aa29da58e7e4404f4f1222432f445c1b9f01f673d76085b1f1ef08dd68380efa/0)

#### 2\. 操作交互

PC与移动端的交互逻辑不同，而键盘与鼠标是PC端中主要与游戏交互的设备途径。当前，平台已将鼠标左键默认适配 Touch 事件，并提供操作映射功能，可兼容移动端小游戏的基本点击操作。平台建议开发者基于游戏实际情况，进行更加完整全面的适配，来保障PC用户的游戏体验。

**●** 配置键鼠映射方案

平台为用户提供“用键盘鼠标玩游戏”功能，支持点击、摇杆等基本操作映射。开发者可通过MP端为用户配置键鼠映射功能的默认应用方案，为用户提前配置好推荐布局，以保障PC端与移动端的游戏体验一致。

功能设置入口位于：登陆「小游戏MP后台」-> 左侧菜单「PC小游戏」->「键盘鼠标映射」。

![](https://mmgame.qpic.cn/image/f571f8e9d7c65f898dec6119fd2b568097fec41f9ffa8bc65269ff6d67a19c79/0)

**●** 原生键鼠能力适配

游戏可根据实际情况，根据平台提供的相关API（[键盘事件](<https://developers.weixin.qq.com/minigame/dev/api/device/keyboard/wx.onKeyUp.html>)、[鼠标事件](<https://developers.weixin.qq.com/minigame/dev/api/device/mouse-event/wx.onMouseUp.html>)、[滚轮事件](<https://developers.weixin.qq.com/minigame/dev/api/device/wheel-event/wx.onWheel.html>)、[自定义光标](<https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.setCursor.html>)），自行适配更丰富的交互操作事件。建议开发者关注并参考下述场景：

​​ ○ 对于在移动端使用“摇杆”控制的游戏，应适配常用「W、A、S、D」等方向键；适配其他功能类按键，并对功能按钮的热键名外显，支持热键自定义配置等，主动引导用户了解并更好使用PC操作能力；

​​ ○ 对话式剧情建议配合键盘“空格键”、“回车键”等作为跳过功能键；

​​ ○ “Esc” 按键通常作为关闭菜单/功能页、返回主页、调出设置等功能键；

​​ ○ 在大型地图背景、列表面板等场景中，使用滚轮作为场景“放大”、“缩小”功能键，以此对应游戏在移动端中的双指操作；

​​ ○ 全屏模式下鼠标放置屏幕边缘触发画面视野移动能力；

​​ ○ 支持鼠标“悬停”、“右键”带来的UI上交互能力；

​​ ○ 为鼠标设置自定义光标图片。

对于想要实现完整PC游戏体验的开发者而言，可在进行充足的按键适配并给出交互指引后，隐藏“虚拟手柄”等UI，营造端游式的沉浸游戏体验。

![](https://mmgame.qpic.cn/image/55c75c68117204bc15622bb930fe7d89252d817662b879827170e1e4575e9e71/0)

#### 3\. 大屏UI适配

PC端有着更大的屏幕空间和窗口尺寸，为用户带来更多元沉浸的游戏表现，敬请开发者关注以下适配情形。

**●** 窗口缩放：

当前PC小游戏已支持用户对窗口尺寸进行等比例自由缩放，满足用户的不同画面需求。

![](https://mmgame.qpic.cn/image/9fcd0084e560416a718dd447c0c7aee940fffc38c905ea3a53d917e5c11f3b77/0)

区别于手机普遍竖屏使用，PC端更适合以横屏作为应用访问的窗口形态。可通过[小游戏配置文件](<https://developers.weixin.qq.com/minigame/dev/reference/configuration/app>)中 desktopDeviceOrientation 字段可对双端窗口配置区分。横屏模式下，推荐窗口比例为 16:9/16:10。

在窗口变化方面，请使用 [wx.onWindowStateChange](<https://developers.weixin.qq.com/minigame/dev/api/ui/window/wx.onWindowStateChange.html>) 获取窗口变化事件；敬请注意：为满足游戏后台运行能力，PC游戏最小化时不会触发 wx.onHide 事件。

**●** 画面UI：

PC小游戏支持比移动端更大更清晰的画面。用户在进行窗口缩放时，将会等比例拉伸游戏的画布尺寸，从而影响到游戏素材的视觉表现和实际交互。因此，开发者可以根据游戏在PC上的实际呈现，对UI布局进行对应的动态调整，避免出现UI错位、消失，按键无法点击等影响用户体验的情况。 同时，平台建议开发者能够提供更符合PC端游戏习惯的界面体验，下列部分常见案例供参考：

​​ ○ 移动端习惯以竖屏底部升起半屏作为交互区，PC可改成位于屏幕中间弹窗交互区；

​​ ○ 移动端的全屏幕面板，可按需适配为PC端游戏内可移动小窗口面板（多面板支持）。

#### 4\. 游戏资源及性能

在PC端中具备更大分辨率的屏幕，并且整体相比于移动端也具备较好的硬件环境，所以在游戏资源上开发者们可根据自身的游戏的情况做适当的资源区分，重点关注以下几个方面：

**●** 高清纹理及压缩纹理使用

推荐开发者针对PC端以至少 1920*1080 分辨率作为游戏内贴图素材的基准分辨率，以保证整体游戏画面的更高的清晰度。在贴图纹理格式中，移动端普遍使用 ASTC 作为主流的压缩纹理格式，而目前大多数PC端GPU并不支持该格式，推荐开发者使用 DXT5 作为PC端资源格式。这意味着在游戏导出时需同时准备两份CDN资源用于不同平台的使用。

**●** 更多的模型面数

对于3D游戏，可以适当提升模型面数与材质复杂度来提升游戏在PC中的模型精度表现效果。

#### 5\. 快捷打开方式

**●** 添加到桌面

PC端支持用户点击小游戏菜单栏中“添加到桌面”按钮，在桌面添加快捷方式；也支持直接在 PC 微信侧边栏小程序面板中添加，用户从桌面图标启动游戏访问场景值 1023。开发者可在游戏内接入礼包引导复访，引导用户养成快捷打开小游戏的习惯。

**●** PC接力

平台提供两种直接可在移动端打开 PC 端小游戏的方式，详细说明文档可见[PC接力](<https://developers.weixin.qq.com/community/develop/doc/00026a6c6ccaf01d2b7b57de85bc01>)。

### 成本投入评估

可根据游戏自身情况，自行选择适配方案。例如先用低成本方案验证PC端留存/付费/广告等数据，再决定投入中高成本升级。

成本级别 | 较低成本  
（约0.5人日） | 中低成本  
（约3～10人日） | 较高成本  
（大于15人日）  
---|---|---|---  
运营服务 | PC拓展屏 | - | -  
操作适配 | 配置键鼠映射方案 | 方向/回车/Esc等基础操作 | 完整键盘热键方案、UI多面板适配等差异化操作  
画面适配 |  | 横屏窗口，UI布局，最小化/恢复等窗口状态管理 | -  
游戏资源 |  | PC与移动端的纹理资源差分下载（移动端-ASTC；PC端-DXT5） | 资源体系重构（高精度美术、纹理双轨）  
  
### 运营支持

#### 1.“为电脑端优化” 推荐

对于针对PC端进行了专门适配，有更好体验的游戏，平台会将其收录至“为电脑端优化”分类，且推荐权重将受到游戏适配程度和在PC端表现的影响。进行了深度PC适配的优质小游戏，会更容易被PC用户发现，进而有利于游戏拉新促活。

该推荐分类详情，参见[“为电脑端优化”推荐说明](<https://developers.weixin.qq.com/community/minigame/doc/0008083a2946783e62f3691b166c08>)。

#### 2.PC专属礼包

开发者可配置“PC专属礼包”，用于PC端用户运营。用户在PC端完成相应任务后，即可领取礼包。该类型礼包支持在PC拓展屏等场景展示和领取。

添加[游戏礼包道具](<https://mp.weixin.qq.com/cgi-bin/loginpage?redirect_url=https%253A%252F%252Fmp.weixin.qq.com%252Fwxamp%252FsubApp%252Fgame%252Fminigame_gift%252Fgift%253Ftoken%253D1281546898%2526lang%253Dzh_CN>)后，登录「小游戏MP后台」-> 左侧菜单「PC小游戏」->「[PC专属礼包](<https://mp.weixin.qq.com/cgi-bin/loginpage?redirect_url=https%253A%252F%252Fmp.weixin.qq.com%252Fwxamp%252FsubApp%252Fgame%252Fminigame%252Fpc-only-gift%253Flang%253Dzh_CN%2526token%253D1525850774>)」进行领取条件配置。

### 开发支持-测试方法

测试正式版/体验版小游戏：登录最新版微信后，通过左侧工具栏的小程序面板点击小游戏即可；也可以通过手机分享给文件传输助手后打开。

测试开发版小游戏：在开发工具里，设置 - 通用设置 中选择 启动 PC 端自动预览，然后在工具栏预览图标里选择 自动预览 Tab，点击 编译并预览 即可。

关于PC小游戏的其他能力和答疑解惑，敬请关注[开发者文档](<https://developers.weixin.qq.com/minigame/dev/guide>)与[社区](<https://developers.weixin.qq.com/community/minigame/mixflow?id=>)内相关文章内容。

## 流量接入支持

### 流量形态

当前用户除了通过微信内的搜索、分享、小程序面板等场景启动小游戏，还支持在外部场景启动小游戏。包含以下方式：

#### 1\. 跳转微信打开

PC 支持 OpenSDK 和 Scheme 能力，在已安装微信的情况下，可通过[Scheme](<../growth/url-scheme.md>)或[OpenSDK](<https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/Launching_a_Mini_Program>)这两种能力跳转微信打开小游戏。

该方法适用于所有小游戏，能有效缩短用户打开游戏的链路，依托微信平台更好地服务用户。

#### 2\. 外部应用打开

PC 支持外部桌面应用运行微信小程序的能力。用户不需安装或登录 PC 微信客户端，即可在桌面应用内通过微信身份登录直接启动小游戏。接入方法详见[PC小程序插件接入指南](<https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_PC_APIs/running_a_mini_program>)。

该方法能实现小游戏动态加载，自定义能力强，适用于有一定研发能力的游戏，提供更好的用户体验。

![](https://mmgame.qpic.cn/image/718289766c41eda1426f8aa82517e95d42ee99057f46f0d6f129dcb9c6287f7a/0)

## 激励回报

#### 1\. 商业政策

微信小游戏在不同阶段可享受不同的激励政策，详细规则敬请关注查看[商业激励政策](<https://developers.weixin.qq.com/minigame/introduction/commercialization/>)，[PC 特殊激励](<https://developers.weixin.qq.com/minigame/introduction/commercialization/guide/pc-operational>)。

游戏类型 | 现金分成 | 基础广告金激励 | PC特殊激励  
---|---|---|---  
IAA | 50% | 拉新激励：注册且活跃时间＞5分钟用户  
● 最高40%激励广告金 |   
回流激励：30天回流且活跃时间＞10min用户  
● 40%激励广告金  
活动激励：视频号场景CPS合作  
● 最高10%视频号激励金  
IAP | 60% | 基础激励：月流水10%广告金  
● 投放达标即返回50%广告金 | 首期激励活动：PC广告金转入游戏PC投放额  
● 100%等额返还PC广告金  
新游激励：月流水40%广告金  
成长激励：30天内安卓投放达标  
● 可申领10万广告金 | 二期激励活动：规定时间内产生PC流水  
● 10%PC广告金  
活动激励：视频号场景CPS合作  
● 10%场景内购流水  
  
#### 2\. CPS合作

可加入CPS合作，在PC端流量场景的用户展示小游戏，并获得合作收入。详情参见[小游戏CPS合作](<https://developers.weixin.qq.com/community/develop/doc/000a60f11f8ae02ccb0221af361001>)。

## 了解更多

如在PC适配中遇到更多问题，或有更丰富的能力需求，敬请通过[客服咨询](<https://work.weixin.qq.com/kfid/kfcca4feec277f91616>)或[开放社区](<https://developers.weixin.qq.com/community/minigame>)进行交流反馈。平台期待与各位开发者合作方共同携手，共建PC小游戏，让创造产生价值。

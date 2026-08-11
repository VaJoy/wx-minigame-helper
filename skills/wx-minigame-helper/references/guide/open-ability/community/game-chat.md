---
title: "社交组件"
type: guide
category: guide/open-ability/community
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-chat.html
---

## 社交组件

### 简介

本插件用于小游戏接入社交组件，给玩家在游戏内提供社交体验。包括世界频道（支持玩家间聊天，发送游戏自定义互动消息），玩家广场，直播，排行榜，通知，私信功能，可使用《星途 WeGoing》小游戏进行体验

![示例](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20230830/152637/Frame1381.png)

### 接入

引入插件后会自动创建一个圆形聊天按钮，浮在游戏之上，自带拖拽事件和点击事件，点击即可打开全屏聊天窗口

接入过程中需注意：

  1. 微信客户端版本低于 8.0.6 不会展示入口
  2. 基础库版本低于 2.19.1 不会展示入口
  3. 没有插件权限不会展示入口（平台侧设置权限）
  4. 排行榜需在「MP后台-游戏能力地图-微信排行榜配置」设置中按要求配置，并正确上报数据

#### 1\. 申请权限

  * 登录mp，前往「MP后台-能力地图-社交组件」开通权限
  * 登录mp，添加插件[添加地址](<https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wx2ea687f4258401a9&token=&lang=zh_CN>)

注：该功能仅对信用分>=100，非棋牌、捕鱼游戏开放

#### 2\. 在配置中声明使用插件

在`game.json`中声明使用插件
    
    
    "plugins": {
      "MiniGameCenter": {
        "version": "latest",
        "provider": "wx2ea687f4258401a9",
          "contexts": [
            {
              "type": "isolatedContext"
            }
          ]
      }
    }
    

#### 3\. 在小游戏代码中引用

通过 `requirePlugin` 来调用插件的代码 注意：

  1. 由于低版本基础库环境没有 requirePlugin，必须要先判断是否有 requirePlugin
  2. 插件环境没有 wx，需要开发者传入

`game.js`
    
    
    let MiniGameCenter;
    function createMiniGameCenter(options, callback) {
      try {
        if (typeof requirePlugin !== 'undefined') {
          if (!MiniGameCenter) {
            MiniGameCenter = requirePlugin('MiniGameCenter', {
              enableRequireHostModule: true,
              customEnv: {
                wx,
              },
            }).default;
          }
          if (!MiniGameCenter) {
            console.log('插件初始化失败');
            return;
          }
          const minigameCenter = new MiniGameCenter(options);
          if (typeof minigameCenter === 'undefined' || typeof minigameCenter.on === 'undefined') {
            // 插件初始化失败
            console.error('minigameCenter create error');
          } else {
            // 等待插件初始化完成
            minigameCenter.on('ready', () => {
              // 插件ready之后再在其他场景使用，后续通过是否存在GameGlobal.minigameCenter对象来判断组件是否初始化完成
              GameGlobal.minigameCenter = minigameCenter;
    
              // do something
              callback(minigameCenter);
            });
    
            minigameCenter.on('error', (err) => {
              console.log('插件出错', err);
            });
          }
        }
      } catch (e) {
        // 基础库版本过低
        console.error(e);
      }
    }
    
    // 创建组件，默认隐藏入口
    createMiniGameCenter(
      {
        autoShow: false,
      },
      () => {
        // 先判断组件是否初始化完成
        if (GameGlobal.minigameCenter) {
          // 在游戏需要显示的场景手动显示入口
          // 此处建议在回调里判断根据游戏逻辑代码判断当前场景是否需要显示
          GameGlobal.minigameCenter.show();
    
          // 设置tabs
          GameGlobal.minigameCenter.setTabs(['chat', 'player']);
        }
      }
    );
    

#### 4\. 签名认证和设置用户发言权限(聊天鉴权用)

授权发言权限，需要先设置 signature，否则所有用户默认无法在聊天发言

当用户打开组件时（点击入口图标或者调用`open()`），会获取授权信息，通过监听`authorize`事件，获取 rawData

调用登录获取 code，和 rawData 一起发送到服务器端 或者 云函数

在服务器端 或者 云函数中，调用 auth.code2Session 接口获取 session_key，使用 sha256.hmac(`${session_key}`, `${rawData}`) 加密计算出签名 signature 并返回

游戏侧获取返回的签名 signature 并设置签名信息，就可以正常使用聊天功能

注意：

  1. 如果有服务器，建议优先使用开发者自己的服务器完成加密签名，不使用云函数
  2. 签名授权只有 1 小时，超时后会要求用户重新授权，在每次打开组件时都会要求授权防止过期
  3. session_key 相关获取方法：[小程序登录](<../account/login.md>)
  4. 不要把 session_key 下发到小游戏内，session_key 只在服务器端使用

云函数示例：

1、game.js代码片段
    
    
    // 获取聊天的rawData（每次聊天会调用），校验用户有聊天资格后生成 signature
    GameGlobal.minigameCenter.on('authorize', (authorizeData) => {
      if (authorizeData.rawData) {
        wx.login({
          success(res) {
            if (res.code) {
              wx.cloud
                .callFunction({
                  name: 'verifyChatAuthorize',
                  data: {
                    rawData: authorizeData.rawData,
                  },
                })
                .then((res) => {
                  GameGlobal.minigameCenter.setChatSignature({ signature: res.result.signature });
                  // 如果配置了互动消息，建议在确认已设置签名后再显示“发送到世界频道”的按钮
                })
                .catch(console.error);
            } else {
              console.log(`校验聊天权限失败！${res.errMsg}`);
            }
          },
        });
      }
    });
    

2、云函数核心逻辑： cloudfunctions/verifyChatAuthorize/index.js
    
    
    const cloud = require('wx-server-sdk');
    
    cloud.init({
      env: cloud.DYNAMIC_CURRENT_ENV
    });
    
    exports.main = async (event, context) => {
      const { rawData } = event;
      // 这里可以增加额外的校验逻辑，比如用户等级>=X才允许有聊天权限
      // 不满足等级要求可以不返回签名
      const res = await cloud.getCloudCallSign({
        parameterList: [rawData]
      });
      return { signature: res.signature };
    };
    

开发者还可以自己根据用户的游戏等级或者其他游戏数值去判断该用户是否有发言权限
    
    
    // 此处的canChat是伪代码，开发者根据游戏信息自行判断哪些用户可以发言，或者可以默认所有人都可以发言
    // chatEnable默认为ture
    if (canChat) {
      // 当前用户有发言权限
      GameGlobal.minigameCenter.setChatEnable(true);
    } else {
      // 当前用户没有权限
      GameGlobal.minigameCenter.setChatEnable(false, { msg: '活跃度达到20以上才可以发言' });
    }
    

### 其他功能

#### 1\. 隐藏和显示入口
    
    
    // 手动隐藏入口
    GameGlobal.minigameCenter.hide();
    
    // 手动显示入口，显示时可以手动传入x和y参数来设置初始化的位置，不传则显示隐藏时的位置
    GameGlobal.minigameCenter.show({ x: 0, y: 0 });
    

#### 2\. 外层入口位置设置

  1. 如果想要设置入口固定位置，可以在创建 MiniGameCenter 对象时传入`{ movable: false }`，来固定入口的位置，注意也要传入 x 和 y 来固定初始位置
  2. 如果想要入口支持拖拽但是不会吸附到屏幕两侧，可以在创建对象时传入`{ enableSnap: false }`，如果游戏的两侧按钮较多，可以使用该参数

#### 3\. 自定义入口样式
    
    
    new MiniGameCenter({
      logoUrl: 'https://xxx.png', // 自定义入口icon
      fontColor: 'rgba(255, 0, 0, 1)', // 自定义弹出消息文字颜色
      backgroundColor: 'rgba(255, 0, 0, 0.2)', // 自定义弹出消息背景色
      strokeColor: 'rgba(0, 255, 0, 1)', // 自定义弹出消息描边颜色
    });
    

#### 4\. 自定义配置内层 tab

默认展示全部 tab，如果期望手动配置 tab，不展示某些功能，比如不想展示排行榜，可以通过 setTabs 设置
    
    
    GameGlobal.minigameCenter.setTabs(['chat', 'player']); // 不展示组件中的排行榜
    

可选 tab 配置有:

  1. 世界聊天 chat
  2. 玩家广场 player
  3. 直播 live （基础库版本**2.21.2** 开始支持）
  4. 排行榜 rank
  5. 通知 bulletin

注意：传入数组的顺序会影响展示 tab 的顺序

#### 5\. 打开和关闭组件（支持打开指定 tab）

社交组件自带关闭区域，如果在某些场景下需要强制关闭组件，可以调用 close
    
    
    GameGlobal.minigameCenter.close(); // 不等待用户点击页面中的关闭，强制关闭组件
    

如果需要在某些场景主动打开社交组件，可以调用 open，并且可以给 open 传参数来指定打开的 tab 页
    
    
    GameGlobal.minigameCenter.open('rank'); // 不通过入口点击，直接调用api打开组件，可以通过传参数来默认打开的tab，也可以不传
    

可选 tab 配置有:

  1. 世界聊天 chat
  2. 玩家广场 player
  3. 直播 live （基础库版本**2.21.2** 开始支持）
  4. 排行榜 rank
  5. 通知 bulletin

注意：调用 open 打开必须在组件正常显示时调用

#### 6\. 发送互动消息

游戏侧发送互动消息内容，丰富世界频道中消息类型，促进玩家互动

当 A 用户主动触发了 sendInteract 时，会在世界频道发送一条消息，游戏侧需要在服务器保存发送的互动消息 ID 此时 B，C 用户在世界频道看到后，主动点击了互动消息中的按钮，会触发监听事件 interact，此时游戏侧根据获取到的互动消息 ID 去服务器查询并做出对应事件

interactID 是选填的，如果不传则会自动生成一个，并在 then 中返回 开发者在服务器保存创建或返回的 interactID 作为互动事件的 ID，当其他用户触发这个 ID 时作出对应动作
    
    
    GameGlobal.minigameCenter
      .sendInteract({
        interactID: 'xxxxx',
        content: '我打了999分，你呢？',
        buttonText: '挑战',
        currentPlayerNumber: 3,
        totalPlayerNumber: 5,
      })
      .then((res) => {
        // do something
      })
      .catch((err) => {});
    
    GameGlobal.minigameCenter.on('interact', (res) => {
      if (res.is_self) {
        wx.showToast({
          icon: 'none',
          title: '不能响应自己的互动消息',
        });
        return;
      } else {
        wx.showToast({
          icon: 'none',
          title: '响应互动消息' + res.interactID,
        });
      }
    });
    

注意：调用 sendInteract 必须在组件正常显示时调用

#### 7\. 通知

管理员可以发布和删除通知，需先在「MP后台-能力地图-游戏圈-前往配置-基础设置-运营人员配置」设置社交组件管理员

发布通知内容后，普通用户才会展示通知 tab

#### 8\. 监听触发事件
    
    
    GameGlobal.minigameCenter.once('ready', () => {
      // 初始化完成
    });
    
    GameGlobal.minigameCenter.on('show', () => {
      // 执行一些打开组件显示后的事件，比如数据上报
    });
    
    GameGlobal.minigameCenter.on('open', () => {
      // 执行一些打开组件成功后的事件，比如数据上报
    });
    
    GameGlobal.minigameCenter.on('error', () => {
      // 方便观察接入过程中遇到的问题
    });
    

#### 9\. 自定义配置直播广场置顶 openid

mp 端开启一键开播功能后，组件内自动展示直播 tab，若需隐藏可以使用[GameGlobal.minigameCenter.setTabs]修改

直播 tab 支持置顶直播：在直播广场内，支持置顶，通过此 API 填入 openid 的数组，设定置顶的主播的直播，数组最多设置 4 个，超出部分截断
    
    
    GameGlobal.minigameCenter.setLiveStickyOpenIds(['xxxxx']);
    

### API

#### Options

名称 | 类型 | 默认 | 功能说明  
---|---|---|---  
x | number | 8 | 入口浮层初始位置 X  
y | number | screenHeight * 0.3 | 入口浮层初始位置 Y  
autoShow | boolean | true | 创建后是否默认展示入口  
backgroundColor | string | 'rgba(0, 0, 0, 0.5)' | 背景颜色  
strokeColor | string | 'rgba(255, 255, 255, 0.2)' | 描边颜色  
logoUrl | string |  | 自定义入口 icon cdn 地址  
movable | boolean | true | 是否可拖拽  
enableSnap | boolean | true | 是否会吸附到左右  
scale | number | 1 | 面板缩放比例，默认大小 40x40，低于 375 宽度的屏幕会等比缩小  
  
#### Methods

名称 | 参数 | 功能说明  
---|---|---  
show | { x: number, y: number } | 显示入口  
hide |  | 隐藏入口  
open | string | 打开组件  
close |  | 关闭组件  
setTabs | string[] | 配置 tab，默认全部展示  
sendInteract | sendInteractData | 发送互动消息  
setChatSignature | { signature: string } | 设置签名  
setChatEnable | boolean, {msg: string} | 设置是否可聊天  
setLiveStickyOpenIds | string[] | 设置直播广场内置顶主播的直播  
  
#### 监听事件

名称 | 参数 | 说明  
---|---|---  
ready |  | 初始化完成  
show |  | 当显示入口  
hide |  | 当隐藏入口  
open |  | 当组件被打开  
close |  | 当组件被关闭  
error |  | 出错  
interact | getInteractData | 触发了互动消息  
authorize | {rawData: string} | 自定义发言权限  
  
#### sendInteractData

名称 | 默认值 | 说明  
---|---|---  
interactID |  | 消息透传唯一 ID  
content |  | 消息文案  
buttonText |  | 按钮文案，2 个字符  
modalTitle | '已发送到世界频道' | modal 弹窗 title  
modalContent |  | modal 弹窗 content  
currentPlayerNumber |  | 当前互动消息房间人数  
totalPlayerNumber |  | 互动消息房间总人数  
  
#### getInteractData

名称 | 说明  
---|---  
interactID | 互动消息 ID  
is_self | 是否是自己发送的消息  
content | 发送的消息内容

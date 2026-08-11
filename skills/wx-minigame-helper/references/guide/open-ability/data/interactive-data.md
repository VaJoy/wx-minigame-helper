---
title: "关系链互动数据"
type: guide
category: guide/open-ability/data
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/interactive-data.html
---

# 关系链互动数据

在开放 [关系链数据能力](<open-data.md>) 的基础上，小游戏新增 互动型托管数据 ，提供关系链互动能力，用于实现小游戏内微信好友互动（点赞，送礼物等）的功能。如果用户已通过 [wx.requestSubscribeSystemMessage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html>) 订阅 [好友互动提醒](<../message/subscribe-system-message.md>)，则当有朋友赠送道具时，会自动触发用户会通过服务通知收到互动提醒

![](https://res8.wxqcloud.qq.com.cn/wxdoc/4bbe273e-ead4-4c81-96d1-0e83e3bb35ec.jpg) ![](https://mmgame.qpic.cn/image/3434279af061d7a450c813c4b82ff1ebd8affc338a54384935c459f410ab17a9/0)

关系链互动数据能力支持：

  * 好友间互赠 50 种游戏内道具
  * 提供成功互动后的主域回调，满足互动后激励的场景。
  * 开发者配置互动交互文案后，用户可在微信游戏其他场景，获得互动提醒。
  * 用户发起互动后，可通过微信分享消息告诉好友。
  * 从定向分享进入游戏，可向分享发起者发起一次免确认的互动，用于满足分享后激励的场景。

关系链互动能力 已支持的场景举例：
    
    
    以下描述中，金币、皮肤为游戏数据，点赞数为托管数据。
    A 与 BC 为微信好友。 B为游戏注册用户；C 为游戏流失或未注册用户。
    

**游戏场景** | 备注  
---|---  
A 赠送 B 金币，并微信告诉他 |   
A 给 B 赠送金币，A 可获得金币奖励 |   
A 微信邀请 C（流失或新用户），C 进入游戏后，A 金币+1，C 金币+1 | 结合[定向分享](<../share/share-to-specific-friend.md>)能力  
A 微信向 B 索要点赞，B 进入游戏后给 A 点赞 | 结合[定向分享](<../share/share-to-specific-friend.md>)能力  
A 看到 好友 B 游戏在线，并向 B 发起对局邀请。 | 结合[游戏状态服务](<../account/user-status.md>)能力  
  
##### 互动型托管数据与普通托管数据的对比如下：

| 普通托管数据 | 互动型托管数据  
---|---|---  
单用户数据大小 | 每个用户最多 128 个 key，每个 key 对应的 key+value 提供 1kb 存储 | 每个用户最多 50 个 key，每个 key 对应的 value 只提供 1 个 32 位整型存储。  
数据来源 | 开放数据域/主域/后台 | 开放数据域/后台  
数据流向 | 开放数据域 | 开放数据域/**主域**  
写入方式 | 覆盖写 | 递增(在开放数据域)，覆盖写(后台)  
写入时机 | 任意时机 | 用户点击弹框确认  
写入对象 | 只能写本人 | 写好友(在开放数据域)，写本人(后台)  
读取对象 | 任意（本人/好友） | 只能读本人  
  
可以看到关系链互动数据可以从小游戏主域直接读取。

提供以下前端接口读写关系链互动数据

  * [wx.getUserInteractiveStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserInteractiveStorage.html>)读取当前用户关系链互动数据
  * [wx.modifyFriendInteractiveStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.modifyFriendInteractiveStorage.html>)修改当前用户好友的关系链互动数据

提供以下后端接口写关系链互动数据

  * [storage.setUserInteractiveData](<https://developers.weixin.qq.com/minigame/dev/api-backend/data/api_storage.setuserinteractivedata>)写当前用户的关系链互动数据

## 数据安全性校验

由于互动型托管数据涉及用户好友的游戏业务数据，这里为游戏方提供一种安全的，灵活的校验方式。

微信提供一个后台 JS 运行环境，由开发者上传一段代码，平台方在接受小程序前端发起的写入请求之后执该逻辑，并根据返回结果判断是否要真正执行写入操作。

## 扩展后的关系链开放能力

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c6c1ccc3-a1ca-4463-8c05-c406863a6422.jpg)

### 后台 JS 运行环境 JSServer

  * 安全可控的后台 JS 运行环境
  * 提供读写用户关系链数据的能力

###### 接入准备

  1. 上传代码要求开发者工具版本(1.02.1908012)及其以上。[下载地址](<https://developers.weixin.qq.com/miniprogram/dev/devtools/log>)

###### 代码编写规范要求

  1. 定义函数 main

  2. export 函数 main
         
         // checkInteractiveData.js
         exports.main = function(req) {
           const data = JSON.parse(req);
           console.log(data.toUser);
           console.log(data.key);
           console.log(data.opNum);
           const ok = check(); // 游戏侧自行实现校验逻辑
           if (ok) {
             // 验证通过
             return JSON.stringify({ ret: true });
           } else {
             // 验证不通过
             return JSON.stringify({ ret: false });
           }
         };
         

###### 代码上传/下载

  1. 工具配置文件 project.config.json 新增配置项
         
         // project.config.json
         {
           "jsserverRoot": "jsserver"
         }
         

  2. 配置生效后，该目录不参与编译，所以建议该目录不在小游戏代码根目录里。
         
         ├── game.js
         ├── jsserver
         │   └── checkInteractiveData.js
         

  3. 鼠标右键点击对应目录，可以看到新建 JS 的选择项，点击即可创建一个 JS 文件，这里一个 JS 文件即为一个小游戏前端请求 JSServer 的入口，文件名即入口标识，如果已经有开发者创建同名 JS，会失败, 目前只支持上传**checkInteractiveData.js** 。

  4. 工具可以下载该小游戏已经上传的 JS 代码,分为开发版和正式版。

  * 正式版小程序发起请求会拉取正式版的 JSServer 代码执行
  * 开发版,体验版小程序以及开发工具发起的请求会拉取开发版的 JSServer 代码执行
  * 请注意开发版本和正式版本各自只有一份代码

###### JSServer 提供的开放接口

  * 获取用户本人的 openid

接口名：wx.getOpenId()

参数：无

返回：openid
        
        let openid = wx.getOpenId();
        

  * 读取用户托管数据存储

接口名：wx.getFriendUserStorage()

参数：Array.< String >

返回：Array.< [KVData](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/KVData.html>) >
        
        //示例：
        let friendsStorage = wx.getFriendUserStorage(["friendGift"]);
        

需要注意，添加新微信好友后的 2 小时内，getFriendUserStorage 可能获取不到该新好友的数据。

  * 写用户托管数据存储

接口名：wx.setFriendUserStorage()

参数：openid，Array.< [KVData](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/KVData.html>) >

返回：{"errcode":0}
        
        //示例：
        let ret = wx.setFriendUserStorage(openid, [
          {
            key: "friendGift",
            value: JSON.stringify(giftRecords)
          }
        ]);
        if (ret.errcode != 0) {
          console.error("set err"); //console 所打印的日志会通过接口返回给前端
        } else {
          console.log("set success");
        }
        

###### 备注

  * JSServer 内所有接口均为同步。
  * JSServer 单次处理请求超时时间为 1s，超过后任务会被终止。

###### 互动型托管数据结合 JSServer 实现好友互动能力

  1. wx.modifyFriendInteractiveData 接口在具体写入操作之前会默认执行开发者托管在 JSServer 上的一段代码，要求开发者使用开发者工具上传文件 checkInteractiveData.js。

     * 开发者在`checkInteractiveData.js`可以拿到参数 
       * 用户本人openid:wx.getOpenId()
       * 目标好友openid:toUser
       * 增加的数据:opNum
       * 修改数据的index(1 ~ 50): key
     * 要求返回字段bool型 "ret" 字段告诉微信请求是否合法

  2. 开发者可以在 checkInteractiveData.js 中读写普通托管数据来存储用户互动记录。

###### 利用关系链互动和 JSServer 的能力实现赠送金币的能力示例

![](https://res8.wxqcloud.qq.com.cn/wxdoc/05300774-9dab-480a-b854-383153dff439.jpg)

###### 示例代码:（[点击下载](<https://res.wx.qq.com/wxdoc/dist/assets/media/interactive-demo.e75b4e19.zip>)）

###### 订阅和赠送金币的示例

我们提供了相关的[代码片段](<https://developers.weixin.qq.com/s/NR7wGJmz7pRD>)，可以预览代码片段体验如何订阅和赠送好友金币

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/NR7wGJmz7pRD> "在开发者工具中预览效果")

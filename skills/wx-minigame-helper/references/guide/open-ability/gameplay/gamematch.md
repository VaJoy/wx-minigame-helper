---
title: "对局匹配"
type: guide
category: guide/open-ability/gameplay
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/gamematch.html
---

## 对局匹配

对局匹配是[游戏服务](<game-server.md>)的一项，适用于需要匹配服务的多人游戏。

### 功能介绍

每个小游戏可以申请拥有一个或者多个匹配池，每个匹配池对应一个`matchid`。

用户可以在小游戏中加入一个特定的匹配池。

如果当前匹配池中的用户符合当前匹配池对应的匹配规则，匹配服务则会从匹配池中取出这批用户，将[匹配结果](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html>)推送给各个客户端。

![](https://res.wx.qq.com/a/fed_upload/c9ea81e4-f1e7-4bef-afc0-6aebcdfeb607/6231611142266_.pic.jpg) ![](https://res.wx.qq.com/a/fed_upload/c9ea81e4-f1e7-4bef-afc0-6aebcdfeb607/6261611142442_.pic.jpg) ![](https://res.wx.qq.com/a/fed_upload/c9ea81e4-f1e7-4bef-afc0-6aebcdfeb607/6251611142358_.pic.jpg)

### matchid申请

小游戏可以通过后台接口[createMatchRule](<https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.creatematchrule>)为小游戏申请一个或者数个`matchid`，每个`matchid`对应一个匹配池。

申请`matchid`时可以指定匹配规则，每个小游戏最多同时持有20个`matchid`。

当前申请`matchid`需要包含的信息有：

参数 | 类型 | 说明  
---|---|---  
team_count | Number | 队伍数量  
team_member_count | Number | 每个队伍玩家数量  
need_room_service | Number | 匹配完成时是否需要创建帧同步房间，0:不需要，1:需要。可以匹配完成后自动创建[帧同步房间](<lock-step.md>)，并返回`accessInfo`，要求对局人数不超过10人才可使用该项。  
  
### 开发

#### 创建matchid

通过后台接口[createMatchRule](<https://developers.weixin.qq.com/minigame/dev/api-backend/gamematch/api_gamematch.creatematchrule>)为小游戏申请`matchid`。

#### 登陆游戏服务

使用[游戏服务](<game-server.md>)内封装的接口需要先调用 [GameServerManager.login](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.login.html>) 登录游戏服务。
    
    
    const svr = wx.getGameServerManager()
    svr.login().then(() => {
      console.warn('游戏服务登录成功')
    }).catch(err => {
      console.warn('游戏服务登录失败', err)
    })
    

#### 用户加入匹配

在登陆游戏服务成功之后，调用[GameServerManager.startMatch](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startMatch.html>)接口加入匹配。通过传入`matchid`加入其对应的匹配池。

如果`matchid`对应的匹配规则中队伍人数大于1，可以通过`fillType`来指定匹配到的结果中是否帮其填充队友。
    
    
    svr.startMatch({
        matchId : "7HUPjAc31VhGBr6ZMnduS3w38koFpD6SOxCm3_2fa9c",
        success: () => {
          console.log('加入匹配成功')
        },
        fail: res => {
          console.error('加入匹配失败', res)
        }
      })
    

#### 用户取消匹配

如果用户当前已经在匹配池中，可以通过[GameServerManager.cancelMatch](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.cancelMatch.html>)取消匹配。
    
    
      svr.cancelMatch({
        matchId : "7HUPjAc31VhGBr6ZMnduS3w38koFpD6SOxCm3_2fa9c",
        success: () => {
          console.log('取消匹配成功')
        },
        fail: res => {
          console.error('取消匹配失败', res)
        }
      })
    

**注意** ：如果小游戏和后台匹配服务的websocket断开，则匹配用户会自动从匹配池中取出。

#### 监听匹配结果

用户需要监听事件[GameServerManager.onMatch](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onMatch.html>)获取对局匹配的结果。
    
    
    svr.onMatch(function (res) {
      console.log('来自系统的onMatch')
      console.log(res)
    });
    

**注意** 请保证小游戏生命周期内至多监听一个 `onMatch`事件。

### 示例小游戏

https://github.com/wechat-miniprogram/minigame-demo

![](https://res.wx.qq.com/wechatgame/product/webpack/userupload/20240919/195416/QRcode.jpg)

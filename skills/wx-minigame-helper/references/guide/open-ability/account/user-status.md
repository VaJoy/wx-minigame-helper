---
title: "状态管理与好友邀请"
type: guide
category: guide/open-ability/account
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/user-status.html
---

# 状态管理与好友邀请

## 功能介绍

用户 A 在游戏内，可向其好友 B 发送邀请消息，B 收到好友消息并接受之后，就可以加入 A 与其一起游戏。

## 登录游戏服务

要使用在线邀请功能，需要先使用接口 [GameServerManager.login](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.login.html>) 登录游戏服务。
    
    
    const gameServerManager = wx.getGameServerManager()
    gameServerManager.login().then(() => {
      console.warn('游戏服务登录成功')
    }).catch(err => {
      console.warn('游戏服务登录失败', err)
    })
    

## 开启状态管理服务

在成功登录游戏服务之后，需要开启状态管理服务 [GameServerManager.startStateService](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.startStateService.html>)。只有开启状态管理，才能够获取在线好友列表，邀请好友以及接收好友邀请。该函数支持传入一个参数 `userState` 代表当前用户的自定义状态，⻓度至多为 256 字节。
    
    
    gameServerManager.startStateService({
      userState: 'start',
      success: () => {
        console.log('开启状态管理服务成功')
        // 往开放数据域发送通知，此通知字符串为自定义字符串，接收对应处理即可
        wx.postMessage('renderFriend')
      },
      fail: res => {
        console.error('开启状态管理服务失败', res)
      }
    })
    

## 拉取在线好友列表

在开放数据域，接收到游戏域发送来的消息之后，就可以通过 [GameServerManager.getFriendsStateData](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getFriendsStateData.html>) 获取好友列表了，该列表包括好友的自定义状态（userState），系统状态（sysState）以及好友的头像昵称等个人信息。
    
    
    let list
    const gameServerManager = wx.getGameServerManager()
    wx.onMessage(type => {
      // 此处的type与上文对应
      if (type === 'renderFriend') {
        gameServerManager.getFriendsStateData({
          success: res => {
            list = res.list
            console.log('获取好友列表', list)
            // 渲染好友列表
            // ...
          },
          fail: res => {
            console.error('获取好友列表失败')
          }
        })
      }
    })
    

**提示** 当有好友状态更新（不管是自定义状态还是系统状态）时，可以通过 [GameServerManager.onStateUpdate](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onStateUpdate.html>) 事件监听到。

## 发起邀请

玩家 A 在游戏内触发一些操作（比如点击 `邀请` 按钮）之后，在开放数据域可以通过 [GameServerManager.inviteFriend](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.inviteFriend.html>) 发出邀请，该接口只接受一个参数 `openId` 代表被邀请方的 openId。
    
    
    gameServerManager.inviteFriend({ openId })
    

**提示** 如果需要在邀请时附带额外的邀请信息，请通过游戏域接口 [GameServerManager.setInviteData](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.setInviteData.html>) 实现。

## 接受邀请

好友 B 需要在游戏域监听事件 [GameServerManager.onInvite](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.onInvite.html>) 来获取邀请信息。需要注意的是，邀请信息到达 B 之后，玩家 B 会首先收到一个弹窗确认是否接受邀请，只有当邀请被接受之后，开发者才能收到这个事件的回调，如果拒绝，则不会触发回调。
    
    
    gameServerManager.onInvite(res => {
      console.log('该玩家接受了来自用户', res.openId, '的邀请')
      console.log('本次邀请的附加信息', res.data)
    })
    

**注意** 请保证小游戏生命周期内至多监听一个 onInvite 事件。

## 代码片段

我们提供了完整可运行的[代码片段](<https://developers.weixin.qq.com/s/cWZOKFmS7bVD>)，可以预览代码片段并在真机进行好友邀请体验

[在开发者工具中预览效果](<https://developers.weixin.qq.com/s/cWZOKFmS7bVD> "在开发者工具中预览效果")

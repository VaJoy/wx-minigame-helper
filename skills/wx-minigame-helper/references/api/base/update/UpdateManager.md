---
title: "UpdateManager"
type: api
category: api/base/update
api: "UpdateManager"
source: https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.html
---

# UpdateManager  
  
UpdateManager 对象，用来管理更新，可通过 [wx.getUpdateManager](<wx.getUpdateManager.md>) 接口获取实例。

## 方法

### [UpdateManager.applyUpdate()](<UpdateManager.applyUpdate.md>)

强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。

### [UpdateManager.onCheckForUpdate(function listener)](<UpdateManager.onCheckForUpdate.md>)

监听向微信后台请求检查更新结果事件。微信在小程序每次启动（包括热启动）时自动检查更新，不需由开发者主动触发。

### [UpdateManager.onUpdateReady(function listener)](<UpdateManager.onUpdateReady.md>)

监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调

### [UpdateManager.onUpdateFailed(function listener)](<UpdateManager.onUpdateFailed.md>)

监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调

## 示例代码
    
    
    const updateManager = wx.getUpdateManager()
    
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
    

## Tips

  1. 微信开发者工具上可以通过「编译模式」下的「下次编译模拟更新」开关来调试
  2. 小程序开发版/体验版没有「版本」概念，所以无法在开发版/体验版上测试更版本更新情况

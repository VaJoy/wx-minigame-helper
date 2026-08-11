---
title: "UpdateManager.onUpdateFailed(function listener)"
type: api
category: api/base/update
api: "UpdateManager.onUpdateFailed"
source: https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onUpdateFailed.html
---

# UpdateManager.onUpdateFailed(function listener)

## 功能描述

监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调

## 参数

### function listener

小程序更新失败事件的监听函数

## 示例代码

```js
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
```

---
title: "UpdateManager.applyUpdate()"
type: api
category: api/base/update
api: "UpdateManager.applyUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.applyUpdate.html
---

# UpdateManager.applyUpdate()

## 功能描述

强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。

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

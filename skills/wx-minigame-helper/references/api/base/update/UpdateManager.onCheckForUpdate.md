---
title: "UpdateManager.onCheckForUpdate(function listener)"
type: api
category: api/base/update
api: "UpdateManager.onCheckForUpdate"
source: https://developers.weixin.qq.com/minigame/dev/api/base/update/UpdateManager.onCheckForUpdate.html
---

# UpdateManager.onCheckForUpdate(function listener)

## 功能描述

监听向微信后台请求检查更新结果事件。微信在小程序每次启动（包括热启动）时自动检查更新，不需由开发者主动触发。

## 参数

### function listener

向微信后台请求检查更新结果事件的监听函数

#### 参数

##### Object res

属性 | 类型 | 说明  
---|---|---  
hasUpdate | boolean | 是否有新版本  
  
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

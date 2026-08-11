---
title: "UpdateManager wx.getUpdateManager()"
type: api
category: api/base/update
api: "wx.getUpdateManager"
source: https://developers.weixin.qq.com/minigame/dev/api/base/update/wx.getUpdateManager.html
---

# [UpdateManager](<UpdateManager.md>) wx.getUpdateManager()

> 基础库 1.9.90 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

获取**全局唯一** 的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看[运行机制](<../../../guide/runtime/operating-mechanism.md>)文档。

## 返回值

### [UpdateManager](<UpdateManager.md>)

更新管理器对象

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

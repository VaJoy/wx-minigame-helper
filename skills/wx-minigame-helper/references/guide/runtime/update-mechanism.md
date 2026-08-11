---
title: "小游戏更新机制"
type: guide
category: guide/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/runtime/update-mechanism.html
---

# 小游戏更新机制

## 静默更新

开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。

### 未启动时更新

6.6.3 及以上版本的客户端，会定时检查最近使用过的小程序是否有发布新版本；如果有，下次打开的时候会同步更新新版本再打开。这可以保证在新版本发布 24 小时后，所有小程序都能使用最新版本。

### 启动时更新

小程序每次**冷启动** 时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。

## 强制更新

如果需要用户马上应用最新版本，可以使用以下两种方式

### 检测更新API

可以使用 [wx.getUpdateManager](<https://developers.weixin.qq.com/minigame/dev/api/base/update/wx.getUpdateManager.html>) API 进行处理。
    
    
    const updateManager = wx.getUpdateManager();
    
    updateManager.onCheckForUpdate(function(res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate);
    });
    
    updateManager.onUpdateReady(function() {
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      });
    });
    
    updateManager.onUpdateFailed(function() {
      // 新版本下载失败
    });
    

**调试API：** 微信开发者工具提供了强制更新的调试能力，通过编译模式 - 编辑编译模式 - 勾选「下次编译时模拟更新」即可在开发者工具上调试强制更新功能（真机无法调试）

### 设置最低可用版本

  * 如果希望用户始终打开最新版本，可通过【MP后台 - 设置 - 基本设置 - 小程序最低可用版本】，修改为最新版本

## 已知问题

  1. 部分客户端的用户在特定场景访问时，在某个时间周期内始终无法触发静默更新，如果对于版本依赖高的游戏，建议始终开启检测更新API。
  2. Mac客户端和低版本PC客户端在特定场景下`onCheckForUpdate`回调没有触发，不要过于依赖该回调。
  3. 回退时可以选择版本，最多回退最近的5个版本，选择版本时请注意是否包含插件版本更新。

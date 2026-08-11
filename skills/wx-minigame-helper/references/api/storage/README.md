# 本地存储

> 路径：`api/storage/`　|　本目录 12 篇，1 个子分类

## 子分类

| 子分类 | 文档数 |
|---|---|
| [周期性拉取](background-fetch/README.md) | 4 |

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.clearStorage(Object object)](wx.clearStorage.md) | 清理本地数据缓存。 |
| [wx.clearStorageSync()](wx.clearStorageSync.md) | wx.clearStorage 的同步版本 |
| [string wx.createBufferURL(ArrayBuffer|TypedArray buffer)](wx.createBufferURL.md) | 根据传入的 buffer 创建一个唯一的 URL 存在内存中 |
| [wx.getStorage(Object object)](wx.getStorage.md) | 从本地缓存中异步获取指定 key 的内容。 |
| [wx.getStorageInfo(Object object)](wx.getStorageInfo.md) | 异步获取当前storage的相关信息。 |
| [Object wx.getStorageInfoSync()](wx.getStorageInfoSync.md) | wx.getStorageInfo 的同步版本 |
| [any wx.getStorageSync(string key)](wx.getStorageSync.md) | 从本地缓存中同步获取指定 key 的内容。 |
| [wx.removeStorage(Object object)](wx.removeStorage.md) | 从本地缓存中移除指定 key。 |
| [wx.removeStorageSync(string key)](wx.removeStorageSync.md) | wx.removeStorage 的同步版本 |
| [wx.revokeBufferURL(string url)](wx.revokeBufferURL.md) | 根据 URL 销毁存在内存中的数据 |
| [wx.setStorage(Object object)](wx.setStorage.md) | 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存 |
| [wx.setStorageSync(string key, any data)](wx.setStorageSync.md) | 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存 |

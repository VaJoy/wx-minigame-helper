# 本地存储 / 周期性拉取

> 路径：`api/storage/background-fetch/`　|　本目录 4 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.getBackgroundFetchData(object object)](wx.getBackgroundFetchData.md) | 拉取 backgroundFetch 客户端缓存数据。 当调用接口时，若当次请求未结束，会先返回本地的旧数据（之前打开小程序时请求的），如果本地没有旧数据，安卓上会返回fail，不会等待请求完成，iO |
| [wx.getBackgroundFetchToken(Object object)](wx.getBackgroundFetchToken.md) | 获取设置过的自定义登录态。若无，则返回 fail。 |
| [wx.onBackgroundFetchData(function listener)](wx.onBackgroundFetchData.md) | 监听收到 backgroundFetch 数据事件。如果监听时请求已经完成，则事件不会触发。建议和 wx.getBackgroundFetchData 配合使用 |
| [wx.setBackgroundFetchToken(object object)](wx.setBackgroundFetchToken.md) | 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性 |

---
title: "获取 URL Link"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/url-link.html
---

# 获取 URL Link

**自 2022 年 4 月 11 日起，URL Link有效期最长 30 天，不再支持永久有效的URL Link、不再区分短期有效URL Link与长期有效URL Link。若在微信外打开，用户可以在浏览器页面点击进入小程序。每个独立的URL Link被用户访问后，仅此用户可以再次访问并打开对应小程序，其他用户无法再次通过相同URL Link打开该小程序。** **在本次规则调整生效前已经生成的URL Link，如果有效期超过30天或长期会被降级为30天有效，只能被1个用户访问，开始时间从调整日期开始计算。** 详细调整说明可见[《小程序链接生成与使用规则调整公告》](<https://developers.weixin.qq.com/community/develop/doc/000aeab88a4ea0c5c89d81fde5b801>)。

通过[服务端接口](<https://developers.weixin.qq.com/minigame/dev/api-backend/url-link/api_generateurllink>)可以获取打开小程序任意页面的 URL Link。适用于从短信、邮件、网页、微信内等场景打开小程序。 通过 URL Link 打开小程序的场景值为 1194。  
生成的 URL Link 如下所示：
    
    
    https://wxaurl.cn/*TICKET* 或 https://wxmpurl.cn/*TICKET*
    

## 调用上限

每天生成 URL Scheme 和 URL Link 总数量上限为 1000 万

## 注意事项

  1. 只能生成已发布的小程序的 URL Link。
  2. 在微信内或者安卓手机打开 URL Link 时，默认会先跳转官方 H5 中间页，如果需要定制 H5 内容，可以使用云开发静态网站。

## 开放范围

针对非个人主体小程序开放。

## 示例代码

默认官方 H5 示例地址：https://wxaurl.cn/pFawq35qbfd

自定义 H5 示例地址：https://wxaurl.cn/GI7aI2G1otd

> 示例使用了云开发静态网站托管搭建网页，无需公众号，只需准备好已认证的小程序和开通云开发。 详细代码示例和说明：[云开发静态网站跳转小程序](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/staticstorage/jump-miniprogram>)。

---
title: "UserInfo"
type: api
category: api/open/user-info
api: "UserInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/user-info/UserInfo.html
---

# UserInfo

用户头像昵称获取规则已调整，参考 [用户信息接口调整说明](<https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801>)、[小程序用户头像昵称获取规则调整公告](<https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01>)

用户信息

## 属性

### string nickName

用户昵称

### string avatarUrl

用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。

### number gender

用户性别。不再返回，参考 [相关公告](<https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801>)

**gender 的合法值**

值 | 说明 | 最低版本  
---|---|---  
0 | 未知 |   
1 | 男性 |   
2 | 女性 |   
  
### string country

用户所在国家。不再返回，参考 [相关公告](<https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801>)

### string province

用户所在省份。不再返回，参考 [相关公告](<https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801>)

### string city

用户所在城市。不再返回，参考 [相关公告](<https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801>)

### string language

显示 country，province，city 所用的语言。强制返回 “zh_CN”，参考 [相关公告](<https://developers.weixin.qq.com/community/develop/doc/00028edbe3c58081e7cc834705b801>)

**language 的合法值**

值 | 说明 | 最低版本  
---|---|---  
en | 英文 |   
zh_CN | 简体中文 |   
zh_TW | 繁体中文 |

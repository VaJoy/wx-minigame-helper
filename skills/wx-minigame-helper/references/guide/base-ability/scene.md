---
title: "场景值"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/scene.html
---

# 场景值

**场景值用来描述用户进入小程序的路径。**

由于Android系统限制，目前还无法获取到按 Home 键退出到桌面，然后从桌面再次进小程序的场景值，对于这种情况，会保留上一次的场景值。

## 获取场景值

对于小游戏，可以在 [wx.getLaunchOptionsSync](<https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html>) 和 [wx.onShow](<https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html>) 中获取场景值


## 场景值列表

场景值 ID | 说明 | 图例  
---|---|---  
1000 | 其他 | /  
1001 | 发现页小程序「最近使用」列表（基础库 2.2.4-2.29.0 版本包含「我的小程序」列表，2.29.1 版本起仅为「最近使用」列表） | /  
1005 | 微信首页顶部搜索框的搜索结果页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/804aad5e-025b-49ef-a10c-d2929216fd13.png)  
1006 | 发现栏小程序主入口搜索框的搜索结果页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c2f6387b-c978-4019-a732-1ed77b66ae1a.png)  
1007 | 单人聊天会话中的小程序消息卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d565bb86-398f-4da3-90a7-5cecf3503275.png)  
1008 | 群聊会话中的小程序消息卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/16e5f2a9-7e99-4132-8d35-0710793c0ada.png)  
1010 | 收藏夹 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/e1b952ce-1883-4a33-959e-d84b14e6fd6b.png)  
1011 | 扫描二维码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/7785aa02-e690-4da1-8c2a-81555074d02e.png)  
1012 | 长按图片识别二维码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ec112ad2-8681-418e-97ee-d77b48b6a7d0.png)  
1013 | 扫描手机相册中选取的二维码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/7283b316-1e70-45bb-bb17-695235640497.png)  
1014 | 小程序订阅消息（与 1107 相同） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/5ecd31b1-dd9f-427c-ab97-4dd4d8f23c88.png)  
1017 | 前往小程序体验版的入口页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/2c550945-4325-466f-852c-658d6b67ec11.png)  
1018 | openWeApp JSAPI，网页打开进入小程序 | /  
1019 | 微信钱包（微信客户端 7.0.0 版本改为支付入口） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/eafd563e-7cce-4f51-a073-d2363974b630.png)  
1020 | 公众号 profile 页相关小程序列表（已废弃） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/67e4b4dd-fb73-4346-af3c-8fe903ff2d2b.png)  
1022 | 聊天顶部置顶小程序入口（微信客户端 6.6.1 版本起废弃） | /  
1023 | 安卓系统桌面图标 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a7fb0c20-3912-4ce4-881c-18129f58e50a.png)  
1024 | 小程序 profile 页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/9db4e842-675c-45b1-961d-0c5e81f8c726.png)  
1025 | 扫描一维码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d5b00b5d-3a6b-43fc-bca4-d791be67568e.png)  
1026 | 发现栏小程序主入口，「附近的小程序」列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/fd9caa84-e948-4e4c-8bad-36798c152dd4.png)  
1027 | 微信首页顶部搜索框搜索结果页「使用过的小程序」列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d18490d4-64de-4098-a37e-3fd21900fb54.png)  
1028 | 卡包里的券和礼品卡，打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/be5a773c-9867-45ef-9ef9-3f8ea230f1c1.png)  
1029 | 小程序中的卡券详情页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/13ca583a-fddf-44b4-bec8-38cb2482c259.png)  
1030 | 自动化测试下打开小程序 | /  
1031 | 长按图片识别一维码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/53d69215-b1ad-4512-ae7f-eaf483c046e9.png)  
1032 | 扫描手机相册中选取的一维码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ce3c0556-40e3-49a4-a7b3-62e47591a69e.png)  
1034 | 微信支付完成页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0fee824d-10b3-45a2-a981-5697607e9bba.png)  
1035 | 公众号自定义菜单 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b581242f-6d87-4517-9ad8-c4ce4fc03add.png)  
1036 | App 分享消息卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/117cdea9-f55b-476b-a954-c4465886ecec.png)  
1037 | 小程序打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/24088adc-6493-47c2-b788-c6d8a7ef25ca.png)  
1038 | 从另一个小程序返回 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/aa98230b-99e4-4202-b0f3-286f503258e0.png)  
1039 | 摇电视 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8551b40c-4267-457e-8d79-7b9176246449.png)  
1042 | 添加好友搜索框的搜索结果页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/2bb93970-24df-47fd-83c6-520a8d3b4c2c.png)  
1043 | 公众号模板消息 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ff15335d-0a28-4702-9583-50ecbb1b1210.png)  
1044 | 带 shareTicket 的小程序消息卡片 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share/share>) | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a15bdaa3-a917-46a9-a53e-89aa79bba71d.png)  
1045 | 朋友圈广告 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/350e9f77-4d02-45b3-a65e-98e7e7b53342.png)  
1046 | 朋友圈广告详情页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0127acb4-d328-4283-89d5-f9b61fdb85e7.png)  
1047 | 扫描小程序码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/f3113d84-5f2c-49c5-8b4b-8d9b82d1e2d5.png)  
1048 | 长按图片识别小程序码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8b440602-9a05-48e5-90d5-03624ea4b66c.png)  
1049 | 扫描手机相册中选取的小程序码 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/7e4daedf-0ac2-4eb4-b27d-9c0129a46f25.png)  
1052 | 卡券的适用门店列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ae94ab62-a544-4949-ad63-357ec215b653.png)  
1053 | 发现页进入搜一搜的搜索结果页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/4be0d1b1-474e-4e82-9c2b-a0b4ce934abe.png)  
1054 | 顶部搜索框小程序快捷入口（微信客户端版本 6.7.4 起废弃） | /  
1055 | JSAPI 网页打开小程序 | /  
1056 | 聊天顶部音乐播放器右上角菜单 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/87dc8d21-10d0-4970-b0f2-86931f9158c8.png)  
1057 | 钱包中的银行卡详情页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/4976855d-0a4e-444b-9694-ceb70df96c0f.png)  
1058 | 公众号文章 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6c92745f-731a-4d6a-981a-05d82b6237a3.png)  
1059 | 体验版小程序绑定邀请页 | /  
1060 | 微信支付完成页（与 1034 相同） | /  
1064 | 微信首页连 Wi-Fi 状态栏 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/adfd70d5-348f-4321-a2b2-60b3ca684bc0.png)  
1065 | URL scheme [详情](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/url-scheme>) | /  
1067 | 公众号文章广告 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c9576a45-ff0e-43eb-8a18-54cd0714df25.png)  
1068 | 附近小程序列表广告（已废弃） | /  
1069 | 移动应用通过 openSDK 进入微信，打开小程序（外部所有APP跳转） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0f1a6ae4-f7ef-49fb-a359-2e8876d894e5.jpg)  
1071 | 钱包中的银行卡列表页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3167673b-e8c9-4926-b881-0fbf92bfbee8.png)  
1072 | 二维码收款页面 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ccef3466-e599-4992-94ef-4a1c163bf02b.png)  
1073 | 客服消息列表下发的小程序消息卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a6858f78-73e9-4f6c-bb8f-2bec99ee39d2.png)  
1074 | 公众号会话下发的小程序消息卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ba99676e-d3be-44c0-894a-44c0bacb9ef9.png)  
1077 | 摇周边 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8a1bc3b1-554b-4325-a2a6-cc1370328675.png)  
1078 | 微信连 Wi-Fi 成功提示页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/39d91716-308b-434f-bd04-79bc47f363d0.png)  
1079 | 微信游戏中心 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/bc83642a-050e-4115-a023-2c2ff6c289d7.png)  
1081 | 客服消息下发的文字链 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8dd0da1a-723f-43f6-a41c-2f8fc36e2248.png)  
1082 | 公众号会话下发的文字链 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/00a09168-1b9f-4d81-b84b-f6c3dc2dad15.png)  
1084 | 朋友圈广告原生页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/afae55d1-b48e-4307-bb48-bbc47a14fe2b.png)  
1088 | 会话中查看系统消息，打开小程序 | /  
1089 | 微信聊天主界面下拉，「最近使用」栏（基础库 2.2.4-2.29.0 版本包含「我的小程序」栏，2.29.1 版本起仅为「最近使用」栏 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/513cc562-537f-41fd-8e04-6319f8e278cc.png)  
1090 | 长按小程序右上角菜单唤出最近使用历史 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d848df07-db9f-4008-a31d-c7d7169654ee.png)  
1091 | 公众号文章商品卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a180bf54-0093-4e35-8df6-60663927c87d.png)  
1092 | 城市服务入口 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6d383521-c859-401c-adcf-0e8b004c2e5c.png)  
1095 | 小程序广告组件 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6fb1d2f4-67d9-4330-bda8-ab64788999d6.png)  
1096 | 聊天记录，打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/9cab433f-b21f-4ecd-b254-8e71853bcc63.png)  
1097 | 微信支付签约原生页，打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6a4e392c-9ad7-4194-9d52-0d4fcedba46f.png)  
1099 | 页面内嵌插件 | /  
1100 | 红包封面详情页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/4e767755-9feb-4a95-91cf-0a88d2b7127a.png)  
1101 | 远程调试热更新（开发者工具中，预览 -> 自动预览 -> 编译并预览） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/010681e6-8743-4e7f-8ccb-1cc58e7ee7f4.png)  
1102 | 公众号 profile 页服务预览 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3799795e-b2d1-434c-adc2-df9e17c4a748.png)  
1103 | 发现页小程序「我的小程序」列表（基础库 2.2.4-2.29.0 版本废弃，2.29.1 版本起生效） | /  
1104 | 微信聊天主界面下拉，「我的小程序」栏（基础库 2.2.4-2.29.0 版本废弃，2.29.1 版本起生效） | /  
1106 | 聊天主界面下拉，从顶部搜索结果页，打开小程序 | /  
1107 | 订阅消息，打开小程序 | /  
1113 | 安卓手机负一屏，打开小程序（三星） | /  
1114 | 安卓手机侧边栏，打开小程序（三星） | /  
1119 | 【企业微信】工作台内打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/37f2c331-fc86-42f1-ba86-f8b6543e7f45.png)  
1120 | 【企业微信】个人资料页内打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/227ae0d5-4527-4425-b183-255b46e36571.png)  
1121 | 【企业微信】聊天加号附件框内打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/91e6d614-e9f1-4c55-85ec-c3782e50a29f.png)  
1124 | 扫“一物一码”打开小程序 | /  
1125 | 长按图片识别“一物一码” | /  
1126 | 扫描手机相册中选取的“一物一码” | /  
1129 | 微信爬虫访问 | /  
1131 | 浮窗（8.0 版本起仅包含被动浮窗） | /  
1133 | 硬件设备打开小程序 [详情](<https://developers.weixin.qq.com/doc/oplatform/Miniprogram_Frame/index>) | /  
1135 | 小程序 profile 页相关小程序列表，打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/091efb19-2b9a-438c-a439-0702f5b66dda.png)  
1144 | 公众号文章 - 视频贴片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/7bc4ba4a-eb92-4a4b-93b9-be152f2ea895.jpg)  
1145 | 发现栏 - 发现小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/749a9a78-30ee-4a78-8cb6-fc6294db5906.png)  
1146 | 地理位置信息打开出行类小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/7e6cdaa4-5621-42e1-a43e-5facc717796e.png)  
1148 | 卡包-交通卡，打开小程序 | /  
1150 | 扫一扫商品条码结果页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d5b9ce79-4965-4ce6-8bbc-9125fc131369.jpg)  
1151 | 发现栏 - 我的订单 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0527ab55-16be-45bf-8fe2-56eecd6f6060.png)  
1152 | 订阅号视频打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3f53723e-8914-4904-9463-0b5f842dc514.jpg)  
1153 | “识物”结果页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8e22eeeb-9fdf-4ba8-b1d6-475fc15ed497.jpg)  
1154 | 朋友圈内打开“单页模式” | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/4ca4dc1a-a812-40bb-b1b5-57106c143133.png)  
1155 | “单页模式”打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0ba10c2d-bfe8-4963-bbfc-0f8c1c8bf384.png)  
1157 | 服务号会话页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ca4c73f2-99a8-4023-9b95-92f429ca0fa7.png)  
1158 | 群工具打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/cc25d7db-fbab-4418-9d5a-dcdf381c6d05.png)  
1160 | 群待办 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d4ab8ae2-dac1-40b3-9064-a4746bee5014.png)  
1167 | H5 通过开放标签打开小程序 [详情](<https://developers.weixin.qq.com/doc/service/guide/h5/opentag>) | /  
1168 | 移动/网站应用直接运行小程序 | /  
1169 | 发现栏小程序主入口，各个生活服务入口（例如快递服务、出行服务等） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c662a605-4421-4ee7-bb2e-b4248933af71.jpg)  
1171 | 微信运动记录（仅安卓） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/2fc9e798-9567-4778-aab8-2c8c1d2ce641.png)  
1173 | 聊天素材用小程序打开 [详情](<https://developers.weixin.qq.com/miniprogram/dev/framework/material/support_material>) | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b7ec1e75-712b-4669-a3bb-1f1580cdbdc8.png)  
1175 | 视频号主页商店入口 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/67dddfa2-202f-4298-8b47-c94e982c0e03.png)  
1176 | 视频号直播间主播打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/077700a8-7ba6-40e5-afe5-9f99eb8a1578.png)  
1177 | 视频号直播商品 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d89c7e74-be28-4c37-aa22-e475b94b3d51.png)  
1178 | 在电脑打开手机上打开的小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8d0a15df-040f-4f7a-89b3-17d25ec52f34.jpg)  
1179 | #话题页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3991e333-9ec6-4f32-8495-96fff9bb4f9a.png)  
1181 | 网站应用打开 PC 小程序 | /  
1183 | PC 微信 - 小程序面板 - 发现小程序 - 搜索 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a852ac9b-b912-4d36-9bde-17860b6f9a3d.png)  
1184 | 视频号链接打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d2e4765e-4118-4c91-9124-083bd7979ee2.png)  
1185 | 群公告 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b52a1562-1eb7-41fa-9a0b-b4abeb13fcc3.png)  
1186 | 收藏 - 笔记 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/cdccb76c-626e-4105-bafa-8f9bea0b7f50.png)  
1187 | 浮窗（8.0 版本起） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/85f1828c-4016-4a47-a4bb-f7cf95c9477b.png)  
1189 | 表情雨广告 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/eaa6dbe9-b11e-49c8-b965-72ada1fe5379.png)  
1191 | 视频号活动 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/be41e825-cb65-4fae-996a-c626606fb0a6.png)  
1192 | 企业微信联系人 profile 页 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6e77618b-ebc8-464d-a10b-3c72162e38e9.png)  
1193 | 视频号主页服务菜单打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/fea779e6-0db7-4ad3-a6b6-397a5ec77ed9.png)  
1194 | URL Link [详情](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/url-link>) | /  
1195 | 视频号主页商品 tab | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/478fc562-b15a-4827-ab3e-351cb41c3ef9.png)  
1196 | 个人状态打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/dd58cfb6-4925-4b85-a9af-a6419ab81d5e.png)  
1197 | 视频号主播从直播间返回小游戏 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/861bbbf3-dfbb-446c-ac04-30287967fb8e.png)  
1198 | 视频号开播界面打开小游戏 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/cbebeda6-785b-4770-8359-ccc2b0cecabb.png)  
1199 | 小游戏内“更多游戏”入口打开小程序 | /  
1200 | 视频号广告打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/4d531f3c-21e3-44d6-bcf3-7b9c3ddc0205.png)  
1201 | 视频号广告详情页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/72b29cf7-8f45-434e-84ad-2f9bfb642a49.png)  
1202 | 企微客服号会话打开小程序卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c59c6caa-5049-4c12-9ae6-89fc3e91d364.png)  
1203 | 微信小程序压测工具的请求 | /  
1205 | 非广告进入视频号直播间打开游戏卡片 | /  
1206 | 视频号小游戏直播间打开小游戏 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a0be4d50-6517-4ec0-a797-ca439271f591.png)  
1207 | 企微客服号会话打开小程序文字链 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/2e684aae-10ce-4786-ad44-34d01ad61ccc.png)  
1208 | 聊天打开商品卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/e1361633-9655-43a6-9e62-1df0f6e98468.png)  
1212 | 青少年模式申请页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6c12d50b-a9d9-4e24-9b34-2b4e1c503ddd.png)  
1215 | 广告预约打开小程序 | /  
1216 | 视频号订单中心打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/39f70258-96e8-430d-b01d-2f994f4b1f80.png)  
1218 | 微信键盘预览打开小程序 | /  
1219 | 视频号直播间小游戏一键上车 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/4d136228-6fbf-4a04-b105-9af74f9413bc.png)  
1220 | 发现页设备卡片打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/deae5336-bf71-44b0-909f-e8f74faed845.png)  
1223 | 安卓桌面 Widget 打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c4f94bd4-6fd7-4080-a9ee-bb9280638c0a.jpg)  
1225 | 音视频通话打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/f57d8eb8-422d-4a12-9b0c-8718c112e8e5.png)  
1226 | 聊天消息在设备打开后打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/cc6a1ca7-3a87-4f0a-a7f8-bc067956ec28.png)  
1228 | 视频号原生广告组件打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/187355eb-8c1f-4156-89dd-6a5e00bbca67.png)  
1230 | 订阅号 H5 广告进入小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/338bee53-1aa5-447f-8a63-4b836b0704a5.png)  
1231 | 动态消息提醒入口打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/1b91fc2d-f05d-4241-baad-c25fb34c6be0.jpg)  
1232 | 搜一搜竞价广告打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/ed5e4124-27b8-4e6a-bc70-327452caa685.jpg)  
1233 | 小程序搜索页人气游戏模块打开小游戏 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/f93854b6-0135-423e-888f-11d368faf9d1.png)  
1238 | 看一看信息流广告打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0c07697c-efe5-43b1-80fb-7884d6c81a58.png)  
1239 | 视频号小游戏直播间气泡浮窗打开小游戏 | /  
1242 | 小程序发现页门店快送模块频道页进入小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/e6c8c95c-98c2-409d-8853-f31b5b282dd2.png)  
1244 | #tag 搜索结果页打开小程序 | /  
1245 | 小程序发现页门店快送搜索结果页进入小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/9915c5b3-20ed-40d2-993f-dd1947826476.png)  
1248 | 通过小程序账号迁移进入小程序 | /  
1252 | 搜一搜小程序搜索页「小功能」模块进入小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/240a0814-e30f-439b-9386-6f7b5fae9903.png)  
1254 | 发现页「动态」卡片 打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0068fccb-9eb5-48cf-8eb2-e9f3c449b528.png)  
1255 | 发现页「我的」卡片 打开小程序 | /  
1256 | pc 端小程序面板「最近使用」列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/811150f6-7826-4c9a-8f3c-430685685ee5.png)  
1257 | pc 端小程序面板「我的小程序」列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/811150f6-7826-4c9a-8f3c-430685685ee5.png)  
1258 | pc 端小程序面板「为电脑端优化」模块 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/811150f6-7826-4c9a-8f3c-430685685ee5.png)  
1259 | pc 端小程序面板「小游戏专区」模块 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/811150f6-7826-4c9a-8f3c-430685685ee5.png)  
1260 | pc 端小程序面板「推荐在电脑端使用」列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/811150f6-7826-4c9a-8f3c-430685685ee5.png)  
1261 | 公众号返佣商品卡片 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0710b113-1dcd-403b-af40-abc1dd3e176d.jpg)  
1265 | 小程序图片详情页打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/26c6724f-8d5e-4489-8c44-2e5160ab3e46.png)  
1266 | 小程序图片长按半屏入口打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/68ca7cc7-0767-4e1f-b751-2fc448e3df06.png)  
1267 | 小程序图片会话角标打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/a68c3e0b-28f9-4918-9a9f-9d86ff70dc52.png)  
1271 | 微信聊天主界面下拉，「我的常用小程序」栏 |   
1272 | 发现页「游戏」服务 tab 打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/780dcbba-52a0-4c10-968e-5570811f556b.jpg)  
1273 | 发现页「常用的小程序」列表 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/16740b5d-8b14-4146-8851-f30313794006.png)  
1274 | 移动应用通过广告openSDK 进入微信，打开小程序（特指广告联盟跳转，如腾讯优量汇） | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/3034e0e9-0002-48cf-8d8d-e2671271a45b.jpg)  
1278 | 发现页「发现小程序」列表打开小程序 | /  
1279 | 发现页「发现小程序」合集页打开小程序 | /  
1280 | 下拉任务栏小程序垂搜「建议使用」打开小程序 | /  
1281 | 下拉任务栏小程序垂搜「发现小程序」打开小程序 | /  
1282 | 听一听播放器打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d012278a-b7de-44b0-b03d-b6bbea585699.png)  
1285 | 发现页「发现小程序」短剧合集打开小程序 | /  
1286 | 明文 scheme 打开小程序 | /  
1287 | 公众号短剧贴片打开小程序 | /  
1292 | 发现页「发现小程序」poi 详情页打开小程序 | /  
1293 | 发现页短剧卡片追剧页打开小程序 | /  
1295 | 下拉任务栏小程序垂搜「发现小程序」广告打开小程序 | /  
1296 | 视频号付费短剧气泡打开小程序 | /  
1297 | 发现-小程序-搜索「发现小程序」打开小程序 | /  
1298 | 下拉任务栏小程序垂搜「发现小程序」打开的合集访问小程序 | /  
1299 | 下拉任务栏小程序垂搜「发现小程序」poi 详情页打开小程序 | /  
1300 | 发现-小程序-搜索「发现小程序」打开的合集访问小程序 | /  
1301 | 发现-小程序-搜索「发现小程序」poi 详情页打开小程序 | /  
1302 | PC 端面板「发现小程序」 | /  
1303 | 发现页短剧卡片视频流打开小程序 | /  
1304 | 手机负一屏打开小程序（比如 oppo 手机） | /  
1305 | 公众号播放结束页打开小程序 | /  
1306 | 公众号短剧固定选集入口打开小程序 | /  
1307 | 发现页附近服务境外专区打开小程序 | 查看 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/11e775f3-99ac-4b7d-a74b-a520d37ec45f.png)  
1308 | PC 端面板小游戏专区页面 | /  
1309 | 公众号文章打开小游戏 CPS 卡片 | /  
1311 | 公众号文章打开小游戏CPS卡片 | /  
1313 | PC端openSDK分享卡片打开小程序 | /  
1347 | 「微信游戏」聊天插件打开小游戏 | /  
1362 | 小游戏官方组件跳转 | /  
1373 | 小游戏评价与推荐 | /  
1374 | 服务通知中「扫一扫」消息打开小程序 | /  
1378 | 安卓下载完成的系统通知打开小程序 | /  
1379 | agent启动小程序 | /  
1387 | 小游戏直玩广告 | /

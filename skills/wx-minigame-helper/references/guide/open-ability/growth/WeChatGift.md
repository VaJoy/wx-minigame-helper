---
title: "功能介绍"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/WeChatGift.html
---

## 功能介绍

小游戏支持开发者在 MP 端一键采购「微信小店」礼物，并在游戏内向用户发放，用于游戏内用户运营、社交裂变等场景。

## C 端体验

![](https://res8.wxqcloud.qq.com.cn/wxdoc/e04f63e3-3e2b-45c4-82be-2840b17d2b4b.png)

## 游戏收益

### 1\. 游戏用户运营，发「实物奖励」，效率提升。

  * 多种类型商品、实物，线上采购，沟通成本大幅降低。（奶茶兑换券，预计 6 月支持）
  * 企业折扣、发货、售后，商家助力，无需运营投入
  * 广告投放，品牌素材授权，平台助力完成
  * 多场景使用：小游戏、游戏圈、APP、直播间……

### 2、游戏发现场景，微信礼物外显，助力转化

搜索、游戏中心、发现小程序、擂台赛、服务通知 等，逐步扩展。游戏内，有发礼物相关的活动后，可在「MP - 能力地图 - 微信礼物」申请 C端外显权益。审核通过后，活动关联的礼物订单，日均> 10单 且 礼物仍有库存，外显即可生效。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/256d1df8-804a-4b85-b3c7-ed24e1b7f948.png)

## 游戏接入

### 1\. 选择送礼商品

游戏根据游戏属性、用户画像、游戏市场预算，确定 商品类目范围 、预算、单价、规模。开发者可以通过一下方式，找到 合适的商品 & 供应商：

  1. 「小游戏 MP - 能力地图 - 微信礼物」 直接购买推荐的礼物 或 在全部礼物中，找到全部支持游戏送礼物的商品。

  2. 「小游戏 MP - 异业合作 - 品牌库」找到合适品牌，填写问卷，平台助力，建联合作

  3. 邀请线下已建联的合作商家，合作商家入驻小店。目前有两种接入驻模式：

     * 模式 1：**合作商家开店**

合作商家注册成为小店商家，合作商家负责用户对接、发货、售后。

     * 模式 2：**小游戏开发者开店**

小游戏开发者注册成为小店商家。合作商家以 **供货商商身份入驻** [（入驻指南）](<https://store.weixin.qq.com/supplier/>) 。开发者运营小店，负责用户对接、售后，开发者店铺关联供货商，供货商代发货 [（一件代发指南）](<https://store.weixin.qq.com/chengzhang/webdoc/wiki/7857/5d8c8e6c631a1459/growth_center_manual_for_store >)。

  4. 更多的商品选择诉求，填写 [问卷反馈](<https://doc.weixin.qq.com/smartsheet/form/1_wpkSFfCgAAIzkZ-F0ncReQFci0uBXXig_d70297>) 给平台，邀请引入。

### 2\. 游戏接入 - 采购模式

小游戏开发者通过 MP，线上支付、采购商家商品。

#### 2.1 运营购买商品

  1. 登陆 [小游戏 MP](<https://mp.weixin.qq.com>) \- 运营管理工具 - 微信礼物

![](https://res8.wxqcloud.qq.com.cn/wxdoc/7233b9f3-c321-443e-9e57-42b1cc04a684.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/8bbe841b-8e11-4165-bbec-3e3eab50a417.png)
  2. 扫码购买礼物

![](https://res8.wxqcloud.qq.com.cn/wxdoc/254a9c75-25a7-413f-9b25-aa2d587440b3.png)
  3. 手机端 选择【送朋友】，然后支付（目前只支持个人支付后，自行报销，26 年暑期将支持企业付款）

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f6e00313-a847-48a1-9943-f94c9df71290.png)
  4. 购买成功后，可在后台看到采购给游戏的商品库存。后续可通过游戏接口接入。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a7cf95bd-60fc-486a-9464-3c166f7d8b40.png)

#### 2.2 游戏研发接入

  1. 后台创建订单给用户分配礼物

1）根据购买的活动查询礼物单信息 [get_activity](<https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_activity>) ，获取 礼物单id present_order_id

2）查询礼物单详情 [get_present](<https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present>)，根据 礼物单id，查看礼物单详情， 可以获取子单列表

3）通过子单列表和用户openid 指定礼物接受者 [present_receiver](<https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_set_present_receiver>)。注意，一个用户指定指定一个order_id, 指定多个会报错， 开发者需要自己实现「挑选一个空的订单分配」逻辑

  2. 游戏前端调用组件拉起收礼组件 [wx.createStoreGift](<https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/wx.createStoreGift.html>)

  3. 礼物信息和发货状态查询 [get_present](<https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present>)

#### 2.3 库存 & 发放规则

  1. 一次购买，会生成一个小店活动，最多 包含500 件。可以分多次购买。
  2. 一个小店活动里面的库存，同一个用户，只能发一件。如需同一个用户发多件，需拆单购买
  3. 活动结束时间 = 购买时间+30 天。活动结束后，游戏无法继续发放商品，未发货款原路退回。
  4. 游戏研发，指定送礼用户后，不可以更改
  5. 活动生效期间，用户均可领取。临近过期，小店侧会有服务通知下发，引导用户领取。
  6. 活动剩余库存，研发可通过后台查询（后续 MP 也可以查询）。运营可根据剩余库存，及时补充购买。
  7. 游戏可以通过接口，查询发货状态
  8. 发票开具，后续MP 提供自助接口。目前可联系平台客服，活动结束后，商家开具。

### 3\. 游戏接入 - 商家配置模式

适用不涉及资金交易的场景：1）游戏开发者自营开店商品 2）品牌游戏合作，品牌免费提供礼物用于游戏内赠送

#### 3.1 商家授权&配置

  1. 商家登陆 [微信小店管理后台](<https://store.weixin.qq.com/>)

  2. 进入营销中心-礼物抽奖页面。点击创建活动，选择「小程序」后创建活动 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/231842a8-386b-4f82-a3b4-1a90bff243c0.png)

  3. 选择要发放的小程序 。发放账号请选择指定的小程序，填写发放小游戏的 APPID ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c819aa02-4005-458f-bc21-36211dcb8049.png) ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c9a6d0f9-d1e0-4c7d-984b-286a08d1da4b.png)

  4. 选择礼物抽奖时间。上线后，活动时间不可以修改 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d62fef72-ad1d-414e-af82-b58bd2f0ba8b.png)

  5. 选择礼物。点击添加礼物并选择要发放的实物礼物勾选后确认（仅支持小店在售商品） ![](https://res8.wxqcloud.qq.com.cn/wxdoc/f9714c02-882d-462c-bbe7-ad5617693407.png)

  6. 填写礼物数量 。完成确认后可以在创建活动的页面选择发放的数量 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/62b8a74d-6ebf-4758-ad9e-6d040c18efbd.png)

  7. 确认创建活动 点击创建即可完成活动创建.商家侧，复制该活动 id 给游戏，方便游戏拉取 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/6f518476-4599-4c5d-9411-13f5aba3dae0.png)

#### 3.2游戏研发接入

  1. 游戏后台预下单 [create_present_order.](<https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_create_present_order>)

  2. 游戏前端调用组件拉起礼物组件[wx.createStoreGift](<https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/wx.createStoreGift.html>)

  3. 礼物信息 & 发货状态 [get_present](<https://developers.weixin.qq.com/doc/store/shop/API/miniandstore/cooperation_gift/api_get_present>)

#### 3.3 库存 & 发放规则

  1. 游戏后台下单后，库存就被锁定。如果用户没有填写地址收下礼物，商家无法发货。
  2. 下单 24 小时后，用户未收下，订单过期，无法发货。库存会重新释放。
  3. 临近过期，小店侧会有服务通知下发，引导用户领取。
  4. 游戏可以根据发货状态，与商家约定对账、结算。开票、合同相关，游戏自行与商家沟通。
  5. 商家侧配置 活动上线后，内容均不可再修改。活动订单 没有支付订单号（因为不涉及钱）
  6. 一个小店活动最长 30 天

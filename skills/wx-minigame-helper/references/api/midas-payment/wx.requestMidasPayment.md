---
title: "wx.requestMidasPayment(Object object)"
type: api
category: api/midas-payment
api: "wx.requestMidasPayment"
source: https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPayment.html
---

# wx.requestMidasPayment(Object object)

> 基础库 2.19.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

发起购买游戏币支付请求，可参考[虚拟支付2.0游戏币](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/coins.html>)，虚拟支付全流程可参考[技术手册-虚拟支付篇](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/guide.html>)

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  mode | string |  | 是 | 支付的类型，不同的支付类型有各自额外要传的附加参数。  
| |  合法值 | 说明  
---|---  
game | 购买游戏币  
|  env | number | 0 | 否 | 环境配置  
| |  合法值 | 说明  
---|---  
0 | 米大师正式环境  
1 | 米大师沙箱环境  
|  offerId | string |  | 是 | 在米大师侧申请的应用 id  
|  currencyType | string |  | 是 | 币种  
| |  合法值 | 说明  
---|---  
CNY | 人民币  
|  platform | string |  | 否 | 申请接入时的平台，platform 与应用id有关。  
| |  合法值 | 说明  
---|---  
android | android  
|  buyQuantity | number |  | 否 | 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。  
|  zoneId | string | 1 | 否 | 分区 ID  
|  outTradeNo | string |  | 是 | 业务订单号，每个订单号只能使用一次，重复使用会失败。开发者需要确保该订单号在对应游戏下的唯一性，平台会尽可能校验该唯一性约束，但极端情况下可能会跳过对该约束的校验。要求32个字符内，只能是数字、大小写字母、符号_-|*组成，不能以下划线（)开头。建议每次调用wx.requestMidasPayment都换新的outTradeNo。若没有传入，则平台会自动填充一个，并以下划线开头  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
#### object.success 回调函数

##### 参数

###### Object res

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 调用成功信息  
  
#### object.fail 回调函数

##### 参数

###### Object err

属性 | 类型 | 说明  
---|---|---  
errMsg | string | 错误信息  
errCode | number | 错误码  
errno | number | 错误码  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
-1 |  | 系统失败  
-2 |  | 支付取消  
-6 |  | 下单参数类型不对  
-15001 |  | 虚拟支付接口错误码，缺少参数  
-15002 |  | 虚拟支付接口错误码，参数不合法  
-15003 |  | 虚拟支付接口错误码，订单重复  
-15004 |  | 虚拟支付接口错误码，后台错误  
-15005 |  | 虚拟支付接口错误码，appId权限被封禁  
-15006 |  | 虚拟支付接口错误码，货币类型不支持  
-15007 |  | 虚拟支付接口错误码，订单已支付  
-15009 |  | 虚拟支付接口错误码，由于健康系统限制，本次支付已超过限额（这种错误情况会有默认弹窗提示）  
-15010 |  | 虚拟支付接口错误码，正式版小游戏不允许在沙箱环境支付  
-15011 |  | 请求的数据类型错误  
-15012 |  | SIGNATURE错误  
-15013 |  | 代币未发布  
-15014 |  | paysig错误  
-15015 |  | sessionkey过期  
-15016 |  | 道具价格错误  
-15017 |  | 订单已关闭  
1 |  | 虚拟支付接口错误码，用户取消支付  
2 |  | 虚拟支付接口错误码，客户端错误,判断到小程序在用户处于支付中时,又发起了一笔支付请求  
3 |  | 虚拟支付接口错误码，Android独有错误：用户使用GooglePlay支付，而手机未安装GooglePlay  
4 |  | 虚拟支付接口错误码，用户操作系统支付状态异常  
5 |  | 虚拟支付接口错误码，操作系统错误  
6 |  | 虚拟支付接口错误码，其他错误  
7 |  | 虚拟支付接口错误码，支付取消  
1000 |  | 参数错误  
1001 |  | 分区未发布  
1003 |  | 代币/分区未发布或者对应商户号被封禁或者米大师Portal错误,请先确保虚拟支付2.0代币和分区已发布，然后自查商户号封禁情况https://kf.qq.com/faq/190523Mb6VRJ190523RV363E.html，对应的商户号可以在mp-虚拟支付2.0-基础配置-微信支付账号信息中查询  
3017/-15012 |  | 道具id非法  
701001 |  | ios禁止支付  
  
## buyQuantity 限制说明

购买游戏币的时候，buyQuantity 不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。

有效价格等级如下：

价格等级（单位：人民币）  
---  
1  
3  
6  
8  
12  
18  
25  
30  
40  
45  
50  
60  
68  
73  
78  
88  
98  
108  
118  
128  
148  
168  
188  
198  
328  
648  
998  
1998  
2998

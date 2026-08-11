---
title: "wx.requestMidasPaymentGameItem(Object object)"
type: api
category: api/midas-payment
api: "wx.requestMidasPaymentGameItem"
source: https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPaymentGameItem.html
---

# wx.requestMidasPaymentGameItem(Object object)

> 基础库 2.19.2 开始支持，低版本需做[兼容处理](<../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#异步-API-返回-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

发起道具直购支付请求，可参考[虚拟支付2.0道具直购](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/goods.html>)，虚拟支付全流程可参考[技术手册-虚拟支付篇](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/virtual-payment/guide.html>)

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  signData | Object |  | 是 | **支付原串**  
具体支付参数见下面的signData，需要将数据以json格式传递  
signData例子:  
'{"mode":"goods","offerId":"123","buyQuantity":1,"env":0,"currencyType":"CNY","platform":"android","zoneId":"1","productId":"testproductId","goodsPrice":10,"outTradeNo":"xxxxxx","attach":"testdata"}'  
| |  | 结构属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  mode | string |  | 是 | **支付的类型**  
不同的支付类型有各自额外要传的附加参数  
|  offerId | string |  | 是 | **在米大师侧申请的应用id**  
mp-支付基础配置中的offerid  
|  buyQuantity | number |  | 是 | **购买数量**  
|  env | number | 0 | 否 | **环境配置**  
| |  合法值 | 说明  
---|---  
0 | 米大师正式环境  
1 | 米大师沙箱环境  
|  currencyType | string |  | 是 | **币种**  
| |  合法值 | 说明  
---|---  
CNY | 人民币  
|  platform | string | android | 否 | **平台**  
| |  合法值 | 说明  
---|---  
android | 安卓  
|  zoneId | string | 1 | 否 | **分区ID**  
|  productId | string |  | 是 | **道具ID**  
|  goodsPrice | number |  | 是 | **道具单价（分）**  
用来校验价格与后台道具价格是否一致，避免用户在业务商城页看到的价格与实际价格不一致导致投诉  
|  outTradeNo | string |  | 是 | **业务订单号**  
每个订单号只能使用一次，重复使用会失败（极端情况不保证唯一，不建议业务强依赖唯一性）。  
要求32个字符内，只能是数字、大小写字母、符号 _-|*@组成，不能以下划线(_)开头。  
若没有传入，则平台会自动填充一个，并以下划线开头。  
|  attach | string |  | 否 | **透传数据**  
发货通知时会透传给开发者  
  
|  paySig | string |  | 是 | **支付签名**  
pay_sig参数的签名算法，使用**“mp-支付基础配置”** 中的**AppKey** 对支付的请求进行签名，代表请求经过开发者服务端的支付模块发起。签名算法伪代码为：  
paySig = to_hex(hmac_sha256(appKey,'requestMidasPaymentGameItem' + '&' + signData))  
具体可见代码示例中的支付签名代码实现  
|  signature | string |  | 是 | **用户态签名**  
signature参数签名算法参考[用户态签名](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html#%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E6%80%81%E7%AD%BE%E5%90%8D>)  
可参考[calc_signature](<https://docs.qq.com/doc/DVUN0QWJja0J5c2x4>)  
|  success | function |  | 否 | 接口调用成功的回调函数  
|  fail | function |  | 否 | 接口调用失败的回调函数  
|  complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
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
  
## 示例代码
    
    
    wx.requestMidasPaymentGameItem({
     signData: '{"mode":"goods","offerId":"123","buyQuantity":1,"env":0,"currencyType":"CNY","platform":"android","zoneId":"1","productId":"testproductId","goodsPrice":10,"outTradeNo":"xxxxxx","attach":"testdata"}',
     paySig: 'd0b8bbccbe34ed11549bcfd6602b08711f4acc0965253a949cd6a2b895152f9d',
     signature: 'd0b8bbccbe34ed11549bcfd6602b08711f4acc0965253a949cd6a2b895152f9d',
     success(res, errCode) {
         console.log('pay', res, errCode);
     },
     fail({
         errMsg,
         errCode
     }) {
         console.error(errMsg, errCode)
     }
    

支付签名代码实现
    
    
      import hmac
      import hashlib
      import urllib.parse
    
      # sign_data 支付原串 注意这里sign_data需要和前端一致，原格式传递（包括空格和回车），建议后台下发，
      # appkey 米大师密钥
      # method 需要签名方法 requestMidasPaymentGameItem
      def gen_pay_sig(sign_data, appkey, method):
          need_encode_body = method + '&' + sign_data
          print(need_encode_body)
          return hmac.new(key=appkey.encode('utf-8'), msg=need_encode_body.encode('utf-8'),
                  digestmod=hashlib.sha256).hexdigest()

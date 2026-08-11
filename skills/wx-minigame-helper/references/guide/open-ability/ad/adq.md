---
title: "广告金操作API"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/adq.html
---

# 广告金操作API  
  
## 【小程序/小游戏通用】

### 1、查询流量主每日广告金收入

#### 接口名称

GetPublisherGameGiftList

#### 注意事项

access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

#### 调用方式
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=get_game_gift_list&access_token=xxxxx&begin_date=20220711&end_date=20220711&page=1&page_size=50&[ad_fund_type=novel/drama]
    

#### 请求数据示例
    
    
    {
        "page": 1,
        "page_size": 8,
        "begin_date": "20220413",
        "end_date":"20220413"
    }
    

#### 返回数据示例
    
    
    {
        "total_num": 1,
        "game_gift_detail": [
            {
                "date": "2022-04-13",
                "users_within_thirty_days": 2407,
                "users_beyond_thirty_days": 300,
                "active_users": 4000,
                "amt_within_thirty_days": 397.53,
                "amt_beyond_thirty_days": 397.53,
                "ad_fund": 1914.14,
                "outer_ad_fund": 914.1,
                "ams_ad_fund": 1000.04
            }
        ]
    }
    

#### 请求参数

参数 | 类型 | 是否必须 | 说明  
---|---|---|---  
page | uint32 | 是 | 数据返回页数  
page_size | uint32 | 是 | 每页返回数据条数  
start_date | string | 是 | 获取数据的开始时间 yyyymmdd  
end_date | string | 是 | 获取数据的结束时间 yyyymmdd  
ad_fund_type | string | 否 | 不传该字段：小游戏19回流外渠广告金  
其他广告金需传该字段，枚举值：  
● drama:短剧广告金  
● novel:小说广告金  
● wegame_summer:小游戏新游激励金  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
total_num | uint32 | 请求返回总条数  
date | string | 日期  
users_within_thirty_days | uint64 | 30天内激励用户数  
users_beyond_thirty_days | uint64 | 第31天-90天激励用户数  
active_users | uint64 | 打开UV，活跃用户数  
amt_within_thirty_days | double | 30天内激励用户广告流水(分)  
amt_beyond_thirty_days | double | 第31天-90天激励用户广告流水(分)  
ad_fund | double | 广告金总金额(分)  
outer_ad_fund | double | 外渠广告金金额  
ams_ad_fund | double | 腾讯广告渠道广告金金额  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
  
### 2、查询流量主广告金账户余额

#### 接口名称

GetGameDiviceSave

#### 注意事项

access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

#### 调用方式

GET 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=get_game_divice_save&access_token=xxxxx&page=1&page_size=10&[ad_fund_type=novel/drama]&sub_account=
    

#### 请求数据示例
    
    
    page=1&page_size=10&sub_account=GAME_DEVIDE&[ad_fund_type=drama/novel]
    

#### 返回数据示例
    
    
    {
        "err_msg": "ok",
        "ret": 0,
        "expire_balance": 12028,
        "expire_time": "2025-10-31",
        "game_save_detail": [{
            "amt": 2452,
            "date": "2024年10月10日",
            "expire_time": "2025-10-31",
            "sett_idx": 9999
        }, {
            "amt": 32123,
            "date": "2024年10月09日",
            "expire_time": "2025-10-31",
            "sett_idx": 9999
        }],
        "total_balance": 3219238,
        "total_num": 2
    }
    

#### 请求参数

参数 | 是否必须 | 说明  
---|---|---  
page | 是 | 数据返回页数  
page_size | 是 | 每页返回数据条数  
sub_account | 是 | GAME_DEVIDE(默认值)：  
● 小游戏19外渠回流广告金资金账户  
● 短剧广告金资金账户  
● 小说广告金资金账户  
GAME_DEVIDE_TEMP：小游戏新游激励金资金账户  
ad_fund_type | 否 | ​**不传该字段** ：小游戏19回流外渠广告金  
其他广告金需传该字段，枚举值：  
● drama: 短剧广告金  
● novel: 小说广告金  
● wegame_summer: 小游戏新游激励金  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回总条数  
err_msg | string | 日期（ _请确认字段含义是否准确_ ）  
total_balance | uint64 | 总余额(分)  
expire_balance | uint64 | 即将过期金额(分)  
total_num | uint64 | 总条数  
expire_time | string | 即将过期金额的日期  
game_save_detail:date | string | 结算区间  
game_save_detail:amt | uint64 | 结算金额(分)  
game_save_detail:expire_time | string | 过期时间  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
  
### 3、查询流量主广告金消耗记录

#### 接口名称

GetGameDiviceTransfer

#### 注意事项

access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

#### 调用方式

GET 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=get_game_divice_transfer&access_token=xxxxx&page=1&page_size=10&[ad_fund_type=novel/drama]&sub_account=
    

#### 请求数据示例
    
    
    page=1&page_size=10&begin_date=1728905944&end_date=1729612740&[ad_fund_type=drama/novel]&[tran_type=14/13/2]
    

#### 返回数据示例
    
    
    {
        "err_msg": "ok",
        "ret": 0,
        "game_transfer_detail": [{
            "amt": 5000,
            "date": "2024-10-22",
            "remark": "",
            "type": 14,
            "out_uuid": ""
        }, {
            "amt": 5000,
            "date": "2024-10-21",
            "remark": "",
            "type": 14,
            "out_uuid": ""
        }],
        "total_num": 2
    }
    

#### 请求参数

参数 | 类型 | 是否必须 | 说明  
---|---|---|---  
page | uint32 | 是 | 数据返回页数  
page_size | uint32 | 是 | 每页返回数据条数  
begin_date | uint64 | 是 | 开始时间（Unix Timestamp时间戳）  
end_date | uint64 | 是 | 结束时间（Unix Timestamp时间戳）  
ad_fund_type | string | 否 | ​**不传该字段** ：默认使用小游戏19回流外渠广告金  
**需传该字段** ：指定广告金类型（枚举值）：  
● drama: 短剧广告金  
● novel: 小说广告金  
● wegame_summer: 小游戏新游激励金  
tran_type | uint32 | 否 | ​**不传该字段** ：默认查询全部消耗类型  
**需传该字段** ：指定消耗类型（枚举值）：  
● 14: 转出  
● 13: 过期  
● 2: 转出失败  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回总条数  
err_msg | string | 日期（ _请确认字段类型与说明一致性_ ）  
total_num | uint64 | 总条数  
game_transfer_detail:date | string | 日期（建议补充时间格式说明）  
game_transfer_detail:amt | uint64 | 金额(分)  
game_transfer_detail:remark | string | 备注  
game_transfer_detail:type | uint64 | 消耗类型（枚举值）：  
● 14: 转出  
● 13: 过期  
● 2: 转出失败  
game_transfer_detail:out_uuid | string | 开发者自定义唯一ID，若为api调用产生，该字段非空  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
  
## 【仅适用于小游戏】

### 1、小游戏获取广告金可转出账户列表

#### 接口名称

GetAttrBindList

#### 注意事项

access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

#### 调用方式

GET 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=get_attr_bind_list&access_token=xxxxx
    

#### 请求数据示例

不需要传递参数

#### 返回数据示例
    
    
    {
        "ret": 0,
        "err_msg": "ok",
        "attr_list": [{
            "appid": "wx0f2bb205952d1079",
            "headurl": "",
            "is_advertiser": 1,
            "nickname": "WXADGAME",
            "opentype": 65536
        }]
    }
    
    

#### 请求参数

不需要传递参数

#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回总条数  
err_msg | string | 日期（ _请确认字段类型与说明一致性_ ）  
attr_list:appid | string | appid  
attr_list:headurl | string | 头像url  
attr_list:nickname | string | 昵称  
attr_list:is_advertiser | uint32 | 是否已成为广告主  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
  
### 2、小游戏获取MP广告主服务商

#### 接口名称

GetAgenciesList

#### 注意事项

access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

#### 调用方式

GET 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=get_agencies_list&access_token=xxxxx&dst_appid=
    

#### 请求数据示例
    
    
    dst_appid=
    

#### 返回数据示例
    
    
    {
        "ret": 0,
        "err_msg": "ok",
        "agencies_list": [{
            "id": "spidxxxx",
            "name": "xxxxx科技有限公司"
        }]        
    }
    

#### 请求参数

参数 | 类型 | 是否必须 | 说明  
---|---|---|---  
dst_appid | string | 是 | 转出的目的appid  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回的总条数  
err_msg | string | ​日期  
agencies_list:id | string | MP服务商ID  
agencies_list:name | string | MP服务商名称  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
  
### 3、小游戏获取ADQ广告主服务商

#### 接口名称

GetAdfundAdqList

#### 注意事项

access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

#### 调用方式

GET 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=get_adfund_adq_list&access_token=xxxxx&dst_appid=
    

#### 请求数据示例
    
    
    dst_appid=&last_search_account_id=
    

#### 返回数据示例
    
    
    {
        "ret": 0,
        "err_msg": "ok",
        "acct_list": [{
            "agency_id": "43024",
            "agency_name": "xxx有限公司",
            "id": "25423",
            "is_valid": 1,
            "name": "xxxx科技有限公司"
        }],
        "total_num": 1
    }
    

#### 请求参数

参数 | 类型 | 是否必须 | 说明  
---|---|---|---  
dst_appid | string | 是 | 转出的目的appid  
last_search_account_id | string | 否 | 默认1000个分页，若需分页传上一次调用最后一个`acct_list.id`  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回总条数  
err_msg | string | 日期  
acct_list:agency_id | string | 服务商id  
acct_list:agency_name | string | 服务商名称  
acct_list:id | string | 广告主uid  
acct_list:is_valid | int32 | 是否有效，必须取为1的数据  
acct_list:name | string | 广告主名称  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
  
### 4、小游戏广告金转出ADQ广告主账户

#### 接口名称

GameGiftTransferAdq

#### 注意事项

  * access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

  * 仅支持小游戏19回流外渠广告金以及新游激励金

  * HTTP接口调用超时时间设置至少需要5秒

#### 调用方式

POST 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=game_gift_transfer_adq&access_token=xxxxx&dst_appid=
    

#### 请求数据示例
    
    
    uid=&agency_id=&dst_appid=&amt=&out_uuid=
    

#### 返回数据示例
    
    
    {
        "ret": 0,
        "err_msg": "ok"
    }
    

#### 请求参数

参数 | 类型 | 是否必须 | 说明  
---|---|---|---  
dst_appid | string | 是 | 转出的目的appid  
uid | string | 是 | ADQ广告主uid  
agency_id | string | 是 | 服务商id，若不存在传空字符  
amt | uint64 | 是 | 转出金额(分)  
src_sub_account | string | 是 | `GAME_DEVIDE`(默认值)：小游戏19外渠回流广告金资金账户  
`GAME_DEVIDE_TEMP`：小游戏新游激励金资金账户  
out_uuid | string | 是 | 开发者自定义唯一ID，必须为32位字符，用于防重  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回总条数  
err_msg | string | 日期  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
5018 | 订单号已存在 | 请拉取转账记录确认上一次转出请求是否符合预期，若确认转出失败请修改out_uuid重新操作  
  
### 5、小游戏广告金转出MP广告主账户

#### 接口名称

GameGiftTransfer

#### 注意事项

  * access_token：[文档地址](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)

  * 仅支持小游戏19回流外渠广告金以及新游激励金

  * HTTP接口调用超时时间设置至少需要5秒

#### 调用方式

POST 方法
    
    
    https://api.weixin.qq.com/publisher/stat?action=general_action&cmd=game_gift_transfer&access_token=xxxxx
    

#### 请求数据示例
    
    
    amt=&agency=&dst_appid=&out_uuid=
    

#### 返回数据示例
    
    
    {
        "ret": 0,
        "err_msg": "ok"
    }
    

#### 请求参数

参数 | 类型 | 是否必须 | 说明  
---|---|---|---  
dst_appid | string | 是 | 转出的目的appid  
agency | string | 是 | 服务商id，若不存在传空字符  
amt | uint64 | 是 | 转出金额(分)  
out_uuid | string | 是 | 开发者自定义唯一ID，必须为32位字符，用于防重  
  
#### 返回参数

参数 | 类型 | 说明  
---|---|---  
ret | uint32 | 请求返回总条数  
err_msg | string | 日期  
  
#### 错误码

错误码 | 错误码说明 | 解决方案  
---|---|---  
0 | ok | ok  
-202 | 内部错误 | 可在一段时间后重试  
2002 | 查询错误 | 检验输入参数是否符合文档说明  
5018 | 订单号已存在 | 请拉取转账记录确认上一次转出请求是否符合预期，若确认转出失败请修改out_uuid重新操作

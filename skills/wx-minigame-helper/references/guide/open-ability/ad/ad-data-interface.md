---
title: "广告分析数据接口说明"
type: guide
category: guide/open-ability/ad
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ad/ad-data-interface.html
---

## 广告分析数据接口说明

向所有成为流量主的公众号、小程序、小游戏开发者开放数据接口。通过数据接口，开发者可以获取与公众平台官网统计模块类似但更灵活的数据，还可根据需要进行高级处理。

请注意：

  1. 接口侧数据库中仅存储了2016年1月1日之后的数据，将无法查询到此前的数据，即使查到，也是不可信的脏数据；

  2. 建议开发者在调用接口获取数据后，将数据保存在自身数据库中，以最大化访问的效率，也降低微信侧接口调用的不必要损耗；

  3. 由于数据量较大, 所有接口采取分页获取的方式, 每页最大获取量为90。（eg：total_num 为100，则当page = 1，page_size = 10，则返回前10条；page = 1，page_size = 20，则返回前20条；page = 2，page_size = 10，则返回第11条到第20条）

  4. 广告位枚举值变更说明

     * 由于多个接口都使用了广告位参数，为保证体验的一致性和参数的可读性，我们做了一些变更，所有接口均支持以 **广告位类型名称（ad_slot）** 传递参数，回包时新增这个名称来代表相关含义。此前的参数 slot_id 也可继续使用并回传。具体为：

广告位类型名称（ad_slot） | 广告位类型  
---|---  
SLOT_ID_BIZ_BOTTOM | 公众号底部广告  
SLOT_ID_BIZ_MID_CONTEXT | 公众号文中广告  
SLOT_ID_BIZ_VIDEO_END | 公众号视频后贴  
SLOT_ID_BIZ_SPONSOR | 公众号互选广告  
SLOT_ID_BIZ_CPS | 公众号返佣商品  
SLOT_ID_WEAPP_BANNER | 小程序banner  
SLOT_ID_WEAPP_REWARD_VIDEO | 小程序激励视频  
SLOT_ID_WEAPP_INTERSTITIAL | 小程序插屏广告  
SLOT_ID_WEAPP_VIDEO_FEEDS | 小程序视频广告  
SLOT_ID_WEAPP_VIDEO_BEGIN | 小程序视频前贴  
SLOT_ID_WEAPP_BOX | 小程序格子广告  
SLOT_ID_WEAPP_COVER | 小程序封面广告  
SLOT_ID_WEAPP_TEMPLATE | 小程序模板广告  
  
  

#### 接口总览

广告分析接口目前可用于获得“公众平台 → 流量主 → 数据统计”页面展示的部分广告数据和“公众平台 → 流量主 → 财务管理”页面展示的部分收入数据，与小游戏相关的接口列表如下:

接口名称 | 用途 | 最大时间跨度 | 接口调用地址（必须使用https）  
---|---|---|---  
publisher_adpos_general | 获取小游戏广告汇总数据 | 90天 | https://api.weixin.qq.com/publisher/stat?action=publisher_adpos_general&access_token=ACCESS_TOKEN  
publisher_adunit_general | 获取小游戏广告细分数据 | 90天 | https://api.weixin.qq.com/publisher/stat?action=publisher_adunit_general&access_token=ACCESS_TOKEN  
get_adunit_list | 获取小游戏广告位清单 | 无 | https://api.weixin.qq.com/publisher/stat?action=get_adunit_list&access_token=ACCESS_TOKEN  
publisher_settlement | 获取小游戏结算收入数据及结算主体信息 | 无 | https://api.weixin.qq.com/publisher/stat?action=publisher_settlement&access_token=ACCESS_TOKEN  
  
  

#### 接口调用请求说明

##### 一、获取小游戏广告汇总数据（publisher_adpos_general）

需要向相应接口调用地址增加以下GET请求参数：

参数 | 是否必须 | 说明  
---|---|---  
page | 是 | 返回第几页数据  
page_size | 是 | 当页返回数据条数  
start_date | 是 | 获取数据的开始时间 yyyy-mm-dd  
end_date | 是 | 获取数据的结束时间 yyyy-mm-dd  
ad_slot | 否 | 广告位类型名称  
  
**请注意：** 如果不传递广告位类型名称，将默认返回全部类型广告位的数据。

  

**返回参数说明（publisher_adpos_general）**

参数 | 说明  
---|---  
err_msg | 返回错误信息  
ret | 错误码  
list: slot_id | 广告位类型id  
list: ad_slot | 广告位类型名称  
list: date | 日期  
list: req_succ_count | 拉取量  
list: exposure_count | 曝光量  
list: exposure_rate | 曝光率  
list: click_count | 点击量  
list: click_rate | 点击率  
list: income | 收入(分)  
list: ecpm | 广告千次曝光收益(分)  
summary: req_succ_count | 总拉取量  
summary: exposure_count | 总曝光量  
summary: exposure_rate | 总曝光率  
summary: click_count | 总点击量  
summary: click_rate | 总点击率  
summary: income | 总收入(分)  
summary: ecpm | 广告千次曝光收益(分)  
total_num | list返回总条数  
  
  

**返回数据包示例（publisher_adpos_general）**
    
    
    {
        "base_resp":{
            "err_msg":"ok",
            "ret":0
        },
        "list":[
            {
                "slot_id":3030046789020061,
                "ad_slot":"SLOT_ID_WEAPP_INTERSTITIAL",
                "date":"2020-04-13",
                "req_succ_count":443610,
                "exposure_count":181814,
                "exposure_rate":0.409850995,
                "click_count":10095,
                "click_rate":0.055523777,
                "income":52175,
                "ecpm":286.969100289
            }
        ],
        "summary":{
            "req_succ_count":4406394,
            "exposure_count":1797225,
            "exposure_rate":0.407867522,
            "click_count":100167,
            "click_rate":0.055734257,
            "income":578003,
            "ecpm":321.608591022
        },
        "total_num":1
    }
    

  

##### 二、获取小游戏广告细分数据（publisher_adunit_general）

需要向相应接口调用地址增加以下GET请求参数：

参数 | 是否必须 | 说明  
---|---|---  
page | 是 | 返回第几页数据  
page_size | 是 | 当页返回数据条数  
start_date | 是 | 获取数据的开始时间 yyyy-mm-dd  
end_date | 是 | 获取数据的结束时间 yyyy-mm-dd  
ad_slot | 否 | 广告位类型名称  
ad_unit_id | 否 | 广告位id  
  
**请注意：** 当需要获取全部广告位的细分数据时，无需传递广告位类型名称及广告位id；当需要获取某类型广告位的细分数据时，仅需传递广告位类型名称；当需要获取某广告位id的细分数据时，仅需传递广告位id。

  

**返回参数说明（publisher_adunit_general）**

参数 | 说明  
---|---  
err_msg | 返回错误信息  
ret | 错误码  
list: ad_unit_id | 广告位id  
list: ad_unit_name | 广告位名称  
list: stat_item: ad_slot | 广告位类型名称  
list: stat_item :date | 数据日期  
list: stat_item :req_succ_count | 拉取量  
list: stat_item :exposure_count | 曝光量  
list: stat_item: exposure_rate | 曝光率  
list: stat_item :click_count | 点击量  
list: stat_item :click_rate | 点击率  
list: stat_item :income | 收入  
list: stat_item :ecpm | 广告千次曝光收益(分)  
total_num | 请求返回总数  
  
  

**返回数据包示例（publisher_adunit_general）**
    
    
    {
        "base_resp":{
            "err_msg":"ok",
            "ret":0
        },
        "list":[
            {
                "ad_unit_id":"adunit-9cedd8514XXXX",
                "ad_unit_name":"激励视频长广告",
                "stat_item":{
                    "ad_slot":"SLOT_ID_WEAPP_REWARD_VIDEO",
                    "date":"2020-04-10",
                    "req_succ_count":138250,
                    "exposure_count":74771,
                    "exposure_rate":0.54083906,
                    "click_count":2242,
                    "click_rate":0.029984887,
                    "income":93883,
                    "ecpm":6.790813743
                }
            }
        ],
        "total_num":1
    }
    

  

##### 三、获取小游戏广告位清单（get_adunit_list）

需要向相应接口调用地址增加以下GET请求参数：

参数 | 是否必须 | 说明  
---|---|---  
page | 是 | 返回第几页数据  
page_size | 是 | 当页返回数据条数  
ad_slot | 否 | 广告位类型名称  
ad_unit_id | 否 | 广告位id  
  
**请注意：** 当需要获取全部广告位的清单时，无需传递广告位类型名称及广告位id；当需要获取某类型广告位的清单时，仅需传递广告位类型名称；当需要获取某广告位id的数据时，仅需传递广告位id。

  

**返回参数说明（get_adunit_list）**

参数 | 说明  
---|---  
err_msg | 返回错误信息  
ret | 错误码  
ad_slot | 广告位类型名称  
ad_unit_id | 广告位id  
ad_unit_name | 广告位名称  
ad_unit_size | 广告位尺寸  
ad_unit_status | 广告位状态  
  
  

**返回数据包示例（get_adunit_list）**
    
    
    {
        "base_resp":{
            "err_msg":"ok",
            "ret":0
        },
        "ad_unit":[
            {
                "ad_slot":"SLOT_ID_WEAPP_REWARD_VIDEO",
                "ad_unit_id":"adunit-e9418ee19XXXXX",
                "ad_unit_name":"rewaXXXX",
                "ad_unit_size":[
                    {
                        "height":166,
                        "width":582
                    }
                ],
                "ad_unit_status":"AD_UNIT_STATUS_ON",
                "ad_unit_type":"AD_UNIT_TYPE_REWARED_VIDEO",
                "appid":"wx0afc78670fXXXX",
                "video_duration_max":30,
                "video_duration_min":6
            }
        ],
        "total_num":1
    }
    

  

##### 四、获取小游戏结算收入数据及结算主体信息（publisher_settlement）

需要向相应接口调用地址增加以下GET请求参数：

参数 | 是否必须 | 说明  
---|---|---  
page | 是 | 数据返回页数  
page_size | 是 | 每页返回数据条数  
start_date | 是 | 获取数据的开始时间 yyyy-mm-dd  
end_date | 是 | 获取数据的结束时间 yyyy-mm-dd  
  
**请注意：** 只要与获取数据的起止时间有重合，结算区间对应的数据都将返回。例如，请求2月11日至3月26日的数据，将会返回2月上半月、2月下半月、3月上半月、3月下半月四个结算区间的数据。

  

**返回参数说明（publisher_settlement）**

参数 | 说明  
---|---  
err_msg | 返回错误信息  
ret | 错误码  
body | 主体名称  
revenue_all | 累计收入  
penalty_all | 扣除金额  
settled_revenue_all | 已结算金额  
settlement_list: date | 数据更新时间  
settlement_list: zone | 日期区间  
settlement_list: month | 收入月份  
settlement_list: order | 1 = 上半月，2 = 下半月  
settlement_list: sett_status | 1 = 结算中；2、3 = 已结算；4 = 付款中；5 = 已付款  
settlement_list: settled_revenue | 区间内结算收入  
settlement_list: sett_no | 结算单编号  
settlement_list: mail_send_cnt | 申请补发结算单次数  
settlement_list: slot_revenue: slot_id | 产生收入的广告位  
settlement_list: slot_revenue: slot_settled_revenue | 该广告位结算金额  
total_num | 请求返回总条数  
  
  

**返回数据包示例（publisher_settlement）**
    
    
    {
        "base_resp":{
            "err_msg":"ok",
            "ret":0
        },
        "body":"深圳市腾讯计算机系统有限公司",
        "penalty_all":0,
        "revenue_all":5178368698,
        "settled_revenue_all":2613696765,
        "settlement_list":[
            {
                "date":"2020-03-25",
                "zone":"2020年3月1日至15日"
                "month":"202003",
                "order":1,
                "sett_status":1,
                "settled_revenue":718926045,
                "sett_no":"XXX",
                "mail_send_cnt":"0",
                "slot_revenue":[
                    {
                        "slot_id":"SLOT_ID_WEAPP_BANNER",
                        "slot_settled_revenue":34139443
                    },
                    {
                        "slot_id":"SLOT_ID_WEAPP_REWARD_VIDEO",
                        "slot_settled_revenue":684786602
                    }
                ]
            }
        ],
        "total_num":1
    }
    

  

#### 错误码说明

错误码返回值 | 含义  
---|---  
45009 | 请求过于频繁, 请稍后尝试  
45010 | 无效的接口名  
1701 | 参数错误  
2009 | 无效的流量主

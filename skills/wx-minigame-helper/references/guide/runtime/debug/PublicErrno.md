---
title: "Errno错误码"
type: guide
category: guide/runtime/debug
source: https://developers.weixin.qq.com/minigame/dev/guide/runtime/debug/PublicErrno.html
---

# Errno错误码

在使用部分小程序 API / 组件时，抛出的异常（fail 回调 / Promise reject）`Error` 对象中除了带有 `errMsg`，还会带有通用错误码 `errno` 。

**代码示例**
    
    
    wx.openBluetoothAdapter({
      success (res) {
        console.log(res)
      }
      fail (err) {
        console.log(err.errno)
      }
    })
    

## 背景介绍

`errno` 错误码的出现是为了解决以下问题：

  * 目前部分 API 在出现错误时，只返回错误信息 `errMsg`，没有错误码。另一部分 API 虽然有 errCode，但没有形成统一格式规范。
  * 目前有 errCode 的 API 中，不同的 API 失败时返回的 errCode 粒度不同。部分 API 的 errCode 粒度太大，信息不足。
  * 相同的错误在不同的 API 中 errCode 未对齐，不便于开发者记忆和处理。

因此，我们设计了一套拥有统一规范的错误码`errno`，以帮助开发者更好地开发调试及处理错误。

`errno` 错误码有如下优点：

  * 在错误码格式上，拥有统一的设计规范。
  * 不同的 API 中出现的相同错误，对应的错误码一致。
  * 错误码中包含 API 类别信息，帮助开发者快速定位问题。
  * 不同 API 中的错误码粒度较为统一。

当 `Error` 对象中同时有 `errno` 错误码和 `errCode` 错误码时，**一般以`errno` 错误码为准**。  
后续 `errno` 错误码会逐步推广到所有 API 接口，并取代现有的 `errCode` 参数，为开发者提供错误信息。

## 错误码设计

`errno` 错误码一般为 7 位数，第 1 - 2 位标识 API 接口的一级类目，第 3 - 4 位标识 API 接口的二级类目，第 5 - 7 位表示具体的错误类型。  
例如： `errno` 错误码为 `1504003` 时，`15` 表示 API 接口的一级类目为 设备，`04` 表示 API 接口的二级类目为 NFC，`003` 表示具体的错误类型。  
目前已接入 `errno` 的 API 接口涉及的类目包括：

  * 一级类目：`00` \- 通用错误码
  * 一级类目：`01` \- 基础 
    * 二级类目：`00` \- 通用基础错误
    * 二级类目：`03` \- 更新
    * 二级类目：`09` \- 加密
  * 一级类目：`06` \- 网络 
    * 二级类目：`00` \- 通用网络错误
    * 二级类目：`02` \- 发起请求
    * 二级类目：`03` \- 下载
    * 二级类目：`04` \- 上传
    * 二级类目：`06` \- mDNS
  * 一级类目：`07` \- 支付 
    * 二级类目：`00` \- 通用支付错误
    * 二级类目：`01` \- 支付默认二级类目
  * 一级类目：`11` \- 媒体 
    * 二级类目：`07` \- 实时音视频
  * 一级类目：`13` \- 文件 
    * 二级类目：`00` \- 通用文件错误
    * 二级类目：`01` \- 文件默认二级类目
    * 二级类目：`02` \- fd接口
  * 一级类目：`14` \- 开放接口 
    * 二级类目：`16` \- 视频号
  * 一级类目：`15` \- 设备 
    * 二级类目：`00` \- 通用设备错误
    * 二级类目：`04` \- NFC
    * 二级类目：`05` \- Wi-Fi
    * 二级类目：`09` \- 低功耗蓝牙
    * 二级类目：`10` \- 蓝牙
  * 一级类目：`20` \- AI 
    * 二级类目：`02` \- 人脸识别

一级类目与二级类目名称 和 API 接口文档的类目名称基本保持一致。

## 最佳实践

以 API 接口 `openBluetoothAdapter` 为例，当蓝牙适配器不可用时，针对 `openBluetoothAdapter` 接口抛出的异常 `Error` 对象：
    
    
    "err":
    {
    	"errMsg": "openBluetoothAdapter:fail:not available",
    	"errCode": 10001,
    	"errno": 1500102
    }
    

可以通过以下代码进行异常处理：
    
    
    wx.openBluetoothAdapter({
      success (res) {
        console.log(res)
      },
      fail (err) {
        // 微信无法使用蓝牙，可引导用户在系统设置中启用蓝牙
        if ( err.errno === 1500102 ) {
            wx.showModal({
                content: '微信无法使用蓝牙，请到系统设置中启用'
            })
        }
      }
    })
    

## 错误码列表

以下是 `errno` 值的一览表。

errno | errMsg | 含义  
---|---|---  
0 | ok | 成功  
1 | cancel | 撤销  
3 | system permission denied | 系统权限未授予微信  
4 | internal error | 小程序框架内部异常  
5 | time out | 接口超时  
100 | jsapi not supported | JsApi不支持  
101 | jsapi invalid request data | JsApi请求参数非法  
102 | jsapi has no permission | JsApi没有权限  
103 | jsapi user authorize denied | JsApi用户拒绝授权  
104 | jsapi user authorize canceled | JsApi用户取消授权  
106 | invalid jsapi index | JsApi权限位序号非法  
108 | cgi failed for network issues | 网络错误导致CGI逻辑失败  
109 | cgi failed for response null | CGI响应为空  
110 | scope or scope list empty | scope或者scope列表为空  
111 | oom occurs | 发生OutOfMemoryError  
1000 | server system error | 服务端系统错误  
1001 | invalid request parameter | 基础库wx接口请求参数非法  
1002 | empty request | 空的请求  
1003 | meet server frequency limit | 命中服务端频率限制  
1004 | invalid openid | 不合法的openid  
1005 | invalid appid | 不合法的appid  
1006 | insert data failed | 添加数据失败  
1007 | get no data | 数据不存在  
1008 | update data failed | 更新数据失败  
1009 | data expired | 数据过期  
1010 | data deleted | 数据被删除  
1011 | invalid user id | 不合法的用户身份  
1012 | api need post method | api要求post请求  
1013 | api need get method | api要求get请求  
1014 | invalid user ticket | 无效的凭证  
1015 | invalid api | 无效的接口  
1016 | no websocket conn info | 无websocket连接信息  
1017 | mem err | 服务端内存相关错误  
1018 | duplicated uuid | uuid冲突  
1019 | not friend | 不是好友关系  
1020 | code already used | code已经使用  
1021 | code expired | code过期  
1022 | invalid json | json数据解析错误  
1023 | invalid state | 无效的状态  
100001 | json parse error | json解析错误  
102101 | settings page not found | openSystemSettings找不到对应的系统设置页  
103101 | applyUpdate has been called | applyUpdate已被调用  
103102 | update is not ready | update未准备完成  
109001 | invalid random value length | 无效的随机数长度  
500001 | invalid style | 无效的style  
505101 | require absolute path | 需要绝对路径  
510001 | invoke too frequently | 函数调用时间间隔过短  
510101 | invalid text | 无效的text  
600000 | unknown network error | 未知的网络错误  
600001 | cronet component error | cronet组件错误，详细错误参考返回中的errMsg字段。参考[cronet源码net_error_list](<https://chromium.googlesource.com/chromium/src/+/master/net/base/net_error_list.h>) 或 net_error_list  
600002 | url not in domain list | url域名不在安全域名列表中  
600003 | network interrupted error | 网络中断  
600004 | network logic error | 网络类目逻辑错误  
600005 | network argv error | 网络类目参数错误  
600006 | network system error | 网络类目系统错误  
600007 | network exceed max task count | 超过最大请求数量  
600008 | network reach the max redirect count | 超过最大重定向次数  
600009 | invalid URL | URL 格式不合法  
600010 | invalid request data | 请求的 data 序列化失败  
600011 | url validate error | URL验证错误  
602000 | unknown network request error | 未知的发起请求错误  
602001 | request system error | request系统错误  
602002 | request server http error | http请求httpdns服务商错误  
602101 | not buy httpdns service | 小程序未在服务市场购买httpdns服务  
602102 | service expired | 小程序在httpdns服务市场资源包过期  
602103 | no enough httpdns quota | 小程序在httpdns服务市场额度不足  
602104 | empty servicer return | httpdns服务商返回结果为空  
602105 | time-out when request servicer | 调用httpdns服务商结果超时  
602106 | invalid servicer response | httpdns服务商返回数据不合法  
602107 | empty domain httpdns result | httpdns域名解析结果为空  
602108 | not valid service id | 不支持的httpdns服务商id  
602300 | convert native buffer parameter fail. native buffer exceed size limit | 超出native buffer最大限制  
602301 | bind socket dependency is unavailable | 申请移动网络请求失败  
602302 | response data convert to UTF8 fail | 请求数据转换格式失败  
603101 | iOS not supported | 不支持ios平台  
603102 | android not supported | 不支持安卓平台  
603103 | parameter error: require packageName or packageNameArray | 需要包名或包名数组  
603104 | parameter error: require downloadId or downloadIdArray or appIdArray | 需要下载ID或者ID数组或APPID数组  
603105 | abort download task | 中断下载任务  
603300 | download save file error | 保存文件出错  
603301 | exceed max file size | 超出文件最大大小限制  
603302 | file data is empty | 文件数据为空  
603303 | permission denied can not open file filepath | 指定存储路径无权限  
606101 | mdns resolve system error:%d | 解析失败，详细错误参考返回中的errMsg字段。[系统错误码参考链接](<https://developer.android.com/reference/android/net/nsd/NsdManager#constants_1>)  
700000 | unknown payment error |   
700001 | limited use | 马甲微信拦截支付接口  
701000 | unknown payment default class error |   
701001 | ios not support |   
701002 | need realname verify before payment |   
701100 | midas buy goods failed | 米大师下单失败  
701101 | midas get account balance failed | 米大师查询账户额度失败  
701102 | midas currency pay failed | 米大师代币付款失败  
701103 | midas currency canel pay failed | 米大师代币退款失败  
701104 | midas currency present failed | 米大师赠送代币失败  
701105 | midas get user water failed | 米大师拉取用户流水失败  
701106 | midas currency in sufficient | 米大师代币余额不足  
701107 | midas order not exists | 米大师订单不存在  
701108 | midas order already refunded | 米大师订单已经退款  
701109 | midas order refunded amount exceed | 米大师代币退款金额超过上限  
701110 | midas order duplicated pperator | 付款重复操作  
701111 | midas invalid parameter | 参数错误  
701112 | midas get coupons failed | 米大师拉取代金劵失败  
701113 | midas get set coupon order failed | 米大师下单时记录代金券信息失败  
701114 | midas no valid coupons | 米大师无有效的代金券  
701115 | midas order alreay paid | 米大师订单已支付  
701116 | midas no valid rollback coupon | 米大师无对应回滚的代金券  
1103002 | target file not exists | 目标图片不存在  
1103003 | image decode fail | 图片解码失败  
1103004 | create temp file fail | 临时文件创建失败  
1103005 | error occurs during the compress process | 压缩图片过程发生错误  
1103006 | param compress quality invalid | quality非法（<0 or >100）  
1103007 | src image file size zero | 图片长或宽为零  
1107001 |  | 用户当前正在观看直播/视频通话/打电话  
1107002 |  | 当前处于rtc模式，但用户没有授予微信录音权限  
1107003 | illegal operation in background | 小程序退后台时无法操作  
1107004 | take snapshot fail | 截图失败  
1107005 | save to album after take snapshot fail | 截图后保存到相册失败  
1107006 | save to temp file after take snapshot fail | 截图后保存到临时文件失败  
1107007 | not in picture in picture mode now | video/live-player组件当前不处于小窗模式下  
1107008 | exiting picture in picture mode now | video/live-player组件当前正在退出小窗模式  
1107009 | request background playback but src empty | 进入后台音频播放模式时src为空  
1107010 | request background playback but in rtc mode | rtc模式下不允许进入后台音频播放模式  
1107011 | request background playback but in background | page已经进入后台，不允许进入后台音频播放模式  
1107012 | load resource file fail | 资源文件加载失败  
1107013 | system permission denied | 准备推流，但用户没有授予微信录音/摄像头权限  
1300001 | Operation not permitted | 操作不被允许  
1300002 | No such file or directory | 找不到文件或目录  
1300005 | Input/output error | 输入输出流不可用  
1300009 | Bad file descriptor | 无效的fd  
1300013 | Permission denied | 权限错误，文件是只读或只写  
1300014 | Path permission denied | 传入的路径没有权限  
1300020 | Not a directory | 指定路径不是目录，常见于指定的写入路径的上级路径为一个文件的情况  
1300021 | Is a directory | 指定路径是一个目录  
1300022 | Invalid argument | 无效参数，可以检查length或offset是否越界  
1300066 | Directory not empty | 目录不为空  
1300201 | system error | 系统接口调用失败  
1300202 | the maximum size of the file storage limit is exceeded | 存储空间不足  
1300203 | encode error | 字符编码转换失败  
1300300 | sdcard not mounted | sd card挂载失败  
1300301 | unable to open as fileType | 无法以fileType打开文件  
1301000 | permission denied, cannot access file path | 目标路径无访问权限（usr目录）  
1301002 | data to write is empty | 写入数据为空  
1301003 | illegal operation on a directory | 不可对目录进行此操作  
1301004 | illegal operation on a package directory | 不可对代码包目录进行此操作  
1301005 | file already exists | 已有同名文件或目录  
1301006 | value of length is out of range | length值越界  
1301007 | value of offset is out of range | offset值越界  
1301008 | fd argument must be of type number | fd参数的值必须为number类型  
1301009 | value of position is out of range | position值越界  
1301100 | store directory is empty | store目录为空  
1301102 | unzip open file fail | 压缩文件打开失败  
1301103 | unzip entry fail | 解压单个文件失败  
1301104 | unzip fail | 解压失败  
1301111 | brotli decompress fail | brotli解压失败（iOS独有）  
1302001 | permission denied, fd is writeonly or readonly | fd只读/只写  
1302002 | excced max concurrent fd limit | fd数量已达上限  
1302003 | invalid flag | 无效的flag  
1302004 | permission denied when open using flag | 无法使用flag标志打开文件  
1302005 | array buffer does not exist | 未传入arrayBuffer  
1302100 | array buffer is readonly | arrayBuffer只读  
1402101 | appid login is blocked | 小程序登录被封禁  
1416100 | invalid finder username | 非法的视频号id  
1416101 | get finder info failed | 拉取视频号信息失败  
1416102 | invalid finder feed id | 非法的feed_id  
1416103 | not same contractor | 小程序appid和视频号的同主体校验不通过  
1500101 | not init | 未初始化蓝牙适配器  
1500102 |  | 当前蓝牙适配器不可用  
1500103 |  | 当前BLE设备获取不到Service/获取不到对应UUID的Service  
1500104 |  | 调用系统蓝牙能力失败, 详细错误见errMsg  
1500105 | system not support | 系统不支持BLE  
1504001 |  | 系统不支持NFC  
1504002 | not support HCE | 系统不支持HCE  
1504003 | system NFC switch not opened | 系统NFC开关未打开  
1504100 | not set default NFC application | 未设置NFC默认应用  
1504101 | register aids failed | HCE注册aid列表失败  
1504200 | user is not authorized | 用户未授权App使用NFC能力  
1504201 | parse NdefMessage failed | 解析NdefMessage失败  
1504202 | NFC discovery already started | 之前已经调用了startDiscovery  
1504203 | NFC discovery has not started | 之前没有调用startDiscovery  
1504204 | Tech already connected | 当前tech已经连接上  
1504205 | Tech has not connected | 当前tech还没连接上  
1504206 | NFC tag has not been discovered | 系统未发现NFC标签  
1504207 | invalid tech | 无效的tech  
1504208 | unavailable tech | 当前NFC标签不支持该tech  
1504209 | function not support | 不支持该NFC能力  
1504210 | system internal error | 调用系统NFC能力失败, 详细错误见errMsg  
1505000 | unknown WIFI error |   
1505001 | not invoke startWifi | 未调用startWifi  
1505002 | wifi is disabled | 系统WiFi开关未开启  
1505003 | maybe not open GPS | 操作失败, 可能是因为系统GPS开关未打开  
1505004 | maybe not obtain GPS Permission | 操作失败, 可能是因为用户未授予App定位权限  
1505005 | currentWifi is null | 获取不到当前已连接WiFi  
1505006 | current connected wifi is invalid | 获取到的当前已连接WiFi信息非法, 开发者可以考虑重试  
1505020 | unknown error | 连接WiFi其他未知错误  
1505021 | weapp in background | 小程序在后台, 不允许调用connectWifi  
1505022 | open settings fail | 仅Android, 跳转系统设置页情况下跳转失败  
1505023 | duplicated request | 重复连接WiFi  
1505024 | password error | 密码错误  
1505025 | wifi config may be expired | 可能是WiFi配置已过期  
1505026 | fail to connect wifi:time out | 连接WiFi超时  
1505027 | user denied | 用户拒绝授权连接Wi-Fi  
1505028 | weixin cannot modify system config | 仅iOS，系统/运营商配置拒绝连接Wi-Fi  
1505029 | invalid ssid | 仅iOS，无效的ssid  
1505030 | duplicate request | 仅iOS，上个请求还未完成，重复请求  
1505031 | invalid WEP / WPA password | 仅iOS，无效的WEP/WPA密码  
1505032 | system internal error | 系统错误，需要在errMsg中打印更多信息  
1505040 |  | 获取当前已连接WiFi失败, 开发者可以考虑稍后重试  
1509000 | unknown BLE error |   
1509001 |  | 连接BLE设备失败  
1509002 |  | 当前Service获取不到Characteristic/获取不到对应UUID的Characteristic  
1509003 |  | 未连接上该BLE设备  
1509004 |  | 当前Characteristic不支持该属性，详细错误见errMsg  
1509005 |  | BLE操作超时  
1509006 | device not found | 未找到设备  
1509007 | already connect | 当前BLE设备已经连接上  
1509008 | location permission is denied | Android6.0以上, BLE扫描需授权地理位置  
1509010 | wait for bluetooth state change timeout | iOS上调用openBluetoothAdapter后客户端等待状态更新超时  
1510101 | need pin | 配对当前蓝牙设备需要pin码  
1510102 | reach max bluetooth background count | 支持蓝牙后台通信的设备数目已经达到上限  
1517001 | the content of the text message exceeds the limit | 短信内容超出长度限制  
2000000 | AI system error | 系统错误  
2000001 | AI invalid arguments | 参数错误  
2000002 | AI client device not supported | 客户端设备不支持  
2000003 | AI os not supported | 系统不支持  
2000004 | AI library not supported | 客户端设备不支持  
2002000 | unknown error | 未知错误  
2002001 | face detection does not initialize | 人脸检测未初始化  
2002002 | face detection has duplicated initialization | 人脸检测重复初始化  
2002003 | face detection has failed initialization | 人脸检测初始化失败  
2002004 | face not detected or detection failed | 检测不到人脸或检测失败  
2002005 | stop face detection failed | 停止人脸检测失败  
2003000 | session unavailable | 会话不可用  
2003001 | system camera not authorized | 系统相机权限未打开  
2003002 | camera not authorized | 小程序相机权限未授权  
2004000 | invalid model file path | 无效的模型文件路径  
2004001 | create session fail(%s) | 通过sdk创建session失败  
2004002 | sessionId is empty | session id 为空  
2004003 | input tensors is empty | input tensors 为空  
2004004 | data type[%s] for input tensor[%s] is unsupported | 不支持当前输入数据类型  
2004005 | invalid session id | 无效的sessionId  
2004006 | data type[%s] for output tensor[%s] is unsupported | 不支持当前输出数据类型  
2004007 | input tensor [%s] data is invalid | input tensor数据为空  
2004008 | invalid shape | 无效的shape  
2004009 | run session fail(%s) | 通过sdk run session失败  
2004010 | environment not ready | 环境未准备就绪(比如Android so未加载)  
2004011 | session id not exist | 释放的session id不存在

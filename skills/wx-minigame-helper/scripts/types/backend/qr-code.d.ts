// 微信小游戏服务端 API 类型声明 — 域：qr-code（自动生成，请勿手改）
// 来源：references/backend-api/（微信开放文档 api-backend），2026-08 抓取版本

/**
 * 获取小程序二维码（createQRCode） — 获取小程序二维码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制，详见获取二维码。
 * @endpoint POST https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface CreateQRCodeQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface CreateQRCodeRequest {
  /**
   * 扫码进入的小程序页面路径，最大长度 128 个字符，不能为空；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。scancode_time为系统保留参数，不允许配置。
   */
  path: string
  /** 二维码的宽度，单位 px。最小 280px，最大 1280px;默认是430 */
  width?: number
}

interface CreateQRCodeResponse {
  /** 错误码 */
  errcode?: string
  /** 错误信息 */
  errmsg?: string
}

/**
 * 获取小程序码（getQRCode） — 该接口用于获取小程序码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制，详见获取小程序码。
 * @endpoint POST https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetQRCodeQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface GetQRCodeRequest {
  /**
   * 扫码进入的小程序页面路径，最大长度 1024 个字符，不能为空，scancode_time为系统保留参数，不允许配置；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。
   */
  path: string
  /** 二维码的宽度，单位 px。默认值为430，最小 280px，最大 1280px */
  width?: number
  /** 默认值false；自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调 */
  auto_color?: boolean
  /**
   * 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
   */
  line_color?: GetQRCodeLineColor
  /** 默认值false；是否需要透明底色，为 true 时，生成透明底色的小程序码 */
  is_hyaline?: boolean
  /** 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。 */
  env_version?: string
}

/** 小程序码线条颜色（RGB，十进制表示） */
interface GetQRCodeLineColor {
  /** 红色值 */
  r: string
  /** 绿色值 */
  g: string
  /** 蓝色值 */
  b: string
}

interface GetQRCodeResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

/**
 * 获取不限制的小程序码（getUnlimitedQRCode） — 该接口用于获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。 更多用法详见 获取小程序码。
 * @endpoint POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
 * 服务端接口，只能在开发者服务器调用，不可在前端调用
 */

interface GetUnlimitedQRCodeQuery {
  /** 接口调用凭证，可使用 access_token、authorizer_access_token */
  access_token: string
}

interface GetUnlimitedQRCodeRequest {
  /**
   * 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
   */
  scene: string
  /**
   * 默认是主页，页面 page，例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面。scancode_time为系统保留参数，不允许配置
   */
  page?: string
  /**
   * 默认是true，检查page 是否存在，为 true 时 page 必须是已经发布的小程序存在的页面（否则报错）；为 false 时允许小程序未发布或者 page 不存在， 但page 有数量上限（60000个）请勿滥用。
   */
  check_path?: boolean
  /** 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。 */
  env_version?: string
  /** 默认430，二维码的宽度，单位 px，最小 280px，最大 1280px */
  width?: number
  /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false */
  auto_color?: boolean
  /**
   * 默认是{"r":0,"g":0,"b":0} 。auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
   */
  line_color?: GetUnlimitedQRCodeLineColor
  /** 默认是false，是否需要透明底色，为 true 时，生成透明底色的小程序 */
  is_hyaline?: boolean
}

/** 不限制小程序码线条颜色（RGB，十进制表示） */
interface GetUnlimitedQRCodeLineColor {
  /** 红色值 */
  r: string
  /** 绿色值 */
  g: string
  /** 蓝色值 */
  b: string
}

interface GetUnlimitedQRCodeResponse {
  /** 错误码 */
  errcode?: number
  /** 错误信息 */
  errmsg?: string
}

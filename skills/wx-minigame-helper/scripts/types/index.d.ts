// 微信小游戏 API 类型声明总入口（自动生成，请勿手改）
// 用法：tsconfig include 本目录，或在入口文件顶部 /// <reference path="./types/index.d.ts" />

/// <reference path="./ad.d.ts" />
/// <reference path="./ai.d.ts" />
/// <reference path="./base.d.ts" />
/// <reference path="./chattool.d.ts" />
/// <reference path="./data-analysis.d.ts" />
/// <reference path="./device.d.ts" />
/// <reference path="./ext.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./game-recorder.d.ts" />
/// <reference path="./game-server-manager.d.ts" />
/// <reference path="./location.d.ts" />
/// <reference path="./media.d.ts" />
/// <reference path="./midas-payment.d.ts" />
/// <reference path="./navigate.d.ts" />
/// <reference path="./network.d.ts" />
/// <reference path="./offline-mode.d.ts" />
/// <reference path="./open.d.ts" />
/// <reference path="./render.d.ts" />
/// <reference path="./share.d.ts" />
/// <reference path="./storage.d.ts" />
/// <reference path="./ui.d.ts" />
/// <reference path="./util.d.ts" />
/// <reference path="./worker.d.ts" />

interface Wx extends WxAd, WxAi, WxBase, WxChattool, WxDataAnalysis, WxDevice, WxExt, WxFile, WxGameRecorder, WxGameServerManager, WxLocation, WxMedia, WxMidasPayment, WxNavigate, WxNetwork, WxOfflineMode, WxOpen, WxRender, WxShare, WxStorage, WxUi, WxUtil, WxWorker {}

/** 微信小游戏全局 API 对象 */
declare const wx: Wx

/** 全局画布（首次调用创建） */
declare const canvas: any
declare const GameGlobal: Record<string, any>

/** 小游戏运行时内置 console */
declare const console: {
  log(...args: any[]): void
  info(...args: any[]): void
  warn(...args: any[]): void
  error(...args: any[]): void
  debug(...args: any[]): void
  group(...args: any[]): void
  groupEnd(): void
}

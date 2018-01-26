/**
 * [sync 数据同步]
 */
const sync = state => {
  return state.Sync
}

// 初始化
const inits = state => {
  return state.Sync.inits
}

// 请求
const requests = state => {
  return state.Sync.requests
}

// 上传
const uploads = state => {
  return state.Sync.uploads
}

// 接口
const inters = state => {
  return state.Sync.inters
}

// 全局
const stores = state => {
  return state.Sync.stores
}

/**
 * [net 网络连接状态]
 */
const net = state => {
  return state.Net
}

/**
 * [adv 店铺广告图]
 */
const adv = state => {
  return state.Adv
}

/**
 * [act 店铺活动信息]
 */
const act = state => {
  return state.Act
}

/**
 * [deskscate 餐桌分类列表]
 */
const deskscate = state => {
  return state.Deskscate
}

/**
 * [desks 餐桌列表]
 */
const desks = state => {
  return state.Desks
}

/**
 * [goodscate 商品分类列表]
 */
const goodscate = state => {
  return state.Goodscate
}

/**
 * [goodsunit 商品单位列表]
 */
const goodsunit = state => {
  return state.Goodsunit
}

/**
 * [goods 商品列表]
 */
const goods = state => {
  return state.Goods
}

/**
 * [orders 订单列表]
 */
const orders = state => {
  return state.Orders
}

/**
 * [settings 配置]
 */
const settings = state => {
  return state.Settings
}

// 常规设置
const base = state => {
  return state.Settings.base
}

// 配置普通打印机
const basic = state => {
  return state.Settings.basic
}

// 配置后厨打印机
const back = state => {
  return state.Settings.back
}

// 配置标签打印机
const tips = state => {
  return state.Settings.tips
}

// 配置交班小票打印设置
const record = state => {
  return state.Settings.record
}

// 配置打印格式
const print = state => {
  return state.Settings.print
}

// 后厨分类打印设置
const category = state => {
  return state.Settings.category
}

// 其它设备
const other = state => {
  return state.Settings.other
}

// 系统更新
const messages = state => {
  return state.Settings.messages
}

// 关于我们
const us = state => {
  return state.Settings.us
}

export {
  sync, inits, requests, uploads, inters, stores,
  net,
  adv, act,
  deskscate, desks,
  goodscate, goodsunit, goods,
  orders,
  settings, base, basic, back, tips, record, print, category, other, messages, us
}

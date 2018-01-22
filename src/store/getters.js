/**
 * [sync 数据同步]
 */
const sync = state => {
  return state.Sync
}

// 初始化
const init = state => {
  return state.Sync.init
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

/**
 * [userinfo 用户信息]
 */
const userinfo = state => {
  return state.Userinfo
}

/**
 * [shops 店铺列表]
 */
const shops = state => {
  return state.Shops
}

/**
 * [powers 权限]
 */
const powers = state => {
  return state.Powers
}

/**
 * [activity 店铺活动信息]
 */
const activity = state => {
  return state.Activity
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

// 配置小票打印机
const record = state => {
  return state.Settings.record
}

// 配置打印格式
const print = state => {
  return state.Settings.print
}

// 后厨分类打印
const category = state => {
  return state.Settings.category
}

// 其它设备
const other = state => {
  return state.Settings.other
}

// 门店选择
const shop = state => {
  return state.Settings.shop
}

// 系统更新
const system = state => {
  return state.Settings.system
}

// 关于我们
const us = state => {
  return state.Settings.us
}

export {
  sync, init, requests, uploads, inters,
  userinfo,
  shops,
  powers,
  activity,
  settings, base, basic, back, tips, record, print, category, other, shop, system, us
}

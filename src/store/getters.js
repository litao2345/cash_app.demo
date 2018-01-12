const count = state => {
  return state.Count
}

/**
 * [userinfo 用户信息]
 */
const userinfo = state => {
  return state.Userinfo
}

/**
 * [powers 权限]
 */
// 权限
const powers = state => {
  return state.Powers
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

// 配置发票打印机
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
  count,
  userinfo,
  powers,
  settings, base, basic, back, tips, record, print, category, other, shop, system, us
}

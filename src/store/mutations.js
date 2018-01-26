/**
 * [net 网络连接状态]
 */
const netSETS = (state, datas) => {
  state.Net = parseInt(datas)
}

/**
 * [adv 店铺广告图]
 */
const advSETS = (state, datas) => {
  state.Adv = datas
}

/**
 * [act 店铺活动信息]
 */
const actSETS = (state, datas) => {
  state.Act = datas
}

/**
 * [deskscate 餐桌分类列表]
 */
const deskscateSETS = (state, datas) => {
  state.Deskscate = datas
}

/**
 * [desks 餐桌列表]
 */
const desksSETS = (state, datas) => {
  state.Desks = datas
}

/**
 * [goodscate 商品分类列表]
 */
const goodscateSETS = (state, datas) => {
  state.Goodscate = datas
}

/**
 * [goodsunit 商品单位列表]
 */
const goodsunitSETS = (state, datas) => {
  state.Goodsunit = datas
}

/**
 * [goods 商品列表]
 */
const goodsSETS = (state, datas) => {
  state.Goods = datas
}

/**
 * [orders 订单列表]
 */
const ordersSETS = (state, datas) => {
  state.Orders = datas
}

/**
 * [base 常规设置]
 */
const baseSETS = (state, datas) => {
  state.Settings.base[datas.keyword] = datas
}

/**
 * [basic 配置普通打印机]
 */
const basicSETS = (state, datas) => {
  state.Settings.basic[datas.keyword] = datas
}

/**
 * [tips 配置标签打印机]
 */
const tipsSETS = (state, datas) => {
  state.Settings.tips[datas.keyword] = datas
}

/**
 * [record 配置交班小票打印设置]
 */
const recordSETS = (state, datas) => {
  state.Settings.record[datas.keyword] = datas
}

/**
 * [other 其它设备]
 */
const otherSETS = (state, datas) => {
  state.Settings.other[datas.keyword] = datas
}

export {
  netSETS,
  advSETS, actSETS,
  deskscateSETS, desksSETS,
  goodscateSETS, goodsunitSETS, goodsSETS,
  ordersSETS,
  baseSETS, basicSETS, tipsSETS, recordSETS, otherSETS
}

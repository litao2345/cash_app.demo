/**
 * [net 网络连接状态]
 */
const netSet = ({commit}, datas) => {
  commit('netSETS', datas)
}

/**
 * [adv 店铺广告图]
 */
const advSet = ({commit}, datas) => {
  commit('advSETS', datas)
}

/**
 * [act 店铺活动信息]
 */
const actSet = ({commit}, datas) => {
  commit('actSETS', datas)
}

/**
 * [deskscate 餐桌分类列表]
 */
const deskscateSet = ({commit}, datas) => {
  commit('deskscateSETS', datas)
}

/**
 * [desks 餐桌列表]
 */
const desksSet = ({commit}, datas) => {
  commit('desksSETS', datas)
}

/**
 * [goodscate 商品分类列表]
 */
const goodscateSet = ({commit}, datas) => {
  commit('goodscateSETS', datas)
}

/**
 * [goodsunit 商品单位列表]
 */
const goodsunitSet = ({commit}, datas) => {
  commit('goodsunitSETS', datas)
}

/**
 * [goods 商品列表]
 */
const goodsSet = ({commit}, datas) => {
  commit('goodsSETS', datas)
}

/**
 * [orders 订单列表]
 */
const ordersSet = ({commit}, datas) => {
  commit('ordersSETS', datas)
}

/**
 * [base 常规设置]
 */
const baseSet = ({commit}, datas) => {
  commit('baseSETS', datas)
}

/**
 * [basic 配置普通打印机]
 */
const basicSet = ({commit}, datas) => {
  commit('basicSETS', datas)
}

/**
 * [tips 配置标签打印机]
 */
const tipsSet = ({commit}, datas) => {
  commit('tipsSETS', datas)
}

/**
 * [record 配置交班小票打印设置]
 */
const recordSet = ({commit}, datas) => {
  commit('recordSETS', datas)
}

/**
 * [other 其它设备]
 */
const otherSet = ({commit}, datas) => {
  commit('otherSETS', datas)
}

export {
  netSet,
  advSet, actSet,
  deskscateSet, desksSet,
  goodscateSet, goodsunitSet, goodsSet,
  ordersSet,
  baseSet, basicSet, tipsSet, recordSet, otherSet
}

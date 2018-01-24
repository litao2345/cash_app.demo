/**
 * [net 网络连接状态]
 */
const netSet = ({commit}, datas) => {
  commit('netSETS', datas)
}

/**
 * [userinfo 用户信息]
 */
const userinfoSet = ({commit}, datas) => {
  commit('userinfoSETS', datas)
}

/**
 * [shops 店铺列表]
 */
const shopsSet = ({commit}, datas) => {
  commit('shopsSETS', datas)
}

/**
 * [powers 权限]
 */
const powersSet = ({commit}, datas) => {
  commit('powersSETS', datas)
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

export {
  netSet,
  userinfoSet, shopsSet, powersSet,
  advSet, actSet,
  deskscateSet, desksSet,
  goodscateSet, goodsunitSet, goodsSet,
  ordersSet
}

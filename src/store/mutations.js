/**
 * [userinfo 用户信息]
 */
const userinfoSETS = (state, datas) => {
  state.Userinfo = datas
}

/**
 * [shops 店铺列表]
 */
const shopsSETS = (state, datas) => {
  state.Powers = datas
}

/**
 * [powers 权限]
 */
const powersSETS = (state, datas) => {
  state.Powers = datas.split(',')
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

export {
  userinfoSETS, shopsSETS, powersSETS,
  advSETS, actSETS,
  deskscateSETS, desksSETS,
  goodscateSETS, goodsunitSETS, goodsSETS,
  ordersSETS
}

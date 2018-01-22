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
 * [activity 店铺活动信息]
 */
const activitySETS = (state, datas) => {
  state.Activity = datas
}

export {
  userinfoSETS,
  shopsSETS,
  powersSETS,
  activitySETS
}

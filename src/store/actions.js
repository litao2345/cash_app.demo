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
 * [activity 店铺活动信息]
 */
const activitySet = ({commit}, datas) => {
  commit('activitySETS', datas)
}

export {
  userinfoSet,
  shopsSet,
  powersSet,
  activitySet
}

const count = state => {
  return state.Count
}

// 用户信息
const userinfo = state => {
  return state.Userinfo
}

// 权限
const powers = state => {
  return state.Powers
}

// 配置
const settings = state => {
  return state.Settings
}

export {count, userinfo, powers, settings}

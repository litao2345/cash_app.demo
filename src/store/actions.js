const increment = ({commit}) => {
  commit('INCREMENT')
}

const decrement = ({commit}) => {
  commit('DECREMENT')
}

export {
  increment,
  decrement
}

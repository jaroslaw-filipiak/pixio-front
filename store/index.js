export const state = () => ({
  counter: 0,
  done: false,
  isMaskVisible: true,
  isVideoVisible: false,
  isScrollLock: true,
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

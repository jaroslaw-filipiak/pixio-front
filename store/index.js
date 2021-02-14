export const state = () => ({
  counter: 0,
  done: false,
  isMaskVisible: true,
  isVideoVisible: false,
  isScrollLock: true,
})

export const mutations = {
  changeScrollLock(state) {
   isScrollLock = state
   console.log('change scroll lock in store')
   console.log(state)
  }
}


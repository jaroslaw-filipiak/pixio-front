export const state = () => ({
  counter: 0,
  done: false,
  isMaskVisible: true,
  isVideoVisible: false,
  isScrollLock: true,
  isRightMenuVisible: false
})

export const mutations = {
  changeScrollLock(state) {
   isScrollLock = state
   console.log('change scroll lock in store')
   console.log(state)
  },
  revealNavigaton(state) {
    console.log(state)
    console.log('revealNavigation mutation')
  }
}


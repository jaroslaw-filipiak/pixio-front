export const state = () => ({
  counter: 0,
  done: false,
  isMaskVisible: true,
  isVideoVisible: false,
  isScrollLock: true,
  isRightMenuVisible: false,
  isVideoTooltipVisible: true,
  isTooltipVisible: false,
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
  },
  changeVideoTooltipVisibility(state, payload) {
    console.log(state)
    console.log(payload)
    console.log('changeVideoTooltipVisibility')
    state.isVideoTooltipVisible = payload
  },
  changeVideoTooltipVisibilityToFalse(state , payload) {
    state.isVideoTooltipVisible = payload
  },
  setVideoTooltipToFalse(state , payload) {
    state.isVideoTooltipVisible = payload
  },
  setIsTooltipVisible(state, payload) {
    state.isTooltipVisible = payload
  }
}


export const state = () => ({
  counter: 0,
  count: 0,
  done: false,
  isMaskVisible: true,
  isVideoVisible: false,
  isScrollLock: true,
  isRightMenuVisible: true,
  isVideoTooltipVisible: false,
  isTooltipVisible: false,
  videoSRC: "",
  navOpen: false
});

export const mutations = {
  changeScrollLock(state) {
    isScrollLock = state;
  },
  revealNavigaton(state) {},
  changeVideoTooltipVisibility(state, payload) {
    state.isVideoTooltipVisible = payload;
  },
  changeVideoTooltipVisibilityToFalse(state, payload) {
    state.isVideoTooltipVisible = payload;
  },
  setVideoTooltipToFalse(state, payload) {
    state.isVideoTooltipVisible = payload;
  },
  setIsTooltipVisible(state, payload) {
    state.isTooltipVisible = payload;
  },
  updateCurrentVideo(state, payload) {
    state.currentVideo = payload;
  },
  changeVideoURL(state, payload) {
    state.videoSRC = payload;
  },
  closeVideo(state, payload) {
    state.isVideoTooltipVisible = false;
  },
  changeNavOpen(state, payload) {
    state.navOpen = payload;
  }
};

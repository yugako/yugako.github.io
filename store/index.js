export const state = () => ({
  expanded: false,
    popupOpened: false,
    popupData: '',
    menuOpened: true,
})

export const mutations = {
  isExpanded (state) {
      state.expanded = !state.expanded;
    },
    isOpened (state) {
      state.popupOpened = !state.popupOpened;
    },
    isMenuOpened (state) {
      state.menuOpened = !state.menuOpened;
    },
    setPopupData(state, payload) {
      state.popupData = payload;
    },
}

export const actions = {
  
}

export const getters = {
  Expanded: state => {
      return state.expanded;
    },
    PopupOpened: state => {
      return state.popupOpened;
    },
    PopupData: state => {
      return state.popupData;
    },
    InfoData: state => {
      return state.infos;
    },
    User: state => {
      return state.isUser;
    },
    MenuOpened: state => {
      return state.menuOpened;
    }
}
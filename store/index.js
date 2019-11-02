export const state = () => ({
  expanded: false,
    popupOpened: false,
    popupData: '',
    menuOpened: true,
    blogPosts: [],

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
    setBlogPosts(state, list) {
      state.blogPosts = list;
    },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/blog/', false, /\.json$/);
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setBlogPosts', blogPosts);
  },
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
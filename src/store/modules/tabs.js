const state = () => ({
  activeTab: 1,
});

const mutations = {
  setActiveTab(state, tab) {
    state.activeTab = tab;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};

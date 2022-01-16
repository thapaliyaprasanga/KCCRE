import Vue from "vue";
import Vuex, { MutationTree, StoreOptions } from "vuex";
import { authState } from "./modules/auth";
import { RootState } from "./types";

Vue.use(Vuex);

export const RootMutations = {
  SHOW_SNACKBAR: "SHOW_SNACKBAR",
  HIDE_SNACKBAR: "HIDE_SNACKBAR",
};

const state: RootState = {
  loading: null,
  snackbar: {
    show: null,
    text: null,
  },
};

const mutations: MutationTree<RootState> = {
  [RootMutations.SHOW_SNACKBAR](state, text) {
    let timeout = 0;
    if (state.snackbar.show) {
      state.snackbar.show = false;
      state.snackbar.text = null;
      timeout = 300;
    }
    setTimeout(() => {
      state.snackbar.show = true;
      state.snackbar.text = text;
    }, timeout);
  },
  [RootMutations.HIDE_SNACKBAR](state) {
    state.snackbar.show = false;
    state.snackbar.text = null;
  },
};

const store: StoreOptions<RootState> = {
  state,
  mutations,
  modules: {
    auth: authState,
  },
};

export default new Vuex.Store<RootState>(store);

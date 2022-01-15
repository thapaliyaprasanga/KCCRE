import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { authState } from "./modules/auth";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    auth: authState,
  },
};

export default new Vuex.Store<RootState>(store);

import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { AuthState } from "./types";

export const authGetters: GetterTree<AuthState, RootState> = {
  authenticated(state) {
    return Boolean(state.token) && Boolean(state.user);
  },

  user(state) {
    const { user } = state;
    return user ? user : null;
  },
};

import { MutationTree } from "vuex";
import { AuthState } from "./types";

export const AuthMutations = {
  SET_TOKEN: "SET_TOKEN",
  SET_USER: "SET_USER",
};

export const authMutations: MutationTree<AuthState> = {
  [AuthMutations.SET_TOKEN](state, token) {
    state.token = token;
  },

  [AuthMutations.SET_USER](state, user) {
    state.user = user;
  },
};

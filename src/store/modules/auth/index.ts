import { authGetters } from "./getters";
import { RootState } from "@/store/types";
import { Module } from "vuex";
import { AuthState } from "./types";
import { authMutations } from "./mutations";
import { authActions } from "./actions";

const state: AuthState = {
  token: null,
  user: null,
};

export const authState: Module<AuthState, RootState> = {
  state,
  mutations: authMutations,
  getters: authGetters,
  actions: authActions,
  namespaced: true,
};

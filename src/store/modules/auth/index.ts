import { authGetters } from "./getters";
import { RootState } from "@/store/types";
import { Module } from "vuex";
import { AuthState } from "./types";

const state: AuthState = {
  token: null,
  user: null,
};

export const authState: Module<AuthState, RootState> = {
  state,
  getters: authGetters,
  namespaced: true,
};

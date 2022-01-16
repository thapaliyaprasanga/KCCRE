import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { AuthState, LoginDTO, RegisterDTO, Response } from "./types";
import axios from "axios";
import { AuthMutations } from "./mutations";

export const authActions: ActionTree<AuthState, RootState> = {
  async register(_, credentials: RegisterDTO) {
    await axios.post("/signup", credentials);
  },

  async login({ dispatch }, credentials: LoginDTO) {
    const response: Response = await axios.post("/signin", credentials);
    return dispatch("setUser", response.data.token);
  },

  removeUserAndToken({ commit }) {
    commit(AuthMutations.SET_TOKEN, null);
    commit(AuthMutations.SET_USER, null);
  },

  async setUser({ commit, dispatch }, token) {
    commit(AuthMutations.SET_TOKEN, token);

    try {
      const response: Response = await axios.get("/me");
      commit(AuthMutations.SET_USER, response.data);
    } catch (error) {
      dispatch("removeUserAndToken");
    }
  },

  signOut({ dispatch }) {
    dispatch("removeUserAndToken");
  },
};

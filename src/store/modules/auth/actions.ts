import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { AuthState, RegisterDTO } from "./types";
import axios from "axios";

export const authActions: ActionTree<AuthState, RootState> = {
  async register(_, credentials: RegisterDTO) {
    await axios.post("/signup", credentials);
  },
};

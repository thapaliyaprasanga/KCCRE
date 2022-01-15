export interface AuthState {
  token: null | string;
  user: null | {
    username: string;
  };
}

export interface LoginDTO {
  username: string;
  password: string;
}

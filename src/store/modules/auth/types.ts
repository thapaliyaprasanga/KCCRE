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

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

export interface Response {
  data: Record<string, unknown>;
  status: Record<string, unknown>;
}

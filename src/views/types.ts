export interface SigninData {
  valid: boolean;
  email: string;
  emailRules: Array<Record<string, any>>;
  password: string;
  passwordRules: Array<Record<string, any>>;
}

export type TUserData = {
  email: string;
  name: string;
  password: string
};

export type TLoginData = Omit<TUserData, 'name'>;
export type TResetData = {token: string, password: string};
export type TForgotData = Omit<TUserData, 'name' | 'password'>;

export type TResAuthData = {
  success: boolean,
  message?: string,
  accessToken: string,
  refreshToken: string,
  user: Omit<TUserData, 'password'>
}

export type TResUserData = {
  success: boolean,
  message?: string,
  user: Omit<TUserData, 'password'>
}

export type TResResetData = {
  success: boolean,
  message?: string
}
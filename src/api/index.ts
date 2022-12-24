import { checkResponse } from '../utils/checkResponse';
import {
  IObjectWithAnyKeys,
  TUserData,
  TLoginData,
  TResetData,
  TResUserData,
  TResAuthData,
  TResResetData,
  TOrder,
  TIngredientsResponse
} from "../types";

const API_ROOT : string = 'https://norma.nomoreparties.space/api';
export const TOKEN_KEY : string = "accessToken";
export const REFRESH_TOKEN_KEY : string = "refreshToken";

const headers : IObjectWithAnyKeys = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const request = async <T>(url: string, options: IObjectWithAnyKeys) : Promise<T> => {
    return fetch(url, options).then(checkResponse<T>);
}

const getHeadersWithToken = () : IObjectWithAnyKeys => {
  return {
    ...headers,
    authorization: localStorage.getItem(TOKEN_KEY) || ""
  }
}

export const refreshToken = () => {
  return request(`${API_ROOT}/auth/token`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN_KEY),
    }),
  });
};

export const fetchWithRefresh = async <T>(url: string, options: IObjectWithAnyKeys) : Promise<T> => {
  try {
    return await request<T>(url, options);
  } catch (err : any) {
    if (err.message === "jwt expired") {
      const refreshData : TResAuthData = await refreshToken() as TResAuthData; //обновляем токен
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshData.refreshToken);
      localStorage.setItem(TOKEN_KEY, refreshData.accessToken);
      options.headers['authorization'] = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const getIngredients = async () : Promise<TIngredientsResponse> => {
  return await fetchWithRefresh<TIngredientsResponse>(`${API_ROOT}/ingredients`, {headers: headers});

}

const getUser = async () : Promise<TResUserData> => {
  return await fetchWithRefresh<TResUserData>(`${API_ROOT}/auth/user`, {
    method: 'GET',
    headers: getHeadersWithToken()
  });
}

const updateUserRequest = async (newUserData: TUserData) : Promise<TResUserData> => {
  return await fetchWithRefresh<TResUserData>(`${API_ROOT}/auth/user`, {
    method: 'PATCH',
    headers: getHeadersWithToken(),
    body: JSON.stringify(newUserData)
  });
}

const loginRequest = async (loginInfo: TLoginData) : Promise<TResAuthData> => {
  return await fetchWithRefresh<TResAuthData>(`${API_ROOT}/auth/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(loginInfo)
  });
}
const registerRequest = async (registerInfo: TUserData) : Promise<TResAuthData> => {
  return await fetchWithRefresh<TResAuthData>(`${API_ROOT}/auth/register`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(registerInfo)
  });
}

const forgotPasswordRequest = async (email: string) : Promise<TResResetData>=> {
  return await fetchWithRefresh<TResResetData>(`${API_ROOT}/password-reset`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email: email})
  });
}

const resetPasswordRequest = async (resetData: TResetData) : Promise<TResResetData>=> {
  return await fetchWithRefresh<TResResetData>(`${API_ROOT}/password-reset/reset`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(resetData)
  });
}

const logout = async () : Promise<any> => {
  return await fetchWithRefresh<any>(`${API_ROOT}/auth/logout`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN_KEY)
    })
  });
}


const createOrder = async (ingredientIds: string[]) : Promise<TOrder> => {
  return await fetchWithRefresh<TOrder>(`${API_ROOT}/orders`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ingredients: ingredientIds})
  });
}

export {
  getIngredients,
  createOrder,
  getUser,
  updateUserRequest,
  registerRequest,
  loginRequest,
  logout,
  forgotPasswordRequest,
  resetPasswordRequest
};

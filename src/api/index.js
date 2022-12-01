import { checkResponse } from '../utils/checkResponse';

const API_ROOT = 'https://norma.nomoreparties.space/api';
export const TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const getHeadersWithToken = () => {
  return {
    ...headers,
    authorization: localStorage.getItem(TOKEN_KEY) || ""
  }
}

export const refreshToken = () => {
  return fetch(`${API_ROOT}/auth/token`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN_KEY),
    }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshData.refreshToken);
      localStorage.setItem(TOKEN_KEY, refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
}

const getIngredients = () => {
  return request(`${API_ROOT}/ingredients`, {headers: headers});

}

const getUser = async () => {
  return await fetchWithRefresh(`${API_ROOT}/auth/user`, {
    method: 'GET',
    headers: getHeadersWithToken()
  });
}

const updateUserRequest = async (newUserData) => {
  return await fetchWithRefresh(`${API_ROOT}/auth/user`, {
    method: 'PATCH',
    headers: getHeadersWithToken(),
    body: JSON.stringify(newUserData)
  });
}

const loginRequest = async (loginInfo) => {
  return await request(`${API_ROOT}/auth/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(loginInfo)
  });
}
const registerRequest = async (registerInfo) => {
  return await request(`${API_ROOT}/auth/register`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(registerInfo)
  });
}

const forgotPasswordRequest = async (email) => {
  return await request(`${API_ROOT}/password-reset`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email: email})
  });
}

const resetPasswordRequest = async (resetData) => {
  return await request(`${API_ROOT}/password-reset/reset`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(resetData)
  });
}

const logout = async () => {
  return await request(`${API_ROOT}/auth/logout`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      token: localStorage.getItem(REFRESH_TOKEN_KEY)
    })
  });
}


const createOrder = (ingredientIds) => {
  return request(`${API_ROOT}/orders`, {
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

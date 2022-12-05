import {
  getUser as getUserRequest,
  registerRequest,
  loginRequest,
  logout as logoutRequest,
  updateUserRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../../api';

export const IS_USER_REQUEST = 'IS_CHEKING_USER_INFO';
export const SET_USER_DATA = 'SET_USER_DATA';
export const RESET_USER_DATA = 'RESET_USER_DATA';
export const SET_USER_LOADED = 'SET_USER_LOADED';

const authErrorHandler = (err) => {
  console.error(err);
  alert(err?.message || 'Ошибка при выполнении запроса. Проверьте введенные данные.');
}

const setTokens = (res) => {
  const { accessToken, refreshToken } = res;
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}
export const setIsUserRequest = (active) => {
  return { type: IS_USER_REQUEST, payload: active }
}

export const setUserData = (userData) => {

  const { success, user } = userData;

  return {
    type: SET_USER_DATA,
    payload: {
      isAuth: success,
      user: user
    }
  }
}

export const getUser = () => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});
    dispatch({type: SET_USER_LOADED, payload: false});
    getUserRequest().then(userData => {
      dispatch({
        type: SET_USER_DATA,
        payload: {
          isAuth: userData.success,
          user: userData.user
        }
      });
    }).catch(err=>{
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      dispatch({ type: RESET_USER_DATA })
      console.error(err);
    }).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
      dispatch({type: SET_USER_LOADED, payload: true});
    });
  }
}

export const login = (loginData) => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});

    loginRequest(loginData).then(res => {
      setTokens(res);
      dispatch(setUserData(res));
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    })
  }
}

export const register = (registerData) => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});

    registerRequest(registerData).then(res => {
      setTokens(res);
      dispatch(setUserData(res));
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    })
  }
}

export const updateUserData = (userData) => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});

    updateUserRequest(userData).then(res => {
      dispatch(setUserData(res));
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});
    logoutRequest().then(()=>{
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    });
  }
}

export const resetPassword = (resetData, onSuccess) => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});

    resetPasswordRequest(resetData).then(res => {
      onSuccess()
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    })
  }
}

export const forgotPassword = (forgotData, onSuccess) => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});

    forgotPasswordRequest(forgotData.email).then(res => {
      onSuccess()
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    })
  }
}

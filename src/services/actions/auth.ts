import { Dispatch, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch  } from 'redux-thunk';
import { RootState } from "../reducers";
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

import { userActionsEnum, TAuthAction } from "../types";
import {TForgotData, TLoginData, TResAuthData, TResetData, TResUserData, TUserData} from "../../types";

const authErrorHandler = (err: any) => {
  console.error(err);
  alert(err?.message || 'Ошибка при выполнении запроса. Проверьте введенные данные.');
}

const setTokens = (res: TResAuthData) : void => {
  const { accessToken, refreshToken } = res;
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}
export const setIsUserRequest = (active: boolean) => {
  return { type: userActionsEnum.IS_USER_REQUEST, payload: active }
}

export const setUserData = (userData : TResAuthData | TResUserData) => {

  const { success, user } = userData;

  return {
    type: userActionsEnum.SET_USER_DATA,
    payload: {
      isAuth: success,
      user: user
    }
  }
}

export const getUser = () : ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch: Dispatch) => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});
    dispatch({type: userActionsEnum.SET_USER_LOADED, payload: false});
    getUserRequest().then(userData => {
      dispatch({
        type: userActionsEnum.SET_USER_DATA,
        payload: {
          isAuth: userData.success,
          user: userData.user
        }
      });
    }).catch(err=>{
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      dispatch({ type: userActionsEnum.RESET_USER_DATA })
      console.error(err);
    }).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
      dispatch({type: userActionsEnum.SET_USER_LOADED, payload: true});
    });
  }
}

export const login = (loginData: TLoginData) : ThunkAction<void, RootState, unknown, AnyAction>  => {
  return (dispatch: Dispatch) => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});

    loginRequest(loginData).then(res => {
      setTokens(res);
      dispatch(setUserData(res));
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
    })
  }
}

export const register = (registerData: TUserData)  : ThunkAction<void, RootState, unknown, AnyAction>  => {
  return (dispatch: Dispatch) => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});

    registerRequest(registerData).then(res => {
      setTokens(res);
      dispatch(setUserData(res));
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
    })
  }
}

export const updateUserData = (userData: TUserData)  : ThunkAction<void, RootState, unknown, AnyAction>  => {
  return (dispatch: Dispatch) => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});

    updateUserRequest(userData).then((res: TResUserData) => {
      dispatch(setUserData(res));
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
    })
  }
}

export const logout = ()  : ThunkAction<void, RootState, unknown, AnyAction>  => {
  return (dispatch: Dispatch) => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});
    logoutRequest().then(()=>{
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
    });
  }
}

export const resetPassword = (
  resetData: TResetData,
  onSuccess: ()=>void
)  : ThunkAction<void, {}, {}, AnyAction>  => {
  return (dispatch) : void => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});

    resetPasswordRequest(resetData).then(res => {
      onSuccess()
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
    })
  }
}

export const forgotPassword = (
  forgotData : TForgotData,
  onSuccess: ()=>void
)  : ThunkAction<void, RootState, unknown, AnyAction>  => {
  return (dispatch: Dispatch) => {
    dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: true});

    forgotPasswordRequest(forgotData.email).then(res => {
      onSuccess()
    }).catch(authErrorHandler).finally(()=>{
      dispatch({type: userActionsEnum.IS_USER_REQUEST, payload: false});
    })
  }
}

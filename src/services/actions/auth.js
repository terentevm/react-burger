import {
  getUser as getUserRequest,
  register as registerRequest,
  login as loginRequest,
  logout as logoutRequest,
  TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../../api';

export const IS_USER_REQUEST = 'IS_CHEKING_USER_INFO';
export const SET_USER_DATA = 'SET_USER_DATA';
export const RESET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_LOADED = 'SET_USER_LOADED';

export const setIsUserRequest = (active) => {
  return { type: IS_USER_REQUEST, payload: active }
}

export const setUserData = (userData) => {

  const { accessToken, refreshToken, success, user } = userData;

  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

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
      dispatch({type: IS_USER_REQUEST, payload: false});
      dispatch({type: SET_USER_LOADED, payload: true});
    }).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
      dispatch({type: SET_USER_LOADED, payload: true});
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({type: IS_USER_REQUEST, payload: true});
    logoutRequest().then(()=>{
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }).finally(()=>{
      dispatch({type: IS_USER_REQUEST, payload: false});
    });
  }
}

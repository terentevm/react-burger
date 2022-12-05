import { IS_USER_REQUEST, SET_USER_DATA, RESET_USER_DATA, SET_USER_LOADED } from '../actions/auth';

const initialState = {
  user: null,
  isAuth: false,
  userRequest: false,
  isUserLoaded: false,
}

const authReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case IS_USER_REQUEST:
      return { ...state, userRequest: payload};
      break;
    case SET_USER_LOADED:
      return { ...state, isUserLoaded: payload};
      break;
    case SET_USER_DATA:
      return {
        ...state,
        user: payload.user,
        isAuth: payload.isAuth
      };
      break;
    case RESET_USER_DATA:
      return {
        ...state,
        user: null,
        isAuth: false
      };
      break;
    default:
      return state;
  }
}

export { authReducer };

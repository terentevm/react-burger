import { userActionsEnum, TAuthAction, TAuthState} from '../types';
const initialState : TAuthState = {
  user: null,
  isAuth: false,
  userRequest: false,
  isUserLoaded: false,
}

const authReducer = (state: TAuthState = initialState, action : TAuthAction) : TAuthState => {

  const { type, payload } = action;

  switch (type) {
    case userActionsEnum.IS_USER_REQUEST:
      return { ...state, userRequest: payload};
      break;
    case userActionsEnum.SET_USER_LOADED:
      return { ...state, isUserLoaded: payload};
      break;
    case userActionsEnum.SET_USER_DATA:
      return {
        ...state,
        user: payload.user,
        isAuth: payload.isAuth
      };
      break;
    case userActionsEnum.RESET_USER_DATA:
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

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../actions/ingredients';

const initialState = {
  ingredients: [],
  requestInProcess: false,
  requestFailed: false,
}

const ingredientsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, requestInProcess: true };
      break;
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, requestInProcess: false,   requestFailed: false, ingredients: payload };
      break;
    case GET_INGREDIENTS_FAILED:
      return { ...state, requestInProcess: false,  requestFailed: true };
      break;
    default:
      return state;
  }
}

export { ingredientsReducer };
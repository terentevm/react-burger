import { ingredientsActionsEnum, TIngredientsAction, TIngredientsState } from "../types";
const initialState : TIngredientsState = {
  ingredients: [],
  requestInProcess: false,
  requestFailed: false,
}

const ingredientsReducer = (state: TIngredientsState = initialState, action: TIngredientsAction) : TIngredientsState => {
  const { type, payload } = action;

  switch (type) {
    case ingredientsActionsEnum.GET_INGREDIENTS_REQUEST:
      return { ...state, requestInProcess: true };
      break;
    case ingredientsActionsEnum.GET_INGREDIENTS_SUCCESS:
      return { ...state, requestInProcess: false,   requestFailed: false, ingredients: payload };
      break;
    case ingredientsActionsEnum.GET_INGREDIENTS_FAILED:
      return { ...state, requestInProcess: false,  requestFailed: true };
      break;
    default:
      return state;
  }
}

export { ingredientsReducer };
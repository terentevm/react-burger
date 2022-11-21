import { SET_POPUP_INGREDIENT, RESET_INGREDIENT_POPUP } from '../actions/ingredientPupup';

const initialState = {
  ingredient: null,
  showPopup: false
}
const ingredientPopupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_POPUP_INGREDIENT:
      return {...payload};
      break;
    case RESET_INGREDIENT_POPUP:
      return {
        ingredient: null,
        showPopup: false
      };
      break;
    default:
      return state;
  }
}

export { ingredientPopupReducer };
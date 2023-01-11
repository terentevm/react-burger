import { TIngredientPopupState, TIngredientPopupAction, ingredientPopupActionsEnum } from "../types";

const initialState : TIngredientPopupState = {
  ingredient: undefined,
  showPopup: false
}
const ingredientPopupReducer = (
  state: TIngredientPopupState = initialState,
  action: TIngredientPopupAction
) : TIngredientPopupState => {
  const { type, payload } = action;

  switch (type) {
    case ingredientPopupActionsEnum.SET_POPUP_INGREDIENT:
      return {...payload};
      break;
    case ingredientPopupActionsEnum.RESET_INGREDIENT_POPUP:
      return {
        ingredient: undefined,
        showPopup: false
      };
      break;
    default:
      return state;
  }
}

export { ingredientPopupReducer };
import { TIngredientPopupAction, ingredientPopupActionsEnum } from "../types";
import { TIngredient } from '../../types';

export const setPopupData = (ingredient: TIngredient | undefined) : TIngredientPopupAction => {
  return {
    type: ingredientPopupActionsEnum.SET_POPUP_INGREDIENT,
    payload: {
      ingredient: ingredient,
      showPopup: true
    }
  }
}

export const resetPopupData = () : TIngredientPopupAction => {
  return {
    type: ingredientPopupActionsEnum.RESET_INGREDIENT_POPUP
  }
}
export const SET_POPUP_INGREDIENT = 'SET_POPUP_INGREDIENT';
export const RESET_INGREDIENT_POPUP = 'RESET_INGREDIENT_POPUP';

export const setPopupData = (ingredient) => {
  return {
    type: SET_POPUP_INGREDIENT,
    payload: {
      ingredient: ingredient,
      showPopup: true
    }
  }
}

export const resetPopupData = () => {
  return {
    type: RESET_INGREDIENT_POPUP
  }
}
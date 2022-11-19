import {
  ADD_BUN,
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_CONSTRUCTOR,
} from '../actions/constructor';

import {
  findItemIndexById,
  moveItem,
} from '../../utils/arrayUtils';

const initialState = {
  bun: null,
  ingredients: []
}

const constructorReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case ADD_BUN:
      return {...state, bun: payload };
      break;
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return {...state, ingredients: newIngredients };
      break;
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.id !== payload.id)
      };
      break;
    case MOVE_INGREDIENT:

      const { itemId, hoverId } = payload;
      const dragIndex = findItemIndexById(state.ingredients, itemId);
      const targetIndex = findItemIndexById(state.ingredients, hoverId);

      return {
        ...state,
        ingredients: moveItem(state.ingredients, dragIndex, targetIndex)
      };
      break;
    case RESET_CONSTRUCTOR:
      return {
        bun: null,
        ingredients: []
      }
    default:
      return state;

  }
}

export { constructorReducer };

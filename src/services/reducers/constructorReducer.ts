import { TConstructorState, constructorActionsEnum, TConstructorAction } from '../types';
import { TItemWithId } from '../../types';
import {
  findItemIndexById,
  moveItem,
} from '../../utils/arrayUtils';

const initialState : TConstructorState = {
  bun: null,
  ingredients: []
}

const constructorReducer = (state: TConstructorState = initialState, action: TConstructorAction) : TConstructorState => {

  const { type, payload } = action;

  switch (type) {
    case constructorActionsEnum.ADD_BUN:
      return {...state, bun: payload };
      break;
    case constructorActionsEnum.ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return {...state, ingredients: newIngredients };
      break;
    case constructorActionsEnum.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.id !== payload.id)
      };
      break;
    case constructorActionsEnum.MOVE_INGREDIENT:

      const { itemId, hoverId } = payload;
      const dragIndex = findItemIndexById<TItemWithId>(state.ingredients, itemId);
      const targetIndex = findItemIndexById<TItemWithId>(state.ingredients, hoverId);

      return {
        ...state,
        ingredients: moveItem<TItemWithId>(state.ingredients, dragIndex, targetIndex)
      };
      break;
    case constructorActionsEnum.RESET_CONSTRUCTOR:
      return {
        bun: null,
        ingredients: []
      }
    default:
      return state;

  }
}

export { constructorReducer };

import { v4 as uuidv4 } from 'uuid';

import { constructorActionsEnum, TConstructorAction } from '../types';
import { TIngredient } from "../../types";

export const addBun = (bun: TIngredient) : TConstructorAction => {
  return { type: constructorActionsEnum.ADD_BUN, payload: bun};
}
export const addIngredient = (ingredient: TIngredient) : TConstructorAction => {
  return { type: constructorActionsEnum.ADD_INGREDIENT, payload: {id: uuidv4(), ingredient: ingredient}};
}
export const moveIngredient = (itemId: string, hoverId: string) : TConstructorAction => {
  return { type: constructorActionsEnum.MOVE_INGREDIENT, payload: { itemId, hoverId }};
}
export const removeIngredient = (itemId: string) : TConstructorAction => {
  return { type: constructorActionsEnum.REMOVE_INGREDIENT, payload: {id: itemId}};
}

export const resetConstructor = () : TConstructorAction => {
  return { type: constructorActionsEnum.RESET_CONSTRUCTOR };
}

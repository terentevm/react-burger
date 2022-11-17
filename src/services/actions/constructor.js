import { v4 as uuidv4 } from 'uuid';

export const ADD_BUN = 'ADD_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const addBun = (bun) => {
  return { type: ADD_BUN, payload: bun};
}
export const addIngredient = (ingredient) => {
  return { type: ADD_INGREDIENT, payload: {id: uuidv4(), ingredient: ingredient}};
}
export const moveIngredient = (itemId, hoverId) => {
  return { type: MOVE_INGREDIENT, payload: { itemId, hoverId }};
}
export const removeIngredient = (itemId) => {
  return { type: REMOVE_INGREDIENT, payload: {id: itemId}};
}
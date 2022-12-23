export enum userActionsEnum {
  IS_USER_REQUEST = 'IS_CHEKING_USER_INFO',
  SET_USER_DATA = 'SET_USER_DATA',
  RESET_USER_DATA = 'RESET_USER_DATA',
  SET_USER_LOADED = 'SET_USER_LOADED'
}

export enum ingredientsActionsEnum {
  GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST',
  GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS',
  GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED',
}

export enum orderDetailsActionsEnum {
  SET_ORDER_DATA = 'SET_ORDER_DATA',
  RESET_ORDER_DATA = 'RESET_ORDER_DATA'
}

export enum constructorActionsEnum {
  ADD_BUN = 'ADD_BUN',
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  MOVE_INGREDIENT = 'MOVE_INGREDIENT',
  REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
  RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR',
}

export enum DndEnum {
  SET_DRAGGED_ITEM = 'SET_DRAGGED_ITEM',
}

export enum ingredientPopupActionsEnum {
  SET_POPUP_INGREDIENT = 'SET_POPUP_INGREDIENT',
  RESET_INGREDIENT_POPUP = 'RESET_INGREDIENT_POPUP',
}

export type TAuthAction = {
  type: userActionsEnum;
  payload?: any;
}

export type TIngredientsAction = {
  type: ingredientsActionsEnum;
  payload?: any;
}

export type TOrderDetailsAction = {
  type: orderDetailsActionsEnum;
  payload?: any;
}

export type TConstructorAction = {
  type: constructorActionsEnum;
  payload?: any;
}

export type TDndAction = {
  type: DndEnum;
  payload?: any;
}

export type TIngredientPopupAction = {
  type: ingredientPopupActionsEnum;
  payload?: any;
}
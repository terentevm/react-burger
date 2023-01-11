import { TDraggableItem, TIngredient, TItemWithId } from '../../types';

export type TAuthState = {
  user: { name: string, email: string} | null;
  isAuth: boolean;
  userRequest: boolean;
  isUserLoaded: boolean;
}

export type TIngredientsState = {
  ingredients: Array<TIngredient>;
  requestInProcess: boolean;
  requestFailed: boolean;
}

export type TOrderDetailsState = {
  name: string;
  orderNumber: string;
  showPopup: boolean;
}

export type TConstructorState = {
  bun: TIngredient | null;
  ingredients: Array<TItemWithId>
}

export type TDndState = {
  draggedItem: TDraggableItem | null
}

export type TIngredientPopupState = {
  ingredient: TIngredient | undefined;
  showPopup: boolean;
}
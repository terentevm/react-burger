import exp from "constants";
import {TIngredientPopupState} from "../services/types";

export type TOrder = {
  success: boolean;
  name: string;
  order: {
    number: number
  }
}

export type TIngredient = {
  readonly '_id' :  string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly 'image_mobile': string;
  readonly 'image_large': string;
  readonly '__v': number
}

export type TIngredientsResponse = {
  success: boolean;
  data: Array<TIngredient>
}

export type TItemWithId = {
  id: string;
  ingredient: TIngredient
}
export type TDraggableItem = {
  id: string;
  type: string;
  data: TItemWithId
}

export type TIngredientsTreeItem = {
  type: string;
  title: string;
  list: Array<TIngredient>
}
export type TIngredientsTree = Array<TIngredientsTreeItem>
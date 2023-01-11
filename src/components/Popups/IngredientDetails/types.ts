import { TIngredient } from '../../../types';

export type TIngredientSelector = Pick<TIngredient, 'name' | 'proteins' | 'fat' | 'carbohydrates' | 'calories' | 'image_large'>
export type TProps = {
  mode: string
}
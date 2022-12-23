import { TIngredient, TIngredientsTreeItem, TItemWithId } from '../../types';

export type TPositionType = 'top' | 'bottom';
export type TBunPropTypes = {
  bunItem: TIngredient;
  position: TPositionType
}

export type TConstructorItemProps = {
  item: TItemWithId;
  removeAction: (item: TItemWithId) => void
}
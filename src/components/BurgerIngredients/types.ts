import { TIngredient, TIngredientsTreeItem, TItemWithId } from '../../types';

export type TIngredientCardProps = {
  data: TIngredient;
  usageCount: number
}

export type TTypeProps = {
  data: TIngredientsTreeItem;
  burgerComposition: Array<TItemWithId>
}

export type TListProps = {
  dataTree: Array<TIngredientsTreeItem>;
  burgerComposition: Array<TItemWithId>;
  changeTab: (tab: string) => void;
}
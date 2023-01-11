import { DndEnum, TDndAction } from '../types';
import { TDraggableItem } from '../../types';

export const setDraggedItem = (item: TDraggableItem | null) : TDndAction => {
  return { type: DndEnum.SET_DRAGGED_ITEM, payload: item}
}

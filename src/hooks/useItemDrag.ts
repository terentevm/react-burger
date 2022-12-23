import { ConnectDragSource, useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setDraggedItem } from '../services/actions/dragAndDrop';
import { TItemWithId } from '../types';

type ReturnType = {
  isDragging: boolean;
  drag: ConnectDragSource
}

const useItemDrag = (item: TItemWithId, type: string) : ReturnType => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: type,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => {
      dispatch(setDraggedItem({id: item.id, type: type, data: item}))
      return item
    },
    end: () => dispatch(setDraggedItem(null))
  });

  return { isDragging, drag };

}

export { useItemDrag };

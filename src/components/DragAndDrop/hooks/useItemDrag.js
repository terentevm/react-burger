import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { setDraggedItem } from '../../../services/actions/dragAndDrop';

const useItemDrag = (item, type) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: type,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => {
      dispatch(setDraggedItem({type: type, data: item}))
      return item
    },
    end: () => dispatch(setDraggedItem(null))
  });

  return { isDragging, drag };

}

export { useItemDrag };

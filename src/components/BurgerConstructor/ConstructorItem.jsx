import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorItemType } from '../../utils/types';
import { useRef } from 'react';
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { useItemDrag } from '../DragAndDrop/hooks/useItemDrag';
import { moveIngredient } from '../../services/actions/constructor';
import { isHidden } from '../../utils/isHidden';

import styles from './constructor.module.css';
const TYPE_DD = "ADDED_INGREDIENT";

const ConstructorItem = ({ item, removeAction }) => {

  const dispatch = useDispatch();

  const ref = useRef(null);
  const draggedItem = useSelector(state=>state.dragAndDrop.draggedItem);

  const { name, image_mobile, price  } = item.ingredient;
  const { id } = item;

  const { isDragging, drag } = useItemDrag(item, TYPE_DD);

  const [, drop] = useDrop({
    accept: TYPE_DD,
    hover() {

      if (!draggedItem) {

        return
      }
      if (draggedItem.type !== TYPE_DD) {
        return
      }
      if (draggedItem.id === id) {

        return
      }

      dispatch(moveIngredient(draggedItem.data.id, id))
    }
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref));
  return (
    <li className={`${styles.constructor__item}`} ref={ref} style={{opacity: opacity}}>
      <div className={styles.constructor__icon}>
        <DragIcon />
      </div>

      <ConstructorElement
        text={name}
        thumbnail={image_mobile}
        price={price}
        isLocked ={false}
        handleClose={() =>removeAction(item)}
      />

    </li>
  );
}

ConstructorItem.propTypes = ConstructorItemType;

export { ConstructorItem };

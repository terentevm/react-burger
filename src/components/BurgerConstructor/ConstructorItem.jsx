import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorItemType } from '../../utils/types';
import styles from './constructor.module.css';

const getItemText = (item, isLocked, position) => {
  let text = item.name;

  if (isLocked === true) {
    text = position === 'top'
      ? `${text} (верх)`
      : `${text} (низ)`;
  }

  return text;
}
const ConstructorItem = ({ item, isLocked, position, removeAction }) => {

  return (
    <li className={`${styles.constructor__item}`}>
      <div className={styles.constructor__icon}>
        { !isLocked && <DragIcon /> }
      </div>

      <ConstructorElement
        text={getItemText(item, isLocked, position)}
        thumbnail={item.image_mobile}
        price={item.price}
        type={position}
        isLocked ={isLocked}
        handleClose={() =>removeAction(item)}
      />

    </li>
  );
}

ConstructorItem.propTypes = ConstructorItemType;

export { ConstructorItem };

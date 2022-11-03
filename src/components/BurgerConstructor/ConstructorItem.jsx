import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorItemType } from '../../utils/types';
import styles from './constructor.module.css';

const getItemText = (item) => {
  let text = item.name;

  if (item.isLocked === true) {
    text = item.position === 'top'
      ? `${text} (верх)`
      : `${text} (низ)`;
  }

  return text;
}
const ConstructorItem = ({ item }) => {
  const extraClass = item.isLocked ? styles[`constructor__item_${item.position}`] : '';
  return (
    <li className={`${styles.constructor__item} ${extraClass}`}>
      <div className={styles.constructor__icon}>
        { !item.isLocked && <DragIcon /> }
      </div>

      <ConstructorElement
        text={getItemText(item)}
        thumbnail={item.image_mobile}
        price={item.price}
        type={item.position}
        isLocked ={item.isLocked}
      />

    </li>
  );
}

ConstructorItem.propTypes = ConstructorItemType;

export { ConstructorItem };

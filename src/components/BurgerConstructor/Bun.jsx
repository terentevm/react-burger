import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BunType } from '../../utils/types';

import styles from './constructor.module.css';

const getItemText = (item, position) => {
  let text = item.name;

  text = position === 'top'
    ? `${text} (верх)`
    : `${text} (низ)`;

  return text;
}

const Bun = ({ bunItem,  position }) => {

  return (
    <li className={`${styles.constructor__item}`}>
      <div className={styles.constructor__icon}>

      </div>

      <ConstructorElement
        text={getItemText(bunItem, position)}
        thumbnail={bunItem.image_mobile}
        price={bunItem.price}
        type={position}
        isLocked ={true}
      />

    </li>
  );
}

Bun.propTypes = BunType;

export { Bun };

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TPositionType, TBunPropTypes } from "./types";
import { TIngredient } from "../../types";
import styles from './constructor.module.css';

const getItemText = (item: TIngredient, position: TPositionType) : string => {
  let text = item.name;

  text = position === 'top'
    ? `${text} (верх)`
    : `${text} (низ)`;

  return text;
}

const Bun = ({ bunItem,  position } : TBunPropTypes) => {

  return (
    <li className={styles.constructor__item}>
      <div className={styles.constructor__icon}></div>
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

export { Bun };

import { ConstructorItem } from './ConstructorItem';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorType } from '../utils/types';
import styles from './constructor.module.css';

const calculateTotalPrice = (burgerComposition) => {
  return burgerComposition.reduce((total, item) =>{
    return total +  (item.isLocked ? item.price / 2 : item.price);
  }, 0);
}

const BurgerConstructor = ({ burgerComposition }) => {
  return (
    <section className={styles.constructor}>
      <ul className={styles.constructor__list}>
        { burgerComposition.map((item, ind) => <ConstructorItem key={`${item._id}_${ind}`} item={item}/>)}
      </ul>

      <div className={styles.constructor__bottom}>
        <span className={styles.constructor__price}>
          <span className="text text_type_digits-medium">{ calculateTotalPrice(burgerComposition) }</span>
          <div style={{width: "33px", height: "33px"}}>
            <CurrencyIcon />
          </div>

        </span>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = BurgerConstructorType;

export { BurgerConstructor };
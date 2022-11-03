import { ConstructorItem } from './ConstructorItem';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorType } from '../../utils/types';
import { Modal } from "../Modal";
import { OrderDetails } from "../Popups/OrderDetails";
import styles from './constructor.module.css';
import {useState} from "react";

const calculateTotalPrice = (burgerComposition) => {
  return burgerComposition.reduce((total, item) =>{
    return total +  (item.isLocked ? item.price / 2 : item.price);
  }, 0);
}

const BurgerConstructor = ({ burgerComposition }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className={styles.constructor}>
      <ul className={styles.constructor__list}>
        { burgerComposition.map((item, ind) => (<ConstructorItem key={`${item._id}_${ind}`} item={item}/>))}
      </ul>

      <div className={styles.constructor__bottom}>
        <span className={styles.constructor__price}>
          <span className="text text_type_digits-medium">{ calculateTotalPrice(burgerComposition) }</span>
          <div className={styles.constructor__icon_medium}>
            <CurrencyIcon />
          </div>

        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={()=>setShowPopup(true)}
        >
          Оформить заказ
        </Button>
      </div>
      <Modal onClose={()=>setShowPopup(false)} visible={showPopup}>
        <OrderDetails />
      </Modal>
    </section>
  );
}

BurgerConstructor.propTypes = BurgerConstructorType;

export { BurgerConstructor };

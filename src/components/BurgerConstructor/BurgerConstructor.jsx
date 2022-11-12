import { ConstructorItem } from './ConstructorItem';
import { IngredientsList } from './IngredientsList';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../Modal";
import { OrderDetails } from "../Popups/OrderDetails";
import styles from './constructor.module.css';
import {useState, useContext} from "react";
import { ConstructorContext, OrderDetailsContext } from '../../context';
import { createOrder } from '../../api';

const BurgerConstructor = () => {

  const { price, ingredients } = useContext(ConstructorContext);

  const { orderNumber, setOrderData } = useContext(OrderDetailsContext);

  const [showPopup, setShowPopup] = useState(false);

  const sendOrder = () => {
     const requestData = ingredients.map(item =>item._id);
     createOrder(requestData).then(res => {
       setOrderData({
         name: res.name,
         orderNumber: res.order.number
       });
       setShowPopup(true);
     }).catch(err => {
       console.error(err);
     })
  }

  return (
    <section className={styles.constructor}>
      <IngredientsList />
      <div className={styles.constructor__bottom}>
        <span className={styles.constructor__price}>
          <span className="text text_type_digits-medium">{ price }</span>
          <div className={styles.constructor__icon_medium}>
            <CurrencyIcon />
          </div>
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={sendOrder}
        >
          Оформить заказ
        </Button>
      </div>
      <Modal onClose={()=>setShowPopup(false)} visible={showPopup}>
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    </section>
  );
}

export { BurgerConstructor };

import {useState, useEffect, useMemo} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ConstructorItem } from './ConstructorItem';
import { IngredientsList } from './IngredientsList';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../Modal";
import { OrderDetails } from "../Popups/OrderDetails";
import { sendOrder, resetOrderDetails } from '../../services/actions/orderDetails';
import styles from './constructor.module.css';

const BurgerConstructor = () => {

  const dispatch = useDispatch();
  const { bun, ingredients, showPopup } = useSelector(state=>({
    bun: state.burgerConstructor.bun,
    ingredients: state.burgerConstructor.ingredients,
    showPopup: state.orderDetails.showPopup
  }));

  const price = useMemo(()=>{
    const bunTotal = bun ? bun.price * 2 : 0;
    return bunTotal + ingredients.reduce((total, item) =>{
      return total + item.ingredient.price;
    }, 0);
  }, [bun, ingredients])

  const sendOrderToApi = () => {
     const requestData = ingredients.map(item =>item.ingredient._id);
     if (bun) {
       requestData.push(bun._id);
     }
     dispatch(sendOrder(requestData));
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
          onClick={sendOrderToApi}
        >
          Оформить заказ
        </Button>
      </div>
      <Modal
        onClose={()=>dispatch(resetOrderDetails())}
        visible={showPopup}
      >
        <OrderDetails />
      </Modal>
    </section>
  );
}

export { BurgerConstructor };

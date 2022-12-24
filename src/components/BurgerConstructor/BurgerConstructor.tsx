import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { IngredientsList } from './IngredientsList';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../Modal';
import { OrderDetails } from '../Popups/OrderDetails';
import { resetOrderDetails, sendOrder } from '../../services/actions/orderDetails';
import styles from './constructor.module.css';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { TItemWithId } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';

const BurgerConstructor = () => {

  const history = useHistory();
  const dispatch = useThunkDispatch();

  const {bun, ingredients, showPopup, isAuth} = useAppSelector((state) => ({
    bun: state.burgerConstructor.bun,
    ingredients: state.burgerConstructor.ingredients,
    showPopup: state.orderDetails.showPopup,
    isAuth: state.auth.isAuth
  }));

  const price = useMemo(() => {
    const bunTotal = bun ? bun.price * 2 : 0;
    return bunTotal + ingredients.reduce((total: number, item: TItemWithId) => {
      return total + item.ingredient.price;
    }, 0);
  }, [bun, ingredients])

  const sendOrderToApi = useCallback(() => {
    if (!isAuth) {
      history.push('/login');
      return;
    }
    const requestData = ingredients.map(item => item.ingredient._id);
    if (bun) {
      requestData.push(bun._id);
    }
    dispatch(sendOrder(requestData));
  }, [ingredients])

  return (
    <section className={styles.constructors}>
      <IngredientsList/>
      <div className={styles.constructor__bottom}>
        <span className={styles.constructor__price}>
          <span className="text text_type_digits-medium">{price}</span>
          <div className={styles.constructor__icon_medium}>
            <CurrencyIcon type="primary"/>
          </div>
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          disabled={!bun || ingredients.length === 0}
          onClick={sendOrderToApi}
        >
          Оформить заказ
        </Button>
      </div>
      <Modal
        onClose={() => dispatch(resetOrderDetails())}
        visible={showPopup}
      >
        <OrderDetails/>
      </Modal>
    </section>
  );
}

export { BurgerConstructor };

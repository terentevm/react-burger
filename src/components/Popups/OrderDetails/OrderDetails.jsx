import styles from './popup.module.css';
import DoneSVG from '../../../images/done.svg';
import { OrderDetailsType } from "../types";

const OrderDetails = ({ orderNumber }) => {
  return (
    <div className={styles.popup}>
      <h2 className={`text text_type_digits-large`}>
        { orderNumber }
      </h2>
      <p className={`text text_type_main-medium mt-8`}>
        ИДЕНТИФИКАТОР ЗАКАЗА
      </p>
      <div className={styles.popup__image}>
        <img src={DoneSVG} alt="иконка готово"/>
      </div>
      <p className={`${styles.popup__text} text text_type_main-medium mt-15`}>
        Ваш заказ начали готовить
      </p>
      <p className={`text text_type_main-medium text_color_inactive mt-2`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

OrderDetails.propType = OrderDetailsType;

export { OrderDetails };

import { Modal} from "../../Modal";
import styles from './popup.module.css';
import DoneSVG from '../../../images/done.svg';
import { OrderDetailsType } from "../types";

const OrderDetails = ({ visible, onClose }) => {
  return (
    <Modal onClose={onClose} visible={visible}>
      <div className={styles.popup}>
        <div className={`text text_type_digits-large`}>
          034536
        </div>
        <div className={`text text_type_main-medium mt-8`}>
          ИДЕНТИФИКАТОР ЗАКАЗА
        </div>
        <div className={styles.popup__image}>
          <img src={DoneSVG} alt="иконка готово"/>
        </div>
        <div className={`${styles.popup__text} text text_type_main-medium mt-15`}>
          Ваш заказ начали готовить
        </div>
        <div className={`text text_type_main-medium text_color_inactive mt-2`}>
          Дождитесь готовности на орбитальной станции
        </div>
      </div>
    </Modal>
  )
}

OrderDetails.propType = OrderDetails;

export { OrderDetails };

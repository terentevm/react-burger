import { Modal } from "../../Modal";
import { IngredientDetailsType } from '../types';
import styles from './ingredient-popup.module.css';

const IngredientDetails = ({ ingredient, visible, onClose}) => {

  const {
    name,
    proteins,
    fat,
    carbohydrates,
    calories,
    image_large
  } = ingredient;
  return (
    <Modal
      visible={ visible }
      onClose={ onClose }
    >
      <div className={styles.popup}>
        <header className={`${styles.popup__header} text text_type_main-large`}>Детали ингредиента</header>
        <div>
          <img src={ image_large } alt="Изображение ингредиента"/>
        </div>
        <div className={`${styles.popup__title} text text_type_main-medium`}>
          { name }
        </div>
        <div className={styles.popup__nutrition_facts}>
          <div className={styles.popup__nutrition_fact}>
            <span className="text text_type_main-default">Калории, ккал</span>
            <p className="text text_type_digits-default">{ calories }</p>
          </div>
          <div className={styles.popup__nutrition_fact}>
            <span className="text text_type_main-default">Белки, г</span>
            <p className="text text_type_digits-default">{ proteins }</p>
          </div>
          <div className={styles.popup__nutrition_fact}>
            <span className="text text_type_main-default">Жиры, г</span>
            <p className="text text_type_digits-default">{ fat }</p>
          </div>
          <div className={styles.popup__nutrition_fact}>
            <span className="text text_type_main-default">Углеводы, г</span>
            <p className="text text_type_digits-default">{ carbohydrates }</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

IngredientDetails.propType = IngredientDetailsType;

export { IngredientDetails };

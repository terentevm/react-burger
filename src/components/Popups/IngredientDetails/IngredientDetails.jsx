import { IngredientDetailsType } from '../types';
import styles from './ingredient-popup.module.css';

const IngredientDetails = ({ ingredient }) => {

  const {
    name,
    proteins,
    fat,
    carbohydrates,
    calories,
    image_large
  } = ingredient;
  return (
    <div className={styles.popup}>
      <header className={`${styles.popup__header} text text_type_main-large`}>Детали ингредиента</header>
      <div className={styles.popup__image}>
        <img src={ image_large } alt="Изображение ингредиента"/>
      </div>
      <h3 className={`${styles.popup__title} text text_type_main-medium`}>
        { name }
      </h3>
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
  );
}

IngredientDetails.propType = IngredientDetailsType;

export { IngredientDetails };

import { useSelector } from 'react-redux';
import styles from './ingredient-popup.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = ({ mode="modal" }) => {

  const {
    name,
    proteins,
    fat,
    carbohydrates,
    calories,
    image_large
  } = useSelector(state => state.ingredientPopup.ingredient);

  const headerModClass = mode==="page" ? styles.popup__header_center : "";
  return (
    <div className={styles.popup}>
      <header
        className={`${styles.popup__header} ` + headerModClass +` text text_type_main-large`}
      >
        Детали ингредиента
      </header>
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

IngredientDetails.propTypes = {
  mode: PropTypes.string
}
export { IngredientDetails };

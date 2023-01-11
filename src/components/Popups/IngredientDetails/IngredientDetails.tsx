import styles from './ingredient-popup.module.css';
import { TIngredientSelector, TProps } from './types';
import { useAppSelector } from '../../../hooks/useAppSelector';

const IngredientDetails = ({ mode="modal" } : TProps) => {

  const {
    name,
    proteins,
    fat,
    carbohydrates,
    calories,
    image_large
  } = useAppSelector((state) : TIngredientSelector => ({
    name: state.ingredientPopup.ingredient?.name || "",
    proteins: state.ingredientPopup.ingredient?.proteins || 0,
    fat: state.ingredientPopup.ingredient?.fat || 0,
    carbohydrates: state.ingredientPopup.ingredient?.carbohydrates || 0,
    calories: state.ingredientPopup.ingredient?.carbohydrates || 0,
    image_large: state.ingredientPopup.ingredient?.image_large || ""
  }));

  const headerModClass: string = mode==="page" ? styles.popup__header_center : "";
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

export { IngredientDetails };

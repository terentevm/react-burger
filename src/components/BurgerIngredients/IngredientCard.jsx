import { IngredientCardType } from "../../utils/types";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredients.module.css';
const IngredientCard = ({ data, usageCount }) => {
  return (
    <li className={styles.ingredient}>
      <Counter count={usageCount} size="default" />
      <div className={styles["ingredient__content"]}>
        <img src={data.image} alt="Картинка ингредиента"/>
        <div className={styles["ingredient__price"]}>
          <span className="text text_type_digits-default mr-1">{ data.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={styles["ingredient__title"]}>
        <p className={`text text_type_main-small`}>{data.name}</p>
      </div>
    </li>
  );

}

IngredientCard.propTypes = IngredientCardType;

export { IngredientCard };

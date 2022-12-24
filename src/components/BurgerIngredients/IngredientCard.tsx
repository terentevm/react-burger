import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from 'react-dnd';
import styles from './ingredients.module.css';
import { TIngredientCardProps } from './types';

const IngredientCard = ({ data, usageCount }: TIngredientCardProps) => {
  const location = useLocation();

  const [{ opacity }, ref] = useDrag({
    type: data.type === 'bun' ? 'bun' : 'ingredient',
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });
  return (

      <li
        ref={ref}
        className={styles.ingredient}
      >
        <Link
          to={{
            pathname: `/ingredients/${data._id}`,
            state: { background: location }
          }}
          className={styles.ingredient__link }
        >
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
        </Link>
      </li>

  );

};

export { IngredientCard };
